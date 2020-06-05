var mainCharacter;
var gravity = 9.8/30.0;
var backgroundImage;
var mainCharacterImage;
var monsterImage
var groundOffset = 100
var monsterArray = []
var health = 100
var score = 0

class Character {
  constructor(x, y, width) {
    this.x = x;
    this.y = y;
    this.ySpeed = 0;
    this.xSpeed = 0;
    this.width = width;
    this.color = "blue"
    this.isMonster = false
    this.isDead = false
    this.targetX = random()*width
  }
  
  update(){
	if(this.y+this.width*0.5 >= (height-groundOffset) && this.ySpeed > 0) 
    {
      this.ySpeed = this.ySpeed*(-0.4)
      this.y = height-this.width*0.5-groundOffset
    }
   this.ySpeed += gravity;
   this.y += this.ySpeed;
    
   this.xSpeed *= 0.8
   this.x += this.xSpeed;
  }
  
  moveBadGuy(){
    var differenceX = this.targetX-this.x
    this.xSpeed += differenceX*0.002
    
    if(random() >= 0.98){
      this.targetX = random()*width
      this.ySpeed -= 5
    }
    
    
    this.isTouchingMainCharacter()
  }
  
  isTouchingMainCharacter(){
    if(mainCharacter.x + mainCharacter.width >= this.x
       && mainCharacter.x <= this.x+this.width
       && mainCharacter.y + mainCharacter.width >= this.y
       && mainCharacter.y <= this.y+this.width)
    {
      //here we have figured out that there was a hit
      stroke("black")
      noFill()
      rect(this.x, this.y, this.width, this.width)
      
      if(mainCharacter.y - this.y < -30){
        this.isDead = true
        mainCharacter.ySpeed = -10
        score++
      } else {
        health -= 0.3
      }
    }
  }
  
  
  draw(){
    if(this.isMonster){
      image(monsterImage, this.x, this.y, this.width, this.width)  
    } else {
      image(mainCharacterImage, this.x, this.y, this.width, this.width)
    }
  }
}

function setup() {
  createCanvas(800, 400);
  mainCharacter = new Character(200, 200, 60)
  backgroundImage = loadImage("./background.jpg")
  mainCharacterImage = loadImage("./sonic.png")
  monsterImage = loadImage("./shadow.png")
  
  for(var i = 0;i<3;i++){
    var newMonster = new Character(500+20*i, 100, 60)
    newMonster.isMonster = true
    monsterArray.push(newMonster)
  }

}

function draw() {
  if(health <= 0){
    background(0)
    fill("white")
    text("GAME OVER. \nSCORE " + score, 200, 200, 200, 50)
    return 
  }
  
  
  background(0, 200, 150);
  image(backgroundImage, 0, 0, width, height)
  
  if(keyIsDown(LEFT_ARROW)){
    //move left
    mainCharacter.xSpeed -= 1.0
  }
  
  if(keyIsDown(RIGHT_ARROW)){
    //move right
    mainCharacter.xSpeed += 1.0
  }
  
  mainCharacter.update();
  mainCharacter.draw()
  
  //draw health bar
  fill("red")
  stroke("black")
  rect(10, 10, health*2, 20)
  
  fill("white")
  textSize(20)
  text(score, width-40, 10, 40, 20)
  
  
  var anyCatAlive = false
  
  for(var i = 0;i<monsterArray.length;i++)
  {
    if(monsterArray[i].isDead){
      //do nothing! (because monster is dead)
    } else { 
      anyCatAlive = true
      monsterArray[i].update()
      monsterArray[i].moveBadGuy()
      monsterArray[i].draw() 
    }
  }
  
  if(anyCatAlive === false){
    for(var i = 0;i<3;i++){
      var newMonster = new Character(500+20*i, 100, 60)
      newMonster.isMonster = true
      monsterArray.push(newMonster)
    }
  }
  
}

function keyPressed(){
   //&& mainCharacter.y >= 260
  if(key === " "){
    //JUMP!
    mainCharacter.ySpeed -= 10.0
  }
}

