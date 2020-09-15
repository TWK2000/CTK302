var x = 0 ;

function setup() {
  createCanvas(500, 500);
}

function draw() {
background(100);


text("Tahj The Libra", x, 250);
//rect(x, 250, 50, 50);
x = x + 3
if (x > width) {
  x = 0 ;
}

}
