let state = 0;

function setup() {
  createCanvas(500, 500);
  textAlign(CENTER);
  textSize(32);
}

function draw() {
  switch (state) {
    case 0:
      background('purple');
      text("What is thin, white, and scary?", 250, 250);
      break;


    case 1:
      background('green');
      text("Homework", 250, 250);
      break;

  }


}

function mouseReleased() {
  state = state + 1;
  if (state > 1) {
    state = 0;
  }
}
