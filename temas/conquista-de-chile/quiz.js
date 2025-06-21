const quizData = [
    {
        question: "¿Quién fue el primer explorador español que lideró una expedición a Chile?",
        options: ["Pedro de Valdivia", "Cristóbal Colón", "Diego de Almagro", "Inés de Suárez"],
        correct: 2,
        explanation: "Diego de Almagro fue el primer conquistador español en intentar la conquista de Chile en 1535, aunque su expedición fracasó."
    },
    {
        question: "¿Cuál fue la principal motivación de Diego de Almagro para viajar a Chile?",
        options: ["Buscar una nueva ruta a Asia.", "Encontrar grandes riquezas y oro.", "Establecer una nueva capital.", "Convertir a los indígenas al cristianismo."],
        correct: 1,
        explanation: "Almagro escuchó rumores de que en Chile había mucho más oro que en Perú, lo que motivó su costosa expedición."
    },
    {
        question: "¿Quién fundó la ciudad de Santiago de la Nueva Extremadura, actual capital de Chile?",
        options: ["Michimalonco", "Diego de Almagro", "Lautaro", "Pedro de Valdivia"],
        correct: 3,
        explanation: "Pedro de Valdivia fundó Santiago el 12 de febrero de 1541 en el valle del río Mapocho."
    },
    {
        question: "¿En qué fecha se fundó la ciudad de Santiago?",
        options: ["12 de febrero de 1541", "11 de septiembre de 1541", "25 de diciembre de 1553", "12 de octubre de 1492"],
        correct: 0,
        explanation: "La fundación de Santiago de la Nueva Extremadura por Pedro de Valdivia fue el 12 de febrero de 1541."
    },
    {
        question: "¿Qué líder indígena comandó el ataque que casi destruyó Santiago en 1541?",
        options: ["Caupolicán", "Michimalonco", "Lautaro", "Pelantaro"],
        correct: 1,
        explanation: "El líder picunche Michimalonco organizó un gran ataque en septiembre de 1541 que destruyó casi por completo la recién fundada Santiago."
    },
    {
        question: "¿Cuál fue el resultado más importante de la Batalla de Tucapel en 1553?",
        options: ["La fundación de la ciudad de Concepción.", "Una victoria decisiva para los españoles.", "La captura y muerte de Pedro de Valdivia.", "El inicio de la Guerra Defensiva."],
        correct: 2,
        explanation: "En la Batalla de Tucapel, los mapuches liderados por Lautaro obtuvieron una gran victoria, capturando y dando muerte a Pedro de Valdivia."
    },
    {
        question: "La 'Guerra Defensiva' fue una etapa de la Guerra de Arauco que se caracterizó por:",
        options: ["Ataques constantes de los españoles al sur del río Bío Bío.", "Un intento de evangelizar pacíficamente a los mapuches y establecer una frontera.", "La legalización de la esclavitud indígena.", "La creación de un ejército profesional."],
        correct: 1,
        explanation: "La Guerra Defensiva, propuesta por el padre Luis de Valdivia, buscaba detener los ataques y usar la evangelización, estableciendo el río Bío Bío como frontera."
    },
    {
        question: "¿Qué era el sistema de la 'Encomienda'?",
        options: ["Una estrategia militar para la guerra.", "Un sistema de trabajo forzado donde un español recibía un grupo de indígenas a su cargo.", "Una ceremonia religiosa de los mapuches.", "Un tipo de propiedad de la tierra para los criollos."],
        correct: 1,
        explanation: "La Encomienda era un sistema en que la Corona 'encargaba' indígenas a un encomendero, quien podía exigirles tributo o trabajo a cambio de supuesta protección y evangelización."
    },
    {
        question: "El término 'mestizaje' se refiere a:",
        options: ["Un tipo de comida típica de la época colonial.", "La mezcla biológica y cultural entre distintos grupos étnicos, como españoles e indígenas.", "Un acuerdo político entre caciques mapuches y gobernadores españoles.", "El nombre que recibía el ejército profesional en la frontera."],
        correct: 1,
        explanation: "El mestizaje es la mezcla de personas de diferentes etnias. En América, fue principalmente la unión entre españoles e indígenas, dando origen a la mayor parte de la población."
    },
    {
        question: "¿Cuál fue la causa más devastadora del descenso demográfico indígena durante la Conquista?",
        options: ["Las guerras y conflictos constantes.", "El trabajo forzado en las encomiendas y minas.", "La introducción de nuevas enfermedades traídas por los europeos.", "Los cambios forzados en su modo de vida y cultura."],
        correct: 2,
        explanation: "La principal causa de la catástrofe demográfica fueron las enfermedades como la viruela y el sarampión, para las cuales los indígenas no tenían defensas inmunológicas."
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
        message = '¡Felicitaciones! 🎉 Has demostrado un excelente conocimiento de la Conquista de Chile.';
    } else if (percentage >= 80) {
        message = '¡Muy buen trabajo! 🌟 Tienes un sólido entendimiento del tema.';
    } else if (percentage >= 60) {
        message = '¡Buen esfuerzo! 💪 Has aprendido bastante sobre la Conquista de Chile.';
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