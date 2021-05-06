/*Adhere to the theme to be determined in lab. (10 pts.)
Mirrors

Ensure that the sketch runs without errors and has a t least function setup() and function draw() functions. Ensure the sketch runs from the HTML file. (10 pts.)
Place all files (Index.html, p5.js, and your sketch and/or class .js files) into a sketch folder. Name the HTML file and folder according to the following convention: s21magd150lab09_yourlastname. 
Compress the sketch folder into a .zip file and upload to Canvas. (10 pts.)*/

let scratch = false;
let playing = false;
let candleTop;
let button;
let slowMotion;

function preload() {
  soundFormats('mp3', 'ogg', 'wav');
  slowMotion = loadSound('slowMotion.mp3');
}

function setup() {
  	// specify multiple formats for different browsers
  	candleTop = createVideo(['candleTop.mp4']);
  	candleTop.size(370, 650);
    candleTop.mousePressed(playOscillator);
    osc = new p5.Oscillator('sawtooth');
  	button = createButton('play');
  	button.mousePressed(toggleVid); // attach button listener
}

function draw() {
  freq = constrain(map(mouseX, 0, width, 0, 100), 100, 500);
 	amp = constrain(map(mouseY, height, 0, 0, 0.1), 0, 1);
  if (scratch) {
    // smooth the transitions by 0.1 seconds
    osc.freq(freq, 0.1);
    osc.amp(amp, 0.1);
 	}
}

function playOscillator() {
  	// starting an oscillator on a user gesture will enable audio
  	// in browsers that have a strict autoplay policy.
  	// See also: userStartAudio();
    osc.start();
  	scratch = true;
}

function mouseReleased() {
  	// ramp amplitude to 0 over 1.5 seconds
 	  osc.amp(0, 1.5);
  	scratch = false;
}

// plays or pauses the video depending on current state
function toggleVid() {
  if (playing) {
    candleTop.pause();
    slowMotion.pause();
    button.html('play');
  } else {
    candleTop.loop();
    slowMotion.loop();
    button.html('pause');
  }
  playing = !playing;
}
