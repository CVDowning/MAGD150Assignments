var lax1 = 170;
var lay1 = 5;
var lax2 = 172;
var lay2 = 4;
var rax1 = 228;
var ray1 = 4;
var rax2 = 230;
var ray2 = 5;
var aw = 70;
var ah = 12;
var on = false;
var off = true;
var channel1 = false;
var channel2 = false;
var channel3 = false;
var gameOn = false;
var d;
//circular power button values
var circleX = 325;
var circleY = 150;
var radius = 20;
//rect input button values
var rx = 310;
var ry = 175;
var rw = 30;
var rh = 15;
var lineHeight = 265;
//rect game button values
var cx = 148;
var cy = 335;
var cw = 104;
var ch = 21;
let r;
//screen values for pong
var topEdge = 75;
var bottomEdge = 275;
var leftEdge = 75;
var rightEdge = 300;
//create the pong ball
var bx = 186;
var by = 200;
var bw = 10;
var bh = 10;
let ball;
//create a computer paddle sprite
var cpx = 90;
var cpw = 4;
var cph = 25;
//create a user paddle sprite
var p1x = 285;
var p1w = 4;
var p1h = 25;
var velocityX = 0;
var velocityY = 0;
var gameState = "serve";
let computerScore = 0;
let playerScore = 0;

function setup() {
  createCanvas(400, 400);
  background(220);
}

function draw() {
  //Creates TV
  stroke(0);
  strokeWeight(1);
  fill(120, 81, 45);
  rect(50, 50, 300, 250, 2);
  //Creates Screen
  fill(0);
  rect(75, 75, 225, 200, 15);
  //Creates TV legs
  fill(120, 81, 45);
  beginShape();
  vertex(100, 300);
  vertex(120, 300);
  vertex(85, 370);
  vertex(75, 370);
  endShape(CLOSE);
  beginShape();
  vertex(280, 300);
  vertex(300, 300);
  vertex(325, 370);
  vertex(315, 370);
  endShape(CLOSE);
  //Creates TV Antenna(bunny ears)
  fill(50);
  angleMode(RADIANS);
  arc(200, 50, 100, 30, PI, 0, CHORD);
  push();
  angleMode(DEGREES)
  rotate(-15);
  translate(-10, 28);
  rect(170, 20, 3, 32)
  pop();
  push();
  angleMode(DEGREES)
  rotate(15);
  translate(0, -94);
  rotate(5);
  rect(228, 20, 3, 32)
  pop();
  //Create "Atari" at foot of tv.
  rect(148, 350, 104, 15);
  rect(148, 353, 104, 15);
  rect(148, 356, 104, 15);
  noStroke();
  fill(120, 81, 45);
  rect(150, 359, 100, 10, 10);
  stroke(0);
  fill(50);
  beginShape();
  vertex(155, 350);
  vertex(160, 340);
  vertex(240, 340);
  vertex(245, 350);
  endShape(CLOSE);
  fill(40);
  rect(190, 335, 20, 11);
  fill(192, 192, 192);
  ellipse(170, 345, 3, 6);
  ellipse(180, 345, 3, 6);
  ellipse(220, 345, 3, 6);
  ellipse(230, 345, 3, 6);
  //creates controllers and cables to TV 
  push();
  scale(1.5);
  translate(-37, -127);
  fill(50);
  rect(100, 380, 25, 15);
  rect(100, 380, 25, 10);
  rect(110, 372, 4, 14);
  fill(255, 0, 0);
  ellipse(105, 387, 3)
  pop();
  noFill();
  strokeWeight(2);
  beginShape();
  vertex(120, 380);
  bezierVertex(160, 340, 150, 450, 170, 340);
  endShape();
  strokeWeight(3);
  beginShape();
  vertex(230, 338);
  bezierVertex(250, 320, 300, 400, 300, 360);
  bezierVertex(275, 325, 275, 350, 260, 302);
  endShape();

  strokeWeight(1);
  //if the mouse is over the circle
  if (overCircle(circleX, circleY, radius)) {
    //turn the fill on for 'mouse over' effect
    fill(0);
  } else { //if it isn't over the circle
    fill(70, 70, 70);
  }
  ellipse(circleX, circleY, radius);

  //Creates text to let user know that that's where power input is.
  let onOff = 'POWER';
  fill(255);
  textSize(4);
  text(onOff, 317, 148, 70, 80);

  //Changes Color of rect when mouse is over rect.
  if (overRect(rx, ry, rw, rh)) {
    fill(0, 102, 153);
  } else {
    fill(70, 70, 70);
  }
  rect(rx, ry, rw, rh);

  //Creates text to let user know where channel input is
  let s = 'INPUT';
  fill(255);
  textSize(8);
  text(s, 314, 180, 70, 80);

  //Changes color of 'buttons' when mouse is over console
  if (overConsole(cx, cy, cw, ch)) {
    fill(178, 255, 102);
  } else {
    fill(192, 192, 192);
  }
  ellipse(170, 345, 3, 6);
  ellipse(180, 345, 3, 6);
  ellipse(220, 345, 3, 6);
  ellipse(230, 345, 3, 6);


  //Creates screen lighting when turned on and raster lines when input is applied.
  if (on) {
    var red = random(0, 255);
    var green = random(0, 255);
    var blue = random(0, 255);
    fill(red, green, blue);
    rect(75, 75, 225, 200, 15);
    if (channel1) {
      push();
      var r = random(0, 255);
      var g = random(0, 255);
      var b = random(0, 255);
      strokeWeight(3);
      stroke(r, g, b);
      line(76, lineHeight - 5, 299, lineHeight - 5);
      line(76, lineHeight, 299, lineHeight);
      line(76, lineHeight + 5, 299, lineHeight + 5);
      lineHeight--;
      if (lineHeight < 85) {
        lineHeight = 265;
      }
      let source1 = 'Channel 1' + ' ' + ' no input';
      fill(255);
      textSize(12);
      text(source1, 85, 85, 70, 80);
      pop();
    }
    if (channel2) {
      push();
      var cr = random(0, 255);
      var cg = random(0, 255);
      var cb = random(0, 255);
      stroke(cr, cg, cb);
      strokeWeight(3);
      line(76, lineHeight - 5, 299, lineHeight - 5);
      line(76, lineHeight, 299, lineHeight)
      line(76, lineHeight + 5, 299, lineHeight + 5);
      lineHeight++;
      if (lineHeight > 265) {
        lineHeight = 85;
        let source2 = 'Channel 2' + ' ' + ' no input';
        fill(255);
        textSize(12);
        text(source2, 85, 85, 70, 80);
        pop();
      }
    }
    if (channel3) {
      push();
      fill(3, 1, 252);
      rect(75, 75, 225, 200, 15);
      let source3 = 'Channel 3 ' + ' ' + ' no input';
      fill(255);
      textSize(12);
      text(source3, 85, 85, 70, 80);
      pop();
    }
    ////Creates Screen 300pxX275px
    if (channel3 && gameOn) {
      push();
      fill(0);
      rect(75, 75, 225, 200, 15);

      fill(255);
      var p1y = constrain(mouseY, 75, 250);
      let userPaddle = rect(p1x, p1y, p1w, p1h);

      //create a computer paddle sprite
      var cpy = constrain(by, 75, 250);
      let computerPaddle = rect(cpx, cpy, cpw, cph);

      //create the pong ball
      var bcy = constrain(by, 75, 265);
      let ball = ellipse(bx, bcy, 10, 10);


      //display Scores
      text(computerScore, 160, 90);
      text(playerScore, 212, 90);

      //draw dotted lines
      for (var i = 80; i < 275; i += 20) {
        stroke(255);
        line(186, i, 186, i + 10);
      }
      
      //Tells player how to start game
      if (gameState === "serve") {
        text("Press Space to Serve", 150, 180);
      }

      //Tells player how to restart game
      if (gameState === "over") {
        velocityX = 0;
        velocityY = 0;
        ball = ellipse(bx, by, 10, 10);
        text("Game Over!", 170, 160);
        text("Press 'R' to Restart", 150, 180);
      }
  
      //initializes play state
      if (gameState === "play") {
        bx += velocityX;
        by += velocityY;
      }

      if (keyCode == 82) {
        gameState = "serve";
      }


      //give velocity to the ball when the user presses play
      //assign random velocities later for fun
      if (keyCode == 32 && gameState == "serve") {
        velocityX = 3;
        velocityY = 3;
        bx += velocityX;
        by += velocityY;
        gameState = "play";
      }

      ballIsTouching();

      //place the ball back in the centre if it crosses the screen
      if (bx > 295 || bx < 85) {
        if (bx < 85) {
          playerScore++;
        } else {
          computerScore++;
        }

        gameState = "serve";

        if (computerScore === 5 || playerScore === 5) {
          gameState = "over";
        }
      }

      //add AI to the computer paddle so that it always hits the ball
      cpy = by;

      pop();
    }
  }
}

function keyPressed() {
  if (keyCode == 82) {
    gameState = "serve";
    computerScore = 0;
    playerScore = 0;
  } else if ((keyCode == 32) && gameState == "serve") {
    velocityX = 3;
    velocityY = 3;
    gameState = "play";
  }
}

/*if (keyPressed("r")) {
        gameState = "serve";
        computerScore = 0;
        playerScore = 0;
      }

      //give velocity to the ball when the user presses play
      //assign random velocities later for fun
      if (keyPressed("space") && gameState == "serve") {
        ball.velocityX = 5;
        ball.velocityY = 5;
        gameState = "play";
      }*/

//defines what happens to screen when button is pressed
function mousePressed() {
  if (overCircle(circleX, circleY, radius)) {
    on = !on;
  }
  if (overRect(rx, ry, rw, rh) && on) {
    channel1 = true;
    channel2 = false;
    channel3 = false;
  }
  if (overRect(rx, ry, rw, rh) && channel1) {
    channel1 = false;
    channel2 = true;
    channel3 = false;
  }
  if (overRect(rx, ry, rw, rh) && channel2) {
    channel1 = false;
    channel2 = false;
    channel3 = true;
  }
  if (channel3 && overConsole(cx, cy, cw, ch) && on) {
    gameOn = true;
  }
}

//tells code what to do when over the rectangle
function overRect(rx, ry, rw, rh) {
  if (mouseX > rx && mouseX < rx + rw && mouseY > ry && mouseY < ry + rh) {
    return true;
  } else {
    return false;
  }
}

//tells code what to do when over the circle
function overCircle(circleX, circleY, diameter) {
  var disX = circleX - mouseX;
  var disY = circleY - mouseY;
  if (sqrt(sq(disX) + sq(disY)) < diameter / 2) {
    return true;
  } else {
    return false;
  }
}

function overConsole(cx, cy, cw, ch) {
  if (mouseX > cx && mouseX < cx + cw && mouseY > cy && mouseY < cy + ch) {
    return true;
  } else {
    return false;
  }
}

function ballIsTouching() {
  //make the ball bounce off the user paddle
  if (bx == p1x || bx == cpx) {
    bx += 5;
    velocityX *= -1;
  }

  //make the ball bounce off the computer paddle
  //if (bx == cpx) {
   // bx += 5;
   //velocityX *= -1;
  //}
  
  if (bx == leftEdge || bx == rightEdge) {
    gameState = ("serve");
    velocityX = 0;
    velocityY = 0;
    ball = ellipse(bx, by, 10, 10);
  }

  //make the ball bounce off the top and bottom walls
  if (by == topEdge || by == bottomEdge) {
    velocityY *= -1;
  }
}
/*pong code pulled from: https://studio.code.org/projects/gamelab/l8gg2ID9B0WlHEEJqGS0jzX3nZ6XMF7Nz6oNYaaqcy4/view 

altered to work in p5js by Hunter Stevenson-Black*/