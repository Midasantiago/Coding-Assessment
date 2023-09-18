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

function init() {
    title.textContent = 'Coding Quiz Challenge';
    rootEl.appendChild(title);
    subtitle.textContent = 'Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your scrore/time by ten seconds!';
    rootEl.appendChild(subtitle);
    startButton.textContent = 'Start Quiz';
    rootEl.appendChild(startButton);
}

init();