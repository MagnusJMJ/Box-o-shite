// Declaring global variables (mostly links to DOM elements).
var myChoice,
    oppChoice,
    result,
    initial  = document.getElementById('initialState'),
    rock     = document.getElementById('rock'),
    paper    = document.getElementById('paper'),
    scissors = document.getElementById('scissors'),
    resolved = document.getElementById('resolvedState'),
    retry    = document.getElementById('retryButton'),
    throbber = document.getElementById('throbber');

// Linking functions to click events.
rock.addEventListener('click', choseRock);
paper.addEventListener('click', chosePaper);
scissors.addEventListener('click', choseScissors);
retry.addEventListener('click', tryAgain);

/* Which function is called depends which button is
pressed. The called function sets the player choice
and initiates the game. */
function choseRock() {
  console.log('You chose rock.');
  myChoice = 0;
  startGame();
}
function chosePaper() {
  console.log('You chose paper.');
  myChoice = 1;
  startGame();
}
function choseScissors() {
  console.log('You chose scissors.');
  myChoice = 2;
  startGame();
}

/* startGame() actually just shows a throbber
for a random duration between 1 and 2 seconds */
function startGame() {
  initial.style.display  = 'none';
  throbber.style.display = 'inline-block';

  var wait = 1000 + Math.random() * 1000
  setTimeout(resolve, wait);
}

/* resolve() randomly chooses a hand for the
"opponent" and decides who wins.
(the result variable) */
function resolve() {
  oppChoice = Math.round(Math.random() * 2);
  var oc = ['rock.', 'paper.', 'scissors.'];
  console.log('Opponent chose ' + oc[oppChoice]);

  if (myChoice == oppChoice) {
    console.log('You tied!');
    result = 2;
  } else if (myChoice == oppChoice + 1 || myChoice == oppChoice - 2) {
    console.log('You won!');
    result = 1;
  } else {
    console.log('You lost!');
    result = 0;
  }

  showResult();
}

// Shows the result and what hands were chosen.
function showResult() {
  var header  = document.getElementById('resolvedHeader'),
      myHand  = document.getElementById('myChoice'),
      oppHand = document.getElementById('oppChoice');

  switch (result) {
    case 0:
      header.innerHTML   = 'You lost!';
      header.style.color = 'crimson';
      break;
    case 1:
      header.innerHTML   = 'You won!';
      header.style.color = 'YellowGreen';
      break;
    case 2:
      header.innerHTML   = 'You tied!';
      header.style.color = 'White';
      break;
  }

  switch (myChoice) {
    case 0: myHand.setAttribute('src', 'assets/rock.png');     break;
    case 1: myHand.setAttribute('src', 'assets/paper.png');    break;
    case 2: myHand.setAttribute('src', 'assets/scissors.png'); break;
  }

  switch (oppChoice) {
    case 0: oppHand.setAttribute('src', 'assets/rock.png');     break;
    case 1: oppHand.setAttribute('src', 'assets/paper.png');    break;
    case 2: oppHand.setAttribute('src', 'assets/scissors.png'); break;
  }

  throbber.style.display = 'none';
  resolved.style.display = 'inline-block';
}

// Resets the game.
function tryAgain() {
  resolved.style.display = 'none';
  initial.style.display  = 'inline-block';

  console.log('New round.');
}
