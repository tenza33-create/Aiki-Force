const state = {
    search: "",
    tag: "todos"
};

const principlesGrid = document.getElementById("principles-grid");
const escalationList = document.getElementById("escalation-list");
const systemSummary = document.getElementById("system-summary");
const useCasesList = document.getElementById("use-cases");
const syllabusGrid = document.getElementById("syllabus-grid");
const searchInput = document.getElementById("search-input");
const filterChips = document.getElementById("filter-chips");
const backgroundRotator = document.getElementById("background-rotator");
const autoplayVideos = Array.from(document.querySelectorAll("[data-autoplay-video]"));

const BACKGROUND_IMAGES = [
    "fotos-fondo/388161_247532985366392_1434852674_n.jpg",
    "fotos-fondo/4kd_atac_tecnica01.webp",
    "fotos-fondo/DPP-Hikari_01.jpg",
    "fotos-fondo/OIP.webp"
];

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
                <button class="chip ${tag === state.tag ? "active" : ""}" type="button" data-tag="${tag}">
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

function renderSyllabus() {
    const normalizedSearch = normalizeText(state.search.trim());

    const visibleSections = AIKI_FORCE.syllabus.filter((section) => {
        const matchesTag = state.tag === "todos" || section.tags.includes(state.tag);
        return matchesTag && sectionMatches(section, normalizedSearch);
    });

    syllabusGrid.innerHTML = visibleSections
        .map((section) => {
            const techniques = section.items
                .map((item) => {
                    const details = item.details?.length
                        ? `<ul class="technique-sublist">${item.details.map((detail) => `<li>${detail}</li>`).join("")}</ul>`
                        : "";

                    return `
                        <li class="technique-item">
                            <p class="technique-title">${item.name}</p>
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
                        ${section.tags.map((tag) => `<li class="meta-pill">${tag}</li>`).join("")}
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

renderPrinciples();
renderEscalation();
renderIdentity();
createFilterChips();
renderSyllabus();
setupBackgroundRotator();
setupAutoplayVideos();