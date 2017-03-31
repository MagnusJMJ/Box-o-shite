var myChoice = 0,
    header = document.getElementById('header'),
    ui = document.getElementsByClassName('init'),
    button = document.getElementById('button'),
    throbber = document.getElementById('throbber'),
    rock = document.getElementById('rock'),
    paper = document.getElementById('paper'),
    scissors = document.getElementById('scissors');

rock.addEventListener('click', choseRock);
paper.addEventListener('click', chosePaper);
scissors.addEventListener('click', choseScissors);
button.addEventListener('click', reload);

function choseRock() {
  console.log('You chose rock.');
  myChoice = 1;
  fight()
}
function chosePaper() {
  console.log('You chose paper.');
  myChoice = 2;
  fight()
}
function choseScissors() {
  console.log('You chose scissors.');
  myChoice = 3;
  fight()
}

function fight() {
  for (n = 0; n < ui.length; n++) {
    ui[n].style.display = 'none';
  }
  throbber.style.display = 'inline-block';

  setTimeout(showResult, 1000);
  function showResult() {
    throbber.style.display = 'none';
    switch(result) {
      case 0:  header.innerHTML = "You lost!"; break;
      case 1:  header.innerHTML = "You won!";  break;
      default: header.innerHTML = "There was a draw!";
    }
    header.style.display = 'initial';
    button.style.display = 'inline-block';

    
  }

  var oppChoice = Math.ceil(Math.random() * 3);
      oppWeapon = [null, 'rock.', 'paper.', 'scissors.'];
  console.log('Opponent chose ' + oppWeapon[oppChoice]);

  var result;
  if (myChoice == oppChoice) {
    console.log('There was a draw!');
  } else if (myChoice == oppChoice + 1 || myChoice == oppChoice - 2) {
    result = 1;
    console.log('You won!');
  } else {
    result = 0;
    console.log('You lost!');
  }
}

function reload() {
  location.reload();
}
