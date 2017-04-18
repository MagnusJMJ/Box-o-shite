var player;
function setup() {
  createCanvas(windowWidth, windowHeight);

  player = {
    pos: createVector(width/2, height/2),
    draw: function () {
      noStroke();
      fill('red');
      rect(this.pos.x, this.pos.y, 25, -50);
    },
  };
}
function draw() {
  background(200, 100);
  player.draw();
  if (keyIsDown(37)) { player.pos.x--; } // left
  if (keyIsDown(38)) { player.pos.y--; } // up
  if (keyIsDown(39)) { player.pos.x++; } // right
  if (keyIsDown(40)) { player.pos.y++; } // down
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
