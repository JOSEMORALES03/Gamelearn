// --- DATOS DE LOS JUEGOS ---
// Estructura escalable para añadir más materias, temas y preguntas.
let gameData = {
    ingles: {
        nombre: "Inglés",
        temas: {
            conditionalsScramble: {
                nombre: "Ordenar Condicionales",
                juego: "sentenceScramble",
                preguntas: [
                    { texto: "if you study you will pass the exam", solucion: "if you study you will pass the exam" },
                    { texto: "i would travel if i had more money", solucion: "i would travel if i had more money" },
                    { texto: "she will be happy if he calls her", solucion: "she will be happy if he calls her" },
                    { texto: "if i were you i would not do that", solucion: "if i were you i would not do that" },
                    { texto: "they would have won if they had played better", solucion: "they would have won if they had played better" },
                    { texto: "if it rains we will stay at home", solucion: "if it rains we will stay at home" },
                    { texto: "he would buy a car if he could drive", solucion: "he would buy a car if he could drive" },
                    { texto: "if you mix red and blue you get purple", solucion: "if you mix red and blue you get purple" },
                    { texto: "what would you do if you won the lottery", solucion: "what would you do if you won the lottery" },
                    { texto: "if i had known i would have helped you", solucion: "if i had known i would have helped you" }
                ]
            },
            presentSimpleAffirmative: {
                nombre: "Presente Simple: Afirmativo",
                juego: "sentenceScramble",
                preguntas: [
                    { texto: "she works in an office", solucion: "she works in an office" },
                    { texto: "they play soccer on weekends", solucion: "they play soccer on weekends" },
                    { texto: "he reads a book every night", solucion: "he reads a book every night" },
                    { texto: "the sun rises in the east", solucion: "the sun rises in the east" },
                    { texto: "we learn english at school", solucion: "we learn english at school" },
                    { texto: "i drink coffee in the morning", solucion: "i drink coffee in the morning" },
                    { texto: "you speak spanish very well", solucion: "you speak spanish very well" },
                    { texto: "the train arrives at ten o'clock", solucion: "the train arrives at ten o'clock" },
                    { texto: "cats like to sleep a lot", solucion: "cats like to sleep a lot" },
                    { texto: "he enjoys listening to music", solucion: "he enjoys listening to music" }
                ]
            },
            presentSimpleNegative: {
                nombre: "Presente Simple: Negativo",
                juego: "sentenceScramble",
                preguntas: [
                    { texto: "i do not like vegetables", solucion: "i do not like vegetables" },
                    { texto: "he does not live in this city", solucion: "he does not live in this city" },
                    { texto: "we do not go to the cinema often", solucion: "we do not go to the cinema often" },
                    { texto: "she does not work on sundays", solucion: "she does not work on sundays" },
                    { texto: "they do not have any pets", solucion: "they do not have any pets" },
                    { texto: "it does not rain much in summer", solucion: "it does not rain much in summer" },
                    { texto: "you do not need a ticket", solucion: "you do not need a ticket" },
                    { texto: "he does not play the guitar", solucion: "he does not play the guitar" },
                    { texto: "i do not understand the question", solucion: "i do not understand the question" },
                    { texto: "they do not sell flowers here", solucion: "they do not sell flowers here" }
                ]
            },
            presentSimpleError: {
                nombre: "Presente Simple: Errores",
                juego: "findTheError",
                preguntas: [
                    { texto: "He work in a large company.", error: "work", solucion: "works" },
                    { texto: "They doesn't like early mornings.", error: "doesn't", solucion: "don't" },
                    { texto: "Do she have any pets?", error: "Do", solucion: "Does" },
                    { texto: "I likes to listen to music.", error: "likes", solucion: "like" },
                    { texto: "You speaks English very well.", error: "speaks", solucion: "speak" },
                    { texto: "She don't want to go.", error: "don't", solucion: "doesn't" },
                    { texto: "He watchs TV in the evening.", error: "watchs", solucion: "watches" },
                    { texto: "We goes to the park on Saturdays.", error: "goes", solucion: "go" },
                    { texto: "Does they live here?", error: "Does", solucion: "Do" },
                    { texto: "The cat play with the ball.", error: "play", solucion: "plays" }
                ]
            },
            presentSimpleQuiz: {
                nombre: "Presente Simple: Quiz",
                juego: "quiz",
                preguntas: [
                    { texto: "He ___ coffee every morning.", opciones: ["drink", "is drinking", "drank"], solucion: "drinks" },
                    { texto: "We ___ to the gym on Fridays.", opciones: ["goes", "are going", "went"], solucion: "go" },
                    { texto: "The sun ___ in the east.", opciones: ["rise", "is rising", "rose"], solucion: "rises" },
                    { texto: "My sister ___ the piano very well.", opciones: ["play", "is playing", "played"], solucion: "plays" },
                    { texto: "I ___ understand this exercise.", opciones: ["doesn't", "am not", "isn't"], solucion: "don't" },
                    { texto: "___ you like ice cream?", opciones: ["Are", "Is", "Have"], solucion: "Do" },
                    { texto: "She ___ her homework after school.", opciones: ["do", "is doing", "did"], solucion: "does" },
                    { texto: "They ___ in a small apartment.", opciones: ["lives", "are living", "lived"], solucion: "live" },
                    { texto: "The Earth ___ around the Sun.", opciones: ["go", "is going", "gone"], solucion: "goes" },
                    { texto: "He ___ to bed early.", opciones: ["go", "is going", "went"], solucion: "goes" }
                ]
            },
            phrasalVerbsPairs: {
                nombre: "Unir Phrasal Verbs",
                juego: "matchingPairs",
                preguntas: [
                    [
                        { en: "Look up", es: "Buscar información" },
                        { en: "Give up", es: "Rendirse" },
                        { en: "Take off", es: "Despegar / Quitarse ropa" },
                        { en: "Turn down", es: "Rechazar / Bajar volumen" },
                        { en: "Bring up", es: "Mencionar un tema / Criar" },
                        { en: "Come across", es: "Encontrar por casualidad" },
                        { en: "Go on", es: "Continuar" },
                        { en: "Hold on", es: "Esperar" },
                        { en: "Work out", es: "Hacer ejercicio / Resolver" },
                        { en: "Put off", es: "Posponer" }
                    ]
                ]
            },
            presentSimplePairs: {
                nombre: "Presente Simple: Unir Sujetos",
                juego: "matchingPairs",
                preguntas: [
                    [
                        { en: "I / You / We / They", es: "work" },
                        { en: "He / She / It", es: "works" },
                        { en: "I / You / We / They", es: "don't" },
                        { en: "He / She / It", es: "doesn't" }
                    ]
                ]
            },
            vocabularyMemory: {
                nombre: "Memoria de Vocabulario",
                juego: "memoryMatch",
                preguntas: [
                    { en: "Dog", es: "Perro" },
                    { en: "Cat", es: "Gato" },
                    { en: "Sun", es: "Sol" },
                    { en: "Moon", es: "Luna" },
                    { en: "Tree", es: "Árbol" },
                    { en: "Flower", es: "Flor" },
                    { en: "Mountain", es: "Montaña" }
                ]
            },
            passiveVoiceError: {
                nombre: "Errores en Voz Pasiva",
                juego: "findTheError",
                preguntas: [
                    { texto: "The book was wrote by a famous author.", error: "wrote", solucion: "written" },
                    { texto: "The cake is been made by my mother.", error: "been", solucion: "being" },
                    { texto: "The letters were send yesterday.", error: "send", solucion: "sent" },
                    { texto: "English is speak all over the world.", error: "speak", solucion: "spoken" },
                    { texto: "The movie will be direct by a new director.", error: "direct", solucion: "directed" },
                    { texto: "The house was build in 1990.", error: "build", solucion: "built" },
                    { texto: "The songs are sang by a choir.", error: "sang", solucion: "sung" },
                    { texto: "The car has been fix by the mechanic.", error: "fix", solucion: "fixed" },
                    { texto: "The problem must be solve immediately.", error: "solve", solucion: "solved" },
                    { texto: "The windows were broke by the storm.", error: "broke", solucion: "broken" }
                ]
            },
            tensesQuiz: {
                nombre: "Quiz de Tiempos Verbales",
                juego: "quiz",
                preguntas: [
                    {
                        texto: "If I ___ you, I would study more.",
                        opciones: ["am", "was", "were", "be"],
                        solucion: "were"
                    },
                    {
                        texto: "She ___ to Paris last year.",
                        opciones: ["go", "goes", "has gone", "went"],
                        solucion: "went"
                    },
                    {
                        texto: "By the time we arrived, the movie ___.",
                        opciones: ["started", "had started", "has started", "was starting"],
                        solucion: "had started"
                    },
                    {
                        texto: "I think it ___ tomorrow.",
                        opciones: ["will rain", "rains", "is raining", "rained"],
                        solucion: "will rain"
                    },
                    {
                        texto: "While I was reading, the phone ___.",
                        opciones: ["rings", "rang", "was ringing", "has rung"],
                        solucion: "rang"
                    },
                    {
                        texto: "He ___ here since 2020.",
                        opciones: ["works", "is working", "has worked", "worked"],
                        solucion: "has worked"
                    },
                    {
                        texto: "The novel 'Don Quixote' ___ by Cervantes.",
                        opciones: ["wrote", "is written", "writes"],
                        solucion: "was written"
                    },
                    {
                        texto: "They promised they ___ help us.",
                        opciones: ["will", "would", "can", "should"],
                        solucion: "would"
                    },
                    {
                        texto: "Look at those clouds! It ___.",
                        opciones: ["will rain", "is going to rain", "rains", "rained"],
                        solucion: "is going to rain"
                    },
                    {
                        texto: "I wish I ___ speak French.",
                        opciones: ["can", "could", "will", "would"],
                        solucion: "could"
                    }
                ]
            },
            conditionalsDrag: {
                nombre: "Arrastrar Condicionales",
                juego: "dragAndDropMatch",
                preguntas: [
                    { draggable: "If you heat ice,", droppable: "it melts." },
                    { draggable: "If I have time,", droppable: "I will call you." },
                    { draggable: "If I won the lottery,", droppable: "I would buy a house." },
                    { draggable: "If I had studied,", droppable: "I would have passed." },
                    { draggable: "She will miss the bus", droppable: "if she doesn't hurry." },
                    { draggable: "He would be healthier", droppable: "if he ate less sugar." },
                    { draggable: "I wouldn't have been late", droppable: "if the alarm had rung." },
                    { draggable: "When the sun goes down,", droppable: "it gets dark." },
                    { draggable: "If you were a superhero,", droppable: "what would your power be?" },
                    { draggable: "If they had invited me,", droppable: "I would have gone to the party." }
                ]
            }
            ,
            presentSimpleDrag: {
                nombre: "Presente Simple: Arrastrar",
                juego: "dragAndDropMatch",
                preguntas: [
                    { draggable: "He", droppable: "plays tennis." },
                    { draggable: "They", droppable: "live in New York." },
                    { draggable: "She doesn't", droppable: "eat meat." },
                    { draggable: "I", droppable: "read a lot of books." },
                    { draggable: "We don't", droppable: "watch TV." },
                    { draggable: "The cat", droppable: "sleeps on the sofa." },
                    { draggable: "You", droppable: "speak English." },
                    { draggable: "It", droppable: "rains in winter." },
                    { draggable: "My parents", droppable: "work in a hospital." },
                    { draggable: "He doesn't", droppable: "like spiders." }
                ]
            },
            presentSimpleWhQuestions: {
                nombre: "Presente Simple: Preguntas 'Wh'",
                juego: "sentenceScramble",
                preguntas: [
                    { texto: "where do you live", solucion: "where do you live" },
                    { texto: "what does he do", solucion: "what does he do" },
                    { texto: "when does the class start", solucion: "when does the class start" }
                ]
            }
            ,
            rouletteAntonyms: {
                nombre: "Ruleta de Antónimos",
                juego: "rouletteVF",
                preguntas: [
                    { texto: "The antonym of 'happy' is...", solucion: { valor: "sad", explicacion: "'Sad' is the direct opposite of 'happy'." }, opcionesFalsas: [{ valor: "joyful", explicacion: "'Joyful' is a synonym for 'happy'." }, { valor: "angry", explicacion: "'Angry' is a different emotion, not the direct opposite." }, { valor: "fast", explicacion: "'Fast' describes speed." }] },
                    { texto: "The antonym of 'big' is...", solucion: { valor: "small", explicacion: "'Small' is the opposite of 'big'." }, opcionesFalsas: [{ valor: "large", explicacion: "'Large' is a synonym for 'big'." }, { valor: "heavy", explicacion: "'Heavy' describes weight." }, { valor: "tall", explicacion: "'Tall' describes height." }] },
                    { texto: "The antonym of 'hot' is...", solucion: { valor: "cold", explicacion: "'Cold' is the opposite of 'hot'." }, opcionesFalsas: [{ valor: "warm", explicacion: "'Warm' is similar to 'hot'." }, { valor: "spicy", explicacion: "'Spicy' describes taste." }, { valor: "dark", explicacion: "'Dark' is the opposite of 'light'." }] },
                    { texto: "The antonym of 'fast' is...", solucion: { valor: "slow", explicacion: "'Slow' is the opposite of 'fast'." }, opcionesFalsas: [{ valor: "quick", explicacion: "'Quick' is a synonym for 'fast'." }, { valor: "strong", explicacion: "'Strong' describes strength." }, { valor: "quiet", explicacion: "'Quiet' is the opposite of 'loud'." }] },
                    { texto: "The antonym of 'empty' is...", solucion: { valor: "full", explicacion: "'Full' is the opposite of 'empty'." }, opcionesFalsas: [{ valor: "vacant", explicacion: "'Vacant' is a synonym." }, { valor: "open", explicacion: "'Open' is the opposite of 'closed'." }, { valor: "light", explicacion: "'Light' is the opposite of 'heavy' or 'dark'." }] },
                    { texto: "The antonym of 'rich' is...", solucion: { valor: "poor", explicacion: "'Poor' is the opposite of 'rich'." }, opcionesFalsas: [{ valor: "wealthy", explicacion: "'Wealthy' is a synonym." }, { valor: "expensive", explicacion: "'Expensive' is the opposite of 'cheap'." }, { valor: "happy", explicacion: "'Happy' is an emotion." }] },
                    { texto: "The antonym of 'difficult' is...", solucion: { valor: "easy", explicacion: "'Easy' is the opposite of 'difficult'." }, opcionesFalsas: [{ valor: "hard", explicacion: "'Hard' is a synonym." }, { valor: "simple", explicacion: "'Simple' is a synonym for 'easy'." }, { valor: "long", explicacion: "'Long' is the opposite of 'short'." }] },
                    { texto: "The antonym of 'strong' is...", solucion: { valor: "weak", explicacion: "'Weak' is the opposite of 'strong'." }, opcionesFalsas: [{ valor: "powerful", explicacion: "'Powerful' is a synonym." }, { valor: "heavy", explicacion: "'Heavy' describes weight." }, { valor: "small", explicacion: "'Small' describes size." }] },
                    { texto: "The antonym of 'old' is...", solucion: { valor: "new", explicacion: "'New' or 'young' are opposites of 'old'." }, opcionesFalsas: [{ valor: "ancient", explicacion: "'Ancient' is a synonym." }, { valor: "big", explicacion: "'Big' describes size." }, { valor: "fast", explicacion: "'Fast' describes speed." }] },
                    { texto: "The antonym of 'beautiful' is...", solucion: { valor: "ugly", explicacion: "'Ugly' is the opposite of 'beautiful'." }, opcionesFalsas: [{ valor: "pretty", explicacion: "'Pretty' is a synonym." }, { valor: "nice", explicacion: "'Nice' is a general positive adjective." }, { valor: "dark", explicacion: "'Dark' is the opposite of 'light'." }] }
                ]
            }
            ,
            presentSimpleRoulette: {
                nombre: "Presente Simple: Ruleta",
                juego: "rouletteVF",
                preguntas: [
                    { texto: "Para 'He/She/It', el verbo...", solucion: { valor: "lleva '-s' o '-es'", explicacion: "Correcto, es la regla para la tercera persona del singular." }, opcionesFalsas: [{ valor: "no cambia", explicacion: "Incorrecto, el verbo sí cambia." }, { valor: "lleva 'don't'", explicacion: "Incorrecto, se usa 'doesn't'." }] },
                    { texto: "Para negar con 'I/You/We/They', se usa...", solucion: { valor: "don't", explicacion: "Correcto, 'don't' es el auxiliar para estos pronombres." }, opcionesFalsas: [{ valor: "doesn't", explicacion: "Incorrecto, 'doesn't' se usa para 'He/She/It'." }, { valor: "isn't", explicacion: "Incorrecto, 'isn't' es del verbo 'to be'." }] },
                    { texto: "Para preguntar con 'She', se usa...", solucion: { valor: "Does", explicacion: "Correcto, 'Does' es el auxiliar para 'He/She/It'." }, opcionesFalsas: [{ valor: "Do", explicacion: "Incorrecto, 'Do' se usa para 'I/You/We/They'." }, { valor: "Is", explicacion: "Incorrecto, 'Is' es del verbo 'to be'." }] },
                    { texto: "En preguntas con 'Does', el verbo principal...", solucion: { valor: "no lleva '-s'", explicacion: "Correcto, el verbo va en su forma base (ej: Does he work?)." }, opcionesFalsas: [{ valor: "lleva '-s'", explicacion: "Incorrecto, el auxiliar 'Does' ya marca la tercera persona." }, { valor: "lleva '-ing'", explicacion: "Incorrecto, '-ing' es para tiempos continuos." }] },
                    { texto: "Usamos el Presente Simple para...", solucion: { valor: "hábitos y rutinas", explicacion: "Correcto, se usa para acciones habituales." }, opcionesFalsas: [{ valor: "acciones en progreso", explicacion: "Incorrecto, para eso se usa el Presente Continuo." }, { valor: "acciones pasadas", explicacion: "Incorrecto, para eso se usan los tiempos pasados." }] },
                    { texto: "La palabra 'always' es un adverbio de...", solucion: { valor: "frecuencia", explicacion: "Correcto, indica qué tan seguido ocurre una acción." }, opcionesFalsas: [{ valor: "modo", explicacion: "Incorrecto, los adverbios de modo describen cómo se hace algo." }, { valor: "lugar", explicacion: "Incorrecto, los de lugar indican dónde." }] },
                    { texto: "La forma negativa de 'He works' es...", solucion: { valor: "He doesn't work", explicacion: "Correcto, se usa el auxiliar 'doesn't' + verbo base." }, opcionesFalsas: [{ valor: "He no work", explicacion: "Incorrecto, 'no' no se usa así para negar verbos." }, { valor: "He doesn't works", explicacion: "Incorrecto, el verbo debe ir en su forma base." }] },
                    { texto: "La pregunta para 'They live in Spain' es...", solucion: { valor: "Where do they live?", explicacion: "Correcto, esta es una pregunta 'Wh' bien formada." }, opcionesFalsas: [{ valor: "Where they live?", explicacion: "Incorrecto, falta el auxiliar 'do'." }, { valor: "Do they live?", explicacion: "Incorrecto, esta es una pregunta de sí/no." }] },
                    { texto: "El verbo 'to be' en presente para 'I' es...", solucion: { valor: "am", explicacion: "Correcto, la conjugación es 'I am'." }, opcionesFalsas: [{ valor: "is", explicacion: "Incorrecto, 'is' es para 'He/She/It'." }, { valor: "are", explicacion: "Incorrecto, 'are' es para 'You/We/They'." }] },
                    { texto: "El verbo 'have' para 'she' es...", solucion: { valor: "has", explicacion: "Correcto, la forma para la tercera persona es 'has'." }, opcionesFalsas: [{ valor: "have", explicacion: "Incorrecto, 'have' es para los otros pronombres." }, { valor: "haves", explicacion: "Incorrecto, esta forma no existe." }] }
                ]
            }
            ,
            presentSimpleQuestions: {
                nombre: "Presente Simple: Preguntas",
                juego: "sentenceScramble",
                preguntas: [
                    { texto: "do you speak english", solucion: "do you speak english" },
                    { texto: "does he play football", solucion: "does he play football" },
                    { texto: "do they live in this house", solucion: "do they live in this house" },
                    { texto: "does she like to read books", solucion: "does she like to read books" },
                    { texto: "do we have a meeting today", solucion: "do we have a meeting today" },
                    { texto: "does it work properly", solucion: "does it work properly" },
                    { texto: "do i need to sign here", solucion: "do i need to sign here" },
                    { texto: "does your father cook dinner", solucion: "does your father cook dinner" },
                    { texto: "do the shops close early", solucion: "do the shops close early" },
                    { texto: "does the bus stop here", solucion: "does the bus stop here" }
                ]
            }
            ,
            presentSimpleHangman: {
                nombre: "Ahorcado: Verbos Clave",
                juego: "hangman",
                preguntas: [
                    { palabra: "WORKS", pista: "Verbo para 'He/She/It' en afirmativo (ej: He ___ hard)." },
                    { palabra: "PLAY", pista: "Verbo para 'I/You/We/They' en afirmativo (ej: They ___ soccer)." },
                    { palabra: "DOESNT", pista: "Auxiliar negativo para 'He/She/It'." },
                    { palabra: "DONT", pista: "Auxiliar negativo para 'I/You/We/They'." },
                    { palabra: "DOES", pista: "Auxiliar interrogativo para 'He/She/It'." },
                    { palabra: "STUDIES", pista: "Verbo 'study' para 'She' en afirmativo." }
                ]
            },
            presentSimpleFill: {
                nombre: "Completar Presente Simple",
                juego: "fillTheWord",
                preguntas: [
                    { texto: "She _____ (work) in an office.", solucion: "WORKS" },
                    { texto: "They ____ (not like) vegetables.", solucion: "DONT" },
                    { texto: "____ he play the guitar? (Do/Does)", solucion: "DOES" },
                    { texto: "I _____ (read) a book every night.", solucion: "READ" },
                    { texto: "He ______ (not live) in this city.", solucion: "DOESNT" },
                    { texto: "____ you speak English? (Do/Does)", solucion: "DO" },
                    { texto: "The cat ______ (sleep) on the sofa.", solucion: "SLEEPS" },
                    { texto: "We ____ (not go) to the cinema often.", solucion: "DONT" }
                ]
            }
        },
    },
    matematicas: {
        nombre: "Matemáticas",
        temas: {
            algebraBasica: {
                nombre: "Álgebra Básica",
                juego: "basicOperations",
                preguntas: [
                    { texto: "Simplifica: 3x + 5y - x + 2y", solucion: "2x+7y" },
                    { texto: "Evalúa 2a - 3b si a=5 y b=2", solucion: "4" },
                    { texto: "Expande: (x + 3)²", solucion: "x^2+6x+9" },
                    { texto: "Calcula: (-2)^4", solucion: "16" },
                    { texto: "Simplifica: (x^5)(x^3)", solucion: "x^8" },
                    { texto: "Simplifica: y^7 / y^4", solucion: "y^3" },
                    { texto: "Evalúa 5(a+b) si a=2 y b=-3", solucion: "-5" },
                    { texto: "Expande: (a - b)(a + b)", solucion: "a^2-b^2" },
                    { texto: "Simplifica: 4(x - 2) + 3(x + 1)", solucion: "7x-5" },
                    { texto: "Calcula: 3^2 + 4^2", solucion: "25" }
                ]
            },
            factorizacionQuiz: {
                nombre: "Quiz de Factorización",
                juego: "quiz",
                preguntas: [
                    { texto: "¿Cómo se factoriza x² - 9?", opciones: ["(x-3)²", "(x+3)²", "(x-3)(x+3)"], solucion: "(x-3)(x+3)" },
                    { texto: "Factor común de 5a² + 10a:", opciones: ["5", "a", "5a"], solucion: "5a" },
                    { texto: "¿Cómo se factoriza x² + 5x + 6?", opciones: ["(x+6)(x+1)", "(x+2)(x+3)", "(x-2)(x-3)"], solucion: "(x+2)(x+3)" },
                    { texto: "Factoriza 4y² - 25:", opciones: ["(2y-5)²", "(2y-5)(2y+5)", "(4y-5)(y+5)"], solucion: "(2y-5)(2y+5)" },
                    { texto: "¿Cómo se factoriza a² - 2a + 1?", opciones: ["(a-1)²", "(a+1)²", "(a-1)(a+1)"], solucion: "(a-1)²" },
                    { texto: "Factor común de 3x³ - 6x² + 9x:", opciones: ["3", "x", "3x"], solucion: "3x" },
                    { texto: "¿Cómo se factoriza x² - x - 12?", opciones: ["(x-6)(x+2)", "(x+4)(x-3)"], solucion: "(x-4)(x+3)" },
                    { texto: "Factoriza 8m³ + 1:", opciones: ["(2m-1)(4m²+2m+1)", "(2m+1)(4m²-2m+1)", "(2m+1)²"], solucion: "(2m+1)(4m²-2m+1)" },
                    { texto: "Factoriza por agrupación: xy + 2x + 3y + 6", opciones: ["(x+2)(y+3)", "(x+3)(y+2)", "(x+y)(2+3)"], solucion: "(x+3)(y+2)" },
                    { texto: "¿Cómo se factoriza 9x² + 12x + 4?", opciones: ["(3x+2)²", "(3x-2)²", "(9x+4)(x+1)"], solucion: "(3x+2)²" }
                ]
            },
            ecuacionesComplejas: {
                nombre: "Ecuaciones Avanzadas",
                juego: "equationSolver",
                preguntas: [
                    { texto: "3x - 5 = x + 7", solucion: "6" },
                    { texto: "5(y - 2) = 20", solucion: "6" },
                    { texto: "a/4 + 3 = 5", solucion: "8" },
                    { texto: "2(z + 1) = 3(z - 2)", solucion: "8" },
                    { texto: "10 - 2b = b + 1", solucion: "3" },
                    { texto: "x/2 + x/3 = 5", solucion: "6" },
                    { texto: "4c - (c + 2) = 7", solucion: "3" },
                    { texto: "5 - y/3 = 1", solucion: "12" },
                    { texto: "2x + 8 = 5x - 1", solucion: "3" },
                    { texto: "(x+1)/3 = 2", solucion: "5" }
                ]
            },
            trigonometriaErrores: {
                nombre: "Errores en Trigonometría",
                juego: "findTheError",
                preguntas: [
                    { texto: "En un triángulo rectángulo, la hipotenusa es el lado más corto.", error: "corto", solucion: "largo" },
                    { texto: "El seno de un ángulo es cateto adyacente sobre hipotenusa.", error: "adyacente", solucion: "opuesto" },
                    { texto: "La tangente de un ángulo es hipotenusa sobre cateto opuesto.", error: "hipotenusa", solucion: "cateto" },
                    { texto: "El Teorema de Pitágoras es a² - b² = c².", error: "-", solucion: "+" },
                    { texto: "El coseno de 45° es igual a 1.", error: "1", solucion: "√2/2" },
                    { texto: "La suma de los ángulos de un triángulo es 360°.", error: "360°", solucion: "180°" },
                    { texto: "El seno de 30° es igual al coseno de 30°.", error: "coseno", solucion: "seno" },
                    { texto: "La secante es la inversa del seno.", error: "seno", solucion: "coseno" },
                    { texto: "En un círculo unitario, la coordenada 'y' representa el coseno.", error: "coseno", solucion: "seno" },
                    { texto: "El valor máximo de la función seno es 2.", error: "2", solucion: "1" }
                ]
            },
            secuenciasComplejas: {
                nombre: "Secuencias Complejas",
                juego: "numberSequence",
                preguntas: [
                    { texto: "3, 9, 27, 81, ?", solucion: "243" },
                    { texto: "1, 3, 6, 10, 15, ?", solucion: "21" },
                    { texto: "88, 85, 82, 79, ?", solucion: "76" },
                    { texto: "2, 5, 11, 23, ?", solucion: "47" },
                    { texto: "1, 8, 27, 64, ?", solucion: "125" },
                    { texto: "1, 2, 3, 5, 8, ?", solucion: "13" },
                    { texto: "64, 32, 16, 8, ?", solucion: "4" },
                    { texto: "1, 10, 100, 1000, ?", solucion: "10000" },
                    { texto: "4, 9, 16, 25, ?", solucion: "36" },
                    { texto: "2, 3, 5, 7, 11, ?", solucion: "13" }
                ]
            },
            factorizacionDrag: {
                nombre: "Arrastrar Factorización",
                juego: "dragAndDropMatch",
                preguntas: [
                    { draggable: "x² - y²", droppable: "(x - y)(x + y)" },
                    { draggable: "x² + 2xy + y²", droppable: "(x + y)²" },
                    { draggable: "x² - 2xy + y²", droppable: "(x - y)²" },
                    { draggable: "x³ + y³", droppable: "(x + y)(x² - xy + y²)" },
                    { draggable: "x³ - y³", droppable: "(x - y)(x² + xy + y²)" },
                    { draggable: "ax + ay", droppable: "a(x + y)" },
                    { draggable: "x² + (a+b)x + ab", droppable: "(x + a)(x + b)" },
                    { draggable: "4x² - 9", droppable: "(2x - 3)(2x + 3)" },
                    { draggable: "Trinomio Cuadrado Perfecto", droppable: "a² ± 2ab + b²" },
                    { draggable: "Diferencia de Cuadrados", droppable: "a² - b²" }
                ]
            },
            trigonometriaPairs: {
                nombre: "Unir Razones Trigonométricas",
                juego: "matchingPairs",
                preguntas: [
                    [
                        { en: "Seno (sin)", es: "Opuesto / Hipotenusa" },
                        { en: "Coseno (cos)", es: "Adyacente / Hipotenusa" },
                        { en: "Tangente (tan)", es: "Opuesto / Adyacente" },
                        { en: "Cosecante (csc)", es: "Hipotenusa / Opuesto" },
                        { en: "Secante (sec)", es: "Hipotenusa / Adyacente" },
                        { en: "Cotangente (cot)", es: "Adyacente / Opuesto" },
                        { en: "sin²θ + cos²θ", es: "1" },
                        { en: "Teorema de Pitágoras", es: "a² + b² = c²" },
                        { en: "tan(θ)", es: "sin(θ) / cos(θ)" },
                        { en: "Suma de ángulos de un triángulo", es: "180°" }
                    ]
                ]
            },
            ordenarReales: {
                nombre: "Ordenar Números Reales",
                juego: "numberOrder",
                preguntas: [
                    { texto: "Ordena de menor a mayor", numeros: [3.14, 3.141, 3.1, 3.1415] },
                    { texto: "Ordena de menor a mayor", numeros: [1/2, 1/3, 3/4, 2/5] },
                    { texto: "Ordena de menor a mayor", numeros: [-1.5, -1.05, -1.55, -1.005] },
                    { texto: "Ordena de menor a mayor", numeros: [Math.sqrt(2), 1.4, 1.414, 1.42] },
                    { texto: "Ordena de menor a mayor", numeros: [2/3, 0.6, 0.66, 0.667] },
                    { texto: "Ordena de menor a mayor", numeros: [Math.PI, 3.14, 22/7, 3.15] },
                    { texto: "Ordena de menor a mayor", numeros: [-5/2, -2.4, -2.6, -11/4] },
                    { texto: "Ordena de menor a mayor", numeros: [1, 0.99, 1.01, 10/11] },
                    { texto: "Ordena de menor a mayor", numeros: [Math.sqrt(9), 3.01, 2.99, 8/3] },
                    { texto: "Ordena de menor a mayor", numeros: [0.1, 0.01, 0.11, 0.101] }
                ]
            },
            rouletteFormulas: {
                nombre: "Ruleta de Fórmulas",
                juego: "rouletteVF",
                preguntas: [
                    { texto: "La fórmula del área de un círculo es...", solucion: { valor: "πr²", explicacion: "El área de un círculo es Pi por el radio al cuadrado." }, opcionesFalsas: [{ valor: "2πr", explicacion: "2πr es la fórmula de la circunferencia, no del área." }, { valor: "πd", explicacion: "πd también es la circunferencia (Pi por diámetro)." }, { valor: "r²", explicacion: "r² por sí solo no es la fórmula completa." }] },
                    { texto: "El Teorema de Pitágoras se expresa como...", solucion: { valor: "a²+b²=c²", explicacion: "La suma de los cuadrados de los catetos es igual al cuadrado de la hipotenusa." }, opcionesFalsas: [{ valor: "a+b=c", explicacion: "Esto no es una fórmula general para triángulos rectángulos." }, { valor: "a²-b²=c²", explicacion: "El teorema usa una suma, no una resta." }, { valor: "a²+b²=c", explicacion: "La hipotenusa también debe estar al cuadrado." }] },
                    { texto: "La fórmula para el área de un triángulo es...", solucion: { valor: "(b*h)/2", explicacion: "El área es la base por la altura, dividido entre dos." }, opcionesFalsas: [{ valor: "b*h", explicacion: "b*h es la fórmula para el área de un rectángulo." }, { valor: "l+l+l", explicacion: "Esto representa el perímetro." }, { valor: "2b+2h", explicacion: "Esto sería el perímetro de un rectángulo." }] },
                    { texto: "La solución para una ecuación cuadrática es...", solucion: { valor: "Fórmula General", explicacion: "Se usa la fórmula general: x = [-b ± √(b²-4ac)] / 2a." }, opcionesFalsas: [{ valor: "y=mx+b", explicacion: "Esta es la ecuación de una recta." }, { valor: "Despejar x", explicacion: "No siempre se puede despejar 'x'." }, { valor: "Factorizar", explicacion: "Factorizar es un método, no la fórmula general." }] },
                    { texto: "El volumen de un cubo se calcula como...", solucion: { valor: "L³", explicacion: "El volumen es el lado elevado al cubo." }, opcionesFalsas: [{ valor: "L²", explicacion: "L² es el área de una cara." }, { valor: "6L²", explicacion: "6L² es el área superficial total del cubo." }, { valor: "4L", explicacion: "4L sería el perímetro de una cara." }] },
                    { texto: "La pendiente de una recta se representa con la letra...", solucion: { valor: "m", explicacion: "En la ecuación y = mx + b, 'm' es la pendiente." }, opcionesFalsas: [{ valor: "b", explicacion: "'b' es el intercepto con el eje y." }, { valor: "x", explicacion: "'x' es la variable independiente." }, { valor: "y", explicacion: "'y' es la variable dependiente." }] },
                    { texto: "La fórmula del perímetro de un rectángulo es...", solucion: { valor: "2(l+a)", explicacion: "Es dos veces la suma del largo más el ancho." }, opcionesFalsas: [{ valor: "l*a", explicacion: "l*a es la fórmula del área." }, { valor: "l+a", explicacion: "Esto es solo la mitad del perímetro." }, { valor: "l²", explicacion: "Esto no se aplica a un rectángulo." }] },
                    { texto: "La suma de los ángulos internos de un cuadrilátero es...", solucion: { valor: "360°", explicacion: "Cualquier cuadrilátero (cuadrado, rectángulo, etc.) suma 360°." }, opcionesFalsas: [{ valor: "180°", explicacion: "180° es la suma para un triángulo." }, { valor: "90°", explicacion: "90° es el valor de un ángulo recto." }, { valor: "540°", explicacion: "540° es la suma para un pentágono." }] },
                    { texto: "La fórmula de la velocidad es...", solucion: { valor: "d/t", explicacion: "Velocidad es igual a distancia sobre tiempo." }, opcionesFalsas: [{ valor: "d*t", explicacion: "Distancia por tiempo no define la velocidad." }, { valor: "t/d", explicacion: "Esto sería el inverso de la velocidad." }, { valor: "m*a", explicacion: "m*a es la segunda ley de Newton (Fuerza)." }] },
                    { texto: "El área de un trapecio es...", solucion: { valor: "((B+b)*h)/2", explicacion: "Es la suma de las bases por la altura, sobre dos." }, opcionesFalsas: [{ valor: "(B*b)/2", explicacion: "Esto no corresponde a la fórmula." }, { valor: "B*h", explicacion: "Esto sería el área de un paralelogramo." }, { valor: "(B+b)*h", explicacion: "Falta dividir entre 2." }] }
                ]
            },
            graficasLineales: {
                nombre: "Gráficas Lineales",
                juego: "quiz",
                preguntas: [
                    { texto: "En y = 2x + 3, ¿cuál es la pendiente?", opciones: ["y", "x", "3"], solucion: "2" },
                    { texto: "En y = -x + 5, ¿cuál es el intercepto en y?", opciones: ["-1", "x", "y"], solucion: "5" },
                    { texto: "Una pendiente positiva indica que la recta...", opciones: ["es horizontal", "baja de izquierda a derecha", "es vertical"], solucion: "sube de izquierda a derecha" },
                    { texto: "Una pendiente de 0 indica que la recta...", opciones: ["es vertical", "sube", "baja"], solucion: "es horizontal" },
                    { texto: "En la ecuación y = 3x, ¿dónde cruza la recta el eje y?", opciones: ["En 3", "No lo cruza", "En 1"], solucion: "En el origen (0,0)" },
                    { texto: "¿Qué significa 'b' en y = mx + b?", opciones: ["La pendiente", "La variable x", "La variable y"], solucion: "El intercepto en y" },
                    { texto: "Si dos rectas son paralelas, sus pendientes son...", opciones: ["diferentes", "opuestas", "negativas"], solucion: "iguales" },
                    { texto: "En la ecuación y = 4, la pendiente es...", opciones: ["4", "1", "indefinida"], solucion: "0" },
                    { texto: "En la ecuación x = 3, la pendiente es...", opciones: ["3", "0", "1"], solucion: "indefinida" },
                    { texto: "Para la recta y = 5x - 10, ¿cuál es el intercepto en x?", opciones: ["-10", "5", "1"], solucion: "2" }
                ]
            },
            operacionesDecimales: {
                nombre: "Operaciones con Decimales",
                juego: "basicOperations",
                preguntas: [
                    { texto: "Calcula: 1.5 + 2.3", solucion: "3.8" },
                    { texto: "Calcula: 5.8 - 2.1", solucion: "3.7" },
                    { texto: "Calcula: 0.5 * 4", solucion: "2" },
                    { texto: "Calcula: 7.5 / 3", solucion: "2.5" },
                    { texto: "Calcula: 10 - 3.5", solucion: "6.5" },
                    { texto: "Calcula: 1.2 * 1.2", solucion: "1.44" },
                    { texto: "Calcula: 0.25 + 0.75", solucion: "1" },
                    { texto: "Calcula: 9.9 / 0.9", solucion: "11" },
                    { texto: "Calcula: 3 * 1.5", solucion: "4.5" },
                    { texto: "Calcula: 2 - 0.01", solucion: "1.99" }
                ]
            },
            memoryFormulas: {
                nombre: "Memoria de Fórmulas",
                juego: "memoryMatch",
                preguntas: [
                    { en: "Área del Círculo", es: "πr²" },
                    { en: "Área del Triángulo", es: "(b*h)/2" },
                    { en: "Teorema de Pitágoras", es: "a²+b²=c²" },
                    { en: "Volumen del Cubo", es: "L³" },
                    { en: "Ecuación de la Recta", es: "y=mx+b" },
                    { en: "Perímetro del Rectángulo", es: "2(l+a)" },
                    { en: "Velocidad", es: "d/t" },
                    { en: "Diferencia de Cuadrados", es: "a²-b²" }
                ]
            },
            mathHangman: {
                nombre: "Ahorcado de Conceptos",
                juego: "hangman",
                preguntas: [
                    { palabra: "SUMA", pista: "Operación para juntar cantidades." },
                    { palabra: "ANGULO", pista: "Figura formada por dos líneas desde un mismo punto." },
                    { palabra: "FRACCION", pista: "Representa una parte de un todo." },
                    { palabra: "ECUACION", pista: "Igualdad matemática con una o más incógnitas." },
                    { palabra: "RADIO", pista: "Distancia del centro de un círculo a su borde." }
                ]
            },
            mathFill: {
                nombre: "Completar el Concepto",
                juego: "fillTheWord",
                preguntas: [
                    { texto: "El resultado de 2+2 es ____.", solucion: "CUATRO" },
                    { texto: "Un polígono de 3 lados es un _________.", solucion: "TRIANGULO" },
                    { texto: "La fórmula del área de un cuadrado es lado por ____.", solucion: "LADO" }
                ]
            }
        }
    },
    quimica: {
        nombre: "Química",
        temas: {
            rouletteSimbolos: {
                nombre: "Ruleta de Símbolos",
                juego: "rouletteVF",
                preguntas: [
                    { texto: "El símbolo del Oro es...", solucion: { valor: "Au", explicacion: "Au viene del latín 'Aurum'." }, opcionesFalsas: [{ valor: "Ag", explicacion: "Ag es el símbolo de la Plata." }, { valor: "Fe", explicacion: "Fe es el símbolo del Hierro." }, { valor: "Pb", explicacion: "Pb es el símbolo del Plomo." }] },
                    { texto: "El símbolo del Sodio es...", solucion: { valor: "Na", explicacion: "Na viene del latín 'Natrium'." }, opcionesFalsas: [{ valor: "S", explicacion: "S es el símbolo del Azufre." }, { valor: "K", explicacion: "K es el símbolo del Potasio." }, { valor: "Si", explicacion: "Si es el símbolo del Silicio." }] },
                    { texto: "El símbolo del Fósforo es...", solucion: { valor: "P", explicacion: "P viene del griego 'Phosphoros'." }, opcionesFalsas: [{ valor: "F", explicacion: "F es el símbolo del Flúor." }, { valor: "K", explicacion: "K es el símbolo del Potasio." }, { valor: "Po", explicacion: "Po es el símbolo del Polonio." }] },
                    { texto: "El símbolo del Mercurio es...", solucion: { valor: "Hg", explicacion: "Hg viene del griego 'Hydrargyrum'." }, opcionesFalsas: [{ valor: "Mc", explicacion: "Mc es el símbolo del Moscovio." }, { valor: "Mg", explicacion: "Mg es el símbolo del Magnesio." }, { valor: "H", explicacion: "H es el símbolo del Hidrógeno." }] },
                    { texto: "El símbolo de la Plata es...", solucion: { valor: "Ag", explicacion: "Ag viene del latín 'Argentum'." }, opcionesFalsas: [{ valor: "Au", explicacion: "Au es el símbolo del Oro." }, { valor: "Al", explicacion: "Al es el símbolo del Aluminio." }, { valor: "Ar", explicacion: "Ar es el símbolo del Argón." }] },
                    { texto: "El símbolo del Potasio es...", solucion: { valor: "K", explicacion: "K viene del latín 'Kalium'." }, opcionesFalsas: [{ valor: "P", explicacion: "P es el símbolo del Fósforo." }, { valor: "Po", explicacion: "Po es el símbolo del Polonio." }, { valor: "Pt", explicacion: "Pt es el símbolo del Platino." }] },
                    { texto: "El símbolo del Hierro es...", solucion: { valor: "Fe", explicacion: "Fe viene del latín 'Ferrum'." }, opcionesFalsas: [{ valor: "H", explicacion: "H es el símbolo del Hidrógeno." }, { valor: "He", explicacion: "He es el símbolo del Helio." }, { valor: "F", explicacion: "F es el símbolo del Flúor." }] },
                    { texto: "El símbolo del Plomo es...", solucion: { valor: "Pb", explicacion: "Pb viene del latín 'Plumbum'." }, opcionesFalsas: [{ valor: "P", explicacion: "P es el símbolo del Fósforo." }, { valor: "Pt", explicacion: "Pt es el símbolo del Platino." }, { valor: "Pu", explicacion: "Pu es el símbolo del Plutonio." }] },
                    { texto: "El símbolo del Cobre es...", solucion: { valor: "Cu", explicacion: "Cu viene del latín 'Cuprum'." }, opcionesFalsas: [{ valor: "C", explicacion: "C es el símbolo del Carbono." }, { valor: "Co", explicacion: "Co es el símbolo del Cobalto." }, { valor: "Ca", explicacion: "Ca es el símbolo del Calcio." }] },
                    { texto: "El símbolo del Azufre es...", solucion: { valor: "S", explicacion: "S viene del latín 'Sulphur'." }, opcionesFalsas: [{ valor: "Si", explicacion: "Si es el símbolo del Silicio." }, { valor: "Sn", explicacion: "Sn es el símbolo del Estaño." }, { valor: "Sb", explicacion: "Sb es el símbolo del Antimonio." }] }
                ]
            },
            balanceoReacciones: {
                nombre: "Balanceo de Reacciones",
                juego: "quiz",
                preguntas: [
                    { texto: "En H₂ + O₂ → H₂O, ¿qué coeficiente necesita el H₂?", opciones: ["1", "2", "3"], solucion: "2" },
                    { texto: "En N₂ + H₂ → NH₃, ¿qué coeficiente necesita el NH₃?", opciones: ["1", "2", "3"], solucion: "2" },
                    { texto: "En CH₄ + O₂ → CO₂ + H₂O, ¿qué coeficiente necesita el O₂?", opciones: ["1", "2", "4"], solucion: "2" },
                    { texto: "En K + H₂O → KOH + H₂, ¿qué coeficiente necesita el K?", opciones: ["1", "2", "4"], solucion: "2" },
                    { texto: "En Fe + O₂ → Fe₂O₃, ¿qué coeficiente necesita el Fe?", opciones: ["2", "3", "4"], solucion: "4" },
                    { texto: "En P₄ + O₂ → P₂O₅, ¿qué coeficiente necesita el O₂?", opciones: ["3", "4", "5"], solucion: "5" },
                    { texto: "En Al + HCl → AlCl₃ + H₂, ¿qué coeficiente necesita el HCl?", opciones: ["2", "3", "6"], solucion: "6" },
                    { texto: "En C₃H₈ + O₂ → CO₂ + H₂O, ¿qué coeficiente necesita el O₂?", opciones: ["3", "4", "5"], solucion: "5" },
                    { texto: "En Na + Cl₂ → NaCl, ¿qué coeficiente necesita el Na?", opciones: ["1", "2", "3"], solucion: "2" },
                    { texto: "En Mg + O₂ → MgO, ¿qué coeficiente necesita el MgO?", opciones: ["1", "2", "3"], solucion: "2" }
                ]
            },
            nomenclaturaInorganica: {
                nombre: "Nomenclatura Inorgánica",
                juego: "matchingPairs",
                preguntas: [
                    [
                        { en: "HCl", es: "Ácido clorhídrico" },
                        { en: "H₂SO₄", es: "Ácido sulfúrico" },
                        { en: "NaOH", es: "Hidróxido de sodio" },
                        { en: "NaCl", es: "Cloruro de sodio" },
                        { en: "CO₂", es: "Dióxido de carbono" },
                        { en: "Fe₂O₃", es: "Óxido de hierro (III)" },
                        { en: "NH₃", es: "Amoníaco" },
                        { en: "CaCO₃", es: "Carbonato de calcio" },
                        { en: "HNO₃", es: "Ácido nítrico" },
                        { en: "KOH", es: "Hidróxido de potasio" }
                    ]
                ]
            },
            gruposTablaPeriodica: {
                nombre: "Grupos de la Tabla Periódica",
                juego: "dragAndDropMatch",
                preguntas: [
                    { draggable: "Na (Sodio)", droppable: "Metales alcalinos" },
                    { draggable: "Ca (Calcio)", droppable: "Metales alcalinotérreos" },
                    { draggable: "Fe (Hierro)", droppable: "Metales de transición" },
                    { draggable: "Al (Aluminio)", droppable: "Metales térreos" },
                    { draggable: "C (Carbono)", droppable: "Carbonoideos" },
                    { draggable: "N (Nitrógeno)", droppable: "Nitrogenoideos" },
                    { draggable: "O (Oxígeno)", droppable: "Anfígenos o calcógenos" },
                    { draggable: "F (Flúor)", droppable: "Halógenos" },
                    { draggable: "Ne (Neón)", droppable: "Gases nobles" },
                    { draggable: "U (Uranio)", droppable: "Actínidos" }
                ]
            },
            calculosEstequiometricos: {
                nombre: "Cálculos Estequiométricos",
                juego: "basicOperations",
                preguntas: [
                    { texto: "Masa molar del H₂O (H=1, O=16)", solucion: "18" },
                    { texto: "Masa molar del CO₂ (C=12, O=16)", solucion: "44" },
                    { texto: "Masa molar del NaCl (Na=23, Cl=35.5)", solucion: "58.5" },
                    { texto: "¿Cuántos moles hay en 36g de H₂O?", solucion: "2" },
                    { texto: "¿Cuántos gramos son 3 moles de CO₂?", solucion: "132" },
                    { texto: "Masa molar del CH₄ (C=12, H=1)", solucion: "16" },
                    { texto: "¿Cuántos moles hay en 64g de CH₄?", solucion: "4" },
                    { texto: "Masa molar del H₂SO₄ (H=1, S=32, O=16)", solucion: "98" },
                    { texto: "¿Cuántos gramos son 0.5 moles de H₂SO₄?", solucion: "49" },
                    { texto: "Masa molar del NH₃ (N=14, H=1)", solucion: "17" }
                ]
            },
            conceptosQuimicosError: {
                nombre: "Errores en Conceptos Químicos",
                juego: "findTheError",
                preguntas: [
                    { texto: "Un átomo que gana electrones se convierte en un catión.", error: "catión", solucion: "anión" },
                    { texto: "La combustión es un ejemplo de reacción endotérmica.", error: "endotérmica", solucion: "exotérmica" },
                    { texto: "Los isótopos son átomos con diferente número de protones.", error: "protones", solucion: "neutrones" },
                    { texto: "El enlace iónico implica compartir electrones.", error: "compartir", solucion: "transferir" },
                    { texto: "Un pH de 2 indica una sustancia básica.", error: "básica", solucion: "ácida" },
                    { texto: "En la tabla periódica, los períodos son las columnas verticales.", error: "períodos", solucion: "grupos" },
                    { texto: "El número de Avogadro es el número de átomos en 1 gramo de una sustancia.", error: "gramo", solucion: "mol" },
                    { texto: "La oxidación es la ganancia de electrones.", error: "ganancia", solucion: "pérdida" },
                    { texto: "Los catalizadores aumentan la energía de activación de una reacción.", error: "aumentan", solucion: "disminuyen" },
                    { texto: "El agua es considerada el solvente apolar universal.", error: "apolar", solucion: "polar" }
                ]
            }
            ,
            memoryElementos: {
                nombre: "Memoria de Elementos",
                juego: "memoryMatch",
                preguntas: [
                    { en: "Oro", es: "Au" },
                    { en: "Plata", es: "Ag" },
                    { en: "Hierro", es: "Fe" },
                    { en: "Sodio", es: "Na" },
                    { en: "Potasio", es: "K" },
                    { en: "Mercurio", es: "Hg" },
                    { en: "Cobre", es: "Cu" }
                ]
            },
            quimicaHangman: {
                nombre: "Ahorcado de Elementos",
                juego: "hangman",
                preguntas: [
                    { palabra: "OXIGENO", pista: "Elemento esencial para la respiración, símbolo O." },
                    { palabra: "HIDROGENO", pista: "Elemento más ligero y abundante, símbolo H." },
                    { palabra: "CARBONO", pista: "Base de la vida orgánica, símbolo C." },
                    { palabra: "HELIO", pista: "Gas noble usado para inflar globos, símbolo He." },
                    { palabra: "CALCIO", pista: "Metal alcalinotérreo importante para los huesos, símbolo Ca." }
                ]
            },
            quimicaFill: {
                nombre: "Completar Fórmulas y Conceptos",
                juego: "fillTheWord",
                preguntas: [
                    { texto: "La fórmula del agua es H₂_.", solucion: "O" },
                    { texto: "Un átomo con carga positiva es un ______.", solucion: "CATION" },
                    { texto: "El símbolo químico del Sodio es __.", solucion: "NA" }
                ]
            }
        }
    }
};

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
let nombreDocente = ''; // Nueva variable para guardar el nombre del docente
let infoEstudiante = null; 
let gradoActual = null;
let materiaActual = null;
let temaActual = null;
let preguntaIndex = 0;
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
async function iniciarApp(grado) {
    if (gradoActual) return; // Evitar re-animar si ya está seleccionado
    
    gradoActual = grado;
    gradoSeleccionadoEl.textContent = `${grado}° Grado`;
    pantallaBienvenida.style.display = 'none';
    pantallaPrincipal.style.display = 'block';
    
    if (!pantallaPrincipal.style.display || pantallaPrincipal.style.display === 'none') {
        pantallaBienvenida.style.display = 'none';
        pantallaPrincipal.style.display = 'block';
    }
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
            <button id="btn-volver-a-juegos" class="btn-juego btn-volver">‹ Volver a Juegos</button>
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

    document.getElementById('btn-volver-temas').addEventListener('click', () => {
        if (cronometroIntervalo) clearInterval(cronometroIntervalo);
        mostrarTemas(materiaActual, 'sentenceScramble');
    });
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
             <button id="btn-volver-juegos" class="btn-juego btn-volver">Volver a Juegos</button>
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

    document.getElementById('btn-volver-juegos').addEventListener('click', () => mostrarSeleccionJuego(materiaActual));
    document.getElementById('btn-volver-juegos').addEventListener('click', () => {
        if (cronometroIntervalo) clearInterval(cronometroIntervalo);
        mostrarSeleccionJuego(materiaActual);
    });
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
             <button id="btn-volver-juegos" class="btn-juego btn-volver">Volver a Juegos</button>
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

    document.getElementById('btn-volver-juegos').addEventListener('click', () => mostrarSeleccionJuego(materiaActual));
    document.getElementById('btn-volver-juegos').addEventListener('click', () => {
        if (cronometroIntervalo) clearInterval(cronometroIntervalo);
        mostrarSeleccionJuego(materiaActual);
    });
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
        <div class="quiz-opciones">
            ${opcionesBarajadas.map((op, index) => `
                <button class="btn-quiz-opcion">
                    <span class="opcion-letra">${String.fromCharCode(65 + index)}</span>
                    <span class="opcion-texto">${op}</span>
                </button>`).join('')}
        </div>
        <div class="controles-juego">
             <button id="btn-volver-juegos" class="btn-juego btn-volver">Volver a Juegos</button>
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

    document.getElementById('btn-volver-juegos').addEventListener('click', () => mostrarSeleccionJuego(materiaActual));
    document.getElementById('btn-volver-juegos').addEventListener('click', () => {
        if (cronometroIntervalo) clearInterval(cronometroIntervalo);
        mostrarSeleccionJuego(materiaActual);
    });
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
                <p id="pregunta-juego">Calcula el resultado de: <strong>${pregunta.texto}</strong></p>
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
             <button id="btn-volver-juegos" class="btn-juego btn-volver">Volver a Juegos</button>
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

    document.getElementById('btn-volver-juegos').addEventListener('click', () => mostrarSeleccionJuego(materiaActual));
    document.getElementById('btn-volver-juegos').addEventListener('click', () => {
        if (cronometroIntervalo) clearInterval(cronometroIntervalo);
        mostrarSeleccionJuego(materiaActual);
    });
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
                <p id="pregunta-juego">Resuelve la siguiente ecuación: <strong>${pregunta.texto}</strong></p>
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
            <input type="text" id="respuesta-math" class="input-texto" placeholder="ej: x = 5">
            <p class="input-instruccion">Ingresa solo el número como respuesta.</p>
        </div>
        <div class="controles-juego">
             <button id="btn-volver-juegos" class="btn-juego btn-volver">Volver a Juegos</button>
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

    document.getElementById('btn-volver-juegos').addEventListener('click', () => mostrarSeleccionJuego(materiaActual));
    document.getElementById('btn-volver-juegos').addEventListener('click', () => {
        if (cronometroIntervalo) clearInterval(cronometroIntervalo);
        mostrarSeleccionJuego(materiaActual);
    });
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
                <p id="pregunta-juego">Encuentra el siguiente número en la secuencia: <strong>${pregunta.texto}</strong></p>
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
             <button id="btn-volver-juegos" class="btn-juego btn-volver">Volver a Juegos</button>
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

    document.getElementById('btn-volver-juegos').addEventListener('click', () => mostrarSeleccionJuego(materiaActual));
    document.getElementById('btn-volver-juegos').addEventListener('click', () => {
        if (cronometroIntervalo) clearInterval(cronometroIntervalo);
        mostrarSeleccionJuego(materiaActual);
    });
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
             <button id="btn-volver-juegos" class="btn-juego btn-volver">Volver a Juegos</button>
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
        
        // Limpiar la selección después de un breve retraso para que el usuario vea el feedback
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

    document.getElementById('btn-volver-juegos').addEventListener('click', () => mostrarSeleccionJuego(materiaActual));
    document.getElementById('btn-volver-juegos').addEventListener('click', () => {
        if (cronometroIntervalo) clearInterval(cronometroIntervalo);
        mostrarSeleccionJuego(materiaActual);
    });
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
    const textoInstruccion = (esAscendente ? "Ordena de menor a mayor" : "Ordena de mayor a menor") + " (de arriba hacia abajo)";

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
                <p id="pregunta-juego">${textoInstruccion}</p>
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
        <div class="number-order-container">
            <div class="order-source-column">
                ${numeros.map(n => `<div class="drag-item number-item" draggable="true">${n}</div>`).join('')}
            </div>
            <div class="order-drop-column">
                ${numeros.map(() => `<div class="drop-zone number-drop-zone"></div>`).join('')}
            </div>
        </div>
        <div class="controles-juego">
             <button id="btn-limpiar-orden" class="btn-juego btn-limpiar">Limpiar</button>
             <button id="btn-volver-juegos" class="btn-juego btn-volver">Volver a Juegos</button>
             <button id="btn-verificar" class="btn-juego btn-verificar">Verificar</button>
             <button id="btn-siguiente-pregunta" class="btn-juego btn-siguiente">Siguiente</button>
        </div>
        <div id="feedback-juego"></div>
    `;

    let draggedItem = null;
    intentosRestantes = 3;

    document.querySelectorAll('.drag-item').forEach(item => {
        item.addEventListener('dragstart', e => {
            draggedItem = e.target;
            setTimeout(() => e.target.classList.add('dragging'), 0);
        });
        item.addEventListener('dragend', () => {
            draggedItem.classList.remove('dragging');
            draggedItem = null;
        });
    });

    document.querySelectorAll('.drop-zone').forEach(zone => {
        zone.addEventListener('dragover', e => e.preventDefault());
        zone.addEventListener('drop', e => {
            e.preventDefault();
            if (draggedItem) {
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
    });

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
                document.querySelectorAll('.drag-item, .drop-zone').forEach(el => el.style.pointerEvents = 'none');
            }
        }
    });

    document.getElementById('btn-limpiar-orden').addEventListener('click', () => {
        // Vuelve a cargar la pregunta actual para reiniciarla.
        cargarPreguntaNumberOrder();
    });
    
    document.getElementById('btn-volver-juegos').addEventListener('click', () => mostrarSeleccionJuego(materiaActual));
    document.getElementById('btn-volver-juegos').addEventListener('click', () => {
        if (cronometroIntervalo) clearInterval(cronometroIntervalo);
        mostrarSeleccionJuego(materiaActual);
    });
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
        <div class="controles-juego">
             <button id="btn-volver-juegos" class="btn-juego btn-volver">Volver a Juegos</button>
             <button id="btn-girar-ruleta" class="btn-juego btn-verificar">Girar Ruleta</button>
             <button id="btn-vf-verdadero" class="btn-juego btn-verificar" style="display: none;">Verdadero</button>
             <button id="btn-vf-falso" class="btn-juego btn-limpiar" style="display: none;">Falso</button>
             <button id="btn-siguiente-pregunta" class="btn-juego btn-siguiente" style="display: none;">Siguiente</button>
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
            document.getElementById('btn-girar-ruleta').disabled = true;
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

    document.getElementById('btn-volver-juegos').addEventListener('click', () => mostrarSeleccionJuego(materiaActual));
    document.getElementById('btn-volver-juegos').addEventListener('click', () => {
        if (cronometroIntervalo) clearInterval(cronometroIntervalo);
        mostrarSeleccionJuego(materiaActual);
    });

    document.getElementById('btn-siguiente-pregunta').addEventListener('click', () => {
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
             <button id="btn-volver-juegos" class="btn-juego btn-volver">Volver a Juegos</button>
             <button id="btn-siguiente-pregunta" class="btn-juego btn-siguiente" style="display: none;">Finalizar</button>
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
        if (cronometroIntervalo) clearInterval(cronometroIntervalo);
        mostrarSeleccionJuego(materiaActual);
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
             <button id="btn-volver-juegos" class="btn-juego btn-volver">Volver a Juegos</button>
             <button id="btn-siguiente-pregunta" class="btn-juego btn-siguiente" style="display: none;">Siguiente</button>
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

    document.getElementById('btn-volver-juegos').addEventListener('click', () => mostrarSeleccionJuego(materiaActual));
    document.getElementById('btn-volver-juegos').addEventListener('click', () => {
        if (cronometroIntervalo) clearInterval(cronometroIntervalo);
        mostrarSeleccionJuego(materiaActual);
    });

    document.getElementById('btn-siguiente-pregunta').addEventListener('click', () => {
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
        <div class="pregunta-header">
            <div class="pregunta-info">
                <div id="pregunta-juego" class="fill-the-word-container">${textoPreguntaHtml}</div>
            </div>
            <div class="game-info-panel">
                <div id="cronometro-juego" class="cronometro-juego" title="Tiempo transcurrido">⏱️ 00:00</div>
            </div>
        </div>
        <div class="progreso-juego">
            <span id="texto-progreso">Pregunta ${preguntaIndex + 1} de ${totalPreguntas}</span>
            <div class="barra-progreso"><div class="barra-progreso-relleno" style="width: ${((preguntaIndex + 1) / totalPreguntas) * 100}%;"></div></div>
        </div>
        <div class="controles-juego">
             <button id="btn-volver-juegos" class="btn-juego btn-volver">Volver a Juegos</button>
             <button id="btn-verificar" class="btn-juego btn-verificar">Verificar</button>
             <button id="btn-siguiente-pregunta" class="btn-juego btn-siguiente" style="display: none;">Siguiente</button>
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

        // Si se presiona Enter y no se han llenado todas las casillas, no hacer nada.
        if (isEnter && respuestaUsuario.length !== solucion.length) {
            return;
        }

        if (respuestaUsuario === solucion) {
            feedbackEl.textContent = "¡Correcto!";
            feedbackEl.style.color = '#81C784';
            puntuacionActual++;
            inputs.forEach(input => input.classList.add('correct'));
        } else {
            feedbackEl.innerHTML = `Incorrecto. La respuesta correcta era <strong>${solucion}</strong>.`;
            feedbackEl.style.color = '#E57373';
            inputs.forEach((input, index) => {
                if (input.value === solucion[index]) {
                    input.classList.add('correct');
                } else {
                    input.classList.add('incorrect');
                }
            });
            preguntasIncorrectas.push(pregunta);
        }
        inputs.forEach(input => input.disabled = true);
        document.getElementById('btn-verificar').style.display = 'none';
        document.getElementById('btn-siguiente-pregunta').style.display = 'inline-block';
    }

    document.getElementById('btn-verificar').addEventListener('click', verificarPalabra);
    // Añadir listener de Enter al contenedor de los inputs
    document.querySelector('.fill-inputs-container').addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault(); // Evita que el formulario se envíe si lo hubiera
            verificarPalabra(true);
        }
    });

    document.getElementById('btn-volver-juegos').addEventListener('click', () => mostrarSeleccionJuego(materiaActual));
    document.getElementById('btn-volver-juegos').addEventListener('click', () => {
        if (cronometroIntervalo) clearInterval(cronometroIntervalo);
        mostrarSeleccionJuego(materiaActual);
    });

    document.getElementById('btn-siguiente-pregunta').addEventListener('click', () => {
        preguntaIndex++;
        if (preguntaIndex < totalPreguntas) {
            cargarPreguntaFillTheWord();
        } else {
            mostrarResultados();
        }
    });
}

/** Guarda los resultados del juego en Supabase. */
function guardarResultadosEnLocalStorage(puntuacion, total, tiempo, tipoJuego, errores) {
    if (esDocente || !infoEstudiante) {
        console.log("No es un estudiante o no ha iniciado sesión. No se guardan resultados.");
        return;
    }

    const resultados = JSON.parse(localStorage.getItem('gameLearnResults')) || [];
    const tema = gameData[materiaActual].temas[temaActual];
    const nuevoResultado = {
        id: Date.now(),
        nombreEstudiante: infoEstudiante.nombre,
        grado: gradoActual,
        materia: gameData[materiaActual].nombre,
        tema: gameData[materiaActual].temas[temaActual].nombre,
        tipoJuego: tipoJuego, // Guardamos el tipo de juego
        puntuacion: `${puntuacion}/${total}`,
        porcentaje: total > 0 ? Math.round((puntuacion / total) * 100) : 0,
        tiempo: tiempo,
        fecha: new Date().toLocaleString('es-CO'),
        preguntas: tema.preguntas, // Guardamos todas las preguntas del tema
        errores: errores // Guardamos los errores específicos
    };

    resultados.push(nuevoResultado);
    localStorage.setItem('gameLearnResults', JSON.stringify(resultados));
    console.log("Resultado guardado en localStorage:", nuevoResultado);
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
    guardarResultadosEnLocalStorage(puntuacionActual, totalPreguntas, tiempoFormateado, tipoJuegoActual, preguntasIncorrectas);

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
        // Si todo lo que ha puesto es correcto pero la frase está incompleta, damos pista sobre la siguiente palabra.
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
document.addEventListener('DOMContentLoaded', () => {
    // Iniciar la animación del splash screen
    showSplashScreen();

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

    // Deshabilitar botones de rol inicialmente ya que la casilla no está marcada
    btnRolEstudiante.disabled = true;
    btnRolDocente.disabled = true;

    checkboxTerminosRol.addEventListener('change', () => {
        const aceptado = checkboxTerminosRol.checked;
        btnRolEstudiante.disabled = !aceptado;
        btnRolDocente.disabled = !aceptado;
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
            btnRolDocente.disabled = false;
        }
    });

    cargarTemasDesdeLocalStorage();

    // Lógica de selección de rol y grado
    const animDuration = 400;

    btnRolEstudiante.addEventListener('click', () => {
        esDocente = false;
        esAdmin = false;
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

            pantallaBienvenida.style.display = 'flex';
            pantallaBienvenida.classList.remove('anim-out');
            seleccionRolEl.style.display = 'block'; // Muestra la selección de rol
            seleccionRolEl.classList.add('anim-in'); // Anima la entrada
            aceptacionTerminosRolEl.style.display = 'block'; // Asegura que los términos estén visibles
            loginEstudianteEl.style.display = 'none';
            loginDocenteEl.style.display = 'none';
            aceptacionTerminosRolEl.classList.add('anim-in'); // Anima la entrada de los términos
            seleccionGradoContainerEl.style.display = 'none';
        }, animDuration);
    });

    // Asignar evento a los botones de grado
    document.querySelectorAll('.btn-grado').forEach(boton => {
        boton.addEventListener('click', () => {
            if (boton.dataset.grado === '9') {
                iniciarApp(boton.dataset.grado);
            } else {
                alert('Próximamente');
            }
        });
    });

    // Botón para cambiar de grado
    btnCambiarGrado.addEventListener('click', () => {
        infoJuegoActualEl.style.display = 'none'; // Ocultar la barra de info
        pantallaPrincipal.classList.add('anim-out');
        setTimeout(() => {
            pantallaPrincipal.style.display = 'none';
            pantallaPrincipal.classList.remove('anim-out');
            gradoActual = null;

            pantallaBienvenida.style.display = 'flex';
            pantallaBienvenida.classList.remove('anim-out');
            seleccionRolEl.style.display = 'none'; // Oculta rol
            seleccionGradoContainerEl.style.display = 'block'; // Muestra directamente la selección de grado
            seleccionGradoContainerEl.classList.add('anim-in'); // Anima la entrada
        }, animDuration);
    });

    // Botón para cambiar de materia
    const btnCambiarMateria = document.getElementById('btn-cambiar-materia');
    btnCambiarMateria.addEventListener('click', mostrarSeleccionMateria);

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

    // Delegación de eventos para botones dinámicos en el formulario de creación
    pantallaCrearTemaEl.addEventListener('click', (e) => {
        if (e.target.classList.contains('btn-agregar-opcion-falsa')) {
            agregarCampoOpcionFalsa(e.target.dataset.pregunta);
        }
    });
});

/** Carga los temas personalizados desde localStorage al iniciar. */
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
function mostrarPanelDocente() {
    panelDocenteEl.style.display = 'block';
    infoJuegoActualEl.style.display = 'none';
    const resultados = JSON.parse(localStorage.getItem('gameLearnResults')) || [];
    
    const container = document.getElementById('tabla-resultados-container');
    const filtroNombre = document.getElementById('filtro-nombre');
    const filtroMateria = document.getElementById('filtro-materia');
    const filtroJuego = document.getElementById('filtro-juego');
    const filtroGrado = document.getElementById('filtro-grado');
    const btnLimpiar = document.getElementById('btn-limpiar-filtros');

    // --- Poblar filtros ---
    // Materias
    filtroMateria.innerHTML = '<option value="">Todas las Materias</option>';
    Object.values(gameData).forEach(m => {
        filtroMateria.innerHTML += `<option value="${m.nombre}">${m.nombre}</option>`;
    });

    // Tipos de Juego
    filtroJuego.innerHTML = '<option value="">Todos los Juegos</option>';
    Object.entries(JUEGOS_DISPONIBLES).forEach(([clave, juego]) => {
        filtroJuego.innerHTML += `<option value="${clave}">${juego.nombre}</option>`;
    });

    // Grados
    filtroGrado.innerHTML = '<option value="">Todos los Grados</option>';
    const gradosDisponibles = ['6', '7', '8', '9', '10', '11'];
    gradosDisponibles.forEach(g => {
        filtroGrado.innerHTML += `<option value="${g}">${g}°</option>`;
    });

    // --- Función para renderizar la tabla ---
    function renderTabla(datos) {
        if (datos.length === 0) {
            container.innerHTML = '<p style="text-align: center; padding: 20px;">No se encontraron resultados con los filtros actuales.</p>';
            return;
        }

        // Agrupar por estudiante
        const resultadosAgrupados = datos.reduce((acc, res) => {
            if (!acc[res.nombreEstudiante]) {
                acc[res.nombreEstudiante] = [];
            }
            acc[res.nombreEstudiante].push(res);
            return acc;
        }, {});

        let tablaHtml = '';

        // Ordenar estudiantes alfabéticamente
        const estudiantesOrdenados = Object.keys(resultadosAgrupados).sort((a, b) => a.localeCompare(b));

        for (const nombreEstudiante of estudiantesOrdenados) {
            const resultadosEstudiante = resultadosAgrupados[nombreEstudiante];
            const gradoEstudiante = resultadosEstudiante[0].grado; // Obtenemos el grado del primer resultado
            
            tablaHtml += `
                <div class="nombre-estudiante-header">
                    <h3 class="nombre-estudiante-tabla">${nombreEstudiante} - ${gradoEstudiante}° Grado</h3>
                    <div class="student-controls">
                        <button class="btn-borrar-resultados-estudiante" data-nombre-estudiante="${nombreEstudiante}" title="Borrar todos los resultados de este estudiante">🗑️ Borrar Todo</button>
                        <button class="btn-toggle-results" data-target-id="results-content-${nombreEstudiante.replace(/\s/g, '-')}" title="Mostrar/Ocultar resultados">+</button>
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
            resultadosEstudiante.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));

            for (const res of resultadosEstudiante) {
                let clasePuntuacion = 'puntuacion-media';
                if (res.porcentaje >= 80) clasePuntuacion = 'puntuacion-alta';
                else if (res.porcentaje < 50) clasePuntuacion = 'puntuacion-baja';

                tablaHtml += `
                    <tr class="fila-resultado" data-resultado-id="${res.id}" title="Ver detalles">
                        <td>${res.materia}</td>
                        <td>${res.tema}</td>
                        <td>${JUEGOS_DISPONIBLES[res.tipoJuego]?.nombre || res.tipoJuego}</td>
                        <td class="${clasePuntuacion}">${res.puntuacion} (${res.porcentaje}%)</td>
                        <td>${res.tiempo}</td>
                        <td>${res.fecha}</td>
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

    // --- Lógica de filtrado ---
    function aplicarFiltros() {
        const textoNombre = filtroNombre.value.toLowerCase();
        const materiaSeleccionada = filtroMateria.value;
        const juegoSeleccionado = filtroJuego.value;
        const gradoSeleccionado = filtroGrado.value;

        let resultadosFiltrados = resultados;

        if (textoNombre) {
            resultadosFiltrados = resultadosFiltrados.filter(res => 
                res.nombreEstudiante.toLowerCase().includes(textoNombre)
            );
        }
        if (materiaSeleccionada) {
            resultadosFiltrados = resultadosFiltrados.filter(res => res.materia === materiaSeleccionada);
        }
        if (juegoSeleccionado) {
            resultadosFiltrados = resultadosFiltrados.filter(res => res.tipoJuego === juegoSeleccionado);
        }
        if (gradoSeleccionado) {
            resultadosFiltrados = resultadosFiltrados.filter(res => res.grado === gradoSeleccionado);
        }

        renderTabla(resultadosFiltrados);
    }

    // --- Event Listeners ---
    filtroNombre.addEventListener('input', aplicarFiltros);
    filtroMateria.addEventListener('change', aplicarFiltros);
    filtroJuego.addEventListener('change', aplicarFiltros);
    filtroGrado.addEventListener('change', aplicarFiltros);
    // Añadir/quitar clase para estilo de placeholder en selects
    [filtroMateria, filtroJuego, filtroGrado].forEach(select => {
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
        [filtroMateria, filtroJuego, filtroGrado].forEach(s => s.classList.add('filtro-default'));
        aplicarFiltros(); // Aplicamos los filtros (ahora vacíos) para mostrar todo
    });

    // Render inicial
    renderTabla(resultados);

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
    
    function borrarResultadosDeEstudiante(nombreEstudiante) {
        let todosLosResultados = JSON.parse(localStorage.getItem('gameLearnResults')) || [];
        const nuevosResultados = todosLosResultados.filter(res => res.nombreEstudiante !== nombreEstudiante);
        localStorage.setItem('gameLearnResults', JSON.stringify(nuevosResultados));
        mostrarPanelDocente();
    }

    function borrarResultadoIndividual(id) {
        let todosLosResultados = JSON.parse(localStorage.getItem('gameLearnResults')) || [];
        const nuevosResultados = todosLosResultados.filter(res => res.id !== id);
        localStorage.setItem('gameLearnResults', JSON.stringify(nuevosResultados));
        // Volvemos a llamar a la función principal para recargar y renderizar todo con los datos actualizados.
        mostrarPanelDocente();
    }
}

/** Muestra un modal con los detalles de un resultado específico. */
function mostrarDetalleResultado(resultadoId) {
    const todosLosResultados = JSON.parse(localStorage.getItem('gameLearnResults')) || [];
    const resultado = todosLosResultados.find(res => res.id === resultadoId);

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
            <p><strong>Estudiante:</strong> ${resultado.nombreEstudiante}</p>
            <p><strong>Puntuación:</strong> ${resultado.puntuacion} (${resultado.porcentaje}%)</p>
            <p><strong>Juego:</strong> ${JUEGOS_DISPONIBLES[resultado.tipoJuego]?.nombre}</p>
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
