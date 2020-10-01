var mic;
var vol;
let state = 0;
let timer = 0;

function setup() {
  createCanvas(500, 500);

  //code for initializing mic in
  mic = new p5.AudioIn();
  mic.start()
}


function draw() {
  background(100);

  //get the sound input
  vol = (mic.getLevel()).toFixed(2); // returned level is between 0 and 1

  //check how loud the input inspect


  switch (state) {
    case 0:
      background('red')
      text("Shhh", 250, 250)
      if (vol > 0.10) {
        state = 1;
      }
      break;

    case 1:
      background('purple');
      text("QUIET DOWN", 250, 250)
      timer = timer + 1;
      if (timer > 3 * 60) {
        state = 0;
        timer = 0;
      }
      break;

  }


}
