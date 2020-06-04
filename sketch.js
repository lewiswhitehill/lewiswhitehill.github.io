var ballX = 200.0
var ballY = 100.0
var ballSpeedY = 0.0
//var

var Ydir = .7



function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(150, 200, 250);
  
    //to make the ball "fall" down, every frame we increase its speed by a tiny amount. We call this amount gravity. 
  
  ballSpeedY = ballSpeedY+Ydir
  
  ballY = ballY+ballSpeedY*Ydir
  
  fill(255, 0, 0)
  ellipse(ballX, ballY, 50.0, 50.0)
  if(ballY >= 400){
    
  Ydir = Ydir*-1
  }
  
  if(ballY <= 0){
  Ydir = Ydir*-1
  }
  
  if(Ydir === -1){
  
  }
  
}
function mousePressed(){
Ydir = 0.5
}

  
  
  
  
  
