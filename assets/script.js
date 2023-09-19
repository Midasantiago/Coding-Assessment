var rootEl = document.getElementById('root');
var highScores = document.getElementById('high-scores');
var timer = document.getElementById('timer');

var title = document.createElement('h1');
title.className = 'title';

var subtitle = document.createElement('p');
subtitle.className = 'subtitle';

var startButton = document.createElement('p');
startButton.className = 'start-button';

var question = document.createElement('h1');
question.className = 'question';

var options = document.createElement('ul');

var op1 = document.createElement('li');
var op2 = document.createElement('li');
var op3 = document.createElement('li');
var op4 = document.createElement('li');

var timeLeft = 75;

var timeInterval;

function countdown() {
    timeInterval = setInterval(function () {
        if (timeLeft > 0) {
            timer.textContent = timeLeft;
            timeLeft--;
        } else {
            clearInterval(timeInterval);
            timeLeft = 0;
            timer.textContent = timeLeft;
            highscoreInput();
        }
    }, 1000);
}

function clearRoot() {
    rootEl.innerHTML = '';
}

function init() {
    title.textContent = 'Coding Quiz Challenge';
    rootEl.appendChild(title);
    subtitle.textContent = 'Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your scrore/time by ten seconds!';
    rootEl.appendChild(subtitle);
    startButton.textContent = 'Start Quiz';
    rootEl.appendChild(startButton);
}

function question1() {
    question.textContent = 'Commonly used data types DO NOT include:';
    rootEl.appendChild(question);
    rootEl.appendChild(options);
    op1.textContent = 'Strings';
    op2.textContent = 'Booleans';
    op3.textContent = 'Alerts';
    op4.textContent = 'Numbers';
    options.appendChild(op1);
    options.appendChild(op2);
    options.appendChild(op3);
    options.appendChild(op4);
    var correctAnswer = op3;

    options.addEventListener('click', function (event) {
        var selectedOption = event.target;
        if (selectedOption === correctAnswer) {
            clearRoot();
            question2();
        } else {
            timeLeft -= 10;
        }
    })
}

function question2() {
    question.textContent = 'The condition in an if/else statement is enclosed with _______.';
    rootEl.appendChild(question);
    rootEl.appendChild(options);
    op1.textContent = 'Quotes';
    op2.textContent = 'Curly Brackets';
    op3.textContent = 'Parenthesis';
    op4.textContent = 'Square Brackets';
    options.appendChild(op1);
    options.appendChild(op2);
    options.appendChild(op3);
    options.appendChild(op4);
    var correctAnswer = op3;

    options.addEventListener('click', function (event) {
        var selectedOption = event.target;
        if (selectedOption === correctAnswer) {
            clearRoot();
            question3();
        } else {
            timeLeft -= 10;
        }
    })
}

function question3() {
    question.textContent = 'Arrays in javascript can be used to store ______.';
    rootEl.appendChild(question);
    rootEl.appendChild(options);
    op1.textContent = 'Numbers and Strings';
    op2.textContent = 'Other Arrays';
    op3.textContent = 'Booleans';
    op4.textContent = 'All of the above';
    options.appendChild(op1);
    options.appendChild(op2);
    options.appendChild(op3);
    options.appendChild(op4);
    var correctAnswer = op4;

    options.addEventListener('click', function (event) {
        var selectedOption = event.target;
        if (selectedOption === correctAnswer) {
            clearRoot();
            question4();
        } else {
            timeLeft -= 10;
        }
    })
}

function question4() {
    question.textContent = 'String Values must be enclosed within _____ when being assigned to variables.';
    rootEl.appendChild(question);
    rootEl.appendChild(options);
    op1.textContent = 'Commas';
    op2.textContent = 'Curly Brackets';
    op3.textContent = 'Quotes';
    op4.textContent = 'Parenthesis';
    options.appendChild(op1);
    options.appendChild(op2);
    options.appendChild(op3);
    options.appendChild(op4);
    var correctAnswer = op3;

    options.addEventListener('click', function (event) {
        var selectedOption = event.target;
        if (selectedOption === correctAnswer) {
            clearRoot();
            question5();
        } else {
            timeLeft -= 10;
        }
    })
}

function question5() {
    question.textContent = 'A very useful tool used during development and debugging for printing content to the debugger is:';
    rootEl.appendChild(question);
    rootEl.appendChild(options);
    op1.textContent = 'Javascript';
    op2.textContent = 'Terminal/Bash';
    op3.textContent = 'For Loops';
    op4.textContent = 'Console.log';
    options.appendChild(op1);
    options.appendChild(op2);
    options.appendChild(op3);
    options.appendChild(op4);
    var correctAnswer = op4;

    options.addEventListener('click', function (event) {
        var selectedOption = event.target;
        if (selectedOption === correctAnswer) {
            clearRoot();
            clearInterval(timeInterval);
            highscoreInput();
        } else {
            timeLeft -= 10;
        }
    })
}

function highscoreInput() {
    
}

startButton.addEventListener("click", function () {
    countdown();
    clearRoot();
    question1();
})

init();