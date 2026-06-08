
function setup() {
  createCanvas(600, 400); 
  noLoop(); 
  rectMode(CENTER); 
  ellipseMode(CENTER);
  angleMode(DEGREES); 
}
function draw() {
  background(245, 235, 220); 
  //hair
  fill(20); noStroke();
  beginShape();
  vertex(300, 88);
  bezierVertex(375, 88, 420, 125, 430, 178);
  bezierVertex(440, 245, 435, 325, 425, 400);
  vertex(175, 400);
  bezierVertex(165, 325, 160, 245, 170, 178);
  bezierVertex(180, 125, 225, 88, 300, 88);
  endShape(CLOSE);
  //left_hair
  fill(20); noStroke();
  beginShape();
  vertex(213, 148);
  bezierVertex(198, 195, 194, 258, 198, 315);
  bezierVertex(202, 355, 208, 382, 212, 400);
  vertex(228, 400);
  bezierVertex(222, 375, 217, 342, 215, 298);
  bezierVertex(212, 238, 215, 178, 226, 146);
  endShape(CLOSE);
  //right_hair
  beginShape();
  vertex(387, 148);
  bezierVertex(402, 195, 406, 258, 402, 315);
  bezierVertex(398, 355, 392, 382, 388, 400);
  vertex(372, 400);
  bezierVertex(378, 375, 383, 342, 385, 298);
  bezierVertex(388, 238, 385, 178, 374, 146);
  endShape(CLOSE);

  //clothes
  fill(255, 225, 205); 
  stroke(0, 30); strokeWeight(1);
  rect(300, 355, 52, 50);
  fill(237, 173, 208);
  noStroke();
  beginShape();
  vertex(150, 400);vertex(242, 372); vertex(280, 366);
  vertex(300, 376); vertex(320, 366); vertex(358, 372);vertex(450, 400);
  endShape(CLOSE);
  // 2. FACE
  fill(255, 225, 205); stroke(0, 50); 
  ellipse(300, 220, 180, 240);
  fill(255, 160, 140, 80);noStroke();
  ellipse(245, 238, 50, 22); ellipse(355, 238, 50, 22);
  // 3. HAT 
  fill(240);noStroke();
  arc(300, 140, 220, 140, 180, 360, CHORD);
  rect(300, 140, 220, 40, 20);
  // Heart 
  fill(20);strokeWeight(1);
  ellipse(293, 125, 12, 12);ellipse(307, 125, 12, 12);
  triangle(287, 128, 313, 128, 300, 142);
  // Eyes 
  fill(255); stroke(0); strokeWeight(1.5);
  ellipse(260, 200, 40, 25); ellipse(340, 200, 40, 25);
  fill(60, 30, 20); noStroke();
  ellipse(260, 200, 18, 18); ellipse(340, 200, 18, 18);
  fill(255); noStroke();
  ellipse(253, 195, 7, 7); ellipse(333, 195, 7, 7);
  // Nose
  noFill();stroke(0);strokeWeight(2);
  bezier(310, 255, 280, 240, 315, 210, 300, 200);
  // Mouth 
  noFill();
  strokeWeight(2);stroke(200, 80, 80);
  beginShape();
  curveVertex(230, 400);curveVertex(285, 300);
  curveVertex(310, 300);curveVertex(250, 340);
  endShape();
  noFill();
  strokeWeight(2);stroke(200, 80, 80);
  beginShape();
  curveVertex(290, 400);curveVertex(310, 300);curveVertex(335, 300);curveVertex(230, 340);
  endShape();
  noFill();
  strokeWeight(2); stroke(200, 80, 80); 
  beginShape();  curveVertex(285, 300); 
  curveVertex(285, 300); curveVertex(310, 308); 
  curveVertex(335, 300); curveVertex(335, 300); 
  endShape();
  //long)may
  noFill();
  stroke(50);strokeWeight(3.5);
  bezier(235, 180, 250, 165, 270, 175, 280, 180);
  bezier(315, 180, 340, 171, 345, 165, 365, 180);
}