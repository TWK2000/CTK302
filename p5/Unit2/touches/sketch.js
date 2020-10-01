let numberOfTouches ;

function setup() {
  createCanvas(windowWidth, windowHeight);

}

function draw() {
  clear();
  numberOfTouches = touches.length; //utomatically available to us
  text(numberOfTouches + ' touches', 5, 10);

  switch(numberOfTouches) {
    case 0:
      text("no one is touching the screen", 5, 22) ;
      break ;

      case 1:
      background('blue');
       text("it's kind of lonely here", 5, 22) ;

      break ;

      case 2:
      background('yellow');
      text("Now Im geeked", 5, 22) ;
            // put a picture here
      break ;

      case 3:
      background('red');
     text("IT'S A PARTY!", 5, 22) ;
            // put a picture here
      break ;


  }

}
