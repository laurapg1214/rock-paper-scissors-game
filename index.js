var rpsArr = ['rock', 'paper', 'scissors'];
var round = '';
var player = '';
var playerScore = 0;
var botScore = 0;
var roundsToWin = 2;

// define roundType function
var roundType = function() {
  round = prompt('Please choose Single or Best out of 3').toLowerCase();

  if (round !== 'single' && round !== 'best out of 3') {
    alert('Invalid input; please try again');
    roundType();
  } else if (round === 'best out of 3') {
    roundsToWin = 2;
  }
}

// define game function
var game = function() {
  // prompt for input
  player = prompt('Please choose Rock, Paper or Scissors').toLowerCase();

  // check for valid input
  if (!rpsArr.includes(player)) {
    alert('Invalid input; please try again');
    result = game();
  }

  // randomly assign choice for bot player
  var bot = rpsArr[Math.floor(Math.random() * rpsArr.length)];

  // define winner function
  var winner = function(player, bot) {
    if (player === bot) {
      return 'draw';
    } else if (
      (player === 'rock' && bot === 'scissors') ||
      (player === 'paper' && bot === 'rock') ||
      (player === 'scissors' && bot === 'paper')
    ) {
      return 'player';
    } else
    {
      return 'bot';
    }
  }

  // call winner function
  return winner(player, bot);
}

// define broadcast function
var broadcast = function(result) {
  if (result === 'player') {
    if (round === 'single') {
      alert('Congratulations, you won!');
    } else if (playerScore === roundsToWin) {
      alert('Congratulations, you won Best out of 3!');
    } else {
      alert('Congratulations, you won this round!');
      playerScore += 1;
      broadcast(game());
    }
  } else if (result === 'bot') {
    if (round === 'single') {
      alert('Sorry, you lost');
    } else if (botScore === roundsToWin) {
      alert('Sorry, you lost Best out of 3');
    } else {
      alert('Sorry, you lost this round') 
      botScore += 1;
      broadcast(game());
      } 
  } else {
    if (round === 'single') {
    alert('It\'s a draw');
    broadcast(game());
    } else {
      alert('This round is a draw');
      broadcast(game());
    }
  }
}

// define playAgain function
var playAgain = function() {
  // ask if wants to play again
  let repeat = confirm('Do you want to play again?');

  if (repeat) {
    // reset scores
    playerScore = 0;
    botScore = 0;

    // call functions
    roundType();
    broadcast(game());
    playAgain();
  } else {
    alert('Thank you for playing!');
  }
}

// call roundType function
roundType();

// call game function
var result = game();

// call broadcast function
broadcast(result);

// call playAgain function
playAgain();