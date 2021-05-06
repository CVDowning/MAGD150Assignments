function setup() {
  createCanvas(500, 500);
  background(0)
}

function draw() {
  //Color Codes
  let skyBlue = color('#7DBCDE')
  let tideBlue = color('#51A2D5')
  let coastBlue = color('#1C70C8')
  let oceanBlue = color('#022F8E')
  let deepSeaBlue = color('#030C54')
  let darkBlue = color('#01013F')
  
  
  
  //Creates sun on right
  //RBG color mode
  noStroke();
  strokeWeight(1);
  fill(255, 195, 0);
  ellipse(450, 250, 75);
  
  //Create left face of cube
  //Hex color mode
  fill(deepSeaBlue);
  beginShape();
  vertex(200, 50);
  vertex(200, 450);
  vertex(105, 323);
  vertex(105, 177);
  beginContour();
  vertex(162, 175);
  vertex(125, 200);
  vertex(125, 300);
  vertex(162, 325);
  endContour();
  endShape(CLOSE);
  
  //Left face contour depth
  fill(darkBlue);
  //upper contour depth
  triangle(125, 200, 162, 175, 162, 206);
  //upper left cross section piece
  stroke(0);
  strokeWeight(3);
  line(125, 200, 162, 206);
  //middle contour depth
  noStroke();
  quad(125, 200, 162, 206, 162, 294, 125, 300);
  //lower left cross section piece
  stroke(0);
  strokeWeight(3)
  line(125, 300, 162, 294);
  //lower contour depth
  noStroke();
  strokeWeight(1);
  triangle(125, 300, 162, 294, 162, 325)
  
  //Create right face of cube
  noStroke();
  fill(oceanBlue);
  beginShape();
  vertex(200, 50);
  vertex(359, 177);
  vertex(359, 323);
  vertex(200, 450);
  beginContour();
  vertex(325, 200);
  vertex(262, 175);
  vertex(262, 325);
  vertex(325, 300);
  endContour();
  endShape(CLOSE);
  
  //right face contour depth
  fill(deepSeaBlue);
  //upper right contour depth
  noStroke();
  quad(262, 175, 325, 200, 285, 207, 262, 201);
  //upper right interior contour depth
  fill(darkBlue);
  triangle(285, 207, 262, 201, 262, 211);
  //upper Right long cross brace
  stroke(0);
  line(325, 200, 262, 211);
  //backside upper right interior contour depth
  fill(coastBlue);
  noStroke();
  quad(262, 211, 285, 207, 285, 222, 262, 225);
  //middle right contour depth
  fill(deepSeaBlue);
  quad(285, 207, 325, 200, 325, 300, 285, 293);
  //lower right long cross brace
  stroke(0);
  line(325, 300, 262, 289);
  //backside lower right interior contour depth
  noStroke();
  fill(coastBlue);
  quad(262, 275, 285, 278, 285, 293, 262, 289);
  //lower right interior contour depth
  fill(darkBlue);
  triangle(285, 293, 262, 299, 262, 289);
  //lower right contour depth
  fill(deepSeaBlue);
  quad(262, 299, 285, 293, 325, 300, 262, 325);
  //right cross section pieces
  stroke(0);
  line(285, 207, 285, 293);//upward brace
  line(285, 207, 262, 201);//upper short brace
  line(285, 293, 262, 299);//lower short brace
  
  //Creates landmasses on Cube
  //HSB color mode
  push();
  
  //Upper right landmass
  colorMode(HSB, 360, 100, 100, 100);
  stroke(135, 100, 50);
  strokeWeight(1);
  fill(135, 100, 50);
  beginShape();
  vertex(200, 50);
  vertex(200, 140);
  vertex(250, 120);
  vertex(275, 165);
  vertex(300, 140);
  vertex(320, 146);
  endShape(CLOSE);
  
  //left middle right land mass
  beginShape();
  vertex(200, 200);
  vertex(245, 190);
  vertex(262, 225);
  vertex(262, 250);
  vertex(230, 315);
  vertex(200, 325);
  endShape(CLOSE);
  
  //right middle right land mass
  beginShape();
  vertex(359, 225);
  vertex(359, 255);
  vertex(340, 294);
  vertex(325, 276);
  vertex(325, 240);
  vertex(350, 200);
  endShape(CLOSE);
  
  //interior middle right landmass
  fill(135, 100, 20);
  stroke(135, 100, 20);
  beginShape();
  vertex(325, 276);
  vertex(325, 240);
  vertex(300, 230);
  vertex(285, 240);
  vertex(285, 265);
  vertex(305, 285);
  endShape(CLOSE);
  
  //bottom right land mass
  stroke(135, 100, 50);
  fill(135, 100, 50);
  beginShape();
  vertex(310, 362);
  vertex(200, 450);
  vertex(200, 385);
  vertex(225, 390);
  vertex(240, 355);
  vertex(280, 345);
  endShape(CLOSE);
  
  //upper left landmass
  fill(135, 100, 20);
  stroke(135, 100, 20);
  beginShape();
  vertex(200, 50);
  vertex(153, 114);
  vertex(150, 135);
  vertex(175, 120);
  vertex(185, 150);
  vertex(200, 140);
  vertex(200, 50);
  endShape(CLOSE);
  
  //left middle left landmass
  beginShape();
  vertex(105, 200);
  vertex(125, 225);
  vertex(125, 269);
  vertex(118, 300);
  vertex(105, 280);
  endShape(CLOSE);
  
  //left middle interior left landmass
  fill(135, 100, 8);
  stroke(135, 100, 8);
  beginShape();
  vertex(125, 225);
  vertex(142, 208);
  vertex(162, 235);
  vertex(162, 260);
  vertex(155, 285);
  vertex(125, 269);
  endShape(CLOSE);
  
  //right middle left landmass
  fill(135, 100, 20);
  stroke(135, 100, 20);
  beginShape();
  vertex(162, 180);
  vertex(189, 160);
  vertex(200, 200);
  vertex(200, 325);
  vertex(178, 340);
  vertex(162, 310);
  endShape(CLOSE);
  
  //bottom left landmass
  beginShape();
  vertex(175, 367);
  vertex(200, 385);
  vertex(200, 450);
  vertex(135, 363);
  vertex();
  endShape(CLOSE);
  pop();
  
  //creates planetary disc
  //RGB Color mode
  colorMode(RGB, 255, 255, 255);
  noFill();
  //theoretical placement of disc
  /*stroke(255);
  ellipse(225, 255, 325, 45);
  ellipse(225, 265, 450, 100);*/
  //Where the disc is actually
  stroke(255, 20, 100);
  bezier(105, 231, -250, 350, 750, 350, 359, 233);
  stroke(50, 200, 200);
  bezier(105, 232, -244, 346, 744, 346, 359, 234);
  stroke(255, 20, 100);
  bezier(105, 232, -235, 342, 735, 342, 359, 234);
  stroke(50, 200, 200);
  bezier(105, 233, -226, 339, 726, 339, 359, 235);
  stroke(255, 20, 100);
  bezier(105, 233, -217, 335, 717, 335, 359, 235);
  stroke(50, 200, 200);
  bezier(105, 234, -208, 332, 708, 332, 359, 236);
  stroke(255, 20, 100);
  bezier(105, 234, -199, 328, 699, 328, 359, 236);
  stroke(50, 200, 200);
  bezier(105, 235, -190, 325, 690, 325, 359, 237);
  stroke(255, 20, 100);
  bezier(105, 235, -181, 321, 681, 321, 359, 237);
  stroke(50, 200, 200);
  bezier(105, 236, -172, 318, 672, 318, 359, 238);
  stroke(255, 20, 100);
  bezier(105, 236, -163, 314, 663, 314, 359, 238);
  stroke(50, 200, 200);
  bezier(105, 237, -154, 311, 654, 311, 359, 239);
  stroke(255, 20, 100);
  bezier(105, 237, -145, 307, 645, 307, 359, 239);
  stroke(50, 200, 200);
  bezier(105, 238, -136, 304, 636, 304, 359, 240);
  stroke(255, 20, 100);
  bezier(105, 238, -127, 300, 627, 300, 359, 240);
  stroke(50, 200, 200);
  bezier(105, 239, -118, 297, 618, 297, 359, 241);
  stroke(255, 20, 100);
  bezier(105, 239, -109, 293, 609, 293, 359, 241);
  stroke(50, 200, 200);
  bezier(105, 240, -100, 290, 600, 290, 359, 242);
  
  
  /*horizon points
  stroke(255);
  strokeWeight(4);
  point(50, 250);
  point(450, 250);
  //exact center of cube point
  point(232, 250);*/
  
  //Interior planetary disc points
  /* //Right Interior planetary disc points
  point(285, 222);
  point(285, 234);
  //left interior planetary disc points
  point(262, 226);
  point(262, 233);*/
  //Interior planetary disc lines
  strokeWeight(1);
  stroke(255, 20, 100);
  line(262, 233, 285, 234);
  stroke(50, 200, 200);
  line(262, 232, 285, 233);
  stroke(255, 20, 100);
  line(262, 231, 285, 232);
  stroke(50, 200, 200);
  line(262, 230, 285, 231);
  stroke(255, 20, 100);
  line(262, 229, 285, 230);
  stroke(50, 200, 200);
  line(262, 228, 285, 229);
  stroke(255, 20, 100);
  line(262, 227, 285, 228);
  stroke(50, 200, 200);
  line(262, 226, 285, 227);
  stroke(255, 20, 100);
  line(267, 225, 285, 226);
  stroke(50, 200, 200);
  line(273, 224, 285, 225);
  stroke(255, 20, 100);
  line(279, 223, 285, 224);
  stroke(50, 200, 200);
           point(285, 222);
}