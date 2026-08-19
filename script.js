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
        nombre: "Unir Parejas",
        descripcion: "Encuentra los pares correctos. Haz clic en una tarjeta de la izquierda y luego en su correspondiente de la derecha.",
        icono: "🤝"
    },
    findTheError: {
        nombre: "Encontrar el Error",
        descripcion: "Lee la oración con atención y haz clic sobre la palabra que creas que es incorrecta.",
        icono: "🔍"
    },
    quiz: {
        nombre: "Quiz",
        descripcion: "Demuestra lo que sabes. Lee cada pregunta y selecciona la respuesta correcta entre las opciones.",
        icono: "❓"
    },
    basicOperations: {
        nombre: "Operaciones Básicas",
        descripcion: "Resuelve la operación matemática y escribe el resultado numérico en el campo de respuesta.",
        icono: "➕➖"
    },
    equationSolver: {
        nombre: "Resolver Ecuaciones",
        descripcion: "Calcula el valor de la incógnita en la ecuación y escribe la solución numérica.",
        icono: "🧮"
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
        nombre: "Ordenar Números",
        descripcion: "Arrastra los números de la izquierda y suéltalos en las casillas de la derecha para ordenarlos como se indica.",
        icono: "📉📈"
    },
    rouletteVF: {
        nombre: "Ruleta V/F",
        descripcion: "Gira la ruleta para obtener una respuesta y decide si la afirmación resultante es Verdadera o Falsa.",
        icono: "🎡"
    },
    memoryMatch: {
        nombre: "Memoria de Pares",
        descripcion: "Encuentra las parejas de palabras. Voltea dos cartas para ver si coinciden.",
        icono: "🧠"
    },
    hangman: {
        nombre: "Ahorcado",
        descripcion: "Adivina la palabra oculta letra por letra antes de que se complete el dibujo.",
        icono: "☠️"
    },
    fillTheWord: {
        nombre: "Completar la Palabra",
        descripcion: "Lee la pista y escribe la palabra que falta en el espacio en blanco.",
        icono: "✍️"
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
}

/** Inicia la aplicación en modo invitado, saltándose los pasos intermedios. */
function iniciarAppInvitado() {
    gradoActual = 'Invitado';
    grupoActual = '';
    gradoSeleccionadoEl.textContent = 'Modo Invitado';

    // Oculta la pantalla de bienvenida y muestra la principal
    pantallaBienvenida.style.display = 'none';
    pantallaPrincipal.style.display = 'block';

    // Oculta el botón "Cambiar Grado" que no es relevante para invitados
    document.getElementById('btn-cambiar-grado').style.display = 'none';

    mostrarSeleccionMateria();
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

        const tiposDeJuegoEnMateria = [...new Set(Object.values(gameData[materia].temas).map(tema => tema.juego))];

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
        if (temas[claveTema].juego === tipoJuego) {
            const tema = temas[claveTema];
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
                quiz: cargarPreguntaQuiz,
                basicOperations: cargarPreguntaBasicOperations,
                equationSolver: cargarPreguntaEquationSolver,
                numberSequence: cargarPreguntaNumberSequence,
                dragAndDropMatch: cargarPreguntaDragAndDropMatch,
                numberOrder: cargarPreguntaNumberOrder,
                rouletteVF: cargarPreguntaRouletteVF,
                memoryMatch: cargarPreguntaMemoryMatch,
                hangman: cargarPreguntaHangman,
                fillTheWord: cargarPreguntaFillTheWord,
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

/** Guarda los resultados del juego en Supabase. */
async function guardarResultados(puntuacion, total, tiempo, tipoJuego, errores) {
    if (esDocente || !infoEstudiante || esInvitado) {
        console.log("Modo docente, invitado o sin sesión. No se guardan resultados.");
        return;
    }

    const temaInfo = gameData[materiaActual].temas[temaActual];

    if (!temaInfo) {
        console.error("Error crítico: No se pudo encontrar la información del tema actual. No se guardarán los resultados.", {materiaActual, temaActual});
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
        const tipoJuego = gameData[materiaActual].temas[temaActual].juego;
        mostrarTemas(materiaActual, tipoJuego);
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


// --- EVENT LISTENERS ---
document.addEventListener('DOMContentLoaded', async () => {
    // Primero, cargamos los datos del juego desde el JSON
    try {
        const response = await fetch('games.json');
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
        esInvitado = true;
        esDocente = false;
        esAdmin = false;
        infoEstudiante = { nombre: 'Invitado' }; // Nombre genérico para la sesión

        seleccionRolEl.classList.add('anim-out');
        aceptacionTerminosRolEl.classList.add('anim-out');
        
        setTimeout(() => {
            iniciarAppInvitado();
            seleccionRolEl.classList.remove('anim-out');
            aceptacionTerminosRolEl.classList.remove('anim-out');
        }, animDuration);
    });

    linkVerTerminos.addEventListener('click', (e) => {
        e.preventDefault();
        modalTerminos.style.display = 'flex';
    });
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

            // Asegurarse de que los botones del header se muestren/oculten correctamente
            document.getElementById('btn-cambiar-grado').style.display = 'inline-block';
            document.getElementById('btn-panel-docente').style.display = 'none';
            document.getElementById('seleccion-grupo-container').style.display = 'none'; // Ocultamos el contenedor de grupo
        }, animDuration);
    });

    // Asignar evento a los botones de grado
    document.querySelectorAll('.btn-grado').forEach(boton => {
        boton.addEventListener('click', () => {
            const grado = boton.dataset.grado;
            if (esDocente) {
                if (grado === '9') {
                    iniciarApp(grado, 'Todos');
                } else {
                    alert('¡Próximamente disponible para este grado!');
                }
            } else {
                // Si es estudiante, solo 9no está activo
                if (grado === '9') {
                    mostrarSeleccionGrupo(grado);
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
            if (boton.dataset.grado !== '9') {
                boton.classList.add('proximamente'); // Aplica el estilo rojo a todos menos a 9no
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
            '9': Array.from({ length: 5 }, (_, i) => i + 1), // Grupos del 1 al 5
            '10': Array.from({ length: 5 }, (_, i) => i + 1), // Grupos del 1 al 5
        };

        const gruposDisponibles = gruposPorGrado[grado];

        if (gruposDisponibles) {
            gruposDisponibles.forEach(grupo => {
                const btnGrupo = document.createElement('button');
                btnGrupo.className = 'btn-grado'; // Reutilizamos el estilo
                btnGrupo.textContent = `Grupo ${grupo}`;
                btnGrupo.onclick = () => {
                    iniciarApp(grado, grupo);
                };
                seleccionGrupoEl.appendChild(btnGrupo);
            });
        } else {
            // Si el grado no tiene grupos definidos (ej. 6, 7, 8, 11),
            // se asume un único grupo y se inicia la app directamente.
            iniciarApp(grado, 'Único');
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
    if (btnAyudaDocente) {
        btnAyudaDocente.addEventListener('click', () => {
            panelAyudaDocente.style.display = panelAyudaDocente.style.display === 'none' ? 'block' : 'none';
        });
    }

    // Delegación de eventos para botones dinámicos en el formulario de creación
    pantallaCrearTemaEl.addEventListener('click', (e) => {
        if (e.target.classList.contains('btn-agregar-opcion-falsa')) {
            agregarCampoOpcionFalsa(e.target.dataset.pregunta);
        }
    });
}

/** Carga los temas personalizados desde localStorage y los fusiona con los datos del juego. */
function cargarTemasDesdeLocalStorage() {
    const temasGuardados = localStorage.getItem('gameLearnCustomThemes');
    if (temasGuardados) {
        const temasPersonalizados = JSON.parse(temasGuardados);
        for (const materia in temasPersonalizados) {
            if (gameData[materia]) {
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

/** Muestra el panel de resultados para el docente. */
async function mostrarPanelDocente() {
    let promedioJuegoChart = null;
    let distribucionPuntuacionChart = null;
    panelDocenteEl.style.display = 'block';

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
    const btnLimpiar = document.getElementById('btn-limpiar-filtros');
    
    // --- Lógica de filtrado avanzado para el panel de visualizaciones ---
    function repoblarFiltrosVis(datosBase) {
        const valorMateria = filtroMateriaVis.value;
        const valorGrado = filtroGradoVis.value;
        const valorGrupo = filtroGrupoVis.value;
        const valorJuego = filtroJuegoVis.value;

        function poblarSelectVis(selectEl, opciones, valorActual, textoDefault, mapeo = item => ({ value: item, text: item })) {
            selectEl.innerHTML = `<option value="">${textoDefault}</option>`;
            opciones.forEach(item => {
                const { value, text } = mapeo(item);
                selectEl.innerHTML += `<option value="${value}" ${value == valorActual ? 'selected' : ''}>${text}</option>`;
            });
            selectEl.value = valorActual;
        }

        const datosParaMateria = datosBase.filter(d => (!valorGrado || d.grado === valorGrado) && (!valorGrupo || String(d.grupo) === valorGrupo) && (!valorJuego || d.tipojuego === valorJuego));
        const datosParaGrado = datosBase.filter(d => (!valorMateria || d.materia === valorMateria) && (!valorGrupo || String(d.grupo) === valorGrupo) && (!valorJuego || d.tipojuego === valorJuego));
        const datosParaGrupo = datosBase.filter(d => (!valorMateria || d.materia === valorMateria) && (!valorGrado || d.grado === valorGrado) && (!valorJuego || d.tipojuego === valorJuego));
        const datosParaJuego = datosBase.filter(d => (!valorMateria || d.materia === valorMateria) && (!valorGrado || d.grado === valorGrado) && (!valorGrupo || String(d.grupo) === valorGrupo));

        const materiasUnicas = [...new Set(datosParaMateria.map(d => d.materia))].sort();
        const gradosUnicos = [...new Set(datosParaGrado.map(d => d.grado))].sort((a, b) => a - b);
        const gruposUnicos = [...new Set(datosParaGrupo.map(d => d.grupo))].filter(Boolean).sort((a, b) => a - b);
        const juegosUnicos = [...new Set(datosParaJuego.map(d => d.tipojuego))].filter(Boolean);

        poblarSelectVis(filtroMateriaVis, materiasUnicas, valorMateria, "Todas");
        poblarSelectVis(filtroGradoVis, gradosUnicos, valorGrado, "Todos", g => ({ value: g, text: `${g}°` }));
        poblarSelectVis(filtroGrupoVis, gruposUnicos, valorGrupo, "Todos", g => ({ value: g, text: `Grupo ${g}` }));
        poblarSelectVis(filtroJuegoVis, juegosUnicos, valorJuego, "Todos", clave => ({
            value: clave,
            text: JUEGOS_DISPONIBLES[clave]?.nombre || clave
        }));
    }

    // Event listeners para los filtros de visualización
    [filtroMateriaVis, filtroGradoVis, filtroGrupoVis, filtroJuegoVis].forEach(filtro => {
        filtro.onchange = () => actualizarVisualizaciones(currentFilteredResults);
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
    function repoblarFiltros(datos) {
        const valorMateria = filtroMateria.value;
        const valorJuego = filtroJuego.value;
        const valorGrado = filtroGrado.value;
        const valorGrupo = filtroGrupo.value;

        // Función auxiliar para poblar un select
        function poblarSelect(selectEl, opciones, valorActual, textoDefault, mapeo = item => ({value: item, text: item})) {
            selectEl.innerHTML = `<option value="">${textoDefault}</option>`;
            opciones.forEach(item => {
                const { value, text } = mapeo(item);
                selectEl.innerHTML += `<option value="${value}" ${value == valorActual ? 'selected' : ''}>${text}</option>`;
            });
            selectEl.value = valorActual; // Asegura que el valor se mantenga
        }

        // Filtrar datos para cada menú desplegable basado en las otras selecciones
        const datosParaMateria = datos.filter(d => (!valorJuego || d.tipojuego === valorJuego) && (!valorGrado || d.grado === valorGrado) && (!valorGrupo || String(d.grupo) === valorGrupo));
        const datosParaJuego = datos.filter(d => (!valorMateria || d.materia === valorMateria) && (!valorGrado || d.grado === valorGrado) && (!valorGrupo || String(d.grupo) === valorGrupo));
        const datosParaGrado = datos.filter(d => (!valorMateria || d.materia === valorMateria) && (!valorJuego || d.tipojuego === valorJuego) && (!valorGrupo || String(d.grupo) === valorGrupo));
        const datosParaGrupo = datos.filter(d => (!valorMateria || d.materia === valorMateria) && (!valorJuego || d.tipojuego === valorJuego) && (!valorGrado || d.grado === valorGrado));

        // Obtener opciones únicas de los datos ya filtrados
        const materiasUnicas = [...new Set(datosParaMateria.map(d => d.materia))].sort();
        const juegosUnicos = [...new Set(datosParaJuego.map(d => d.tipojuego))].filter(Boolean);
        const gradosUnicos = [...new Set(datosParaGrado.map(d => d.grado))].sort((a, b) => a - b);
        const gruposUnicos = [...new Set(datosParaGrupo.map(d => d.grupo))].filter(Boolean).sort((a, b) => a - b);

        // Repoblar los selects
        poblarSelect(filtroMateria, materiasUnicas, valorMateria, "Todas las Materias");
        poblarSelect(filtroJuego, juegosUnicos, valorJuego, "Todos los Juegos", clave => ({
            value: clave,
            text: JUEGOS_DISPONIBLES[clave]?.nombre || clave
        }));
        poblarSelect(filtroGrado, gradosUnicos, valorGrado, "Todos los Grados", g => ({
            value: g,
            text: `${g}°`
        }));
        poblarSelect(filtroGrupo, gruposUnicos, valorGrupo, "Todos los Grupos", g => ({
            value: g,
            text: `Grupo ${g}`
        }));
    }

    // --- Lógica de filtrado ---
    function aplicarFiltros() {
        const textoNombre = filtroNombre.value.toLowerCase();
        const materiaSeleccionada = filtroMateria.value;
        const juegoSeleccionado = filtroJuego.value;
        const gradoSeleccionado = filtroGrado.value;
        const grupoSeleccionado = filtroGrupo.value;

        let resultadosFiltrados = [...resultados]; // Copia para no modificar el original

        if (textoNombre) {
            resultadosFiltrados = resultadosFiltrados.filter(res =>
                res.nombreestudiante.toLowerCase().includes(textoNombre)
            );
        }
        if (materiaSeleccionada) resultadosFiltrados = resultadosFiltrados.filter(res => res.materia === materiaSeleccionada);
        if (juegoSeleccionado) resultadosFiltrados = resultadosFiltrados.filter(res => res.tipojuego === juegoSeleccionado);
        if (gradoSeleccionado) resultadosFiltrados = resultadosFiltrados.filter(res => res.grado === gradoSeleccionado);
        if (grupoSeleccionado) resultadosFiltrados = resultadosFiltrados.filter(res => String(res.grupo) === grupoSeleccionado);

        currentFilteredResults = resultadosFiltrados; // Almacena los resultados filtrados
        renderTabla(resultadosFiltrados);
        repoblarFiltros(resultados); // Repuebla los filtros usando la lista completa de resultados
        actualizarVisualizaciones(resultadosFiltrados);
    }

    // --- Event Listeners ---
    filtroNombre.oninput = aplicarFiltros;
    filtroMateria.onchange = aplicarFiltros;
    filtroJuego.onchange = aplicarFiltros;
    filtroGrado.onchange = aplicarFiltros;
    filtroGrupo.onchange = aplicarFiltros;

    // Añadir/quitar clase para estilo de placeholder en selects
    [filtroMateria, filtroJuego, filtroGrado, filtroGrupo].forEach(select => {
        select.addEventListener('change', () => {
            select.classList.toggle('filtro-default', select.value === '');
        });
        // Estado inicial
        select.classList.toggle('filtro-default', select.value === '');
    });

    btnLimpiar.addEventListener('click', () => {
        filtroNombre.value = '';
        filtroMateria.value = '';
        filtroJuego.value = '';
        filtroGrado.value = '';
        filtroGrupo.value = '';
        repoblarFiltros(resultados); // Repoblar con todas las opciones
        [filtroMateria, filtroJuego, filtroGrado, filtroGrupo].forEach(s => s.classList.add('filtro-default'));
        aplicarFiltros(); // Aplicamos los filtros (ahora vacíos) para mostrar todo
    });

    // Event listener para el nuevo botón de exportar
    document.getElementById('btn-exportar-excel').addEventListener('click', () => {
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
    });

    btnToggleVisualizaciones.addEventListener('click', () => {
        panelVisualizaciones.classList.add('abierto');
    });
    btnCerrarVisualizaciones.addEventListener('click', () => {
        panelVisualizaciones.classList.remove('abierto');
    });

    // --- Lógica para Visualizaciones ---
    function actualizarVisualizaciones(datos) {
        const statsContainer = document.getElementById('estadisticas-grupo-container');
        
        repoblarFiltrosVis(datos); // Repuebla los filtros de visualización con la lógica avanzada

        // Aplicar los filtros de visualización
        const materiaVis = filtroMateriaVis.value, gradoVis = filtroGradoVis.value, grupoVis = filtroGrupoVis.value, juegoVis = filtroJuegoVis.value;

        let datosVis = [...datos]; // Copia para no modificar la tabla principal
        if (materiaVis) datosVis = datosVis.filter(d => d.materia === materiaVis);
        if (gradoVis) datosVis = datosVis.filter(d => d.grado === gradoVis);
        if (grupoVis) datosVis = datosVis.filter(d => String(d.grupo) === grupoVis);
        if (juegoVis) datosVis = datosVis.filter(d => d.tipojuego === juegoVis);

        // Ahora 'datosVis' contiene los datos doblemente filtrados

        if (datosVis.length === 0) {
            statsContainer.innerHTML = '<p style="grid-column: 1 / -1;">No hay datos para mostrar estadísticas.</p>';
            if (promedioJuegoChart) promedioJuegoChart.destroy();
            if (distribucionPuntuacionChart) distribucionPuntuacionChart.destroy();
            promedioJuegoChart = null;
            distribucionPuntuacionChart = null;
            document.getElementById('promedio-juego-chart').style.display = 'none';
            document.getElementById('distribucion-puntuacion-chart').style.display = 'none';
            return;
        }

        // 1. Calcular Estadísticas
        const totalPorcentaje = datosVis.reduce((acc, res) => acc + res.porcentaje, 0);
        const promedioCalificacion = (totalPorcentaje / datosVis.length).toFixed(1);

        const totalSegundos = datosVis.reduce((acc, res) => {
            const partes = res.tiempo.split(':');
            return acc + (parseInt(partes[0], 10) * 60) + parseInt(partes[1], 10);
        }, 0);
        const promedioSegundos = Math.round(totalSegundos / datos.length);
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
            }
        });
    }

    // Render inicial
    renderTabla(resultados);
    repoblarFiltros(resultados); // Poblar filtros por primera vez
    actualizarVisualizaciones(resultados);

    // Event listener para borrar resultados (usando delegación de eventos)
    container.onclick = function(e) {
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
