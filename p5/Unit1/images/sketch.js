var img1, img2, img3;

function setup() {
  createCanvas(800, 800);
  imageMode(CENTER)

  img1 = loadImage("assets/Tupac.jpg") 
  img2 = loadImage("assets/Malcom X1.png")
  img3 = loadImage("assets/EDD1.jpg")

}


function draw() {

  background(100);
  image(img1, width/2, height/2, 200, 200);
  image(img1, width/2, height/2-210, 200, 200);
  image(img1, width/2, height/2+210, 200, 200);
}
