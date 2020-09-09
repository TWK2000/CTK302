function setup() {
  createCanvas(400, 400);
}
function draw() {
  if (mouseIsPressed) {
   // background(138, 119, 106);
  } else {
    background(201, 129, 77)
  }

  //headphones
  if (mouseIsPressed){
  fill('black');
  arc(25, 199, 80, 80, PI/2, PI + PI/2, CHORD);

  noStroke();
  arc(312, 199, 80, 80, PI + PI/2, PI/2, CHORD);


  arc(170, 159, 290, 200, PI, 0, CHORD);

  fill(201, 129, 77);
  arc(170, 170, 290, 200, PI, 0, CHORD);
  }
  //eyes
  fill('white')
  ellipse(100,196,110,100); //eye 1

  fill('brown')
  ellipse(100,196,50,50); //eye 1 pupil

  fill('black')
  ellipse(100, 196, 20, 20); //eye 1 retna

  fill('white')
  ellipse(218, 196, 110, 100); //eye 2

  fill('brown')
  ellipse(218, 196, 50,50); //eye 2 pupil

  fill('black')
  ellipse(218, 196, 20, 20); //eye 2 retna


  let c = color(245, 180, 110);
fill(c);
  strokeWeight(1);
stroke(51);
  rect(140, 297, 45, 45);





  fill('white')
  text(mouseX + ', ' + mouseY,20,20);

  print(mouseIsPressed);
}
  
