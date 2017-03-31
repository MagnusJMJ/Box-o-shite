var myChoice,
    oppChoice,
    result,
    initial  = document.getElementById('initialState'),
    rock = document.getElementById('rock'),
    paper = document.getElementById('paper'),
    scissors = document.getElementById('scissors'),
    resolved = document.getElementById('resolvedState'),
    retry = document.getElementById('retryButton'),
    throbber = document.getElementById('throbber');

rock.addEventListener('click', choseRock);
paper.addEventListener('click', chosePaper);
scissors.addEventListener('click', choseScissors);
retry.addEventListener('click', tryAgain);

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

function startGame() {
  initial.style.display = 'none';
  throbber.style.display = 'inline-block';
  setTimeout(resolve, 1000);
}

function resolve() {
  oppChoice = Math.round(Math.random() * 2);
  var oc = ['rock.', 'paper.', 'scissors.'];
  console.log('Opponent chose ' + oc[oppChoice]);

  if (myChoice == oppChoice) {
    console.log('You tied!');
  } else if (myChoice == oppChoice + 1 || myChoice == oppChoice - 2) {
    console.log('You won!');
    result = 1;
  } else {
    console.log('You lost!');
    result = 0;
  }

  showResult();
}

function showResult() {
  var header = document.getElementById('resolvedHeader'),
      myHand = document.getElementById('myChoice'),
      oppHand = document.getElementById('oppChoice');

  switch (result) {
    case 1: header.innerHTML = 'You won!'; break;
    case 0: header.innerHTML = 'You lost!'; break;
    default: header.innerHTML = 'You tied!';
  }

  switch (myChoice) {
    case 0: myHand.setAttribute('src', 'assets/rock.png'); break;
    case 1: myHand.setAttribute('src', 'assets/paper.png'); break;
    case 2: myHand.setAttribute('src', 'assets/scissors.png'); break;
  }

  switch (oppChoice) {
    case 0: oppHand.setAttribute('src', 'assets/rock.png'); break;
    case 1: oppHand.setAttribute('src', 'assets/paper.png'); break;
    case 2: oppHand.setAttribute('src', 'assets/scissors.png'); break;
  }

  throbber.style.display = 'none';
  resolved.style.display = 'inline-block';
}

function tryAgain() {
  console.log('works');
}
