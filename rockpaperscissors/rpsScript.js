// Declaring global variables (mostly links to DOM elements).
var myChoice,
    oppChoice,
    result,
    hand     = ['rock.', 'paper.', 'scissors.'],
    initial  = document.getElementById('initialState'),
    rock     = document.getElementById('rock'),
    paper    = document.getElementById('paper'),
    scissors = document.getElementById('scissors'),
    resolved = document.getElementById('resolvedState'),
    retry    = document.getElementById('retryButton'),
    throbber = document.getElementById('throbber');

// Linking functions to click events.
rock.addEventListener('click', function() { startGame(0); });     // NB: We have to put startGame()
paper.addEventListener('click', function() { startGame(1); });    // in an anonymous function or the
scissors.addEventListener('click', function() { startGame(2); }); // script goes batshit. Why? No idea.
retry.addEventListener('click', tryAgain);

/* startGame() sets the variable myChoice
according to which button was pressed by
the player and displays a throbber for 1
to 2 seconds to create ~suspense~ */
function startGame(input) {
  initial.style.display  = 'none';
  throbber.style.display = 'inline-block';

  myChoice = input;
  console.log('You chose ' + hand[myChoice]);

  var wait = 1000 + Math.random() * 1000
  setTimeout(resolve, wait);
}

/* resolve() randomly chooses a hand for the
"opponent" and decides who wins.
(the result variable) */
function resolve() {
  // Choose opponent hand.
  oppChoice = Math.floor(Math.random() * 3);
  console.log('Opponent chose ' + hand[oppChoice]);

  //Decides who won.
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

  // Moves on.
  showResult();
}

// Shows the result and what hands were chosen.
function showResult() {
  // More variables that refer to the DOM.
  var header  = document.getElementById('resolvedHeader'),
      myHand  = document.getElementById('myChoice'),
      oppHand = document.getElementById('oppChoice');

  // This switch shows the appropriate header.
  // The colours are default CSS colours.
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

  // This switch shows which hand you picked.
  switch (myChoice) {
    case 0: myHand.setAttribute('src', 'assets/rock.png');     break;
    case 1: myHand.setAttribute('src', 'assets/paper.png');    break;
    case 2: myHand.setAttribute('src', 'assets/scissors.png'); break;
  }

  // This switch shows which hand the opponent picked.
  switch (oppChoice) {
    case 0: oppHand.setAttribute('src', 'assets/rock.png');     break;
    case 1: oppHand.setAttribute('src', 'assets/paper.png');    break;
    case 2: oppHand.setAttribute('src', 'assets/scissors.png'); break;
  }

  // Now that the result screen is 'ready', we'll show it.
  throbber.style.display = 'none';
  resolved.style.display = 'inline-block';
}

// Resets the game.
function tryAgain() {
  resolved.style.display = 'none';
  initial.style.display  = 'inline-block';

  console.log('New round.');
}
