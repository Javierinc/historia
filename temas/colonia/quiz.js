const quizData = [
    {
        question: "¿Entre qué años se extendió el período de la Colonia en Chile?",
        options: ["1541 y 1810", "1598 y 1810", "1553 y 1800", "1600 y 1820"],
        correct: 1,
        explanation: "La Colonia comenzó con la Batalla de Curalaba en 1598 y terminó con la formación de la primera Junta de Gobierno en 1810."
    },
    {
        question: "¿Cómo se llamaba al grupo social más poderoso, formado por personas nacidas en España?",
        options: ["Criollos", "Mestizos", "Peninsulares", "Indígenas"],
        correct: 2,
        explanation: "Los españoles nacidos en la península ibérica, también llamados peninsulares, ocupaban los cargos más altos y tenían los mayores privilegios."
    },
    {
        question: "Los Criollos eran hijos de españoles, pero ¿cuál era la principal diferencia con los peninsulares?",
        options: ["Eran más pobres", "No podían ser dueños de tierras", "No podían ocupar los cargos políticos más importantes", "Hablaban un idioma diferente"],
        correct: 2,
        explanation: "Aunque los Criollos tenían poder económico, los cargos políticos más relevantes estaban reservados para los españoles nacidos en Europa."
    },
    {
        question: "¿Cuál era el grupo más numeroso de la sociedad colonial, resultado de la mezcla entre españoles e indígenas?",
        options: ["Mulatos", "Zambos", "Criollos", "Mestizos"],
        correct: 3,
        explanation: "Los mestizos, hijos de españoles e indígenas, formaban el grupo más grande y se dedicaban a trabajos como inquilinos, peones o artesanos."
    },
    {
        question: "¿Dónde vivía principalmente la aristocracia (españoles y criollos) durante la Colonia?",
        options: ["En haciendas en el campo", "En las ciudades, cerca de la Plaza de Armas", "En campamentos mineros", "Al sur del río Biobío"],
        correct: 1,
        explanation: "La élite colonial se concentraba en las ciudades como Santiago, Concepción y La Serena, viviendo en grandes casas cerca del centro social y comercial."
    },
    {
        question: "¿Qué eran las 'tertulias'?",
        options: ["Fiestas populares en el campo", "Reuniones sociales de la aristocracia en sus casas", "Un tipo de impuesto al comercio", "Escuelas para los niños indígenas"],
        correct: 1,
        explanation: "Las tertulias eran encuentros de la élite donde se conversaba, se tocaba música y se bailaban danzas europeas."
    },
    {
        question: "¿Cómo se llamaban los lugares donde los sectores populares celebraban, considerados el origen de las fondas actuales?",
        options: ["Palacios", "Catedrales", "Chinganas", "Encomiendas"],
        correct: 2,
        explanation: "Las chinganas y pulperías eran los lugares informales de fiesta para mestizos e indígenas, donde se cantaba, bailaba y jugaba."
    },
    {
        question: "¿Qué danza, que se originó en la época colonial en la zona central, se convirtió en el baile nacional de Chile?",
        options: ["La Refalosa", "El Costillar", "La Cueca", "El Cachimbo"],
        correct: 2,
        explanation: "La cueca se desarrolló durante este período y se consolidó como la danza nacional de Chile a principios del siglo XIX."
    },
    {
        question: "¿Qué grupo social se encontraba en la base de la pirámide social y realizaba los trabajos más duros?",
        options: ["Mestizos y Criollos", "Indígenas, Esclavos Africanos, Mulatos y Zambos", "Solo los Criollos", "Solo los Españoles"],
        correct: 1,
        explanation: "Estos grupos ocupaban la posición más baja, realizando trabajos forzados, domésticos y de carga en condiciones muy precarias."
    },
    {
        question: "La vestimenta en la Colonia era un claro indicador del estatus social. ¿Quiénes usaban ropa elegante traída de Europa?",
        options: ["Los Mestizos", "Los Huasos", "Los Indígenas", "La Aristocracia (españoles y criollos)"],
        correct: 3,
        explanation: "La aristocracia era el único grupo que podía permitirse vestir con ropas y telas caras importadas, siguiendo la moda europea."
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