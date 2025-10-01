let score = JSON.parse(localStorage.getItem('score'))||{
  wins: 0,
  losses: 0,
  ties: 0
};

document.querySelector('.js-rock-button').addEventListener('click', ()=>{
  playGame('rock');
});

document.querySelector('.js-paper-button').addEventListener('click', ()=>{
  playGame('paper');
});

document.querySelector('.js-scissours-button').addEventListener('click', ()=>{
  playGame('scissours');
});

document.querySelector('.js-score-reset').addEventListener('click', ()=>{
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  localStorage.removeItem('score')
  document.querySelector('.js-score-board').innerHTML = `Výhry✅: ${score.wins}, Prohry❌: ${score.losses}, Remízy⬜: ${score.ties}`
});

function playGame(playerMove){
  let result;
  let computerMove = pickComputerMove();
  pickComputerMove();

  if(playerMove === 'rock'){
    if(computerMove === 'rock'){
      result = 'Remíza!'
    }else if(computerMove === 'paper'){
      result = 'Prohrál jsi!'
    }else if(computerMove === 'scissours'){
      result = 'Vyhrál jsi!'
    }
  }

  if(playerMove === 'paper'){
    if(computerMove === 'paper'){
      result = 'Remíza!'
    }else if(computerMove === 'scissours'){
      result = 'Prohrál jsi!'
    }else if(computerMove === 'rock'){
      result = 'Vyhrál jsi!'
    }
  }

  if(playerMove === 'scissours'){
    if(computerMove === 'scissours'){
      result = 'Remíza!'
    }else if(computerMove === 'rock'){
      result = 'Prohrál jsi!'
    }else if(computerMove === 'paper'){
      result = 'Vyhrál jsi!'
    }
  }

  if(result === 'Vyhrál jsi!'){
    score.wins++;
  }else if(result ==='Prohrál jsi!'){
    score.losses++;
  }else if(result === 'Remíza!'){
    score.ties++;
  };

  document.querySelector('.js-result-board').innerHTML = result;

  localStorage.setItem('score', JSON.stringify(score));
  document.querySelector('.js-score-board').innerHTML = `Výhry✅: ${score.wins}, Prohry❌: ${score.losses}, Remízy⬜: ${score.ties}`
};

function pickComputerMove(){
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  let computerMove;
  if(randomNumber === 1){
    computerMove = 'rock'
  }else if(randomNumber === 2){
    computerMove = 'paper'
  }else if(randomNumber === 3){
    computerMove = 'scissours'
  }
  return computerMove;
};