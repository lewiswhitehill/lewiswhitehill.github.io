let a;
let b;
let c;
let d;
let r,g,blue2;

function setup() {
  createCanvas(400, 400);
  background("white")
a = random(400)
b = random(400)
c = random(400)
d = random(400)
  myColors = ["red", "blue", "yellow", "white"]
  for(var i=0;i<20;i++){
  a = random(400)
    b = random(400)
    c = random(400)
    d = random(400)
    //print(d)
    r = myColors[(int)(random(4))]
    print(r)
    strokeWeight(8)
    fill(r)
    rect(a,b,c,d);
  }
}

function draw() {
  
    
  
  
}
