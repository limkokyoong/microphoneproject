let mic;//variable to store the mp3 file
let 
let N = 200;
let x = 40;
let y = 40;

function setup() {
  let cnv = createCanvas(windowWidth, windowHeight);
  // cnv.mousePressed(userStartAudio);
  // userStartAudio();
  background(0);
  stroke(255);
  
  //creates a new instance of the p5.AudioIn object and assigns it to the mic variable.
  mic = new p5.AudioIn();
  //starts the microphone input.
  // mic.start();
  
}

function draw() {
  
  // use the getLevel() method to read the amplitude (volume level) of the audio.
  micLevel = mic.getLevel();
  // now you have assigned the micLevel value to a variable called micLevel so you can use this to modulate the properties of your pattern
  let M = micLevel*N;
  
  stroke(255);
  strokeWeight(M);
  
  
  if (y <= height - 40) {
    line(x - 5, y - 5, x + 5, y + 5);
    // ellipse(x,y,M*100,M*100);
    x += 25;
  }
  if (x > width - 40) {
    x = 40;
    y += 10;
  }
  if (y >= height - 40) {
    x = 40;
    y = 40;
    background(0);
  }
  console.log(micLevel);
}

function mousePressed() {
  mic.start();
}



