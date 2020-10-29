let cars = [];
let f1, f2, f3;
let bg;
let fonts = [];
let maxCars = 5;
let frogPos ;

function setup() {
  createCanvas(600, 600);
frogPos = createVector(width/2, height-80);
textAlign(CENTER);
rectMode(CENTER);

  f1 = loadFont("assets/Frightmare.ttf");
  f2 = loadFont("assets/HalloWitchZ.otf");
  f3 = loadFont("assets/ScaryHalloweenFont.ttf");
  bg = loadImage("assets/fallPic.jpg");

  fonts = [f1, f2, f3];

  // Spawn objects
  for (let i = 0; i < maxCars; i++) {
    cars.push(new Car());
  }

}

function draw() {
    background(100);
    image(bg, 0,0,width,height);
    //display and move 20 objects
    for (let i = 0; i < cars.length; i++) {
      cars[i].display();
      cars[i].move();
      if(cars[i].pos.dist(frogPos)< 50){

      }
    }
fill('green');
ellipse(frogPos.x,frogPos.y, 50, 50);
checkForKeys();
  }


//fucntion game() {
  //game() ;
//}


function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) frogPos.x -= 5;
  if (keyIsDown(RIGHT_ARROW)) frogPos.x += 5;
  if (keyIsDown(UP_ARROW)) frogPos.y -= 5;
  if (keyIsDown(DOWN_ARROW)) frogPos.y += 5;

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
    textFont(this.font);
    textSize(this.size);
    text("vote", this.pos.x, this.pos.y);

  }

  move() {
    this.pos.add(this.vel);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;

  }

}
