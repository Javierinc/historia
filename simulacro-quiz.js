const quizData = [
    {
        question: "¿Qué conquistador de América siguió esta ruta?",
        options: ["Hernán Cortés", "Diego de Almagro", "Pedro de Valdivia", "Francisco Pizarro"],
        correct: 1,
        explanation: "Diego de Almagro fue el conquistador que siguió esta ruta. La imagen muestra el mapa de su expedición hacia Chile, donde se puede ver la ruta de ida y regreso que realizó durante su viaje de exploración.",
        image: "assets/images/almagro.png"
    },
    {
        question: "Un indígena trabajaba durante largos periodos a cambio de cuidado y un salario mínimo. ¿Este sistema se denomina?",
        options: ["La encomienda", "Esclavitud", "La mita", "Repartimiento"],
        correct: 0,
        explanation: "La encomienda era un sistema donde los indígenas trabajaban para un español a cambio de protección y evangelización, aunque en la práctica se convirtió en una forma de trabajo forzado."
    },
    {
        question: "Sistema de trabajo que se aplicaba principalmente a las personas africanas era:",
        options: ["La encomienda", "Esclavitud", "La mita", "Repartimiento"],
        correct: 1,
        explanation: "La esclavitud era el sistema aplicado principalmente a las personas africanas, quienes eran consideradas propiedad y no tenían derechos."
    },
    {
        question: "La Corona española impuso una estricta dependencia económica con sus colonias. Solo España podía vender sus productos a América y esta última sus materias primas a España. Este sistema de intercambio exclusivo recibió el nombre de:",
        options: ["Casa de Contratación", "Mercantilismo", "Flotas y galeones", "Monopolio comercial"],
        correct: 3,
        explanation: "El monopolio comercial era el sistema que establecía que solo España podía comerciar con sus colonias, controlando todo el intercambio económico."
    },
    {
        question: "¿Cuál era la máxima institución en América a cargo de la justicia?",
        options: ["Virrey", "Real Audiencia", "Consejo de Indias", "Casa de Contratación"],
        correct: 1,
        explanation: "La Real Audiencia era la máxima institución judicial en América, encargada de administrar justicia y supervisar el gobierno colonial."
    },
    {
        question: "Al igual que las municipalidades de hoy día... se ocupaban del aseo y ornato de las ciudades. Además velaban por la instrucción primaria y disponían las grandes fiestas públicas. Los integrantes eran miembros de los más altos círculos sociales ... se suponía que representaban a toda la comunidad y que velaban por su interés y bienestar. La institución colonial equivalente a las municipalidades de hoy a la cual se refiere el texto anterior, se conoce como:",
        options: ["Real Audiencia", "Consulado", "Cabildo", "Consejo"],
        correct: 2,
        explanation: "El Cabildo era la institución colonial equivalente a las municipalidades actuales, encargada de la administración local y el gobierno de las ciudades."
    },
    {
        question: "¿En qué consiste una empresa de conquista?",
        options: ["Es una empresa donde se vendía ropa y útiles de aseo", "Redes de financiamiento, reunir al ejército y capitular derechos y deberes de la rey y los conquistadores", "Adquirir tierras y recursos naturales para sustentar la vida de las personas", "Todas las anteriores"],
        correct: 1,
        explanation: "Una empresa de conquista consistía en organizar el financiamiento, reunir el ejército y establecer acuerdos (capitulaciones) entre la Corona y los conquistadores."
    },
    {
        question: "¿Qué motivaba a los conquistadores?",
        options: ["Poder vivir en Chile ya que es un país muy bonito", "Búsqueda de un mejor futuro económico y convertirse en nobles", "Obtener fama y reconocimiento y convertir a los indígenas en católicos", "B y C son correctas"],
        correct: 3,
        explanation: "Los conquistadores se motivaban tanto por la búsqueda de riquezas y ascenso social como por obtener fama, reconocimiento y la evangelización de los indígenas."
    },
    {
        question: "¿Cómo crees que se complementaban los intereses de los conquistadores y la Corona española?",
        options: ["En que ambos vivían en España", "Ambos se verían beneficiados ya que ambos obtendrían riquezas del proceso de conquista", "Solo la Corona española obtuvo beneficios de el proceso de conquista", "No se complementaron por que no llegaron a acuerdos"],
        correct: 1,
        explanation: "Los intereses se complementaban porque tanto los conquistadores como la Corona obtenían beneficios: los primeros riquezas y títulos, y la Corona nuevos territorios y recursos."
    },
    {
        question: "Según lo estudiado el periodo colonial, ¿Qué entiendes por el sistema de encomienda?",
        options: ["La institución a cargo de regular el comercio colonial", "La asignación de un grupo de indígenas al servicio de un español", "La forma de esclavizar a los mapuches capturados durante la guerra", "El territorio escogido para la preservación cultural de los pueblos originarios"],
        correct: 1,
        explanation: "La encomienda consistía en la asignación de un grupo de indígenas a un español, quien debía protegerlos y evangelizarlos a cambio de su trabajo."
    },
    {
        question: "¿Qué entiendes por el sistema de monopolio comercial impuesto por España durante la colonia?",
        options: ["El comercio interior y exterior era organizado y controlado por la corona", "Las colonias americanas podían comercializar con los países que ellos estimaban convenientes", "Las colonias solo podían comercializar productos agrícolas", "Las colonias Españolas tenían prohibido la comercialización"],
        correct: 0,
        explanation: "El monopolio comercial significaba que toda la actividad comercial, tanto interior como exterior, era controlada y organizada exclusivamente por la Corona española."
    },
    {
        question: "¿Cuál es un elemento religioso que permite explicar la relativa rapidez de la conquista de América por los españoles?",
        options: ["La cantidad de armas que disponían los españoles", "Crisis interna de los indígenas que debilitaba el poder del emperador", "La creencia de que los españoles eran dioses que habían prometido volver", "Enfermedades como la viruela que se propagaron en la población indígena"],
        correct: 2,
        explanation: "La creencia de que los españoles eran dioses que habían prometido volver fue un factor religioso que facilitó la conquista, especialmente en el caso de los aztecas."
    },
    {
        question: "Motivaciones del conquistador: Al pasar al nuevo continente buscaban una riqueza fácil que les permitiera mejorar de situación. Los tesoros que brindaron algunas de las regiones estimularon las ambiciones. Muchos vinieron a América pensando que el oro, las piedras preciosas, las perlas y otras riquezas serían logrados con rapidez y podrían regresar a España como personajes de fortuna a ocupar una posición holgada y de respeto. Según la fuente, ¿qué buscaban los españoles en América?",
        options: ["Ascender socialmente", "Evangelizar a los pueblos indígenas", "Incorporar nuevos territorios a la Corona", "Aumentar la cantidad de fieles para la Iglesia"],
        correct: 0,
        explanation: "Según el texto, los españoles buscaban principalmente ascender socialmente, mejorar su situación económica y regresar a España como personajes de fortuna."
    },
    {
        question: "En América, como en España, la Iglesia estuvo vinculada al papado y a la monarquía. Los unía el Derecho a Patronato, según el cual los reyes, por ejemplo, proponían a Roma a los eclesiásticos que debían ocupar altos cargos. En Chile colonial la base de la organización eclesiástica eran los obispados de Santiago y Concepción. Las principales órdenes que llegaron al país fueron: los mercedarios, franciscanos y dominicos, agustinos y jesuitas. El papel fundamental de la Iglesia en América estaba centrado en la evangelización de los naturales. De acuerdo a la fuente, ¿cuál fue el rol de la Iglesia en los territorios conquistados?",
        options: ["Evangelizar a los indígenas", "Organizar los territorios conquistados", "Nombrar a las autoridades regionales", "Administrar los recursos en los nuevos territorios"],
        correct: 0,
        explanation: "Según la fuente, el papel fundamental de la Iglesia en América estaba centrado en la evangelización de los naturales (indígenas)."
    },
    {
        question: "¿De qué manera el actuar de la Iglesia Católica en América estuvo normado?",
        options: ["Mediante capitulaciones", "Mediante el vínculo de patronato", "Por las leyes emitidas con el Consejo de Indias", "Por instituciones como el Cabildo y la Real Audiencia"],
        correct: 1,
        explanation: "El actuar de la Iglesia Católica en América estuvo normado mediante el vínculo de patronato, que establecía la relación entre la Iglesia y la monarquía española."
    },
    {
        question: "Con el fin de dar cumplimiento a la política económica, España dispuso que las colonias solo mantuvieran relaciones comerciales con ella (…) Mediante ese sistema se procuraba impedir que los extranjeros se inmiscuyeran en el comercio. ¿A qué concepto hace referencia el texto?",
        options: ["Mita", "Encomienda", "Monopolio comercial", "Vínculo de patronato"],
        correct: 2,
        explanation: "El texto hace referencia al monopolio comercial, que establecía que las colonias solo podían comerciar con España, excluyendo a otros países."
    },
    {
        question: "¿A qué zona natural corresponde la siguiente descripción? Comprende el área ubicada entre el río Copiapó y el río Aconcagua. En esta zona las macroformas del relieve se caracterizan por la presencia de cordones y valles transversales.",
        options: ["Zona Norte Grande", "Zona Norte Chico", "Zona Central", "Zona Austral"],
        correct: 1,
        explanation: "La descripción corresponde a la Zona Norte Chico, que se extiende entre el río Copiapó y el río Aconcagua, caracterizada por cordones y valles transversales."
    },
    {
        question: "Observa el perfil topográfico del Norte Grande y responde: ¿Cuál es una característica de la cordillera de la Costa en la Zona Norte Grande?",
        options: ["Pierde altura y es cortada por ríos.", "Cortada por los valles transversales.", "Aparece el volcanismo y desciende en altura.", "Cae abruptamente al mar formando el farellón costero."],
        correct: 3,
        explanation: "Según el perfil topográfico, la cordillera de la Costa en la Zona Norte Grande cae abruptamente al mar formando el farellón costero, como se puede observar en el extremo izquierdo del perfil.",
        image: "assets/images/perfilnorte.png"
    },
    {
        question: "Según el perfil topográfico del Norte Grande, ¿cuál es una característica de la cordillera de los Andes en la Zona Norte Grande de Chile?",
        options: ["Está cortada por cordones transversales.", "Allí se ubica el desierto más árido del mundo.", "Presenta una meseta donde se ubica el Altiplano.", "Presenta extensiones de terreno árido llamado pampas"],
        correct: 2,
        explanation: "Según el perfil topográfico, la cordillera de los Andes en la Zona Norte Grande presenta una meseta donde se ubica el Altiplano, como se puede observar en el extremo derecho del perfil.",
        image: "assets/images/perfilnorte.png"
    },
    {
        question: "¿Qué característica del relieve predomina en la Zona Norte Chico?",
        options: ["Las Planicies Litorales son angostas y elevadas.", "La Depresión Intermedia se transforma en un gran valle fluvial.", "La Cordillera de la Costa y la Depresión Intermedia casi desaparecen formando Valles Transversales.", "La Cordillera de los Andes es baja y con numerosos volcanes."],
        correct: 2,
        explanation: "En la Zona Norte Chico, la Cordillera de la Costa y la Depresión Intermedia casi desaparecen formando Valles Transversales, como se puede observar en la imagen.",
        image: "assets/images/nortechico.png"
    },
    {
        question: "¿Cuál es una característica destacada del relieve en la Zona Central de Chile?",
        options: ["No se pueden distinguir las macroformas del relieve.", "Se observan claramente las cuatro macroformas del relieve.", "La Cordillera de los Andes desaparece.", "Las Planicies Litorales son inexistentes."],
        correct: 1,
        explanation: "En la Zona Central se observan claramente las cuatro macroformas del relieve: Planicies Litorales, Cordillera de la Costa, Depresión Intermedia y Cordillera de los Andes, como se muestra en la imagen.",
        image: "assets/images/zonacentral.png"
    },
    {
        question: "¿Qué ocurre con la Depresión Intermedia en la Zona Sur?",
        options: ["Está completamente ocupada por montañas.", "Es interrumpida por lagos que la cortan continuamente.", "Desaparece por completo.", "Se transforma en una planicie costera."],
        correct: 1,
        explanation: "En la Zona Sur, la Depresión Intermedia es interrumpida por lagos que la cortan continuamente, como se puede observar en la imagen del relieve de esta zona.",
        image: "assets/images/zonasur.png"
    },
    {
        question: "¿Cuál es una característica del relieve en la Zona Austral?",
        options: ["Las cuatro macroformas del relieve se presentan de forma clara.", "La Cordillera de los Andes es alta y continua.", "El relieve ha sido erosionado por glaciares, y predominan formas desgastadas.", "La Depresión Intermedia se transforma en una cadena volcánica."],
        correct: 2,
        explanation: "En la Zona Austral, el relieve ha sido erosionado por glaciares, y predominan formas desgastadas, como se puede observar en la imagen de esta zona geográfica.",
        image: "assets/images/zonaaustral.png"
    }
];

const questionWrapper = document.getElementById('question-wrapper');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const feedbackContainer = document.getElementById('feedback-container');
const checkAnswerBtn = document.getElementById('check-answer-btn');
const nextQuestionBtn = document.getElementById('next-question-btn');
const scoreContainer = document.getElementById('score-container');
const resultsContainer = document.getElementById('results-container');
const finalScore = document.getElementById('final-score');
const restartQuizBtn = document.getElementById('restart-quiz-btn');

let currentQuestionIndex = 0;
let score = 0;
let selectedOption = null;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    resultsContainer.style.display = 'none';
    questionWrapper.style.display = 'block';
    scoreContainer.textContent = `Progreso: ${score} de ${quizData.length} preguntas`;
    loadQuestion();
}

function loadQuestion() {
    selectedOption = null;
    feedbackContainer.style.display = 'none';
    checkAnswerBtn.style.display = 'inline-block';
    nextQuestionBtn.style.display = 'none';

    const currentQuestion = quizData[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;
    optionsContainer.innerHTML = '';

    // Mostrar imagen si existe
    const existingImage = document.getElementById('question-image');
    if (existingImage) {
        existingImage.remove();
    }
    
    if (currentQuestion.image) {
        const imageContainer = document.createElement('div');
        imageContainer.className = 'mb-6 text-center';
        imageContainer.id = 'question-image';
        
        const img = document.createElement('img');
        img.src = currentQuestion.image;
        img.alt = 'Imagen de referencia para la pregunta';
        img.className = 'max-w-full h-auto rounded-lg shadow-md mx-auto';
        img.style.maxHeight = '400px';
        
        imageContainer.appendChild(img);
        questionText.parentNode.insertBefore(imageContainer, questionText.nextSibling);
    }

    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.classList.add('option-btn', 'p-4', 'border-2', 'border-blue-300', 'rounded-lg', 'text-left', 'hover:bg-blue-100', 'transition-colors');
        button.dataset.index = index;
        button.addEventListener('click', () => {
            if (selectedOption !== null) {
                optionsContainer.children[selectedOption].classList.remove('selected', 'bg-blue-200', 'border-blue-500');
            }
            selectedOption = index;
            button.classList.add('selected', 'bg-blue-200', 'border-blue-500');
        });
        optionsContainer.appendChild(button);
    });
}

checkAnswerBtn.addEventListener('click', () => {
    if (selectedOption === null) {
        alert('Por favor, selecciona una respuesta para continuar.');
        return;
    }

    const currentQuestion = quizData[currentQuestionIndex];
    const correctOptionIndex = currentQuestion.correct;
    const optionButtons = optionsContainer.children;
    
    // Deshabilitar todas las opciones
    for(let btn of optionButtons) {
        btn.disabled = true;
        btn.classList.remove('hover:bg-blue-100');
    }

    const selectedButton = optionButtons[selectedOption];
    const correctButton = optionButtons[correctOptionIndex];

    if (selectedOption === correctOptionIndex) {
        score++;
        selectedButton.classList.remove('bg-blue-200');
        selectedButton.classList.add('bg-emerald-100', 'border-emerald-500', 'text-emerald-800');
        
        feedbackContainer.innerHTML = `
            <div class="bg-emerald-50 border-l-4 border-emerald-500 p-4 rounded-lg">
                <p class="text-emerald-800 font-semibold">¡Excelente respuesta! 🌟</p>
                <p class="text-sm mt-2 text-gray-700">${currentQuestion.explanation}</p>
                <p class="text-sm mt-2 text-emerald-600">Sigue así, ¡vas muy bien!</p>
            </div>
        `;
    } else {
        selectedButton.classList.remove('bg-blue-200');
        selectedButton.classList.add('bg-amber-50', 'border-amber-300', 'text-amber-800');
        correctButton.classList.add('bg-emerald-100', 'border-emerald-500', 'text-emerald-800');
        
        feedbackContainer.innerHTML = `
            <div class="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-lg">
                <p class="text-amber-800 font-semibold">¡Buen intento! 💡</p>
                <p class="text-sm mt-2 text-gray-700">La respuesta correcta era: "${currentQuestion.options[correctOptionIndex]}"</p>
                <p class="text-sm mt-2 text-gray-700">${currentQuestion.explanation}</p>
                <p class="text-sm mt-2 text-amber-600">¡No te desanimes! Cada pregunta es una oportunidad para aprender algo nuevo.</p>
            </div>
        `;
    }

    scoreContainer.textContent = `Progreso: ${score} de ${quizData.length} preguntas`;
    feedbackContainer.style.display = 'block';
    checkAnswerBtn.style.display = 'none';
    nextQuestionBtn.style.display = 'inline-block';
});

nextQuestionBtn.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        showResults();
    }
});

function showResults() {
    questionWrapper.style.display = 'none';
    resultsContainer.style.display = 'block';
    
    const percentage = (score / quizData.length) * 100;
    let message = '';
    
    if (percentage === 100) {
        message = '¡Felicitaciones! 🎉 Has demostrado un excelente conocimiento en este simulacro.';
    } else if (percentage >= 80) {
        message = '¡Muy buen trabajo! 🌟 Tienes un sólido entendimiento de los temas evaluados.';
    } else if (percentage >= 60) {
        message = '¡Buen esfuerzo! 💪 Has aprendido bastante sobre los temas del simulacro.';
    } else {
        message = '¡Gracias por participar! 📚 Cada intento es una oportunidad para aprender más.';
    }

    finalScore.innerHTML = `
        <p class="mb-4">Obtuviste ${score} de ${quizData.length} puntos</p>
        <p class="text-gray-700">${message}</p>
    `;
}

restartQuizBtn.addEventListener('click', startQuiz);

document.addEventListener('DOMContentLoaded', () => {
    startQuiz();
}); 