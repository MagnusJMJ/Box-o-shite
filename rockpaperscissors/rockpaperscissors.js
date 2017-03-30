var imgR, imgP, imgS;
function preload() {
  imgR = loadImage('assets/rock.png');
  imgP = loadImage('assets/paper.png');
  imgS = loadImage('assets/scissors.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);

  var buttonR = new Weapon(width*0.25, height/2, rock, 'assets/rock.png');
      buttonP = new Weapon(width*0.50, height/2, paper, 'assets/paper.png');
      buttonS = new Weapon(width*0.75, height/2, scissors, 'assets/scissors.png');
}

function draw() {

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
function rock() {
  console.log('Rock.');
}
function paper() {
  console.log('Paper.');
}
function scissors() {
  console.log('Scissors.');
}
function Weapon(x, y, action, path) {
  var weapon = createElement('input', '');
  weapon.attribute('type', 'image');
  weapon.attribute('src', path);
  weapon.position(x, y);
  weapon.mousePressed(action);
}
