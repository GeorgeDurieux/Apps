const chooseRock = document.getElementById('rock');
const choosePaper = document.getElementById('paper');
const chooseScissors = document.getElementById('scissors');
const resultText = document.getElementById('result-text');
const resultList = document.getElementById('result-list');
const resetButton = document.getElementById('reset-button');
const opponentChoiceEmoji = document.getElementById('opponent-choice');
const opponentChoiceEmojiBackground = document.getElementById('opponent-choice-background');

let playerScore = 0;
let opponentScore = 0;
let playerChoice = 0;
let opponentChoice = 0;
let result = '';
let resultCounter = {
  wins : 0,
  draws : 0,
  losses : 0
}

function playGame(playerChoice) {
  opponentChoice = Math.floor(Math.random() * 3);
  animate();
  setOpponentEmoji(opponentChoice);
  if (playerChoice === opponentChoice) {
    result = 'Draw';
    resultCounter.draws++
  } else if ((playerChoice === 0 && opponentChoice === 2) || (playerChoice === 1 && opponentChoice === 0) || (playerChoice === 2 && opponentChoice === 1)) {
    result = 'You Win!';
    playerScore ++;  
    resultCounter.wins++;
  } else {
  result = 'You Lose...';
  opponentScore ++;
  resultCounter.losses++;
  }
  resultText.innerText = result;
  resultList.innerText = 
  `Wins: ${resultCounter.wins}
  Draws: ${resultCounter.draws}
  Losses: ${resultCounter.losses}`
}

function setOpponentEmoji(opponentChoice) {
  if (opponentChoice === 0) {
    opponentChoiceEmoji.innerText = `✊`;
  } else if (opponentChoice === 1) {
    opponentChoiceEmoji.innerText = `✋`;
  } else {
    opponentChoiceEmoji.innerText = `✌️`;
  }
}

function buttonRock() {
  playGame(0);
}

function buttonPaper() {
  playGame(1);
}

function buttonScissors() {
  playGame(2);
}

function buttonReset() {
  resultCounter.wins = 0;
  resultCounter.draws = 0;
  resultCounter.losses = 0; 
  opponentChoiceEmoji.innerText = `?`;
  resultList.innerText = 
  `Wins: 0
  Draws: 0
  Losses: 0` 
}

function animate () {

  opponentChoiceEmojiBackground.classList.add("animate-scale");
  setTimeout(function() {
    opponentChoiceEmojiBackground.classList.remove("animate-scale");
  }, 1000);

  opponentChoiceEmoji.classList.add("animate-color");
  setTimeout(function() {
    opponentChoiceEmoji.classList.remove("animate-color");
  }, 1000); 
  
  resultText.classList.add("animate-scale");
  setTimeout(function() {
    resultText.classList.remove("animate-scale");
  }, 1000);
}

function loadTooltips() {
  const tooltipTriggers = document.querySelectorAll('.tooltip-trigger');

  tooltipTriggers.forEach(function(tooltipTrigger) {
    const text = tooltipTrigger.getAttribute('data-tooltip');
    const tooltipElement = document.createElement('div');
    tooltipElement.textContent = text;
    tooltipElement.classList.add('tooltip');
    document.body.appendChild(tooltipElement);

    tooltipTrigger.addEventListener('mouseenter', () => {
      tooltipElement.style.display = 'block';
    })

    tooltipTrigger.addEventListener('mouseleave', () => {
      tooltipElement.style.display = 'none';
    })

    tooltipTrigger.addEventListener('mousemove', e => {
      const tooltipHeight = tooltipElement.offsetHeight;
      const x = e.clientX + 10;
      const y = e.clientY - tooltipHeight - 10;

      tooltipElement.style.left = `${x}px`;
      tooltipElement.style.top = `${y}px`;
    })
  })
}

chooseRock.addEventListener('click', buttonRock);
choosePaper.addEventListener('click', buttonPaper);
chooseScissors.addEventListener('click', buttonScissors);
resetButton.addEventListener('click', buttonReset);

loadTooltips();

loadTooltips();