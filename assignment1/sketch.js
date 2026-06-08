function setup() {
  createCanvas(600, 400);
  background(237, 232, 138);
  
  fill(0);
  rect( 40, 40, 8, 100);
  strokeWeight(2);
  quad(30, 60, 110, 60, 110, 70, 30, 70);
  
  fill(227, 170, 70);
  noStroke();
  circle(324, 90, 100);
  
  fill(222, 69, 58);
  ellipse(322, 180, 80,90);
  
  fill(43, 117, 181);
  quad(150, 105, 380, 105, 380, 200, 150, 200);
  quad(305,223, 340, 223, 340, 228, 305, 228);
  
  fill(222, 69, 58);
  ellipse(193, 200, 85);
  rect(150, 200, 85, 150);
  rect(150, 350, 229, 40);
  
  fill(227, 170, 70);
  circle(220, 345, 15);
  circle(220, 325, 15);
  circle(220, 305, 15);
  
  fill(0);
  rect(112, 200, 20, 100);
  quad(120, 250, 150, 250, 150, 220, 120, 220);
  
  noFill();
  stroke(0);
  strokeWeight(10);
  ellipse(370, 300, 40, 55); 

  fill(0); 
  rect(293, 275, 60, 70);
  
}