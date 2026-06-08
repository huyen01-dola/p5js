let drops = [];

const SPOUT_X = 322;
const SPOUT_Y = 225;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  let ms = millis();
  background(237, 232, 138);


  fill(0); noStroke();
  rect(40, 40, 8, 100);
  strokeWeight(2); stroke(0); fill(0);
  quad(30, 60, 110, 60, 110, 70, 30, 70);
  noStroke();


  fill(227, 170, 70);
  circle(324, 90, 100);


  fill(222, 69, 58);
  ellipse(322, 180, 80, 90);


  fill(43, 117, 181);
  quad(150, 105, 380, 105, 380, 200, 150, 200);
  //blue 
  let phase = (ms * 0.001) % TWO_PI;
  let knobShift = 30 * max(0, sin(phase));
  let flowing = knobShift > 2;
  fill(43, 117, 181);
  let kx = 305 + knobShift;
  quad(kx, 223, kx + 35, 223, kx + 35, 228, kx, 228);

 
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

 
  noFill(); stroke(0); strokeWeight(10);
  ellipse(370, 300, 40, 55);

 //
  fill(0); noStroke();
  rect(293, 275, 60, 70);

  // COFFEE
  if (flowing) {
    noStroke();
    let a = map(knobShift, 0, 30, 0, 200);
    fill(101, 67, 33, a);
    rect(SPOUT_X - 2, SPOUT_Y, 4, 50);
  }


  if (flowing && frameCount % 4 === 0) {
    drops.push({
      x: SPOUT_X + random(-3, 3),
      y: SPOUT_Y,
      vy: random(2.5, 4),
      r: random(4, 7),
      alpha: 255
    });
  }


  for (let i = drops.length - 1; i >= 0; i--) {
    let d = drops[i];
    d.y += d.vy;
    d.vy += 0.2;
    d.alpha -= d.y > 275 ? 15 : 4; // fade nhanh khi vào cốc
    if (d.alpha <= 0 || d.y > 345) { drops.splice(i, 1); continue; }
    noStroke();
    fill(101, 67, 33, d.alpha);
    ellipse(d.x, d.y, d.r * 0.7, d.r);
  }
}