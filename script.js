// --- DATOS DE LOS JUEGOS ---
// Estructura escalable para añadir más materias, temas y preguntas.
let gameData = {}; // Ahora es un objeto vacío que se llenará al cargar

// --- Configuración de Supabase ---
const SUPABASE_URL = "https://bmrjpxovtnunvwqekwpf.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJtcmpweG92dG51bnZ3cWVrd3BmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODY2NjIxODQsImV4cCI6MjEwMjIzODE4NH0.4-i2xb9OQnLFdMAyOqMIQdkC1bm711BLecKbsMzU-1A";


// --- VARIABLES GLOBALES ---
const JUEGOS_DISPONIBLES = {
    sentenceScramble: {
        nombre: "Ordenar Frase",
        descripcion: "Reconstruye la oración haciendo clic en las palabras en el orden correcto.",
        icono: "📝"
    },
    matchingPairs: {
        nombre: "Encuentra la Pareja",
        descripcion: "Encuentra los pares correctos. Haz clic en una tarjeta de la izquierda y luego en su correspondiente de la derecha.",
        icono: "🃏"
    },
    findTheError: {
        nombre: "Encontrar el Error",
        descripcion: "Lee la oración con atención y haz clic sobre la palabra que creas que es incorrecta.",
        icono: "🔍"
    },
    basicOperations: {
        nombre: "Operaciones Básicas",
        descripcion: "Resuelve la operación matemática y escribe el resultado numérico en el campo de respuesta.",
        icono: "➕➖"
    },
    equationSolver: {
        nombre: "Ecuaciones Básicas",
        descripcion: "Calcula el valor de la incógnita en la ecuación y escribe la solución numérica.",
        icono: "➗"
    },
    numberSequence: {
        nombre: "Secuencias Numéricas",
        descripcion: "Analiza la secuencia de números, descubre el patrón y escribe el número que sigue.",
        icono: "🔢"
    },
    dragAndDropMatch: {
        nombre: "Arrastrar y Soltar",
        descripcion: "Arrastra cada elemento de la columna izquierda y suéltalo sobre su pareja correcta en la derecha.",
        icono: "🖐️"
    },
    numberOrder: {
        nombre: "Encuentra el Mayor o Menor",
        descripcion: "Arrastra los números de la izquierda y suéltalos en las casillas de la derecha para ordenarlos como se indica.",
        icono: "🔼"
    },
    rouletteVF: {
        nombre: "Ruleta",
        descripcion: "Gira la ruleta para obtener una respuesta y decide si la afirmación resultante es Verdadera o Falsa.",
        icono: "🎡"
    },
    memoryMatch: {
        nombre: "Memoriza",
        descripcion: "Encuentra las parejas de cartas. Voltea dos cartas para ver si coinciden.",
        icono: "🧠"
    },
    hangman: {
        nombre: "Ahorcado",
        descripcion: "Adivina la palabra oculta letra por letra antes de que se complete el dibujo.",
        icono: "🔤"
    },
    fillTheWord: {
        nombre: "Completar la Palabra",
        descripcion: "Lee la pista y escribe la palabra que falta en el espacio en blanco.",
        icono: "✍️"
    },
    buildFraction: {
        nombre: "Construye la Fracción",
        descripcion: "Selecciona e ilumina las partes de la figura para construir y representar la fracción indicada.",
        icono: "🧩"
    },
    secretCode: {
        nombre: "Código Secreto",
        descripcion: "Calcula operaciones o retos para descifrar la clave numérica y abrir la cerradura de seguridad.",
        icono: "🔐"
    },
    quickSelect: {
        nombre: "Selección Rápida",
        descripcion: "Elige velozmente la respuesta correcta entre varias opciones.",
        icono: "🎯"
    },
    combineLikeTerms: {
        nombre: "Combina Términos",
        descripcion: "Selecciona los términos semejantes de una expresión y simplifica el polinomio.",
        icono: "💥"
    },
    completeNotableProduct: {
        nombre: "Completa la Fórmula",
        descripcion: "Ordena las partes para construir correctamente un producto notable.",
        icono: "🧩"
    },
    pythagorasChallenge: {
        nombre: "Encuentra el Lado Perdido",
        descripcion: "Usa el teorema de Pitágoras para encontrar el lado que falta.",
        icono: "🚪"
    },
    combinationBuilder: {
        nombre: "Crea la Combinación",
        descripcion: "Elige los elementos que cumplen la condición indicada.",
        icono: "🧩"
    },
    growthPrediction: {
        nombre: "Predice el Crecimiento",
        descripcion: "Reconoce la secuencia y la gráfica de una función exponencial.",
        icono: "📈"
    },
    balanceScale: {
        nombre: "Equilibra la Balanza",
        descripcion: "Resuelve problemas de proporcionalidad para equilibrar la balanza interactiva.",
        icono: "⚖️"
    }
};
let esDocente = false;
let esAdmin = false; // Para futuras funciones de administrador
let esInvitado = false;
let nombreDocente = ''; // Nueva variable para guardar el nombre del docente
let grupoActual = null;
let infoEstudiante = null;
let gradoActual = null;
let materiaActual = null;
let temaActual = null;
let preguntaIndex = 0;

// --- ESTADO DE LA APLICACIÓN ---
const appState = {
    esDocente: false,
    esAdmin: false,
    esInvitado: false,
    nombreDocente: '',
    infoEstudiante: null,
    gradoActual: null,
    grupoActual: null,
    materiaActual: null,
    temaActual: null,
    preguntaIndex: 0,
};

let fraseUsuario = [];

// Objeto para almacenar las credenciales de los docentes
const teacherCredentials = {
    "camilo viloria": { password: "cvp", role: "teacher" },
    "laura rojas": { password: "lrp", role: "teacher" },
    "juan david suarez": { password: "jdsp", role: "teacher" },
    "monica gomez": { password: "mgp", role: "teacher" },
    "jose morales": { password: "kgb3312", role: "admin" }
};
let tiempoInicioJuego = 0;
let cronometroIntervalo = null;
let puntuacionActual = 0;
let preguntasIncorrectas = [];
let intentosRestantes = 3;

// --- ELEMENTOS DEL DOM ---
const pantallaBienvenida = document.getElementById('pantalla-bienvenida');
const pantallaPrincipal = document.getElementById('pantalla-principal');
const splashScreen = document.getElementById('splash-screen'); // Nuevo elemento para el splash screen
const seleccionRolEl = document.getElementById('seleccion-rol');
const countdownOverlay = document.getElementById('countdown-overlay');
const countdownNumber = document.getElementById('countdown-number');
const loginEstudianteEl = document.getElementById('login-estudiante');
const seleccionGradoContainerEl = document.getElementById('seleccion-grado-container');
const btnRolEstudiante = document.getElementById('btn-rol-estudiante');
const loginDocenteEl = document.getElementById('login-docente');
const btnRolDocente = document.getElementById('btn-rol-docente');
const gradoSeleccionadoEl = document.getElementById('grado-seleccionado');
const btnCambiarGrado = document.getElementById('btn-cambiar-grado');
const seleccionMateriaEl = document.getElementById('seleccion-materia');
const seleccionTemaEl = document.getElementById('seleccion-tema');
const seleccionJuegoEl = document.createElement('section'); // Nuevo elemento
seleccionJuegoEl.id = 'seleccion-juego';
seleccionJuegoEl.className = 'contenedor-seccion';
const contenedorJuegoEl = document.getElementById('contenedor-juego');
const panelDocenteEl = document.getElementById('panel-docente');
const pantallaCrearTemaEl = document.getElementById('pantalla-crear-tema');
const infoJuegoActualEl = document.getElementById('info-juego-actual');

// --- FUNCIONES DE INICIO ---
/** Muestra la pantalla de bienvenida con una animación inicial. */
function showSplashScreen() {
    splashScreen.style.display = 'flex'; // Asegura que el splash screen sea visible

    // La animación del título dura 3s. Después de eso, hacemos la transición.
    const splashDuration = 3000;

    setTimeout(() => {
        // El overlay se desvanece mientras el texto ya ha desaparecido
        setTimeout(() => {
            splashScreen.style.display = 'none';
            pantallaBienvenida.style.display = 'flex'; // Muestra la pantalla de bienvenida
            pantallaBienvenida.classList.add('anim-in'); // Anima la entrada de la pantalla de bienvenida
        }, 500); // Duración de la animación de fade-out
    }, splashDuration);
}

// --- FUNCIONES PRINCIPALES ---

/**
 * Inicia la aplicación al seleccionar un grado.
 * @param {string} grado - El grado seleccionado (ej: "6").
 */
async function iniciarApp(grado, grupo) {
    if (gradoActual) return; // Evitar re-animar si ya está seleccionado

    gradoActual = grado;
    grupoActual = grupo;
    if (esDocente) {
        gradoSeleccionadoEl.innerHTML = `${grado}° Grado`;
    } else {
        gradoSeleccionadoEl.innerHTML = `${grado}° Grado<br>Grupo ${grupo}`;
    }
    pantallaBienvenida.style.display = 'none';
    pantallaPrincipal.style.display = 'block';

    if (!pantallaPrincipal.style.display || pantallaPrincipal.style.display === 'none') {
        pantallaBienvenida.style.display = 'none';
        pantallaPrincipal.style.display = 'block';
    }
    mostrarSeleccionMateria();
    actualizarVisibilidadBotonGrupos(); // Mostrar el botón de grupos si es docente
}

/** Inicia la aplicación en modo invitado con el grado y grupo elegidos. */
function iniciarAppInvitado(grado, grupo) {
    gradoActual = grado;
    grupoActual = grupo;
    gradoSeleccionadoEl.innerHTML = `Modo Invitado<br>${grado}° Grado`;

    // Oculta la pantalla de bienvenida y muestra la principal
    pantallaBienvenida.style.display = 'none';
    pantallaPrincipal.style.display = 'block';

    // Oculta el botón "Cambiar Grado" que no es relevante para invitados
    document.getElementById('btn-cambiar-grado').style.display = 'none';

    mostrarSeleccionMateria();
    actualizarVisibilidadBotonGrupos(); // Ocultar (los invitados no tienen grupos)
}
/** Muestra la pantalla de selección de materia y oculta las demás. */
function mostrarSeleccionMateria() {
    seleccionMateriaEl.style.display = 'block';
    seleccionTemaEl.style.display = 'none';
    seleccionJuegoEl.style.display = 'none';
    contenedorJuegoEl.style.display = 'none';
    pantallaCrearTemaEl.style.display = 'none';
    panelDocenteEl.style.display = 'none';
    infoJuegoActualEl.style.display = 'none';

    // Actualizar materias disponibles según el grado actual
    document.querySelectorAll('.tarjeta-materia').forEach(tarjeta => {
        const materiaClave = tarjeta.dataset.materia;
        const nombreMateria = gameData[materiaClave] ? gameData[materiaClave].nombre : tarjeta.querySelector('h3').textContent.replace(' (Próximamente)', '');

        // Verificar si la materia tiene temas para el grado actual
        const temasMateria = gameData[materiaClave] ? Object.values(gameData[materiaClave].temas || {}) : [];
        const temasDisponibles = temasMateria.filter(t => !t.grado || t.grado === gradoActual || (Array.isArray(t.grado) && t.grado.includes(gradoActual)) || gradoActual === 'Invitado');

        if (temasDisponibles.length > 0) {
            tarjeta.classList.remove('disabled');
            tarjeta.innerHTML = `<h3>${nombreMateria}</h3>`;
        } else {
            tarjeta.classList.add('disabled');
            tarjeta.innerHTML = `<h3>${nombreMateria} <small>(Próximamente)</small></h3>`;
        }
    });

    // Añadir clase para animación de entrada
    seleccionMateriaEl.classList.add('anim-in');
}

/**
 * Muestra los temas disponibles para una materia.
 * @param {string} materia - La clave de la materia (ej: "ingles").
 */
async function mostrarSeleccionJuego(materia) {
    seleccionMateriaEl.classList.add('anim-out');

    setTimeout(() => {
        materiaActual = materia;
        seleccionJuegoEl.innerHTML = `
            <h2>Elige un tipo de juego</h2>
            <p class="subtitulo-seccion">Cada juego te ayuda a practicar de una forma diferente.</p>
        `;

        const gridJuegos = document.createElement('div');
        gridJuegos.className = 'grid-juegos';

        const temasMateria = Object.values(gameData[materia].temas || {});
        const temasDisponibles = temasMateria.filter(t => !t.grado || t.grado === gradoActual || (Array.isArray(t.grado) && t.grado.includes(gradoActual)) || gradoActual === 'Invitado');
        const tiposDeJuegoEnMateria = [...new Set(temasDisponibles.map(tema => tema.juego))];

        tiposDeJuegoEnMateria.forEach(claveJuego => {
            const juego = JUEGOS_DISPONIBLES[claveJuego];
            const tarjetaJuego = document.createElement('div');
            tarjetaJuego.className = 'tarjeta-juego';
            tarjetaJuego.innerHTML = `
                <span class="tarjeta-icono">${juego.icono}</span>
                <h3>${juego.nombre}</h3>
                <p>${juego.descripcion}</p>
            `;
            tarjetaJuego.addEventListener('click', () => mostrarTemas(materia, claveJuego));
            gridJuegos.appendChild(tarjetaJuego);
        });

        if (gradoActual !== 'Invitado') {
            Object.entries(JUEGOS_DISPONIBLES)
                .filter(([claveJuego]) => !tiposDeJuegoEnMateria.includes(claveJuego))
                .forEach(([claveJuego, juego]) => {
                    const tarjetaJuego = document.createElement('div');
                    tarjetaJuego.className = 'tarjeta-juego disabled';
                    tarjetaJuego.innerHTML = `
                        <span class="tarjeta-icono">${juego.icono}</span>
                        <h3>${juego.nombre}</h3>
                        <p>Próximamente disponible para este grado.</p>
                    `;
                    gridJuegos.appendChild(tarjetaJuego);
                });
        }

        seleccionJuegoEl.appendChild(gridJuegos);
        pantallaPrincipal.insertBefore(seleccionJuegoEl, seleccionTemaEl);

        seleccionMateriaEl.style.display = 'none';
        seleccionJuegoEl.style.display = 'block';
        seleccionTemaEl.style.display = 'none';
        contenedorJuegoEl.style.display = 'none'; // Oculta el contenedor del juego si estaba abierto
        panelDocenteEl.style.display = 'none';
        infoJuegoActualEl.style.display = 'none';

        seleccionMateriaEl.classList.remove('anim-out');
        seleccionJuegoEl.classList.add('anim-in');
    }, 400);
}

/**
 * Muestra los temas disponibles para una materia.
 * @param {string} materia - La clave de la materia (ej: "ingles").
 * @param {string} tipoJuego - La clave del tipo de juego (ej: "sentenceScramble").
 */
function mostrarTemas(materia, tipoJuego) {
    const temas = gameData[materia].temas;
    seleccionTemaEl.innerHTML = `
        <div class="seccion-header">
            <h2>Elige un tema de ${gameData[materia].nombre}</h2>
            <button id="btn-volver-a-juegos" class="btn-juego btn-volver">‹Volver</button>
        </div>`;

    const gridTemas = document.createElement('div');
    gridTemas.className = 'grid-temas';

    // Botón para crear un nuevo tema (solo para docentes)
    if (esDocente) {
        const tarjetaCrear = document.createElement('div');
        tarjetaCrear.className = 'tarjeta-tema btn-crear-tema';
        tarjetaCrear.innerHTML = `<h3>+ Crear Tema</h3>`;
        tarjetaCrear.addEventListener('click', () => mostrarFormularioCreacion(tipoJuego));
        gridTemas.appendChild(tarjetaCrear);
    }

    // Función para crear los botones de control del docente
    function crearControlesDocente(claveTema, tipoJuego) {
        const controlesDiv = document.createElement('div');
        controlesDiv.className = 'tarjeta-tema-controles';
        controlesDiv.innerHTML = `
            <button class="btn-control-tema btn-editar" data-tema="${claveTema}" title="Editar Tema">✏️</button>
        `;
        controlesDiv.querySelector('.btn-editar').addEventListener('click', (e) => { e.stopPropagation(); mostrarFormularioCreacion(tipoJuego, claveTema); });
        return controlesDiv;
    }


    for (const claveTema in temas) {
        const tema = temas[claveTema];
        const perteneceAlGrado = !tema.grado || tema.grado === gradoActual || (Array.isArray(tema.grado) && tema.grado.includes(gradoActual)) || gradoActual === 'Invitado';
        if (tema.juego === tipoJuego && perteneceAlGrado) {
            const tarjetaTema = document.createElement('div');
            tarjetaTema.className = 'tarjeta-tema';
            tarjetaTema.dataset.tema = claveTema;
            tarjetaTema.innerHTML = `<h3>${tema.nombre}</h3>
                ${tema.creador ? `<span class="tarjeta-creador">Creado por: ${tema.creador}</span>` : ''}
            `;
            tarjetaTema.addEventListener('click', () => iniciarJuego(claveTema));

            if (esDocente && claveTema.startsWith('custom_')) {
                tarjetaTema.appendChild(crearControlesDocente(claveTema, tipoJuego));
            }

            gridTemas.appendChild(tarjetaTema);
        }
    }

    seleccionTemaEl.appendChild(gridTemas);
    seleccionJuegoEl.style.display = 'none';
    seleccionTemaEl.style.display = 'block';
    pantallaCrearTemaEl.style.display = 'none';
    contenedorJuegoEl.style.display = 'none';
    infoJuegoActualEl.style.display = 'none';

    seleccionTemaEl.classList.add('anim-in');

    document.getElementById('btn-volver-a-juegos').addEventListener('click', () => mostrarSeleccionJuego(materiaActual));
}

/**
 * Inicia el juego para un tema específico.
 * @param {string} tema - La clave del tema (ej: "verboToBe").
 */
async function iniciarJuego(tema) {
    temaActual = tema;
    preguntaIndex = 0;
    puntuacionActual = 0;
    preguntasIncorrectas = [];

    // Ocultar la pantalla de selección de tema
    seleccionTemaEl.style.display = 'none';
    seleccionJuegoEl.style.display = 'none';
    pantallaCrearTemaEl.style.display = 'none';
    infoJuegoActualEl.style.display = 'none';

    // Iniciar la cuenta regresiva
    let contador = 3;
    countdownOverlay.style.display = 'flex';

    let intervalo;

    function ejecutarCuenta() {
        if (contador === 0) {
            clearInterval(intervalo);
            // Ocultar el overlay e iniciar el juego
            countdownOverlay.style.display = 'none';

            // Iniciar el cronómetro y el juego
            tiempoInicioJuego = Date.now();

            // Iniciar el cronómetro en pantalla
            if (cronometroIntervalo) clearInterval(cronometroIntervalo);
            cronometroIntervalo = setInterval(() => {
                const cronometroEl = document.getElementById('cronometro-juego');
                if (cronometroEl) {
                    const duracionMs = Date.now() - tiempoInicioJuego;
                    const segundos = Math.floor(duracionMs / 1000) % 60;
                    const minutos = Math.floor(duracionMs / (1000 * 60));
                    const tiempoFormateado = `${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
                    cronometroEl.innerHTML = `⏱️ ${tiempoFormateado}`;
                }
            }, 1000);

            contenedorJuegoEl.style.display = 'block';
            contenedorJuegoEl.classList.add('anim-in');

            const tipoJuego = gameData[materiaActual].temas[tema].juego;
            const cargarFuncion = {
                sentenceScramble: cargarPreguntaSentenceScramble,
                matchingPairs: cargarPreguntaMatchingPairs,
                findTheError: cargarPreguntaFindTheError,
                basicOperations: cargarPreguntaBasicOperations,
                equationSolver: cargarPreguntaEquationSolver,
                numberSequence: cargarPreguntaNumberSequence,
                dragAndDropMatch: cargarPreguntaDragAndDropMatch,
                numberOrder: cargarPreguntaNumberOrder,
                rouletteVF: cargarPreguntaRouletteVF,
                memoryMatch: cargarPreguntaMemoryMatch,
                hangman: cargarPreguntaHangman,
                fillTheWord: cargarPreguntaFillTheWord,
                buildFraction: cargarPreguntaBuildFraction,
                secretCode: cargarPreguntaSecretCode,
                quickSelect: cargarPreguntaQuickSelect,
                balanceScale: cargarPreguntaBalanceScale,
                completeNotableProduct: cargarPreguntaCompleteNotableProduct,
                combineLikeTerms: cargarPreguntaCombineLikeTerms,
                pythagorasChallenge: cargarPreguntaPythagorasChallenge,
                combinationBuilder: cargarPreguntaCombinationBuilder,
                growthPrediction: cargarPreguntaGrowthPrediction,
            }[tipoJuego];

            if (cargarFuncion) cargarFuncion();
        } else {
            countdownNumber.textContent = contador;
            // Forzar reinicio de la animación
            countdownNumber.style.animation = 'none';
            countdownNumber.offsetHeight; // Truco para forzar el reflow
            countdownNumber.style.animation = '';
            contador--;
        }
    }

    ejecutarCuenta(); // Ejecutar la primera vez inmediatamente
    intervalo = setInterval(ejecutarCuenta, 1000);
}

/** Carga la pregunta actual del juego "Sentence Scramble". */
function cargarPreguntaSentenceScramble() {
    fraseUsuario = [];
    intentosRestantes = 3;
    const pregunta = gameData[materiaActual].temas[temaActual].preguntas[preguntaIndex];
    const totalPreguntas = gameData[materiaActual].temas[temaActual].preguntas.length;
    const palabras = pregunta.solucion.split(' ');
    shuffleArray(palabras);

    const temaInfo = gameData[materiaActual].temas[temaActual];
    const tipoJuego = temaInfo.juego;
    const nombreTemaFormateado = temaInfo.nombre.replace(':', ' -');

    infoJuegoActualEl.innerHTML = `
        <div class="game-context-info">
            <span><strong>Materia:</strong> ${gameData[materiaActual].nombre}</span>
            <span><strong>Juego:</strong> ${JUEGOS_DISPONIBLES[tipoJuego].nombre}</span> |
            <span><strong>Tema:</strong> ${nombreTemaFormateado}</span>
        </div>
    `;
    infoJuegoActualEl.style.display = 'block';

    contenedorJuegoEl.innerHTML = `
        <div class="pregunta-header">
            <div class="pregunta-info">
                <p id="pregunta-juego">Haz clic en las palabras para formar la oración correcta:</p>
            </div>
            <div class="game-info-panel">
                <div class="game-stats">
                    <div class="intentos-restantes" title="Vidas restantes">Vidas: <span id="vidas">❤️❤️❤️</span></div>
                    <div id="cronometro-juego" class="cronometro-juego" title="Tiempo transcurrido">⏱️ 00:00</div>
                </div>
                <button id="btn-pista" class="btn-juego btn-pista" title="Obtener una pista">💡</button>
            </div>
        </div>
        <div class="progreso-juego">
            <span id="texto-progreso">Pregunta ${preguntaIndex + 1} de ${totalPreguntas}</span>
            <div class="barra-progreso">
                <div class="barra-progreso-relleno" style="width: ${((preguntaIndex + 1) / totalPreguntas) * 100}%;"></div>
            </div>
        </div>
        <div id="frase-construida"></div>
        <div id="opciones-palabras">
            ${palabras.map(p => `<button class="btn-palabra">${p}</button>`).join('')}
        </div>
        <div class="controles-juego">
            <button id="btn-verificar" class="btn-juego btn-verificar">Verificar</button>
            <button id="btn-siguiente-pregunta" class="btn-juego btn-siguiente">Siguiente</button>
            <button id="btn-volver-temas" class="btn-juego btn-volver">Volver</button>
        </div>
        <div id="feedback-juego"></div>
    `;

    renderFraseUsuario();

    document.querySelectorAll('.btn-palabra').forEach(btn => {
        btn.addEventListener('click', () => {
            fraseUsuario.push(btn.textContent);
            renderFraseUsuario();
            btn.disabled = true;
            btn.style.opacity = '0.5';
        });
    });

    document.getElementById('btn-volver-temas').addEventListener('click', () => {
        if (confirm('¿Estás seguro de que quieres volver? Perderás tu progreso actual.')) {
            if (cronometroIntervalo) clearInterval(cronometroIntervalo);
            mostrarTemas(materiaActual, 'sentenceScramble');
        }
    });
    document.getElementById('btn-pista').addEventListener('click', mostrarPista);
    document.getElementById('btn-verificar').addEventListener('click', verificarRespuesta);
    document.getElementById('btn-siguiente-pregunta').addEventListener('click', async () => {
        document.getElementById('btn-siguiente-pregunta').style.display = 'none'; // Ocultar inmediatamente
        contenedorJuegoEl.classList.add('anim-out');
        setTimeout(() => {
            preguntaIndex++;
            if (preguntaIndex < totalPreguntas) {
                cargarPreguntaSentenceScramble();
            } else {
                mostrarResultados();
            }
            contenedorJuegoEl.classList.remove('anim-out');
            contenedorJuegoEl.classList.add('anim-in');
        }, 400);
    });
}

/** Renderiza las palabras que el usuario ha seleccionado en la caja de respuesta. */
function renderFraseUsuario() {
    const fraseConstruidaEl = document.getElementById('frase-construida');
    fraseConstruidaEl.innerHTML = '';
    if (fraseUsuario.length === 0) {
        fraseConstruidaEl.innerHTML = '<span class="placeholder">Haz clic en las palabras de abajo...</span>';
    } else {
        fraseUsuario.forEach((palabra, index) => {
            const palabraSpan = document.createElement('span');
            palabraSpan.textContent = palabra;
            palabraSpan.className = 'palabra-en-frase';
            palabraSpan.dataset.index = index;
            palabraSpan.addEventListener('click', removerPalabra);
            fraseConstruidaEl.appendChild(palabraSpan);
        });
    }
}

/**
 * Remueve una palabra de la frase del usuario y la devuelve a las opciones.
 * @param {MouseEvent} event - El evento de clic.
 */
function removerPalabra(event) {
    const index = parseInt(event.target.dataset.index, 10);
    const palabraRemovida = fraseUsuario.splice(index, 1)[0];

    const botonesPalabra = document.querySelectorAll('.btn-palabra');
    for (const btn of botonesPalabra) {
        if (btn.textContent === palabraRemovida && btn.disabled) {
            btn.disabled = false;
            btn.style.opacity = '1';
            break;
        }
    }
    renderFraseUsuario();
}

/**
 * Baraja un array en el lugar usando el algoritmo Fisher-Yates.
 * @param {Array} array El array a barajar.
 */
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}


/** Carga la pregunta actual del juego "Matching Pairs". */
function cargarPreguntaMatchingPairs() {
    const ronda = gameData[materiaActual].temas[temaActual].preguntas[preguntaIndex];
    const totalPreguntas = gameData[materiaActual].temas[temaActual].preguntas.length;

    let palabrasEN = ronda.map(p => p.en);
    let palabrasES = ronda.map(p => p.es);

    shuffleArray(palabrasEN);
    shuffleArray(palabrasES);

    const temaInfo = gameData[materiaActual].temas[temaActual];
    const tipoJuego = temaInfo.juego;

    infoJuegoActualEl.innerHTML = `
        <div class="game-context-info">
            <span><strong>Materia:</strong> ${gameData[materiaActual].nombre}</span>
            <span><strong>Juego:</strong> ${JUEGOS_DISPONIBLES[tipoJuego].nombre}</span> |
            <span><strong>Tema:</strong> ${temaInfo.nombre}</span>
        </div>
    `;
    infoJuegoActualEl.style.display = 'block';

    contenedorJuegoEl.innerHTML = `
        <div class="mobile-landscape-recommendation">
            <p>💡 Para una mejor experiencia en móvil, gira tu dispositivo a horizontal.</p>
        </div>
        <div class="pregunta-header">
            <div class="pregunta-info">
                <p id="pregunta-juego">Haz clic en un elemento de la izquierda y luego en su pareja de la derecha.</p>
            </div>
            <div class="game-info-panel">
                <div id="cronometro-juego" class="cronometro-juego" title="Tiempo transcurrido">⏱️ 00:00</div>
            </div>
        </div>
        <div class="progreso-juego">
            <span id="texto-progreso">Ronda ${preguntaIndex + 1} de ${totalPreguntas}</span>
            <div class="barra-progreso">
                <div class="barra-progreso-relleno" style="width: ${((preguntaIndex + 1) / totalPreguntas) * 100}%;"></div>
            </div>
        </div>
        <div class="matching-container">
            <div class="matching-column" id="columna-en">
                ${palabrasEN.map(p => `<button class="btn-match" data-lang="en">${p}</button>`).join('')}
            </div>
            <div class="matching-column" id="columna-es">
                ${palabrasES.map(p => `<button class="btn-match" data-lang="es">${p}</button>`).join('')}
            </div>
        </div>
        <div class="controles-juego">
             <button id="btn-siguiente-pregunta" class="btn-juego btn-siguiente">Siguiente</button>
             <button id="btn-volver-juegos" class="btn-juego btn-volver">Volver a Juegos</button>
        </div>
        <div id="feedback-juego"></div>
    `;

    let seleccion = { en: null, es: null };
    let paresCorrectos = 0;

    document.querySelectorAll('.btn-match').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.dataset.lang;

            if (seleccion[lang]) {
                seleccion[lang].classList.remove('selected');
            }

            seleccion[lang] = btn;
            btn.classList.add('selected');

            if (seleccion.en && seleccion.es) {
                const palabraEN = seleccion.en.textContent;
                const palabraES = seleccion.es.textContent;

                const parCorrecto = ronda.find(p => p.en === palabraEN && p.es === palabraES);

                if (parCorrecto) {
                    seleccion.en.classList.add('correct');
                    seleccion.es.classList.add('correct');
                    seleccion.en.disabled = true;
                    seleccion.es.disabled = true;
                    puntuacionActual++; // Sumar un punto por cada par correcto
                    paresCorrectos++;
                } else {
                    const btnEnIncorrecto = seleccion.en;
                    const btnEsIncorrecto = seleccion.es;

                    btnEnIncorrecto.classList.add('incorrect');
                    btnEsIncorrecto.classList.add('incorrect');

                    // Deshabilitar la pareja incorrecta
                    btnEnIncorrecto.disabled = true;
                    btnEsIncorrecto.disabled = true;

                    // Registrar el error para el feedback final
                    const parErroneo = ronda.find(p => p.en === btnEnIncorrecto.textContent);
                    if (parErroneo && !preguntasIncorrectas.includes(parErroneo)) {
                        preguntasIncorrectas.push(parErroneo);
                    }
                }

                seleccion.en.classList.remove('selected');
                seleccion.es.classList.remove('selected');
                seleccion = { en: null, es: null }; // Reiniciar la selección

                // Comprobar si todos los botones están deshabilitados (fin de ronda)
                const totalBotones = document.querySelectorAll('.btn-match').length;
                const botonesDeshabilitados = document.querySelectorAll('.btn-match:disabled').length;

                if (botonesDeshabilitados === totalBotones) {
                    // La puntuación se basa en los aciertos, no en completar la ronda
                    document.getElementById('feedback-juego').textContent = "¡Ronda completada!";
                    document.getElementById('feedback-juego').style.color = '#81C784';
                    document.getElementById('btn-siguiente-pregunta').style.display = 'inline-block';
                    document.querySelectorAll('.btn-match').forEach(b => b.disabled = true);
                    // No es necesario deshabilitar de nuevo, ya lo están.
                }
            }
        });
    });

    document.getElementById('btn-volver-juegos').addEventListener('click', () => {
        if (confirm('¿Estás seguro de que quieres volver? Perderás tu progreso actual.')) {
            if (cronometroIntervalo) clearInterval(cronometroIntervalo);
            mostrarSeleccionJuego(materiaActual);
        }
    });
    document.getElementById('btn-siguiente-pregunta').addEventListener('click', async () => {
        document.getElementById('btn-siguiente-pregunta').style.display = 'none'; // Ocultar inmediatamente
        contenedorJuegoEl.classList.add('anim-out');
        setTimeout(() => {
            preguntaIndex++;
            if (preguntaIndex < totalPreguntas) {
                cargarPreguntaMatchingPairs();
            } else {
                mostrarResultados();
            }
            contenedorJuegoEl.classList.remove('anim-out');
            contenedorJuegoEl.classList.add('anim-in');
        }, 400);
    });

    if (preguntaIndex === totalPreguntas - 1) {
        document.getElementById('btn-siguiente-pregunta').textContent = 'Finalizar';
    }
}

/** Carga la pregunta actual del juego "Find the Error". */
function cargarPreguntaFindTheError() {
    intentosRestantes = 3;
    const pregunta = gameData[materiaActual].temas[temaActual].preguntas[preguntaIndex];
    const totalPreguntas = gameData[materiaActual].temas[temaActual].preguntas.length;
    const palabras = pregunta.texto.split(' ');

    const temaInfo = gameData[materiaActual].temas[temaActual];
    const tipoJuego = temaInfo.juego;

    infoJuegoActualEl.innerHTML = `
        <div class="game-context-info">
            <span><strong>Materia:</strong> ${gameData[materiaActual].nombre}</span>
            <span><strong>Juego:</strong> ${JUEGOS_DISPONIBLES[tipoJuego].nombre}</span> |
            <span><strong>Tema:</strong> ${temaInfo.nombre}</span>
        </div>
    `;
    infoJuegoActualEl.style.display = 'block';

    contenedorJuegoEl.innerHTML = `
        <div class="pregunta-header">
            <div class="pregunta-info">
                <p id="pregunta-juego">Lee la oración y haz clic en la palabra que tiene el error:</p>
            </div>
            <div class="game-info-panel">
                <div class="intentos-restantes" title="Vidas restantes">Vidas: <span id="vidas">❤️❤️❤️</span></div>
                <div id="cronometro-juego" class="cronometro-juego" title="Tiempo transcurrido">⏱️ 00:00</div>
            </div>
        </div>
        <div class="progreso-juego">
            <span id="texto-progreso">Pregunta ${preguntaIndex + 1} de ${totalPreguntas}</span>
            <div class="barra-progreso">
                <div class="barra-progreso-relleno" style="width: ${((preguntaIndex + 1) / totalPreguntas) * 100}%;"></div>
            </div>
        </div>
        <div id="frase-con-error">
            ${palabras.map(p => `<button class="btn-palabra-error">${p}</button>`).join('')}
        </div>
        <div class="controles-juego">
             <button id="btn-siguiente-pregunta" class="btn-juego btn-siguiente">Siguiente</button>
             <button id="btn-volver-juegos" class="btn-juego btn-volver">Volver a Juegos</button>
        </div>
        <div id="feedback-juego"></div>
    `;

    document.querySelectorAll('.btn-palabra-error').forEach(btn => {
        btn.addEventListener('click', () => {
            const palabraSeleccionada = btn.textContent.replace(/[.]/g, '');
            const feedbackEl = document.getElementById('feedback-juego');
            const vidasEl = document.getElementById('vidas');

            if (palabraSeleccionada === pregunta.error) {
                feedbackEl.innerHTML = `¡Correcto! El error era "<strong>${pregunta.error}</strong>". Debería ser "<strong>${pregunta.solucion}</strong>".`;
                feedbackEl.style.color = '#81C784';
                puntuacionActual++;
                btn.classList.add('correct');
                document.querySelectorAll('.btn-palabra-error').forEach(b => b.disabled = true);
                document.getElementById('btn-siguiente-pregunta').style.display = 'inline-block';
            } else {
                intentosRestantes--;
                vidasEl.textContent = '❤️'.repeat(intentosRestantes) + '🖤'.repeat(3 - intentosRestantes);
                btn.classList.add('incorrect');
                setTimeout(() => btn.classList.remove('incorrect'), 500);

                if (intentosRestantes > 0) {
                    feedbackEl.textContent = `Incorrecto. Te quedan ${intentosRestantes} vidas.`;
                    feedbackEl.style.color = '#FFC107';
                } else {
                    feedbackEl.innerHTML = `¡Sin vidas! El error era "<strong>${pregunta.error}</strong>".`;
                    feedbackEl.style.color = '#E57373';
                    preguntasIncorrectas.push(pregunta);
                    document.querySelectorAll('.btn-palabra-error').forEach(b => b.disabled = true);
                    document.getElementById('btn-siguiente-pregunta').style.display = 'inline-block';
                }
            }
        });
    });

    document.getElementById('btn-volver-juegos').addEventListener('click', () => {
        if (confirm('¿Estás seguro de que quieres volver? Perderás tu progreso actual.')) {
            if (cronometroIntervalo) clearInterval(cronometroIntervalo);
            mostrarSeleccionJuego(materiaActual);
        }
    });
    document.getElementById('btn-siguiente-pregunta').addEventListener('click', async () => {
        document.getElementById('btn-siguiente-pregunta').style.display = 'none'; // Ocultar inmediatamente
        contenedorJuegoEl.classList.add('anim-out');
        setTimeout(() => {
            preguntaIndex++;
            if (preguntaIndex < totalPreguntas) {
                cargarPreguntaFindTheError();
            } else {
                mostrarResultados();
            }
            contenedorJuegoEl.classList.remove('anim-out');
            contenedorJuegoEl.classList.add('anim-in');
        }, 400);
    });
}

/** Carga la pregunta actual del juego "Quiz". */
function cargarPreguntaQuiz() {
    const pregunta = gameData[materiaActual].temas[temaActual].preguntas[preguntaIndex];
    const totalPreguntas = gameData[materiaActual].temas[temaActual].preguntas.length;

    // Corrección: Usamos un Set para asegurar que no haya opciones duplicadas
    // y luego lo convertimos de nuevo a un array para barajarlo.
    const opcionesUnicas = [...new Set([...pregunta.opciones, pregunta.solucion])];
    const opcionesBarajadas = opcionesUnicas.sort(() => Math.random() - 0.5);

    const temaInfo = gameData[materiaActual].temas[temaActual];
    const tipoJuego = temaInfo.juego;

    infoJuegoActualEl.innerHTML = `
        <div class="game-context-info">
            <span><strong>Materia:</strong> ${gameData[materiaActual].nombre}</span>
            <span><strong>Juego:</strong> ${JUEGOS_DISPONIBLES[tipoJuego].nombre}</span> |
            <span><strong>Tema:</strong> ${temaInfo.nombre}</span>
        </div>
    `;
    infoJuegoActualEl.style.display = 'block';

    contenedorJuegoEl.innerHTML = `
        <div class="pregunta-header">
            <div class="pregunta-info">
                <p id="pregunta-juego"><strong>Pregunta:</strong> ${pregunta.texto}</p>
            </div>
            <div class="game-info-panel">
                <div id="cronometro-juego" class="cronometro-juego" title="Tiempo transcurrido">⏱️ 00:00</div>
            </div>
        </div>
        <div class="progreso-juego">
            <span id="texto-progreso">Pregunta ${preguntaIndex + 1} de ${totalPreguntas}</span>
            <div class="barra-progreso">
                <div class="barra-progreso-relleno" style="width: ${((preguntaIndex + 1) / totalPreguntas) * 100}%;"></div>
            </div>
        </div>
        <div class="quiz-opciones">
            ${opcionesBarajadas.map((op, index) => `
                <button class="btn-quiz-opcion">
                    <span class="opcion-letra">${String.fromCharCode(65 + index)}</span>
                    <span class="opcion-texto">${op}</span>
                </button>`).join('')}
        </div>
        <div class="controles-juego">
             <button id="btn-siguiente-pregunta" class="btn-juego btn-siguiente">Siguiente</button>
             <button id="btn-volver-juegos" class="btn-juego btn-volver">Volver a Juegos</button>
        </div>
        <div id="feedback-juego"></div>
    `;

    document.querySelectorAll('.btn-quiz-opcion').forEach(btn => {
        btn.addEventListener('click', () => {
            const respuesta = btn.querySelector('.opcion-texto').textContent;
            const feedbackEl = document.getElementById('feedback-juego');

            if (respuesta === pregunta.solucion) {
                feedbackEl.textContent = "¡Correcto!";
                feedbackEl.style.color = '#81C784';
                puntuacionActual++;
                btn.classList.add('correct');
            } else {
                feedbackEl.innerHTML = `Incorrecto. La respuesta correcta era "<strong>${pregunta.solucion}</strong>".`;
                feedbackEl.style.color = '#E57373';
                btn.classList.add('incorrect');
                preguntasIncorrectas.push(pregunta);
            }
            document.getElementById('btn-siguiente-pregunta').style.display = 'inline-block';
            document.querySelectorAll('.btn-quiz-opcion').forEach(b => b.disabled = true);
        });
    });

    document.getElementById('btn-volver-juegos').addEventListener('click', () => {
        if (confirm('¿Estás seguro de que quieres volver? Perderás tu progreso actual.')) {
            if (cronometroIntervalo) clearInterval(cronometroIntervalo);
            mostrarSeleccionJuego(materiaActual);
        }
    });
    document.getElementById('btn-siguiente-pregunta').addEventListener('click', async () => {
        document.getElementById('btn-siguiente-pregunta').style.display = 'none'; // Ocultar inmediatamente
        contenedorJuegoEl.classList.add('anim-out');
        setTimeout(() => {
            preguntaIndex++;
            if (preguntaIndex < totalPreguntas) {
                cargarPreguntaQuiz();
            } else {
                mostrarResultados();
            }
            contenedorJuegoEl.classList.remove('anim-out');
            contenedorJuegoEl.classList.add('anim-in');
        }, 400);
    });
}

/** Carga la pregunta actual del juego "Basic Operations". */
function cargarPreguntaBasicOperations() {
    intentosRestantes = 3;
    const pregunta = gameData[materiaActual].temas[temaActual].preguntas[preguntaIndex];
    const totalPreguntas = gameData[materiaActual].temas[temaActual].preguntas.length;

    const temaInfo = gameData[materiaActual].temas[temaActual];
    const tipoJuego = temaInfo.juego;

    infoJuegoActualEl.innerHTML = `
        <div class="game-context-info">
            <span><strong>Materia:</strong> ${gameData[materiaActual].nombre}</span>
            <span><strong>Juego:</strong> ${JUEGOS_DISPONIBLES[tipoJuego].nombre}</span> |
            <span><strong>Tema:</strong> ${temaInfo.nombre}</span>
        </div>
    `;
    infoJuegoActualEl.style.display = 'block';

    contenedorJuegoEl.innerHTML = `
        <div class="pregunta-header">
            <div class="pregunta-info">
                <p id="pregunta-juego">Calcula el resultado de:</p>
                <div class="formula-display">${pregunta.texto}</div>
            </div>
            <div class="game-info-panel">
                <div class="intentos-restantes" title="Vidas restantes">Vidas: <span id="vidas">❤️❤️❤️</span></div>
                <div id="cronometro-juego" class="cronometro-juego" title="Tiempo transcurrido">⏱️ 00:00</div>
            </div>
        </div>
        <div class="progreso-juego">
            <span id="texto-progreso">Pregunta ${preguntaIndex + 1} de ${totalPreguntas}</span>
            <div class="barra-progreso">
                <div class="barra-progreso-relleno" style="width: ${((preguntaIndex + 1) / totalPreguntas) * 100}%;"></div>
            </div>
        </div>
        <div class="math-input-container">
            <input type="text" id="respuesta-math" class="input-texto" placeholder="Tu respuesta aquí">
            <p class="input-instruccion">Ingresa solo el número como respuesta.</p>
        </div>
        <div class="controles-juego">
             <button id="btn-verificar" class="btn-juego btn-verificar">Verificar</button>
             <button id="btn-siguiente-pregunta" class="btn-juego btn-siguiente">Siguiente</button>
             <button id="btn-volver-juegos" class="btn-juego btn-volver">Volver a Juegos</button>
        </div>
        <div id="feedback-juego"></div>
    `;

    document.getElementById('btn-verificar').addEventListener('click', () => {
        const respuestaUsuario = document.getElementById('respuesta-math').value.trim();
        const feedbackEl = document.getElementById('feedback-juego');
        const vidasEl = document.getElementById('vidas');

        if (respuestaUsuario === pregunta.solucion) {
            feedbackEl.textContent = "¡Correcto! 🎉";
            feedbackEl.style.color = '#81C784';
            puntuacionActual++;
            document.getElementById('btn-verificar').style.display = 'none';
            document.getElementById('btn-siguiente-pregunta').style.display = 'inline-block';
        } else {
            intentosRestantes--;
            vidasEl.textContent = '❤️'.repeat(intentosRestantes) + '🖤'.repeat(3 - intentosRestantes);

            if (intentosRestantes > 0) {
                feedbackEl.textContent = `Incorrecto. Te quedan ${intentosRestantes} vidas. 🤔`;
                feedbackEl.style.color = '#FFC107';
            } else {
                feedbackEl.innerHTML = `¡Sin vidas! La respuesta era: "<strong>${pregunta.solucion}</strong>"`;
                feedbackEl.style.color = '#E57373';
                preguntasIncorrectas.push(pregunta);
                document.getElementById('btn-verificar').style.display = 'none';
                document.getElementById('btn-siguiente-pregunta').style.display = 'inline-block';
            }
        }
    });

    document.getElementById('btn-volver-juegos').addEventListener('click', () => {
        if (confirm('¿Estás seguro de que quieres volver? Perderás tu progreso actual.')) {
            if (cronometroIntervalo) clearInterval(cronometroIntervalo);
            mostrarSeleccionJuego(materiaActual);
        }
    });
    document.getElementById('btn-siguiente-pregunta').addEventListener('click', async () => {
        document.getElementById('btn-siguiente-pregunta').style.display = 'none'; // Ocultar inmediatamente
        contenedorJuegoEl.classList.add('anim-out');
        setTimeout(() => {
            preguntaIndex++;
            if (preguntaIndex < totalPreguntas) {
                cargarPreguntaBasicOperations();
            } else {
                mostrarResultados();
            }
            contenedorJuegoEl.classList.remove('anim-out');
            contenedorJuegoEl.classList.add('anim-in');
        }, 400);
    });
}

/** Carga la pregunta actual del juego "Equation Solver". */
function cargarPreguntaEquationSolver() {
    intentosRestantes = 3;
    const pregunta = gameData[materiaActual].temas[temaActual].preguntas[preguntaIndex];
    const totalPreguntas = gameData[materiaActual].temas[temaActual].preguntas.length;

    const temaInfo = gameData[materiaActual].temas[temaActual];
    const tipoJuego = temaInfo.juego;

    infoJuegoActualEl.innerHTML = `
        <div class="game-context-info">
            <span><strong>Materia:</strong> ${gameData[materiaActual].nombre}</span>
            <span><strong>Juego:</strong> ${JUEGOS_DISPONIBLES[tipoJuego].nombre}</span> |
            <span><strong>Tema:</strong> ${temaInfo.nombre}</span>
        </div>
    `;
    infoJuegoActualEl.style.display = 'block';

    contenedorJuegoEl.innerHTML = `
        <div class="pregunta-header">
            <div class="pregunta-info">
                <p id="pregunta-juego">Resuelve la siguiente ecuación:</p>
                <div class="formula-display">${pregunta.texto}</div>
            </div>
            <div class="game-info-panel">
                <div class="intentos-restantes" title="Vidas restantes">Vidas: <span id="vidas">❤️❤️❤️</span></div>
                <div id="cronometro-juego" class="cronometro-juego" title="Tiempo transcurrido">⏱️ 00:00</div>
            </div>
        </div>
        <div class="progreso-juego">
            <span id="texto-progreso">Pregunta ${preguntaIndex + 1} de ${totalPreguntas}</span>
            <div class="barra-progreso">
                <div class="barra-progreso-relleno" style="width: ${((preguntaIndex + 1) / totalPreguntas) * 100}%;"></div>
            </div>
        </div>
        <div class="math-input-container">
            <input type="text" id="respuesta-math" class="input-texto" placeholder="Tu respuesta aquí">
            <p class="input-instruccion">Ingresa solo el número como respuesta.</p>
        </div>
        <div class="controles-juego">
             <button id="btn-verificar" class="btn-juego btn-verificar">Verificar</button>
             <button id="btn-siguiente-pregunta" class="btn-juego btn-siguiente">Siguiente</button>
             <button id="btn-volver-juegos" class="btn-juego btn-volver">Volver a Juegos</button>
        </div>
        <div id="feedback-juego"></div>
    `;

    document.getElementById('btn-verificar').addEventListener('click', () => {
        const respuestaUsuario = document.getElementById('respuesta-math').value.trim().toLowerCase().replace(/\s/g, '');
        const solucionNormalizada = pregunta.solucion.toLowerCase().replace(/\s/g, '');
        const feedbackEl = document.getElementById('feedback-juego');
        const vidasEl = document.getElementById('vidas');

        if (respuestaUsuario === solucionNormalizada) {
            feedbackEl.textContent = "¡Correcto! 🎉";
            feedbackEl.style.color = '#81C784';
            puntuacionActual++;
            document.getElementById('btn-verificar').style.display = 'none';
            document.getElementById('btn-siguiente-pregunta').style.display = 'inline-block';
        } else {
            intentosRestantes--;
            vidasEl.textContent = '❤️'.repeat(intentosRestantes) + '🖤'.repeat(3 - intentosRestantes);

            if (intentosRestantes > 0) {
                feedbackEl.textContent = `Incorrecto. Te quedan ${intentosRestantes} vidas. 🤔`;
                feedbackEl.style.color = '#FFC107';
            } else {
                feedbackEl.innerHTML = `¡Sin vidas! La respuesta era: "<strong>${pregunta.solucion}</strong>"`;
                feedbackEl.style.color = '#E57373';
                preguntasIncorrectas.push(pregunta);
                document.getElementById('btn-verificar').style.display = 'none';
                document.getElementById('btn-siguiente-pregunta').style.display = 'inline-block';
            }
        }
    });

    document.getElementById('btn-volver-juegos').addEventListener('click', () => {
        if (confirm('¿Estás seguro de que quieres volver? Perderás tu progreso actual.')) {
            if (cronometroIntervalo) clearInterval(cronometroIntervalo);
            mostrarSeleccionJuego(materiaActual);
        }
    });
    document.getElementById('btn-siguiente-pregunta').addEventListener('click', async () => {
        document.getElementById('btn-siguiente-pregunta').style.display = 'none'; // Ocultar inmediatamente
        contenedorJuegoEl.classList.add('anim-out');
        setTimeout(() => {
            preguntaIndex++;
            if (preguntaIndex < totalPreguntas) {
                cargarPreguntaEquationSolver();
            } else {
                mostrarResultados();
            }
            contenedorJuegoEl.classList.remove('anim-out');
            contenedorJuegoEl.classList.add('anim-in');
        }, 400);
    });
}

/** Carga la pregunta actual del juego "Number Sequence". */
function cargarPreguntaNumberSequence() {
    intentosRestantes = 3;
    const pregunta = gameData[materiaActual].temas[temaActual].preguntas[preguntaIndex];
    const totalPreguntas = gameData[materiaActual].temas[temaActual].preguntas.length;

    const temaInfo = gameData[materiaActual].temas[temaActual];
    const tipoJuego = temaInfo.juego;

    infoJuegoActualEl.innerHTML = `
        <div class="game-context-info">
            <span><strong>Materia:</strong> ${gameData[materiaActual].nombre}</span>
            <span><strong>Juego:</strong> ${JUEGOS_DISPONIBLES[tipoJuego].nombre}</span> |
            <span><strong>Tema:</strong> ${temaInfo.nombre}</span>
        </div>
    `;
    infoJuegoActualEl.style.display = 'block';

    contenedorJuegoEl.innerHTML = `
        <div class="pregunta-header">
            <div class="pregunta-info">
                <p id="pregunta-juego">Encuentra el siguiente número en la secuencia:</p>
                <div class="formula-display">${pregunta.texto}</div>
            </div>
            <div class="game-info-panel">
                <div class="intentos-restantes" title="Vidas restantes">Vidas: <span id="vidas">❤️❤️❤️</span></div>
                <div id="cronometro-juego" class="cronometro-juego" title="Tiempo transcurrido">⏱️ 00:00</div>
            </div>
        </div>
        <div class="progreso-juego">
            <span id="texto-progreso">Pregunta ${preguntaIndex + 1} de ${totalPreguntas}</span>
            <div class="barra-progreso">
                <div class="barra-progreso-relleno" style="width: ${((preguntaIndex + 1) / totalPreguntas) * 100}%;"></div>
            </div>
        </div>
        <div class="math-input-container">
            <input type="number" id="respuesta-math" class="input-texto" placeholder="Tu respuesta aquí">
            <p class="input-instruccion">Ingresa solo el número como respuesta.</p>
        </div>
        <div class="controles-juego">
             <button id="btn-verificar" class="btn-juego btn-verificar">Verificar</button>
             <button id="btn-siguiente-pregunta" class="btn-juego btn-siguiente">Siguiente</button>
             <button id="btn-volver-juegos" class="btn-juego btn-volver">Volver a Juegos</button>
        </div>
        <div id="feedback-juego"></div>
    `;

    document.getElementById('btn-verificar').addEventListener('click', () => {
        const respuestaUsuario = document.getElementById('respuesta-math').value.trim();
        const feedbackEl = document.getElementById('feedback-juego');
        const vidasEl = document.getElementById('vidas');

        if (respuestaUsuario === pregunta.solucion) {
            feedbackEl.textContent = "¡Correcto! 🎉";
            feedbackEl.style.color = '#81C784';
            puntuacionActual++;
            document.getElementById('btn-verificar').style.display = 'none';
            document.getElementById('btn-siguiente-pregunta').style.display = 'inline-block';
        } else {
            intentosRestantes--;
            vidasEl.textContent = '❤️'.repeat(intentosRestantes) + '🖤'.repeat(3 - intentosRestantes);

            if (intentosRestantes > 0) {
                feedbackEl.textContent = `Incorrecto. Te quedan ${intentosRestantes} vidas. 🤔`;
                feedbackEl.style.color = '#FFC107';
            } else {
                feedbackEl.innerHTML = `¡Sin vidas! La respuesta era: "<strong>${pregunta.solucion}</strong>"`;
                feedbackEl.style.color = '#E57373';
                preguntasIncorrectas.push(pregunta);
                document.getElementById('btn-verificar').style.display = 'none';
                document.getElementById('btn-siguiente-pregunta').style.display = 'inline-block';
            }
        }
    });

    document.getElementById('btn-volver-juegos').addEventListener('click', () => {
        if (confirm('¿Estás seguro de que quieres volver? Perderás tu progreso actual.')) {
            if (cronometroIntervalo) clearInterval(cronometroIntervalo);
            mostrarSeleccionJuego(materiaActual);
        }
    });
    document.getElementById('btn-siguiente-pregunta').addEventListener('click', async () => {
        document.getElementById('btn-siguiente-pregunta').style.display = 'none'; // Ocultar inmediatamente
        contenedorJuegoEl.classList.add('anim-out');
        setTimeout(() => {
            preguntaIndex++;
            if (preguntaIndex < totalPreguntas) {
                cargarPreguntaNumberSequence();
            } else {
                mostrarResultados();
            }
            contenedorJuegoEl.classList.remove('anim-out');
            contenedorJuegoEl.classList.add('anim-in');
        }, 400);
    });
}

/** Carga la pregunta actual del juego "Drag and Drop Match". */
function cargarPreguntaDragAndDropMatch() {
    const ronda = gameData[materiaActual].temas[temaActual].preguntas;
    let draggables = ronda.map(p => p.draggable);
    let droppables = ronda.map(p => p.droppable);

    shuffleArray(draggables);
    shuffleArray(droppables);

    const temaInfo = gameData[materiaActual].temas[temaActual];
    const tipoJuego = temaInfo.juego;

    infoJuegoActualEl.innerHTML = `
        <div class="game-context-info">
            <span><strong>Materia:</strong> ${gameData[materiaActual].nombre}</span>
            <span><strong>Juego:</strong> ${JUEGOS_DISPONIBLES[tipoJuego].nombre}</span> |
            <span><strong>Tema:</strong> ${temaInfo.nombre}</span>
        </div>
    `;
    infoJuegoActualEl.style.display = 'block';

    contenedorJuegoEl.innerHTML = `
        <div class="mobile-landscape-recommendation">
            <p>💡 Para una mejor experiencia en móvil, gira tu dispositivo a horizontal.</p>
        </div>
        <div class="pregunta-header">
            <div class="pregunta-info">
                <p id="pregunta-juego">Arrastra cada elemento de la izquierda y suéltalo sobre su pareja en la derecha.</p>
            </div>
            <div class="game-info-panel">
                <div id="cronometro-juego" class="cronometro-juego" title="Tiempo transcurrido">⏱️ 00:00</div>
            </div>
        </div>
        <div class="progreso-juego">
            <span id="texto-progreso">Completa los ${ronda.length} pares</span>
            <div class="barra-progreso">
                <div id="barra-progreso-drag" class="barra-progreso-relleno" style="width: 0%;"></div>
            </div>
        </div>
        <div class="drag-drop-container">
            <div class="drag-column">
                ${draggables.map((d, i) => `<div class="drag-item" draggable="true" id="drag-${i}">${d}</div>`).join('')}
            </div>
            <div class="drop-column">
                ${droppables.map((d, i) => `<div class="drop-zone" data-text="${d}" id="drop-${i}">${d}</div>`).join('')}
            </div>
        </div>
        <div class="controles-juego">
             <button id="btn-siguiente-pregunta" class="btn-juego btn-siguiente">Finalizar</button>
             <button id="btn-volver-juegos" class="btn-juego btn-volver">Volver a Juegos</button>
        </div>
        <div id="feedback-juego"></div>
    `;

    let draggedItem = null;
    let correctMatches = 0;
    let seleccionDragDrop = { draggable: null, droppable: null };

    document.querySelectorAll('.drag-item').forEach(item => {
        item.classList.add('clickable');
        item.addEventListener('dragstart', (e) => {
            draggedItem = e.target;
            setTimeout(() => e.target.classList.add('dragging'), 0);
        });

        item.addEventListener('dragend', () => {
            draggedItem.classList.remove('dragging');
            draggedItem = null;
        });

        item.addEventListener('touchstart', (e) => {
            draggedItem = e.target;
            draggedItem.classList.add('dragging');
        }, { passive: true });

        item.addEventListener('touchend', (e) => {
            if (!draggedItem) return;
            draggedItem.classList.remove('dragging');

            const touch = e.changedTouches[0];
            const dropZone = document.elementFromPoint(touch.clientX, touch.clientY);

            if (dropZone && dropZone.classList.contains('drop-zone')) {
                handleDrop(draggedItem, dropZone);
            }
            draggedItem = null;
        });

        item.addEventListener('click', () => {
            if (item.classList.contains('matched')) return;

            if (seleccionDragDrop.draggable) {
                seleccionDragDrop.draggable.classList.remove('selected');
            }
            seleccionDragDrop.draggable = item;
            item.classList.add('selected');

            if (seleccionDragDrop.droppable) checkClickMatch();
        });
    });

    document.body.addEventListener('touchmove', (e) => {
        if (draggedItem) {
            e.preventDefault();
            const touch = e.touches[0];
            const overElement = document.elementFromPoint(touch.clientX, touch.clientY);
            document.querySelectorAll('.drop-zone').forEach(z => z.classList.remove('drag-over'));
            if (overElement && overElement.classList.contains('drop-zone')) {
                overElement.classList.add('drag-over');
            }
        }
    });

    document.querySelectorAll('.drop-zone').forEach(zone => {
        zone.classList.add('clickable');
        zone.addEventListener('dragover', (e) => {
            e.preventDefault();
            zone.classList.add('drag-over');
        });

        zone.addEventListener('dragleave', () => {
            zone.classList.remove('drag-over');
        });

        zone.addEventListener('drop', (e) => {
            e.preventDefault();
            zone.classList.remove('drag-over');
            if (!draggedItem) return;
            handleDrop(draggedItem, zone);
        });

        zone.addEventListener('click', () => {
            if (zone.classList.contains('correct')) return;

            if (seleccionDragDrop.droppable) {
                seleccionDragDrop.droppable.classList.remove('selected');
            }
            seleccionDragDrop.droppable = zone;
            zone.classList.add('selected');

            if (seleccionDragDrop.draggable) checkClickMatch();
        });
    });

    function handleDrop(dragItem, dropZone) {
        const draggableText = dragItem.textContent;
        const droppableText = dropZone.dataset.text;

        const parCorrecto = ronda.find(p => p.draggable === draggableText && p.droppable === droppableText);

        if (parCorrecto && !dropZone.classList.contains('correct')) {
            dropZone.textContent = dragItem.textContent;
            dragItem.style.visibility = 'hidden'; // Oculta el original
            dropZone.classList.add('pulse');
            dropZone.classList.add('correct');
            dragItem.classList.add('matched');
            dragItem.draggable = false;
            correctMatches++;

            document.getElementById('barra-progreso-drag').style.width = `${(correctMatches / ronda.length) * 100}%`;

            if (correctMatches === ronda.length) {
                puntuacionActual = ronda.length;
                document.getElementById('feedback-juego').textContent = "¡Completado! ¡Excelente!";
                document.getElementById('feedback-juego').style.color = '#81C784';
                document.getElementById('btn-siguiente-pregunta').style.display = 'inline-block';
            }
        } else {
            dragItem.classList.add('incorrect-drag');
            dropZone.classList.add('incorrect-drag'); // También animar la zona
            setTimeout(() => {
                dragItem.classList.remove('incorrect-drag');
                dropZone.classList.remove('incorrect-drag');
            }, 500);
        }
    }
    function checkClickMatch() {
        const dragItem = seleccionDragDrop.draggable;
        const dropZone = seleccionDragDrop.droppable;

        if (!dragItem || !dropZone) return;

        handleDrop(dragItem, dropZone);

        // Limpiar selección después de un breve retraso para que el usuario vea el feedback
        setTimeout(() => {
            if (dragItem && !dragItem.classList.contains('matched')) {
                dragItem.classList.remove('selected');
            }
            if (dropZone && !dropZone.classList.contains('correct')) {
                dropZone.classList.remove('selected');
            }
            seleccionDragDrop = { draggable: null, droppable: null };
        }, 500); // 500ms es suficiente para ver la animación de error
    }

    document.getElementById('btn-volver-juegos').addEventListener('click', () => {
        if (confirm('¿Estás seguro de que quieres volver? Perderás tu progreso actual.')) {
            if (cronometroIntervalo) clearInterval(cronometroIntervalo);
            mostrarSeleccionJuego(materiaActual);
        }
    });
    document.getElementById('btn-siguiente-pregunta').addEventListener('click', () => {
        document.getElementById('btn-siguiente-pregunta').style.display = 'none'; // Ocultar inmediatamente
        if (correctMatches !== ronda.length) {
            puntuacionActual = correctMatches;
        }
        mostrarResultados();
    });
}

let esAscendenteActual = true; // Variable para almacenar el orden de la pregunta actual

/** Carga la pregunta actual del juego "Number Order". */
function cargarPreguntaNumberOrder(esRecarga = false) {
    const pregunta = gameData[materiaActual].temas[temaActual].preguntas[preguntaIndex];
    const totalPreguntas = gameData[materiaActual].temas[temaActual].preguntas.length;

    if (!esRecarga) {
        esAscendenteActual = Math.random() < 0.5; // Determinar el orden solo para una nueva pregunta
        intentosRestantes = 3; // Reiniciar vidas solo para una pregunta nueva
    }

    let numeros = [...pregunta.numeros];
    shuffleArray(numeros);
    const textoInstruccion = (esAscendenteActual ? "Ordena de menor a mayor" : "Ordena de mayor a menor") + " (de arriba hacia abajo)";

    const temaInfo = gameData[materiaActual].temas[temaActual];
    const tipoJuego = temaInfo.juego;

    infoJuegoActualEl.innerHTML = `
        <div class="game-context-info">
            <span><strong>Materia:</strong> ${gameData[materiaActual].nombre}</span>
            <span><strong>Juego:</strong> ${JUEGOS_DISPONIBLES[tipoJuego].nombre}</span> |
            <span><strong>Tema:</strong> ${temaInfo.nombre}</span>
        </div>
    `;
    infoJuegoActualEl.style.display = 'block';

    contenedorJuegoEl.innerHTML = `
        <div class="mobile-landscape-recommendation">
            <p>💡 Para una mejor experiencia en móvil, gira tu dispositivo a horizontal.</p>
        </div>
        <div class="pregunta-header">
            <div class="pregunta-info">
                <p id="pregunta-juego">${textoInstruccion}</p>
            </div>
            <div class="game-info-panel">
                <div class="intentos-restantes" title="Vidas restantes">Vidas: <span id="vidas">${'❤️'.repeat(intentosRestantes) + '🖤'.repeat(3 - intentosRestantes)}</span></div>
                <div id="cronometro-juego" class="cronometro-juego" title="Tiempo transcurrido">⏱️ 00:00</div>
            </div>
        </div>
        <div class="progreso-juego">
            <span id="texto-progreso">Pregunta ${preguntaIndex + 1} de ${totalPreguntas}</span>
            <div class="barra-progreso">
                <div class="barra-progreso-relleno" style="width: ${((preguntaIndex + 1) / totalPreguntas) * 100}%;"></div>
            </div>
        </div>
        <div class="number-order-container">
            <div class="order-source-column">
                ${numeros.map(n => `<div class="drag-item number-item" draggable="true">${n}</div>`).join('')}
            </div>
            <div class="order-drop-column">
                ${numeros.map(() => `<div class="drop-zone number-drop-zone"></div>`).join('')}
            </div>
        </div>
        <div class="controles-juego">
             <button id="btn-verificar" class="btn-juego btn-verificar">Verificar</button>
             <button id="btn-limpiar-orden" class="btn-juego btn-limpiar">Limpiar</button>
             <button id="btn-siguiente-pregunta" class="btn-juego btn-siguiente">Siguiente</button>
             <button id="btn-volver-juegos" class="btn-juego btn-volver">Volver a Juegos</button>
        </div>
        <div id="feedback-juego"></div>
    `;

    let draggedItem = null;
    let seleccion = { source: null, target: null }; // Para el modo clic

    document.querySelectorAll('.drag-item').forEach(item => {
        item.addEventListener('dragstart', e => {
            draggedItem = e.target;
            setTimeout(() => e.target.classList.add('dragging'), 0);
        });
        item.addEventListener('dragend', () => {
            draggedItem.classList.remove('dragging');
            draggedItem = null;
        });
        // NUEVO: Listener para clics en los números
        item.addEventListener('click', () => {
            if (seleccion.source) {
                seleccion.source.classList.remove('selected');
            }
            seleccion.source = item;
            item.classList.add('selected');
            checkClickMove();
        });
    });

    document.querySelectorAll('.drop-zone').forEach(zone => {
        zone.addEventListener('dragover', e => e.preventDefault());
        zone.addEventListener('drop', e => {
            e.preventDefault();
            if (draggedItem && !zone.contains(draggedItem)) { // Evitar soltar sobre sí mismo
                // Si la zona de destino ya tiene un número, lo devolvemos a la lista de origen
                // o a la zona de origen del número que estamos arrastrando.
                if (zone.children.length > 0) {
                    document.querySelector('.order-source-column').appendChild(zone.firstElementChild);
                }
                // Si el elemento que se suelta viene de otra zona, vaciamos la zona de origen
                if (draggedItem.parentElement.classList.contains('number-drop-zone')) {
                    draggedItem.parentElement.innerHTML = '';
                }
                zone.appendChild(draggedItem);
            }
        });
        // NUEVO: Listener para clics en las zonas de destino
        zone.addEventListener('click', () => {
            if (seleccion.target) {
                seleccion.target.classList.remove('selected');
            }
            seleccion.target = zone;
            zone.classList.add('selected');
            checkClickMove();
        });
    });

    // NUEVO: Función para manejar el movimiento por clics
    function checkClickMove() {
        if (!seleccion.source || !seleccion.target) return;

        const sourceItem = seleccion.source;
        const targetZone = seleccion.target;

        // Si la zona de destino ya tiene un elemento, lo intercambiamos
        if (targetZone.children.length > 0) {
            const itemInTarget = targetZone.firstElementChild;
            const sourceParent = sourceItem.parentElement;
            sourceParent.appendChild(itemInTarget);
        }

        targetZone.appendChild(sourceItem);

        // Limpiar selección
        sourceItem.classList.remove('selected');
        targetZone.classList.remove('selected');
        seleccion = { source: null, target: null };
    }

    document.getElementById('btn-limpiar-orden').addEventListener('click', () => {
        // Vuelve a cargar la pregunta actual para reiniciarla.
        cargarPreguntaNumberOrder(true);
    });

    document.getElementById('btn-verificar').addEventListener('click', () => {
        const solucionOrdenada = esAscendenteActual
            ? [...pregunta.numeros].sort((a, b) => a - b)
            : [...pregunta.numeros].sort((a, b) => b - a);
        const respuestaUsuario = Array.from(document.querySelectorAll('.order-drop-column .drag-item')).map(item => parseFloat(item.textContent));
        const feedbackEl = document.getElementById('feedback-juego');
        const vidasEl = document.getElementById('vidas');

        let esCorrecto = respuestaUsuario.length === solucionOrdenada.length && respuestaUsuario.every((val, index) => val === solucionOrdenada[index]);

        if (esCorrecto) {
            feedbackEl.textContent = "¡Correcto! El orden es perfecto.";
            feedbackEl.style.color = '#81C784';
            puntuacionActual++;
            document.getElementById('btn-verificar').style.display = 'none';
            document.getElementById('btn-siguiente-pregunta').style.display = 'inline-block';
            document.querySelectorAll('.drag-item, .drop-zone').forEach(el => el.style.pointerEvents = 'none');
        } else {
            intentosRestantes--;
            vidasEl.textContent = '❤️'.repeat(intentosRestantes) + '🖤'.repeat(3 - intentosRestantes);

            if (intentosRestantes > 0) {
                feedbackEl.textContent = `Incorrecto. ¡Inténtalo de nuevo! Te quedan ${intentosRestantes} vidas.`;
                feedbackEl.style.color = '#FFC107';
            } else {
                feedbackEl.innerHTML = `¡Sin vidas! El orden correcto era: <strong>${solucionOrdenada.join(' &rarr; ')}</strong>`;
                feedbackEl.style.color = '#E57373';
                preguntasIncorrectas.push(pregunta);
                document.getElementById('btn-verificar').style.display = 'none';
                document.getElementById('btn-siguiente-pregunta').style.display = 'inline-block';
                document.getElementById('btn-limpiar-orden').style.display = 'none'; // Ocultar botón al perder
                document.querySelectorAll('.drag-item, .drop-zone').forEach(el => el.style.pointerEvents = 'none');
            }
        }
    });

    document.getElementById('btn-volver-juegos').addEventListener('click', () => {
        if (confirm('¿Estás seguro de que quieres volver? Perderás tu progreso actual.')) {
            if (cronometroIntervalo) clearInterval(cronometroIntervalo);
            mostrarSeleccionJuego(materiaActual);
        }
    });
    document.getElementById('btn-siguiente-pregunta').addEventListener('click', () => {
        contenedorJuegoEl.classList.add('anim-out');
        document.getElementById('btn-siguiente-pregunta').style.display = 'none'; // Ocultar inmediatamente
        setTimeout(() => {
            preguntaIndex++;
            if (preguntaIndex < totalPreguntas) cargarPreguntaNumberOrder(false); // Carga la siguiente como nueva
            else mostrarResultados();
            contenedorJuegoEl.classList.remove('anim-out');
            contenedorJuegoEl.classList.add('anim-in');
        }, 400);
    });
}

/** Carga la pregunta actual del juego "Ruleta V/F". */
function cargarPreguntaRouletteVF() {
    const pregunta = gameData[materiaActual].temas[temaActual].preguntas[preguntaIndex];
    const totalPreguntas = gameData[materiaActual].temas[temaActual].preguntas.length;
    let vidasPregunta = 3; // Vidas por cada pregunta de la ruleta
    let opcionesDisponibles = [pregunta.solucion, ...pregunta.opcionesFalsas];

    const temaInfo = gameData[materiaActual].temas[temaActual];
    const tipoJuego = temaInfo.juego;

    infoJuegoActualEl.innerHTML = `
        <div class="game-context-info">
            <span><strong>Materia:</strong> ${gameData[materiaActual].nombre}</span>
            <span><strong>Juego:</strong> ${JUEGOS_DISPONIBLES[tipoJuego].nombre}</span> |
            <span><strong>Tema:</strong> ${temaInfo.nombre}</span>
        </div>
    `;
    infoJuegoActualEl.style.display = 'block';

    contenedorJuegoEl.innerHTML = `
        <div class="pregunta-header">
            <div class="pregunta-info">
                <p id="pregunta-juego">${pregunta.texto} <strong id="roulette-result" class="roulette-placeholder">...</strong></p>
            </div>
            <div class="game-info-panel">
                <div id="cronometro-juego" class="cronometro-juego" title="Tiempo transcurrido">⏱️ 00:00</div>
                <div class="intentos-restantes" title="Vidas restantes">Vidas: <span id="vidas">❤️❤️❤️</span></div>
            </div>
        </div>
        <div class="progreso-juego">
            <span id="texto-progreso">Pregunta ${preguntaIndex + 1} de ${totalPreguntas}</span>
            <div class="barra-progreso">
                <div class="barra-progreso-relleno" style="width: ${((preguntaIndex + 1) / totalPreguntas) * 100}%;"></div>
            </div>
        </div>
        <div class="roulette-container">
            <canvas id="roulette-canvas" width="300" height="300"></canvas>
            <div class="roulette-pointer"></div>
        </div>
        <div class="controles-juego" id="controles-vf" style="margin-bottom: 10px;">
             <button id="btn-vf-verdadero" class="btn-juego btn-verificar" style="display: none;">Verdadero</button>
             <button id="btn-vf-falso" class="btn-juego btn-limpiar" style="display: none;">Falso</button>
        </div>
        <div class="controles-juego">
             <button id="btn-girar-ruleta" class="btn-juego btn-verificar">Girar Ruleta</button>
             <button id="btn-siguiente-pregunta" class="btn-juego btn-siguiente" style="display: none;">Siguiente</button>
             <button id="btn-volver-juegos" class="btn-juego btn-volver">Volver a Juegos</button>
        </div>
        <div id="feedback-juego"></div>
    `;

    const canvas = document.getElementById('roulette-canvas');
    const ctx = canvas.getContext('2d');
    const colores = ['#3498db', '#e74c3c', '#f1c40f', '#9b59b6', '#2ecc71', '#e67e22'];

    function dibujarRuleta(opciones, anguloRotacion = 0) {
        const numOpciones = opciones.length;
        const anguloPorcion = (2 * Math.PI) / numOpciones;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.save();
        ctx.translate(canvas.width / 2, canvas.height / 2);
        ctx.rotate(anguloRotacion);

        for (let i = 0; i < numOpciones; i++) {
            const angulo = i * anguloPorcion;
            ctx.beginPath();
            ctx.fillStyle = colores[i % colores.length];
            ctx.moveTo(0, 0);
            ctx.arc(0, 0, canvas.width / 2, angulo, angulo + anguloPorcion);
            ctx.lineTo(0, 0);
            ctx.fill();

            ctx.save();
            ctx.fillStyle = "white";
            ctx.font = "bold 14px Poppins";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.rotate(angulo + anguloPorcion / 2);
            ctx.fillText(opciones[i], canvas.width / 4, 0);
            ctx.restore();
        }
        ctx.restore();
    }

    dibujarRuleta(opcionesDisponibles.map(op => op.valor));

    let resultadoFinal = '';

    document.getElementById('btn-girar-ruleta').addEventListener('click', () => {
        document.getElementById('btn-girar-ruleta').disabled = true;
        document.getElementById('feedback-juego').innerHTML = '';
        let anguloRotacion = 0;

        const opcionesParaGirar = opcionesDisponibles.map(op => op.valor);
        shuffleArray(opcionesParaGirar);
        const numOpcionesActual = opcionesParaGirar.length;
        const anguloPorcionActual = (2 * Math.PI) / numOpcionesActual;
        const velocidadInicial = Math.random() * 0.4 + 0.5; // Velocidad aleatoria aumentada
        let velocidad = velocidadInicial;
        const friccion = 0.985; // Mayor fricción para que se detenga antes

        function animarGiro() {
            anguloRotacion += velocidad;
            velocidad *= friccion;
            dibujarRuleta(opcionesParaGirar, anguloRotacion);

            if (velocidad > 0.001) {
                requestAnimationFrame(animarGiro);
            } else {
                const anguloFinal = anguloRotacion % (2 * Math.PI);
                // El puntero está en la parte superior (ángulo 270° o 1.5 * PI).
                const indiceGanador = Math.floor(numOpcionesActual - (anguloFinal / (2 * Math.PI) * numOpcionesActual) + (numOpcionesActual / 4) * 3) % numOpcionesActual;
                resultadoFinal = opcionesParaGirar[indiceGanador];

                const resultadoEl = document.getElementById('roulette-result');
                resultadoEl.textContent = resultadoFinal;
                resultadoEl.classList.remove('roulette-placeholder');
                resultadoEl.classList.add('pulse');

                // Siempre mostramos los botones V/F después de girar.
                document.getElementById('btn-vf-verdadero').style.display = 'inline-block';
                document.getElementById('btn-vf-falso').style.display = 'inline-block';
            }
        }
        animarGiro();
    });

    function verificarRespuestaVF(respuestaUsuario) {
        document.getElementById('btn-vf-verdadero').style.display = 'none';
        document.getElementById('btn-vf-falso').style.display = 'none';

        const esOpcionQueSalioLaCorrecta = resultadoFinal === pregunta.solucion.valor;
        const feedbackEl = document.getElementById('feedback-juego');
        const vidasEl = document.getElementById('vidas');

        if (esOpcionQueSalioLaCorrecta) {
            // La opción correcta salió, esta es la jugada final para esta pregunta.
            if (respuestaUsuario) { // El usuario acertó
                feedbackEl.textContent = "¡Correcto! Has encontrado la respuesta verdadera. 🎉";
                feedbackEl.style.color = '#81C784';
                puntuacionActual++;
            } else { // El usuario se equivocó en el momento crucial
                feedbackEl.innerHTML = `Incorrecto. La afirmación con "<strong>${pregunta.solucion.valor}</strong>" era verdadera.`;
                feedbackEl.style.color = '#E57373';
                preguntasIncorrectas.push({ ...pregunta, explicacionError: `La afirmación con "${pregunta.solucion.valor}" era verdadera.` });
            }
            document.getElementById('btn-girar-ruleta').style.display = 'none';
            document.getElementById('btn-siguiente-pregunta').style.display = 'inline-block';
        } else if (!respuestaUsuario && !esOpcionQueSalioLaCorrecta) { // Salió una opción falsa y el usuario correctamente dijo "Falso"
            const opcionFalsa = pregunta.opcionesFalsas.find(op => op.valor === resultadoFinal);
            feedbackEl.innerHTML = `¡Correcto! ${opcionFalsa.explicacion}. Sigue buscando la respuesta verdadera.`;
            feedbackEl.style.color = '#81C784';
            // Eliminar la opción falsa de las disponibles
            opcionesDisponibles = opcionesDisponibles.filter(op => op.valor !== resultadoFinal);
            document.getElementById('btn-girar-ruleta').disabled = false; // Permitir volver a girar
        } else { // El usuario se equivocó en su juicio (dijo "Verdadero" a una falsa, o "Falso" a la verdadera)
            vidasPregunta--; // Pierde una vida
            vidasEl.textContent = '❤️'.repeat(vidasPregunta) + '🖤'.repeat(3 - vidasPregunta);

            let explicacionIncorrecta = '';
            if (respuestaUsuario && !esOpcionQueSalioLaCorrecta) { // Dijo Verdadero a una opción Falsa
                const opcionFalsa = pregunta.opcionesFalsas.find(op => op.valor === resultadoFinal);
                explicacionIncorrecta = opcionFalsa ? opcionFalsa.explicacion : `La opción "${resultadoFinal}" es incorrecta.`;
            } else { // Dijo Falso a la opción Correcta
                explicacionIncorrecta = pregunta.solucion.explicacion;
            }
            feedbackEl.innerHTML = `Incorrecto. ${explicacionIncorrecta}`;
            feedbackEl.style.color = '#E57373';

            if (vidasPregunta > 0) {
                document.getElementById('btn-girar-ruleta').disabled = false; // Permitir volver a girar
            } else {
                feedbackEl.innerHTML += "<br>¡Te has quedado sin vidas para esta pregunta!";
                preguntasIncorrectas.push({ ...pregunta, explicacionError: explicacionIncorrecta });
                document.getElementById('btn-siguiente-pregunta').style.display = 'inline-block';
            }
        }
    }

    document.getElementById('btn-vf-verdadero').addEventListener('click', () => verificarRespuestaVF(true));
    document.getElementById('btn-vf-falso').addEventListener('click', () => verificarRespuestaVF(false));

    document.getElementById('btn-volver-juegos').addEventListener('click', () => {
        if (confirm('¿Estás seguro de que quieres volver? Perderás tu progreso actual.')) {
            if (cronometroIntervalo) clearInterval(cronometroIntervalo);
            mostrarSeleccionJuego(materiaActual);
        }
    });

    document.getElementById('btn-siguiente-pregunta').addEventListener('click', () => {
        document.getElementById('btn-siguiente-pregunta').style.display = 'none'; // Ocultar inmediatamente
        contenedorJuegoEl.classList.add('anim-out');
        setTimeout(() => {
            preguntaIndex++;
            if (preguntaIndex < totalPreguntas) {
                cargarPreguntaRouletteVF();
            } else {
                mostrarResultados();
            }
            contenedorJuegoEl.classList.remove('anim-out');
            contenedorJuegoEl.classList.add('anim-in');
        }, 400);
    });
}

/** Carga la pregunta actual del juego "Memory Match". */
function cargarPreguntaMemoryMatch() {
    const pares = gameData[materiaActual].temas[temaActual].preguntas;
    let cartas = [];
    pares.forEach((par, index) => {
        cartas.push({ valor: par.en, parId: index, tipo: 'en' });
        cartas.push({ valor: par.es, parId: index, tipo: 'es' });
    });

    shuffleArray(cartas);

    const temaInfo = gameData[materiaActual].temas[temaActual];
    const tipoJuego = temaInfo.juego;

    infoJuegoActualEl.innerHTML = `
        <div class="game-context-info">
            <span><strong>Materia:</strong> ${gameData[materiaActual].nombre}</span>
            <span><strong>Juego:</strong> ${JUEGOS_DISPONIBLES[tipoJuego].nombre}</span> |
            <span><strong>Tema:</strong> ${temaInfo.nombre}</span>
        </div>
    `;
    infoJuegoActualEl.style.display = 'block';

    contenedorJuegoEl.innerHTML = `
        <div class="mobile-landscape-recommendation">
            <p>💡 Para una mejor experiencia en móvil, gira tu dispositivo a horizontal.</p>
        </div>
        <div class="pregunta-header">
            <div class="pregunta-info">
                <p id="pregunta-juego">Encuentra todas las parejas de palabras.</p>
            </div>
            <div class="game-info-panel">
                <div id="cronometro-juego" class="cronometro-juego" title="Tiempo transcurrido">⏱️ 00:00</div>
            </div>
        </div>
        <div class="progreso-juego">
            <span id="texto-progreso">Pares encontrados: <span id="pares-encontrados">0</span> de ${pares.length}</span>
            <div class="barra-progreso">
                <div id="barra-progreso-memoria" class="barra-progreso-relleno" style="width: 0%;"></div>
            </div>
        </div>
        <div class="memory-grid">
            ${cartas.map((carta, i) => `
                <div class="memory-card-container">
                    <div class="memory-card" data-index="${i}" data-par-id="${carta.parId}" data-valor="${carta.valor}">
                        <div class="memory-card-front"></div>
                        <div class="memory-card-back">${carta.valor}</div>
                    </div>
                </div>
            `).join('')}
        </div>
        <div class="controles-juego">
             <button id="btn-siguiente-pregunta" class="btn-juego btn-siguiente" style="display: none;">Finalizar</button>
             <button id="btn-volver-juegos" class="btn-juego btn-volver">Volver a Juegos</button>
        </div>
        <div id="feedback-juego"></div>
    `;

    let cartasVolteadas = [];
    let paresEncontrados = 0;
    let bloqueo = false; // Para evitar hacer clic mientras se voltean las cartas

    document.querySelectorAll('.memory-card').forEach(cartaEl => {
        cartaEl.addEventListener('click', () => {
            if (bloqueo || cartasVolteadas.length >= 2 || cartaEl.classList.contains('is-flipped')) {
                return;
            }

            cartaEl.classList.add('is-flipped');
            cartasVolteadas.push(cartaEl);

            if (cartasVolteadas.length === 2) {
                bloqueo = true;
                const carta1 = cartasVolteadas[0];
                const carta2 = cartasVolteadas[1];

                if (carta1.dataset.parId === carta2.dataset.parId) {
                    // ¡Es un par!
                    setTimeout(() => {
                        carta1.classList.remove('is-flipped'); // Quitamos la clase de volteo
                        carta2.classList.remove('is-flipped'); // Quitamos la clase de volteo
                        carta1.classList.add('matched');
                        carta2.classList.add('matched');
                        paresEncontrados++;
                        puntuacionActual++;
                        document.getElementById('pares-encontrados').textContent = paresEncontrados;
                        document.getElementById('barra-progreso-memoria').style.width = `${(paresEncontrados / pares.length) * 100}%`;
                        cartasVolteadas = [];
                        bloqueo = false;

                        if (paresEncontrados === pares.length) {
                            document.getElementById('feedback-juego').textContent = "¡Felicidades! ¡Has encontrado todos los pares!";
                            document.getElementById('feedback-juego').style.color = '#81C784';
                            document.getElementById('btn-siguiente-pregunta').style.display = 'inline-block';
                        }
                    }, 600);
                } else {
                    // No es un par
                    setTimeout(() => {
                        carta1.classList.remove('is-flipped');
                        carta2.classList.remove('is-flipped');
                        cartasVolteadas = [];
                        bloqueo = false;
                    }, 1200);
                }
            }
        });
    });

    document.getElementById('btn-volver-juegos').addEventListener('click', () => {
        if (confirm('¿Estás seguro de que quieres volver? Perderás tu progreso actual.')) {
            if (cronometroIntervalo) clearInterval(cronometroIntervalo);
            mostrarSeleccionJuego(materiaActual);
        }
    });

    document.getElementById('btn-siguiente-pregunta').addEventListener('click', () => {
        // En este juego, solo hay una "pregunta" (el tablero completo).
        // La puntuación ya se ha ido sumando.
        mostrarResultados();
    });
}

/** Carga la pregunta actual del juego "Ahorcado" (Hangman). */
function cargarPreguntaHangman() {
    const pregunta = gameData[materiaActual].temas[temaActual].preguntas[preguntaIndex];
    const totalPreguntas = gameData[materiaActual].temas[temaActual].preguntas.length;
    const palabra = pregunta.palabra.toUpperCase();
    let letrasAdivinadas = new Set();
    let errores = 0;
    const maxErrores = 6;

    const temaInfo = gameData[materiaActual].temas[temaActual];
    const tipoJuego = temaInfo.juego;

    infoJuegoActualEl.innerHTML = `
        <div class="game-context-info">
            <span><strong>Materia:</strong> ${gameData[materiaActual].nombre}</span>
            <span><strong>Juego:</strong> ${JUEGOS_DISPONIBLES[tipoJuego].nombre}</span> |
            <span><strong>Tema:</strong> ${temaInfo.nombre}</span>
        </div>
    `;
    infoJuegoActualEl.style.display = 'block';

    contenedorJuegoEl.innerHTML = `
        <div class="pregunta-header">
            <div class="pregunta-info">
                <p id="pregunta-juego"><strong>Pista:</strong> ${pregunta.pista}</p>
            </div>
            <div class="game-info-panel">
                <div id="cronometro-juego" class="cronometro-juego" title="Tiempo transcurrido">⏱️ 00:00</div>
            </div>
        </div>
        <div class="progreso-juego">
            <span id="texto-progreso">Palabra ${preguntaIndex + 1} de ${totalPreguntas}</span>
            <div class="barra-progreso"><div class="barra-progreso-relleno" style="width: ${((preguntaIndex + 1) / totalPreguntas) * 100}%;"></div></div>
        </div>
        <div class="hangman-container">
            <div class="hangman-draw">
                <svg height="250" width="200" class="figure-container">
                    <!-- Base -->
                    <line x1="60" y1="230" x2="140" y2="230" />
                    <!-- Poste -->
                    <line x1="100" y1="230" x2="100" y2="50" />
                    <!-- Viga -->
                    <line x1="100" y1="50" x2="170" y2="50" />
                    <!-- Cuerda -->
                    <line x1="170" y1="50" x2="170" y2="80" />
                    <!-- Partes del cuerpo (ocultas por defecto) -->
                    <circle cx="170" cy="100" r="20" class="figure-part" />
                    <line x1="170" y1="120" x2="170" y2="170" class="figure-part" />
                    <line x1="170" y1="130" x2="150" y2="150" class="figure-part" />
                    <line x1="170" y1="130" x2="190" y2="150" class="figure-part" />
                    <line x1="170" y1="170" x2="150" y2="200" class="figure-part" />
                    <line x1="170" y1="170" x2="190" y2="200" class="figure-part" />
                </svg>
            </div>
            <div class="hangman-word" id="hangman-word"></div>
        </div>
        <div class="keyboard" id="keyboard"></div>
        <div class="controles-juego">
             <button id="btn-siguiente-pregunta" class="btn-juego btn-siguiente" style="display: none;">Siguiente</button>
             <button id="btn-volver-juegos" class="btn-juego btn-volver">Volver a Juegos</button>
        </div>
        <div id="feedback-juego"></div>
    `;

    const wordEl = document.getElementById('hangman-word');
    const keyboardEl = document.getElementById('keyboard');
    const figureParts = document.querySelectorAll('.figure-part');
    const feedbackEl = document.getElementById('feedback-juego');

    function actualizarPalabra() {
        wordEl.innerHTML = palabra
            .split('')
            .map(letra => `<span class="letter">${letrasAdivinadas.has(letra) ? letra : ''}</span>`)
            .join('');

        const palabraAdivinada = wordEl.innerText.replace(/\s/g, '') === palabra;
        if (palabraAdivinada) {
            feedbackEl.textContent = "¡Correcto! Has adivinado la palabra.";
            feedbackEl.style.color = '#81C784';
            puntuacionActual++;
            finalizarJuego();
        }
    }

    function manejarLetra(letra) {
        letrasAdivinadas.add(letra);
        const boton = Array.from(keyboardEl.children).find(b => b.textContent === letra);
        boton.disabled = true;

        if (palabra.includes(letra)) {
            boton.classList.add('correct');
            actualizarPalabra();
        } else {
            boton.classList.add('incorrect');
            errores++;
            figureParts[errores - 1].style.display = 'block';
            if (errores === maxErrores) {
                feedbackEl.innerHTML = `¡Juego terminado! La palabra era <strong>${palabra}</strong>.`;
                feedbackEl.style.color = '#E57373';
                preguntasIncorrectas.push(pregunta);
                finalizarJuego();
            }
        }
    }

    function finalizarJuego() {
        document.querySelectorAll('.keyboard button').forEach(b => b.disabled = true);
        document.getElementById('btn-siguiente-pregunta').style.display = 'inline-block';
    }

    // Crear teclado
    'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').forEach(letra => {
        const btn = document.createElement('button');
        btn.textContent = letra;
        btn.addEventListener('click', () => manejarLetra(letra));
        keyboardEl.appendChild(btn);
    });

    actualizarPalabra();

    document.getElementById('btn-volver-juegos').addEventListener('click', () => {
        if (confirm('¿Estás seguro de que quieres volver? Perderás tu progreso actual.')) {
            if (cronometroIntervalo) clearInterval(cronometroIntervalo);
            mostrarSeleccionJuego(materiaActual);
        }
    });

    document.getElementById('btn-siguiente-pregunta').addEventListener('click', () => {
        document.getElementById('btn-siguiente-pregunta').style.display = 'none'; // Ocultar inmediatamente
        preguntaIndex++;
        if (preguntaIndex < totalPreguntas) {
            cargarPreguntaHangman();
        } else {
            mostrarResultados();
        }
    });
}

/** Carga la pregunta actual del juego "Completar la Palabra" (FillTheWord). */
function cargarPreguntaFillTheWord() {
    const pregunta = gameData[materiaActual].temas[temaActual].preguntas[preguntaIndex];
    const totalPreguntas = gameData[materiaActual].temas[temaActual].preguntas.length;
    intentosRestantes = 3; // Inicializamos las vidas para la pregunta
    const solucion = pregunta.solucion.toUpperCase();

    // Dividir el texto en partes para una mejor alineación
    const partesTexto = pregunta.texto.split(/(_+)/);
    const textoPreguntaHtml = partesTexto.map(parte => {
        if (parte.includes('_')) {
            return `<div class="fill-inputs-container">
                        ${Array.from({ length: solucion.length }, () => `<input type="text" class="fill-letter-input" maxlength="1">`).join('')}
                    </div>`;
        }
        return `<span>${parte}</span>`;
    }).join('');

    const temaInfo = gameData[materiaActual].temas[temaActual];
    const tipoJuego = temaInfo.juego;

    infoJuegoActualEl.innerHTML = `
        <div class="game-context-info">
            <span><strong>Materia:</strong> ${gameData[materiaActual].nombre}</span>
            <span><strong>Juego:</strong> ${JUEGOS_DISPONIBLES[tipoJuego].nombre}</span> |
            <span><strong>Tema:</strong> ${temaInfo.nombre}</span>
        </div>
    `;
    infoJuegoActualEl.style.display = 'block';
    infoJuegoActualEl.classList.add('anim-in');

    contenedorJuegoEl.innerHTML = `
        <div class="game-info-panel" style="justify-content: center; margin-bottom: 20px;">
            <div class="game-stats">
                <div class="intentos-restantes" title="Vidas restantes">Vidas: <span id="vidas">❤️❤️❤️</span></div>
                <div id="cronometro-juego" class="cronometro-juego" title="Tiempo transcurrido">⏱️ 00:00</div>
            </div>
        </div>
        <div class="pregunta-header">
            <div class="pregunta-info">
                <div id="pregunta-juego" class="fill-the-word-container">${textoPreguntaHtml}</div>
            </div>
        </div>
        <div class="progreso-juego">
            <span id="texto-progreso">Pregunta ${preguntaIndex + 1} de ${totalPreguntas}</span>
            <div class="barra-progreso"><div class="barra-progreso-relleno" style="width: ${((preguntaIndex + 1) / totalPreguntas) * 100}%;"></div></div>
        </div>
        <div class="explicacion-juego">
            <p>Al presionar 'Verificar', las letras en <span class="color-verde">verde</span> son correctas y las <span class="color-rojo">rojas</span> son incorrectas.</p>
        </div>
        <div class="controles-juego">
             <button id="btn-verificar" class="btn-juego btn-verificar">Verificar</button>
             <button id="btn-siguiente-pregunta" class="btn-juego btn-siguiente" style="display: none;">Siguiente</button>
             <button id="btn-volver-juegos" class="btn-juego btn-volver">Volver a Juegos</button>
        </div>
        <div id="feedback-juego"></div>
    `;

    const inputs = document.querySelectorAll('.fill-letter-input');
    inputs[0].focus();

    inputs.forEach((input, index) => {
        input.addEventListener('input', () => {
            input.value = input.value.toUpperCase();
            if (input.value && index < inputs.length - 1) {
                inputs[index + 1].focus();
            }
        });

        input.addEventListener('keydown', (e) => {
            if (e.key === 'Backspace' && !input.value && index > 0) {
                inputs[index - 1].focus();
            } else if (e.key === 'ArrowLeft' && index > 0) {
                inputs[index - 1].focus();
            } else if (e.key === 'ArrowRight' && index < inputs.length - 1) {
                inputs[index + 1].focus();
            }
        });
    });

    function verificarPalabra(isEnter = false) {
        const respuestaUsuario = Array.from(inputs).map(input => input.value).join('');
        const feedbackEl = document.getElementById('feedback-juego');
        const vidasEl = document.getElementById('vidas');

        // Si se presiona Enter y no se han llenado todas las casillas, no hacer nada.
        if (isEnter && respuestaUsuario.length !== solucion.length) {
            return;
        }

        if (respuestaUsuario === solucion) {
            feedbackEl.textContent = "¡Correcto!";
            feedbackEl.style.color = '#81C784';
            puntuacionActual++;
            inputs.forEach(input => {
                input.classList.add('correct');
                input.disabled = true;
            });
            document.getElementById('btn-verificar').style.display = 'none';
            document.getElementById('btn-siguiente-pregunta').style.display = 'inline-block';
        } else {
            // Si la respuesta es incorrecta, se pierde una vida
            intentosRestantes--;
            vidasEl.textContent = '❤️'.repeat(intentosRestantes) + '🖤'.repeat(3 - intentosRestantes);

            if (intentosRestantes > 0) {
                feedbackEl.textContent = `Incorrecto. Te quedan ${intentosRestantes} vidas.`;
                feedbackEl.style.color = '#FFC107';
                // Pinta las casillas de verde (correctas) y rojo (incorrectas) como pista
                inputs.forEach((input, i) => {
                    const esCorrecta = input.value === solucion[i];
                    input.classList.toggle('correct', esCorrecta);
                    input.classList.toggle('incorrect', !esCorrecta);
                    input.classList.toggle('incorrect', !esCorrecta && input.value !== '');
                });
            } else {
                feedbackEl.innerHTML = `¡Sin vidas! La respuesta correcta era <strong>${solucion}</strong>.`;
                feedbackEl.style.color = '#E57373';
                preguntasIncorrectas.push(pregunta);
                inputs.forEach((input, i) => {
                    input.value = solucion[i];
                    input.classList.remove('incorrect');
                    input.classList.add('correct');
                    input.disabled = true;
                });
                document.getElementById('btn-verificar').style.display = 'none';
                document.getElementById('btn-siguiente-pregunta').style.display = 'inline-block';
            }
        }
    }

    document.getElementById('btn-verificar').addEventListener('click', verificarPalabra);
    // Añadir listener de Enter al contenedor de los inputs
    document.querySelector('.fill-inputs-container').addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault(); // Evita que el formulario se envíe si lo hubiera
            verificarPalabra(true);
        }
    });

    document.getElementById('btn-volver-juegos').addEventListener('click', () => {
        if (confirm('¿Estás seguro de que quieres volver? Perderás tu progreso actual.')) {
            if (cronometroIntervalo) clearInterval(cronometroIntervalo);
            mostrarSeleccionJuego(materiaActual);
        }
    });

    document.getElementById('btn-siguiente-pregunta').addEventListener('click', () => {
        document.getElementById('btn-siguiente-pregunta').style.display = 'none'; // Ocultar inmediatamente
        preguntaIndex++;
        if (preguntaIndex < totalPreguntas) {
            cargarPreguntaFillTheWord();
        } else {
            mostrarResultados();
        }
    });
}

/** Carga la pregunta/reto actual del juego "Construye la Fracción". */
function cargarPreguntaBuildFraction() {
    intentosRestantes = 3;
    const pregunta = gameData[materiaActual].temas[temaActual].preguntas[preguntaIndex];
    const totalPreguntas = gameData[materiaActual].temas[temaActual].preguntas.length;
    const temaInfo = gameData[materiaActual].temas[temaActual];
    const tipoJuego = temaInfo.juego;

    infoJuegoActualEl.innerHTML = `
        <div class="game-context-info">
            <span><strong>Materia:</strong> ${gameData[materiaActual].nombre}</span>
            <span><strong>Juego:</strong> ${JUEGOS_DISPONIBLES[tipoJuego].nombre}</span> |
            <span><strong>Tema:</strong> ${temaInfo.nombre}</span>
        </div>
    `;
    infoJuegoActualEl.style.display = 'block';

    const numObjetivo = pregunta.numerador;
    const denObjetivo = pregunta.denominador;
    const forma = pregunta.forma || 'circulo';
    const seleccionadas = new Set();
    let terminado = false;

    // Generar figura interactiva (Círculo SVG o Barra Rectangular)
    let figuraHtml = '';
    if (forma === 'circulo') {
        const cx = 125, cy = 125, r = 110;
        let pathsHtml = '';
        for (let i = 0; i < denObjetivo; i++) {
            const startAngle = (i * 2 * Math.PI) / denObjetivo - Math.PI / 2;
            const endAngle = ((i + 1) * 2 * Math.PI) / denObjetivo - Math.PI / 2;
            const x1 = (cx + r * Math.cos(startAngle)).toFixed(2);
            const y1 = (cy + r * Math.sin(startAngle)).toFixed(2);
            const x2 = (cx + r * Math.cos(endAngle)).toFixed(2);
            const y2 = (cy + r * Math.sin(endAngle)).toFixed(2);
            const largeArcFlag = (endAngle - startAngle) > Math.PI ? 1 : 0;
            const d = `M ${cx} ${cy} L ${x1} ${y1} A ${r} ${r} 0 ${largeArcFlag} 1 ${x2} ${y2} Z`;
            pathsHtml += `<path class="fraccion-pieza-svg" data-index="${i}" d="${d}" />`;
        }
        figuraHtml = `<svg class="fraccion-svg-figura" viewBox="0 0 250 250">${pathsHtml}</svg>`;
    } else {
        let segmentosHtml = '';
        for (let i = 0; i < denObjetivo; i++) {
            segmentosHtml += `<div class="fraccion-barra-segmento" data-index="${i}">1/${denObjetivo}</div>`;
        }
        figuraHtml = `<div class="fraccion-barra-contenedor">${segmentosHtml}</div>`;
    }

    contenedorJuegoEl.innerHTML = `
        <div class="pregunta-header">
            <div class="pregunta-info">
                <p id="pregunta-juego">${pregunta.texto || 'Construye la fracción solicitada:'}</p>
            </div>
            <div class="game-info-panel">
                <div class="intentos-restantes" title="Vidas restantes">Vidas: <span id="vidas">❤️❤️❤️</span></div>
                <div id="cronometro-juego" class="cronometro-juego" title="Tiempo transcurrido">⏱️ 00:00</div>
            </div>
        </div>
        <div class="progreso-juego">
            <span id="texto-progreso">Reto ${preguntaIndex + 1} de ${totalPreguntas}</span>
            <div class="barra-progreso">
                <div class="barra-progreso-relleno" style="width: ${((preguntaIndex + 1) / totalPreguntas) * 100}%;"></div>
            </div>
        </div>
        <div class="fraccion-juego-wrapper">
            <div class="fraccion-objetivo-tarjeta">
                <div class="fraccion-badge">
                    <span class="fraccion-num">${numObjetivo}</span>
                    <div class="fraccion-line"></div>
                    <span class="fraccion-den">${denObjetivo}</span>
                </div>
                <div class="fraccion-info-texto">
                    <span class="fraccion-nombre-verbal">${pregunta.verbal || ''}</span>
                    <span class="fraccion-instruccion-detalle">Toca las partes para colorear y armar la fracción</span>
                </div>
            </div>

            <div class="fraccion-lienzo-contenedor">
                ${figuraHtml}
            </div>

            <div class="fraccion-estado-actual">
                <span>Fracción seleccionada:</span>
                <span class="fraccion-contador-destacado"><span id="fraccion-actual-num">0</span> / ${denObjetivo}</span>
            </div>

            <div class="feedback" id="feedback-fraccion"></div>

            <div class="fraccion-controles-accion">
                <button id="btn-limpiar-fraccion" class="btn-juego btn-fraccion-limpiar">Limpiar</button>
                <button id="btn-verificar" class="btn-juego btn-verificar">Verificar</button>
                <button id="btn-siguiente-pregunta" class="btn-juego btn-siguiente" style="display: none;">Siguiente Reto</button>
                <button id="btn-volver-juegos" class="btn-juego btn-volver">Volver a Juegos</button>
            </div>
        </div>
    `;

    const feedbackEl = document.getElementById('feedback-fraccion');
    const vidasEl = document.getElementById('vidas');
    const actualNumEl = document.getElementById('fraccion-actual-num');
    const btnLimpiar = document.getElementById('btn-limpiar-fraccion');
    const btnVerificar = document.getElementById('btn-verificar');
    const btnSiguiente = document.getElementById('btn-siguiente-pregunta');
    const piezas = contenedorJuegoEl.querySelectorAll('.fraccion-pieza-svg, .fraccion-barra-segmento');

    function actualizarContador() {
        if (actualNumEl) actualNumEl.textContent = seleccionadas.size;
    }

    piezas.forEach(pieza => {
        pieza.addEventListener('click', () => {
            if (terminado) return;
            const idx = pieza.dataset.index;
            if (seleccionadas.has(idx)) {
                seleccionadas.delete(idx);
                pieza.classList.remove('activa');
            } else {
                seleccionadas.add(idx);
                pieza.classList.add('activa');
            }
            actualizarContador();
            feedbackEl.textContent = '';
        });
    });

    btnLimpiar.addEventListener('click', () => {
        if (terminado) return;
        seleccionadas.clear();
        piezas.forEach(p => p.classList.remove('activa'));
        actualizarContador();
        feedbackEl.textContent = '';
    });

    btnVerificar.addEventListener('click', () => {
        if (terminado) return;
        const totalSeleccionadas = seleccionadas.size;

        if (totalSeleccionadas === numObjetivo) {
            terminado = true;
            feedbackEl.innerHTML = `¡Excelente! Has formado <strong>${numObjetivo}/${denObjetivo} (${pregunta.verbal})</strong> correctamente. ✨`;
            feedbackEl.style.color = '#81C784';
            puntuacionActual++;
            btnVerificar.style.display = 'none';
            btnLimpiar.style.display = 'none';
            btnSiguiente.style.display = 'inline-block';
        } else {
            intentosRestantes--;
            vidasEl.textContent = '❤️'.repeat(intentosRestantes) + '🖤'.repeat(3 - intentosRestantes);

            if (intentosRestantes > 0) {
                feedbackEl.innerHTML = `Tienes <strong>${totalSeleccionadas}/${denObjetivo}</strong> partes. Necesitas <strong>${numObjetivo}/${denObjetivo}</strong>. Te quedan ${intentosRestantes} vidas. 🤔`;
                feedbackEl.style.color = '#FFC107';
            } else {
                terminado = true;
                feedbackEl.innerHTML = `¡Sin vidas! Para representar <strong>${numObjetivo}/${denObjetivo}</strong> debías seleccionar <strong>${numObjetivo}</strong> partes.`;
                feedbackEl.style.color = '#E57373';
                preguntasIncorrectas.push(pregunta);
                btnVerificar.style.display = 'none';
                btnLimpiar.style.display = 'none';
                btnSiguiente.style.display = 'inline-block';
            }
        }
    });

    document.getElementById('btn-volver-juegos').addEventListener('click', () => {
        if (confirm('¿Estás seguro de que quieres volver? Perderás tu progreso actual.')) {
            if (cronometroIntervalo) clearInterval(cronometroIntervalo);
            mostrarSeleccionJuego(materiaActual);
        }
    });

    btnSiguiente.addEventListener('click', () => {
        btnSiguiente.style.display = 'none';
        contenedorJuegoEl.classList.add('anim-out');
        setTimeout(() => {
            preguntaIndex++;
            if (preguntaIndex < totalPreguntas) {
                cargarPreguntaBuildFraction();
            } else {
                mostrarResultados();
            }
            contenedorJuegoEl.classList.remove('anim-out');
            contenedorJuegoEl.classList.add('anim-in');
        }, 400);
    });
}

/** Carga la pregunta/reto actual del juego "Código Secreto (MCM y MCD)". */
function cargarPreguntaSecretCode() {
    intentosRestantes = 3;
    const pregunta = gameData[materiaActual].temas[temaActual].preguntas[preguntaIndex];
    const totalPreguntas = gameData[materiaActual].temas[temaActual].preguntas.length;
    const temaInfo = gameData[materiaActual].temas[temaActual];
    const tipoJuego = temaInfo.juego;

    infoJuegoActualEl.innerHTML = `
        <div class="game-context-info">
            <span><strong>Materia:</strong> ${gameData[materiaActual].nombre}</span>
            <span><strong>Juego:</strong> ${JUEGOS_DISPONIBLES[tipoJuego].nombre}</span> |
            <span><strong>Tema:</strong> ${temaInfo.nombre}</span>
        </div>
    `;
    infoJuegoActualEl.style.display = 'block';

    let codigoIngresado = '';
    let terminado = false;

    contenedorJuegoEl.innerHTML = `
        <div class="pregunta-header">
            <div class="pregunta-info">
                <p id="pregunta-juego">${pregunta.texto || 'Descifra el código secreto:'}</p>
            </div>
            <div class="game-info-panel">
                <div class="intentos-restantes" title="Vidas restantes">Vidas: <span id="vidas">❤️❤️❤️</span></div>
                <div id="cronometro-juego" class="cronometro-juego" title="Tiempo transcurrido">⏱️ 00:00</div>
            </div>
        </div>
        <div class="progreso-juego">
            <span id="texto-progreso">Cerradura ${preguntaIndex + 1} de ${totalPreguntas}</span>
            <div class="barra-progreso">
                <div class="barra-progreso-relleno" style="width: ${((preguntaIndex + 1) / totalPreguntas) * 100}%;"></div>
            </div>
        </div>
        <div class="codigo-secreto-wrapper">
            <div class="boveda-consola">
                <div class="boveda-estado-header">
                    <span class="boveda-tipo-badge">${pregunta.tipo || 'CÓDIGO'}</span>
                    <span id="boveda-candado" class="boveda-candado-icono">🔒</span>
                </div>
                <div class="boveda-operacion-display">${pregunta.operacion || pregunta.texto}</div>
                <div id="pantalla-codigo-led" class="boveda-pantalla-codigo">_ _</div>

                <div class="teclado-numerico-grid">
                    <button class="btn-keypad" data-digit="1">1</button>
                    <button class="btn-keypad" data-digit="2">2</button>
                    <button class="btn-keypad" data-digit="3">3</button>
                    <button class="btn-keypad" data-digit="4">4</button>
                    <button class="btn-keypad" data-digit="5">5</button>
                    <button class="btn-keypad" data-digit="6">6</button>
                    <button class="btn-keypad" data-digit="7">7</button>
                    <button class="btn-keypad" data-digit="8">8</button>
                    <button class="btn-keypad" data-digit="9">9</button>
                    <button class="btn-keypad btn-keypad-clear" id="btn-key-clear" title="Borrar">⌫</button>
                    <button class="btn-keypad" data-digit="0">0</button>
                    <button class="btn-keypad btn-keypad-enter" id="btn-key-enter" title="Desbloquear">🔓</button>
                </div>
            </div>

            <div class="feedback" id="feedback-codigo"></div>

            <div class="controles-creacion" style="justify-content: center; margin-top: 10px;">
                <button id="btn-siguiente-pregunta" class="btn-juego btn-siguiente" style="display: none;">Siguiente Cerradura</button>
                <button id="btn-volver-juegos" class="btn-juego btn-volver">Volver a Juegos</button>
            </div>
        </div>
    `;

    const pantallaLed = document.getElementById('pantalla-codigo-led');
    const candadoIcono = document.getElementById('boveda-candado');
    const feedbackEl = document.getElementById('feedback-codigo');
    const vidasEl = document.getElementById('vidas');
    const btnSiguiente = document.getElementById('btn-siguiente-pregunta');

    function actualizarPantalla() {
        if (!pantallaLed) return;
        pantallaLed.textContent = codigoIngresado ? codigoIngresado : '_ _';
        pantallaLed.classList.remove('acierto', 'error');
    }

    function presionarDigito(digito) {
        if (terminado) return;
        if (codigoIngresado.length < 5) {
            codigoIngresado += digito;
            actualizarPantalla();
            feedbackEl.textContent = '';
        }
    }

    function borrarDigito() {
        if (terminado) return;
        if (codigoIngresado.length > 0) {
            codigoIngresado = codigoIngresado.slice(0, -1);
            actualizarPantalla();
            feedbackEl.textContent = '';
        }
    }

    function verificarCodigo() {
        if (terminado || !codigoIngresado) return;

        const respuestaTrim = codigoIngresado.trim();
        const solucionEsperada = String(pregunta.solucion).trim();

        if (respuestaTrim === solucionEsperada) {
            terminado = true;
            pantallaLed.classList.add('acierto');
            candadoIcono.textContent = '🔓';
            candadoIcono.classList.add('desbloqueado');
            feedbackEl.innerHTML = `¡Código correcto! La cerradura se ha abierto con éxito. ✨`;
            feedbackEl.style.color = '#81C784';
            puntuacionActual++;
            btnSiguiente.style.display = 'inline-block';
        } else {
            intentosRestantes--;
            pantallaLed.classList.add('error');
            vidasEl.textContent = '❤️'.repeat(intentosRestantes) + '🖤'.repeat(3 - intentosRestantes);

            if (intentosRestantes > 0) {
                feedbackEl.innerHTML = `Código incorrecto. Te quedan ${intentosRestantes} vidas. Pista: ${pregunta.pista || 'Revisa tu cálculo.'} 🤔`;
                feedbackEl.style.color = '#FFC107';
                setTimeout(() => {
                    codigoIngresado = '';
                    actualizarPantalla();
                }, 900);
            } else {
                terminado = true;
                pantallaLed.textContent = solucionEsperada;
                feedbackEl.innerHTML = `¡Sin vidas! El código secreto era: "<strong>${solucionEsperada}</strong>".`;
                feedbackEl.style.color = '#E57373';
                preguntasIncorrectas.push(pregunta);
                btnSiguiente.style.display = 'inline-block';
            }
        }
    }

    // Event listeners para botones del teclado virtual
    contenedorJuegoEl.querySelectorAll('.btn-keypad[data-digit]').forEach(btn => {
        btn.addEventListener('click', () => presionarDigito(btn.dataset.digit));
    });

    document.getElementById('btn-key-clear').addEventListener('click', borrarDigito);
    document.getElementById('btn-key-enter').addEventListener('click', verificarCodigo);

    // Soporte para teclado físico
    const handleKeyDown = (e) => {
        if (contenedorJuegoEl.style.display !== 'block' || gameData[materiaActual]?.temas[temaActual]?.juego !== 'secretCode') return;
        if (e.key >= '0' && e.key <= '9') {
            presionarDigito(e.key);
        } else if (e.key === 'Backspace') {
            borrarDigito();
        } else if (e.key === 'Enter') {
            if (terminado) {
                if (btnSiguiente && btnSiguiente.style.display !== 'none') btnSiguiente.click();
            } else {
                verificarCodigo();
            }
        }
    };
    window.addEventListener('keydown', handleKeyDown);

    document.getElementById('btn-volver-juegos').addEventListener('click', () => {
        if (confirm('¿Estás seguro de que quieres volver? Perderás tu progreso actual.')) {
            window.removeEventListener('keydown', handleKeyDown);
            if (cronometroIntervalo) clearInterval(cronometroIntervalo);
            mostrarSeleccionJuego(materiaActual);
        }
    });

    btnSiguiente.addEventListener('click', () => {
        window.removeEventListener('keydown', handleKeyDown);
        btnSiguiente.style.display = 'none';
        contenedorJuegoEl.classList.add('anim-out');
        setTimeout(() => {
            preguntaIndex++;
            if (preguntaIndex < totalPreguntas) {
                cargarPreguntaSecretCode();
            } else {
                mostrarResultados();
            }
            contenedorJuegoEl.classList.remove('anim-out');
            contenedorJuegoEl.classList.add('anim-in');
        }, 400);
    });
}

/** Carga la pregunta/reto actual del juego "Selección Rápida: Números Enteros". */
function cargarPreguntaQuickSelect() {
    intentosRestantes = 3;
    const pregunta = gameData[materiaActual].temas[temaActual].preguntas[preguntaIndex];
    const totalPreguntas = gameData[materiaActual].temas[temaActual].preguntas.length;
    const temaInfo = gameData[materiaActual].temas[temaActual];
    const tipoJuego = temaInfo.juego;

    infoJuegoActualEl.innerHTML = `
        <div class="game-context-info">
            <span><strong>Materia:</strong> ${gameData[materiaActual].nombre}</span>
            <span><strong>Juego:</strong> ${JUEGOS_DISPONIBLES[tipoJuego].nombre}</span> |
            <span><strong>Tema:</strong> ${temaInfo.nombre}</span>
        </div>
    `;
    infoJuegoActualEl.style.display = 'block';

    const letras = ['A', 'B', 'C', 'D'];
    const opcionesShuffled = [...pregunta.opciones];
    shuffleArray(opcionesShuffled);
    let contestado = false;

    contenedorJuegoEl.innerHTML = `
        <div class="pregunta-header">
            <div class="pregunta-info">
                <p id="pregunta-juego">Selecciona la respuesta correcta lo más rápido que puedas:</p>
            </div>
            <div class="game-info-panel">
                <div class="intentos-restantes" title="Vidas restantes">Vidas: <span id="vidas">❤️❤️❤️</span></div>
                <div id="cronometro-juego" class="cronometro-juego" title="Tiempo transcurrido">⏱️ 00:00</div>
            </div>
        </div>
        <div class="progreso-juego">
            <span id="texto-progreso">Pregunta ${preguntaIndex + 1} de ${totalPreguntas}</span>
            <div class="barra-progreso">
                <div class="barra-progreso-relleno" style="width: ${((preguntaIndex + 1) / totalPreguntas) * 100}%;"></div>
            </div>
        </div>
        <div class="quick-select-wrapper">
            <div class="quick-pregunta-card">
                <p class="quick-pregunta-texto">${pregunta.texto}</p>
            </div>

            <div class="quick-opciones-grid">
                ${opcionesShuffled.map((opc, idx) => `
                    <button class="btn-quick-opcion" data-opcion="${opc}">
                        <span class="btn-quick-letra">${letras[idx] || (idx + 1)}</span>
                        <span class="btn-quick-val">${opc}</span>
                    </button>
                `).join('')}
            </div>

            <div class="feedback" id="feedback-quick"></div>

            <div class="controles-creacion" style="justify-content: center; margin-top: 10px;">
                <button id="btn-siguiente-pregunta" class="btn-juego btn-siguiente" style="display: none;">Siguiente Pregunta</button>
                <button id="btn-volver-juegos" class="btn-juego btn-volver">Volver a Juegos</button>
            </div>
        </div>
    `;

    const feedbackEl = document.getElementById('feedback-quick');
    const vidasEl = document.getElementById('vidas');
    const btnSiguiente = document.getElementById('btn-siguiente-pregunta');
    const botonesOpciones = contenedorJuegoEl.querySelectorAll('.btn-quick-opcion');

    botonesOpciones.forEach(btn => {
        btn.addEventListener('click', () => {
            if (contestado) return;
            contestado = true;

            const eleccion = btn.dataset.opcion;
            const correcta = String(pregunta.solucion).trim();

            if (eleccion === correcta) {
                btn.classList.add('correct');
                feedbackEl.innerHTML = `¡Excelente! Respuesta correcta. ✨`;
                feedbackEl.style.color = '#81C784';
                puntuacionActual++;
                btnSiguiente.style.display = 'inline-block';
            } else {
                btn.classList.add('incorrect');
                // Resaltar la correcta
                botonesOpciones.forEach(b => {
                    if (b.dataset.opcion === correcta) b.classList.add('correct');
                });

                intentosRestantes--;
                vidasEl.textContent = '❤️'.repeat(intentosRestantes) + '🖤'.repeat(3 - intentosRestantes);

                if (intentosRestantes > 0) {
                    feedbackEl.innerHTML = `Incorrecto. La respuesta era <strong>${correcta}</strong>. Te quedan ${intentosRestantes} vidas. Pista: ${pregunta.pista || ''} 🤔`;
                    feedbackEl.style.color = '#FFC107';
                } else {
                    feedbackEl.innerHTML = `¡Sin vidas! La respuesta correcta era "<strong>${correcta}</strong>".`;
                    feedbackEl.style.color = '#E57373';
                    preguntasIncorrectas.push(pregunta);
                }
                btnSiguiente.style.display = 'inline-block';
            }
        });
    });

    document.getElementById('btn-volver-juegos').addEventListener('click', () => {
        if (confirm('¿Estás seguro de que quieres volver? Perderás tu progreso actual.')) {
            if (cronometroIntervalo) clearInterval(cronometroIntervalo);
            mostrarSeleccionJuego(materiaActual);
        }
    });

    btnSiguiente.addEventListener('click', () => {
        btnSiguiente.style.display = 'none';
        contenedorJuegoEl.classList.add('anim-out');
        setTimeout(() => {
            preguntaIndex++;
            if (preguntaIndex < totalPreguntas) {
                cargarPreguntaQuickSelect();
            } else {
                mostrarResultados();
            }
            contenedorJuegoEl.classList.remove('anim-out');
            contenedorJuegoEl.classList.add('anim-in');
        }, 400);
    });
}

/** Carga la pregunta/reto del juego "Combina Términos". */
function cargarPreguntaCombineLikeTerms() {
    intentosRestantes = 3;
    const pregunta = gameData[materiaActual].temas[temaActual].preguntas[preguntaIndex];
    const totalPreguntas = gameData[materiaActual].temas[temaActual].preguntas.length;
    const temaInfo = gameData[materiaActual].temas[temaActual];
    const tipoJuego = temaInfo.juego;
    let terminado = false;

    infoJuegoActualEl.innerHTML = `
        <div class="game-context-info">
            <span><strong>Materia:</strong> ${gameData[materiaActual].nombre}</span>
            <span><strong>Juego:</strong> ${JUEGOS_DISPONIBLES[tipoJuego].nombre}</span> |
            <span><strong>Tema:</strong> ${temaInfo.nombre}</span>
        </div>
    `;
    infoJuegoActualEl.style.display = 'block';

    contenedorJuegoEl.innerHTML = `
        <div class="pregunta-header">
            <div class="pregunta-info">
                <p id="pregunta-juego">Selecciona los términos semejantes:</p>
                <div class="formula-display combina-expresion">${pregunta.expresion}</div>
            </div>
            <div class="game-info-panel">
                <div class="intentos-restantes" title="Vidas restantes">Vidas: <span id="vidas">❤️❤️❤️</span></div>
                <div id="cronometro-juego" class="cronometro-juego" title="Tiempo transcurrido">⏱️ 00:00</div>
            </div>
        </div>
        <div class="progreso-juego">
            <span id="texto-progreso">Reto ${preguntaIndex + 1} de ${totalPreguntas}</span>
            <div class="barra-progreso">
                <div class="barra-progreso-relleno" style="width: ${((preguntaIndex + 1) / totalPreguntas) * 100}%;"></div>
            </div>
        </div>
        <p class="combina-instruccion">Elige todos los términos que tienen la misma parte literal.</p>
        <div class="combina-terminos">
            ${pregunta.terminos.map(termino => `<button class="combina-termino" data-id="${termino.id}">${termino.valor}</button>`).join('')}
        </div>
        <div class="combina-resultado" id="combina-resultado">Seleccionados: 0</div>
        <div class="controles-juego">
            <button id="btn-verificar" class="btn-juego btn-verificar">Verificar</button>
            <button id="btn-siguiente-pregunta" class="btn-juego btn-siguiente" style="display: none;">Siguiente</button>
            <button id="btn-volver-juegos" class="btn-juego btn-volver">Volver a Juegos</button>
        </div>
        <div id="feedback-juego"></div>
    `;

    const botones = contenedorJuegoEl.querySelectorAll('.combina-termino');
    const resultadoEl = document.getElementById('combina-resultado');
    const feedbackEl = document.getElementById('feedback-juego');
    const vidasEl = document.getElementById('vidas');
    const btnVerificar = document.getElementById('btn-verificar');
    const btnSiguiente = document.getElementById('btn-siguiente-pregunta');
    const seleccionados = new Set();

    botones.forEach(boton => {
        boton.addEventListener('click', () => {
            if (terminado) return;
            const id = boton.dataset.id;
            if (seleccionados.has(id)) {
                seleccionados.delete(id);
                boton.classList.remove('selected');
            } else {
                seleccionados.add(id);
                boton.classList.add('selected');
            }
            resultadoEl.textContent = `Seleccionados: ${seleccionados.size}`;
        });
    });

    btnVerificar.addEventListener('click', () => {
        if (terminado) return;
        const solucion = new Set(pregunta.correctos);
        const esCorrecto = seleccionados.size === solucion.size && [...seleccionados].every(id => solucion.has(id));

        if (esCorrecto) {
            terminado = true;
            puntuacionActual++;
            botones.forEach(boton => boton.disabled = true);
            btnVerificar.style.display = 'none';
            btnSiguiente.style.display = 'inline-block';
            feedbackEl.innerHTML = `¡Correcto! La expresión simplificada es <strong>${pregunta.resultado}</strong>.`;
            feedbackEl.style.color = '#81C784';
        } else {
            intentosRestantes--;
            vidasEl.textContent = '❤️'.repeat(intentosRestantes) + '🖤'.repeat(3 - intentosRestantes);
            if (intentosRestantes > 0) {
                feedbackEl.textContent = `No es correcto. Revisa la parte literal. Te quedan ${intentosRestantes} vidas.`;
                feedbackEl.style.color = '#FFC107';
            } else {
                terminado = true;
                preguntasIncorrectas.push(pregunta);
                botones.forEach(boton => boton.disabled = true);
                btnVerificar.style.display = 'none';
                btnSiguiente.style.display = 'inline-block';
                feedbackEl.innerHTML = `¡Sin vidas! La selección correcta produce <strong>${pregunta.resultado}</strong>.`;
                feedbackEl.style.color = '#E57373';
            }
        }
    });

    document.getElementById('btn-volver-juegos').addEventListener('click', () => {
        if (confirm('¿Estás seguro de que quieres volver? Perderás tu progreso actual.')) {
            if (cronometroIntervalo) clearInterval(cronometroIntervalo);
            mostrarSeleccionJuego(materiaActual);
        }
    });

    btnSiguiente.addEventListener('click', () => {
        btnSiguiente.style.display = 'none';
        contenedorJuegoEl.classList.add('anim-out');
        setTimeout(() => {
            preguntaIndex++;
            if (preguntaIndex < totalPreguntas) cargarPreguntaCombineLikeTerms();
            else mostrarResultados();
            contenedorJuegoEl.classList.remove('anim-out');
            contenedorJuegoEl.classList.add('anim-in');
        }, 400);
    });
}

/** Carga la pregunta/reto del juego "Completa la Fórmula". */
function cargarPreguntaCompleteNotableProduct() {
    intentosRestantes = 3;
    const pregunta = gameData[materiaActual].temas[temaActual].preguntas[preguntaIndex];
    const totalPreguntas = gameData[materiaActual].temas[temaActual].preguntas.length;
    const temaInfo = gameData[materiaActual].temas[temaActual];
    const tipoJuego = temaInfo.juego;
    let terminado = false;
    let seleccion = [];
    const partes = [...pregunta.partes];
    shuffleArray(partes);

    infoJuegoActualEl.innerHTML = `
        <div class="game-context-info">
            <span><strong>Materia:</strong> ${gameData[materiaActual].nombre}</span>
            <span><strong>Juego:</strong> ${JUEGOS_DISPONIBLES[tipoJuego].nombre}</span> |
            <span><strong>Tema:</strong> ${temaInfo.nombre}</span>
        </div>
    `;
    infoJuegoActualEl.style.display = 'block';

    contenedorJuegoEl.innerHTML = `
        <div class="pregunta-header">
            <div class="pregunta-info">
                <p id="pregunta-juego">Ordena las partes para completar el producto notable:</p>
                <div class="formula-display combina-expresion">${pregunta.expresion}</div>
            </div>
            <div class="game-info-panel">
                <div class="intentos-restantes" title="Vidas restantes">Vidas: <span id="vidas">❤️❤️❤️</span></div>
                <div id="cronometro-juego" class="cronometro-juego" title="Tiempo transcurrido">⏱️ 00:00</div>
            </div>
        </div>
        <div class="progreso-juego">
            <span id="texto-progreso">Reto ${preguntaIndex + 1} de ${totalPreguntas}</span>
            <div class="barra-progreso"><div class="barra-progreso-relleno" style="width: ${((preguntaIndex + 1) / totalPreguntas) * 100}%;"></div></div>
        </div>
        <div class="formula-construida" id="formula-construida">Haz clic en las piezas en el orden correcto</div>
        <div class="combina-terminos producto-partes">
            ${partes.map(parte => `<button class="combina-termino" data-id="${parte.id}">${parte.valor}</button>`).join('')}
        </div>
        <div class="controles-juego">
            <button id="btn-verificar" class="btn-juego btn-verificar">Verificar</button>
            <button id="btn-siguiente-pregunta" class="btn-juego btn-siguiente" style="display: none;">Siguiente</button>
            <button id="btn-volver-juegos" class="btn-juego btn-volver">Volver a Juegos</button>
        </div>
        <div id="feedback-juego"></div>
    `;

    const botones = contenedorJuegoEl.querySelectorAll('.combina-termino');
    const formulaEl = document.getElementById('formula-construida');
    const feedbackEl = document.getElementById('feedback-juego');
    const vidasEl = document.getElementById('vidas');
    const btnVerificar = document.getElementById('btn-verificar');
    const btnSiguiente = document.getElementById('btn-siguiente-pregunta');

    botones.forEach(boton => {
        boton.addEventListener('click', () => {
            if (terminado) return;
            const id = boton.dataset.id;
            const indice = seleccion.indexOf(id);

            if (indice >= 0) {
                seleccion.splice(indice, 1);
                boton.classList.remove('selected');
            } else {
                seleccion.push(id);
                boton.classList.add('selected');
            }
            formulaEl.textContent = seleccion.map(id => pregunta.partes.find(parte => parte.id === id).valor).join(' ');
        });
    });

    btnVerificar.addEventListener('click', () => {
        if (terminado) return;
        const esCorrecto = seleccion.length === pregunta.solucion.length && seleccion.every((id, index) => id === pregunta.solucion[index]);
        if (esCorrecto) {
            terminado = true;
            puntuacionActual++;
            btnVerificar.style.display = 'none';
            btnSiguiente.style.display = 'inline-block';
            feedbackEl.innerHTML = `¡Correcto! Has formado <strong>${pregunta.resultado}</strong>.`;
            feedbackEl.style.color = '#81C784';
        } else {
            intentosRestantes--;
            vidasEl.textContent = '❤️'.repeat(intentosRestantes) + '🖤'.repeat(3 - intentosRestantes);
            if (intentosRestantes > 0) {
                feedbackEl.textContent = `El orden no es correcto. Te quedan ${intentosRestantes} vidas.`;
                feedbackEl.style.color = '#FFC107';
            } else {
                terminado = true;
                preguntasIncorrectas.push(pregunta);
                btnVerificar.style.display = 'none';
                btnSiguiente.style.display = 'inline-block';
                feedbackEl.innerHTML = `¡Sin vidas! La fórmula correcta es <strong>${pregunta.resultado}</strong>.`;
                feedbackEl.style.color = '#E57373';
            }
        }
    });

    document.getElementById('btn-volver-juegos').addEventListener('click', () => {
        if (confirm('¿Estás seguro de que quieres volver? Perderás tu progreso actual.')) {
            if (cronometroIntervalo) clearInterval(cronometroIntervalo);
            mostrarSeleccionJuego(materiaActual);
        }
    });

    btnSiguiente.addEventListener('click', () => {
        btnSiguiente.style.display = 'none';
        contenedorJuegoEl.classList.add('anim-out');
        setTimeout(() => {
            preguntaIndex++;
            if (preguntaIndex < totalPreguntas) cargarPreguntaCompleteNotableProduct();
            else mostrarResultados();
            contenedorJuegoEl.classList.remove('anim-out');
            contenedorJuegoEl.classList.add('anim-in');
        }, 400);
    });
}

/** Carga la pregunta/reto del juego "Equilibra la Balanza: Proporcionalidad" (7.° grado). */
function cargarPreguntaGrowthPrediction() {
    intentosRestantes = 3;
    const pregunta = gameData[materiaActual].temas[temaActual].preguntas[preguntaIndex];
    const totalPreguntas = gameData[materiaActual].temas[temaActual].preguntas.length;
    const temaInfo = gameData[materiaActual].temas[temaActual];
    const tipoJuego = temaInfo.juego;
    let terminado = false;

    infoJuegoActualEl.innerHTML = `<div class="game-context-info">
        <span><strong>Materia:</strong> ${gameData[materiaActual].nombre}</span>
        <span><strong>Juego:</strong> ${JUEGOS_DISPONIBLES[tipoJuego].nombre}</span> |
        <span><strong>Tema:</strong> ${temaInfo.nombre}</span>
    </div>`;
    infoJuegoActualEl.style.display = 'block';

    contenedorJuegoEl.innerHTML = `
        <div class="pregunta-header">
            <div class="pregunta-info">
                <p id="pregunta-juego">${pregunta.instruccion}</p>
                <div class="formula-display combina-expresion">${pregunta.funcion}</div>
            </div>
            <div class="game-info-panel">
                <div class="intentos-restantes">Vidas: <span id="vidas">❤️❤️❤️</span></div>
                <div id="cronometro-juego" class="cronometro-juego">⏱️ 00:00</div>
            </div>
        </div>
        <div class="progreso-juego"><span id="texto-progreso">Reto ${preguntaIndex + 1} de ${totalPreguntas}</span>
            <div class="barra-progreso"><div class="barra-progreso-relleno" style="width: ${((preguntaIndex + 1) / totalPreguntas) * 100}%;"></div></div>
        </div>
        <div class="growth-options">
            ${pregunta.opciones.map((opcion, index) => `<button class="growth-option" data-index="${index}">${opcion}</button>`).join('')}
        </div>
        <div class="controles-juego">
            <button id="btn-verificar" class="btn-juego btn-verificar">Comprobar</button>
            <button id="btn-siguiente-pregunta" class="btn-juego btn-siguiente" style="display: none;">Siguiente</button>
            <button id="btn-volver-juegos" class="btn-juego btn-volver">Volver a Juegos</button>
        </div>
        <div id="feedback-juego"></div>`;

    const botones = contenedorJuegoEl.querySelectorAll('.growth-option');
    const feedbackEl = document.getElementById('feedback-juego');
    const vidasEl = document.getElementById('vidas');
    const btnVerificar = document.getElementById('btn-verificar');
    const btnSiguiente = document.getElementById('btn-siguiente-pregunta');
    let seleccion = null;

    botones.forEach(boton => boton.addEventListener('click', () => {
        if (terminado) return;
        botones.forEach(opcion => opcion.classList.remove('selected'));
        boton.classList.add('selected');
        seleccion = Number(boton.dataset.index);
    }));

    btnVerificar.addEventListener('click', () => {
        if (terminado || seleccion === null) return;
        if (seleccion === pregunta.correcta) {
            terminado = true;
            puntuacionActual++;
            btnVerificar.style.display = 'none';
            btnSiguiente.style.display = 'inline-block';
            feedbackEl.textContent = `¡Correcto! ${pregunta.explicacion}`;
            feedbackEl.style.color = '#81C784';
        } else {
            intentosRestantes--;
            vidasEl.textContent = '❤️'.repeat(intentosRestantes) + '🖤'.repeat(3 - intentosRestantes);
            if (intentosRestantes > 0) {
                feedbackEl.textContent = `Observa cómo cambia la cantidad en cada paso. Te quedan ${intentosRestantes} vidas.`;
                feedbackEl.style.color = '#FFC107';
            } else {
                terminado = true;
                preguntasIncorrectas.push(pregunta);
                btnVerificar.style.display = 'none';
                btnSiguiente.style.display = 'inline-block';
                feedbackEl.innerHTML = `¡Sin vidas! ${pregunta.explicacion}`;
                feedbackEl.style.color = '#E57373';
            }
        }
    });

    document.getElementById('btn-volver-juegos').addEventListener('click', () => {
        if (confirm('¿Estás seguro de que quieres volver? Perderás tu progreso actual.')) {
            if (cronometroIntervalo) clearInterval(cronometroIntervalo);
            mostrarSeleccionJuego(materiaActual);
        }
    });

    btnSiguiente.addEventListener('click', () => {
        btnSiguiente.style.display = 'none';
        contenedorJuegoEl.classList.add('anim-out');
        setTimeout(() => {
            preguntaIndex++;
            if (preguntaIndex < totalPreguntas) cargarPreguntaGrowthPrediction();
            else mostrarResultados();
            contenedorJuegoEl.classList.remove('anim-out');
            contenedorJuegoEl.classList.add('anim-in');
        }, 400);
    });
}

function cargarPreguntaCombinationBuilder() {
    intentosRestantes = 3;
    const pregunta = gameData[materiaActual].temas[temaActual].preguntas[preguntaIndex];
    const totalPreguntas = gameData[materiaActual].temas[temaActual].preguntas.length;
    const temaInfo = gameData[materiaActual].temas[temaActual];
    const tipoJuego = temaInfo.juego;
    let terminado = false;
    const seleccionados = new Set();

    infoJuegoActualEl.innerHTML = `<div class="game-context-info">
        <span><strong>Materia:</strong> ${gameData[materiaActual].nombre}</span>
        <span><strong>Juego:</strong> ${JUEGOS_DISPONIBLES[tipoJuego].nombre}</span> |
        <span><strong>Tema:</strong> ${temaInfo.nombre}</span>
    </div>`;
    infoJuegoActualEl.style.display = 'block';

    contenedorJuegoEl.innerHTML = `
        <div class="pregunta-header">
            <div class="pregunta-info"><p id="pregunta-juego">${pregunta.instruccion}</p></div>
            <div class="game-info-panel">
                <div class="intentos-restantes">Vidas: <span id="vidas">❤️❤️❤️</span></div>
                <div id="cronometro-juego" class="cronometro-juego">⏱️ 00:00</div>
            </div>
        </div>
        <div class="progreso-juego"><span id="texto-progreso">Reto ${preguntaIndex + 1} de ${totalPreguntas}</span>
            <div class="barra-progreso"><div class="barra-progreso-relleno" style="width: ${((preguntaIndex + 1) / totalPreguntas) * 100}%;"></div></div>
        </div>
        <div class="combination-board">
            ${pregunta.elementos.map(elemento => `<button class="combination-item" data-id="${elemento.id}">${elemento.valor}</button>`).join('')}
        </div>
        <div class="combina-resultado" id="combination-result">Elementos elegidos: 0</div>
        <div class="controles-juego">
            <button id="btn-verificar" class="btn-juego btn-verificar">Comprobar</button>
            <button id="btn-siguiente-pregunta" class="btn-juego btn-siguiente" style="display: none;">Siguiente</button>
            <button id="btn-volver-juegos" class="btn-juego btn-volver">Volver a Juegos</button>
        </div>
        <div id="feedback-juego"></div>`;

    const botones = contenedorJuegoEl.querySelectorAll('.combination-item');
    const resultadoEl = document.getElementById('combination-result');
    const feedbackEl = document.getElementById('feedback-juego');
    const vidasEl = document.getElementById('vidas');
    const btnVerificar = document.getElementById('btn-verificar');
    const btnSiguiente = document.getElementById('btn-siguiente-pregunta');

    botones.forEach(boton => boton.addEventListener('click', () => {
        if (terminado) return;
        const id = boton.dataset.id;
        if (seleccionados.has(id)) {
            seleccionados.delete(id);
            boton.classList.remove('selected');
        } else {
            seleccionados.add(id);
            boton.classList.add('selected');
        }
        resultadoEl.textContent = `Elementos elegidos: ${seleccionados.size}`;
    }));

    btnVerificar.addEventListener('click', () => {
        if (terminado) return;
        const correctos = new Set(pregunta.correctos);
        const esCorrecto = seleccionados.size === correctos.size && [...seleccionados].every(id => correctos.has(id));
        if (esCorrecto) {
            terminado = true;
            puntuacionActual++;
            btnVerificar.style.display = 'none';
            btnSiguiente.style.display = 'inline-block';
            feedbackEl.innerHTML = `¡Combinación correcta! ${pregunta.resultado}`;
            feedbackEl.style.color = '#81C784';
        } else {
            intentosRestantes--;
            vidasEl.textContent = '❤️'.repeat(intentosRestantes) + '🖤'.repeat(3 - intentosRestantes);
            if (intentosRestantes > 0) {
                feedbackEl.textContent = `Esa combinación no cumple la condición. Te quedan ${intentosRestantes} vidas.`;
                feedbackEl.style.color = '#FFC107';
            } else {
                terminado = true;
                preguntasIncorrectas.push(pregunta);
                btnVerificar.style.display = 'none';
                btnSiguiente.style.display = 'inline-block';
                feedbackEl.innerHTML = `¡Sin vidas! ${pregunta.resultado}`;
                feedbackEl.style.color = '#E57373';
            }
        }
    });

    document.getElementById('btn-volver-juegos').addEventListener('click', () => {
        if (confirm('¿Estás seguro de que quieres volver? Perderás tu progreso actual.')) {
            if (cronometroIntervalo) clearInterval(cronometroIntervalo);
            mostrarSeleccionJuego(materiaActual);
        }
    });

    btnSiguiente.addEventListener('click', () => {
        btnSiguiente.style.display = 'none';
        contenedorJuegoEl.classList.add('anim-out');
        setTimeout(() => {
            preguntaIndex++;
            if (preguntaIndex < totalPreguntas) cargarPreguntaCombinationBuilder();
            else mostrarResultados();
            contenedorJuegoEl.classList.remove('anim-out');
            contenedorJuegoEl.classList.add('anim-in');
        }, 400);
    });
}

function cargarPreguntaPythagorasChallenge() {
    intentosRestantes = 3;
    const pregunta = gameData[materiaActual].temas[temaActual].preguntas[preguntaIndex];
    const totalPreguntas = gameData[materiaActual].temas[temaActual].preguntas.length;
    const temaInfo = gameData[materiaActual].temas[temaActual];
    const tipoJuego = temaInfo.juego;
    let terminado = false;

    infoJuegoActualEl.innerHTML = `
        <div class="game-context-info">
            <span><strong>Materia:</strong> ${gameData[materiaActual].nombre}</span>
            <span><strong>Juego:</strong> ${JUEGOS_DISPONIBLES[tipoJuego].nombre}</span> |
            <span><strong>Tema:</strong> ${temaInfo.nombre}</span>
        </div>
    `;
    infoJuegoActualEl.style.display = 'block';

    contenedorJuegoEl.innerHTML = `
        <div class="pregunta-header">
            <div class="pregunta-info">
                <p id="pregunta-juego">Selecciona la longitud correcta del lado perdido:</p>
                <div class="formula-display combina-expresion">${pregunta.problema}</div>
            </div>
            <div class="game-info-panel">
                <div class="intentos-restantes" title="Vidas restantes">Vidas: <span id="vidas">❤️❤️❤️</span></div>
                <div id="cronometro-juego" class="cronometro-juego" title="Tiempo transcurrido">⏱️ 00:00</div>
            </div>
        </div>
        <div class="progreso-juego">
            <span id="texto-progreso">Reto ${preguntaIndex + 1} de ${totalPreguntas}</span>
            <div class="barra-progreso"><div class="barra-progreso-relleno" style="width: ${((preguntaIndex + 1) / totalPreguntas) * 100}%;"></div></div>
        </div>
        <div class="factor-opciones">
            ${pregunta.opciones.map(opcion => `<button class="factor-opcion" data-id="${opcion.id}">${opcion.valor}</button>`).join('')}
        </div>
        <div class="controles-juego">
            <button id="btn-verificar" class="btn-juego btn-verificar">Verificar</button>
            <button id="btn-siguiente-pregunta" class="btn-juego btn-siguiente" style="display: none;">Siguiente</button>
            <button id="btn-volver-juegos" class="btn-juego btn-volver">Volver a Juegos</button>
        </div>
        <div id="feedback-juego"></div>
    `;

    const botones = contenedorJuegoEl.querySelectorAll('.factor-opcion');
    const feedbackEl = document.getElementById('feedback-juego');
    const vidasEl = document.getElementById('vidas');
    const btnVerificar = document.getElementById('btn-verificar');
    const btnSiguiente = document.getElementById('btn-siguiente-pregunta');
    let seleccion = null;

    botones.forEach(boton => {
        boton.addEventListener('click', () => {
            if (terminado) return;
            botones.forEach(opcion => opcion.classList.remove('selected'));
            boton.classList.add('selected');
            seleccion = boton.dataset.id;
        });
    });

    btnVerificar.addEventListener('click', () => {
        if (terminado || !seleccion) return;
        if (seleccion === pregunta.correcta) {
            terminado = true;
            puntuacionActual++;
            btnVerificar.style.display = 'none';
            btnSiguiente.style.display = 'inline-block';
            feedbackEl.innerHTML = `¡Correcto! ${pregunta.resultado}`;
            feedbackEl.style.color = '#81C784';
        } else {
            intentosRestantes--;
            vidasEl.textContent = '❤️'.repeat(intentosRestantes) + '🖤'.repeat(3 - intentosRestantes);
            if (intentosRestantes > 0) {
                feedbackEl.textContent = `Ese no es el lado correcto. Te quedan ${intentosRestantes} vidas.`;
                feedbackEl.style.color = '#FFC107';
            } else {
                terminado = true;
                preguntasIncorrectas.push(pregunta);
                btnVerificar.style.display = 'none';
                btnSiguiente.style.display = 'inline-block';
                feedbackEl.innerHTML = `¡Sin vidas! La respuesta correcta es <strong>${pregunta.resultado}</strong>.`;
                feedbackEl.style.color = '#E57373';
            }
        }
    });

    document.getElementById('btn-volver-juegos').addEventListener('click', () => {
        if (confirm('¿Estás seguro de que quieres volver? Perderás tu progreso actual.')) {
            if (cronometroIntervalo) clearInterval(cronometroIntervalo);
            mostrarSeleccionJuego(materiaActual);
        }
    });

    btnSiguiente.addEventListener('click', () => {
        btnSiguiente.style.display = 'none';
        contenedorJuegoEl.classList.add('anim-out');
        setTimeout(() => {
            preguntaIndex++;
            if (preguntaIndex < totalPreguntas) cargarPreguntaPythagorasChallenge();
            else mostrarResultados();
            contenedorJuegoEl.classList.remove('anim-out');
            contenedorJuegoEl.classList.add('anim-in');
        }, 400);
    });
}

/** Carga la pregunta/reto del juego "Equilibra la Balanza: Proporcionalidad" (7.° grado). */
function cargarPreguntaBalanceScale() {
    intentosRestantes = 3;
    const pregunta = gameData[materiaActual].temas[temaActual].preguntas[preguntaIndex];
    const totalPreguntas = gameData[materiaActual].temas[temaActual].preguntas.length;
    const temaInfo = gameData[materiaActual].temas[temaActual];
    const tipoJuego = temaInfo.juego;

    infoJuegoActualEl.innerHTML = `
        <div class="game-context-info">
            <span><strong>Materia:</strong> ${gameData[materiaActual].nombre}</span>
            <span><strong>Juego:</strong> ${JUEGOS_DISPONIBLES[tipoJuego].nombre}</span> |
            <span><strong>Tema:</strong> ${temaInfo.nombre}</span>
        </div>
    `;
    infoJuegoActualEl.style.display = 'block';

    let terminado = false;

    contenedorJuegoEl.innerHTML = `
        <div class="pregunta-header">
            <div class="pregunta-info">
                <p id="pregunta-juego">Equilibra la balanza resolviendo el problema de proporcionalidad:</p>
            </div>
            <div class="game-info-panel">
                <div class="intentos-restantes" title="Vidas restantes">Vidas: <span id="vidas">❤️❤️❤️</span></div>
                <div id="cronometro-juego" class="cronometro-juego" title="Tiempo transcurrido">⏱️ 00:00</div>
            </div>
        </div>
        <div class="progreso-juego">
            <span id="texto-progreso">Nivel ${preguntaIndex + 1} de ${totalPreguntas}</span>
            <div class="barra-progreso">
                <div class="barra-progreso-relleno" style="width: ${((preguntaIndex + 1) / totalPreguntas) * 100}%;"></div>
            </div>
        </div>

        <div class="balanza-wrapper">
            <div class="balanza-contexto">${pregunta.texto}</div>

            <div class="balanza-visual">
                <div class="balanza-platos">
                    <div class="balanza-plato">
                        <span class="balanza-plato-etiqueta">📌 Dato</span>
                        <div class="balanza-plato-contenido">${pregunta.izquierda}</div>
                    </div>
                    <div class="balanza-plato">
                        <span class="balanza-plato-etiqueta">❓ Incógnita</span>
                        <div class="balanza-plato-contenido incognita">${pregunta.incognita}</div>
                    </div>
                </div>
                <div id="balanza-barra" class="balanza-barra derecha-baja"></div>
                <div class="balanza-soporte"></div>
                <div class="balanza-base"></div>
            </div>

            <div class="balanza-input-zona">
                <div class="balanza-input-row">
                    <label class="balanza-input-label">La respuesta es:</label>
                    <input type="number" id="balanza-respuesta" class="balanza-input" placeholder="0" min="0">
                    <span class="balanza-unidad">${pregunta.unidad || ''}</span>
                </div>
                <div class="controles-creacion" style="justify-content: center;">
                    <button id="btn-verificar-balanza" class="btn-juego btn-verificar">⚖️ Equilibrar</button>
                    <button id="btn-siguiente-pregunta" class="btn-juego btn-siguiente" style="display: none;">Siguiente Nivel</button>
                    <button id="btn-volver-juegos" class="btn-juego btn-volver">Volver a Juegos</button>
                </div>
            </div>

            <div class="feedback" id="feedback-balanza"></div>
        </div>
    `;

    const barra = document.getElementById('balanza-barra');
    const inputEl = document.getElementById('balanza-respuesta');
    const feedbackEl = document.getElementById('feedback-balanza');
    const vidasEl = document.getElementById('vidas');
    const btnVerificar = document.getElementById('btn-verificar-balanza');
    const btnSiguiente = document.getElementById('btn-siguiente-pregunta');

    inputEl.focus();

    function verificar() {
        if (terminado) return;
        const respuesta = inputEl.value.trim();
        if (!respuesta) { feedbackEl.textContent = 'Escribe un número en el campo.'; return; }

        if (respuesta === String(pregunta.solucion)) {
            terminado = true;
            barra.classList.remove('derecha-baja', 'izquierda-baja');
            barra.classList.add('equilibrada');
            feedbackEl.innerHTML = `🎉 ¡Balanza equilibrada! La respuesta correcta es <strong>${pregunta.solucion} ${pregunta.unidad || ''}</strong>.`;
            feedbackEl.style.color = '#81C784';
            puntuacionActual++;
            btnVerificar.style.display = 'none';
            btnSiguiente.style.display = 'inline-block';
        } else {
            intentosRestantes--;
            vidasEl.textContent = '❤️'.repeat(intentosRestantes) + '🖤'.repeat(3 - intentosRestantes);
            barra.classList.remove('derecha-baja');
            barra.classList.add('izquierda-baja');
            setTimeout(() => {
                barra.classList.remove('izquierda-baja');
                barra.classList.add('derecha-baja');
            }, 800);

            if (intentosRestantes > 0) {
                feedbackEl.innerHTML = `Incorrecto. Te quedan ${intentosRestantes} vidas. Pista: ${pregunta.pista} 🤔`;
                feedbackEl.style.color = '#FFC107';
                inputEl.value = '';
                inputEl.focus();
            } else {
                terminado = true;
                barra.classList.remove('derecha-baja');
                feedbackEl.innerHTML = `¡Sin vidas! La respuesta correcta era <strong>${pregunta.solucion} ${pregunta.unidad || ''}</strong>.`;
                feedbackEl.style.color = '#E57373';
                preguntasIncorrectas.push(pregunta);
                btnVerificar.style.display = 'none';
                btnSiguiente.style.display = 'inline-block';
            }
        }
    }

    btnVerificar.addEventListener('click', verificar);
    inputEl.addEventListener('keydown', e => { if (e.key === 'Enter') verificar(); });

    document.getElementById('btn-volver-juegos').addEventListener('click', () => {
        if (confirm('¿Estás seguro de que quieres volver? Perderás tu progreso actual.')) {
            if (cronometroIntervalo) clearInterval(cronometroIntervalo);
            mostrarSeleccionJuego(materiaActual);
        }
    });

    btnSiguiente.addEventListener('click', () => {
        btnSiguiente.style.display = 'none';
        contenedorJuegoEl.classList.add('anim-out');
        setTimeout(() => {
            preguntaIndex++;
            if (preguntaIndex < totalPreguntas) {
                cargarPreguntaBalanceScale();
            } else {
                mostrarResultados();
            }
            contenedorJuegoEl.classList.remove('anim-out');
            contenedorJuegoEl.classList.add('anim-in');
        }, 400);
    });
}

/** Guarda los resultados del juego en Supabase. */
async function guardarResultados(puntuacion, total, tiempo, tipoJuego, errores) {
    if (esDocente || !infoEstudiante || esInvitado) {
        console.log("Modo docente, invitado o sin sesión. No se guardan resultados.");
        return;
    }

    const temaInfo = gameData[materiaActual].temas[temaActual];

    if (!temaInfo) {
        console.error("Error crítico: No se pudo encontrar la información del tema actual. No se guardarán los resultados.", { materiaActual, temaActual });
        return;
    }

    const nuevoResultado = {
        nombreestudiante: infoEstudiante.nombre,
        grado: gradoActual,
        grupo: grupoActual,
        materia: gameData[materiaActual].nombre,
        tema: temaInfo.nombre,
        tipojuego: tipoJuego,
        puntuacion_str: `${puntuacion}/${total}`,
        porcentaje: total > 0 ? Math.round((puntuacion / total) * 100) : 0,
        tiempo: tiempo,
        errores: errores.length > 0 ? errores : null
    };

    try {
        const response = await fetch(`${SUPABASE_URL}/rest/v1/resultados`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'apikey': SUPABASE_ANON_KEY,
                'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
                'Prefer': 'return=minimal'
            },
            body: JSON.stringify(nuevoResultado)
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(`Error de Supabase: ${error.message}`);
        }

        console.log("Resultado guardado en Supabase con éxito.");

    } catch (error) {
        console.error("No se pudo guardar el resultado en Supabase:", error);
        alert("Hubo un problema al guardar tu progreso. Revisa la conexión a internet.");
    }
}

/** Muestra la pantalla de resultados al final del juego. */
function mostrarResultados() {
    const tema = gameData[materiaActual].temas[temaActual];
    const tipoJuego = tema.juego;
    let totalPreguntas;

    if (cronometroIntervalo) clearInterval(cronometroIntervalo);
    infoJuegoActualEl.style.display = 'none';
    const duracionMs = Date.now() - tiempoInicioJuego;
    const segundos = Math.floor((duracionMs / 1000) % 60);
    const minutos = Math.floor((duracionMs / (1000 * 60)) % 60);
    const tiempoFormateado = `${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;

    // Calcular el total de "preguntas" correctamente según el tipo de juego
    if (tipoJuego === 'matchingPairs' || tipoJuego === 'dragAndDropMatch' || tipoJuego === 'memoryMatch') {
        totalPreguntas = tema.preguntas.reduce((acc, ronda) => acc + (Array.isArray(ronda) ? ronda.length : 1), 0);
    } else {
        totalPreguntas = tema.preguntas.length;
    }

    let mensajeFinal = "";
    if (puntuacionActual === totalPreguntas) {
        mensajeFinal = "¡Excelente trabajo! Dominas este tema. ✨";
    } else if (puntuacionActual >= totalPreguntas / 2) {
        mensajeFinal = "¡Buen trabajo! Sigue practicando para perfeccionar. 👍";
    } else {
        mensajeFinal = "¡No te rindas! La práctica hace al maestro. Sigue intentándolo. 💪";
    }

    const errores = preguntasIncorrectas.length;
    let feedbackHtml = preguntasIncorrectas.length > 0 ? '<h3>Sugerencias para mejorar:</h3>' : '';
    preguntasIncorrectas.forEach(item => {
        let textoPregunta = item.texto;
        let textoSolucion = item.solucion;
        if (item.error) {
            textoPregunta = `En la frase: <i>"${item.texto}"</i>`;
            textoSolucion = `La palabra correcta es "${item.solucion}".`;
        } else if (item.opciones) {
            textoPregunta = `Para la pregunta "${item.texto}"...`;
            textoSolucion = `La respuesta correcta es "${item.solucion}".`;
        } else if (item.en && item.es) { // Para matchingPairs
            textoPregunta = `Para el elemento: <i>"${item.en}"</i>`;
            textoSolucion = `La pareja correcta era "<strong>${item.es}</strong>".`;
        } else if (Array.isArray(item)) {
            textoPregunta = `En la ronda de unir parejas...`;
            textoSolucion = `Repasa el vocabulario de esa sección.`;
        } else if (item.draggable && item.droppable) {
            textoPregunta = `En el juego de arrastrar y soltar...`;
            textoSolucion = `Repasa las asociaciones de ese tema.`;
        } else if (item.numeros) {
            textoPregunta = `Para la secuencia de números...`;
            textoSolucion = `El orden correcto de menor a mayor es: ${[...item.numeros].sort((a, b) => a - b).join(' &rarr; ')}`;
        } else if (item.palabra && item.pista) { // Para Hangman
            textoPregunta = `Para la pista: <i>"${item.pista}"</i>`;
            textoSolucion = `La palabra correcta era "<strong>${item.palabra}</strong>".`;
        } else if (item.texto.includes('_')) { // Para FillTheWord
            textoPregunta = `Para la frase: <i>"${item.texto}"</i>`;
            textoSolucion = `La palabra correcta era "<strong>${item.solucion}</strong>".`;
        } else if (item.numerador !== undefined && item.denominador !== undefined) { // Para BuildFraction
            textoPregunta = `Para construir la fracción ${item.verbal || ''} (${item.numerador}/${item.denominador})...`;
            textoSolucion = `Debías seleccionar <strong>${item.numerador}</strong> de las <strong>${item.denominador}</strong> partes de la figura.`;
        } else if (item.operacion && item.solucion) { // Para secretCode
            textoPregunta = `Para descifrar el código de: <i>${item.operacion}</i>`;
            textoSolucion = `La clave secreta era "<strong>${item.solucion}</strong>".`;
        } else if (item.texto && item.solucion) {
            textoPregunta = `Para la pregunta "${item.texto}"...`;
            textoSolucion = `La respuesta correcta es "${item.solucion}".`;
        }
        feedbackHtml += `<div class="feedback-item"><p>❌ ${textoPregunta}</p><p>✔️ ${textoSolucion}</p></div>`;
    });

    contenedorJuegoEl.innerHTML = `
        <div class="tarjeta-resultados">
            <h2>Resultados del Tema</h2>
            <p class="puntuacion">
                Aciertos: <strong>${puntuacionActual} de ${totalPreguntas}</strong>
                ${errores > 0 ? `| Errores: <strong style="color: #E57373;">${errores}</strong>` : ''}
            </p>
            <p class="tiempo-final">Tiempo total: <strong>${tiempoFormateado}</strong></p>
            <p class="mensaje-final">${mensajeFinal}</p>
            <div class="feedback-incorrectas">${feedbackHtml}</div>
            <button id="btn-volver" class="btn-juego btn-siguiente">Elegir otro Tema</button>
        </div>`;

    // Guardar resultados si es un estudiante
    const tipoJuegoActual = gameData[materiaActual].temas[temaActual].juego;
    guardarResultados(puntuacionActual, totalPreguntas, tiempoFormateado, tipoJuegoActual, preguntasIncorrectas);

    document.getElementById('btn-volver').addEventListener('click', () => {
        mostrarSeleccionJuego(materiaActual);
    });
}

/**
 * Devuelve una pista contextual para una palabra dada.
 * @param {string} palabra La palabra en inglés para la que se necesita una pista.
 * @returns {string} La pista contextual en español.
 */
function obtenerPistaDePalabra(palabra) {
    const diccionarioPistas = {
        "i": "es el pronombre para 'yo'",
        "you": "es el pronombre para 'tú' o 'ustedes'",
        "he": "es el pronombre para 'él'",
        "she": "es el pronombre para 'ella'",
        "it": "es el pronombre para 'eso' (cosa o animal)",
        "we": "es el pronombre para 'nosotros'",
        "they": "es el pronombre para 'ellos'",
        "money": "significa 'dinero'",
        "study": "es el verbo 'estudiar'",
        "pass": "es el verbo 'aprobar' o 'pasar'",
        "exam": "significa 'examen'",
        "travel": "es el verbo 'viajar'",
        "had": "es el pasado de 'have' (tener)",
        "happy": "significa 'feliz'",
        "calls": "es el verbo 'llamar' en tercera persona",
        "her": "es el pronombre objeto para 'ella'",
        "if": "es la conjunción condicional 'si...'",
        "were": "es una forma del pasado del verbo 'to be'",
        "do": "es un verbo auxiliar o el verbo 'hacer'",
        "won": "es el pasado de 'win' (ganar)",
        "lottery": "significa 'lotería'",
        "rains": "es el verbo 'llover' en tercera persona",
        "home": "significa 'casa' u 'hogar'",
    };

    const pista = diccionarioPistas[palabra.toLowerCase()];
    return pista ? `significa '${pista}'` : `empieza con la letra '${palabra.charAt(0).toUpperCase()}'`;
}
/** Muestra una pista (la primera palabra de la solución). */
function mostrarPista() {
    const preguntaActual = gameData[materiaActual].temas[temaActual].preguntas[preguntaIndex];
    const solucionArray = preguntaActual.solucion.split(' ');
    const fraseUsuarioArray = fraseUsuario; // Asumiendo que fraseUsuario es un array de palabras

    // Encontrar la primera palabra que el usuario ha colocado incorrectamente
    let primeraDiferencia = -1;
    for (let i = 0; i < solucionArray.length; i++) {
        if (i >= fraseUsuarioArray.length || fraseUsuarioArray[i] !== solucionArray[i]) {
            primeraDiferencia = i;
            break;
        }
    }

    let textoPista;
    if (primeraDiferencia !== -1) {
        // Si el usuario ha cometido un error, damos una pista sobre la palabra que debería ir en esa posición.
        const palabraCorrecta = solucionArray[primeraDiferencia];
        const posicionOrdinal = primeraDiferencia + 1;
        textoPista = `La palabra N°${posicionOrdinal} es "${palabraCorrecta}".`;
        textoPista = `La palabra en la posición N°${primeraDiferencia + 1} ${obtenerPistaDePalabra(palabraCorrecta)}.`;
    } else {
        // Si no hay diferencias, es porque la frase es correcta o está incompleta pero bien.
        // Damos una pista sobre la siguiente palabra.
        // Si todo lo que ha puesto es correcto pero la frase está incompleta pero bien, damos pista sobre la siguiente palabra.
        const siguientePalabra = solucionArray[fraseUsuarioArray.length];
        textoPista = `La siguiente palabra es "${siguientePalabra}".`;
        textoPista = `La siguiente palabra ${obtenerPistaDePalabra(siguientePalabra)}.`;
    }

    const feedbackEl = document.getElementById('feedback-juego');

    feedbackEl.textContent = `Pista: ${textoPista}`;
    feedbackEl.style.color = '#29B6F6';
    document.getElementById('btn-pista').disabled = true;
}

/** Verifica si la frase construida por el usuario es correcta. */
function verificarRespuesta() {
    const solucion = gameData[materiaActual].temas[temaActual].preguntas[preguntaIndex].solucion;
    const respuestaUsuario = fraseUsuario.join(' ').toLowerCase().replace(/\.$/, '');
    const feedbackEl = document.getElementById('feedback-juego');
    const vidasEl = document.getElementById('vidas');

    if (respuestaUsuario === solucion) {
        feedbackEl.textContent = "¡Correcto! 🎉";
        feedbackEl.style.color = '#81C784';
        puntuacionActual++;
        document.getElementById('btn-siguiente-pregunta').style.display = 'inline-block';
        document.getElementById('btn-verificar').style.display = 'none';
        document.getElementById('btn-pista').disabled = true;
    } else {
        intentosRestantes--;
        vidasEl.textContent = '❤️'.repeat(intentosRestantes) + '🖤'.repeat(3 - intentosRestantes);

        if (intentosRestantes > 0) {
            feedbackEl.textContent = `Incorrecto. Te quedan ${intentosRestantes} vidas. 🤔`;
            feedbackEl.style.color = '#FFC107';
        } else {
            feedbackEl.innerHTML = `¡Sin vidas! La respuesta era: "<strong>${solucion}</strong>"`;
            feedbackEl.style.color = '#E57373';
            preguntasIncorrectas.push(gameData[materiaActual].temas[temaActual].preguntas[preguntaIndex]);

            document.getElementById('btn-verificar').style.display = 'none';
            document.getElementById('btn-siguiente-pregunta').style.display = 'inline-block';
            document.getElementById('btn-pista').disabled = true;
            document.querySelectorAll('.palabra-en-frase').forEach(p => p.style.pointerEvents = 'none');
            document.querySelectorAll('.btn-palabra').forEach(p => p.disabled = true);
        }
    }
}

// --- FUNCIONES PARA CREAR TEMAS ---

/** Muestra el formulario para crear un nuevo tema. */
function mostrarFormularioCreacion(tipoJuego, claveTemaParaEditar = null) {
    seleccionTemaEl.style.display = 'none';
    pantallaCrearTemaEl.style.display = 'block';
    const contenedorPreguntas = document.getElementById('contenedor-preguntas-crear');
    const esEdicion = claveTemaParaEditar !== null;
    const btnGuardar = document.getElementById('btn-guardar-tema');
    const btnBorrar = document.getElementById('btn-borrar-tema-edicion');
    const btnAgregarPregunta = document.getElementById('btn-agregar-pregunta');
    const tituloFormulario = document.querySelector('.tarjeta-creacion h2'); // Lo mantenemos por si se usa en otro lado
    const subtituloTipoJuego = document.getElementById('subtitulo-tipo-juego');
    const nombreTemaInput = document.getElementById('nombre-tema-input');
    const nombreJuego = JUEGOS_DISPONIBLES[tipoJuego]?.nombre || 'Juego';

    pantallaCrearTemaEl.classList.add('anim-in');
    contenedorPreguntas.innerHTML = '';
    document.getElementById('nombre-tema-input').value = '';

    pantallaCrearTemaEl.dataset.tipoJuego = tipoJuego;

    btnAgregarPregunta.onclick = () => agregarCampoPregunta(tipoJuego, materiaActual);
    document.getElementById('btn-cancelar-creacion').onclick = () => {
        mostrarTemas(materiaActual, tipoJuego);
    };

    // Si estamos editando, rellenamos el formulario
    if (esEdicion) {
        tituloFormulario.textContent = 'Editar Tema';
        subtituloTipoJuego.textContent = `Tipo de Juego: ${nombreJuego}`;
        btnGuardar.textContent = 'Actualizar Tema';
        btnGuardar.onclick = () => guardarTemaPersonalizado(tipoJuego, claveTemaParaEditar);
        btnBorrar.style.display = 'inline-block';
        btnBorrar.onclick = () => borrarTemaPersonalizado(claveTemaParaEditar);

        const tema = gameData[materiaActual].temas[claveTemaParaEditar];
        nombreTemaInput.value = tema.nombre;

        let preguntasParaRellenar = tema.preguntas;
        if (tipoJuego === 'matchingPairs' && Array.isArray(tema.preguntas[0])) {
            preguntasParaRellenar = tema.preguntas[0];
        }

        preguntasParaRellenar.forEach(preguntaData => {
            const campoPregunta = agregarCampoPregunta(tipoJuego, materiaActual);
            if (!campoPregunta) return;

            if (tipoJuego === 'sentenceScramble') {
                campoPregunta.querySelector('.input-solucion').value = preguntaData.solucion;
            } else if (tipoJuego === 'matchingPairs') {
                campoPregunta.querySelector('.input-texto').value = preguntaData.en;
                campoPregunta.querySelector('.input-solucion').value = preguntaData.es;
            } else if (tipoJuego === 'dragAndDropMatch') {
                campoPregunta.querySelector('.input-texto').value = preguntaData.draggable;
                campoPregunta.querySelector('.input-solucion').value = preguntaData.droppable;
            } else if (tipoJuego === 'findTheError') {
                campoPregunta.querySelector('.input-texto').value = preguntaData.texto;
                campoPregunta.querySelector('.input-error-palabra').value = preguntaData.error;
                campoPregunta.querySelector('.input-solucion').value = preguntaData.solucion;
            } else if (tipoJuego === 'quiz') {
                campoPregunta.querySelector('.input-texto').value = preguntaData.texto;
                campoPregunta.querySelector('.input-solucion').value = preguntaData.solucion;
                const otrasOpciones = preguntaData.opciones.filter(op => op !== preguntaData.solucion);
                campoPregunta.querySelector('.input-opciones-quiz').value = otrasOpciones.join(', ');
            } else if (tipoJuego === 'numberOrder') {
                campoPregunta.querySelector('.input-solucion').value = preguntaData.numeros.join(', ');
            } else { // basicOperations, equationSolver, numberSequence
                campoPregunta.querySelector('.input-texto').value = preguntaData.texto;
                campoPregunta.querySelector('.input-solucion').value = preguntaData.solucion;
            }
        });
    } else {
        tituloFormulario.textContent = 'Crea tu Propio Tema';
        subtituloTipoJuego.textContent = `Tipo de Juego: ${nombreJuego}`;
        btnGuardar.textContent = 'Guardar Tema';
        btnGuardar.onclick = () => guardarTemaPersonalizado(tipoJuego);
        btnBorrar.style.display = 'none';
        agregarCampoPregunta(tipoJuego, materiaActual);
    }
}

/** Actualiza los botones de la pantalla de creación con iconos. */
function actualizarBotonesCreacion() {
    document.getElementById('btn-agregar-pregunta').innerHTML = '➕ Añadir Pregunta';
    document.getElementById('btn-guardar-tema').innerHTML = '💾 Guardar Tema';
}

/** Agrega un nuevo par de inputs para una pregunta en el formulario de creación. */
function agregarCampoPregunta(tipoJuego, materia) {
    const contenedorPreguntas = document.getElementById('contenedor-preguntas-crear');
    const numPregunta = contenedorPreguntas.children.length + 1;
    const maxPreguntas = 10;

    if (numPregunta > maxPreguntas) {
        alert(`Puedes agregar un máximo de ${maxPreguntas} preguntas por tema.`);
        return null;
    }

    const divPregunta = document.createElement('div');
    divPregunta.className = 'pregunta-crear-item';

    if (tipoJuego === 'sentenceScramble') {
        divPregunta.innerHTML = `
            <span class="numero-pregunta">Pregunta ${numPregunta}</span>
            <div class="form-grupo">
                <label>Frase a ordenar (Solución)</label>
                <input type="text" class="input-solucion" placeholder="ej: i like to play soccer">
            </div>
        `;
    } else if (tipoJuego === 'matchingPairs') {
        const placeholders = {
            ingles: { label1: "Palabra en Inglés", placeholder1: "ej: house", label2: "Traducción / Pareja", placeholder2: "ej: casa" },
            matematicas: { label1: "Elemento 1", placeholder1: "ej: 1/2", label2: "Elemento 2 (Pareja)", placeholder2: "ej: 0.5" },
            quimica: { label1: "Término", placeholder1: "ej: Protón", label2: "Definición / Pareja", placeholder2: "ej: Carga positiva" }
        };
        const p = placeholders[materia] || placeholders.ingles;

        divPregunta.innerHTML = `
            <span class="numero-pregunta">Par ${numPregunta}</span>
            <div class="form-grupo-pareja">
                <div class="form-grupo">
                    <label>${p.label1}</label>
                    <input type="text" class="input-texto" placeholder="${p.placeholder1}">
                </div>
                <div class="form-grupo">
                    <label>${p.label2}</label>
                    <input type="text" class="input-solucion" placeholder="${p.placeholder2}">
                </div>
            </div>
        `;
    } else if (tipoJuego === 'dragAndDropMatch') {
        const placeholders = {
            ingles: { placeholder1: "ej: I / You / We / They", placeholder2: "ej: work" },
            matematicas: { placeholder1: "ej: Área del Círculo", placeholder2: "ej: π * r²" },
            quimica: { placeholder1: "ej: Hidrógeno", placeholder2: "ej: H" }
        };
        const p = placeholders[materia] || placeholders.ingles;

        divPregunta.innerHTML = `
            <span class="numero-pregunta">Par ${numPregunta}</span>
            <div class="form-grupo-pareja">
                <div class="form-grupo">
                    <label>Elemento Arrastrable</label>
                    <input type="text" class="input-texto" placeholder="${p.placeholder1}">
                </div>
                <div class="form-grupo">
                    <label>Zona para Soltar (Pareja)</label>
                    <input type="text" class="input-solucion" placeholder="${p.placeholder2}">
                </div>
            </div>
        `;
    } else if (tipoJuego === 'basicOperations' || tipoJuego === 'equationSolver' || tipoJuego === 'numberSequence') {
        divPregunta.innerHTML = `
            <span class="numero-pregunta">Pregunta ${numPregunta}</span>
            <div class="form-grupo-pareja">
                <div class="form-grupo">
                    <label>${tipoJuego === 'basicOperations' ? 'Operación/Pregunta' : (tipoJuego === 'equationSolver' ? 'Ecuación' : 'Secuencia')}</label>
                    <input type="text" class="input-texto" placeholder="${tipoJuego === 'basicOperations' ? 'ej: 5 + 3' : (tipoJuego === 'equationSolver' ? 'ej: x + 5 = 10' : 'ej: 1, 3, 5, ...')}">
                </div>
                <div class="form-grupo">
                    <label>Solución</label>
                    <input type="text" class="input-solucion" placeholder="${tipoJuego === 'basicOperations' ? 'ej: 8' : (tipoJuego === 'equationSolver' ? 'ej: 5' : 'ej: 7')}">
                </div>
            </div>
        `;
    } else if (tipoJuego === 'findTheError') {
        divPregunta.innerHTML = `
            <span class="numero-pregunta">Pregunta ${numPregunta}</span>
            <div class="form-grupo">
                <label>Oración Completa (con el error)</label>
                <input type="text" class="input-texto" placeholder="${materia === 'ingles' ? 'ej: She like pizza.' : 'ej: La fórmula del agua es H3O.'}">
            </div>
            <div class="form-grupo-pareja">
                <div class="form-grupo">
                    <label>Palabra Incorrecta</label>
                    <input type="text" class="input-error-palabra" placeholder="ej: like">
                </div>
                <div class="form-grupo">
                    <label>Palabra Correcta (Solución)</label>
                    <input type="text" class="input-solucion" placeholder="ej: likes">
                </div>
            </div>
        `;
    } else if (tipoJuego === 'numberOrder') {
        divPregunta.innerHTML = `
            <span class="numero-pregunta">Pregunta ${numPregunta}</span>
            <div class="form-grupo">
                <label>Números a ordenar (separados por comas)</label>
                <input type="text" class="input-solucion" placeholder="ej: 0.5, 0.2, 1.1, 0.8">
            </div>
        `;
    } else if (tipoJuego === 'quiz') {
        divPregunta.innerHTML = `
            <span class="numero-pregunta">Pregunta ${numPregunta}</span>
            <div class="form-grupo">
                <label>Pregunta del Quiz</label>
                <input type="text" class="input-texto" placeholder="ej: What is the capital of England?">
            </div>
            <div class="form-grupo-pareja">
                <div class="form-grupo">
                    <label>Respuesta Correcta</label>
                    <input type="text" class="input-solucion" placeholder="ej: London">
                </div>
                <div class="form-grupo">
                    <label>Otras 3 Opciones (separadas por comas)</label>
                    <input type="text" class="input-opciones-quiz" placeholder="ej: Paris, Rome, Madrid">
                </div>
            </div>
        `;
    } else if (tipoJuego === 'rouletteVF') {
        divPregunta.innerHTML = `
            <span class="numero-pregunta">Pregunta ${numPregunta}</span>
            <div class="form-grupo">
                <label>Afirmación Incompleta</label>
                <input type="text" class="input-texto" placeholder="ej: El símbolo del Oro es...">
            </div>
            <div class="form-grupo">
                <label>Respuesta Correcta (Valor)</label>
                <input type="text" class="input-solucion" placeholder="ej: Au">
            </div>
            <div class="form-grupo">
                <label>Explicación de la Respuesta Correcta</label>
                <input type="text" class="input-explicacion" placeholder="Explicación (ej: Au viene del latín 'Aurum')">
            </div>
            <div id="opciones-falsas-container-${numPregunta}"></div>
            <button class="btn-juego btn-agregar-opcion-falsa" data-pregunta="${numPregunta}">+ Añadir Opción Falsa</button>
        `;
    } else if (tipoJuego === 'memoryMatch') {
        divPregunta.innerHTML = `
            <span class="numero-pregunta">Par ${numPregunta}</span>
            <div class="form-grupo-pareja">
                <div class="form-grupo">
                    <label>Término 1</label>
                    <input type="text" placeholder="ej: Casa">
                </div>
                <div class="form-grupo">
                    <label>Término 2 (Pareja)</label>
                    <input type="text" class="input-solucion" placeholder="ej: House">
                </div>
            </div>
        `;
    } else if (tipoJuego === 'hangman') {
        divPregunta.innerHTML = `
            <span class="numero-pregunta">Palabra ${numPregunta}</span>
            <div class="form-grupo-pareja">
                <div class="form-grupo">
                    <label>Palabra a Adivinar</label>
                    <input type="text" placeholder="ej: WORKS">
                </div>
                <div class="form-grupo">
                    <label>Pista</label>
                    <input type="text" class="input-solucion" placeholder="ej: Verbo para 'He/She/It' en afirmativo.">
                </div>
            </div>
        `;
    } else if (tipoJuego === 'fillTheWord') {
        divPregunta.innerHTML = `
            <span class="numero-pregunta">Pregunta ${numPregunta}</span>
            <div class="form-grupo-pareja">
                <div class="form-grupo">
                    <label>Frase con un espacio (usar guiones bajos)</label>
                    <input type="text" placeholder="ej: El resultado de 2+2 es ____.">
                </div>
                <div class="form-grupo">
                    <label>Palabra que falta (Solución)</label>
                    <input type="text" class="input-solucion" placeholder="ej: CUATRO">
                </div>
            </div>
        `;
    }

    contenedorPreguntas.appendChild(divPregunta);
    actualizarBotonesCreacion();
    return divPregunta;
}

/** Agrega un campo para una opción falsa en el juego de ruleta. */
function agregarCampoOpcionFalsa(numPregunta) {
    const container = document.getElementById(`opciones-falsas-container-${numPregunta}`);
    const numOpcion = container.children.length + 1;

    if (numOpcion > 4) {
        alert("Puedes agregar un máximo de 4 opciones falsas.");
        return;
    }

    const divOpcion = document.createElement('div');
    divOpcion.className = 'form-grupo opcion-falsa-item';
    divOpcion.innerHTML = `
        <label>Opción Falsa ${numOpcion}</label>
        <div class="form-grupo-pareja">
            <input type="text" class="input-opcion-falsa-valor" placeholder="Valor (ej: Ag)">
            <input type="text" class="input-opcion-falsa-explicacion" placeholder="Explicación (ej: Ag es el símbolo de la Plata)">
        </div>
    `;
    container.appendChild(divOpcion);
}


/** Guarda el tema personalizado creado por el usuario. */
function guardarTemaPersonalizado(tipoJuego, claveTemaParaEditar = null) {
    const nombreTema = document.getElementById('nombre-tema-input').value.trim();
    if (!nombreTema) {
        alert("Por favor, dale un nombre a tu tema.");
        return;
    }

    const camposPreguntas = document.querySelectorAll('.pregunta-crear-item');
    let nuevasPreguntas = [];
    const esEdicion = claveTemaParaEditar !== null;
    const minPreguntas = 7;
    let hayCamposVacios = false;

    for (const campo of camposPreguntas) {
        const inputTexto = campo.querySelector('.input-texto');
        const inputSolucion = campo.querySelector('.input-solucion');
        const inputErrorPalabra = campo.querySelector('.input-error-palabra');
        const inputOpcionesQuiz = campo.querySelector('.input-opciones-quiz');
        const inputExplicacion = campo.querySelector('.input-explicacion');

        const texto = inputTexto ? inputTexto.value.trim() : '';
        const solucion = inputSolucion ? inputSolucion.value.trim() : '';

        // Reset error styles
        if (inputTexto) inputTexto.classList.remove('input-error');
        if (inputSolucion) inputSolucion.classList.remove('input-error');
        if (inputErrorPalabra) inputErrorPalabra.classList.remove('input-error');
        if (inputOpcionesQuiz) inputOpcionesQuiz.classList.remove('input-error');
        if (inputExplicacion) inputExplicacion.classList.remove('input-error');

        let currentQuestionHasError = false;

        // Validation for solution field (always required)
        if (!solucion) {
            if (inputSolucion) inputSolucion.classList.add('input-error');
            currentQuestionHasError = true;
        }

        // Validation for inputTexto field (required for most games except sentenceScramble and numberOrder)
        if (tipoJuego !== 'sentenceScramble' && tipoJuego !== 'numberOrder') {
            if (!texto) {
                if (inputTexto) inputTexto.classList.add('input-error');
                currentQuestionHasError = true;
            }
        }

        // Specific validations
        if (tipoJuego === 'findTheError') {
            const error = inputErrorPalabra ? inputErrorPalabra.value.trim() : '';
            if (!error) {
                if (inputErrorPalabra) inputErrorPalabra.classList.add('input-error');
                currentQuestionHasError = true;
            }
        } else if (tipoJuego === 'quiz') {
            const otrasOpciones = inputOpcionesQuiz ? inputOpcionesQuiz.value.split(',').map(s => s.trim()).filter(Boolean) : [];
            if (otrasOpciones.length !== 3) {
                if (inputOpcionesQuiz) inputOpcionesQuiz.classList.add('input-error');
                currentQuestionHasError = true;
            }
        } else if (tipoJuego === 'numberOrder') {
            const numerosArray = solucion.split(',').map(Number).filter(n => !isNaN(n));
            if (numerosArray.length < 2) { // Need at least 2 numbers to order
                if (inputSolucion) inputSolucion.classList.add('input-error'); // Highlight the numbers input
                currentQuestionHasError = true;
            }
        } else if (tipoJuego === 'rouletteVF') {
            const explicacion = inputExplicacion ? inputExplicacion.value.trim() : '';
            if (!explicacion) {
                if (inputExplicacion) inputExplicacion.classList.add('input-error');
                currentQuestionHasError = true;
            }
            campo.querySelectorAll('.opcion-falsa-item').forEach(opcionFalsaEl => {
                const valorFalsoInput = opcionFalsaEl.querySelector('.input-opcion-falsa-valor');
                const explicacionFalsaInput = opcionFalsaEl.querySelector('.input-opcion-falsa-explicacion');
                if (!valorFalsoInput.value.trim()) {
                    valorFalsoInput.classList.add('input-error');
                    currentQuestionHasError = true;
                }
                if (!explicacionFalsaInput.value.trim()) {
                    explicacionFalsaInput.classList.add('input-error');
                    currentQuestionHasError = true;
                }
            });
        }

        if (currentQuestionHasError) {
            hayCamposVacios = true;
            continue;
        }

        // Construct the question object
        if (tipoJuego === 'sentenceScramble') {
            nuevasPreguntas.push({ texto: solucion, solucion: solucion });
        } else if (tipoJuego === 'matchingPairs') {
            nuevasPreguntas.push({ en: texto, es: solucion });
        } else if (tipoJuego === 'dragAndDropMatch') {
            nuevasPreguntas.push({ draggable: texto, droppable: solucion });
        } else if (tipoJuego === 'findTheError') {
            const error = inputErrorPalabra.value.trim();
            nuevasPreguntas.push({ texto, error, solucion });
        } else if (tipoJuego === 'quiz') {
            const otrasOpciones = inputOpcionesQuiz.value.split(',').map(s => s.trim()).filter(Boolean);
            // La solución ya se añade a las opciones en la función que carga el juego,
            // aquí solo guardamos las opciones incorrectas.
            nuevasPreguntas.push({ texto, opciones: otrasOpciones, solucion });
        } else if (tipoJuego === 'basicOperations' || tipoJuego === 'equationSolver' || tipoJuego === 'numberSequence') {
            nuevasPreguntas.push({ texto, solucion });
        } else if (tipoJuego === 'numberOrder') {
            const numerosArray = solucion.split(',').map(Number).filter(n => !isNaN(n));
            nuevasPreguntas.push({ texto: "Ordena de menor a mayor", numeros: numerosArray });
        } else if (tipoJuego === 'rouletteVF') {
            const explicacion = inputExplicacion.value.trim();
            const opcionesFalsas = Array.from(campo.querySelectorAll('.opcion-falsa-item')).map(opcionFalsaEl => {
                return {
                    valor: opcionFalsaEl.querySelector('.input-opcion-falsa-valor').value.trim(),
                    explicacion: opcionFalsaEl.querySelector('.input-opcion-falsa-explicacion').value.trim()
                };
            }).filter(op => op.valor && op.explicacion);
            nuevasPreguntas.push({ texto, solucion: { valor: solucion, explicacion }, opcionesFalsas });
        } else if (tipoJuego === 'memoryMatch') {
            nuevasPreguntas.push({ en: texto, es: solucion });
        } else if (tipoJuego === 'hangman') {
            nuevasPreguntas.push({ palabra: texto.toUpperCase(), pista: solucion });
        } else if (tipoJuego === 'fillTheWord') {
            nuevasPreguntas.push({ texto: texto, solucion: solucion.toUpperCase() });
        }
    }

    if (tipoJuego === 'matchingPairs' && nuevasPreguntas.length > 0) {
        nuevasPreguntas = [nuevasPreguntas];
    }

    if (hayCamposVacios || nuevasPreguntas.length < minPreguntas) {
        alert(`Por favor, completa correctamente al menos ${minPreguntas} preguntas.`);
        return;
    }

    const claveTema = esEdicion ? claveTemaParaEditar : `custom_${nombreTema.toLowerCase().replace(/[^a-z0-9]/g, '_')}_${Date.now()}`;

    gameData[materiaActual].temas[claveTema] = {
        nombre: nombreTema,
        juego: tipoJuego,
        preguntas: nuevasPreguntas,
        creador: nombreDocente // Guardamos el nombre del docente que creó el tema
    };

    guardarTemasEnLocalStorage();
    alert(`¡Tema "${nombreTema}" ${esEdicion ? 'actualizado' : 'guardado'} con éxito!`);
    mostrarTemas(materiaActual, gameData[materiaActual].temas[claveTema].juego);
}

/** Borra un tema personalizado. */
function borrarTemaPersonalizado(claveTema) {
    const tema = gameData[materiaActual].temas[claveTema];
    if (confirm(`¿Estás seguro de que quieres borrar el tema "${tema.nombre}"? Esta acción no se puede deshacer.`)) {
        delete gameData[materiaActual].temas[claveTema];
        guardarTemasEnLocalStorage();
        alert('Tema borrado con éxito.');
        mostrarTemas(materiaActual, tema.juego);
    }
}

// --- FUNCIONES DE LOCALSTORAGE ---

/** Guarda los temas personalizados en localStorage. */
function guardarTemasEnLocalStorage() {
    const temasPersonalizados = {};
    for (const materia in gameData) {
        temasPersonalizados[materia] = {};
        for (const claveTema in gameData[materia].temas) {
            if (claveTema.startsWith('custom_')) {
                temasPersonalizados[materia][claveTema] = gameData[materia].temas[claveTema];
            }
        }
    }
    localStorage.setItem('gameLearnCustomThemes', JSON.stringify(temasPersonalizados));
}

// --- SISTEMA DE REPORTES ---

/** Abre el modal para reportar un problema o dar un consejo */
function abrirModalReportar() {
    const modal = document.getElementById('modal-reportar-problema');
    if (modal) {
        // Mostrar el contexto actual (materia/tema) si existe
        const infoContexto = document.getElementById('info-contexto-reporte');
        if (infoContexto) {
            let contexto = '';
            if (materiaActual && gameData[materiaActual]) {
                contexto = `<p class="subtitulo-seccion">📌 Contexto: ${gameData[materiaActual].nombre}`;
                if (temaActual && gameData[materiaActual].temas[temaActual]) {
                    contexto += ` › ${gameData[materiaActual].temas[temaActual].nombre}`;
                }
                contexto += '</p>';
            }
            infoContexto.innerHTML = contexto;
        }
        modal.style.display = 'flex';
        const descEl = document.getElementById('descripcion-problema');
        if (descEl) descEl.focus();
    }
}

/** Cierra el modal de reportes */
function cerrarModalReportar() {
    const modal = document.getElementById('modal-reportar-problema');
    if (modal) {
        modal.style.display = 'none';
        const descEl = document.getElementById('descripcion-problema');
        if (descEl) descEl.value = '';
    }
}

/** Guarda un nuevo reporte (problema o consejo) en Supabase y localStorage */
async function guardarReporte() {
    const descripcion = document.getElementById('descripcion-problema').value.trim();
    const tipo = document.getElementById('tipo-reporte').value; // 'problema' o 'consejo'

    if (!descripcion) {
        alert(tipo === 'consejo'
            ? 'Por favor, escribe tu consejo o sugerencia.'
            : 'Por favor, describe el problema que encontraste.');
        return;
    }

    const usuarioNombre = esDocente ? nombreDocente : (infoEstudiante?.nombre || 'Anónimo');
    const materiaNombre = materiaActual && gameData[materiaActual] ? gameData[materiaActual].nombre : 'N/A';
    const temaNombre = temaActual && gameData[materiaActual]?.temas[temaActual] ? gameData[materiaActual].temas[temaActual].nombre : 'N/A';
    const juegoClave = temaActual && gameData[materiaActual]?.temas[temaActual] ? gameData[materiaActual].temas[temaActual].juego : 'N/A';

    const nuevoReporte = {
        tipo: tipo,
        grado: String(gradoActual || 'N/A'),
        materia: materiaNombre,
        tema: temaNombre,
        juego: juegoClave,
        descripcion: descripcion,
        usuario: usuarioNombre
    };

    // 1. Intentar guardar en Supabase
    try {
        const response = await fetch(`${SUPABASE_URL}/rest/v1/reportes`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'apikey': SUPABASE_ANON_KEY,
                'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
                'Prefer': 'return=minimal'
            },
            body: JSON.stringify(nuevoReporte)
        });

        if (response.ok) {
            console.log("Reporte guardado en Supabase exitosamente.");
        } else {
            console.warn("Respuesta no OK de Supabase al guardar reporte:", await response.text());
        }
    } catch (error) {
        console.warn("Error al guardar reporte en Supabase (se guardará localmente):", error);
    }

    // 2. Guardar también en localStorage como respaldo local
    let reportesLocales = JSON.parse(localStorage.getItem('reportesProblemas')) || [];
    reportesLocales.push({
        ...nuevoReporte,
        id: Date.now(),
        timestamp: new Date().toLocaleString('es-CO')
    });
    localStorage.setItem('reportesProblemas', JSON.stringify(reportesLocales));

    alert(tipo === 'consejo'
        ? '¡Consejo / reseña enviado exitosamente! Gracias por ayudarnos a mejorar. 💡'
        : '¡Reporte enviado exitosamente! Gracias por ayudarnos a mejorar. 🐛');
    cerrarModalReportar();
}

/** Carga los reportes desde Supabase (con respaldo en localStorage) */
async function cargarReportes() {
    try {
        const response = await fetch(`${SUPABASE_URL}/rest/v1/reportes?select=*&order=created_at.desc`, {
            headers: { 'apikey': SUPABASE_ANON_KEY, 'Authorization': `Bearer ${SUPABASE_ANON_KEY}` }
        });
        if (response.ok) {
            const data = await response.json();
            if (Array.isArray(data) && data.length > 0) {
                return data.map(r => ({
                    id: r.id,
                    tipo: r.tipo || 'problema',
                    grado: r.grado || 'N/A',
                    materia: r.materia || 'N/A',
                    tema: r.tema || 'N/A',
                    juego: r.juego || 'N/A',
                    descripcion: r.descripcion || '',
                    usuario: r.usuario || 'Anónimo',
                    timestamp: r.created_at ? new Date(r.created_at).toLocaleString('es-CO') : (r.timestamp || new Date().toLocaleString('es-CO'))
                }));
            }
        }
    } catch (error) {
        console.warn("No se pudo cargar desde Supabase, cargando reportes locales:", error);
    }
    return JSON.parse(localStorage.getItem('reportesProblemas')) || [];
}

/** Muestra los reportes y reseñas en la pantalla de docentes */
async function mostrarReportes() {
    const panelReportes = document.getElementById('panel-reportes');
    const contenedorReportes = document.getElementById('contenedor-reportes');

    if (!panelReportes || !contenedorReportes) return;

    // Ocultar panel de docente y otros elementos
    panelDocenteEl.style.display = 'none';
    seleccionMateriaEl.style.display = 'none';
    seleccionJuegoEl.style.display = 'none';
    seleccionTemaEl.style.display = 'none';
    contenedorJuegoEl.style.display = 'none';
    infoJuegoActualEl.style.display = 'none';

    // Ocultar panel de visualizaciones si estuviese abierto
    const panelVisualizaciones = document.getElementById('panel-visualizaciones-derecha');
    if (panelVisualizaciones) panelVisualizaciones.classList.remove('abierto');

    // Mostrar el panel de reportes con animación
    panelReportes.style.display = 'block';
    panelReportes.classList.remove('anim-out');
    panelReportes.classList.add('anim-in');

    contenedorReportes.innerHTML = '<p style="text-align: center; color: #FFC107; padding: 30px; font-size: 1.1rem;">⏳ Cargando reseñas y reportes desde la nube...</p>';

    const reportes = await cargarReportes();
    window.ultimosReportesCargados = reportes; // Guardar en memoria para acceso rápido

    if (reportes.length === 0) {
        contenedorReportes.innerHTML = `
            <div style="text-align: center; padding: 40px 20px; color: #ccc;">
                <p style="font-size: 3rem; margin-bottom: 10px;">📭</p>
                <h3 style="color: white; margin-bottom: 8px;">Aún no hay reseñas ni reportes</h3>
                <p style="font-size: 0.95rem; opacity: 0.8; max-width: 500px; margin: 0 auto;">Cuando los estudiantes o docentes envíen sugerencias, consejos o reporten problemas desde el botón "📢 Reportar", aparecerán listados aquí en tiempo real desde cualquier dispositivo.</p>
            </div>
        `;
        return;
    }

    let html = '<div class="reportes-contenedor">';
    html += '<table class="tabla-reportes"><thead><tr><th>Fecha</th><th>Tipo</th><th>Usuario</th><th>Grado</th><th>Materia / Tema</th><th>Detalle</th><th>Acción</th></tr></thead><tbody>';

    reportes.forEach(reporte => {
        const esConsejo = reporte.tipo === 'consejo';
        const badgeHtml = esConsejo
            ? '<span class="badge-tipo-reporte badge-tipo-consejo">💡 Reseña / Consejo</span>'
            : '<span class="badge-tipo-reporte badge-tipo-problema">🐛 Problema</span>';
        const gradoTexto = reporte.grado && reporte.grado !== 'N/A' ? `${reporte.grado}°` : 'N/A';
        const temaTexto = (reporte.tema && reporte.tema !== 'N/A') ? `${reporte.materia} › ${reporte.tema}` : (reporte.materia || 'N/A');

        html += `
            <tr class="fila-reporte" data-reporte-id="${reporte.id}" title="Haz clic para ver el mensaje completo">
                <td style="white-space: nowrap; font-size: 0.85rem; opacity: 0.9;">${reporte.timestamp || ''}</td>
                <td>${badgeHtml}</td>
                <td><strong>${reporte.usuario || 'Anónimo'}</strong></td>
                <td>${gradoTexto}</td>
                <td>${temaTexto}</td>
                <td><button class="btn-ver-detalle-reporte" onclick="mostrarDetalleReporte('${reporte.id}')" title="Ver mensaje completo">👁️ Ver Mensaje</button></td>
                <td><button class="btn-eliminar-reporte" onclick="event.stopPropagation(); eliminarReporte('${reporte.id}');" title="Eliminar reporte">🗑️ Eliminar</button></td>
            </tr>
        `;
    });

    html += '</tbody></table></div>';
    contenedorReportes.innerHTML = html;

    // Agregar listener a las filas para abrir modal al hacer clic en cualquier parte de la fila
    contenedorReportes.querySelectorAll('.fila-reporte').forEach(fila => {
        fila.addEventListener('click', (e) => {
            if (!e.target.closest('.btn-eliminar-reporte') && !e.target.closest('.btn-ver-detalle-reporte')) {
                const reporteId = fila.dataset.reporteId;
                mostrarDetalleReporte(reporteId);
            }
        });
    });
}

/** Muestra el modal con el detalle completo de un reporte específico */
function mostrarDetalleReporte(reporteId) {
    const reportes = window.ultimosReportesCargados || JSON.parse(localStorage.getItem('reportesProblemas')) || [];
    const reporte = reportes.find(r => String(r.id) === String(reporteId));

    if (!reporte) {
        alert("No se encontró el reporte seleccionado.");
        return;
    }

    const modal = document.getElementById('modal-detalle-resultado');
    const tituloEl = document.getElementById('detalle-titulo');
    const contenidoEl = document.getElementById('detalle-contenido');
    const btnCerrar = document.getElementById('btn-cerrar-detalle');

    if (!modal || !tituloEl || !contenidoEl) return;

    const esConsejo = reporte.tipo === 'consejo';
    tituloEl.textContent = esConsejo ? "💡 Detalle de la Reseña / Consejo" : "🐛 Detalle del Reporte de Problema";

    const badgeTipo = esConsejo
        ? '<span class="badge-tipo-reporte badge-tipo-consejo">💡 Reseña / Consejo</span>'
        : '<span class="badge-tipo-reporte badge-tipo-problema">🐛 Problema</span>';

    const gradoTexto = (reporte.grado && reporte.grado !== 'N/A') ? `${reporte.grado}°` : 'N/A';
    const materiaTexto = reporte.materia || 'N/A';
    const temaTexto = reporte.tema || 'N/A';
    const juegoTexto = (reporte.juego && JUEGOS_DISPONIBLES[reporte.juego]?.nombre) ? JUEGOS_DISPONIBLES[reporte.juego].nombre : (reporte.juego || 'N/A');

    // Escapar texto para prevenir problemas de HTML
    const descripcionSegura = (reporte.descripcion || 'Sin contenido')
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");

    contenidoEl.innerHTML = `
        <div class="detalle-info-grid">
            <p><strong>Tipo:</strong> ${badgeTipo}</p>
            <p><strong>Usuario:</strong> ${reporte.usuario || 'Anónimo'}</p>
            <p><strong>Fecha y Hora:</strong> ${reporte.timestamp || 'N/A'}</p>
            <p><strong>Grado:</strong> ${gradoTexto}</p>
            <p><strong>Materia:</strong> ${materiaTexto}</p>
            <p><strong>Tema:</strong> ${temaTexto}</p>
            <p><strong>Juego:</strong> ${juegoTexto}</p>
        </div>
        <h3 style="margin-top: 20px; margin-bottom: 10px; color: #FFC107;">📝 Mensaje / Descripción enviada:</h3>
        <div class="detalle-reporte-mensaje">
            ${descripcionSegura}
        </div>
        <div style="margin-top: 20px; display: flex; justify-content: flex-end; gap: 10px;">
            <button class="btn-eliminar-reporte" onclick="eliminarReporte('${reporte.id}'); document.getElementById('modal-detalle-resultado').style.display='none';">🗑️ Eliminar este Reporte</button>
        </div>
    `;

    modal.style.display = 'flex';

    if (btnCerrar) {
        btnCerrar.onclick = () => {
            modal.style.display = 'none';
        };
    }
}
window.mostrarDetalleReporte = mostrarDetalleReporte;

/** Elimina un reporte de Supabase y de localStorage */
async function eliminarReporte(id) {
    if (!confirm('¿Estás seguro de que quieres eliminar esta reseña/reporte?')) return;

    // 1. Eliminar de Supabase
    try {
        await fetch(`${SUPABASE_URL}/rest/v1/reportes?id=eq.${id}`, {
            method: 'DELETE',
            headers: { 'apikey': SUPABASE_ANON_KEY, 'Authorization': `Bearer ${SUPABASE_ANON_KEY}` }
        });
    } catch (error) {
        console.warn("Error al eliminar de Supabase:", error);
    }

    // 2. Eliminar de localStorage
    let reportes = JSON.parse(localStorage.getItem('reportesProblemas')) || [];
    reportes = reportes.filter(r => String(r.id) !== String(id));
    localStorage.setItem('reportesProblemas', JSON.stringify(reportes));

    await mostrarReportes();
}
window.eliminarReporte = eliminarReporte;


// --- SISTEMA DE GRUPOS PARA COMPETENCIAS (SOLO DOCENTES) ---
const MAX_GRUPOS = 10;
let gruposCompetencia = [];

/** Carga los grupos guardados en localStorage. */
function cargarGruposDesdeLocalStorage() {
    try {
        const datos = JSON.parse(localStorage.getItem('gameLearnGrupos'));
        if (Array.isArray(datos)) {
            gruposCompetencia = datos
                .filter(g => g && typeof g.id !== 'undefined')
                .slice(0, MAX_GRUPOS)
                .map(g => ({ id: g.id, nombre: String(g.nombre || 'Grupo'), puntos: Number(g.puntos) || 0 }));
        }
    } catch (e) {
        console.error('Error al cargar los grupos:', e);
        gruposCompetencia = [];
    }
}

/** Guarda los grupos en localStorage. */
function guardarGruposEnLocalStorage() {
    localStorage.setItem('gameLearnGrupos', JSON.stringify(gruposCompetencia));
}

/**
 * Muestra u oculta el botón flotante de grupos según el rol y la pantalla.
 * Solo visible para docentes dentro de la pantalla principal.
 */
function actualizarVisibilidadBotonGrupos() {
    const btn = document.getElementById('btn-toggle-grupos');
    if (!btn) return;
    const visible = esDocente && pantallaPrincipal && pantallaPrincipal.style.display !== 'none';
    btn.style.display = visible ? 'flex' : 'none';
    // Si se oculta, cerrar también el panel si estaba abierto
    if (!visible) {
        const panel = document.getElementById('panel-grupos');
        if (panel) panel.classList.remove('abierto');
    }
}

/** Renderiza la lista de grupos ordenada por puntaje (descendente). */
function renderizarGrupos() {
    const contenedor = document.getElementById('lista-grupos');
    if (!contenedor) return;

    if (gruposCompetencia.length === 0) {
        contenedor.innerHTML = '<p class="grupos-vacio">Aún no hay grupos.<br>Agrega hasta 10 para comenzar la competencia. 🏆</p>';
        return;
    }

    // Ordenar por puntos descendente para mostrar el ranking
    const ordenados = [...gruposCompetencia].sort((a, b) => b.puntos - a.puntos);

    contenedor.innerHTML = ordenados.map((g, i) => `
        <div class="grupo-card">
            <div class="grupo-fila-superior">
                <span class="grupo-pos ${i === 0 && g.puntos > 0 ? 'lider' : ''}">#${i + 1}</span>
                <span class="grupo-nombre" title="${escaparHtml(g.nombre)}">${escaparHtml(g.nombre)}</span>
                <span class="grupo-puntos">${g.puntos} <small>pts</small></span>
            </div>
            <div class="grupo-botones">
                <button class="btn-punto-grupo btn-restar-grupo" data-accion="sumar" data-id="${g.id}" data-cantidad="-1">−1</button>
                <button class="btn-punto-grupo" data-accion="sumar" data-id="${g.id}" data-cantidad="1">+1</button>
                <button class="btn-punto-grupo" data-accion="sumar" data-id="${g.id}" data-cantidad="3">+3</button>
                <button class="btn-borrar-grupo" data-accion="borrar" data-id="${g.id}" title="Eliminar grupo">🗑️</button>
            </div>
        </div>
    `).join('');
}

// --- EVENT LISTENERS ---
document.addEventListener('DOMContentLoaded', async () => {
    // Primero, cargamos los datos del juego desde el JSON
    try {
        const response = await fetch('games.json', { cache: 'no-store' });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        gameData = await response.json();
        console.log("Datos del juego cargados desde games.json");

        // Una vez cargados los datos, iniciamos la aplicación y los listeners
        showSplashScreen();
        initializeEventListeners();

    } catch (error) {
        console.error("Error fatal: No se pudieron cargar los datos del juego desde games.json", error);
        document.body.innerHTML = `<div style="color: white; text-align: center; padding: 50px; font-size: 1.2rem;">Error crítico: No se pudieron cargar los datos de los juegos. Por favor, revisa la consola para más detalles.</div>`;
    }
});

/** Inicializa todos los event listeners después de que los datos del juego se han cargado. */
function initializeEventListeners() {

    // Lógica para Términos y Condiciones
    const modalTerminos = document.getElementById('modal-terminos');
    const checkboxTerminos = document.getElementById('checkbox-terminos');
    const btnAceptarTerminos = document.getElementById('btn-aceptar-terminos');
    const btnVerTerminosModal = document.getElementById('btn-ver-terminos');
    const terminosSummary = document.getElementById('terminos-summary');
    const terminosFull = document.getElementById('terminos-full-content');

    // --- Nueva Lógica de Términos en Pantalla de Rol ---
    const checkboxTerminosRol = document.getElementById('checkbox-terminos-rol');
    const linkVerTerminos = document.getElementById('link-ver-terminos');
    const aceptacionTerminosRolEl = document.querySelector('.aceptacion-terminos-rol');
    const btnRolInvitado = document.getElementById('btn-rol-invitado');

    checkboxTerminosRol.addEventListener('change', () => {
        const aceptado = checkboxTerminosRol.checked;
        btnRolEstudiante.disabled = !aceptado;
        btnRolDocente.disabled = !aceptado;
        btnRolInvitado.disabled = !aceptado;
    });

    btnRolInvitado.addEventListener('click', () => {
        // Alerta: lo que haga el invitado no se guardará
        alert('⚠️ Modo Invitado:\n\nTodo lo que hagas en este modo NO se guardará. Tus resultados y progreso no quedarán registrados.\n\nSi quieres guardar tu progreso, ingresa como Estudiante.');

        esInvitado = true;
        esDocente = false;
        esAdmin = false;
        infoEstudiante = { nombre: 'Invitado' }; // Nombre genérico para la sesión

        seleccionRolEl.classList.add('anim-out');
        aceptacionTerminosRolEl.classList.add('anim-out');

        setTimeout(() => {
            seleccionRolEl.style.display = 'none';
            aceptacionTerminosRolEl.style.display = 'none';
            // Pedir grado y grupo al invitado para saber qué quiere aprender
            seleccionGradoContainerEl.querySelector('.subtitulo-seccion').textContent = '¡Hola! ¿Qué grado quieres explorar?';
            seleccionGradoContainerEl.style.display = 'block';
            estilizarBotonesGrado();
            seleccionGradoContainerEl.classList.add('anim-in');
            seleccionRolEl.classList.remove('anim-out');
            aceptacionTerminosRolEl.classList.remove('anim-out');
        }, animDuration);
    });

    linkVerTerminos.addEventListener('click', (e) => {
        e.preventDefault();
        modalTerminos.style.display = 'flex';
    });

    // --- Modal "¿Qué es GameLearn?" ---
    const modalQueEs = document.getElementById('modal-que-es-gamelearn');
    const btnQueEs = document.getElementById('btn-que-es-gamelearn');
    const btnCerrarQueEs = document.getElementById('btn-cerrar-que-es');
    if (btnQueEs && modalQueEs) {
        btnQueEs.addEventListener('click', () => {
            modalQueEs.style.display = 'flex';
        });
        btnCerrarQueEs.addEventListener('click', () => {
            modalQueEs.style.display = 'none';
        });
        // Cerrar al hacer clic fuera del contenido
        modalQueEs.addEventListener('click', (e) => {
            if (e.target === modalQueEs) modalQueEs.style.display = 'none';
        });
    }
    // --- Fin de la nueva lógica ---

    btnVerTerminosModal.addEventListener('click', () => {
        terminosSummary.style.display = 'none';
        terminosFull.style.display = 'block';
        // Forzar al navegador a recalcular el layout para que la animación funcione
        terminosFull.getBoundingClientRect();
        terminosFull.classList.add('anim-in');
    });

    checkboxTerminos.addEventListener('change', () => {
        btnAceptarTerminos.disabled = !checkboxTerminos.checked;
    });

    btnAceptarTerminos.addEventListener('click', () => {
        if (checkboxTerminos.checked) {
            modalTerminos.style.display = 'none'; // Cierra el modal de visualización
            // También marca la casilla en la pantalla de rol y habilita los botones
            checkboxTerminosRol.checked = true;
            btnRolEstudiante.disabled = false;
            btnRolInvitado.disabled = false;
            btnRolDocente.disabled = false;
        }
    });

    // Delegación de eventos para el panel de visualizaciones (botones de gráficos)
    // Se adjunta una sola vez y funciona para siempre.
    const panelVisualizaciones = document.getElementById('panel-visualizaciones-derecha');
    if (panelVisualizaciones) {
        panelVisualizaciones.addEventListener('click', (e) => {
            const botonToggleChart = e.target.closest('.btn-toggle-chart');
            if (botonToggleChart) {
                const chartContainer = botonToggleChart.closest('.chart-container');
                chartContainer.classList.toggle('minimized');
                botonToggleChart.textContent = chartContainer.classList.contains('minimized') ? '+' : '−';
            }
        });
    }

    cargarTemasDesdeLocalStorage();

    // Lógica de selección de rol y grado
    const animDuration = 400;

    btnRolEstudiante.addEventListener('click', () => {
        esDocente = false;
        esAdmin = false;
        esInvitado = false;
        document.getElementById('btn-panel-docente').style.display = 'none';
        seleccionRolEl.classList.add('anim-out');
        aceptacionTerminosRolEl.classList.add('anim-out'); // Anima también los términos
        setTimeout(() => {
            seleccionRolEl.style.display = 'none';
            aceptacionTerminosRolEl.style.display = 'none';
            loginEstudianteEl.style.display = 'block';
            loginEstudianteEl.classList.add('anim-in');
            seleccionRolEl.classList.remove('anim-out'); // Quita la clase para futuras animaciones
            aceptacionTerminosRolEl.classList.remove('anim-out');
        }, animDuration);
    });

    document.getElementById('btn-ingresar-estudiante').addEventListener('click', () => {
        const nombre = document.getElementById('nombre-estudiante-input').value.trim();
        if (nombre) {
            infoEstudiante = { nombre };
            localStorage.setItem('gameLearnStudentInfo', JSON.stringify(infoEstudiante));
            loginEstudianteEl.classList.add('anim-out');
            setTimeout(() => {
                loginEstudianteEl.style.display = 'none';
                seleccionGradoContainerEl.style.display = 'block';
                estilizarBotonesGrado(); // Asegura que los botones no tengan estilo de docente
                seleccionGradoContainerEl.classList.add('anim-in');
                loginEstudianteEl.classList.remove('anim-out');
            }, animDuration);
        } else {
            alert('Por favor, ingresa tu nombre.');
        }
    });

    document.getElementById('btn-volver-rol-estudiante').addEventListener('click', () => {
        loginEstudianteEl.style.display = 'none';
        seleccionRolEl.style.display = 'block';
        aceptacionTerminosRolEl.style.display = 'block';
    });

    document.getElementById('btn-volver-rol').addEventListener('click', () => {
        loginDocenteEl.style.display = 'none';
        seleccionRolEl.style.display = 'block';
        aceptacionTerminosRolEl.style.display = 'block';
    });

    btnRolDocente.addEventListener('click', () => {
        seleccionRolEl.classList.add('anim-out');
        aceptacionTerminosRolEl.classList.add('anim-out'); // Anima también los términos
        setTimeout(() => {
            seleccionRolEl.style.display = 'none';
            aceptacionTerminosRolEl.style.display = 'none';
            loginDocenteEl.style.display = 'block';
            loginDocenteEl.classList.add('anim-in'); // Anima la entrada del login de docente
            seleccionRolEl.classList.remove('anim-out');
            aceptacionTerminosRolEl.classList.remove('anim-out');
        }, animDuration);
    });

    document.getElementById('btn-verificar-password').addEventListener('click', () => {
        const nombreInput = document.getElementById('nombre-docente-input').value.trim().toLowerCase();
        const password = document.getElementById('password-input').value;
        const credencial = teacherCredentials[nombreInput];

        if (!nombreInput) {
            alert('Por favor, ingresa tu nombre.');
            return;
        }

        if (credencial && credencial.password === password) {
            esDocente = true;
            nombreDocente = nombreInput.replace(/\b\w/g, l => l.toUpperCase()); // Guardamos el nombre con mayúsculas
            document.getElementById('btn-panel-docente').style.display = 'inline-block';

            if (credencial.role === 'admin') {
                esAdmin = true;
            }

            loginDocenteEl.classList.add('anim-out'); // Anima la salida del login
            setTimeout(() => {
                loginDocenteEl.style.display = 'none';
                seleccionGradoContainerEl.style.display = 'block';
                estilizarBotonesGrado(); // Aplica el estilo rojo a los botones no disponibles
                seleccionGradoContainerEl.classList.add('anim-in'); // Anima la entrada de la selección de grado
                loginDocenteEl.classList.remove('anim-out');
            }, animDuration);
        } else {
            alert("Nombre de usuario o contraseña incorrectos.");
            document.getElementById('password-input').value = '';
        }
    });

    // Botón para cambiar de rol
    const btnCambiarRol = document.getElementById('btn-cambiar-rol');
    btnCambiarRol.addEventListener('click', () => {
        if (contenedorJuegoEl.style.display === 'block' && !confirm('¿Estás seguro de que quieres volver? Perderás tu progreso actual.')) {
            return; // El usuario canceló la acción
        }
        if (cronometroIntervalo) clearInterval(cronometroIntervalo); // Detener cronómetro si está activo

        pantallaPrincipal.classList.add('anim-out');
        setTimeout(() => {
            pantallaPrincipal.style.display = 'none';
            pantallaPrincipal.classList.remove('anim-out');
            seleccionMateriaEl.style.display = 'none';
            seleccionJuegoEl.style.display = 'none';
            seleccionTemaEl.style.display = 'none';
            contenedorJuegoEl.style.display = 'none';

            gradoActual = null;
            materiaActual = null;
            nombreDocente = '';
            infoEstudiante = null;
            esAdmin = false;
            esDocente = false;
            esInvitado = false;

            pantallaBienvenida.style.display = 'flex';
            pantallaBienvenida.classList.remove('anim-out');
            seleccionRolEl.style.display = 'block'; // Muestra la selección de rol
            seleccionRolEl.classList.add('anim-in'); // Anima la entrada
            aceptacionTerminosRolEl.style.display = 'block'; // Asegura que los términos estén visibles
            loginEstudianteEl.style.display = 'none';
            loginDocenteEl.style.display = 'none';
            aceptacionTerminosRolEl.classList.add('anim-in'); // Anima la entrada de los términos
            seleccionGradoContainerEl.style.display = 'none';

            // Restaurar el texto original del subtítulo de selección de grado
            const subtituloGrado = seleccionGradoContainerEl.querySelector('.subtitulo-seccion');
            if (subtituloGrado) subtituloGrado.textContent = 'Ahora, selecciona tu grado:';

            // Asegurarse de que los botones del header se muestren/oculten correctamente
            document.getElementById('btn-cambiar-grado').style.display = 'inline-block';
            document.getElementById('btn-panel-docente').style.display = 'none';
            document.getElementById('seleccion-grupo-container').style.display = 'none'; // Ocultamos el contenedor de grupo
            actualizarVisibilidadBotonGrupos(); // Ocultar el botón de grupos al salir
        }, animDuration);
    });

    // Asignar evento a los botones de grado
    document.querySelectorAll('.btn-grado').forEach(boton => {
        boton.addEventListener('click', () => {
            const grado = boton.dataset.grado;
            if (esDocente) {
                if (grado === '6' || grado === '7' || grado === '8' || grado === '9' || grado === '10' || grado === '11') {
                    iniciarApp(grado, 'Todos');
                } else {
                    alert('¡Próximamente disponible para este grado!');
                }
            } else {
                // Estudiantes e invitados: 6to a 11no están activos
                if (grado === '6' || grado === '7' || grado === '8' || grado === '9' || grado === '10' || grado === '11') {
                    if (esInvitado) {
                        // Los invitados no eligen grupo: inician directamente
                        iniciarAppInvitado(grado, 'Invitado');
                    } else {
                        mostrarSeleccionGrupo(grado);
                    }
                } else {
                    alert('¡Próximamente disponible para este grado!');
                }
            }
        });
    });

    // Botón para cambiar de grado
    btnCambiarGrado.addEventListener('click', () => {
        if (contenedorJuegoEl.style.display === 'block' && !confirm('¿Estás seguro de que quieres volver? Perderás tu progreso actual.')) {
            return; // El usuario canceló la acción
        }
        if (cronometroIntervalo) clearInterval(cronometroIntervalo); // Detener cronómetro si está activo

        infoJuegoActualEl.style.display = 'none'; // Ocultar la barra de info
        pantallaPrincipal.classList.add('anim-out');
        setTimeout(() => {
            pantallaPrincipal.style.display = 'none';
            pantallaPrincipal.classList.remove('anim-out');
            gradoActual = null;
            grupoActual = null;
            document.getElementById('seleccion-grupo-container').style.display = 'none'; // Ocultamos el contenedor de grupo

            pantallaBienvenida.style.display = 'flex';
            pantallaBienvenida.classList.remove('anim-out');
            seleccionRolEl.style.display = 'none'; // Oculta rol
            seleccionGradoContainerEl.style.display = 'block'; // Muestra directamente la selección de grado
            estilizarBotonesGrado(); // Aplica el estilo correcto a los botones
            seleccionGradoContainerEl.classList.add('anim-in'); // Anima la entrada
        }, animDuration);
    });

    /**
     * Aplica estilos a los botones de grado según el rol.
     * Para docentes, marca los grados no disponibles.
     */
    function estilizarBotonesGrado() {
        // No aplicar estilos si es invitado
        if (esInvitado) return;

        document.querySelectorAll('.btn-grado').forEach(boton => {
            boton.classList.remove('proximamente'); // Limpiar estilos previos
            if (boton.dataset.grado !== '6' && boton.dataset.grado !== '7' && boton.dataset.grado !== '8' && boton.dataset.grado !== '9' && boton.dataset.grado !== '10' && boton.dataset.grado !== '11') {
                boton.classList.add('proximamente'); // Aplica el estilo rojo a todos menos a los habilitados
            }
        });
    }
    // --- Lógica para la nueva selección de grupo ---
    const seleccionGrupoContainer = document.getElementById('seleccion-grupo-container');
    const seleccionGrupoEl = document.getElementById('seleccion-grupo');
    const btnVolverGrado = document.getElementById('btn-volver-grado');

    function mostrarSeleccionGrupo(grado) {
        seleccionGradoContainerEl.style.display = 'none';
        seleccionGradoContainerEl.classList.remove('anim-in');
        seleccionGrupoContainer.style.display = 'block';
        seleccionGrupoEl.innerHTML = ''; // Limpiar botones anteriores

        // Definir los grupos por grado
        const gruposPorGrado = {
            '6': Array.from({ length: 5 }, (_, i) => i + 1), // Grupos del 1 al 5
            '7': Array.from({ length: 5 }, (_, i) => i + 1), // Grupos del 1 al 5
            '8': Array.from({ length: 5 }, (_, i) => i + 1), // Grupos del 1 al 5
            '9': Array.from({ length: 5 }, (_, i) => i + 1), // Grupos del 1 al 5
            '10': Array.from({ length: 5 }, (_, i) => i + 1), // Grupos del 1 al 5
            '11': Array.from({ length: 5 }, (_, i) => i + 1), // Grupos del 1 al 5
        };

        const gruposDisponibles = gruposPorGrado[grado];

        if (gruposDisponibles) {
            gruposDisponibles.forEach(grupo => {
                const btnGrupo = document.createElement('button');
                btnGrupo.className = 'btn-grado'; // Reutilizamos el estilo
                btnGrupo.textContent = `Grupo ${grupo}`;
                btnGrupo.onclick = () => {
                    if (esInvitado) {
                        iniciarAppInvitado(grado, grupo);
                    } else {
                        iniciarApp(grado, grupo);
                    }
                };
                seleccionGrupoEl.appendChild(btnGrupo);
            });
        } else {
            // Si el grado no tiene grupos definidos (ej. 6, 7, 8, 11),
            // se asume un único grupo y se inicia la app directamente.
            if (esInvitado) {
                iniciarAppInvitado(grado, 'Único');
            } else {
                iniciarApp(grado, 'Único');
            }
        }
    }

    btnVolverGrado.addEventListener('click', () => {
        seleccionGrupoContainer.classList.add('anim-out');
        setTimeout(() => {
            seleccionGrupoContainer.style.display = 'none';
            seleccionGradoContainerEl.style.display = 'block';
            seleccionGradoContainerEl.classList.add('anim-in');
            seleccionGrupoContainer.classList.remove('anim-out');
        }, animDuration);
    });


    // Botón para cambiar de materia
    const btnCambiarMateria = document.getElementById('btn-cambiar-materia');
    btnCambiarMateria.addEventListener('click', () => {
        if (contenedorJuegoEl.style.display === 'block' && !confirm('¿Estás seguro de que quieres volver? Perderás tu progreso actual.')) {
            return; // El usuario canceló la acción
        }
        if (cronometroIntervalo) clearInterval(cronometroIntervalo); // Detener cronómetro si está activo
        mostrarSeleccionMateria();
    });

    // Asignar evento a las tarjetas de materia
    document.querySelectorAll('.tarjeta-materia').forEach(tarjeta => {
        tarjeta.addEventListener('click', () => { if (!tarjeta.classList.contains('disabled')) mostrarSeleccionJuego(tarjeta.dataset.materia); });
    });

    // Botón para ver el panel de docente
    document.getElementById('btn-panel-docente').addEventListener('click', () => {
        // Si hay un juego en curso, pedir confirmación antes de salir
        if (contenedorJuegoEl.style.display === 'block' && !confirm('¿Estás seguro de que quieres volver? Perderás tu progreso actual.')) {
            return; // El usuario canceló la acción
        }
        if (cronometroIntervalo) clearInterval(cronometroIntervalo); // Detener cronómetro si está activo

        seleccionMateriaEl.style.display = 'none';
        seleccionTemaEl.style.display = 'none';
        seleccionJuegoEl.style.display = 'none';
        contenedorJuegoEl.style.display = 'none';
        mostrarPanelDocente();
        infoJuegoActualEl.style.display = 'none';
    });

    // Lógica para el menú de hamburguesa
    const btnMenuHamburguesa = document.getElementById('btn-menu-hamburguesa');
    const headerControles = document.querySelector('.header-controles');

    btnMenuHamburguesa.addEventListener('click', () => {
        headerControles.classList.toggle('menu-abierto');
    });

    // Ocultar el menú si se hace clic fuera de él
    document.addEventListener('click', (e) => {
        if (!btnMenuHamburguesa.contains(e.target) && !headerControles.contains(e.target)) {
            headerControles.classList.remove('menu-abierto');
        }
    });

    // Cierra el menú al hacer clic en una de sus opciones
    headerControles.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            headerControles.classList.remove('menu-abierto');
        }
    });

    // Lógica para el nuevo botón de ayuda en el panel de docente
    const btnAyudaDocente = document.getElementById('btn-ayuda-docente');
    const panelAyudaDocente = document.getElementById('panel-ayuda-docente');
    if (btnAyudaDocente && panelAyudaDocente) {
        btnAyudaDocente.addEventListener('click', () => {
            panelAyudaDocente.style.display = panelAyudaDocente.style.display === 'none' ? 'block' : 'none';
        });
    }

    // Botón para ver reportes/reseñas en el panel docente
    const btnVerReportes = document.getElementById('btn-ver-reportes');
    if (btnVerReportes) {
        btnVerReportes.addEventListener('click', mostrarReportes);
    }

    // Botón para volver desde reportes/reseñas a resultados
    const btnVolverReportes = document.getElementById('btn-volver-reportes');
    if (btnVolverReportes) {
        btnVolverReportes.addEventListener('click', () => {
            const panelReportes = document.getElementById('panel-reportes');
            if (panelReportes) panelReportes.style.display = 'none';
            if (panelDocenteEl) panelDocenteEl.style.display = 'block';
        });
    }

    // Lógica para el sistema de reportes (problemas y consejos)
    const btnAbrirReporte = document.getElementById('btn-abrir-reporte');
    if (btnAbrirReporte) {
        btnAbrirReporte.addEventListener('click', abrirModalReportar);
    }

    const btnEnviarReporte = document.getElementById('btn-enviar-reporte');
    if (btnEnviarReporte) {
        btnEnviarReporte.addEventListener('click', guardarReporte);
    }

    const btnCancelarReporte = document.getElementById('btn-cancelar-reporte');
    if (btnCancelarReporte) {
        btnCancelarReporte.addEventListener('click', cerrarModalReportar);
    }

    // Cerrar el modal de reportes al hacer clic fuera del contenido
    const modalReportar = document.getElementById('modal-reportar-problema');
    if (modalReportar) {
        modalReportar.addEventListener('click', (e) => {
            if (e.target === modalReportar) cerrarModalReportar();
        });
    }

    // Delegación de eventos para botones dinámicos en el formulario de creación
    pantallaCrearTemaEl.addEventListener('click', (e) => {
        if (e.target.classList.contains('btn-agregar-opcion-falsa')) {
            agregarCampoOpcionFalsa(e.target.dataset.pregunta);
        }
    });

    // --- Sistema de Grupos para Competencias (solo docentes) ---
    cargarGruposDesdeLocalStorage();
    renderizarGrupos();

    const btnToggleGrupos = document.getElementById('btn-toggle-grupos');
    const panelGrupos = document.getElementById('panel-grupos');
    const btnCerrarGrupos = document.getElementById('btn-cerrar-grupos');
    const btnAgregarGrupo = document.getElementById('btn-agregar-grupo');
    const nombreNuevoGrupoInput = document.getElementById('nombre-nuevo-grupo');
    const btnReiniciarPuntajes = document.getElementById('btn-reiniciar-puntajes');
    const listaGruposEl = document.getElementById('lista-grupos');

    if (btnToggleGrupos && panelGrupos) {
        btnToggleGrupos.addEventListener('click', () => {
            renderizarGrupos(); // Refrescar por si cambiaron los datos
            panelGrupos.classList.toggle('abierto');
        });
    }

    if (btnCerrarGrupos) {
        btnCerrarGrupos.addEventListener('click', () => {
            panelGrupos.classList.remove('abierto');
        });
    }

    if (btnAgregarGrupo) {
        btnAgregarGrupo.addEventListener('click', () => {
            if (gruposCompetencia.length >= MAX_GRUPOS) {
                alert(`Alcanzaste el máximo de ${MAX_GRUPOS} grupos.`);
                return;
            }
            let nombre = nombreNuevoGrupoInput.value.trim();
            if (!nombre) nombre = `Grupo ${gruposCompetencia.length + 1}`;
            gruposCompetencia.push({ id: Date.now(), nombre, puntos: 0 });
            guardarGruposEnLocalStorage();
            renderizarGrupos();
            nombreNuevoGrupoInput.value = '';
        });

        // Enter en el input también agrega el grupo
        nombreNuevoGrupoInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') btnAgregarGrupo.click();
        });
    }

    if (btnReiniciarPuntajes) {
        btnReiniciarPuntajes.addEventListener('click', () => {
            if (gruposCompetencia.length === 0) return;
            if (!confirm('¿Seguro que quieres poner todos los puntajes en 0?')) return;
            gruposCompetencia.forEach(g => g.puntos = 0);
            guardarGruposEnLocalStorage();
            renderizarGrupos();
        });
    }

    // Delegación de eventos para sumar puntos o borrar grupos
    if (listaGruposEl) {
        listaGruposEl.addEventListener('click', (e) => {
            const boton = e.target.closest('button[data-accion]');
            if (!boton) return;
            const id = Number(boton.dataset.id);
            const grupo = gruposCompetencia.find(g => g.id === id);
            if (!grupo) return;

            if (boton.dataset.accion === 'sumar') {
                grupo.puntos += parseInt(boton.dataset.cantidad, 10) || 0;
                guardarGruposEnLocalStorage();
                renderizarGrupos();
            } else if (boton.dataset.accion === 'borrar') {
                if (confirm(`¿Eliminar el grupo "${grupo.nombre}" y su puntaje?`)) {
                    gruposCompetencia = gruposCompetencia.filter(g => g.id !== id);
                    guardarGruposEnLocalStorage();
                    renderizarGrupos();
                }
            }
        });
    }

    // Redimensionamiento manual del panel de grupos (arrastrar la pestañita superior)
    const resizeHandleGrupos = document.getElementById('grupos-resize-handle');
    if (resizeHandleGrupos && panelGrupos) {
        // Restaurar el ancho guardado por el docente
        const anchoGuardado = parseInt(localStorage.getItem('gameLearnGruposAncho'), 10);
        if (!isNaN(anchoGuardado)) {
            panelGrupos.style.setProperty('--ancho-grupos', Math.min(700, Math.max(240, anchoGuardado)) + 'px');
        }

        let redimensionandoGrupos = false;

        function moverRedimensionGrupos(e) {
            if (!redimensionandoGrupos) return;
            const clientX = e.touches ? e.touches[0].clientX : e.clientX;
            // El panel está pegado al borde izquierdo, así que su ancho es la posición X del cursor
            const nuevoAncho = Math.max(240, Math.min(window.innerWidth - 40, clientX));
            panelGrupos.style.setProperty('--ancho-grupos', nuevoAncho + 'px');
        }

        function soltarRedimensionGrupos() {
            if (!redimensionandoGrupos) return;
            redimensionandoGrupos = false;
            document.body.style.userSelect = '';
            document.body.style.cursor = '';
            // Guardar el ancho elegido para futuras sesiones
            localStorage.setItem('gameLearnGruposAncho', parseInt(getComputedStyle(panelGrupos).width, 10));
        }

        // La pestañita de redimensionado SOLO funciona con el panel abierto
        // (primero se abre haciendo clic en el botón 🏆, luego se ajusta)
        resizeHandleGrupos.addEventListener('mousedown', (e) => {
            if (!panelGrupos.classList.contains('abierto')) return;
            redimensionandoGrupos = true;
            document.body.style.userSelect = 'none';
            document.body.style.cursor = 'ew-resize';
            e.preventDefault();
        });
        window.addEventListener('mousemove', moverRedimensionGrupos);
        window.addEventListener('mouseup', soltarRedimensionGrupos);

        // Soporte táctil (tablets)
        resizeHandleGrupos.addEventListener('touchstart', (e) => {
            if (!panelGrupos.classList.contains('abierto')) return;
            redimensionandoGrupos = true;
            e.preventDefault();
        }, { passive: false });
        window.addEventListener('touchmove', moverRedimensionGrupos);
        window.addEventListener('touchend', soltarRedimensionGrupos);
    }
}

/** Carga los temas personalizados desde localStorage y los fusiona con los datos del juego. */
function cargarTemasDesdeLocalStorage() {
    const temasGuardados = localStorage.getItem('gameLearnCustomThemes');
    if (temasGuardados) {
        const temasPersonalizados = JSON.parse(temasGuardados);
        for (const materia in temasPersonalizados) {
            if (gameData[materia]) {
                Object.values(temasPersonalizados[materia]).forEach(tema => {
                    if (tema.juego === 'quiz') tema.juego = 'quickSelect';
                });
                // Fusionar temas guardados con los existentes
                Object.assign(gameData[materia].temas, temasPersonalizados[materia]);
            }
        }
    }

    // Cargar también la información del estudiante si existe
    const studentInfoGuardado = localStorage.getItem('gameLearnStudentInfo');
    if (studentInfoGuardado) {
        infoEstudiante = JSON.parse(studentInfoGuardado);
    }
}

/**
 * Escapa caracteres HTML peligrosos en un texto.
 * @param {string} texto
 * @returns {string} El texto seguro para insertar en HTML.
 */
function escaparHtml(texto) {
    return String(texto ?? '')
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
}

/**
 * Formatea la pregunta completa y la solución correcta de un objeto de error,
 * sin importar el tipo de juego del que provenga.
 * @param {Object} err - El objeto de error guardado en el resultado.
 * @returns {{pregunta: string, solucion: string}} HTML de la pregunta y la solución.
 */
function formatearPreguntaSolucion(err) {
    if (!err) return { pregunta: '<i>(Sin detalle disponible)</i>', solucion: '' };

    if (err.error && err.texto) { // findTheError
        return {
            pregunta: `En la frase: "<i>${escaparHtml(err.texto)}</i>"<br>Palabra incorrecta señalada: "<b>${escaparHtml(err.error)}</b>"`,
            solucion: `La palabra correcta es "<b>${escaparHtml(err.solucion)}</b>".`
        };
    }
    if (err.opciones && err.texto) { // quiz / quickSelect
        const opciones = Array.isArray(err.opciones) && err.opciones.length > 0
            ? `<br><small>Opciones: ${err.opciones.map(o => escaparHtml(o)).join(' &nbsp;·&nbsp; ')}</small>`
            : '';
        return {
            pregunta: `${escaparHtml(err.texto)}${opciones}`,
            solucion: `La respuesta correcta es "<b>${escaparHtml(String(err.solucion))}</b>".`
        };
    }
    if (err.en && err.es) { // matchingPairs / memoryMatch
        return {
            pregunta: `Elemento: "<i>${escaparHtml(err.en)}</i>"`,
            solucion: `Su pareja correcta era "<b>${escaparHtml(err.es)}</b>".`
        };
    }
    if (err.palabra && err.pista) { // hangman
        return {
            pregunta: `Pista: "<i>${escaparHtml(err.pista)}</i>"`,
            solucion: `La palabra oculta era "<b>${escaparHtml(err.palabra)}</b>".`
        };
    }
    if (err.operacion) { // secretCode
        const pista = err.pista ? `<br><small>Pista: ${escaparHtml(err.pista)}</small>` : '';
        return {
            pregunta: `Operación a resolver: <b>${escaparHtml(err.operacion)}</b>${pista}`,
            solucion: `El código correcto era "<b>${escaparHtml(String(err.solucion))}</b>".`
        };
    }
    if (err.draggable && err.droppable) { // dragAndDropMatch
        return {
            pregunta: `Elemento arrastrable: "<i>${escaparHtml(err.draggable)}</i>"`,
            solucion: `Debía soltarse sobre: "<b>${escaparHtml(err.droppable)}</b>".`
        };
    }
    if (err.numeros) { // numberOrder
        const orden = [...err.numeros].sort((a, b) => a - b).join(' &rarr; ');
        return {
            pregunta: `Ordenar los números: ${err.numeros.map(n => escaparHtml(String(n))).join(', ')}`,
            solucion: `El orden correcto es: <b>${orden}</b>.`
        };
    }
    if (err.texto !== undefined) { // basicOperations, equationSolver, numberSequence, fillTheWord, etc.
        return {
            pregunta: `${escaparHtml(err.texto)}`,
            solucion: err.solucion != null ? `La respuesta correcta es "<b>${escaparHtml(String(err.solucion))}</b>".` : ''
        };
    }
    return { pregunta: '<i>(Sin detalle disponible)</i>', solucion: '' };
}

/**
 * Muestra el panel lateral con la lista de estudiantes y su calificación
 * para un rango de puntuación seleccionado en la gráfica de distribución.
 * @param {string} etiqueta - El rango seleccionado (ej: 'Alta (80-100%)').
 * @param {Array} resultados - Los resultados que pertenecen a ese rango.
 */
function mostrarPanelRangoPuntuacion(etiqueta, resultados) {
    const panel = document.getElementById('panel-detalle-pregunta');
    const tituloEl = document.getElementById('titulo-detalle-pregunta');
    const contenidoEl = document.getElementById('contenido-detalle-pregunta');
    const btnCerrar = document.getElementById('btn-cerrar-detalle-pregunta');
    if (!panel || !tituloEl || !contenidoEl) return;

    tituloEl.textContent = `📊 ${etiqueta}`;

    // Ordenar de mayor a menor calificación
    const ordenados = [...resultados].sort((a, b) => b.porcentaje - a.porcentaje);

    contenidoEl.innerHTML = `
        <div class="detalle-info-grid">
            <p><strong>Resultados:</strong> ${ordenados.length}</p>
            <p><strong>Rango:</strong> ${escaparHtml(etiqueta)}</p>
        </div>
        ${ordenados.length === 0 ? '<p style="text-align:center; opacity:0.8;">Sin datos en este rango.</p>' : `
        <ul class="lista-estudiantes-fallada">
            ${ordenados.map(r => `
                <li>
                    <span>${escaparHtml(r.nombreestudiante || 'Anónimo')}</span>
                    <strong>${r.porcentaje}%</strong>
                </li>
            `).join('')}
        </ul>`}
    `;

    panel.classList.add('abierto');

    btnCerrar.onclick = () => { panel.classList.remove('abierto'); };
}

/**
 * Muestra el panel lateral con el detalle completo de una pregunta fallada:
 * la pregunta, su solución y la lista de estudiantes que la fallaron.
 * El panel se despliega junto al borde izquierdo del panel de estadísticas.
 * @param {number} indice - Posición de la pregunta dentro del ranking actual.
 */
function mostrarDetallePreguntaFallada(indice) {
    const datos = (window.preguntasFalladasActuales || [])[indice];
    if (!datos) {
        alert("No se encontró el detalle de esta pregunta.");
        return;
    }

    const panel = document.getElementById('panel-detalle-pregunta');
    const tituloEl = document.getElementById('titulo-detalle-pregunta');
    const contenidoEl = document.getElementById('contenido-detalle-pregunta');
    const btnCerrar = document.getElementById('btn-cerrar-detalle-pregunta');
    if (!panel || !tituloEl || !contenidoEl) return;

    tituloEl.textContent = '❌ Detalle de Pregunta Fallada';

    const { pregunta, solucion } = formatearPreguntaSolucion(datos.ejemplo);
    const nombreJuego = JUEGOS_DISPONIBLES[datos.juego]?.nombre || datos.juego;

    // Lista de estudiantes ordenada por cantidad de veces que fallaron la pregunta
    const listaEstudiantes = Object.entries(datos.estudiantes)
        .map(([nombre, info]) => ({ nombre, veces: info.veces }))
        .sort((a, b) => b.veces - a.veces || a.nombre.localeCompare(b.nombre));

    contenidoEl.innerHTML = `
        <div class="detalle-info-grid">
            <p><strong>Tema:</strong> ${escaparHtml(datos.tema)}</p>
            <p><strong>Juego:</strong> ${escaparHtml(nombreJuego)}</p>
            <p><strong>Veces fallada:</strong> ${datos.vecesFallada}</p>
            <p><strong>Estudiantes que fallaron:</strong> ${listaEstudiantes.length}</p>
        </div>
        <h3 style="margin-top: 20px; margin-bottom: 10px; color: #FFC107;">📝 Pregunta completa:</h3>
        <div class="detalle-reporte-mensaje">${pregunta}</div>
        ${solucion ? `
        <h3 style="margin-top: 20px; margin-bottom: 10px; color: #81C784;">✔️ Solución correcta:</h3>
        <div class="detalle-solucion-pregunta">${solucion}</div>` : ''}
        <h3 style="margin-top: 20px; margin-bottom: 10px; color: #E57373;">👥 Estudiantes que la sacaron mal (${listaEstudiantes.length}):</h3>
        <ul class="lista-estudiantes-fallada">
            ${listaEstudiantes.map(e => `
                <li>
                    <span>${escaparHtml(e.nombre)}</span>
                    <strong>${e.veces} ${e.veces === 1 ? 'vez' : 'veces'}</strong>
                </li>
            `).join('')}
        </ul>
    `;

    // Despliega el panel lateral (se posiciona junto al borde izquierdo del panel de estadísticas)
    panel.classList.add('abierto');

    btnCerrar.onclick = () => { panel.classList.remove('abierto'); };
}

/**
 * Devuelve un texto legible y una clave única para un objeto de error,
 * sin importar el tipo de juego del que provenga.
 * @param {Object} err - El objeto de error guardado en el resultado.
 * @returns {{clave: string, texto: string}|null} La clave única y el texto descriptivo.
 */
function obtenerInfoError(err) {
    if (!err) return null;
    let texto = '';
    if (err.error && err.texto) { // findTheError
        texto = `En "${err.texto}" (error en "${err.error}")`;
    } else if (err.opciones && err.texto) { // quiz / quickSelect
        texto = `Pregunta: "${err.texto}"`;
    } else if (err.en && err.es) { // matchingPairs / memoryMatch
        texto = `"${err.en}" → "${err.es}"`;
    } else if (err.palabra && err.pista) { // hangman
        texto = `Palabra: ${err.palabra} (${err.pista})`;
    } else if (err.operacion) { // secretCode
        texto = `Operación: ${err.operacion}`;
    } else if (err.draggable && err.droppable) { // dragAndDropMatch
        texto = `"${err.draggable}" → "${err.droppable}"`;
    } else if (err.numeros) { // numberOrder
        texto = `Ordenar: ${err.numeros.join(', ')}`;
    } else if (err.texto) { // basicOperations, equationSolver, numberSequence, fillTheWord, etc.
        texto = `${err.texto}`;
    } else {
        return null;
    }
    const textoLimpio = String(texto).trim();
    return { clave: textoLimpio.toLowerCase().replace(/\s+/g, ' '), texto: textoLimpio };
}

// Variables globales para los gráficos del panel de visualizaciones.
// Deben ser globales para que, si el panel se recarga (ej. tras borrar un resultado),
// los gráficos anteriores se destruyan correctamente y Chart.js no lance
// "Canvas is already in use", lo que dejaba el panel de estadísticas muerto.
let promedioJuegoChart = null;
let distribucionPuntuacionChart = null;

/** Muestra el panel de resultados para el docente. */
async function mostrarPanelDocente() {
    panelDocenteEl.style.display = 'block';

    const panelReportes = document.getElementById('panel-reportes');
    if (panelReportes) panelReportes.style.display = 'none';

    const panelVisualizaciones = document.getElementById('panel-visualizaciones-derecha');
    let currentFilteredResults = []; // Variable para almacenar los resultados filtrados
    const btnToggleVisualizaciones = document.getElementById('btn-toggle-visualizaciones');
    const btnCerrarVisualizaciones = document.getElementById('btn-cerrar-visualizaciones');
    infoJuegoActualEl.style.display = 'none';

    let resultados = [];
    try {
        const response = await fetch(`${SUPABASE_URL}/rest/v1/resultados?select=*&order=created_at.desc`, {
            headers: { 'apikey': SUPABASE_ANON_KEY, 'Authorization': `Bearer ${SUPABASE_ANON_KEY}` }
        });
        if (!response.ok) throw new Error('No se pudieron cargar los datos.');
        resultados = await response.json();
        console.log("Resultados cargados desde Supabase:", resultados);

        // Cargar temas personalizados desde localStorage para tener los nombres correctos
        cargarTemasDesdeLocalStorage();
    } catch (error) {
        console.error("Error al cargar resultados desde Supabase:", error);
        document.getElementById('tabla-resultados-container').innerHTML = '<p style="text-align: center; padding: 20px; color: #E57373;">Error al cargar los resultados. Revisa la conexión y la configuración de Supabase.</p>';
        return;
    }

    const container = document.getElementById('tabla-resultados-container');
    const filtroNombre = document.getElementById('filtro-nombre');
    const filtroMateria = document.getElementById('filtro-materia');
    const filtroJuego = document.getElementById('filtro-juego');
    const filtroGrado = document.getElementById('filtro-grado');
    const filtroGrupo = document.getElementById('filtro-grupo');
    const filtroMateriaVis = document.getElementById('filtro-materia-vis');
    const filtroGradoVis = document.getElementById('filtro-grado-vis');
    const filtroGrupoVis = document.getElementById('filtro-grupo-vis');
    const filtroJuegoVis = document.getElementById('filtro-juego-vis');
    const filtroTema = document.getElementById('filtro-tema');
    const filtroTemaVis = document.getElementById('filtro-tema-vis');
    const btnLimpiar = document.getElementById('btn-limpiar-filtros');

    // --- Lógica de filtrado avanzado para el panel de visualizaciones ---
    // Los filtros funcionan EN CASCADA entre sí y son INDEPENDIENTES de los
    // filtros de estudiantes: las estadísticas siempre se calculan sobre TODOS
    // los resultados cargados, sin importar lo que esté filtrado en la tabla.
    function repoblarFiltrosVis() {
        // Datos base: todos los resultados (independiente de la tabla principal)
        const base = Array.isArray(resultados) ? [...resultados] : [];

        const seleccion = {
            materia: filtroMateriaVis.value,
            grado: filtroGradoVis.value,
            grupo: filtroGrupoVis.value,
            juego: filtroJuegoVis.value,
            tema: filtroTemaVis.value
        };

        // Aplica todas las selecciones activas MENOS la excluida, para que cada
        // select muestre solo opciones coherentes con el resto de filtros.
        function datosPara(excluida) {
            let salida = [...base];
            if (excluida !== 'materia' && seleccion.materia) salida = salida.filter(d => d.materia === seleccion.materia);
            if (excluida !== 'grado' && seleccion.grado) salida = salida.filter(d => String(d.grado) === String(seleccion.grado));
            if (excluida !== 'grupo' && seleccion.grupo) salida = salida.filter(d => String(d.grupo) === String(seleccion.grupo));
            if (excluida !== 'juego' && seleccion.juego) salida = salida.filter(d => d.tipojuego === seleccion.juego);
            if (excluida !== 'tema' && seleccion.tema) salida = salida.filter(d => d.tema === seleccion.tema);
            return salida;
        }

        function poblarSelectVis(selectEl, opciones, valorActual, textoDefault, mapeo) {
            selectEl.innerHTML = `<option value="">${textoDefault}</option>`;
            opciones.forEach(item => {
                const { value, text } = mapeo(item);
                selectEl.innerHTML += `<option value="${value}">${text}</option>`;
            });
            // Si el valor seleccionado aún existe entre las nuevas opciones se conserva;
            // si quedó huérfano en este contexto, vuelve automáticamente a "Todos".
            selectEl.value = valorActual;
            if (selectEl.value !== valorActual) selectEl.value = '';
        }

        const unicosOrdenados = (arr) => [...new Set(arr)]
            .filter(v => v !== undefined && v !== null && v !== '')
            .sort((a, b) => String(a).localeCompare(String(b), undefined, { numeric: true }));

        poblarSelectVis(filtroMateriaVis, unicosOrdenados(datosPara('materia').map(d => d.materia)), seleccion.materia, "Todas", v => ({ value: v, text: v }));
        poblarSelectVis(filtroGradoVis, unicosOrdenados(datosPara('grado').map(d => String(d.grado))), seleccion.grado, "Todos", v => ({ value: v, text: `${v}°` }));
        poblarSelectVis(filtroGrupoVis, unicosOrdenados(datosPara('grupo').map(d => String(d.grupo))), seleccion.grupo, "Todos", v => ({ value: v, text: `Grupo ${v}` }));
        poblarSelectVis(filtroJuegoVis, [...new Set(datosPara('juego').map(d => d.tipojuego))].filter(Boolean), seleccion.juego, "Todos", clave => ({
            value: clave,
            text: JUEGOS_DISPONIBLES[clave]?.nombre || clave
        }));
        poblarSelectVis(filtroTemaVis, unicosOrdenados(datosPara('tema').map(d => d.tema)), seleccion.tema, "Todos", v => ({ value: v, text: v }));
    }

    // Event listeners para los filtros de visualización.
    // Se pasa `resultados` (todos los datos) para que las estadísticas sean
    // independientes de los filtros de estudiantes de la tabla principal.
    [filtroMateriaVis, filtroGradoVis, filtroGrupoVis, filtroJuegoVis, filtroTemaVis].forEach(filtro => {
        filtro.onchange = () => actualizarVisualizaciones(resultados);
    });

    // --- Función para renderizar la tabla ---
    function renderTabla(datos) {
        if (datos.length === 0) {
            container.innerHTML = '<p style="text-align: center; padding: 20px;">No se encontraron resultados con los filtros actuales.</p>';
            return;
        }

        // Agrupar por estudiante
        const resultadosAgrupados = datos.reduce((acc, res) => {
            if (!acc[res.nombreestudiante]) {
                acc[res.nombreestudiante] = [];
            }
            acc[res.nombreestudiante].push(res);
            return acc;
        }, {});

        let tablaHtml = '';

        // Ordenar estudiantes alfabéticamente
        const estudiantesOrdenados = Object.keys(resultadosAgrupados).sort((a, b) => a.localeCompare(b));

        for (const nombreEstudiante of estudiantesOrdenados) {
            const resultadosEstudiante = resultadosAgrupados[nombreEstudiante];
            const gradoEstudiante = resultadosEstudiante[0].grado; // Obtenemos el grado del primer resultado
            const grupoEstudiante = resultadosEstudiante[0].grupo; // Obtenemos el grupo
            tablaHtml += `
                <div class="nombre-estudiante-header" style="margin-top: 20px;">
                    <div class="student-info">
                        <h3 class="nombre-estudiante-tabla">${nombreEstudiante}</h3>
                        <span class="grado-grupo-tabla">${gradoEstudiante}° Grado (Grupo ${grupoEstudiante})</span>
                    </div>
                    <div class="student-controls">
                        <button class="btn-toggle-results" data-target-id="results-content-${nombreEstudiante.replace(/\s/g, '-')}" title="Mostrar/Ocultar resultados">+</button>
                        <button class="btn-borrar-resultados-estudiante" data-nombre-estudiante="${nombreEstudiante}" title="Borrar todos los resultados de este estudiante">🗑️ Borrar Todo</button>
                    </div>
                </div>
                <div id="results-content-${nombreEstudiante.replace(/\s/g, '-')}" class="student-results-content">
                    <table class="tabla-resultados">
                    <thead>
                        <tr>
                            <th>Materia</th>
                            <th>Tema</th>
                            <th>Juego</th>
                            <th>Puntuación</th>
                            <th>Tiempo</th>
                            <th>Fecha</th>
                            <th>Acción</th>
                        </tr>
                    </thead>
                    <tbody>
            `;

            // Ordenar resultados del estudiante por fecha más reciente
            resultadosEstudiante.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

            for (const res of resultadosEstudiante) {
                let clasePuntuacion = 'puntuacion-media';
                if (res.porcentaje >= 80) clasePuntuacion = 'puntuacion-alta';
                else if (res.porcentaje < 50) clasePuntuacion = 'puntuacion-baja';

                tablaHtml += `
                    <tr class="fila-resultado" data-resultado-id="${res.id}" title="Ver detalles">
                        <td>${res.materia}</td>
                        <td>${res.tema}</td>
                        <td>${(JUEGOS_DISPONIBLES[res.tipojuego]?.nombre || res.tipojuego)}</td>
                        <td class="${clasePuntuacion}">${res.puntuacion_str} (${res.porcentaje}%)</td>
                        <td>${res.tiempo}</td>
                        <td>${new Date(res.created_at).toLocaleString('es-CO')}</td>
                        <td>
                            <div class="accion-contenedor">
                                <button class="btn-borrar-resultado-individual" data-resultado-id="${res.id}" title="Borrar este resultado">🗑️</button>
                            </div>
                        </td>
                    </tr>
                `;
            }

            tablaHtml += '</tbody></table></div>'; // Cierre de la tabla y del div colapsable
        }

        container.innerHTML = tablaHtml; // Renderiza todo el HTML

        // Añadir event listeners para los nuevos botones de alternancia
        document.querySelectorAll('.btn-toggle-results').forEach(button => {
            button.addEventListener('click', (e) => {
                const clickedButton = e.target;
                const targetContentDiv = document.getElementById(clickedButton.dataset.targetId);

                // Comprueba si el que se clickeó ya estaba abierto
                const wasAlreadyOpen = targetContentDiv.classList.contains('expanded');

                // Cierra todos los contenedores
                document.querySelectorAll('.student-results-content.expanded').forEach(div => {
                    div.classList.remove('expanded');
                    document.querySelector(`[data-target-id="${div.id}"]`).textContent = '+';
                });

                // Si no estaba abierto, lo abre. Si ya estaba abierto, el paso anterior ya lo cerró.
                if (!wasAlreadyOpen) {
                    targetContentDiv.classList.add('expanded');
                    clickedButton.textContent = '−';
                }
            });
        });
    }

    // --- Lógica de filtrado avanzado ---
    // Los filtros de estudiantes funcionan EN CASCADA (igual que los de
    // estadísticas): las opciones de cada select se adaptan según todas las
    // demás selecciones activas. Ej: si eliges Materia = Matemáticas, el
    // select de Juego solo mostrará los juegos con datos de matemáticas.
    function repoblarFiltros(datosBase) {
        const base = Array.isArray(datosBase) ? [...datosBase] : [];

        const seleccion = {
            nombre: filtroNombre.value.trim().toLowerCase(),
            materia: filtroMateria.value,
            juego: filtroJuego.value,
            grado: filtroGrado.value,
            grupo: filtroGrupo.value,
            tema: filtroTema.value
        };

        // Aplica todas las selecciones activas MENOS la excluida, para que cada
        // filtro muestre solo opciones coherentes con el resto de selecciones.
        function datosPara(excluida) {
            let salida = [...base];
            if (excluida !== 'nombre' && seleccion.nombre) salida = salida.filter(r => r.nombreestudiante.toLowerCase().includes(seleccion.nombre));
            if (excluida !== 'materia' && seleccion.materia) salida = salida.filter(d => d.materia === seleccion.materia);
            if (excluida !== 'juego' && seleccion.juego) salida = salida.filter(d => d.tipojuego === seleccion.juego);
            if (excluida !== 'grado' && seleccion.grado) salida = salida.filter(d => String(d.grado) === String(seleccion.grado));
            if (excluida !== 'grupo' && seleccion.grupo) salida = salida.filter(d => String(d.grupo) === String(seleccion.grupo));
            if (excluida !== 'tema' && seleccion.tema) salida = salida.filter(d => d.tema === seleccion.tema);
            return salida;
        }

        function poblarSelect(selectEl, opciones, valorActual, textoDefault, mapeo) {
            selectEl.innerHTML = `<option value="">${textoDefault}</option>`;
            opciones.forEach(item => {
                const { value, text } = mapeo(item);
                selectEl.innerHTML += `<option value="${value}">${text}</option>`;
            });
            // Si el valor seleccionado aún existe entre las nuevas opciones se conserva;
            // si quedó huérfano en este contexto, vuelve automáticamente a "Todos".
            selectEl.value = valorActual;
            if (selectEl.value !== valorActual) selectEl.value = '';
            // Sincroniza el estilo de placeholder del select
            selectEl.classList.toggle('filtro-default', selectEl.value === '');
        }

        const unicosOrdenados = (arr) => [...new Set(arr)]
            .filter(v => v !== undefined && v !== null && v !== '')
            .sort((a, b) => String(a).localeCompare(String(b), undefined, { numeric: true }));

        poblarSelect(filtroMateria, unicosOrdenados(datosPara('materia').map(d => d.materia)), seleccion.materia, "Todas las Materias", v => ({ value: v, text: v }));
        poblarSelect(filtroJuego, [...new Set(datosPara('juego').map(d => d.tipojuego))].filter(Boolean), seleccion.juego, "Todos los Juegos", clave => ({
            value: clave,
            text: JUEGOS_DISPONIBLES[clave]?.nombre || clave
        }));
        poblarSelect(filtroGrado, unicosOrdenados(datosPara('grado').map(d => String(d.grado))), seleccion.grado, "Todos los Grados", v => ({ value: v, text: `${v}°` }));
        poblarSelect(filtroGrupo, unicosOrdenados(datosPara('grupo').map(d => String(d.grupo))), seleccion.grupo, "Todos los Grupos", v => ({ value: v, text: `Grupo ${v}` }));
        poblarSelect(filtroTema, unicosOrdenados(datosPara('tema').map(d => d.tema)), seleccion.tema, "Todos los Temas", v => ({ value: v, text: v }));
    }

    // --- Lógica de filtrado ---
    function aplicarFiltros() {
        try {
            // 1. Repoblar primero: la cascada resetea a "Todos" cualquier valor
            //    huérfano, garantizando que solo se filtren opciones válidas.
            repoblarFiltros(resultados);

            // 2. Leer los valores YA saneados por la cascada
            const textoNombre = filtroNombre.value.toLowerCase();
            const materiaSeleccionada = filtroMateria.value;
            const juegoSeleccionado = filtroJuego.value;
            const gradoSeleccionado = filtroGrado.value;
            const grupoSeleccionado = filtroGrupo.value;
            const temaSeleccionado = filtroTema.value;

            let resultadosFiltrados = [...resultados]; // Copia para no modificar el original

            if (textoNombre) {
                resultadosFiltrados = resultadosFiltrados.filter(res =>
                    res.nombreestudiante.toLowerCase().includes(textoNombre)
                );
            }
            if (materiaSeleccionada) resultadosFiltrados = resultadosFiltrados.filter(res => res.materia === materiaSeleccionada);
            if (juegoSeleccionado) resultadosFiltrados = resultadosFiltrados.filter(res => res.tipojuego === juegoSeleccionado);
            if (gradoSeleccionado) resultadosFiltrados = resultadosFiltrados.filter(res => String(res.grado) === String(gradoSeleccionado));
            if (grupoSeleccionado) resultadosFiltrados = resultadosFiltrados.filter(res => String(res.grupo) === String(grupoSeleccionado));
            if (temaSeleccionado) resultadosFiltrados = resultadosFiltrados.filter(res => res.tema === temaSeleccionado);

            currentFilteredResults = resultadosFiltrados; // Almacena los resultados filtrados
            renderTabla(resultadosFiltrados);
            // NOTA: NO se llama a actualizarVisualizaciones aquí porque el panel de
            // estadísticas es independiente de los filtros de estudiantes.
        } catch (error) {
            // Si algo falla al renderizar, mostrar el error pero NO dejar los filtros muertos
            console.error('Error al aplicar filtros:', error);
            try {
                renderTabla(currentFilteredResults);
                repoblarFiltros(resultados);
            } catch (e) {
                console.error('Error al recuperar filtros:', e);
            }
        }
    }

    // --- Event Listeners ---
    // Se usan propiedades (onchange/onclick) y no addEventListener para que,
    // si el panel se recarga, los handlers antiguos se reemplacen y no se acumulen.
    filtroNombre.oninput = aplicarFiltros;

    [filtroMateria, filtroJuego, filtroGrado, filtroGrupo, filtroTema].forEach(select => {
        select.onchange = () => {
            select.classList.toggle('filtro-default', select.value === '');
            aplicarFiltros();
        };
        // Estado inicial
        select.classList.toggle('filtro-default', select.value === '');
    });

    btnLimpiar.onclick = () => {
        filtroNombre.value = '';
        filtroMateria.value = '';
        filtroJuego.value = '';
        filtroGrado.value = '';
        filtroGrupo.value = '';
        filtroTema.value = '';
        aplicarFiltros(); // Repobla la cascada con todas las opciones y muestra todo
    };

    // Event listener para el nuevo botón de exportar
    document.getElementById('btn-exportar-excel').onclick = () => {
        const nombreEstudiante = document.getElementById('filtro-nombre').value.trim();
        const materiaSeleccionada = document.getElementById('filtro-materia').value;
        const juegoSeleccionado = document.getElementById('filtro-juego').value;
        const gradoSeleccionado = document.getElementById('filtro-grado').value;
        const grupoSeleccionado = document.getElementById('filtro-grupo').value;

        const tieneNombre = nombreEstudiante !== '';
        const tieneTodosLosFiltrosSecundarios = materiaSeleccionada && juegoSeleccionado && gradoSeleccionado && grupoSeleccionado;

        if (tieneNombre || tieneTodosLosFiltrosSecundarios) {
            // Si se cumple alguna de las condiciones, se procede con la exportación.
            exportarAExcel(currentFilteredResults);
        } else {
            // Si no, se muestra una alerta.
            alert("Para exportar, debes filtrar por el nombre de un estudiante o seleccionar todos los filtros (materia, juego, grado y grupo).");
        }
    };

    if (btnToggleVisualizaciones) {
        btnToggleVisualizaciones.onclick = () => {
            panelVisualizaciones.classList.toggle('abierto');
        };
    }
    if (btnCerrarVisualizaciones) {
        btnCerrarVisualizaciones.onclick = () => {
            panelVisualizaciones.classList.remove('abierto');
        };
    }

    // Botón para limpiar los filtros del panel de estadísticas
    const btnLimpiarFiltrosVis = document.getElementById('btn-limpiar-filtros-vis');
    if (btnLimpiarFiltrosVis) {
        btnLimpiarFiltrosVis.onclick = () => {
            filtroMateriaVis.value = '';
            filtroGradoVis.value = '';
            filtroGrupoVis.value = '';
            filtroJuegoVis.value = '';
            filtroTemaVis.value = '';
            actualizarVisualizaciones(resultados);
        };
    }

    // --- Lógica para Visualizaciones ---
    function actualizarVisualizaciones(datos) {
        const statsContainer = document.getElementById('estadisticas-grupo-container');

        try {
            // Los filtros de visualización se calculan en cascada a partir de
            // currentFilteredResults (los datos ya filtrados por la tabla principal).
            repoblarFiltrosVis();
        } catch (e) {
            console.error('Error al poblar los filtros de visualización:', e);
        }

        // Aplicar los filtros de visualización
        const materiaVis = filtroMateriaVis.value, gradoVis = filtroGradoVis.value, grupoVis = filtroGrupoVis.value, juegoVis = filtroJuegoVis.value, temaVis = filtroTemaVis.value;

        let datosVis = [...datos]; // Copia para no modificar la tabla principal
        if (materiaVis) datosVis = datosVis.filter(d => d.materia === materiaVis);
        if (gradoVis) datosVis = datosVis.filter(d => String(d.grado) === String(gradoVis));
        if (grupoVis) datosVis = datosVis.filter(d => String(d.grupo) === String(grupoVis));
        if (juegoVis) datosVis = datosVis.filter(d => d.tipojuego === juegoVis);
        if (temaVis) datosVis = datosVis.filter(d => d.tema === temaVis);

        // Ahora 'datosVis' contiene los datos doblemente filtrados

        if (datosVis.length === 0) {
            statsContainer.innerHTML = '<p style="grid-column: 1 / -1;">No hay datos para mostrar estadísticas.</p>';
            if (promedioJuegoChart) promedioJuegoChart.destroy();
            if (distribucionPuntuacionChart) distribucionPuntuacionChart.destroy();
            promedioJuegoChart = null;
            distribucionPuntuacionChart = null;
            document.getElementById('promedio-juego-chart').style.display = 'none';
            document.getElementById('distribucion-puntuacion-chart').style.display = 'none';
            const listaErroresVacia = document.getElementById('errores-frecuentes-lista');
            if (listaErroresVacia) listaErroresVacia.innerHTML = '<p class="sin-errores">No hay datos para mostrar estadísticas.</p>';
            return;
        }

        try {
        // 1. Calcular Estadísticas
        const totalPorcentaje = datosVis.reduce((acc, res) => acc + res.porcentaje, 0);
        const promedioCalificacion = (totalPorcentaje / datosVis.length).toFixed(1);

        const totalSegundos = datosVis.reduce((acc, res) => {
            const partes = String(res.tiempo || '00:00').split(':');
            return acc + (parseInt(partes[0], 10) || 0) * 60 + (parseInt(partes[1], 10) || 0);
        }, 0);
        const promedioSegundos = Math.round(totalSegundos / datosVis.length);
        const minutos = Math.floor(promedioSegundos / 60);
        const segundos = promedioSegundos % 60;
        const promedioTiempo = `${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;

        // 2. Calcular Rankings
        const promediosPorEstudiante = Object.values(datosVis.reduce((acc, res) => {
            if (!acc[res.nombreestudiante]) {
                acc[res.nombreestudiante] = { nombre: res.nombreestudiante, total: 0, count: 0 };
            }
            acc[res.nombreestudiante].total += res.porcentaje;
            acc[res.nombreestudiante].count++;
            return acc;
        }, {})).map(e => ({ nombre: e.nombre, promedio: (e.total / e.count) }));

        promediosPorEstudiante.sort((a, b) => b.promedio - a.promedio);

        const top3Mejores = promediosPorEstudiante.slice(0, 3);
        const top3Peores = promediosPorEstudiante.slice(-3).reverse();

        statsContainer.innerHTML = `
            <div class="stat-grid">
                <div class="stat-item">
                    <h5>Promedio Calificación</h5>
                    <p>${promedioCalificacion}%</p>
                </div>
                <div class="stat-item">
                    <h5>Promedio Tiempo</h5>
                    <p>${promedioTiempo}</p>
                </div>
            </div>
            <div class="stat-item">
                <h5>Top 3 Mejores</h5>
                <ul class="ranking-list">
                    ${top3Mejores.map(e => `<li><span>${e.nombre}</span> <strong>${e.promedio.toFixed(1)}%</strong></li>`).join('')}
                    ${top3Mejores.length === 0 ? '<li>No hay datos suficientes.</li>' : ''}
                </ul>
            </div>
            <div class="stat-item">
                <h5>Top 3 Peores</h5>
                <ul class="ranking-list">
                    ${top3Peores.map(e => `<li><span>${e.nombre}</span> <strong>${e.promedio.toFixed(1)}%</strong></li>`).join('')}
                    ${top3Peores.length === 0 ? '<li>No hay datos suficientes.</li>' : ''}
                </ul>
            </div>
        `;

        // 3. Gráfico de Promedio por Juego
        const promediosPorJuego = datosVis.reduce((acc, res) => {
            const nombreJuego = JUEGOS_DISPONIBLES[res.tipojuego]?.nombre || res.tipojuego;
            if (!acc[nombreJuego]) {
                acc[nombreJuego] = { total: 0, count: 0 };
            }
            acc[nombreJuego].total += res.porcentaje;
            acc[nombreJuego].count++;
            return acc;
        }, {});

        const labelsJuego = Object.keys(promediosPorJuego);
        const dataJuego = labelsJuego.map(label => (promediosPorJuego[label].total / promediosPorJuego[label].count).toFixed(1));

        const ctxJuego = document.getElementById('promedio-juego-chart').getContext('2d');
        document.getElementById('promedio-juego-chart').style.display = 'block';
        if (promedioJuegoChart) promedioJuegoChart.destroy();

        // Forzar que el contenedor no esté minimizado para que el gráfico se renderice bien
        const chartContainerJuego = document.getElementById('promedio-juego-chart').closest('.chart-container');
        chartContainerJuego.classList.remove('minimized');
        chartContainerJuego.querySelector('.btn-toggle-chart').textContent = '−';

        promedioJuegoChart = new Chart(ctxJuego, {
            type: 'bar',
            data: {
                labels: labelsJuego,
                datasets: [{
                    label: 'Promedio de Calificación',
                    data: dataJuego,
                    backgroundColor: 'rgba(255, 193, 7, 0.6)',
                    borderColor: 'rgba(255, 193, 7, 1)',
                    borderWidth: 1
                }]
            },
            options: { scales: { y: { beginAtZero: true, max: 100 } } }
        });

        // 4. Gráfico de Distribución de Puntuaciones
        const distribucion = datosVis.reduce((acc, res) => {
            if (res.porcentaje >= 80) acc.alta++;
            else if (res.porcentaje >= 50) acc.media++;
            else acc.baja++;
            return acc;
        }, { alta: 0, media: 0, baja: 0 });

        const ctxDistribucion = document.getElementById('distribucion-puntuacion-chart').getContext('2d');
        document.getElementById('distribucion-puntuacion-chart').style.display = 'block';
        if (distribucionPuntuacionChart) distribucionPuntuacionChart.destroy();

        // Forzar que el contenedor no esté minimizado
        const chartContainerDistribucion = document.getElementById('distribucion-puntuacion-chart').closest('.chart-container');
        chartContainerDistribucion.classList.remove('minimized');
        chartContainerDistribucion.querySelector('.btn-toggle-chart').textContent = '−';

        distribucionPuntuacionChart = new Chart(ctxDistribucion, {
            type: 'doughnut',
            data: {
                labels: ['Alta (80-100%)', 'Media (50-79%)', 'Baja (<50%)'],
                datasets: [{
                    data: [distribucion.alta, distribucion.media, distribucion.baja],
                    backgroundColor: ['#81C784', '#FFD54F', '#E57373']
                }]
            },
            options: {
                onClick: (evt, elementos) => {
                    if (!elementos || elementos.length === 0) return;
                    const indice = elementos[0].index;
                    const rangos = [
                        { etiqueta: 'Alta (80-100%)', filtro: r => r.porcentaje >= 80 },
                        { etiqueta: 'Media (50-79%)', filtro: r => r.porcentaje >= 50 && r.porcentaje < 80 },
                        { etiqueta: 'Baja (<50%)', filtro: r => r.porcentaje < 50 }
                    ];
                    const rango = rangos[indice];
                    if (!rango) return;
                    mostrarPanelRangoPuntuacion(rango.etiqueta, datosVis.filter(rango.filtro));
                }
            }
        });

        // 5. Preguntas Más Falladas (agregación de errores por pregunta)
        const listaErroresEl = document.getElementById('errores-frecuentes-lista');
        if (listaErroresEl) {
            const erroresAgregados = {};
            datosVis.forEach(res => {
                if (!Array.isArray(res.errores)) return;
                res.errores.forEach(err => {
                    const info = obtenerInfoError(err);
                    if (!info) return;
                    const clave = `${res.tema}||${info.clave}`;
                    if (!erroresAgregados[clave]) {
                        erroresAgregados[clave] = {
                            texto: info.texto,
                            tema: res.tema,
                            juego: res.tipojuego,
                            vecesFallada: 0,
                            ejemplo: err, // Objeto de error representativo (para el detalle)
                            estudiantes: {} // Quiénes la fallaron y cuántas veces
                        };
                    }
                    erroresAgregados[clave].vecesFallada++;

                    const nombreEst = res.nombreestudiante || 'Anónimo';
                    if (!erroresAgregados[clave].estudiantes[nombreEst]) {
                        erroresAgregados[clave].estudiantes[nombreEst] = { veces: 0, fecha: res.created_at };
                    }
                    erroresAgregados[clave].estudiantes[nombreEst].veces++;
                });
            });

            const topErrores = Object.values(erroresAgregados)
                .sort((a, b) => b.vecesFallada - a.vecesFallada)
                .slice(0, 10);

            // Guardar en window para que el modal de detalle pueda acceder a los datos
            window.preguntasFalladasActuales = topErrores;

            if (topErrores.length === 0) {
                listaErroresEl.innerHTML = '<p class="sin-errores">✨ ¡Excelente! Ningún estudiante ha fallado preguntas en esta selección.</p>';
            } else {
                const maxFallos = topErrores[0].vecesFallada;
                listaErroresEl.innerHTML = topErrores.map((e, i) => {
                    const nombreJuego = JUEGOS_DISPONIBLES[e.juego]?.nombre || e.juego;
                    const anchoBarra = Math.max(15, Math.round((e.vecesFallada / maxFallos) * 100));
                    const posicion = i + 1;
                    const numEstudiantes = Object.keys(e.estudiantes).length;
                    return `
                        <div class="error-item" data-indice="${i}" title="Clic para ver el detalle completo">
                            <div class="error-item-header">
                                <span class="error-pos ${posicion <= 3 ? 'top-3' : ''}">#${posicion}</span>
                                <span class="error-texto" title="${e.texto.replace(/"/g, '&quot;')}">${e.texto}</span>
                                <span class="error-conteo">${e.vecesFallada} ${e.vecesFallada === 1 ? 'vez' : 'veces'}</span>
                            </div>
                            <div class="error-barra-fondo"><div class="error-barra-relleno" style="width: ${anchoBarra}%;"></div></div>
                            <div class="error-meta">${e.tema} · ${nombreJuego} · ${numEstudiantes} ${numEstudiantes === 1 ? 'estudiante' : 'estudiantes'}</div>
                        </div>
                    `;
                }).join('');

                // Clic en cualquier pregunta fallada abre el detalle completo
                listaErroresEl.querySelectorAll('.error-item').forEach(item => {
                    item.addEventListener('click', () => {
                        mostrarDetallePreguntaFallada(parseInt(item.dataset.indice, 10));
                    });
                });
            }
        }
        } catch (error) {
            // Si algo falla al renderizar los gráficos, registrar el error pero
            // NO dejar el panel de filtros/estadísticas en estado roto
            console.error('Error al renderizar visualizaciones:', error);
        }
    }

    // Render inicial
    currentFilteredResults = resultados; // Base para la tabla y exportación
    renderTabla(resultados);
    repoblarFiltros(resultados); // Poblar filtros por primera vez
    actualizarVisualizaciones(resultados); // Estadísticas iniciales (independientes de la tabla)

    // Event listener para borrar resultados (usando delegación de eventos)
    container.onclick = function (e) {
        const botonBorrarIndividual = e.target.closest('.btn-borrar-resultado-individual');
        const botonBorrarTodo = e.target.closest('.btn-borrar-resultados-estudiante');

        // Si se hace clic en una fila (pero no en un botón de borrar), muestra los detalles
        if (e.target.closest('.fila-resultado') && !botonBorrarIndividual && !botonBorrarTodo) {
            const resultadoId = e.target.closest('.fila-resultado').dataset.resultadoId;
            mostrarDetalleResultado(parseInt(resultadoId, 10));
        }
        else if (botonBorrarIndividual) {
            const resultadoId = botonBorrarIndividual.dataset.resultadoId;
            if (confirm(`¿Estás seguro de que quieres borrar este resultado?`)) {
                borrarResultadoIndividual(parseInt(resultadoId, 10));
            }
        }
        else if (botonBorrarTodo) {
            const nombre = botonBorrarTodo.dataset.nombreEstudiante;
            if (confirm(`¿Estás seguro de que quieres borrar TODOS los resultados de ${nombre}? Esta acción no se puede deshacer.`)) {
                borrarResultadosDeEstudiante(nombre);
            }
        }
    };

    async function borrarResultadosDeEstudiante(nombreEstudiante) {
        try {
            await fetch(`${SUPABASE_URL}/rest/v1/resultados?nombreestudiante=eq.${encodeURIComponent(nombreEstudiante)}`, {
                method: 'DELETE',
                headers: { 'apikey': SUPABASE_ANON_KEY, 'Authorization': `Bearer ${SUPABASE_ANON_KEY}` }
            });
            alert(`Resultados de ${nombreEstudiante} borrados.`);
            mostrarPanelDocente(); // Recargar
        } catch (error) {
            console.error("Error al borrar resultados del estudiante:", error);
            alert("No se pudieron borrar los resultados.");
        }
    }

    async function borrarResultadoIndividual(id) {
        try {
            await fetch(`${SUPABASE_URL}/rest/v1/resultados?id=eq.${id}`, {
                method: 'DELETE',
                headers: { 'apikey': SUPABASE_ANON_KEY, 'Authorization': `Bearer ${SUPABASE_ANON_KEY}` }
            });
            mostrarPanelDocente(); // Recargar
        } catch (error) {
            console.error("Error al borrar resultado individual:", error);
            alert("No se pudo borrar el resultado.");
        }
    }
}

/**
 * Exporta los datos proporcionados a un archivo CSV.
 * @param {Array} datos - Un array de objetos con los resultados a exportar.
 */
function exportarAExcel(datos) {
    if (datos.length === 0) {
        alert("No hay datos filtrados para exportar.");
        return;
    }

    // Función auxiliar para formatear campos para CSV
    const formatCSVField = (field) => {
        if (field === null || field === undefined) {
            return '""';
        }
        const str = String(field);
        // Si el campo contiene comillas o el separador (punto y coma), lo encerramos en comillas dobles
        if (str.includes('"') || str.includes(';')) {
            // Las comillas dobles internas se escapan duplicándolas
            return `"${str.replace(/"/g, '""')}"`;
        }
        return `"${str}"`; // Encerrar siempre en comillas para mayor robustez
    };

    const headers = ["Estudiante", "Grado", "Grupo", "Materia", "Tema", "Juego", "Puntuacion", "Porcentaje (%)", "Tiempo", "Fecha"];

    // Convertir los datos a filas de CSV usando punto y coma como separador
    const rows = datos.map(res => [
        formatCSVField(res.nombreestudiante),
        formatCSVField(res.grado),
        formatCSVField(res.grupo),
        formatCSVField(res.materia),
        formatCSVField(res.tema),
        formatCSVField(JUEGOS_DISPONIBLES[res.tipojuego]?.nombre || res.tipojuego),
        `="${res.puntuacion_str}"`,
        formatCSVField(res.porcentaje),
        formatCSVField(res.tiempo),
        formatCSVField(new Date(res.created_at).toLocaleString('es-CO'))
    ].join(';'));

    // \uFEFF es el BOM (Byte Order Mark) para que Excel reconozca el UTF-8 (tildes, etc.)
    const csvContent = "\uFEFF" + [headers.join(';'), ...rows].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", "resultados_gamelearn.csv");
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
function exportarAExcel(datos) {
    if (datos.length === 0) {
        alert("No hay datos filtrados para exportar.");
        return;
    }

    const formatCSVField = (field) => `"${String(field ?? '').replace(/"/g, '""')}"`;
    const joinRow = (row) => row.join(';');

    // --- 1. Tabla Principal de Resultados ---
    const mainHeaders = ["Estudiante", "Grado", "Grupo", "Materia", "Tema", "Juego", "Puntuacion", "Porcentaje (%)", "Tiempo", "Fecha"];
    const mainRows = datos.map(res => joinRow([
        formatCSVField(res.nombreestudiante),
        formatCSVField(res.grado),
        formatCSVField(res.grupo),
        formatCSVField(res.materia),
        formatCSVField(res.tema),
        formatCSVField(JUEGOS_DISPONIBLES[res.tipojuego]?.nombre || res.tipojuego),
        `="${res.puntuacion_str}"`,
        formatCSVField(res.porcentaje),
        formatCSVField(res.tiempo),
        formatCSVField(new Date(res.created_at).toLocaleString('es-CO'))
    ]));

    let csvContent = [joinRow(mainHeaders), ...mainRows].join('\n');

    // --- 2. Resumen de Estadísticas ---
    csvContent += '\n\n\n'; // Espacios para separar las secciones
    csvContent += '"Resumen de Estadísticas";\n';

    // Calcular estadísticas generales
    const totalPorcentaje = datos.reduce((acc, res) => acc + res.porcentaje, 0);
    const promedioCalificacion = (totalPorcentaje / datos.length).toFixed(1);
    const totalSegundos = datos.reduce((acc, res) => {
        const partes = res.tiempo.split(':');
        return acc + (parseInt(partes[0], 10) * 60) + parseInt(partes[1], 10);
    }, 0);
    const promedioSegundos = Math.round(totalSegundos / datos.length);
    const minutos = Math.floor(promedioSegundos / 60);
    const segundos = promedioSegundos % 60;
    const promedioTiempo = `${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;

    csvContent += joinRow(['"Estadística"', '"Valor"']) + '\n';
    csvContent += joinRow(['"Promedio Calificación"', `"${promedioCalificacion}%"`]) + '\n';
    csvContent += joinRow(['"Promedio Tiempo"', `"${promedioTiempo}"`]) + '\n\n';

    // Calcular promedios por juego (para el gráfico de barras)
    const promediosPorJuego = datos.reduce((acc, res) => {
        const nombreJuego = JUEGOS_DISPONIBLES[res.tipojuego]?.nombre || res.tipojuego;
        if (!acc[nombreJuego]) acc[nombreJuego] = { total: 0, count: 0 };
        acc[nombreJuego].total += res.porcentaje;
        acc[nombreJuego].count++;
        return acc;
    }, {});

    csvContent += '"Promedio por Juego";\n';
    csvContent += joinRow(['"Juego"', '"Promedio (%)"']) + '\n';
    for (const juego in promediosPorJuego) {
        const promedio = (promediosPorJuego[juego].total / promediosPorJuego[juego].count).toFixed(1);
        csvContent += joinRow([formatCSVField(juego), formatCSVField(promedio)]) + '\n';
    }
    csvContent += '\n';

    // Calcular distribución de puntuaciones (para el gráfico de dona)
    const distribucion = datos.reduce((acc, res) => {
        if (res.porcentaje >= 80) acc.alta++;
        else if (res.porcentaje >= 50) acc.media++;
        else acc.baja++;
        return acc;
    }, { alta: 0, media: 0, baja: 0 });

    csvContent += '"Distribución de Puntuaciones";\n';
    csvContent += joinRow(['"Rango"', '"Cantidad"']) + '\n';
    csvContent += joinRow(['"Alta (80-100%)"', formatCSVField(distribucion.alta)]) + '\n';
    csvContent += joinRow(['"Media (50-79%)"', formatCSVField(distribucion.media)]) + '\n';
    csvContent += joinRow(['"Baja (<50%)"', formatCSVField(distribucion.baja)]) + '\n\n';

    // Calcular rankings de estudiantes
    const promediosPorEstudiante = Object.values(datos.reduce((acc, res) => {
        if (!acc[res.nombreestudiante]) acc[res.nombreestudiante] = { nombre: res.nombreestudiante, total: 0, count: 0 };
        acc[res.nombreestudiante].total += res.porcentaje;
        acc[res.nombreestudiante].count++;
        return acc;
    }, {})).map(e => ({ nombre: e.nombre, promedio: (e.total / e.count) }));

    promediosPorEstudiante.sort((a, b) => b.promedio - a.promedio);
    const top3Mejores = promediosPorEstudiante.slice(0, 3);
    const top3Peores = promediosPorEstudiante.slice(-3).reverse();

    csvContent += '"Ranking de Estudiantes";\n';
    csvContent += joinRow(['"Top 3 Mejores"', '"Promedio (%)"']) + '\n';
    top3Mejores.forEach(e => {
        csvContent += joinRow([formatCSVField(e.nombre), formatCSVField(e.promedio.toFixed(1))]) + '\n';
    });
    csvContent += '\n';
    csvContent += joinRow(['"Top 3 Peores"', '"Promedio (%)"']) + '\n';
    top3Peores.forEach(e => {
        csvContent += joinRow([formatCSVField(e.nombre), formatCSVField(e.promedio.toFixed(1))]) + '\n';
    });

    // --- 3. Creación y Descarga del Archivo ---
    // \uFEFF es el BOM (Byte Order Mark) para que Excel reconozca el UTF-8 (tildes, etc.)
    const finalCsvContent = "\uFEFF" + csvContent;

    const blob = new Blob([finalCsvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", "resultados_gamelearn.csv");
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

/** Muestra un modal con los detalles de un resultado específico. */
async function mostrarDetalleResultado(resultadoId) {
    let resultado;
    try {
        const response = await fetch(`${SUPABASE_URL}/rest/v1/resultados?id=eq.${resultadoId}&select=*`, {
            headers: { 'apikey': SUPABASE_ANON_KEY, 'Authorization': `Bearer ${SUPABASE_ANON_KEY}` }
        });
        if (!response.ok) throw new Error('No se pudo cargar el detalle.');
        const data = await response.json();
        resultado = data[0];
    } catch (error) {
        console.error("Error al cargar detalle desde Supabase:", error);
        alert("No se pudo cargar el detalle del resultado.");
        return;
    }

    if (!resultado) {
        alert("No se pudo encontrar el detalle de este resultado.");
        return;
    }

    const modal = document.getElementById('modal-detalle-resultado');
    const tituloEl = document.getElementById('detalle-titulo');
    const contenidoEl = document.getElementById('detalle-contenido');
    const btnCerrar = document.getElementById('btn-cerrar-detalle');

    tituloEl.textContent = `Detalle: ${resultado.tema}`;

    let htmlContenido = `
        <div class="detalle-info-grid">
            <p><strong>Estudiante:</strong> ${resultado.nombreestudiante}</p>
            <p><strong>Puntuación:</strong> ${resultado.puntuacion_str} (${resultado.porcentaje}%)</p>
            <p><strong>Juego:</strong> ${JUEGOS_DISPONIBLES[resultado.tipojuego]?.nombre}</p>
            <p><strong>Tiempo:</strong> ${resultado.tiempo}</p>
        </div>
        <h3>Preguntas Incorrectas:</h3>
    `;

    if (resultado.errores && resultado.errores.length > 0) {
        resultado.errores.forEach(error => {
            let textoPregunta = error.texto || '';
            let textoSolucion = error.solucion || '';

            // Formateo específico por tipo de juego para mayor claridad
            if (error.error) { // FindTheError
                textoPregunta = `En la frase: <i>"${error.texto}"</i>`;
                textoSolucion = `El error era "<b>${error.error}</b>", la palabra correcta es "<b>${error.solucion}</b>".`;
            } else if (error.opciones) { // Quiz
                textoPregunta = `En la pregunta: <i>"${error.texto}"</i>`;
                textoSolucion = `La respuesta correcta era "<b>${error.solucion}</b>".`;
            } else if (error.en && error.es) { // MatchingPairs
                textoPregunta = `Para el elemento: <i>"${error.en}"</i>`;
                textoSolucion = `La pareja correcta era "<b>${error.es}</b>".`;
            } else if (error.respuestaUsuario) { // Genérico para juegos con respuesta de texto
                textoPregunta = `En la pregunta: <i>"${error.texto}"</i>`;
                textoSolucion = `La respuesta correcta era "<b>${error.solucion}</b>".`;
            } else { // Genérico para otros juegos
                textoPregunta = `En la pregunta: <i>"${textoPregunta}"</i>`;
                textoSolucion = `La respuesta correcta era "<b>${textoSolucion}</b>".`;
            }

            const respuestaUsuarioHtml = error.respuestaUsuario ? `<p style="font-style: italic; background: rgba(255, 193, 7, 0.1); padding: 8px 12px; border-radius: 5px; margin: 10px 0;">Tu respuesta fue: "<b>${error.respuestaUsuario}</b>"</p>` : '';

            htmlContenido += `<div class="feedback-item"><p>❌ ${textoPregunta}</p>${respuestaUsuarioHtml}<p>✔️ ${textoSolucion}</p></div>`;
        });
    } else {
        htmlContenido += '<p>¡Felicidades! No hubo errores en este juego. ✨</p>';
    }

    contenidoEl.innerHTML = htmlContenido;
    modal.style.display = 'flex';

    btnCerrar.onclick = () => modal.style.display = 'none';
}
