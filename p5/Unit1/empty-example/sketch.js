var f;
var f1;

function setup() {
  createCanvas(800, 800);

  f = loadFont("assets/sketch3d");
  f1 = loadFont("assets/sketch3d");

  textAlign(CENTER);
}

function draw() {
  background(100);

  textFont(f);
  textSize(60);
  text("Knowledge Is Strength", width / 2, height / 2);


}
