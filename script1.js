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
        }
    }
    // Aquí se podrían añadir más materias como 'matematicas', 'ciencias', etc.
};

// --- VARIABLES GLOBALES ---
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
    contenedorJuegoEl.style.display = 'none';
    pantallaCrearTemaEl.style.display = 'none';
}

/**
 * Muestra los temas disponibles para una materia.
 * @param {string} materia - La clave de la materia (ej: "ingles").
 */
function mostrarTemas(materia) {
    materiaActual = materia;
    const temas = gameData[materia].temas;
    seleccionTemaEl.innerHTML = `<h2>Elige un tema de ${gameData[materia].nombre}</h2>`;
    
    const gridTemas = document.createElement('div');
    gridTemas.className = 'grid-temas';

    // Botón para crear un nuevo tema
    const tarjetaCrear = document.createElement('div');
    tarjetaCrear.className = 'tarjeta-tema btn-crear-tema';
    tarjetaCrear.innerHTML = `<h3>+ Crear Tema</h3>`;
    tarjetaCrear.addEventListener('click', mostrarFormularioCreacion);
    gridTemas.appendChild(tarjetaCrear);


    for (const claveTema in temas) {
        const tema = temas[claveTema];
        const tarjetaTema = document.createElement('div');
        tarjetaTema.className = 'tarjeta-tema';
        tarjetaTema.dataset.tema = claveTema;
        tarjetaTema.innerHTML = `<h3>${tema.nombre}</h3>`;
        tarjetaTema.addEventListener('click', () => iniciarJuego(claveTema));
        gridTemas.appendChild(tarjetaTema);
    }

    seleccionTemaEl.appendChild(gridTemas);
    seleccionMateriaEl.style.display = 'none';
    seleccionTemaEl.style.display = 'block';
    contenedorJuegoEl.style.display = 'none'; // <-- ¡AQUÍ ESTÁ LA CORRECCIÓN!
    pantallaCrearTemaEl.style.display = 'none';
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
    pantallaCrearTemaEl.style.display = 'none';
    contenedorJuegoEl.style.display = 'block';
    cargarPregunta();
}

/** Carga la pregunta actual del juego "Sentence Scramble". */
function cargarPregunta() {
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
            <button id="btn-volver-temas" class="btn-juego btn-volver">Volver a Temas</button>
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

    document.getElementById('btn-volver-temas').addEventListener('click', () => mostrarTemas(materiaActual));
    document.getElementById('btn-pista').addEventListener('click', mostrarPista);
    document.getElementById('btn-verificar').addEventListener('click', verificarRespuesta);
    document.getElementById('btn-siguiente-pregunta').addEventListener('click', () => {
        preguntaIndex++;
        if (preguntaIndex < gameData[materiaActual].temas[temaActual].preguntas.length) {
            cargarPregunta();
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
        feedbackHtml += `<div class="feedback-item"><p>❌ <strong>Frase:</strong> "${item.texto}"</p><p>✔️ <strong>Solución:</strong> "${item.solucion}"</p></div>`;
    });

    contenedorJuegoEl.innerHTML = `
        <div class="tarjeta-resultados">
            <h2>Resultados del Tema</h2>
            <p class="puntuacion">Tu puntuacion: <strong>${puntuacionActual} de ${totalPreguntas} correctas</strong></p>
            <p class="mensaje-final">${mensajeFinal}</p>
            <div class="feedback-incorrectas">${feedbackHtml}</div>
            <button id="btn-volver" class="btn-juego btn-siguiente">Elegir otro Tema</button>
        </div>`;
    document.getElementById('btn-volver').addEventListener('click', () => mostrarTemas(materiaActual));
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
            // Deshabilitar la interacción con las palabras
            document.querySelectorAll('.palabra-en-frase').forEach(p => p.style.pointerEvents = 'none');
            document.querySelectorAll('.btn-palabra').forEach(p => p.disabled = true);
        }
    }
}

// --- FUNCIONES PARA CREAR TEMAS ---

/** Muestra el formulario para crear un nuevo tema. */
function mostrarFormularioCreacion() {
    seleccionTemaEl.style.display = 'none';
    pantallaCrearTemaEl.style.display = 'block';
    document.getElementById('nombre-tema-input').value = '';
    const contenedorPreguntas = document.getElementById('contenedor-preguntas-crear');
    contenedorPreguntas.innerHTML = '';
    agregarCampoPregunta(); // Añadir el primer campo de pregunta por defecto

    document.getElementById('btn-agregar-pregunta').onclick = agregarCampoPregunta;
    document.getElementById('btn-guardar-tema').onclick = guardarTemaPersonalizado;
    document.getElementById('btn-cancelar-creacion').onclick = () => mostrarTemas(materiaActual);
}

/** Actualiza los botones de la pantalla de creación con iconos. */
function actualizarBotonesCreacion() {
    document.getElementById('btn-agregar-pregunta').innerHTML = '➕ Añadir Pregunta';
    document.getElementById('btn-guardar-tema').innerHTML = '💾 Guardar Tema';
}

/** Agrega un nuevo par de inputs para una pregunta en el formulario de creación. */
function agregarCampoPregunta() {
    const contenedorPreguntas = document.getElementById('contenedor-preguntas-crear');
    const numPregunta = contenedorPreguntas.children.length + 1;
    if (numPregunta > 10) {
        alert("Puedes agregar un máximo de 10 preguntas por tema.");
        return;
    }

    const divPregunta = document.createElement('div');
    divPregunta.className = 'pregunta-crear-item';
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
    contenedorPreguntas.appendChild(divPregunta);
    actualizarBotonesCreacion();
}

/** Guarda el tema personalizado creado por el usuario. */
function guardarTemaPersonalizado() {
    const nombreTema = document.getElementById('nombre-tema-input').value.trim();
    if (!nombreTema) {
        alert("Por favor, dale un nombre a tu tema.");
        return;
    }

    const camposPreguntas = document.querySelectorAll('.pregunta-crear-item');
    const nuevasPreguntas = [];
    let hayCamposVacios = false;

    for (const campo of camposPreguntas) {
        const inputTexto = campo.querySelector('.input-texto');
        const inputSolucion = campo.querySelector('.input-solucion');
        const inputPista = campo.querySelector('.input-pista');
        const texto = inputTexto.value.trim();
        const solucion = inputSolucion.value.trim();
        const pista = inputPista.value.trim();

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
            const nuevaPregunta = { texto, solucion };
            if (pista) {
                nuevaPregunta.pista = pista;
            }
            nuevasPreguntas.push(nuevaPregunta);
        }
    }

    if (hayCamposVacios || nuevasPreguntas.length === 0) {
        alert("Por favor, completa todos los campos de las preguntas que agregaste.");
        return;
    }

    // Crear una clave única para el tema (ej: custom_mi_tema_12345)
    const claveTema = `custom_${nombreTema.toLowerCase().replace(/[^a-z0-9]/g, '_')}_${Date.now()}`;

    // Añadir el nuevo tema al objeto gameData
    gameData.ingles.temas[claveTema] = {
        nombre: nombreTema,
        juego: "sentenceScramble",
        preguntas: nuevasPreguntas
    };

    alert(`¡Tema "${nombreTema}" guardado con éxito!`);
    mostrarTemas(materiaActual); // Volver a la lista de temas, que ahora incluirá el nuevo
}


// --- EVENT LISTENERS ---

botonesGrado.forEach(boton => {
    boton.addEventListener('click', () => iniciarApp(boton.dataset.grado));
});

btnCambiarGrado.addEventListener('click', () => {
    location.reload(); // La forma más simple de reiniciar
});

document.querySelectorAll('.tarjeta-materia').forEach(tarjeta => {
    if (!tarjeta.classList.contains('disabled')) {
        tarjeta.addEventListener('click', () => mostrarTemas(tarjeta.dataset.materia));
    }
});