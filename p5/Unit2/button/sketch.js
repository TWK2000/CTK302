let myState = 0;

function setup() {
  createCanvas(500, 500);
}

function draw() {

  switch (myState) {
    case 0 :
    background('white') ;
    text("case 0", 250, 250) ;
    break ;

    case 1 :
    background('blue') ;
    text("case 1", 250, 250) ;
    break ;

    case 2 :
    background('orange') ;
    text("case 2", 250, 250) ;
    break ;

  }

fill('red') ;
rect(100, 100, 100, 100) ;

}


function mouseReleased() {

if ((mouseX > 100) && (mouseX < 200) && (mouseY > 100) && (mouseY < 200)) {
  myState++ ;
  if (myState > 2) {
    myState = 0 ;
  }
}
}
