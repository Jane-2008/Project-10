
var ship, shipImg;
var sea, seaImg;

function preload(){
seaImg = loadImage("sea.png");
shipImg = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
}

function setup(){
  createCanvas(400,400);

  //adding the background image
  sea = createSprite(200, 200);
  sea.addImage(seaImg); 
  sea.velocityX = 4;
  
  //creating ship
  ship = createSprite(200, 300);
  ship.addAnimation("sailing", shipImg);
  ship.scale = 0.2;

}

function draw() {
  background("white");

  //to reset the background
  if(sea.x < 0){
    sea.x = sea.width/4;
  }

  drawSprites();
 
}