const quizData = [
    // Clase 1
    {
        question: "¿Cuál de estos grupos sociales tenía más poder durante la Colonia, ocupando los cargos más altos?",
        options: ["Criollos", "Mestizos", "Indígenas", "Españoles (Peninsulares)"],
        correct: 3,
        explanation: "¡Correcto! Los españoles nacidos en España, también llamados Peninsulares, estaban en la cima de la pirámide social y controlaban el gobierno."
    },
    {
        question: "¿Qué eran las 'tertulias' en la época colonial?",
        options: ["Fiestas populares en el campo", "Reuniones sociales de la aristocracia en sus casas", "Un tipo de escuela para niñas", "Mercados al aire libre"],
        correct: 1,
        explanation: "¡Exacto! Las tertulias eran encuentros privados de la élite donde conversaban, tomaban mate y bailaban al estilo europeo."
    },
    {
        question: "Los mestizos, el grupo más numeroso, eran el resultado de la mezcla entre:",
        options: ["Españoles y Africanos", "Indígenas y Africanos", "Españoles e Indígenas", "Criollos y Peninsulares"],
        correct: 2,
        explanation: "¡Así es! Los mestizos eran hijos de españoles e indígenas. Trabajaban principalmente como inquilinos, peones y artesanos."
    },
    {
        question: "La vida de la aristocracia colonial se centraba principalmente en:",
        options: ["Las haciendas", "Los campamentos mineros", "Las ciudades", "Las misiones religiosas"],
        correct: 2,
        explanation: "¡Muy bien! La élite vivía en las ciudades como Santiago y Concepción, cerca de la Plaza de Armas, que era el corazón de la vida social."
    },
    {
        question: "¿Cuál de estas danzas, que se originó en la Colonia, se convirtió en el baile nacional de Chile?",
        options: ["La refalosa", "La cueca", "El minué", "El cuando"],
        correct: 1,
        explanation: "¡Excelente! La cueca nació en la zona central durante la Colonia y es hoy nuestro baile nacional."
    },
    {
        question: "La vestimenta era muy importante para identificar la clase social. ¿Qué grupo usaba ropa sencilla, a menudo de materiales reciclados?",
        options: ["Aristocracia", "Clase Media / Huasos", "Sectores Populares / Indígenas", "Soldados"],
        correct: 2,
        explanation: "¡Correcto! Los sectores populares e indígenas usaban ropas simples, mientras que la aristocracia vestía con telas caras de Europa."
    },
    // Clase 2
    {
        question: "¿Cuál era la principal actividad económica en las haciendas de Chile colonial?",
        options: ["Minería de oro", "Pesca de mariscos", "Agricultura y ganadería", "Fabricación de barcos"],
        correct: 2,
        explanation: "¡Así es! La economía se centró en la agricultura (especialmente el trigo para Perú) y la ganadería, haciendo de la hacienda el núcleo productivo."
    },
    {
        question: "El sistema de 'monopolio comercial' impuesto por España significaba que Chile solo podía comerciar con:",
        options: ["Cualquier país de Europa", "Barcos españoles", "Las colonias inglesas", "El imperio portugués"],
        correct: 1,
        explanation: "¡Correcto! El monopolio comercial obligaba a las colonias a comerciar únicamente con España, lo que limitaba su crecimiento económico."
    },
    {
        question: "¿Qué eran los 'parlamentos' en el contexto de la Guerra de Arauco?",
        options: ["Batallas finales para terminar la guerra", "Encuentros diplomáticos entre españoles y mapuches", "Leyes para prohibir la cultura indígena", "Tribunales para juzgar a los prisioneros"],
        correct: 1,
        explanation: "¡Muy bien! Los parlamentos eran reuniones diplomáticas para acordar la paz, intercambiar prisioneros y establecer fronteras, como la del río Biobío."
    },
    {
        question: "¿Qué estilo artístico europeo se adaptó en América, dando lugar al 'Barroco americano'?",
        options: ["Gótico", "Renacentista", "Neoclásico", "Barroco"],
        correct: 3,
        explanation: "¡Exacto! El estilo Barroco, con sus adornos y sensación de movimiento, fue adaptado en el continente, usándose principalmente para educar en la fe católica."
    },
    {
        question: "¿Quién fue Joaquín Toesca?",
        options: ["Un famoso pintor criollo", "El autor de 'La Araucana'", "Un arquitecto que diseñó el Palacio de La Moneda", "Un líder militar español"],
        correct: 2,
        explanation: "¡Excelente! Joaquín Toesca fue un importante arquitecto italiano cuyo trabajo más famoso en Chile es el Palacio de La Moneda, de estilo neoclásico."
    },
    {
        question: "En la Colonia, la educación era un privilegio. ¿Cuál era el objetivo principal de las 'escuelas de primeras letras'?",
        options: ["Formar artistas y músicos", "Enseñar a todos a leer y escribir por igual", "La evangelización y la enseñanza básica", "Preparar a los niños para la guerra"],
        correct: 2,
        explanation: "¡Correcto! El fin principal era la evangelización (enseñar la fe católica), junto con lectura, escritura y aritmética básica para unos pocos."
    }
];

const questionWrapper = document.getElementById('question-wrapper');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const feedbackContainer = document.getElementById('feedback-container');
const checkAnswerBtn = document.getElementById('check-answer-btn');
const nextQuestionBtn = document.getElementById('next-question-btn');
const resultsContainer = document.getElementById('results-container');
const finalScore = document.getElementById('final-score');
const restartQuizBtn = document.getElementById('restart-quiz-btn');
const progressText = document.getElementById('progress-text');
const progressBar = document.getElementById('progress-bar');

let currentQuestionIndex = 0;
let score = 0;
let selectedOption = null;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    resultsContainer.style.display = 'none';
    questionWrapper.style.display = 'block';
    updateProgress();
    loadQuestion();
}

function updateProgress() {
    const progress = (currentQuestionIndex / quizData.length) * 100;
    progressBar.style.width = `${progress}%`;
    progressText.textContent = `Pregunta ${currentQuestionIndex + 1} de ${quizData.length}`;
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
        button.classList.add('option-btn');
        button.dataset.index = index;
        button.addEventListener('click', () => {
            if (checkAnswerBtn.style.display === 'none') return; // No permitir cambiar si ya se respondió
            
            // Remover la selección anterior
            const currentlySelected = optionsContainer.querySelector('.selected');
            if (currentlySelected) {
                currentlySelected.classList.remove('selected');
            }
            
            selectedOption = index;
            button.classList.add('selected');
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
    
    // Deshabilitar todas las opciones
    Array.from(optionsContainer.children).forEach(btn => {
        btn.disabled = true;
        btn.classList.remove('hover:bg-blue-100');
    });

    const selectedButton = optionsContainer.children[selectedOption];
    const correctButton = optionsContainer.children[correctOptionIndex];

    if (selectedOption === correctOptionIndex) {
        score++;
        selectedButton.classList.add('bg-emerald-100', 'border-emerald-500', 'text-emerald-800');
        
        feedbackContainer.innerHTML = `
            <div class="bg-emerald-50 border-l-4 border-emerald-500 p-4 rounded-lg">
                <p class="text-emerald-800 font-semibold">¡Excelente respuesta! 🌟</p>
                <p class="text-sm mt-2 text-gray-700">${currentQuestion.explanation}</p>
            </div>
        `;
    } else {
        selectedButton.classList.add('bg-amber-50', 'border-amber-300', 'text-amber-800');
        correctButton.classList.add('bg-emerald-100', 'border-emerald-500', 'text-emerald-800');
        
        feedbackContainer.innerHTML = `
            <div class="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-lg">
                <p class="text-amber-800 font-semibold">¡Casi! La respuesta correcta era otra. 💡</p>
                <p class="text-sm mt-2 text-gray-700">${currentQuestion.explanation}</p>
            </div>
        `;
    }

    feedbackContainer.style.display = 'block';
    checkAnswerBtn.style.display = 'none';
    nextQuestionBtn.style.display = 'inline-block';
});

nextQuestionBtn.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        updateProgress();
        loadQuestion();
    } else {
        progressBar.style.width = '100%';
        progressText.textContent = `Completado`;
        showResults();
    }
});

function showResults() {
    questionWrapper.style.display = 'none';
    resultsContainer.style.display = 'block';
    
    const percentage = Math.round((score / quizData.length) * 100);
    let message = '';
    
    if (percentage === 100) {
        message = '¡Felicitaciones! 🎉 Dominas completamente el período de la Colonia en Chile.';
    } else if (percentage >= 80) {
        message = '¡Muy buen trabajo! 🌟 Tienes un sólido entendimiento del tema.';
    } else if (percentage >= 60) {
        message = '¡Buen esfuerzo! 💪 Sigue repasando para convertirte en un experto.';
    } else {
        message = '¡Gracias por participar! 📚 Cada intento es una oportunidad para aprender más.';
    }

    finalScore.innerHTML = `
        <p class="mb-4">Obtuviste ${score} de ${quizData.length} respuestas correctas (${percentage}%)</p>
        <p class="text-gray-700">${message}</p>
    `;
}

restartQuizBtn.addEventListener('click', startQuiz);

document.addEventListener('DOMContentLoaded', () => {
    startQuiz();
}); 