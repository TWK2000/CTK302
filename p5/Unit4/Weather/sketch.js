// var weather;
// var weatherID = 0; // returned in the JSON weather element
// var myState = 0;
// var x = 0;
// var windspeed = 0;
// var temperature = 0;
// var humudity = 0;
// var name;
//
//
// function setup() {
//   createCanvas(400, 400);
//
//
//   // HERE is the call to get the weather.
//
//   var myCityString = 'https://api.openweathermap.org/data/2.5/weather?q=Atlanta,GA,US&units=imperial&';
//
//   //You can also use "zipcode" - var myJSONString = 'https://api.openweathermap.org/data/2.5/weather?zip=61820,us&units=imperial&';
//
//   var myIDString = 'appid=0e06ae4aec7e055affa00fc4f9698039'; // USE YOUR ID HERE, take out the x's!!!
//
//   var myBigString = myCityString + myIDString;
//
//   loadJSON(myBigString, gotData); // that gotData function happens when JSON comes back.
//
// }
//
//
// function gotData(data) {
//
//   weather = data;
//   console.log(weather); // for debugging purposes, print out the JSON data when we get it.
//   windspeed = weather.wind.speed;
//   temperature = weather.main.temp;
//   humidity = weather.main.humidity
//   name = weather.name;
//
// }
//
//
// function draw() {
//
//   switch (myState) {
//     case 0:
//       if (weather) {
//         myState = 1;
//       }
//       break;
//
//     case 1:
//       background(50, 180, 250, 100);
//       fill('black');
//       text("What is the weather in " + weather.name + "?", 20, 20);
//       text("windspeed is " + windspeed, 20, 40);
//       text("humidity is " + humidity + '%', 20, 60);
//       text("temperature is " + temperature, 20, 80);
//
//
//       // cloud
//       translate(x, 0);
//       x++;
//       fill(255, 255, 255);
//       noStroke();
//       ellipse(100, 100, 30);
//       ellipse(110, 110, 30);
//       ellipse(120, 95, 50, 40);
//       ellipse(130, 105, 30);
//
//
//
//       // fill('white');
//       // noStroke();
//       // ellipse(x, 300, 200, 100);
//
//       // move the cloud's x position
//       // x = x + windspeed;
//       // if (x > width) x = 0;
//       x = x + windspeed;
//       if (x + 85 > width) {
//         x = -145;
//       }
//       break;
//
//
//
//
//
//   }
// }



var weather;
var weatherID = 0; // returned in the JSON weather element
var myState = 0;
var x = 0;
var windspeed = 0;
var temperature = 0;
var humudity = 0;
var name;
 var suns = [i,];
 var i = 0


function setup() {
  createCanvas(400, 400);
  suns[i] = new Sun();


  // HERE is the call to get the weather.

  var myCityString = 'https://api.openweathermap.org/data/2.5/weather?q=Atlanta,GA,US&units=imperial&';

  //You can also use "zipcode" - var myJSONString = 'https://api.openweathermap.org/data/2.5/weather?zip=61820,us&units=imperial&';

  var myIDString = 'appid=0e06ae4aec7e055affa00fc4f9698039'; // USE YOUR ID HERE, take out the x's!!!

  var myBigString = myCityString + myIDString;

  loadJSON(myBigString, gotData); // that gotData function happens when JSON comes back.

}


function gotData(data) {

  weather = data;
  console.log(weather); // for debugging purposes, print out the JSON data when we get it.
  windspeed = weather.wind.speed;
  temperature = weather.main.temp;
  humidity = weather.main.humidity
  name = weather.name;

}


function draw() {
suns[i].display();

  switch (myState) {
    case 0:
      if (weather) {
        myState = 1;
      }
      break;

    case 1:
       background(50, 180, 250, 100);
      fill('black');
      text("What is the weather in " + weather.name + "?", 20, 20);
      text("windspeed is " + windspeed, 20, 40);
      text("humidity is " + humidity + '%', 20, 60);
      text("temperature is " + temperature, 20, 80);


      // cloud
      translate(x, 0);
      x++;
      fill(255, 255, 255);
      noStroke();
      ellipse(50,50,60,50);
  ellipse(80,40,60,50);
  ellipse(130,50,60,50);
  ellipse(70,70,60,50);
  ellipse(110,65,60,50);
      // ellipse(100, 100, 30);
      // ellipse(110, 110, 30);
      // ellipse(120, 95, 50, 40);
      // ellipse(130, 105, 30);



      // fill('white');
      // noStroke();
      // ellipse(x, 300, 200, 100);

      // move the cloud's x position
      // x = x + windspeed;
      // if (x > width) x = 0;
      x = x + windspeed;
      if (x + 85 > width) {
        x = -145;
      }
      break;





  }
}

function Sun() {
   this.x = 40
   this.y = 40

  this.display = function() {
    noStroke()
    fill(255, 255, 0)
    ellipse(this.x, this.y + 10, 130, 130)
    strokeWeight(4)
    stroke(255, 255, 0)
    line(this.x + 60, this.y - 35, 190, 07)
    line(this.x + 80, this.y - 10, 240, 50)
    line(this.x + 75, this.y + 20, 290, 150)
    line(this.x + 60, this.y + 55, 310, 290)
    line(this.x + 30, this.y + 80, 200, 330)
    line(this.x - 10, this.y + 90, 60, 320)
  }
    }






// var suns = [i,];
// var i = 0

// function setup() {
//   createCanvas(600, 400);

//   suns[i] = new Sun();
// }

// function draw() {
//   background(190, 250, 255);
//   suns[i].display();



//      }

// function Sun() {
//   this.x = 40
//   this.y = 40

//   this.display = function() {
//     noStroke()
//     fill(255, 255, 0)
//     ellipse(this.x, this.y + 10, 130, 130)
//     strokeWeight(4)
//     stroke(255, 255, 0)
//     line(this.x + 60, this.y - 35, 190, 07)
//     line(this.x + 80, this.y - 10, 240, 50)
//     line(this.x + 75, this.y + 20, 290, 150)
//     line(this.x + 60, this.y + 55, 310, 290)
//     line(this.x + 30, this.y + 80, 200, 330)
//     line(this.x - 10, this.y + 90, 60, 320)
//   }
// }
