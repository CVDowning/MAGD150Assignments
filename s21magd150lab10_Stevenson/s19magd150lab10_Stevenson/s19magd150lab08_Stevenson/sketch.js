function preload() {
  // Make a new instance of a PImage by loading an image file
  spark = loadImage("Sparkle.jpg");
}

function setup() {
  createCanvas(750, 750, WEBGL);
}

function draw() {
  background(220);
  
  let locX = mouseX - height / 2;
  let locY = mouseY - width / 2;
  
  camera(mouseX*1.5, mouseY*1.5, 20 + sin(frameCount * 0.01) * 10, -50, -50, -50, 4, 1, 0);
  
  push();
  rotateX(millis() / 500)
  rotateY(millis() / 500)
  rotateZ(millis() / 500)
  normalMaterial();
  translate(-100, 100, 100)
  plane(50);
  pop();
  
  push();
  rotateX(millis() / 1000)
  rotateY(millis() / 1000)
  rotateZ(millis() / 1000)
  translate(50, 25, -250)
  pointLight(0, 56, 134, locX, locY, 50);
  ambientLight(75);
  ambientMaterial(171, 100, 0);
  noStroke();
  sphere(100)
  pop();
  
  push();
  rotateY(millis() / 100)
  translate(0, 0, 0)
  noStroke();
  texture(spark);
  cone(100);
  pop();
}