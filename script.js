// --- DATOS DE LOS JUEGOS ---
// Estructura escalable para añadir más materias, temas y preguntas.
let gameData = {
    ingles: {
        nombre: "Inglés",
        temas: {
            verboToBe: {
                nombre: "Verbo To Be (Presente)",
                juego: "sentenceScramble",
                preguntas: [
                    { texto: "Ella es una estudiante.", solucion: "she is a student" },
                    { texto: "Nosotros somos amigos.", solucion: "we are friends" },
                    { texto: "Yo estoy feliz.", solucion: "i am happy" },
                    { texto: "Ellos no están en casa.", solucion: "they are not at home" },
                    { texto: "¿Es él un profesor?", solucion: "is he a teacher?" }
                ]
            },
            presenteSimple: {
                nombre: "Presente Simple",
                juego: "sentenceScramble",
                preguntas: [
                    { texto: "Él juega fútbol.", solucion: "he plays football" },
                    { texto: "A ella le gusta la pizza.", solucion: "she likes pizza" },
                    { texto: "Ellos viven en Londres.", solucion: "they live in London" },
                    { texto: "Nosotros estudiamos todos los días.", solucion: "we study every day" },
                    { texto: "El perro no come vegetales.", solucion: "the dog does not eat vegetables" }
                ]
            },
            pasadoSimple: {
                nombre: "Pasado Simple",
                juego: "sentenceScramble",
                preguntas: [
                    { texto: "Yo visité a mis abuelos.", solucion: "i visited my grandparents" },
                    { texto: "Ella no fue a la fiesta.", solucion: "she did not go to the party" },
                    { texto: "¿Estudiaste para el examen?", solucion: "did you study for the exam?" },
                    { texto: "Ellos compraron un carro nuevo.", solucion: "they bought a new car" },
                    { texto: "Nosotros vimos una película anoche.", solucion: "we watched a movie last night" }
                ]
            },
            presenteContinuo: {
                nombre: "Presente Continuo",
                juego: "sentenceScramble",
                preguntas: [
                    { texto: "Él está leyendo un libro.", solucion: "he is reading a book" },
                    { texto: "Nosotros estamos cocinando la cena.", solucion: "we are cooking dinner" },
                    { texto: "No estoy durmiendo.", solucion: "i am not sleeping" },
                    { texto: "¿Está lloviendo afuera?", solucion: "is it raining outside?" },
                    { texto: "Ellos están jugando en el parque.", solucion: "they are playing in the park" }
                ]
            },
            articulos: {
                nombre: "Artículos (a/an/the)",
                juego: "sentenceScramble",
                preguntas: [
                    { texto: "Necesito un lápiz.", solucion: "i need a pencil" },
                    { texto: "Ella es una artista.", solucion: "she is an artist" },
                    { texto: "El sol es brillante.", solucion: "the sun is bright" },
                    { texto: "Vi un elefante en el zoológico.", solucion: "i saw an elephant at the zoo" },
                    { texto: "La luna está llena esta noche.", solucion: "the moon is full tonight" }
                ]
            },
            preposiciones: {
                nombre: "Preposiciones de Lugar",
                juego: "sentenceScramble",
                preguntas: [
                    { texto: "El libro está sobre la mesa.", solucion: "the book is on the table" },
                    { texto: "El gato está debajo de la silla.", solucion: "the cat is under the chair" },
                    { texto: "Él está en la habitación.", solucion: "he is in the room" },
                    { texto: "La tienda está cerca del banco.", solucion: "the store is next to the bank" },
                    { texto: "Mis llaves están en mi bolsillo.", solucion: "my keys are in my pocket" }
                ]
            },
            verbosModales: {
                nombre: "Verbos Modales (can/should)",
                juego: "sentenceScramble",
                preguntas: [
                    { texto: "Tú puedes hablar inglés.", solucion: "you can speak English" },
                    { texto: "Ella debería estudiar más.", solucion: "she should study more" },
                    { texto: "Nosotros no podemos ir.", solucion: "we cannot go" },
                    { texto: "¿Puedo usar tu teléfono?", solucion: "can i use your phone?" },
                    { texto: "Tú no deberías comer eso.", solucion: "you should not eat that" }
                ]
            }
            ,
            vocabularioBasico: {
                nombre: "Vocabulario Básico",
                juego: "matchingPairs",
                preguntas: [
                    // Cada "pregunta" es un set de 4 pares para un round
                    [
                        { en: "house", es: "casa" },
                        { en: "dog", es: "perro" },
                        { en: "book", es: "libro" },
                        { en: "apple", es: "manzana" }
                    ],
                    [
                        { en: "car", es: "coche" },
                        { en: "tree", es: "árbol" },
                        { en: "sun", es: "sol" },
                        { en: "water", es: "agua" }
                    ]
                ]
            },
            animales: {
                nombre: "Animales",
                juego: "matchingPairs",
                preguntas: [
                    [
                        { en: "lion", es: "león" },
                        { en: "tiger", es: "tigre" },
                        { en: "bear", es: "oso" },
                        { en: "monkey", es: "mono" }
                    ],
                    [
                        { en: "elephant", es: "elefante" },
                        { en: "snake", es: "serpiente" },
                        { en: "bird", es: "pájaro" },
                        { en: "fish", es: "pez" }
                    ]
                ]
            },
            comida: {
                nombre: "Comida",
                juego: "matchingPairs",
                preguntas: [
                    [
                        { en: "bread", es: "pan" },
                        { en: "cheese", es: "queso" },
                        { en: "chicken", es: "pollo" },
                        { en: "rice", es: "arroz" }
                    ]
                ]
            },
            erroresComunes: {
                nombre: "Errores Comunes",
                juego: "findTheError",
                preguntas: [
                    { texto: "She like pizza.", error: "like", solucion: "likes" },
                    { texto: "They is happy.", error: "is", solucion: "are" },
                    { texto: "I have much friends.", error: "much", solucion: "many" }
                ]
            },
            tiemposVerbales: {
                nombre: "Tiempos Verbales",
                juego: "findTheError",
                preguntas: [
                    { texto: "Yesterday I go to the park.", error: "go", solucion: "went" },
                    { texto: "She is have a new car.", error: "is", solucion: "has" },
                    { texto: "They has been friends for years.", error: "has", solucion: "have" }
                ]
            },
            adjetivosAdverbios: {
                nombre: "Adjetivos y Adverbios",
                juego: "findTheError",
                preguntas: [
                    { texto: "He runs quick.", error: "quick", solucion: "quickly" },
                    { texto: "She is a beauty person.", error: "beauty", solucion: "beautiful" },
                    { texto: "That is a real good idea.", error: "real", solucion: "really" }
                ]
            },
            culturaGeneral: {
                nombre: "Vocabulario (Quiz)",
                juego: "quiz",
                preguntas: [
                    {
                        texto: "¿Qué palabra significa 'gato' en inglés?",
                        opciones: ["Dog", "Cat", "Mouse", "Bird"],
                        solucion: "Cat"
                    },
                    {
                        texto: "Which of these is a fruit?",
                        opciones: ["Carrot", "Potato", "Apple", "Broccoli"],
                        solucion: "Apple"
                    },
                    {
                        texto: "What is the opposite of 'hot'?",
                        opciones: ["Warm", "Cold", "Spicy", "Sunny"],
                        solucion: "Cold"
                    },
                    {
                        texto: "Which animal says 'moo'?",
                        opciones: ["Sheep", "Cow", "Duck", "Pig"],
                        solucion: "Cow"
                    },
                    {
                        texto: "What do you use to write on a blackboard?",
                        opciones: ["Pen", "Pencil", "Chalk", "Marker"],
                        solucion: "Chalk"
                    }
                ]
            },
            objetosLugares: {
                nombre: "Objetos y Lugares",
                juego: "dragAndDropMatch",
                preguntas: [
                    { draggable: "Library", droppable: "Lugar para leer libros" },
                    { draggable: "Hammer", droppable: "Herramienta para clavar" },
                    { draggable: "Hospital", droppable: "Lugar para curar enfermos" },
                    { draggable: "Key", droppable: "Objeto para abrir puertas" }
                ]
            }
        },
    },
    matematicas: {
        nombre: "Matemáticas",
        temas: {
            operacionesBasicas: {
                nombre: "Operaciones Básicas",
                juego: "basicOperations",
                preguntas: [
                    { texto: "¿Cuánto es 5 + 3?", solucion: "8" },
                    { texto: "¿Cuánto es 10 - 4?", solucion: "6" },
                    { texto: "¿Cuánto es 6 * 7?", solucion: "42" },
                    { texto: "¿Cuánto es 20 / 5?", solucion: "4" }
                ]
            },
            ecuacionesSimples: {
                nombre: "Ecuaciones Simples",
                juego: "equationSolver",
                preguntas: [
                    { texto: "Si x + 7 = 15, ¿cuánto vale x?", solucion: "8" },
                    { texto: "Si 2y - 3 = 7, ¿cuánto vale y?", solucion: "5" },
                    { texto: "Si z / 4 = 3, ¿cuánto vale z?", solucion: "12" }
                ]
            },
            ecuacionesMultiplicacion: {
                nombre: "Ecuaciones con Multiplicación",
                juego: "equationSolver",
                preguntas: [
                    { texto: "Si 3x = 21, ¿cuánto vale x?", solucion: "7" },
                    { texto: "Si 5y = 50, ¿cuánto vale y?", solucion: "10" },
                    { texto: "Si 10z = 120, ¿cuánto vale z?", solucion: "12" }
                ]
            },
            secuenciasNumericas: {
                nombre: "Secuencias Numéricas",
                juego: "numberSequence",
                preguntas: [
                    { texto: "Completa la secuencia: 1, 3, 5, 7, ?", solucion: "9" },
                    { texto: "Completa la secuencia: 2, 4, 8, 16, ?", solucion: "32" },
                    { texto: "Completa la secuencia: 10, 7, 4, 1, ?", solucion: "-2" }
                ]
            },
            secuenciasFibonacci: {
                nombre: "Secuencia de Fibonacci",
                juego: "numberSequence",
                preguntas: [
                    { texto: "Completa la secuencia: 1, 1, 2, 3, 5, ?", solucion: "8" },
                    { texto: "Completa la secuencia: 0, 1, 1, 2, 3, 5, 8, ?", solucion: "13" }
                ]
            },
            problemasRazonamiento: {
                nombre: "Problemas de Razonamiento",
                juego: "basicOperations", // Reutilizamos el tipo de juego de operaciones básicas
                preguntas: [
                    { texto: "Si tienes 5 manzanas y compras 3 más, ¿cuántas tienes en total?", solucion: "8" },
                    { texto: "Un coche viaja a 60 km/h. ¿Qué distancia recorre en 2 horas?", solucion: "120" }
                ]
            },
            formulasGeometricas: {
                nombre: "Fórmulas Geométricas",
                juego: "dragAndDropMatch",
                preguntas: [
                    { draggable: "Área del Círculo", droppable: "π * r²" },
                    { draggable: "Área del Cuadrado", droppable: "lado * lado" },
                    { draggable: "Área del Triángulo", droppable: "(base * altura) / 2" }
                ]
            }
        }
    }
};

// --- VARIABLES GLOBALES ---
const JUEGOS_DISPONIBLES = {
    sentenceScramble: {
        nombre: "Ordenar Frase",
        descripcion: "Arrastra las palabras para formar la oración correcta.",
        icono: "📝"
    },
    matchingPairs: {
        nombre: "Unir Parejas",
        descripcion: "Encuentra la traducción correcta para cada palabra.",
        icono: "🤝"
    },
    findTheError: {
        nombre: "Encontrar el Error",
        descripcion: "Haz clic en la palabra incorrecta de la oración.",
        icono: "🔍"
    },
    quiz: {
        nombre: "Quiz",
        descripcion: "Elige la respuesta correcta entre varias opciones.",
        icono: "❓"
    },
    basicOperations: {
        nombre: "Operaciones Básicas",
        descripcion: "Resuelve sumas, restas, multiplicaciones y divisiones.",
        icono: "➕➖"
    },
    equationSolver: {
        nombre: "Resolver Ecuaciones",
        descripcion: "Encuentra el valor de la incógnita en una ecuación.",
        icono: "🧮"
    },
    numberSequence: {
        nombre: "Secuencias Numéricas",
        descripcion: "Descubre el siguiente número en la secuencia.",
        icono: "🔢"
    },
    dragAndDropMatch: {
        nombre: "Arrastrar y Soltar",
        descripcion: "Arrastra cada elemento a su pareja correcta.",
        icono: "🖐️"
    }
};
let gradoActual = null;
let materiaActual = null;
let temaActual = null;
let preguntaIndex = 0;
let fraseUsuario = [];
let puntuacionActual = 0;
let preguntasIncorrectas = [];
let intentosRestantes = 3;

// --- ELEMENTOS DEL DOM ---
const pantallaBienvenida = document.getElementById('pantalla-bienvenida');
const pantallaPrincipal = document.getElementById('pantalla-principal');
const botonesGrado = document.querySelectorAll('.btn-grado');
const gradoSeleccionadoEl = document.getElementById('grado-seleccionado');
const btnCambiarGrado = document.getElementById('btn-cambiar-grado');
const seleccionMateriaEl = document.getElementById('seleccion-materia');
const seleccionTemaEl = document.getElementById('seleccion-tema');
const seleccionJuegoEl = document.createElement('section'); // Nuevo elemento
seleccionJuegoEl.id = 'seleccion-juego';
seleccionJuegoEl.className = 'contenedor-seccion';
const contenedorJuegoEl = document.getElementById('contenedor-juego');
const pantallaCrearTemaEl = document.getElementById('pantalla-crear-tema');

// --- FUNCIONES PRINCIPALES ---

/**
 * Inicia la aplicación al seleccionar un grado.
 * @param {string} grado - El grado seleccionado (ej: "6").
 */
function iniciarApp(grado) {
    gradoActual = grado;
    gradoSeleccionadoEl.textContent = `${grado}° Grado`;
    pantallaBienvenida.style.display = 'none';
    pantallaPrincipal.style.display = 'block';
    mostrarSeleccionMateria();
}

/** Muestra la pantalla de selección de materia y oculta las demás. */
function mostrarSeleccionMateria() {
    seleccionMateriaEl.style.display = 'block';
    seleccionTemaEl.style.display = 'none';
    seleccionJuegoEl.style.display = 'none';
    contenedorJuegoEl.style.display = 'none';
    pantallaCrearTemaEl.style.display = 'none';
}

/**
 * Muestra los temas disponibles para una materia.
 * @param {string} materia - La clave de la materia (ej: "ingles").
 */
function mostrarSeleccionJuego(materia) {
    materiaActual = materia;
    seleccionJuegoEl.innerHTML = `<h2>Elige un tipo de juego</h2>`;
    
    const gridJuegos = document.createElement('div');
    gridJuegos.className = 'grid-juegos';

    // Obtener los tipos de juego disponibles para la materia actual
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
    contenedorJuegoEl.style.display = 'none';
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
            <button id="btn-volver-a-juegos" class="btn-juego btn-volver">‹ Volver a Juegos</button>
        </div>`;
    
    const gridTemas = document.createElement('div');
    gridTemas.className = 'grid-temas';

    // Botón para crear un nuevo tema
    // Ahora todos los juegos soportan creación
    const tarjetaCrear = document.createElement('div');
    tarjetaCrear.className = 'tarjeta-tema btn-crear-tema';
    tarjetaCrear.innerHTML = `<h3>+ Crear Tema</h3>`;
    tarjetaCrear.addEventListener('click', () => mostrarFormularioCreacion(tipoJuego));
    gridTemas.appendChild(tarjetaCrear);


    for (const claveTema in temas) {
        // Filtrar temas por el tipo de juego seleccionado
        if (temas[claveTema].juego === tipoJuego) {
            const tema = temas[claveTema];
            const tarjetaTema = document.createElement('div');
            tarjetaTema.className = 'tarjeta-tema';
            tarjetaTema.dataset.tema = claveTema;
            tarjetaTema.innerHTML = `<h3>${tema.nombre}</h3>`;
            tarjetaTema.addEventListener('click', () => iniciarJuego(claveTema));
            gridTemas.appendChild(tarjetaTema);
        }
    }

    seleccionTemaEl.appendChild(gridTemas);
    seleccionJuegoEl.style.display = 'none';
    seleccionTemaEl.style.display = 'block';
    pantallaCrearTemaEl.style.display = 'none';
    contenedorJuegoEl.style.display = 'none'; // CORRECCIÓN: Ocultar el juego al volver

    // Añadir listener al nuevo botón de volver
    document.getElementById('btn-volver-a-juegos').addEventListener('click', () => mostrarSeleccionJuego(materiaActual));
}

/**
 * Inicia el juego para un tema específico.
 * @param {string} tema - La clave del tema (ej: "verboToBe").
 */
function iniciarJuego(tema) {
    temaActual = tema;
    preguntaIndex = 0;
    puntuacionActual = 0;
    preguntasIncorrectas = [];
    seleccionTemaEl.style.display = 'none';
    seleccionJuegoEl.style.display = 'none';
    pantallaCrearTemaEl.style.display = 'none';
    contenedorJuegoEl.style.display = 'block';

    const tipoJuego = gameData[materiaActual].temas[tema].juego;
    switch (tipoJuego) {
        case 'sentenceScramble':
            cargarPreguntaSentenceScramble();
            break;
        case 'matchingPairs':
            cargarPreguntaMatchingPairs();
            break;
        case 'findTheError':
            cargarPreguntaFindTheError();
            break;
        case 'quiz':
            cargarPreguntaQuiz();
            break;
        case 'basicOperations':
            cargarPreguntaBasicOperations();
            break;
        case 'equationSolver':
            cargarPreguntaEquationSolver();
            break;
        case 'numberSequence':
            cargarPreguntaNumberSequence();
            break;
        case 'dragAndDropMatch':
            cargarPreguntaDragAndDropMatch();
            break;
    }
}

/** Carga la pregunta actual del juego "Sentence Scramble". (RENOMBRADA) */
function cargarPreguntaSentenceScramble() {
    fraseUsuario = [];
    intentosRestantes = 3; // Reiniciar vidas para cada pregunta
    const pregunta = gameData[materiaActual].temas[temaActual].preguntas[preguntaIndex];
    const palabras = pregunta.solucion.split(' ');
    
    // Barajar las palabras
    palabras.sort(() => Math.random() - 0.5);

    contenedorJuegoEl.innerHTML = `
        <div class="pregunta-header">
            <p id="pregunta-juego">Ordena la frase para decir: "<strong>${pregunta.texto}</strong>"</p>
            <div class="game-info-panel">
                <div class="intentos-restantes" title="Vidas restantes">Vidas: <span id="vidas">❤️❤️❤️</span></div>
                <button id="btn-pista" class="btn-juego btn-pista" title="Obtener una pista">💡</button>
            </div>
        </div>
        <div id="frase-construida"></div>
        <div id="opciones-palabras">
            ${palabras.map(p => `<button class="btn-palabra">${p}</button>`).join('')}
        </div>
        <div class="controles-juego">
            <button id="btn-volver-temas" class="btn-juego btn-volver">Volver</button>
            <button id="btn-verificar" class="btn-juego btn-verificar">Verificar</button>
            <button id="btn-siguiente-pregunta" class="btn-juego btn-siguiente">Siguiente</button>
        </div>
        <div id="feedback-juego"></div>
    `;

    // Renderizar la frase del usuario (inicialmente vacía)
    renderFraseUsuario();

    // Añadir listeners a los nuevos botones
    document.querySelectorAll('.btn-palabra').forEach(btn => {
        btn.addEventListener('click', () => {
            fraseUsuario.push(btn.textContent);
            renderFraseUsuario();
            btn.disabled = true;
            btn.style.opacity = '0.5';
        });
    });

    document.getElementById('btn-volver-temas').addEventListener('click', () => mostrarTemas(materiaActual, 'sentenceScramble'));
    document.getElementById('btn-pista').addEventListener('click', mostrarPista);
    document.getElementById('btn-verificar').addEventListener('click', verificarRespuesta);
    document.getElementById('btn-siguiente-pregunta').addEventListener('click', () => {
        preguntaIndex++;
        if (preguntaIndex < gameData[materiaActual].temas[temaActual].preguntas.length) {
            cargarPreguntaSentenceScramble();
        } else {
            mostrarResultados();
        }
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

    // Re-habilitar el botón correspondiente en las opciones
    const botonesPalabra = document.querySelectorAll('.btn-palabra');
    for (const btn of botonesPalabra) {
        if (btn.textContent === palabraRemovida && btn.disabled) {
            btn.disabled = false;
            btn.style.opacity = '1';
            break; // Salir del bucle una vez que se encuentra y habilita el botón
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
        [array[i], array[j]] = [array[j], array[i]]; // Intercambio de elementos
    }
}


/** Carga la pregunta actual del juego "Matching Pairs". */
function cargarPreguntaMatchingPairs() {
    const ronda = gameData[materiaActual].temas[temaActual].preguntas[preguntaIndex];
    intentosRestantes = 3; // Reiniciar vidas
    
    let palabrasEN = ronda.map(p => p.en);
    let palabrasES = ronda.map(p => p.es);

    // Barajar ambas columnas de forma independiente con el algoritmo Fisher-Yates
    shuffleArray(palabrasEN);
    shuffleArray(palabrasES);

    contenedorJuegoEl.innerHTML = `
        <div class="pregunta-header">
            <p id="pregunta-juego">Une cada palabra con su traducción correcta.</p>
            <div class="game-info-panel">
                <div class="intentos-restantes" title="Vidas restantes">Vidas: <span id="vidas">❤️❤️❤️</span></div>
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
             <button id="btn-volver-temas" class="btn-juego btn-volver">Volver</button>
             <button id="btn-siguiente-pregunta" class="btn-juego btn-siguiente">Siguiente</button>
        </div>
        <div id="feedback-juego"></div>
    `;

    let seleccion = { en: null, es: null };
    let paresCorrectos = 0;

    document.querySelectorAll('.btn-match').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.dataset.lang;
            const palabra = btn.textContent;

            // Si ya hay una selección en esta columna, la deseleccionamos
            if (seleccion[lang]) {
                seleccion[lang].classList.remove('selected');
            }
            
            seleccion[lang] = btn;
            btn.classList.add('selected');

            // Si tenemos una selección en cada columna, verificamos
            if (seleccion.en && seleccion.es) {
                const palabraEN = seleccion.en.textContent;
                const palabraES = seleccion.es.textContent;

                const parCorrecto = ronda.find(p => p.en === palabraEN && p.es === palabraES);

                if (parCorrecto) {
                    seleccion.en.classList.add('correct');
                    seleccion.es.classList.add('correct');
                    seleccion.en.disabled = true;
                    seleccion.es.disabled = true;
                    paresCorrectos++;
                } else {
                    // Capturar las referencias a los botones antes de limpiar 'seleccion'
                    const btnEnIncorrecto = seleccion.en;
                    const btnEsIncorrecto = seleccion.es;

                    btnEnIncorrecto.classList.add('incorrect');
                    btnEsIncorrecto.classList.add('incorrect');
                    // Quitar el estado de error después de un momento
                    intentosRestantes--;
                    document.getElementById('vidas').textContent = '❤️'.repeat(intentosRestantes) + '🖤'.repeat(3 - intentosRestantes);

                    setTimeout(() => {
                        btnEnIncorrecto.classList.remove('incorrect');
                        btnEsIncorrecto.classList.remove('incorrect');
                        // También quitar la clase 'selected' si aún la tienen
                        btnEnIncorrecto.classList.remove('selected');
                        btnEsIncorrecto.classList.remove('selected');

                        if (intentosRestantes === 0) {
                            document.getElementById('feedback-juego').innerHTML = `¡Sin vidas! Pasando a la siguiente ronda.`;
                            document.getElementById('feedback-juego').style.color = '#E57373';
                            document.querySelectorAll('.btn-match').forEach(b => b.disabled = true);
                            document.getElementById('btn-siguiente-pregunta').style.display = 'inline-block';
                            // Marcar esta ronda como incorrecta para el feedback final
                            if (!preguntasIncorrectas.includes(ronda)) {
                                preguntasIncorrectas.push(ronda);
                            }
                        }
                    }, 500);
                }

                // Limpiar selección
                seleccion.en.classList.remove('selected');
                seleccion.es.classList.remove('selected');
                seleccion = { en: null, es: null };

                // Si se encontraron todos los pares
                if (paresCorrectos === ronda.length) {
                    puntuacionActual++;
                    document.getElementById('feedback-juego').textContent = "¡Ronda completada!";
                    document.getElementById('feedback-juego').style.color = '#81C784';
                    document.getElementById('btn-siguiente-pregunta').style.display = 'inline-block';
                    document.querySelectorAll('.btn-match').forEach(b => b.disabled = true);
                }
            }
        });
    });

    document.getElementById('btn-volver-temas').addEventListener('click', () => mostrarTemas(materiaActual, 'matchingPairs'));
    document.getElementById('btn-siguiente-pregunta').addEventListener('click', () => {
        preguntaIndex++;
        if (preguntaIndex < gameData[materiaActual].temas[temaActual].preguntas.length) {
            cargarPreguntaMatchingPairs();
        } else {
            mostrarResultados();
        }
    });
}

/** Carga la pregunta actual del juego "Find the Error". */
function cargarPreguntaFindTheError() {
    intentosRestantes = 3; // Reiniciar vidas
    const pregunta = gameData[materiaActual].temas[temaActual].preguntas[preguntaIndex];
    const palabras = pregunta.texto.split(' ');

    contenedorJuegoEl.innerHTML = `
        <div class="pregunta-header">
            <p id="pregunta-juego">Haz clic en la palabra incorrecta en la siguiente oración:</p>
            <div class="game-info-panel">
                <div class="intentos-restantes" title="Vidas restantes">Vidas: <span id="vidas">❤️❤️❤️</span></div>
            </div>
        </div>
        <div id="frase-con-error">
            ${palabras.map(p => `<button class="btn-palabra-error">${p}</button>`).join('')}
        </div>
        <div class="controles-juego">
             <button id="btn-volver-temas" class="btn-juego btn-volver">Volver</button>
             <button id="btn-siguiente-pregunta" class="btn-juego btn-siguiente">Siguiente</button>
        </div>
        <div id="feedback-juego"></div>
    `;

    document.querySelectorAll('.btn-palabra-error').forEach(btn => {
        btn.addEventListener('click', () => {
            const palabraSeleccionada = btn.textContent.replace(/[.]/g, ''); // Quitar puntos
            const feedbackEl = document.getElementById('feedback-juego');
            const vidasEl = document.getElementById('vidas');

            if (palabraSeleccionada === pregunta.error) {
                feedbackEl.innerHTML = `¡Correcto! El error era "<strong>${pregunta.error}</strong>". Debería ser "<strong>${pregunta.solucion}</strong>".`;
                feedbackEl.style.color = '#81C784';
                puntuacionActual++;
                btn.classList.add('correct');
            } else {
                intentosRestantes--;
                vidasEl.textContent = '❤️'.repeat(intentosRestantes) + '🖤'.repeat(3 - intentosRestantes);
                btn.classList.add('incorrect');
                setTimeout(() => btn.classList.remove('incorrect'), 500);

                if (intentosRestantes > 0) {
                    feedbackEl.innerHTML = `Incorrecto. Te quedan ${intentosRestantes} vidas.`;
                    feedbackEl.style.color = '#FFC107';
                    return; // Permitir más intentos
                } else {
                    feedbackEl.innerHTML = `¡Sin vidas! El error era "<strong>${pregunta.error}</strong>".`;
                    feedbackEl.style.color = '#E57373';
                    preguntasIncorrectas.push(pregunta);
                }
            }
            // Si acierta o se queda sin vidas, bloquea los botones y muestra "Siguiente"
            document.querySelectorAll('.btn-palabra-error').forEach(b => b.disabled = true);
            document.getElementById('btn-siguiente-pregunta').style.display = 'inline-block';
        });
    });

    document.getElementById('btn-volver-temas').addEventListener('click', () => mostrarTemas(materiaActual, 'findTheError'));
    document.getElementById('btn-siguiente-pregunta').addEventListener('click', () => {
        preguntaIndex++;
        if (preguntaIndex < gameData[materiaActual].temas[temaActual].preguntas.length) {
            cargarPreguntaFindTheError();
        } else {
            mostrarResultados();
        }
    });
}

/** Carga la pregunta actual del juego "Quiz". */
function cargarPreguntaQuiz() {
    const pregunta = gameData[materiaActual].temas[temaActual].preguntas[preguntaIndex];
    const opcionesBarajadas = [...pregunta.opciones].sort(() => Math.random() - 0.5);

    contenedorJuegoEl.innerHTML = `
        <div class="pregunta-header">
            <p id="pregunta-juego">${pregunta.texto}</p>
        </div>
        <div class="quiz-opciones">
            ${opcionesBarajadas.map((op, index) => `
                <button class="btn-quiz-opcion">
                    <span class="opcion-letra">${String.fromCharCode(65 + index)}</span>
                    <span class="opcion-texto">${op}</span>
                </button>`).join('')}
        </div>
        <div class="controles-juego">
             <button id="btn-volver-temas" class="btn-juego btn-volver">Volver</button>
             <button id="btn-siguiente-pregunta" class="btn-juego btn-siguiente">Siguiente</button>
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

    document.getElementById('btn-volver-temas').addEventListener('click', () => mostrarTemas(materiaActual, 'quiz'));
    document.getElementById('btn-siguiente-pregunta').addEventListener('click', () => {
        preguntaIndex++;
        if (preguntaIndex < gameData[materiaActual].temas[temaActual].preguntas.length) {
            cargarPreguntaQuiz();
        } else {
            mostrarResultados();
        }
    });
}

/** Carga la pregunta actual del juego "Basic Operations". */
function cargarPreguntaBasicOperations() {
    intentosRestantes = 3; // Reiniciar vidas
    const pregunta = gameData[materiaActual].temas[temaActual].preguntas[preguntaIndex];

    contenedorJuegoEl.innerHTML = `
        <div class="pregunta-header">
            <p id="pregunta-juego">${pregunta.texto}</p>
            <div class="game-info-panel">
                <div class="intentos-restantes" title="Vidas restantes">Vidas: <span id="vidas">❤️❤️❤️</span></div>
            </div>
        </div>
        <div class="math-input-container">
            <input type="text" id="respuesta-math" class="input-texto" placeholder="Tu respuesta aquí">
        </div>
        <div class="controles-juego">
             <button id="btn-volver-temas" class="btn-juego btn-volver">Volver</button>
             <button id="btn-verificar" class="btn-juego btn-verificar">Verificar</button>
             <button id="btn-siguiente-pregunta" class="btn-juego btn-siguiente">Siguiente</button>
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

    document.getElementById('btn-volver-temas').addEventListener('click', () => mostrarTemas(materiaActual, 'basicOperations'));
    document.getElementById('btn-siguiente-pregunta').addEventListener('click', () => {
        preguntaIndex++;
        if (preguntaIndex < gameData[materiaActual].temas[temaActual].preguntas.length) {
            cargarPreguntaBasicOperations();
        } else {
            mostrarResultados();
        }
    });
}

/** Carga la pregunta actual del juego "Equation Solver". */
function cargarPreguntaEquationSolver() {
    intentosRestantes = 3; // Reiniciar vidas
    const pregunta = gameData[materiaActual].temas[temaActual].preguntas[preguntaIndex];

    contenedorJuegoEl.innerHTML = `
        <div class="pregunta-header">
            <p id="pregunta-juego">Resuelve la siguiente ecuación: <strong>${pregunta.texto}</strong></p>
            <div class="game-info-panel">
                <div class="intentos-restantes" title="Vidas restantes">Vidas: <span id="vidas">❤️❤️❤️</span></div>
            </div>
        </div>
        <div class="math-input-container">
            <input type="text" id="respuesta-math" class="input-texto" placeholder="ej: x = 5">
        </div>
        <div class="controles-juego">
             <button id="btn-volver-temas" class="btn-juego btn-volver">Volver</button>
             <button id="btn-verificar" class="btn-juego btn-verificar">Verificar</button>
             <button id="btn-siguiente-pregunta" class="btn-juego btn-siguiente">Siguiente</button>
        </div>
        <div id="feedback-juego"></div>
    `;

    document.getElementById('btn-verificar').addEventListener('click', () => {
        const respuestaUsuario = document.getElementById('respuesta-math').value.trim().toLowerCase().replace(/\s/g, ''); // Normalizar respuesta
        const solucionNormalizada = pregunta.solucion.toLowerCase().replace(/\s/g, ''); // Normalizar solución
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

    document.getElementById('btn-volver-temas').addEventListener('click', () => mostrarTemas(materiaActual, 'equationSolver'));
    document.getElementById('btn-siguiente-pregunta').addEventListener('click', () => {
        preguntaIndex++;
        if (preguntaIndex < gameData[materiaActual].temas[temaActual].preguntas.length) {
            cargarPreguntaEquationSolver();
        } else {
            mostrarResultados();
        }
    });
}

/** Carga la pregunta actual del juego "Number Sequence". */
function cargarPreguntaNumberSequence() {
    intentosRestantes = 3; // Reiniciar vidas
    const pregunta = gameData[materiaActual].temas[temaActual].preguntas[preguntaIndex];

    contenedorJuegoEl.innerHTML = `
        <div class="pregunta-header">
            <p id="pregunta-juego">¿Cuál es el siguiente número en la secuencia: <strong>${pregunta.texto}</strong></p>
            <div class="game-info-panel">
                <div class="intentos-restantes" title="Vidas restantes">Vidas: <span id="vidas">❤️❤️❤️</span></div>
            </div>
        </div>
        <div class="math-input-container">
            <input type="number" id="respuesta-math" class="input-texto" placeholder="Tu respuesta aquí">
        </div>
        <div class="controles-juego">
             <button id="btn-volver-temas" class="btn-juego btn-volver">Volver</button>
             <button id="btn-verificar" class="btn-juego btn-verificar">Verificar</button>
             <button id="btn-siguiente-pregunta" class="btn-juego btn-siguiente">Siguiente</button>
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

    document.getElementById('btn-volver-temas').addEventListener('click', () => mostrarTemas(materiaActual, 'numberSequence'));
    document.getElementById('btn-siguiente-pregunta').addEventListener('click', () => {
        preguntaIndex++;
        if (preguntaIndex < gameData[materiaActual].temas[temaActual].preguntas.length) {
            cargarPreguntaNumberSequence();
        } else {
            mostrarResultados();
        }
    });
}

/** Carga la pregunta actual del juego "Drag and Drop Match". */
function cargarPreguntaDragAndDropMatch() {
    const ronda = gameData[materiaActual].temas[temaActual].preguntas; // No hay paginación aquí
    let draggables = ronda.map(p => p.draggable);
    let droppables = ronda.map(p => p.droppable);

    shuffleArray(draggables);
    shuffleArray(droppables);

    contenedorJuegoEl.innerHTML = `
        <div class="pregunta-header">
            <p id="pregunta-juego">Arrastra cada elemento de la izquierda a su pareja en la derecha.</p>
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
             <button id="btn-volver-temas" class="btn-juego btn-volver">Volver</button>
             <button id="btn-siguiente-pregunta" class="btn-juego btn-siguiente">Finalizar</button>
        </div>
        <div id="feedback-juego"></div>
    `;

    let draggedItem = null;
    let correctMatches = 0;

    document.querySelectorAll('.drag-item').forEach(item => {
        item.addEventListener('dragstart', (e) => {
            draggedItem = e.target;
            setTimeout(() => e.target.classList.add('dragging'), 0);
        });

        item.addEventListener('dragend', () => {
            draggedItem.classList.remove('dragging');
            draggedItem = null;
        });
    });

    document.querySelectorAll('.drop-zone').forEach(zone => {
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

            const draggableText = draggedItem.textContent;
            const droppableText = zone.dataset.text;

            const parCorrecto = ronda.find(p => p.draggable === draggableText && p.droppable === droppableText);

            if (parCorrecto) {
                zone.innerHTML = ''; // Limpiar la zona de soltar
                zone.appendChild(draggedItem); // Mover el elemento arrastrado
                zone.classList.add('correct');
                draggedItem.classList.add('matched');
                draggedItem.draggable = false;
                correctMatches++;

                if (correctMatches === ronda.length) {
                    puntuacionActual = ronda.length; // Puntuación máxima
                    document.getElementById('feedback-juego').textContent = "¡Completado! ¡Excelente!";
                    document.getElementById('feedback-juego').style.color = '#81C784';
                    document.getElementById('btn-siguiente-pregunta').style.display = 'inline-block';
                }
            } else {
                draggedItem.classList.add('incorrect-drag');
                setTimeout(() => draggedItem.classList.remove('incorrect-drag'), 500);
            }
        });
    });

    document.getElementById('btn-volver-temas').addEventListener('click', () => mostrarTemas(materiaActual, 'dragAndDropMatch'));
    document.getElementById('btn-siguiente-pregunta').addEventListener('click', () => {
        // En este juego, "siguiente" significa terminar y ver resultados
        // Si no se completó, se considera 0 puntos.
        if (correctMatches !== ronda.length) {
            puntuacionActual = correctMatches;
        }
        mostrarResultados();
    });
}

/** Muestra la pantalla de resultados al final del juego. */
function mostrarResultados() {
    const totalPreguntas = gameData[materiaActual].temas[temaActual].preguntas.length;
    let mensajeFinal = "";
    if (puntuacionActual === totalPreguntas) {
        mensajeFinal = "¡Excelente trabajo! Dominas este tema. ✨";
    } else if (puntuacionActual >= totalPreguntas / 2) {
        mensajeFinal = "¡Buen trabajo! Sigue practicando para perfeccionar. 👍";
    } else {
        mensajeFinal = "¡No te rindas! La práctica hace al maestro. Sigue intentándolo. 💪";
    }

    let feedbackHtml = preguntasIncorrectas.length > 0 ? '<h3>Sugerencias para mejorar:</h3>' : '';
    preguntasIncorrectas.forEach(item => {
        let textoPregunta = item.texto;
        let textoSolucion = item.solucion;
        // Adaptar el feedback para cada tipo de juego
        if (item.error) { // Find the error
            textoPregunta = `En la frase "${item.texto}", el error era "${item.error}".`;
            textoSolucion = `La palabra correcta es "${item.solucion}".`;
        } else if (item.opciones) { // Quiz
            textoPregunta = `Para la pregunta "${item.texto}"...`;
            textoSolucion = `La respuesta correcta es "${item.solucion}".`;
        } else if (Array.isArray(item)) { // Matching Pairs
            textoPregunta = `En la ronda de unir parejas...`;
            textoSolucion = `Repasa el vocabulario de esa sección.`;
        } else if (item.draggable && item.droppable) { // Drag and Drop
            textoPregunta = `En el juego de arrastrar y soltar...`;
            textoSolucion = `Repasa las asociaciones de ese tema.`;
        } else if (item.texto && item.solucion) { // Basic Operations, Equation Solver, Number Sequence
            textoPregunta = `Para la pregunta "${item.texto}"...`;
            textoSolucion = `La respuesta correcta es "${item.solucion}".`;
        }
        feedbackHtml += `<div class="feedback-item"><p>❌ ${textoPregunta}</p><p>✔️ ${textoSolucion}</p></div>`;
    });

    contenedorJuegoEl.innerHTML = `
        <div class="tarjeta-resultados">
            <h2>Resultados del Tema</h2>
            <p class="puntuacion">Tu puntuacion: <strong>${puntuacionActual} de ${totalPreguntas} correctas</strong></p>
            <p class="mensaje-final">${mensajeFinal}</p>
            <div class="feedback-incorrectas">${feedbackHtml}</div>
            <button id="btn-volver" class="btn-juego btn-siguiente">Elegir otro Tema</button>
        </div>`;
    document.getElementById('btn-volver').addEventListener('click', () => {
        const tipoJuego = gameData[materiaActual].temas[temaActual].juego;
        mostrarTemas(materiaActual, tipoJuego);
    });
}

/** Muestra una pista (la primera palabra de la solución). */
function mostrarPista() {
    const preguntaActual = gameData[materiaActual].temas[temaActual].preguntas[preguntaIndex];
    let textoPista = '';

    // Si la pregunta tiene una pista personalizada, la usamos.
    if (preguntaActual.pista) {
        textoPista = preguntaActual.pista;
    } else {
        // Si no, usamos la primera palabra de la solución como pista por defecto.
        const primeraPalabra = preguntaActual.solucion.split(' ')[0];
        textoPista = `La frase empieza con "${primeraPalabra}"`;
    }

    const feedbackEl = document.getElementById('feedback-juego');
    
    feedbackEl.textContent = `Pista: ${textoPista}`;
    feedbackEl.style.color = '#29B6F6'; // Azul claro para la pista
    document.getElementById('btn-pista').disabled = true; // Deshabilitar después de usar
}

/** Verifica si la frase construida por el usuario es correcta. */
function verificarRespuesta() {
    const solucion = gameData[materiaActual].temas[temaActual].preguntas[preguntaIndex].solucion;
    const respuestaUsuario = fraseUsuario.join(' ').toLowerCase().replace(/\.$/, '');
    const feedbackEl = document.getElementById('feedback-juego');
    const vidasEl = document.getElementById('vidas');

    if (respuestaUsuario === solucion) {
        feedbackEl.textContent = "¡Correcto! 🎉";
        feedbackEl.style.color = '#81C784'; // Verde claro
        puntuacionActual++;
        document.getElementById('btn-siguiente-pregunta').style.display = 'inline-block';
        document.getElementById('btn-verificar').style.display = 'none';
        document.getElementById('btn-pista').disabled = true;
    } else {
        intentosRestantes--;
        vidasEl.textContent = '❤️'.repeat(intentosRestantes) + '🖤'.repeat(3 - intentosRestantes);

        if (intentosRestantes > 0) {
            feedbackEl.textContent = `Incorrecto. Te quedan ${intentosRestantes} vidas. 🤔`;
            feedbackEl.style.color = '#FFC107'; // Amarillo para advertencia
        } else {
            feedbackEl.innerHTML = `¡Sin vidas! La respuesta era: "<strong>${solucion}</strong>"`;
            feedbackEl.style.color = '#E57373'; // Rojo para fallo
            preguntasIncorrectas.push(gameData[materiaActual].temas[temaActual].preguntas[preguntaIndex]);
            
            document.getElementById('btn-verificar').style.display = 'none';
            document.getElementById('btn-siguiente-pregunta').style.display = 'inline-block';
            document.getElementById('btn-pista').disabled = true;
            // Deshabilitar la interacción con las palabras en juegos que lo necesiten
            document.querySelectorAll('.palabra-en-frase').forEach(p => p.style.pointerEvents = 'none');
            document.querySelectorAll('.btn-palabra').forEach(p => p.disabled = true);
        }
    }
}

// --- FUNCIONES PARA CREAR TEMAS ---

/** Muestra el formulario para crear un nuevo tema. */
function mostrarFormularioCreacion(tipoJuego) {
    seleccionTemaEl.style.display = 'none';
    pantallaCrearTemaEl.style.display = 'block';
    document.getElementById('nombre-tema-input').value = '';
    const contenedorPreguntas = document.getElementById('contenedor-preguntas-crear');
    contenedorPreguntas.innerHTML = '';
    
    // Guardamos el tipo de juego para usarlo al guardar
    pantallaCrearTemaEl.dataset.tipoJuego = tipoJuego;

    // Añadir el primer campo de pregunta por defecto, adaptado al tipo de juego
    agregarCampoPregunta(tipoJuego); 

    document.getElementById('btn-agregar-pregunta').onclick = () => agregarCampoPregunta(tipoJuego);
    document.getElementById('btn-guardar-tema').onclick = () => guardarTemaPersonalizado(tipoJuego);
    document.getElementById('btn-cancelar-creacion').onclick = () => {
        mostrarTemas(materiaActual, tipoJuego);
    };
}

/** Actualiza los botones de la pantalla de creación con iconos. */
function actualizarBotonesCreacion() {
    document.getElementById('btn-agregar-pregunta').innerHTML = '➕ Añadir Pregunta';
    document.getElementById('btn-guardar-tema').innerHTML = '💾 Guardar Tema';
}

/** Agrega un nuevo par de inputs para una pregunta en el formulario de creación. */
function agregarCampoPregunta(tipoJuego) {
    const contenedorPreguntas = document.getElementById('contenedor-preguntas-crear');
    const numPregunta = contenedorPreguntas.children.length + 1;
    const maxPreguntas = (tipoJuego === 'matchingPairs' || tipoJuego === 'quiz' || tipoJuego === 'dragAndDropMatch') ? 4 : 10;

    if (numPregunta > maxPreguntas) {
        alert(`Puedes agregar un máximo de ${maxPreguntas} ${tipoJuego === 'matchingPairs' ? 'pares' : 'preguntas'} por tema.`);
        return;
    }

    const divPregunta = document.createElement('div');
    divPregunta.className = 'pregunta-crear-item';

    if (tipoJuego === 'sentenceScramble') {
        divPregunta.innerHTML = `
            <span class="numero-pregunta">Pregunta ${numPregunta}</span>
            <div class="form-grupo">
                <label>Pregunta (Frase en Español)</label>
                <input type="text" class="input-texto" placeholder="ej: el gato está durmiendo">
            </div>
            <div class="form-grupo">
                <label>Frase en Inglés (Solución)</label>
                <input type="text" class="input-solucion" placeholder="ej: the cat is sleeping">
            </div>
            <div class="form-grupo">
                <label>Pista (Opcional)</label>
                <input type="text" class="input-pista" placeholder="ej: la primera palabra es 'the'">
            </div>
        `;
    } else if (tipoJuego === 'matchingPairs') {
        divPregunta.innerHTML = `
            <span class="numero-pregunta">Par ${numPregunta}</span>
            <div class="form-grupo-pareja">
                <div class="form-grupo">
                    <label>Palabra en Inglés</label>
                    <input type="text" class="input-texto" placeholder="ej: house">
                </div>
                <div class="form-grupo">
                    <label>Palabra en Español</label>
                    <input type="text" class="input-solucion" placeholder="ej: casa">
                </div>
            </div>
        `;
    } else if (tipoJuego === 'dragAndDropMatch') {
        divPregunta.innerHTML = `
            <span class="numero-pregunta">Par ${numPregunta}</span>
            <div class="form-grupo-pareja">
                <div class="form-grupo">
                    <label>Elemento Arrastrable</label>
                    <input type="text" class="input-texto" placeholder="ej: Área del Círculo">
                </div>
                <div class="form-grupo">
                    <label>Zona para Soltar (Pareja)</label>
                    <input type="text" class="input-solucion" placeholder="ej: π * r²">
                </div>
            </div>
        `;
    } else if (tipoJuego === 'basicOperations' || tipoJuego === 'equationSolver' || tipoJuego === 'numberSequence') {
        divPregunta.innerHTML = `
            <span class="numero-pregunta">Pregunta ${numPregunta}</span>
            <div class="form-grupo">
                <label>${tipoJuego === 'basicOperations' ? 'Operación/Pregunta' : (tipoJuego === 'equationSolver' ? 'Ecuación' : 'Secuencia')}</label>
                <input type="text" class="input-texto" placeholder="${tipoJuego === 'basicOperations' ? 'ej: 5 + 3' : (tipoJuego === 'equationSolver' ? 'ej: x + 5 = 10' : 'ej: 1, 3, 5, ?')}">
            </div>
            <div class="form-grupo">
                <label>Solución</label>
                <input type="text" class="input-solucion" placeholder="${tipoJuego === 'basicOperations' ? 'ej: 8' : (tipoJuego === 'equationSolver' ? 'ej: x = 5' : 'ej: 7')}">
            </div>
        `;
    } else if (tipoJuego === 'findTheError') {
        divPregunta.innerHTML = `
            <span class="numero-pregunta">Pregunta ${numPregunta}</span>
            <div class="form-grupo">
                <label>Oración Completa (con el error)</label>
                <input type="text" class="input-texto" placeholder="ej: She like pizza.">
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
    } else if (tipoJuego === 'quiz') {
        divPregunta.innerHTML = `
            <span class="numero-pregunta">Pregunta ${numPregunta}</span>
            <div class="form-grupo">
                <label>Pregunta del Quiz</label>
                <input type="text" class="input-texto" placeholder="ej: What is the capital of England?">
            </div>
            <div class="form-grupo">
                <label>Respuesta Correcta</label>
                <input type="text" class="input-solucion" placeholder="ej: London">
            </div>
            <div class="form-grupo">
                <label>Otras 3 Opciones (separadas por comas)</label>
                <input type="text" class="input-opciones-quiz" placeholder="ej: Paris, Rome, Madrid">
            </div>
        `;
    }

    contenedorPreguntas.appendChild(divPregunta);
    actualizarBotonesCreacion();
}

/** Guarda el tema personalizado creado por el usuario. */
function guardarTemaPersonalizado(tipoJuego) {
    const nombreTema = document.getElementById('nombre-tema-input').value.trim();
    if (!nombreTema) {
        alert("Por favor, dale un nombre a tu tema.");
        return;
    }

    const camposPreguntas = document.querySelectorAll('.pregunta-crear-item');
    let nuevasPreguntas = [];
    let hayCamposVacios = false;

    for (const campo of camposPreguntas) {
        const inputTexto = campo.querySelector('.input-texto');
        const inputSolucion = campo.querySelector('.input-solucion');
        const inputErrorPalabra = campo.querySelector('.input-error-palabra'); // Para findTheError
        const inputOpcionesQuiz = campo.querySelector('.input-opciones-quiz'); // Para quiz
        const inputPista = campo.querySelector('.input-pista'); // Será null si no existe
        const texto = inputTexto.value.trim();
        const solucion = inputSolucion.value.trim();
        const pista = inputPista ? inputPista.value.trim() : ''; // Acceder a .value solo si inputPista existe

        // Validación visual
        inputTexto.classList.remove('input-error');
        inputSolucion.classList.remove('input-error');

        if (texto && !solucion) {
            inputSolucion.classList.add('input-error');
            hayCamposVacios = true;
        }
        if (!texto && solucion) {
            inputTexto.classList.add('input-error');
            hayCamposVacios = true;
        }

        if (texto && solucion) {
            if (tipoJuego === 'sentenceScramble') {
                const nuevaPregunta = { texto, solucion };
                if (pista) {
                    nuevaPregunta.pista = pista;
                }
                nuevasPreguntas.push(nuevaPregunta);
            } else if (tipoJuego === 'matchingPairs') {
                nuevasPreguntas.push({ en: texto, es: solucion });
            } else if (tipoJuego === 'findTheError') {
                const error = inputErrorPalabra.value.trim();
                if (error) {
                    nuevasPreguntas.push({ texto, error, solucion });
                }
            } else if (tipoJuego === 'quiz') {
                const otrasOpciones = inputOpcionesQuiz.value.split(',').map(s => s.trim()).filter(Boolean);
                if (otrasOpciones.length === 3) {
                    const opciones = [solucion, ...otrasOpciones];
                    shuffleArray(opciones); // Barajamos las opciones
                    nuevasPreguntas.push({ texto, opciones, solucion });
                }
            }
        }
    }

    // Para el juego de parejas, las preguntas van en un array anidado (una sola ronda)
    // Drag and drop no necesita esto, ya que es una sola lista de pares.
    if (tipoJuego === 'matchingPairs' && nuevasPreguntas.length > 0) { 
        nuevasPreguntas = [nuevasPreguntas];
    }

    if (hayCamposVacios || nuevasPreguntas.length === 0) {
        alert("Por favor, completa todos los campos de las preguntas que agregaste.");
        return;
    }

    // Crear una clave única para el tema (ej: custom_mi_tema_12345)
    const claveTema = `custom_${nombreTema.toLowerCase().replace(/[^a-z0-9]/g, '_')}_${Date.now()}`;

    // Añadir el nuevo tema al objeto gameData
    gameData[materiaActual].temas[claveTema] = {
        nombre: nombreTema,
        juego: tipoJuego,
        preguntas: nuevasPreguntas
    };

    alert(`¡Tema "${nombreTema}" guardado con éxito!`);
    // Volver a la lista de temas del tipo de juego correspondiente
    mostrarTemas(materiaActual, gameData[materiaActual].temas[claveTema].juego);
}

// --- EVENT LISTENERS ---
document.addEventListener('DOMContentLoaded', () => {
    // Event listeners para los botones de grado
    botonesGrado.forEach(boton => {
        boton.addEventListener('click', () => iniciarApp(boton.dataset.grado));
    });

    // Event listener para el botón de cambiar grado en el header
    btnCambiarGrado.addEventListener('click', () => {
        location.reload(); // La forma más simple de reiniciar
    });

    // Event listeners para las tarjetas de materia
    document.querySelectorAll('.tarjeta-materia').forEach(tarjeta => {
        if (!tarjeta.classList.contains('disabled')) {
            tarjeta.addEventListener('click', () => mostrarSeleccionJuego(tarjeta.dataset.materia));
        }
    });
});