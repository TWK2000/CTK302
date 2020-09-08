var f;
var f1;

function setup() {
  createCanvas(800, 800);

  f = loadFont("assets/Groovy.ttf");
  f1 = loadFont("assets/sketch3d.ttf");

  textAlign(CENTER);
}

function draw() {
  background(100);

fill('white')
  textFont(f);
  textSize(60);
  text("Knowledge Is Strength", width / 2, height / 2);

 fill('red')
    textFont(f1);
    textSize(100);
    text("Spritual Awakening", width / 2, height / 2 + 100);


}
