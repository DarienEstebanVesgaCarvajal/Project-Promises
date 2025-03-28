const quizData = [
    { question: "¿Cuál de estas opciones devuelve la primera promesa en resolverse?", 
    options: ["Promise.race()", "Promise.all()", "Promise.any()"], 
    answer: "Promise.any()" },
    {
    question: "¿Qué método espera que todas las promesas se resuelvan o una falle para devolver un resultado?",
    options: ["Promise.race()", "Promise.all()", "Promise.any()"],
    answer: "Promise.all()"
    },
    {
    question: "Si una de las promesas en `Promise.race()` se rechaza primero, ¿qué sucede?",
    options: ["Todas las demás promesas se cancelan", "Se devuelve el primer resultado, ya sea éxito o error", "Se espera a que todas terminen"],
    answer: "Se devuelve el primer resultado, ya sea éxito o error"
    },
    {
    question: "¿Cuál de estas opciones devuelve el primer resultado exitoso, ignorando errores?",
    options: ["Promise.all()", "Promise.any()", "Promise.race()"],
    answer: "Promise.any()"
    },
    {
    question: "¿Cuál es la principal diferencia entre `Promise.all()` y `Promise.race()`?",
    options: ["Promise.all() devuelve la primera promesa en resolverse", "Promise.race() espera a que todas las promesas se resuelvan", "Promise.all() devuelve un array con todas las respuestas si tienen éxito"],
    answer: "Promise.all() devuelve un array con todas las respuestas si tienen éxito"
    }
];

function loadQuiz() {
    const quizContainer = document.getElementById("quiz");
    quizContainer.innerHTML = "";
    quizData.forEach((q, index) => {
        const questionElem = document.createElement("p");
        questionElem.textContent = q.question;
        quizContainer.appendChild(questionElem);
        q.options.forEach(option => {
            const button = document.createElement("button");
            button.textContent = option;
            button.onclick = () => alert(option === q.answer ? "¡Correcto!" : "Incorrecto, intenta de nuevo.");
            quizContainer.appendChild(button);
        });
    });
}