const AIKI_FORCE = {
    summary: "Aiki-Force es un sistema hibrido escalable orientado a defensa personal, control policial y respuesta civil. Parte del control, la gestion de distancia y la inmovilizacion; si la amenaza sube, escala a derribo, daño funcional y neutralizacion de emergencia.",
    useCases: [
        "Defensa personal civil",
        "Control policial y seguridad",
        "Proteccion de terceros",
        "Conduccion e inmovilizacion",
        "Respuesta en suelo",
        "Armas y amenazas de alta gravedad"
    ],
    principles: [
        {
            title: "ESCALADO PROPORCIONAL",
            description: "El sistema se inicia mediante la lectura del entorno, el manejo de la distancia y el control preventivo. El uso de la fuerza de impacto o daño solo se activa cuando el contexto legal lo legitima y las técnicas de control resultan insuficientes."
        },
        {
            title: "CONTROL DEL EJE",
            description: "Toda acción técnica tiene como prioridad el desequilibrio (Kuzushi). Se busca romper la postura del agresor, alineando su cadera y hombros fuera de su centro de gravedad, mientras se preserva la base y estabilidad propia en todo momento."
        },
        {
            title: "PRESIÓN REALISTA",
            description: "La técnica debe ser funcional bajo condiciones críticas. El entrenamiento se valida mediante la resistencia activa, la fatiga extrema, el factor sorpresa y la toma de decisiones bajo altos niveles de estrés físico y mental."
        },
        {
            title: "SIMPLICIDAD OPERATIVA",
            description: "Se priorizan respuestas universales. El objetivo es utilizar mecánicas de movimiento similares para diferentes tipos de agresión, reduciendo el tiempo de reacción y permitiendo resolver más escenarios con un menor número de patrones motores."
        }
    ],
    escalation: [
        {
            title: "Prevenir",
            description: "Mantener distancia, leer la intencion y evitar que el agresor entre limpio."
        },
        {
            title: "Entrar y cubrir",
            description: "Protegerse, entrar con angulo y frenar el primer ataque."
        },
        {
            title: "Controlar",
            description: "Fijar brazo, cabeza o cuerpo para dominar sin dañar mas de lo necesario."
        },
        {
            title: "Reducir",
            description: "Derribar o llevar al suelo si el control de pie no basta."
        },
        {
            title: "Neutralizar",
            description: "Usar golpeo funcional solo si la agresion sube y hay peligro real."
        },
        {
            title: "Sobrevivir a armas",
            description: "Protocolos de ultimo recurso frente a cuchillo, baston o arma de fuego."
        }
    ],
    filters: [
        "impacto",
        "control",
        "proyeccion",
        "suelo",
        "estrangulacion",
        "armas",
        "policial"
    ],
    syllabus: [
        {
            title: "Golpes con la parte superior del cuerpo",
            description: "Impacto corto y funcional para abrir espacio, romper equilibrio o cortar la agresion.",
            tags: ["impacto"],
            items: [
                {
                    name: "Directo de izquierda y derecho",
                    description: "Golpe recto y rapido con el puño, dirigido al rostro o torso del oponente."
                },
                {
                    name: "Croche derecho e izquierdo",
                    description: "Golpe curvo con el puño, dirigido a los costados o rostro del oponente."
                },
                {
                    name: "Uppercut derecho e izquierdo",
                    description: "Golpe ascendente con el puño, dirigido al menton o torso del oponente."
                },
                {
                    name: "Codazos",
                    details: [
                        "Frontal: golpe directo con el codo hacia adelante, dirigido al rostro o torso.",
                        "Lateral recto: golpe con el codo hacia los costados, ideal para combate cerrado.",
                        "Lateral: movimiento curvo con el codo hacia los lados, buscando costillas u otras zonas vulnerables.",
                        "Hacia atras: golpe con el codo hacia atras para defensa desde retaguardia.",
                        "De arriba a abajo: golpe descendente dirigido al rostro o clavicula."
                    ]
                },
                {
                    name: "Picahielo con dedos",
                    details: [
                        "Golpe rapido y preciso con los dedos a puntos sensibles como cuello u ojos."
                    ]
                },
                {
                    name: "Golpes de martillo",
                    details: [
                        "Frontal: golpe con puño cerrado en movimiento descendente al rostro o torso.",
                        "Lateral: golpe hacia los costados buscando costillas o zonas vulnerables.",
                        "Trasero: golpe hacia atras para defensa en retaguardia.",
                        "De arriba a abajo: golpe descendente dirigido al rostro o clavicula."
                    ]
                }
            ]
        },
        {
            title: "Golpes con las piernas",
            description: "Armas de media y larga distancia para frenado, desestabilizacion y castigo funcional.",
            tags: ["impacto"],
            items: [
                {
                    name: "Mae Geri",
                    description: "Patada frontal directa y rapida hacia torso o rostro."
                },
                {
                    name: "Mawashi Geri",
                    description: "Patada circular al torso, costillas o cabeza con giro de cadera."
                },
                {
                    name: "Mae Hiza Geri",
                    description: "Rodillazo frontal al torso, abdomen o rostro para combate cercano."
                },
                {
                    name: "Yoko Geri",
                    description: "Patada lateral dirigida a costillas, torso o cabeza."
                },
                {
                    name: "Mawashi Hiza Geri",
                    description: "Golpe circular con la rodilla a abdomen o costado."
                },
                {
                    name: "Ushiro Geri",
                    description: "Patada trasera al torso o abdomen de un atacante que entra por retaguardia."
                }
            ]
        },
        {
            title: "Tecnicas de control",
            description: "Base de inmovilizacion y conduccion propia del componente aiki y policial del sistema.",
            tags: ["control", "policial"],
            items: [
                { name: "Ikkyo", description: "Control del brazo mediante palanca hacia abajo para inmovilizar con seguridad." },
                { name: "Nikyo", description: "Luxacion de muñeca que fuerza al oponente a bajar al suelo." },
                { name: "Sankyo", description: "Rotacion de la muñeca hacia un angulo no natural para inmovilizar con dolor controlado." },
                { name: "Gokyo", description: "Luxacion avanzada que dirige el brazo hacia el suelo manteniendo equilibrio y control." },
                { name: "Kokyonage", description: "Proyeccion basada en desequilibrio y flujo del movimiento." },
                { name: "Sumiotoshi", description: "Proyeccion descendente que desestabiliza y lleva al oponente al suelo." },
                { name: "Tenchinage", description: "Movimiento circular con control de brazos para romper estructura y proyectar." },
                { name: "Yonkyo", description: "Presion sobre el nervio radial para inmovilizacion y dolor controlado." },
                { name: "Udekimenage", description: "Palanca de brazo para lanzar hacia adelante o al suelo." },
                { name: "Hijikimeosae", description: "Inmovilizacion del codo mediante presion y control total del brazo." },
                { name: "Uchi Kaiten Sankyo", description: "Rotacion interna que controla muñeca y brazo y entra a inmovilizacion." },
                { name: "Ushiro Kiri Otoshi", description: "Movimiento descendente desde retaguardia para proyectar desde la espalda." },
                { name: "Iriminage", description: "Entrada directa para desestabilizar y proyectar al suelo." }
            ]
        },
        {
            title: "Tecnicas de proyeccion y llaves",
            description: "Transicion entre control articular y derribo en un formato funcional.",
            tags: ["control", "proyeccion"],
            items: [
                { name: "Shihonage", description: "Proyeccion en cuatro direcciones usando control de brazo y movimiento circular." },
                { name: "Ude Garami", description: "Llave cruzada que aplica presion sobre codo u hombro." },
                { name: "Ude Gatame", description: "Bloqueo y control del brazo extendiendolo con presion sobre el codo." },
                { name: "Kote Gaeshi", description: "Giro de muñeca en angulo no natural para proyectar y neutralizar." },
                { name: "Ude Osae", description: "Inmovilizacion del brazo aplicando presion para cortar movilidad rapidamente." }
            ]
        },
        {
            title: "Proyecciones y derribos con barridos",
            description: "Opciones de reduccion que combinan ruptura de equilibrio, barrido y direccion del torso.",
            tags: ["proyeccion"],
            items: [
                { name: "Ko Soto Gari", description: "Pequeña barrida exterior desequilibrando hacia atras." },
                { name: "Uchi Mata", description: "Proyeccion interior del muslo con giro de cadera y control de brazos." },
                { name: "Hiza Guruma", description: "La rodilla actua como eje mientras se tira del oponente hacia adelante." },
                { name: "Harai Goshi", description: "Barrido de cadera para elevar y barrer una pierna del atacante." },
                { name: "O Soto Otoshi", description: "Gran caida exterior con barrido y traccion posterior." },
                { name: "O Soto Gari", description: "Gran barrida exterior controlando la parte superior del cuerpo." },
                { name: "O Uchi Gari", description: "Gran barrida interior empujando la parte superior hacia atras." }
            ]
        },
        {
            title: "Proyecciones con cuerpo y levantamientos",
            description: "Mecanicas de carga y giro para escenarios de alta resistencia o entrada comprometida.",
            tags: ["proyeccion"],
            items: [
                { name: "Tai Otoshi", description: "Proyeccion de cuerpo usando el propio cuerpo como palanca." },
                { name: "Morote Seoi Nage", description: "Proyeccion de dos brazos cargando al oponente sobre la espalda." },
                { name: "Ura Nage", description: "Proyeccion inversa que usa el impulso del atacante para lanzarlo hacia atras." }
            ]
        },
        {
            title: "Tecnicas de agarre y barrido con apoyo",
            description: "Entradas de derribo con trabajo de piernas y agarre coordinado.",
            tags: ["proyeccion"],
            items: [
                { name: "Sasae Tsuri Komi Ashi", description: "Barrido del pie con apoyo tirando al oponente hacia adelante." },
                { name: "Morote Gari", description: "Doble agarre a las piernas para desequilibrar hacia atras." }
            ]
        },
        {
            title: "Tecnicas de estrangulacion",
            description: "Herramientas de control extremo y finalizacion, reservadas a escenarios de alta gravedad.",
            tags: ["estrangulacion", "suelo"],
            note: "Estas tecnicas deben entrenarse con maxima supervision, protocolos de seguridad estrictos y marco legal claro.",
            items: [
                { name: "Kata Juji Jime", description: "Estrangulacion en cruz con ambas manos aplicando presion a los lados del cuello." },
                { name: "Hadaka Jime", description: "Estrangulacion desnuda con el brazo desde posicion trasera." },
                { name: "Kata Te Jime", description: "Estrangulacion con una mano mientras la otra asegura equilibrio y control." },
                { name: "Tsukkomi Jime", description: "Empuje sobre el cuello con manos o implementos desde el frente." },
                { name: "Nami Juji Jime", description: "Estrangulacion cruzada normal cortando aire o sangre." },
                { name: "Gyaku Juji Jime", description: "Estrangulacion cruzada invertida en direccion opuesta." }
            ]
        },
        {
            title: "Tecnicas de inmovilizacion",
            description: "Control de suelo para mantener dominio, fijar extremidades y preparar engrilletamiento.",
            tags: ["suelo", "policial"],
            items: [
                { name: "Hon Kesa Gatame", description: "Control fundamental en escarpe usando brazo y torso para sujetar cuello o cabeza." },
                { name: "Hara Gatame", description: "Control abdominal usando peso corporal para someter en suelo." },
                { name: "Juji Gatame", description: "Llave de brazo en cruz realizada en el suelo con las piernas como palanca." },
                { name: "Yoko Shiho Gatame", description: "Control lateral de cuatro puntos bloqueando torso y cabeza." }
            ]
        },
        {
            title: "Defensa en situaciones de estrangulamiento",
            description: "Respuestas contra agarres al cuello, candados y presiones en pie o en transicion.",
            tags: ["control", "impacto"],
            items: [
                {
                    name: "Estrangulamiento por delante de pie",
                    details: [
                        "Defensa con pincho en cuello al agresor.",
                        "Defensa con agarre de mano al agresor y golpe directo.",
                        "Defensa con agarre de mano al agresor y cruce de codo rompiendo."
                    ]
                },
                { name: "Estrangulamiento lateral", description: "Defensa contra estrangulamiento lateral." },
                { name: "Estrangulamiento desde atras en movimiento", description: "Defensa contra estrangulamiento desde atras mientras se esta en movimiento." },
                {
                    name: "Agarre de cuello desde lateral en posicion de presa",
                    details: [
                        "Escapada antes de cierre.",
                        "Escapada despues de cierre impactando con manos en genitales y cara.",
                        "Escapada despues de cierre impactando con manos en cara y tiron."
                    ]
                }
            ]
        },
        {
            title: "Estrangulamientos en suelo y defensas asociadas",
            description: "Respuestas de emergencia cuando el agresor estrangula desde rodillas, montada o superioridad posicional.",
            tags: ["suelo", "control"],
            items: [
                {
                    name: "Agresor de rodillas junto al agredido tumbado",
                    details: [
                        "Defensa usando pelvis.",
                        "Defensa usando golpe a costilla flotante.",
                        "Defensa usando agarre de mano, golpe directo y pelvis.",
                        "Barrido de manos."
                    ]
                },
                {
                    name: "Agresor sobre el agredido en el suelo",
                    details: [
                        "Defensa usando pelvis.",
                        "Defensa usando golpe a costilla flotante.",
                        "Defensa usando agarre de mano, golpe directo y pelvis.",
                        "Barrido de manos."
                    ]
                },
                {
                    name: "Agresor de rodillas entre las piernas lanzando directos",
                    details: [
                        "Defensa contra golpes directos desde esta posicion."
                    ]
                },
                {
                    name: "Defensas de estrangulamiento complementarias",
                    details: [
                        "Estrangulamiento delantero con empujon.",
                        "Estrangulamiento trasero con empujon.",
                        "Estrangulamiento trasero con arrastre y suelta en helicoptero.",
                        "Estrangulamiento delantero contra pared con patada en genitales.",
                        "Estrangulamiento trasero en candado.",
                        "Estrangulamiento en guillotina invertida.",
                        "Estrangulamiento contra la pared con golpeo a genitales."
                    ]
                }
            ]
        },
        {
            title: "Escapadas ante abrazo del oso y agarres de control",
            description: "Salidas contra abrazos, alzadas, agarres de pelo y candados cerrados.",
            tags: ["control"],
            items: [
                {
                    name: "Abrazo del oso con brazos libres",
                    details: [
                        "Desde delante: cara del agresor al pecho y agarre por lumbares.",
                        "Desde delante: cara a cara con el agresor.",
                        "Desde delante: cara del agresor en nuestro hombro.",
                        "Desde delante: cara en costillas.",
                        "Escapada antes de cierre de brazos por parte del agresor.",
                        "Desde atras: agarre con desplazamiento."
                    ]
                },
                {
                    name: "Abrazo del oso con brazos atrapados",
                    details: [
                        "Desde delante: golpe en genitales y, con brazo libre, golpeo a cara.",
                        "Desde delante: golpe en genitales y, con ambas manos, golpe a riñones.",
                        "Desde atras: defensa ante agarre al pecho.",
                        "Desde atras: defensa ante agarre a codos.",
                        "Desde atras: defensa ante agarre a cintura."
                    ]
                },
                {
                    name: "Agarre de cuello en candado saliendo por exterior",
                    details: [
                        "Suelta de manos, golpeo en genitales y posterior golpeos a cara.",
                        "Suelta de manos, golpeo en genitales, giro exterior, patada y posterior derribo del agresor."
                    ]
                },
                {
                    name: "Suelta de agarre del oso con alzada",
                    details: [
                        "Con brazos sueltos por delante.",
                        "Con brazos sueltos por detras.",
                        "Con brazos sujetos por delante.",
                        "Con brazos sujetos por detras."
                    ]
                },
                {
                    name: "Suelta de agarre de pelo con arrastre",
                    details: [
                        "Por delante.",
                        "Por detras.",
                        "Desde el lateral."
                    ]
                }
            ]
        },
        {
            title: "Suelo: defensas, escapadas y tecnicas",
            description: "Bloque de movilidad, levantadas, barridos y defensa desde posiciones desfavorables.",
            tags: ["suelo"],
            items: [
                {
                    name: "Defensa contra estrangulamiento en suelo",
                    details: [
                        "Agredido boca abajo y el agresor encima.",
                        "Agredido boca arriba y el agresor encima."
                    ]
                },
                {
                    name: "Distintas formas de levantarse del suelo",
                    details: [
                        "Levantarse en el mismo sitio.",
                        "Levantarse hacia delante.",
                        "Levantarse hacia atras."
                    ]
                },
                {
                    name: "Defensas en suelo",
                    details: [
                        "Movimientos en suelo en todas las direcciones.",
                        "Con agresor de pie, defensa desde posicion horizontal."
                    ]
                },
                {
                    name: "Escapada de agarre lateral al cuello en suelo",
                    details: [
                        "Con brazo por dentro.",
                        "Con brazo por fuera."
                    ]
                },
                {
                    name: "Tecnicas de suelo",
                    details: [
                        "Montada con agarre de michelin.",
                        "Montada con estrangulacion, suelta de mano y posterior golpeo.",
                        "Montada, golpe al higado.",
                        "Barrido de mano.",
                        "Cruce de manos y posterior golpeo.",
                        "Entrada interior de brazos y posterior agarre."
                    ]
                },
                {
                    name: "Defensa desde el suelo",
                    details: [
                        "Agresor sentado encima atacando con puños.",
                        "Agresor de pie lanzando patada sobre la cabeza.",
                        "Defensa desde el suelo contra ataques varios con cuchillo o palo.",
                        "Todas las defensas en suelo."
                    ]
                }
            ]
        },
        {
            title: "Palo y baston",
            description: "Defensa, desarme, ataque y uso de baston en escenarios de impacto o estrangulacion.",
            tags: ["armas"],
            note: "Las respuestas ante armas deben plantearse como ultimo recurso y entrenarse con proteccion, control de velocidad y doctrina clara de escape.",
            items: [
                {
                    name: "Defensa de palo o baston",
                    details: [
                        "Ataque a la cabeza.",
                        "Ataque a media altura.",
                        "Ataque a piernas.",
                        "Golpeo lateral.",
                        "Desarme metodo tradicional.",
                        "Desarme por debajo de brazo.",
                        "Esquivando golpeo y parada con antebrazo.",
                        "Ataque a dos manos tipo beisbol.",
                        "Ataque con esquiva ida y vuelta.",
                        "Ataque frontal con dos manos.",
                        "Salida con pierna.",
                        "Mano y derribo.",
                        "Placaje."
                    ]
                },
                {
                    name: "Tecnicas de baston",
                    details: [
                        "Estrangulamiento de pie lateral con baston.",
                        "Estrangulamiento sobre cuerpo con baston.",
                        "Estrangulamiento lateral en suelo con baston.",
                        "Estrangulamiento trasero en suelo con baston.",
                        "Estrangulamiento lateral.",
                        "Estrangulamiento en montada.",
                        "Estrangulamiento lateral en suelo."
                    ]
                },
                {
                    name: "Ataques de baston",
                    details: [
                        "El agresor viene por el lateral.",
                        "Ataque frontal golpeando barriga.",
                        "Ataque frontal golpeando la tibia.",
                        "Ataque frontal ida y vuelta con esquiva."
                    ]
                },
                {
                    name: "Ataque de palo en estocada",
                    details: [
                        "Defensa desde el exterior.",
                        "Defensa desde el interior."
                    ]
                },
                {
                    name: "Defensa contra colocacion de baston",
                    details: [
                        "Baston horizontal en el cuello desde espalda y frontal.",
                        "Baston horizontal en el pecho desde espalda y frontal."
                    ]
                }
            ]
        },
        {
            title: "Cuchillo",
            description: "Bloque de ataques, amenazas y defensas frente a cuchillo en pie y suelo.",
            tags: ["armas"],
            note: "En escenarios reales la prioridad es huir, usar obstaculos y proteger a terceros. Las tecnicas solo cubren casos de no escape.",
            items: [
                {
                    name: "Ataques de cuchillo",
                    details: [
                        "Ataque en picahielo.",
                        "Ataque oriental.",
                        "Ataque con estocada."
                    ]
                },
                {
                    name: "Amenazas de cuchillo",
                    details: [
                        "A oreja.",
                        "A la nuez.",
                        "Por detras a la nuca.",
                        "Por detras a cuello.",
                        "En estomago.",
                        "Lateral a riñon por delante y detras de brazo.",
                        "Por la espalda."
                    ]
                },
                {
                    name: "Defensa de cuchillo",
                    details: [
                        "Agresor se aproxima desde distancia con el arma.",
                        "Defensa con patada al pecho o cara.",
                        "Desplazamiento lateral al lado opuesto al arma y patada lateral al pecho.",
                        "Defensa de cuchillo en estocada a la barriga.",
                        "Cuchillo por lateral de abajo hacia arriba con paso atras y parada con antebrazos.",
                        "Cuchillo recto a pecho con antebrazo, control del brazo y desarme.",
                        "Defensa contra cuchillo al pecho con guardia cambiada.",
                        "Cuchillo recto a pecho con antebrazo, derribo y posterior control.",
                        "Ataque cuchillo ida y vuelta.",
                        "Ataque de cuchillo a barriga ida y vuelta.",
                        "Ataque de cuchillo en Z.",
                        "Ataque ascendente con cuchillo, picahielo u oriental."
                    ]
                },
                {
                    name: "Ataques complejos con cuchillo",
                    details: [
                        "Doble cuchillada a barriga ida y vuelta.",
                        "Doble cuchillada a cuello ida y vuelta.",
                        "Ataque frontal en estocada y repeticion dentro o fuera.",
                        "Agresor corriendo con cuchillo en picahielo; escapada a ambos lados.",
                        "Agresor corriendo con cuchillada oriental.",
                        "Todos los ataques de cinto verde."
                    ]
                },
                {
                    name: "Amenaza de cuchillo en el suelo",
                    details: [
                        "Agresor en lateral.",
                        "Agresor en montada.",
                        "Agresor sobre espalda."
                    ]
                },
                {
                    name: "Defensa contra ataques de cuchillo",
                    details: [
                        "Ataque al abdomen.",
                        "Ataque a la espalda.",
                        "Ataque al lateral en ambos lados.",
                        "Victima en el suelo y agresor de pie.",
                        "Victima en el suelo y agresor encima.",
                        "Victima de rodillas y agresor de pie.",
                        "Todas las tecnicas vistas hasta azul."
                    ]
                },
                {
                    name: "Combinacion defensa de cuchillo",
                    details: [
                        "Picahielo y posterior corte a cuello.",
                        "Ataque oriental y posterior ataque a pecho.",
                        "Amenaza de cuchillo a clavicula."
                    ]
                }
            ]
        },
        {
            title: "Arma de fuego y arma larga",
            description: "Desarmes y salidas frente a pistola y estocada de escopeta.",
            tags: ["armas"],
            note: "Contenido de altisimo riesgo. Mantenerlo como modulo avanzado, con enfasis en oportunidad, desviacion y supervivencia, no en garantia.",
            items: [
                {
                    name: "Desarme de pistola",
                    details: [
                        "La pistola apunta a la frente.",
                        "La pistola apunta al pecho.",
                        "La pistola apunta al estomago.",
                        "La pistola apunta a la sien desde el lateral.",
                        "La pistola apunta a la espalda desde detras."
                    ]
                },
                {
                    name: "Defensa contra estocada de escopeta",
                    details: [
                        "Salida desde el interior.",
                        "Salida desde el exterior."
                    ]
                },
                {
                    name: "Amenaza de cuchillo y pistola en el suelo",
                    details: [
                        "Amenaza de cuchillo con el agredido de rodillas y agresor de pie.",
                        "Defensa de amenaza de cuchillo desde cuatro puntos cardinales.",
                        "Amenaza de pistola con el agredido de rodillas y agresor de pie.",
                        "Defensa de amenaza de pistola desde cuatro puntos cardinales."
                    ]
                }
            ]
        },
        {
            title: "Proteccion VIP y defensas variadas",
            description: "Intervencion sobre terceros, controles especiales y respuestas a agresiones menos convencionales.",
            tags: ["control", "policial"],
            items: [
                {
                    name: "Proteccion VIP",
                    details: [
                        "Amenaza al VIP desde el frente con cuchillo.",
                        "Amenaza al VIP por detras con cuchillo en la espalda.",
                        "Amenaza al VIP por detras con cuchillo en cuello.",
                        "Amenaza al VIP desde el frente con pistola.",
                        "Amenaza al VIP por detras con pistola en la espalda."
                    ]
                },
                {
                    name: "Defensas variadas",
                    details: [
                        "Defensa contra mataleon.",
                        "Defensa contra guillotina invertida.",
                        "Defensa contra llave Nelson.",
                        "Defensa contra posicion 100 kg con salida con pierna y posterior golpeo de puños.",
                        "Defensa contra posicion 100 kg con salida con rodilla y golpeo en cabeza.",
                        "Defensa contra cabezazo sin agarre.",
                        "Defensa contra cabezazo con agarre de ropa."
                    ]
                }
            ]
        },
        {
            title: "Engrilletamiento y control policial",
            description: "Procedimientos de esposamiento y conduccion pensados para contexto operativo y uso proporcional de la fuerza.",
            tags: ["policial", "control"],
            items: [
                {
                    name: "Engrilletamiento frontal",
                    details: [
                        "Control basico con manos por delante del cuerpo para cooperacion o amenaza reducida.",
                        "Asegurar posicion estable y controlada antes de colocar esposas.",
                        "Mantener postura defensiva y evitar ajuste excesivo para no lesionar."
                    ]
                },
                {
                    name: "Engrilletamiento trasero",
                    details: [
                        "Inmovilizacion de las manos detras de la espalda para mayor seguridad.",
                        "Ordenar la posicion, mantener control fisico y verificar ajuste correcto."
                    ]
                },
                {
                    name: "Engrilletamiento en el suelo",
                    details: [
                        "Controlar extremidades para evitar resistencia.",
                        "Usar rodilla sobre espalda o piernas para inmovilizar.",
                        "Engrilletar manteniendo control continuo."
                    ]
                },
                {
                    name: "Engrilletamiento con desplazamiento",
                    details: [
                        "Mover al agresor a posicion segura mientras se mantiene agarre firme del brazo.",
                        "Colocar esposas evitando que desequilibre o recupere iniciativa."
                    ]
                },
                {
                    name: "Engrilletamiento en alta resistencia",
                    details: [
                        "Uso de presion sobre muñecas o codos para reducir resistencia.",
                        "Inmovilizacion previa en suelo antes del esposamiento.",
                        "Control fisico constante para reducir riesgo de lesion y fuga."
                    ]
                },
                {
                    name: "Engrilletamiento en grupo",
                    details: [
                        "Asignar roles claros: control de extremidades, colocacion de esposas y vigilancia.",
                        "Priorizar a los agresores mas peligrosos."
                    ]
                }
            ]
        }
    ]
};