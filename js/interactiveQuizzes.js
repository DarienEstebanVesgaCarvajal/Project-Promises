const quizData = [
    { question: "¿Cuál de estas opciones devuelve la primera promesa en resolverse?", 
    options: ["Promise.race()", "Promise.all()", "Promise.any()"], 
    answer: "Promise.any()" }
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