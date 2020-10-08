let state = 0;
let song1, song2, song3;

function preload() {
  song1 = loadSound('assets/BlueOpps.mp3');
  song2 = loadSound('assets/Hi-Five.mp3');
  song3 = loadSound('assets/TopOff.mp3');

  song1.loop();
  song1.pause();
  song2.loop();
  song2.pause();
  song3.loop();
  song3.pause();

}


function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(24)
}


function draw() {

  switch (state) {


    case 0:
      song1.play();
      state = 1;
      break;

    case 1:
    background ('red');
      text("Music is a big part of my life, this first song represents a powerful vibe I give off", 100, 100);
      break;

    case 2:
      song2.play();
      state = 3;
      break;


    case 3:
    background ('yellow');
      text("This song represents the old school and soul vibe ", 100, 100);
      break;

    case 4:
      song3.play();
      state = 5;
      break;


    case 5:
    background ('blue');
      text("The last song represents the chill and mellow vibe that I give off", 100, 100);
      break;

  }
}

function mouseReleased() {
  state = state + 1;
  if (state > 5){
    state = 0;
  }

    song1.pause();
    song2.pause();
    song3.pause();
  }
