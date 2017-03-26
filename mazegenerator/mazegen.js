var res = 25; // resolution of the maze

function setup() {
  createCanvas(windowWidth, windowHeight);
  stroke(116, 132, 225);
  strokeWeight(res/5);
  drawMaze();
}

function mousePressed()  {
  drawMaze();
}

function drawMaze() {
  background(94, 107, 181);
  for (x = 0; x < width/res; x++) {
    for (y = 0; y < height/res; y++) {
      var coinflip = round(random());
      if (coinflip) {
        line(x*res, y*res, (x*res)+res, (y*res)+res);
      } else {
        line((x*res)+res, y*res, x*res, (y*res)+res);
      }
    }
  }
}
