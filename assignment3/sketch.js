
let bobY = 0;
let expr = 0;
let hatR = 240, hatG = 240, hatB = 240;
let bgR = 245, bgG = 235, bgB = 220;

function setup() {
  createCanvas(600, 400);
  rectMode(CENTER);
  ellipseMode(CENTER);
  angleMode(DEGREES);
}

function draw() {
  background(bgR, bgG, bgB);
  bobY = sin(frameCount * 3) * 4;
  let exX = map(mouseX, 0, 600, -5, 5);
  let exY = map(mouseY, 0, 400, -3, 3);

  push();
  translate(0, bobY);

  // hair back
  fill(20); noStroke();
  beginShape();
  vertex(300, 88); bezierVertex(375, 88, 420, 125, 430, 178);
  bezierVertex(440, 245, 435, 325, 425, 400);
  vertex(175, 400); bezierVertex(165, 325, 160, 245, 170, 178);
  bezierVertex(180, 125, 225, 88, 300, 88);
  endShape(CLOSE);

  // left curly hair
  fill(20); noStroke();
  beginShape();
  vertex(220, 145);
  bezierVertex(195, 180, 210, 210, 195, 240);
  bezierVertex(180, 270, 205, 300, 190, 330);
  bezierVertex(180, 360, 195, 385, 200, 400);
  vertex(230, 400);
  bezierVertex(225, 380, 215, 355, 220, 330);
  bezierVertex(230, 300, 210, 275, 220, 245);
  bezierVertex(230, 215, 215, 190, 232, 148);
  endShape(CLOSE);

  // right curly hair
  beginShape();
  vertex(380, 145);
  bezierVertex(405, 180, 390, 210, 405, 240);
  bezierVertex(420, 270, 395, 300, 410, 330);
  bezierVertex(420, 360, 405, 385, 400, 400);
  vertex(370, 400);
  bezierVertex(375, 380, 385, 355, 380, 330);
  bezierVertex(370, 300, 390, 275, 380, 245);
  bezierVertex(370, 215, 385, 190, 368, 148);
  endShape(CLOSE);

  // curly wave highlights
  noFill(); stroke(50, 40); strokeWeight(1.5);
  bezier(205, 190, 220, 215, 195, 245, 200, 275);
  bezier(195, 280, 215, 310, 195, 340, 205, 370);
  bezier(395, 190, 380, 215, 405, 245, 400, 275);
  bezier(405, 280, 385, 310, 405, 340, 395, 370);

  // neck
  fill(255, 225, 205); stroke(0, 30); strokeWeight(1);
  rect(300, 355, 52, 50);

  // clothes
  fill(237, 173, 208); noStroke();
  beginShape();
  vertex(150, 400); vertex(242, 372); vertex(280, 366);
  vertex(300, 376); vertex(320, 366); vertex(358, 372); vertex(450, 400);
  endShape(CLOSE);

  // face
  fill(255, 225, 205); stroke(0, 50); strokeWeight(1);
  ellipse(300, 220, 180, 240);

  // blush
  fill(255, 160, 140, 80); noStroke();
  ellipse(245, 238, 50, 22); ellipse(355, 238, 50, 22);

  // hat
  fill(hatR, hatG, hatB); noStroke();
  arc(300, 140, 220, 140, 180, 360, CHORD);
  rect(300, 140, 220, 40, 20);

  // heart on hat
  fill(20);
  ellipse(293, 125, 12, 12); ellipse(307, 125, 12, 12);
  triangle(287, 128, 313, 128, 300, 142);

  // eyes
  if (expr == 2) {
    // wink: left eye closed, right eye open
    noFill(); stroke(0); strokeWeight(2);
    arc(260, 200, 30, 10, 0, 180);
    fill(255); stroke(0); strokeWeight(1.5);
    ellipse(340, 200, 40, 25);
    fill(60, 30, 20); noStroke();
    ellipse(340 + exX, 200 + exY, 18, 18);
    fill(255);
    ellipse(333 + exX, 195 + exY, 7, 7);
  } else {
    fill(255); stroke(0); strokeWeight(1.5);
    ellipse(260, 200, 40, 25); ellipse(340, 200, 40, 25);
    fill(60, 30, 20); noStroke();
    ellipse(260 + exX, 200 + exY, 18, 18);
    ellipse(340 + exX, 200 + exY, 18, 18);
    fill(255);
    ellipse(253 + exX, 195 + exY, 7, 7);
    ellipse(333 + exX, 195 + exY, 7, 7);
  }

  // nose
  noFill(); stroke(0); strokeWeight(2);
  bezier(310, 255, 280, 240, 315, 210, 300, 200);

  // mouth
  if (expr == 1) {
    fill(200, 80, 80); stroke(180, 60, 60); strokeWeight(1.5);
    ellipse(300, 300, 22, 28);
  } else {
    noFill(); strokeWeight(2); stroke(200, 80, 80);
    beginShape();
    curveVertex(230, 400); curveVertex(285, 300);
    curveVertex(310, 300); curveVertex(250, 340);
    endShape();
    beginShape();
    curveVertex(290, 400); curveVertex(310, 300);
    curveVertex(335, 300); curveVertex(230, 340);
    endShape();
    beginShape();
    curveVertex(285, 300); curveVertex(285, 300);
    curveVertex(310, 308); curveVertex(335, 300); curveVertex(335, 300);
    endShape();
  }

  // eyebrows
  noFill(); stroke(50); strokeWeight(3.5);
  if (expr == 1) {
    bezier(235, 174, 250, 158, 270, 168, 280, 176);
    bezier(315, 176, 340, 164, 345, 158, 365, 174);
  } else {
    bezier(235, 180, 250, 165, 270, 175, 280, 180);
    bezier(315, 180, 340, 171, 345, 165, 365, 180);
  }

  pop();
}

function mousePressed() {
  if (expr == 0) { expr = 1; }
  else if (expr == 1) { expr = 2; }
  else { expr = 0; }
}

function keyPressed() {
  if (key == '1') { bgR = 245; bgG = 235; bgB = 220; }
  if (key == '2') { bgR = 215; bgG = 230; bgB = 250; }
  if (key == '3') { bgR = 230; bgG = 245; bgB = 220; }
  if (key == 'r') { hatR = 255; hatG = 200; hatB = 210; }
  if (key == 'b') { hatR = 200; hatG = 215; hatB = 255; }
  if (key == 'w') { hatR = 240; hatG = 240; hatB = 240; }
  if (key == 's') { saveGif('character', 10); }
}