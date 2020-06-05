let bubble1;
let bubble2;

function setup() {
  createCanvas(600, 400);
  bubble1 = new Bubble(50, 300, 40);
  bubble2 = new Bubble(400, 200, 20);
  bubble3 = new Bubble(200, 200, 80);
  bubble4 = new Bubble(400, 200, 5);
}

function draw() {
  background(255,0,0);
  bubble1.move();
  bubble1.show();
  bubble2.move();
  bubble2.show();
  bubble3.move();
  bubble3.show();
  bubble4.move();
  bubble4.show();
}

class Bubble {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }

  move() {
    this.x = this.x + random(-5, 5);
    this.y = this.y + random(-5, 5);
  }

  show() {
    stroke(255);
    strokeWeight(4);
    ellipse(this.x, this.y, this.r * 2);
  }
}
