function generateQuestion(operation) {
    let num1 = Math.floor(Math.random() * 10) + 1;
    let num2 = Math.floor(Math.random() * 10) + 1;
    let question, correctAnswer;
    switch(operation) {
        case '+':
            question = `${num1} + ${num2}`;
            correctAnswer = num1 + num2;
            break;
        case '-':
            question = `${num1} - ${num2}`;
            correctAnswer = num1 - num2;
            break;
        case '×':
            question = `${num1} × ${num2}`;
            correctAnswer = num1 * num2;
            break;
        case '÷':
            question = `${num1*num2} ÷ ${num2}`;
            correctAnswer = num1;
            break;
    }
    return {question, correctAnswer};
}

function startQuiz() {
    let operation = document.getElementById("operation").value;
    let totalQuestions = 5;
    let correctAnswers = 0;
    let skippedQuestions = 0;
    let answeredQuestions = 0;
    let quizDiv = document.getElementById("quiz");
    quizDiv.innerHTML = "";

    for (let i = 0; i < totalQuestions; i++) {
        let {question, correctAnswer} = generateQuestion(operation);

        let userAnswer = promptWithCancel(`Question ${i + 1}: What is ${question}?`);

        if (userAnswer === null) {
            quizDiv.innerHTML += `<p>Quiz canceled after answering ${answeredQuestions} question(s).</p>`;
            break;
        }

        answeredQuestions++;

        if (userAnswer.toLowerCase() === "skip") {
            skippedQuestions++;
            continue;
        }

        userAnswer = parseInt(userAnswer);
        if (userAnswer === correctAnswer) {
            correctAnswers++;
            quizDiv.innerHTML += `<p>Question ${i + 1}: ${question} - Correct!</p>`;
        } else {
            quizDiv.innerHTML += `<p>Question ${i + 1}: ${question} - Incorrect!</p>`;
        }
    }

    let score = (correctAnswers / totalQuestions) * 100;
    let resultMessage = `<p>Quiz ended! You scored ${score.toFixed(2)}% for ${answeredQuestions} answered question(s) out of 5.</p>`;
    if (skippedQuestions > 0) {
        resultMessage += `<p>Skipped ${skippedQuestions} question(s).</p>`;
    }
    quizDiv.innerHTML += resultMessage;
}

function promptWithCancel(message) {
    let userInput = prompt(`${message}\n\nType "skip" to skip this question.\nPress OK to continue or Cancel to cancel the quiz.`);
    return userInput;
}

