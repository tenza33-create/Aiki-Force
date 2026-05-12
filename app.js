const state = {
    search: "",
    tag: "todos",
    order: "progresion"
};

const principlesGrid = document.getElementById("principles-grid");
const escalationList = document.getElementById("escalation-list");
const systemSummary = document.getElementById("system-summary");
const useCasesList = document.getElementById("use-cases");
const syllabusGrid = document.getElementById("syllabus-grid");
const searchInput = document.getElementById("search-input");
const orderSelect = document.getElementById("order-select");
const filterChips = document.getElementById("filter-chips");
const backgroundRotator = document.getElementById("background-rotator");
const autoplayVideos = Array.from(document.querySelectorAll("[data-autoplay-video]"));
const vipOpenButton = document.getElementById("vip-open");
const vipModal = document.getElementById("vip-modal");
const vipForm = document.getElementById("vip-form");
const vipPasswordInput = document.getElementById("vip-password");
const vipFeedback = document.getElementById("vip-feedback");
const vipCancelButton = document.getElementById("vip-cancel");
const vipOffButton = document.getElementById("vip-off");
const vipSection = document.getElementById("vip-zone");
const vipTabs = Array.from(document.querySelectorAll("[data-vip-tab]"));
const vipPanels = Array.from(document.querySelectorAll("[data-vip-panel]"));

const VIP_PASSWORD = "135090";
const VIP_STORAGE_KEY = "aiki_force_vip_unlocked";
const TECHNIQUE_VIDEO_LINKS = {
    "Directo de izquierda y derecho": "https://www.youtube.com/results?search_query=directo+de+izquierda+y+derecho+boxeo+tecnica",
    "Croche derecho e izquierdo": "https://www.youtube.com/results?search_query=crochet+derecho+e+izquierdo+tecnica",
    "Uppercut derecho e izquierdo": "https://www.youtube.com/results?search_query=uppercut+derecho+e+izquierdo+tecnica",
    Codazos: "https://www.youtube.com/results?search_query=codazos+tecnicas+defensa+personal",
    "Picahielo con dedos": "https://www.youtube.com/results?search_query=ataque+picahielo+con+dedos+defensa+personal",
    "Golpes de martillo": "https://www.youtube.com/results?search_query=hammerfist+golpe+de+martillo+tecnica",
    "Kata Juji Jime": "https://www.youtube.com/watch?v=3VZVUAmiMD8&t=51s",
    "Engrilletamiento trasero": "https://www.youtube.com/watch?v=P9wswED0uEY"
};

const BACKGROUND_IMAGES = [
    "fotos-fondo/388161_247532985366392_1434852674_n.jpg",
    "fotos-fondo/4kd_atac_tecnica01.webp",
    "fotos-fondo/DPP-Hikari_01.jpg",
    "fotos-fondo/OIP.webp"
];

const PROGRESSION_ORDER = [
    "Golpes con la parte superior del cuerpo",
    "Golpes con las piernas",
    "Tecnicas de control",
    "Tecnicas de proyeccion y llaves",
    "Proyecciones y derribos con barridos",
    "Proyecciones con cuerpo y levantamientos",
    "Tecnicas de agarre y barrido con apoyo",
    "Defensa en situaciones de estrangulamiento",
    "Escapadas ante abrazo del oso y agarres de control",
    "Suelo: defensas, escapadas y tecnicas",
    "Tecnicas de inmovilizacion",
    "Estrangulamientos en suelo y defensas asociadas",
    "Tecnicas de estrangulacion",
    "Palo y baston",
    "Cuchillo",
    "Arma de fuego y arma larga",
    "Proteccion VIP y defensas variadas",
    "Engrilletamiento y control policial"
];

const PROGRESSION_INDEX = new Map(PROGRESSION_ORDER.map((title, index) => [title, index]));

async function loadImage(url) {
    return new Promise((resolve) => {
        const image = new Image();
        image.onload = () => resolve(url);
        image.onerror = () => resolve(null);
        image.src = url;
    });
}

async function setupBackgroundRotator() {
    const loadedImages = (await Promise.all(BACKGROUND_IMAGES.map(loadImage))).filter(Boolean);

    if (!loadedImages.length) {
        return;
    }

    backgroundRotator.innerHTML = loadedImages
        .map(
            (url, index) => `
                <div
                    class="background-slide ${index === 0 ? "is-visible" : ""}"
                    style="background-image: url('${url}');"
                ></div>
            `
        )
        .join("");

    const slides = Array.from(backgroundRotator.querySelectorAll(".background-slide"));

    if (slides.length < 2) {
        return;
    }

    let currentIndex = 0;

    window.setInterval(() => {
        slides[currentIndex].classList.remove("is-visible");
        currentIndex = (currentIndex + 1) % slides.length;
        slides[currentIndex].classList.add("is-visible");
    }, 5000);
}

function setupAutoplayVideos() {
    if (!autoplayVideos.length) {
        return;
    }

    const visibleVideos = new Set();

    const playVideo = async (video) => {
        try {
            await video.play();
        } catch (_error) {
            video.controls = true;
        }
    };

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                const video = entry.target;

                if (entry.isIntersecting && !document.hidden) {
                    visibleVideos.add(video);
                    playVideo(video);
                    return;
                }

                visibleVideos.delete(video);
                video.pause();
            });
        },
        {
            threshold: 0.5
        }
    );

    autoplayVideos.forEach((video) => {
        video.muted = true;
        video.playsInline = true;
        video.addEventListener("error", () => {
            const fallback = video.parentElement?.querySelector("[data-video-fallback]");
            if (fallback) {
                fallback.hidden = false;
            }
        });
        video.addEventListener("loadeddata", () => {
            const fallback = video.parentElement?.querySelector("[data-video-fallback]");
            if (fallback) {
                fallback.hidden = true;
            }
        });
        observer.observe(video);
    });

    document.addEventListener("visibilitychange", () => {
        if (document.hidden) {
            visibleVideos.forEach((video) => video.pause());
            return;
        }

        visibleVideos.forEach((video) => {
            playVideo(video);
        });
    });
}

function setActiveVipTab(tabName) {
    vipTabs.forEach((tabButton) => {
        const isActive = tabButton.dataset.vipTab === tabName;
        tabButton.classList.toggle("active", isActive);
        tabButton.setAttribute("aria-selected", String(isActive));
    });

    vipPanels.forEach((panel) => {
        panel.hidden = panel.dataset.vipPanel !== tabName;
    });
}

function syncVipTrigger() {
    if (!vipOpenButton || !vipSection) {
        return;
    }

    const isUnlocked = !vipSection.classList.contains("is-locked");
    vipOpenButton.textContent = isUnlocked ? "Salir VIP" : "VIP";
}

function unlockVip() {
    if (!vipSection) {
        return;
    }

    vipSection.classList.remove("is-locked");
    syncVipTrigger();
    window.localStorage.setItem(VIP_STORAGE_KEY, "true");
    setActiveVipTab("aikido");
    vipSection.scrollIntoView({ behavior: "smooth", block: "start" });
}

function lockVip() {
    if (!vipSection) {
        return;
    }

    vipSection.classList.add("is-locked");
    syncVipTrigger();
    window.localStorage.removeItem(VIP_STORAGE_KEY);
    setActiveVipTab("aikido");
    vipOpenButton?.focus();
    vipOpenButton?.scrollIntoView({ behavior: "smooth", block: "center" });
}

function closeVipModal() {
    if (!vipModal) {
        return;
    }

    vipModal.hidden = true;
    vipFeedback.textContent = "";
    vipForm.reset();
}

function openVipModal() {
    if (!vipModal) {
        return;
    }

    vipModal.hidden = false;
    vipFeedback.textContent = "";
    vipPasswordInput.focus();
}

function setupVipAccess() {
    if (!vipOpenButton || !vipModal || !vipForm || !vipSection) {
        return;
    }

    const alreadyUnlocked = window.localStorage.getItem(VIP_STORAGE_KEY) === "true";
    if (alreadyUnlocked) {
        vipSection.classList.remove("is-locked");
    }
    syncVipTrigger();

    vipOpenButton.addEventListener("click", () => {
        if (!vipSection.classList.contains("is-locked")) {
            lockVip();
            return;
        }

        openVipModal();
    });

    vipCancelButton?.addEventListener("click", closeVipModal);
    vipOffButton?.addEventListener("click", lockVip);

    vipModal.addEventListener("click", (event) => {
        if (event.target === vipModal) {
            closeVipModal();
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && !vipModal.hidden) {
            closeVipModal();
        }
    });

    vipForm.addEventListener("submit", (event) => {
        event.preventDefault();

        if (vipPasswordInput.value.trim() === VIP_PASSWORD) {
            closeVipModal();
            unlockVip();
            return;
        }

        vipFeedback.textContent = "Contrasena incorrecta. Intentalo de nuevo.";
        vipPasswordInput.select();
    });

    vipTabs.forEach((tabButton) => {
        tabButton.addEventListener("click", () => {
            setActiveVipTab(tabButton.dataset.vipTab);
        });
    });
}

function renderPrinciples() {
    principlesGrid.innerHTML = AIKI_FORCE.principles
        .map(
            (principle, index) => `
                <article class="principle-card">
                    <span class="principle-index">0${index + 1}</span>
                    <h3>${principle.title}</h3>
                    <p>${principle.description}</p>
                </article>
            `
        )
        .join("");
}

function renderEscalation() {
    escalationList.innerHTML = AIKI_FORCE.escalation
        .map((step) => `<li><strong>${step.title}.</strong> ${step.description}</li>`)
        .join("");
}

function renderIdentity() {
    systemSummary.textContent = AIKI_FORCE.summary;
    useCasesList.innerHTML = AIKI_FORCE.useCases.map((item) => `<li>${item}</li>`).join("");
}

function createFilterChips() {
    const tags = ["todos", ...AIKI_FORCE.filters];

    filterChips.innerHTML = tags
        .map(
            (tag) => `
                <button class="chip ${getTagClass(tag)} ${tag === state.tag ? "active" : ""}" type="button" data-tag="${tag}">
                    ${tag}
                </button>
            `
        )
        .join("");

    filterChips.querySelectorAll("[data-tag]").forEach((button) => {
        button.addEventListener("click", () => {
            state.tag = button.dataset.tag;
            createFilterChips();
            renderSyllabus();
        });
    });
}

function normalizeText(value) {
    return value
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
}

function getTagClass(tag) {
    return `tag-${normalizeText(tag).replace(/\s+/g, "-")}`;
}

function sectionMatches(section, normalizedSearch) {
    if (!normalizedSearch) {
        return true;
    }

    const body = normalizeText(
        [
            section.title,
            section.description,
            section.note || "",
            ...section.items.flatMap((item) => [item.name, item.description || "", ...(item.details || [])])
        ].join(" ")
    );

    return body.includes(normalizedSearch);
}

function sortSyllabusSections(sections) {
    const sortedSections = [...sections];

    if (state.order === "alfabetico") {
        sortedSections.sort((a, b) => a.title.localeCompare(b.title, "es", { sensitivity: "base" }));
        return sortedSections;
    }

    if (state.order === "bloques") {
        sortedSections.sort((a, b) => {
            const bySize = b.items.length - a.items.length;
            if (bySize !== 0) {
                return bySize;
            }

            return a.title.localeCompare(b.title, "es", { sensitivity: "base" });
        });
        return sortedSections;
    }

    sortedSections.sort((a, b) => {
        const orderA = PROGRESSION_INDEX.get(a.title) ?? Number.MAX_SAFE_INTEGER;
        const orderB = PROGRESSION_INDEX.get(b.title) ?? Number.MAX_SAFE_INTEGER;

        if (orderA !== orderB) {
            return orderA - orderB;
        }

        return a.title.localeCompare(b.title, "es", { sensitivity: "base" });
    });

    return sortedSections;
}

function renderSyllabus() {
    const normalizedSearch = normalizeText(state.search.trim());

    const visibleSections = sortSyllabusSections(AIKI_FORCE.syllabus.filter((section) => {
        const matchesTag = state.tag === "todos" || section.tags.includes(state.tag);
        return matchesTag && sectionMatches(section, normalizedSearch);
    }));

    syllabusGrid.innerHTML = visibleSections
        .map((section) => {
            const techniques = section.items
                .map((item) => {
                    const details = item.details?.length
                        ? `<ul class="technique-sublist">${item.details.map((detail) => `<li>${detail}</li>`).join("")}</ul>`
                        : "";
                    const videoUrl = TECHNIQUE_VIDEO_LINKS[item.name];
                    const videoLink = videoUrl
                        ? `
                            <a
                                class="technique-video-link"
                                href="${videoUrl}"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Ver video de ${item.name}"
                                title="Ver enlace"
                            >
                                <svg class="technique-video-icon" viewBox="0 0 20 20" aria-hidden="true" focusable="false">
                                    <circle cx="10" cy="10" r="9" />
                                    <polygon points="8,6.5 8,13.5 13.5,10" />
                                </svg>
                                <span class="technique-video-text">Ver enlace</span>
                            </a>
                        `
                        : "";

                    return `
                        <li class="technique-item">
                            <p class="technique-title-row">
                                <span class="technique-title">${item.name}</span>
                                ${videoLink}
                            </p>
                            ${item.description ? `<p class="syllabus-description">${item.description}</p>` : ""}
                            ${details}
                        </li>
                    `;
                })
                .join("");

            return `
                <article class="syllabus-card">
                    <div class="syllabus-header">
                        <div>
                            <h3>${section.title}</h3>
                            <p class="syllabus-description">${section.description}</p>
                        </div>
                        <span class="meta-pill">${section.items.length} bloques</span>
                    </div>
                    <ul class="meta-list">
                        ${section.tags.map((tag) => `<li class="meta-pill ${getTagClass(tag)}">${tag}</li>`).join("")}
                    </ul>
                    ${section.note ? `<p class="section-note">${section.note}</p>` : ""}
                    <ul class="technique-list">
                        ${techniques}
                    </ul>
                </article>
            `;
        })
        .join("");

    if (!visibleSections.length) {
        syllabusGrid.innerHTML = `
            <article class="syllabus-card">
                <h3>Sin resultados</h3>
                <p class="syllabus-description">No hay coincidencias con la busqueda actual. Prueba con otro termino o cambia el filtro.</p>
            </article>
        `;
    }
}

searchInput.addEventListener("input", (event) => {
    state.search = event.target.value;
    renderSyllabus();
});

orderSelect?.addEventListener("change", (event) => {
    state.order = event.target.value;
    renderSyllabus();
});

renderPrinciples();
renderEscalation();
renderIdentity();
createFilterChips();
renderSyllabus();
setupBackgroundRotator();
setupAutoplayVideos();
setupVipAccess();