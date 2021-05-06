// Where is the circle
let x1, x2, x3, y;
let leftWall = 100;
let rightWall = 600;
var bubbleX, bubbleY;
bubbleClick = false;

function setup() {
  createCanvas(720, 400);
  // Starts in the middle
  x1 = constrain(random(720), leftWall, rightWall);
  x2 = constrain(random(720), leftWall, rightWall);
  x3 = constrain(random(720), leftWall, rightWall);
  y = height;
}

print("The value of x1 = " + x1);
print("The value of x2 = " + x2);
print("The value of x3 = " + x3);

function draw() {
  clear(0, 0, canvas.width, canvas.height);
  colorMode(RGB, 255, 255, 255);
  background(0, 41, 58);
  // Draw a circle
  stroke(0, 41, 58);
  let bubbleBlue = color('#97C0CF');
  fill(bubbleBlue);
  ellipse(x1, y, 37);
  ellipse(x2, y*1.5, 42);
  ellipse(x3, y, 50);
  ellipse(x1 - x1/2, y*2.5, 22);
  ellipse(x2 - x2/2, y*2, 30);
  ellipse(x3 - x3/2, y*2, pow(5, 2), pow(5, 2));
  
  if (bubbleClick) {
    ellipse(bubbleX, bubbleY, 50);
    bubbleX = bubbleX + random(-1, 1);
    bubbleY = bubbleY - 1;
    if (bubbleY < -10){
      bubbleY = height;
    }
  }
  
  // Jiggling randomly on the horizontal axis
  x1 = x1 + random(-1, 1);
  x2 = x2 + random(-1, 1);
  x3 = x3 + random(-1, 1);
  // Moving up at a constant speed
  y = y - 1;
  
  // Reset to the bottom
  if (y < -30) {
    
  // Draw a circle
    stroke(0, 41, 58);
    let bubbleBlue = color('#97C0CF');
    fill(bubbleBlue);
    ellipse(x1, y, 37);
    ellipse(x2, y*1.5, 42);
    ellipse(x3, y, 50);
    ellipse(x1 - x1/2, y*2.5, 22);
    ellipse(x2 - x2/2, y*2, 30);
    ellipse(x3 - x3/2, y*2, pow(5, 20));
   
    if (bubbleClick) {
      ellipse(bubbleX, bubbleY, 50);
      bubbleX = bubbleX + random(-1, 1);
      bubbleY = bubbleY - 1;
    }
    
    // Jiggling randomly on the horizontal axis
    x1 = x1 + random(-1, 1);
    x2 = x2 + random(-1, 1);
    x3 = x3 + random(-1, 1);
    // Moving up at a constant speed
    y = y - 1;
  
    // Reset to the bottom
    if (y < -15) {
      x1 = constrain(random(720), leftWall, rightWall);
      x2 = constrain(random(720), leftWall, rightWall);
      x3 = constrain(random(720), leftWall, rightWall);
      y = height;
    }
  }
}

function mousePressed() {
  bubbleX = map(mouseX, 0, width, leftWall, rightWall, true);
  bubbleY = mouseY;
  bubbleClick = !bubbleClick;
}