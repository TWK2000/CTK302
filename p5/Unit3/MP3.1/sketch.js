let cars = [];
let f1, f2, f3;
let bg;
let fonts = [];
let maxCars = 5;
let knifePos;
let state = 0;
let timer = 0;
let pic1;


function setup() {
  createCanvas(600, 600);
  knifePos = createVector(width / 2, height / 2);
  textAlign(CENTER);
  rectMode(CENTER);
  //songplay
  f1 = loadFont("assets/Frightmare.ttf");
  f2 = loadFont("assets/HalloWitchZ.otf");
  f3 = loadFont("assets/ScaryHalloweenFont.ttf");
  bg = loadImage("assets/HorrorPic.jpg");
  pic1 = loadImage("assets/HorrorPic.jpg");

  fonts = [f1, f2, f3];

  // Spawn objects
  for (let i = 0; i < maxCars; i++) {
    cars.push(new Car());
  }

}

function draw() {

  switch (state) {
    case 0:
      //welcome to my game, click to start
      image(pic1, 0, 0, 600, 600);
      textFont(f1, 48);
      fill('white');
      text("Welcome to my Game", width / 2, height / 2);
      break;

    case 1: // game state
      game();
      timer++;
      if (timer > 10 * 60) {
        timer = 0;
        state = 3;
      }
      break;

    case 2: //win state
    background('black');
    text("YOU WON!", width/2, height / 2);

      break;

    case 3: // lose state
    background('black');
    text("YOU LOST!", width/2, height / 2);

      break;

  }
}


function mouseReleased() {

  switch (state) {
    case 0:
      //click to go to game state
      state = 1;
      break;

    case 2: // the win state !
      resetTheGame();
      state = 0;
      break;

    case 3: // the lose myState!
    resetTheGame();
    state = 0;
      break;

  }
}

function game() {
  background(100);
  image(bg, 0, 0, width, height);
  //display and move 20 objects
  for (let i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].move();
    if (cars[i].pos.dist(knifePos) < 50) {
      cars.splice(i, 1);
    }

  }

  if (cars.length == 0) {
    state = 2;
  }

  push();
  translate(knifePos.x - 200, knifePos.y - 200);
  drawKnife();
  pop();
  checkForKeys();
}


function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) knifePos.x -= 5;
  if (keyIsDown(RIGHT_ARROW)) knifePos.x += 5;
  if (keyIsDown(UP_ARROW)) knifePos.y -= 5;
  if (keyIsDown(DOWN_ARROW)) knifePos.y += 5;

}


function resetTheGame() {
  cars = [];
  // spawn cars
  for (let i = 0; i < maxCars; i++) {
    cars.push(new Car());
  }
  timer = 0;
}


// Car class
class Car {

  // constructor and attributes
  constructor() {
    this.pos = createVector(100, 100);
    this.vel = createVector(random(-8, 8), random(-8, 8));
    this.size = random(40, 80);
    this.c = color(random(200, 255), random(50), random(50));

    let b = floor(random(3)); // random number between 0 -2.9999


    this.font = fonts[b];

  }

  // methods

  display() {
    // rect(this.pos.x, this.pos.y, 50, 25);
    fill(this.c);
    //textFont(this.font);
    //textSize(this.size);
    //text("vote", this.pos.x, this.pos.y);
    push();
    translate(this.pos.x + 100, this.pos.y - 100);
    scale(.3);
    drawHeart();
    pop();
  }

  move() {
    this.pos.add(this.vel);
    if (this.pos.x > width) this.pos.x = -200;
    if (this.pos.x < -200) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;

  }

}


function drawHeart() {

  fill('red');

  beginShape();
  vertex(200, 350);
  bezierVertex(200, 250, 350, 200, 350, 150);
  bezierVertex(350, 100, 250, 50, 200, 140);
  bezierVertex(150, 50, 50, 100, 50, 150);
  bezierVertex(50, 200, 200, 250, 200, 350);

  endShape();
}





function drawKnife() {
  //knife
  fill('grey');
  beginShape();
  vertex(203, 179);
  vertex(205, 224);
  vertex(329, 179);
  endShape(CLOSE)

  fill('brown');
  beginShape();
  vertex(83, 179);
  vertex(205, 179);
  vertex(205, 209);
  vertex(83, 209);

  endShape(CLOSE)

  push();
  strokeWeight(1)
  fill(0);
  ellipse(100, 194, 10);
  ellipse(130, 194, 10);
  ellipse(160, 194, 10);
  pop();
}
