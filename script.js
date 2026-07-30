// --- DATOS DE LOS JUEGOS ---
// Estructura escalable para añadir más materias, temas y preguntas.
let gameData = {
    ingles: {
        nombre: "Inglés",
        temas: {
            presenteSimpleScramble: {
                nombre: "Ordenar Frases (Presente Simple)",
                juego: "sentenceScramble",
                preguntas: [
                    { texto: "i work in an office", solucion: "i work in an office" },
                    { texto: "you speak english very well", solucion: "you speak english very well" },
                    { texto: "he plays video games", solucion: "he plays video games" },
                    { texto: "she likes pop music", solucion: "she likes pop music" },
                    { texto: "it works perfectly", solucion: "it works perfectly" },
                    { texto: "we live in a big house", solucion: "we live in a big house" },
                    { texto: "they eat pizza on fridays", solucion: "they eat pizza on fridays" },
                    { texto: "he does not watch television", solucion: "he does not watch television" },
                    { texto: "do you need help", solucion: "do you need help" }
                ]
            },
            presenteSimplePairs: {
                nombre: "Unir Verbos (Presente Simple)",
                juego: "matchingPairs",
                preguntas: [
                    [
                        { en: "I/You/We/They work", es: "Trabajo/Trabajas/Trabajamos/Trabajan" },
                        { en: "He/She/It works", es: "Él/Ella/Eso trabaja" },
                        { en: "I/You/We/They play", es: "Juego/Juegas/Jugamos/Juegan" },
                        { en: "He/She/It plays", es: "Él/Ella/Eso juega" }
                    ],
                    [
                        { en: "I/You/We/They study", es: "Estudio/Estudias/Estudiamos/Estudian" },
                        { en: "He/She/It studies", es: "Él/Ella/Eso estudia" },
                        { en: "I/You/We/They go", es: "Voy/Vas/Vamos/Van" },
                        { en: "He/She/It goes", es: "Él/Ella/Eso va" }
                    ],
                    [
                        { en: "I/You/We/They have", es: "Tengo/Tienes/Tenemos/Tienen" },
                        { en: "He/She/It has", es: "Él/Ella/Eso tiene" },
                        { en: "I/You/We/They do", es: "Hago/Haces/Hacemos/Hacen" },
                        { en: "He/She/It does", es: "Él/Ella/Eso hace" }
                    ]
                ]
            },
            presenteSimpleError: {
                nombre: "Encontrar Errores (Presente Simple)",
                juego: "findTheError",
                preguntas: [
                    { texto: "He play tennis every weekend.", error: "play", solucion: "plays" },
                    { texto: "She don't speak French.", error: "don't", solucion: "doesn't" },
                    { texto: "They lives in Canada.", error: "lives", solucion: "live" },
                    { texto: "He speaks English good.", error: "good", solucion: "well" },
                    { texto: "I listen at music in the car.", error: "at", solucion: "to" },
                    { texto: "We has a dog.", error: "has", solucion: "have" },
                    { texto: "The sun rise in the east.", error: "rise", solucion: "rises" },
                    { texto: "You works too hard.", error: "works", solucion: "work" },
                    { texto: "It depend on the situation.", error: "depend", solucion: "depends" },
                    { texto: "She watch movies on Fridays.", error: "watch", solucion: "watches" }
                ]
            },
            presenteSimpleQuiz: {
                nombre: "Quiz (Presente Simple)",
                juego: "quiz",
                preguntas: [
                    {
                        texto: "They ___ in a big city.",
                        opciones: ["live", "lives", "is living", "are live"],
                        solucion: "live"
                    },
                    {
                        texto: "She ___ not like coffee.",
                        opciones: ["do", "is", "does", "are"],
                        solucion: "does"
                    },
                    {
                        texto: "___ you speak Spanish?",
                        opciones: ["Do", "Does", "Are", "Is"],
                        solucion: "Do"
                    },
                    {
                        texto: "It ___ every day here.",
                        opciones: ["rain", "rains", "is raining", "are raining"],
                        solucion: "rains"
                    },
                    {
                        texto: "I ___ to music in the evening.",
                        opciones: ["listens", "listen", "am listening", "is listen"],
                        solucion: "listen"
                    },
                    {
                        texto: "He ___ a brother and a sister.",
                        opciones: ["have", "has", "is have", "does"],
                        solucion: "has"
                    },
                    {
                        texto: "We ___ to the gym on weekends.",
                        opciones: ["goes", "go", "are going", "is go"],
                        solucion: "go"
                    },
                    {
                        texto: "The train ___ at 8 AM.",
                        opciones: ["leave", "leaves", "is leaving", "are leave"],
                        solucion: "leaves"
                    },
                    {
                        texto: "You ___ very tired.",
                        opciones: ["look", "looks", "are look", "is looking"],
                        solucion: "look"
                    },
                    {
                        texto: "My dog ___ with a ball.",
                        opciones: ["play", "plays", "is play", "are playing"],
                        solucion: "plays"
                    }
                ]
            },
            presenteSimpleDrag: {
                nombre: "Arrastrar Sujeto/Verbo (Presente Simple)",
                juego: "dragAndDropMatch",
                preguntas: [
                    { draggable: "I / You / We / They", droppable: "work" },
                    { draggable: "He / She / It", droppable: "works" },
                    { draggable: "I / You / We / They", droppable: "don't work" },
                    { draggable: "He / She / It", droppable: "doesn't work" },
                    { draggable: "Do", droppable: "I / you / we / they work?" },
                    { draggable: "Does", droppable: "he / she / it work?" }
                ]
            }
        },
    },
    matematicas: {
        nombre: "Matemáticas",
        temas: {
            aritmeticaBasica: {
                nombre: "Aritmética Básica",
                juego: "basicOperations",
                preguntas: [
                    { texto: "Calcula: 5 + 2 * 3", solucion: "11" },
                    { texto: "Calcula: (10 - 4) * 2", solucion: "12" },
                    { texto: "Calcula: 16 / 4 + 8", solucion: "12" },
                    { texto: "Calcula: 20 - 3 * (2 + 1)", solucion: "11" },
                    { texto: "Calcula: 5 * 5 - 10", solucion: "15" },
                    { texto: "Calcula: 4 + 12 / 2", solucion: "10" },
                    { texto: "Calcula: (3 + 7) * (9 - 4)", solucion: "50" }
                ]
            },
            aritmeticaQuiz: {
                nombre: "Quiz de Aritmética",
                juego: "quiz",
                preguntas: [
                    { texto: "¿Cuál es el resultado de 10 + 5 * 2?", opciones: ["30", "20", "25"], solucion: "20" },
                    { texto: "¿Cuál es el resultado de 3 * (4 + 6)?", opciones: ["18", "22", "30"], solucion: "30" },
                    { texto: "¿Cuál es el resultado de 18 / 2 - 1?", opciones: ["9", "8", "17"], solucion: "8" },
                    { texto: "¿Cuál es el resultado de 2 + 2 + 2 * 0?", opciones: ["0", "6", "4"], solucion: "4" },
                    { texto: "¿Cuál es el resultado de 50 - 25 / 5?", opciones: ["5", "45", "20"], solucion: "45" },
                    { texto: "¿Cuál es el resultado de (8 - 2) * 3?", opciones: ["22", "18", "2"], solucion: "18" },
                    { texto: "¿Cuál es el resultado de 7 + 1 - 4 * 2?", opciones: ["8", "10", "0"], solucion: "0" }
                ]
            },
            ecuacionesLineales: {
                nombre: "Ecuaciones Lineales",
                juego: "equationSolver",
                preguntas: [
                    { texto: "x + 5 = 12", solucion: "7" },
                    { texto: "y - 3 = 10", solucion: "13" },
                    { texto: "2 * z = 14", solucion: "7" },
                    { texto: "a / 3 = 4", solucion: "12" },
                    { texto: "10 - b = 6", solucion: "4" },
                    { texto: "3c + 1 = 10", solucion: "3" },
                    { texto: "20 = 4d", solucion: "5" }
                ]
            },
            ecuacionesErrores: {
                nombre: "Errores en Ecuaciones",
                juego: "findTheError",
                preguntas: [
                    { texto: "Si 2x + 3 = 11, la ecuación debería ser 2x + 4 = 11.", error: "4", solucion: "3" },
                    { texto: "Si 5y - 2 = 13, el operador correcto es 5y * 2 = 13.", error: "*", solucion: "-" },
                    { texto: "Si z / 4 = 5, el resultado correcto es z = 10.", error: "10", solucion: "20" },
                    { texto: "Si 7 + a = 15, el operador correcto es 7 - a = 15.", error: "-", solucion: "+" },
                    { texto: "Si 3(b + 2) = 18, el número dentro del paréntesis es 3(b + 3) = 18.", error: "3", solucion: "2" },
                    { texto: "Si 4c = 20, el coeficiente de c es 2c = 20.", error: "2c", solucion: "4c" },
                    { texto: "Si d + 8 = 12, el valor de d es 5.", error: "5", solucion: "4" }
                ]
            },
            secuenciasLogicas: {
                nombre: "Secuencias Numéricas",
                juego: "numberSequence",
                preguntas: [
                    { texto: "2, 4, 6, 8, ?", solucion: "10" },
                    { texto: "5, 10, 15, 20, ?", solucion: "25" },
                    { texto: "1, 4, 9, 16, ?", solucion: "25" },
                    { texto: "9, 7, 5, 3, ?", solucion: "1" },
                    { texto: "1, 2, 4, 8, ?", solucion: "16" },
                    { texto: "1, 1, 2, 3, 5, ?", solucion: "8" },
                    { texto: "100, 90, 80, 70, ?", solucion: "60" }
                ]
            },
            geometriaDrag: {
                nombre: "Fórmulas Geométricas",
                juego: "dragAndDropMatch",
                preguntas: [
                    { draggable: "Área del Círculo", droppable: "π * r²" },
                    { draggable: "Área del Cuadrado", droppable: "lado * lado" },
                    { draggable: "Área del Triángulo", droppable: "(base * altura) / 2" },
                    { draggable: "Perímetro del Cuadrado", droppable: "4 * lado" },
                    { draggable: "Volumen del Cubo", droppable: "lado³" },
                    { draggable: "Circunferencia del Círculo", droppable: "2 * π * r" },
                    { draggable: "Área del Rectángulo", droppable: "base * altura" }
                ]
            },
            fraccionesPairs: {
                nombre: "Unir Fracciones y Decimales",
                juego: "matchingPairs",
                preguntas: [
                    [
                        { en: "1/2", es: "0.5" },
                        { en: "1/4", es: "0.25" },
                        { en: "3/4", es: "0.75" },
                        { en: "1/5", es: "0.2" },
                        { en: "2/5", es: "0.4" },
                        { en: "1/10", es: "0.1" },
                        { en: "1/1", es: "1.0" }
                    ]
                ]
            },
            ordenarDecimales: {
                nombre: "Ordenar Decimales",
                juego: "numberOrder",
                preguntas: [
                    { texto: "Ordena de menor a mayor", numeros: [5.6798, 5.7809, 5.679, 5.78] },
                    { texto: "Ordena de menor a mayor", numeros: [0.009, 0.09, 0.0009, 0.9] },
                    { texto: "Ordena de menor a mayor", numeros: [-2.505, -2.5, -2.055, -2.05] },
                    { texto: "Ordena de menor a mayor", numeros: [100.1, 100.01, 100.11, 100.001] },
                    { texto: "Ordena de menor a mayor", numeros: [7.1234, 7.124, 7.12, 7.1] },
                    { texto: "Ordena de menor a mayor", numeros: [9.876, 9.87, 9.8, 9.9] },
                    { texto: "Ordena de menor a mayor", numeros: [-0.987, -0.897, -0.99, -0.89] }
                ]
            }
        }
    },
    quimica: {
        nombre: "Química",
        temas: {
            gasesPropiedades: {
                nombre: "Propiedades de los Gases",
                juego: "quiz",
                preguntas: [
                    { texto: "¿Qué ley relaciona presión y volumen a temperatura constante?", opciones: ["Ley de Charles", "Ley de Boyle", "Ley de Avogadro"], solucion: "Ley de Boyle" },
                    { texto: "¿Qué unidad se usa comúnmente para medir la presión de un gas?", opciones: ["Litro", "Gramo", "Pascal", "Mol"], solucion: "Pascal" },
                    { texto: "¿Cómo se llama el proceso de paso de gas a líquido?", opciones: ["Evaporación", "Sublimación", "Condensación", "Fusión"], solucion: "Condensación" },
                    { texto: "¿Qué sucede con el volumen de un gas al aumentar la temperatura a presión constante?", opciones: ["Disminuye", "Aumenta", "Se mantiene igual", "Varía aleatoriamente"], solucion: "Aumenta" },
                    { texto: "¿Cuál es la fórmula del gas ideal?", opciones: ["P/V=nRT", "PV=nRT", "P+V=nRT", "P-V=nRT"], solucion: "PV=nRT" },
                    { texto: "¿Qué gas es el más abundante en la atmósfera terrestre?", opciones: ["Oxígeno", "Dióxido de Carbono", "Argón", "Nitrógeno"], solucion: "Nitrógeno" },
                    { texto: "¿Qué propiedad de los gases permite que se mezclen completamente?", opciones: ["Compresibilidad", "Expansibilidad", "Difusión", "Viscosidad"], solucion: "Difusión" }
                ]
            },
            atomosPartes: {
                nombre: "Partes del Átomo",
                juego: "matchingPairs",
                preguntas: [
                    [
                        { en: "Protón", es: "Carga positiva" },
                        { en: "Electrón", es: "Carga negativa" },
                        { en: "Neutrón", es: "Sin carga" },
                        { en: "Núcleo", es: "Contiene protones y neutrones" },
                        { en: "Orbital", es: "Región de probabilidad de encontrar un electrón" },
                        { en: "Número Atómico", es: "Número de protones" },
                        { en: "Número Másico", es: "Protones + Neutrones" }
                    ]
                ]
            },
            tablaPeriodicaElementos: {
                nombre: "Elementos y Símbolos",
                juego: "dragAndDropMatch",
                preguntas: [
                    { draggable: "Hidrógeno", droppable: "H" },
                    { draggable: "Oxígeno", droppable: "O" },
                    { draggable: "Carbono", droppable: "C" },
                    { draggable: "Hierro", droppable: "Fe" },
                    { draggable: "Sodio", droppable: "Na" },
                    { draggable: "Cloro", droppable: "Cl" },
                    { draggable: "Oro", droppable: "Au" }
                ]
            },
            masaVolumenDensidad: {
                nombre: "Cálculos de Densidad",
                juego: "basicOperations",
                preguntas: [
                    { texto: "Calcula la densidad (g/cm³) de un objeto con 100g y 50cm³.", solucion: "2" },
                    { texto: "Un líquido tiene una masa de 250g y una densidad de 1.25 g/mL. ¿Cuál es su volumen (mL)?", solucion: "200" },
                    { texto: "Un cubo de 2cm de lado tiene una masa de 16g. ¿Cuál es su densidad (g/cm³)?", solucion: "2" },
                    { texto: "Si la densidad del agua es 1 g/mL, ¿qué masa (g) tienen 300 mL de agua?", solucion: "300" },
                    { texto: "Un objeto de 50g tiene una densidad de 0.5 g/cm³. ¿Cuál es su volumen (cm³)?", solucion: "100" },
                    { texto: "Calcula la masa (g) de 10 mL de mercurio si su densidad es 13.6 g/mL.", solucion: "136" },
                    { texto: "Un gas ocupa 5 L y tiene una masa de 10g. ¿Cuál es su densidad (g/L)?", solucion: "2" }
                ]
            },
            formulasErrores: {
                nombre: "Errores en Fórmulas",
                juego: "findTheError",
                preguntas: [
                    { texto: "La fórmula del agua es H3O.", error: "H3O", solucion: "H2O" },
                    { texto: "El dióxido de carbono es CO3.", error: "CO3", solucion: "CO2" },
                    { texto: "El cloruro de sodio (sal) es SoCl.", error: "SoCl", solucion: "NaCl" },
                    { texto: "El ácido sulfúrico es H2SO3.", error: "H2SO3", solucion: "H2SO4" },
                    { texto: "El amoníaco tiene la fórmula NH4.", error: "NH4", solucion: "NH3" },
                    { texto: "El símbolo del potasio es P.", error: "P", solucion: "K" },
                    { texto: "El metano es C2H6.", error: "C2H6", solucion: "CH4" }
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
    },
    numberOrder: {
        nombre: "Ordenar Números",
        descripcion: "Organiza los números de menor a mayor.",
        icono: "📉📈"
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
async function iniciarApp(grado) {
    if (gradoActual) return; // Evitar re-animar si ya está seleccionado

    // Animar la salida de la pantalla de bienvenida
    pantallaBienvenida.classList.add('anim-out');

    // Esperar a que termine la animación de salida
    setTimeout(() => {
        gradoActual = grado;
        gradoSeleccionadoEl.textContent = `${grado}° Grado`;
        pantallaBienvenida.style.display = 'none';
        pantallaPrincipal.style.display = 'block';
        mostrarSeleccionMateria();
    }, 400); // La duración de la animación es 0.4s
}

/** Muestra la pantalla de selección de materia y oculta las demás. */
function mostrarSeleccionMateria() {
    seleccionMateriaEl.style.display = 'block';
    seleccionTemaEl.style.display = 'none';
    seleccionJuegoEl.style.display = 'none';
    contenedorJuegoEl.style.display = 'none';
    pantallaCrearTemaEl.style.display = 'none';

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
        contenedorJuegoEl.style.display = 'none';

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
            <button id="btn-volver-a-juegos" class="btn-juego btn-volver">‹ Volver a Juegos</button>
        </div>`;
    
    const gridTemas = document.createElement('div');
    gridTemas.className = 'grid-temas';

    // Botón para crear un nuevo tema
    const tarjetaCrear = document.createElement('div');
    tarjetaCrear.className = 'tarjeta-tema btn-crear-tema';
    tarjetaCrear.innerHTML = `<h3>+ Crear Tema</h3>`;
    tarjetaCrear.addEventListener('click', () => mostrarFormularioCreacion(tipoJuego));
    gridTemas.appendChild(tarjetaCrear);


    for (const claveTema in temas) {
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
    contenedorJuegoEl.style.display = 'none';

    seleccionTemaEl.classList.add('anim-in');

    document.getElementById('btn-volver-a-juegos').addEventListener('click', () => mostrarSeleccionJuego(materiaActual));
}

/**
 * Inicia el juego para un tema específico.
 * @param {string} tema - La clave del tema (ej: "verboToBe").
 */
async function iniciarJuego(tema) {
    seleccionTemaEl.classList.add('anim-out');

    setTimeout(() => {
        temaActual = tema;
        preguntaIndex = 0;
        puntuacionActual = 0;
        preguntasIncorrectas = [];

        seleccionTemaEl.style.display = 'none';
        seleccionJuegoEl.style.display = 'none';
        pantallaCrearTemaEl.style.display = 'none';
        contenedorJuegoEl.style.display = 'block';

        seleccionTemaEl.classList.remove('anim-out');
        contenedorJuegoEl.classList.remove('anim-in');
        contenedorJuegoEl.classList.add('anim-in');

        const tipoJuego = gameData[materiaActual].temas[tema].juego;
        const cargarFuncion = {
            'sentenceScramble': cargarPreguntaSentenceScramble,
            'matchingPairs': cargarPreguntaMatchingPairs,
            'findTheError': cargarPreguntaFindTheError,
            'quiz': cargarPreguntaQuiz,
            'basicOperations': cargarPreguntaBasicOperations,
            'equationSolver': cargarPreguntaEquationSolver,
            'numberSequence': cargarPreguntaNumberSequence,
            'dragAndDropMatch': cargarPreguntaDragAndDropMatch,
            'numberOrder': cargarPreguntaNumberOrder,
        }[tipoJuego];

        if (cargarFuncion) cargarFuncion();

    }, 400);
}

/** Carga la pregunta actual del juego "Sentence Scramble". */
function cargarPreguntaSentenceScramble() {
    fraseUsuario = [];
    intentosRestantes = 3;
    const pregunta = gameData[materiaActual].temas[temaActual].preguntas[preguntaIndex];
    const totalPreguntas = gameData[materiaActual].temas[temaActual].preguntas.length;
    const palabras = pregunta.solucion.split(' ');
    shuffleArray(palabras);

    contenedorJuegoEl.innerHTML = `
        <div class="pregunta-header">
            <p id="pregunta-juego">Ordena la siguiente frase:</p>
            <div class="game-info-panel">
                <div class="intentos-restantes" title="Vidas restantes">Vidas: <span id="vidas">❤️❤️❤️</span></div>
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
            <button id="btn-volver-temas" class="btn-juego btn-volver">Volver</button>
            <button id="btn-verificar" class="btn-juego btn-verificar">Verificar</button>
            <button id="btn-siguiente-pregunta" class="btn-juego btn-siguiente">Siguiente</button>
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

    document.getElementById('btn-volver-temas').addEventListener('click', () => mostrarTemas(materiaActual, 'sentenceScramble'));
    document.getElementById('btn-pista').addEventListener('click', mostrarPista);
    document.getElementById('btn-verificar').addEventListener('click', verificarRespuesta);
    document.getElementById('btn-siguiente-pregunta').addEventListener('click', async () => {
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
    intentosRestantes = 3;
    const totalPreguntas = gameData[materiaActual].temas[temaActual].preguntas.length;
    
    let palabrasEN = ronda.map(p => p.en);
    let palabrasES = ronda.map(p => p.es);

    shuffleArray(palabrasEN);
    shuffleArray(palabrasES);

    contenedorJuegoEl.innerHTML = `
        <div class="pregunta-header">
            <p id="pregunta-juego">Une cada palabra con su traducción correcta.</p>
            <div class="game-info-panel">
                <div class="intentos-restantes" title="Vidas restantes">Vidas: <span id="vidas">❤️❤️❤️</span></div>
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
                    paresCorrectos++;
                } else {
                    const btnEnIncorrecto = seleccion.en;
                    const btnEsIncorrecto = seleccion.es;

                    btnEnIncorrecto.classList.add('incorrect');
                    btnEsIncorrecto.classList.add('incorrect');
                    intentosRestantes--;
                    document.getElementById('vidas').textContent = '❤️'.repeat(intentosRestantes) + '🖤'.repeat(3 - intentosRestantes);

                    setTimeout(() => {
                        btnEnIncorrecto.classList.remove('incorrect');
                        btnEsIncorrecto.classList.remove('incorrect');
                        btnEnIncorrecto.classList.remove('selected');
                        btnEsIncorrecto.classList.remove('selected');

                        if (intentosRestantes === 0) {
                            document.getElementById('feedback-juego').innerHTML = `¡Sin vidas! Pasando a la siguiente ronda.`;
                            document.getElementById('feedback-juego').style.color = '#E57373';
                            document.querySelectorAll('.btn-match').forEach(b => b.disabled = true);
                            document.getElementById('btn-siguiente-pregunta').style.display = 'inline-block';
                            if (!preguntasIncorrectas.includes(ronda)) {
                                preguntasIncorrectas.push(ronda);
                            }
                        }
                    }, 500);
                }

                seleccion.en.classList.remove('selected');
                seleccion.es.classList.remove('selected');
                seleccion = { en: null, es: null };

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
    document.getElementById('btn-siguiente-pregunta').addEventListener('click', async () => {
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
}

/** Carga la pregunta actual del juego "Find the Error". */
function cargarPreguntaFindTheError() {
    intentosRestantes = 3;
    const pregunta = gameData[materiaActual].temas[temaActual].preguntas[preguntaIndex];
    const totalPreguntas = gameData[materiaActual].temas[temaActual].preguntas.length;
    const palabras = pregunta.texto.split(' ');

    contenedorJuegoEl.innerHTML = `
        <div class="pregunta-header">
            <p id="pregunta-juego">Haz clic en la palabra incorrecta en la siguiente oración:</p>
            <div class="game-info-panel">
                <div class="intentos-restantes" title="Vidas restantes">Vidas: <span id="vidas">❤️❤️❤️</span></div>
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
             <button id="btn-volver-temas" class="btn-juego btn-volver">Volver</button>
             <button id="btn-siguiente-pregunta" class="btn-juego btn-siguiente">Siguiente</button>
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

    document.getElementById('btn-volver-temas').addEventListener('click', () => mostrarTemas(materiaActual, 'findTheError'));
    document.getElementById('btn-siguiente-pregunta').addEventListener('click', async () => {
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
    const opcionesBarajadas = [...pregunta.opciones, pregunta.solucion].sort(() => Math.random() - 0.5);

    contenedorJuegoEl.innerHTML = `
        <div class="pregunta-header">
            <p id="pregunta-juego">${pregunta.texto}</p>
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
    document.getElementById('btn-siguiente-pregunta').addEventListener('click', async () => {
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

    contenedorJuegoEl.innerHTML = `
        <div class="pregunta-header">
            <p id="pregunta-juego">${pregunta.texto}</p>
            <div class="game-info-panel">
                <div class="intentos-restantes" title="Vidas restantes">Vidas: <span id="vidas">❤️❤️❤️</span></div>
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
    document.getElementById('btn-siguiente-pregunta').addEventListener('click', async () => {
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

    contenedorJuegoEl.innerHTML = `
        <div class="pregunta-header">
            <p id="pregunta-juego">Resuelve la siguiente ecuación: <strong>${pregunta.texto}</strong></p>
            <div class="game-info-panel">
                <div class="intentos-restantes" title="Vidas restantes">Vidas: <span id="vidas">❤️❤️❤️</span></div>
            </div>
        </div>
        <div class="progreso-juego">
            <span id="texto-progreso">Pregunta ${preguntaIndex + 1} de ${totalPreguntas}</span>
            <div class="barra-progreso">
                <div class="barra-progreso-relleno" style="width: ${((preguntaIndex + 1) / totalPreguntas) * 100}%;"></div>
            </div>
        </div>
        <div class="math-input-container">
            <input type="text" id="respuesta-math" class="input-texto" placeholder="ej: x = 5">
            <p class="input-instruccion">Ingresa solo el número como respuesta.</p>
        </div>
        <div class="controles-juego">
             <button id="btn-volver-temas" class="btn-juego btn-volver">Volver</button>
             <button id="btn-verificar" class="btn-juego btn-verificar">Verificar</button>
             <button id="btn-siguiente-pregunta" class="btn-juego btn-siguiente">Siguiente</button>
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

    document.getElementById('btn-volver-temas').addEventListener('click', () => mostrarTemas(materiaActual, 'equationSolver'));
    document.getElementById('btn-siguiente-pregunta').addEventListener('click', async () => {
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

    contenedorJuegoEl.innerHTML = `
        <div class="pregunta-header">
            <p id="pregunta-juego">¿Cuál es el siguiente número en la secuencia: <strong>${pregunta.texto}</strong></p>
            <div class="game-info-panel">
                <div class="intentos-restantes" title="Vidas restantes">Vidas: <span id="vidas">❤️❤️❤️</span></div>
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
    document.getElementById('btn-siguiente-pregunta').addEventListener('click', async () => {
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

    contenedorJuegoEl.innerHTML = `
        <div class="pregunta-header">
            <p id="pregunta-juego">Arrastra cada elemento de una columna a su pareja correcta en la otra.</p>
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
             <button id="btn-volver-temas" class="btn-juego btn-volver">Volver</button>
             <button id="btn-siguiente-pregunta" class="btn-juego btn-siguiente">Finalizar</button>
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
            dropZone.innerHTML = '';
            dropZone.appendChild(dragItem);
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
            setTimeout(() => dragItem.classList.remove('incorrect-drag'), 500);
        }
    }

    function checkClickMatch() {
        const dragItem = seleccionDragDrop.draggable;
        const dropZone = seleccionDragDrop.droppable;

        if (!dragItem || !dropZone) return;

        handleDrop(dragItem, dropZone);

        setTimeout(() => {
            if (dragItem && !dragItem.classList.contains('matched')) {
                dragItem.classList.remove('selected');
            }
            if (dropZone && !dropZone.classList.contains('correct')) {
                dropZone.classList.remove('selected');
            }
            seleccionDragDrop = { draggable: null, droppable: null };
        }, 500);
    }

    document.getElementById('btn-volver-temas').addEventListener('click', () => mostrarTemas(materiaActual, 'dragAndDropMatch'));
    document.getElementById('btn-siguiente-pregunta').addEventListener('click', () => {
        if (correctMatches !== ronda.length) {
            puntuacionActual = correctMatches;
        }
        mostrarResultados();
    });
}

/** Carga la pregunta actual del juego "Number Order". */
function cargarPreguntaNumberOrder() {
    const pregunta = gameData[materiaActual].temas[temaActual].preguntas[preguntaIndex];
    const totalPreguntas = gameData[materiaActual].temas[temaActual].preguntas.length;
    let numeros = [...pregunta.numeros];
    shuffleArray(numeros);
    const esAscendente = Math.random() < 0.5;
    const textoInstruccion = esAscendente ? "Ordena de menor a mayor" : "Ordena de mayor a menor";

    contenedorJuegoEl.innerHTML = `
        <div class="pregunta-header">
            <p id="pregunta-juego">${textoInstruccion}</p>
            <div class="game-info-panel">
                <div class="intentos-restantes" title="Vidas restantes">Vidas: <span id="vidas">❤️❤️❤️</span></div>
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
             <button id="btn-volver-temas" class="btn-juego btn-volver">Volver</button>
             <button id="btn-verificar" class="btn-juego btn-verificar">Verificar</button>
             <button id="btn-siguiente-pregunta" class="btn-juego btn-siguiente">Siguiente</button>
        </div>
        <div id="feedback-juego"></div>
    `;

    let draggedItem = null;
    let seleccion = { item: null, zona: null };
    intentosRestantes = 3;

    document.querySelectorAll('.drag-item.number-item').forEach(item => {
        item.classList.add('clickable');
        item.addEventListener('dragstart', e => {
            draggedItem = e.target;
            setTimeout(() => e.target.classList.add('dragging'), 0);
        });
        item.addEventListener('dragend', () => {
            draggedItem.classList.remove('dragging');
            draggedItem = null;
        });
        item.addEventListener('click', () => handleSelection(item));
    });

    document.querySelectorAll('.drop-zone.number-drop-zone').forEach(zone => {
        zone.classList.add('clickable');
        zone.addEventListener('dragover', e => e.preventDefault());
        zone.addEventListener('drop', e => {
            e.preventDefault();
            if (draggedItem) {
                if (zone.children.length > 0) {
                    document.querySelector('.order-source-column').appendChild(zone.firstElementChild);
                }
                zone.appendChild(draggedItem);
            }
        });
        zone.addEventListener('click', () => handleSelection(zone));
    });

    function handleSelection(element) {
        if (element.classList.contains('drag-item')) {
            if (seleccion.item) seleccion.item.classList.remove('selected');
            seleccion.item = element;
            element.classList.add('selected');
        } else if (element.classList.contains('drop-zone')) {
            if (seleccion.zona) seleccion.zona.classList.remove('selected');
            seleccion.zona = element;
            element.classList.add('selected');
        }

        if (seleccion.item && seleccion.zona) {
            if (seleccion.zona.children.length > 0) {
                document.querySelector('.order-source-column').appendChild(seleccion.zona.firstElementChild);
            }
            seleccion.zona.appendChild(seleccion.item);
            seleccion.item.classList.remove('selected');
            seleccion.zona.classList.remove('selected');
            seleccion = { item: null, zona: null };
        }
    }

    document.getElementById('btn-verificar').addEventListener('click', () => {
        const solucionOrdenada = esAscendente
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
            document.querySelectorAll('.clickable').forEach(el => el.style.pointerEvents = 'none');
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
                document.querySelectorAll('.clickable').forEach(el => el.style.pointerEvents = 'none');
            }
        }
    });

    document.getElementById('btn-volver-temas').addEventListener('click', () => mostrarTemas(materiaActual, 'numberOrder'));
    document.getElementById('btn-siguiente-pregunta').addEventListener('click', () => {
        contenedorJuegoEl.classList.add('anim-out');
        setTimeout(() => {
            preguntaIndex++;
            if (preguntaIndex < totalPreguntas) cargarPreguntaNumberOrder();
            else mostrarResultados();
            contenedorJuegoEl.classList.remove('anim-out');
            contenedorJuegoEl.classList.add('anim-in');
        }, 400);
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
        if (item.error) {
            textoPregunta = `En la frase "${item.texto}", el error era "${item.error}".`;
            textoSolucion = `La palabra correcta es "${item.solucion}".`;
        } else if (item.opciones) {
            textoPregunta = `Para la pregunta "${item.texto}"...`;
            textoSolucion = `La respuesta correcta es "${item.solucion}".`;
        } else if (Array.isArray(item)) {
            textoPregunta = `En la ronda de unir parejas...`;
            textoSolucion = `Repasa el vocabulario de esa sección.`;
        } else if (item.draggable && item.droppable) {
            textoPregunta = `En el juego de arrastrar y soltar...`;
            textoSolucion = `Repasa las asociaciones de ese tema.`;
        } else if (item.numeros) {
            textoPregunta = `Para la secuencia de números...`;
            textoSolucion = `El orden correcto de menor a mayor es: ${[...item.numeros].sort((a, b) => a - b).join(' &rarr; ')}`;
        } else if (item.texto && item.solucion) {
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

    if (preguntaActual.pista) {
        textoPista = preguntaActual.pista;
    } else {
        const primeraPalabra = preguntaActual.solucion.split(' ')[0];
        textoPista = `La frase empieza con "${primeraPalabra}"`;
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
function mostrarFormularioCreacion(tipoJuego) {
    seleccionTemaEl.style.display = 'none';
    pantallaCrearTemaEl.style.display = 'block';
    document.getElementById('nombre-tema-input').value = '';
    const contenedorPreguntas = document.getElementById('contenedor-preguntas-crear');

    pantallaCrearTemaEl.classList.add('anim-in');

    contenedorPreguntas.innerHTML = '';
    
    pantallaCrearTemaEl.dataset.tipoJuego = tipoJuego;

    agregarCampoPregunta(tipoJuego, materiaActual); 

    document.getElementById('btn-agregar-pregunta').onclick = () => agregarCampoPregunta(tipoJuego, materiaActual);
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
function agregarCampoPregunta(tipoJuego, materia) {
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
            <div class="form-grupo">
                <label>${tipoJuego === 'basicOperations' ? 'Operación/Pregunta' : (tipoJuego === 'equationSolver' ? 'Ecuación' : 'Secuencia')}</label>
                <input type="text" class="input-texto" placeholder="${tipoJuego === 'basicOperations' ? 'ej: 5 + 3' : (tipoJuego === 'equationSolver' ? 'ej: x + 5 = 10' : 'ej: 1, 3, 5, ...')}">
            </div>
            <div class="form-grupo">
                <label>Solución</label>
                <input type="text" class="input-solucion" placeholder="${tipoJuego === 'basicOperations' ? 'ej: 8' : (tipoJuego === 'equationSolver' ? 'ej: 5' : 'ej: 7')}">
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
        const inputErrorPalabra = campo.querySelector('.input-error-palabra');
        const inputOpcionesQuiz = campo.querySelector('.input-opciones-quiz');
        
        const texto = inputTexto ? inputTexto.value.trim() : '';
        const solucion = inputSolucion ? inputSolucion.value.trim() : '';

        // Reset error styles
        if (inputTexto) inputTexto.classList.remove('input-error');
        if (inputSolucion) inputSolucion.classList.remove('input-error');
        if (inputErrorPalabra) inputErrorPalabra.classList.remove('input-error');
        if (inputOpcionesQuiz) inputOpcionesQuiz.classList.remove('input-error');

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
            const opciones = [solucion, ...otrasOpciones];
            shuffleArray(opciones);
            nuevasPreguntas.push({ texto, opciones, solucion });
        } else if (tipoJuego === 'basicOperations' || tipoJuego === 'equationSolver' || tipoJuego === 'numberSequence') {
            nuevasPreguntas.push({ texto, solucion });
        } else if (tipoJuego === 'numberOrder') {
            const numerosArray = solucion.split(',').map(Number).filter(n => !isNaN(n));
            nuevasPreguntas.push({ texto: "Ordena de menor a mayor", numeros: numerosArray });
        }
    }

    if (tipoJuego === 'matchingPairs' && nuevasPreguntas.length > 0) { 
        nuevasPreguntas = [nuevasPreguntas];
    }

    if (hayCamposVacios || nuevasPreguntas.length === 0) {
        alert("Por favor, completa todos los campos de las preguntas que agregaste correctamente.");
        return;
    }

    const claveTema = `custom_${nombreTema.toLowerCase().replace(/[^a-z0-9]/g, '_')}_${Date.now()}`;

    gameData[materiaActual].temas[claveTema] = {
        nombre: nombreTema,
        juego: tipoJuego,
        preguntas: nuevasPreguntas
    };

    alert(`¡Tema "${nombreTema}" guardado con éxito!`);
    mostrarTemas(materiaActual, gameData[materiaActual].temas[claveTema].juego);
}

// --- EVENT LISTENERS ---
document.addEventListener('DOMContentLoaded', () => {
    botonesGrado.forEach(boton => {
        boton.addEventListener('click', () => iniciarApp(boton.dataset.grado));
    });

    btnCambiarGrado.addEventListener('click', () => {
        pantallaPrincipal.classList.add('anim-out');
        setTimeout(() => {
            location.reload();
        }, 400);
    });

    document.querySelectorAll('.tarjeta-materia').forEach(tarjeta => {
        tarjeta.addEventListener('click', () => {
            if (!tarjeta.classList.contains('disabled'))
                mostrarSeleccionJuego(tarjeta.dataset.materia)
        });
    });
});
 