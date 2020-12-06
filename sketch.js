
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var bananaGroup, obstacleGroup;
var score;
var ground;
var eaten = 0;


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(570,450);

  monkey = createSprite(80,375,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.125;
  
  ground = createSprite(285,420,900,20);
  ground.x = ground.width/2;
  ground.velocityX = -5;
  
  bananaGroup = createGroup();
  obstacleGroup = createGroup();
}


function draw() {
  background("white");

  if(ground.x<200){
    ground.x=ground.width/2;
  }
  
  if(keyDown("space")){
    monkey.y = monkey.y-20;
  }
  
  if(monkey.isTouching(bananaGroup)){
    bananaGroup.destroyEach();
    eaten = eaten+1;
  }
  text("Bananas Eaten:"+ eaten,460,30);
    
    
  monkey.y = monkey.y+8;
  
  spawnBananas();
  
  drawSprites();
  
  spawnObstacles();
  
  monkey.collide(ground);
}

function spawnBananas(){
  if(frameCount%130 ===0){
    
    rand = Math.round(random(50,400));
    banana = createSprite(590,rand,20,20);
    banana.addImage(bananaImage);
    banana.scale = 0.15;
    banana.velocityX = -5;
    
    bananaGroup.add(banana);
  }
}


function spawnObstacles(){
  if(frameCount%130 ===0){
    
    rand2 = Math.round(random(50,400));
    obstacle = createSprite(590,rand2,20,20);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.15;
    obstacle.velocityX = -5;
    
    obstacleGroup.add(obstacle);
  }
}






