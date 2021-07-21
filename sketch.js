var ship,ship_sailing;
var sea, seaImg;
function preload(){
  ship_sailing=loadAnimation("ship-1.png","ship-2.png")
  seaImg = loadImage("sea.png");

}

function setup(){
  createCanvas(600,600);
  sea=createSprite(300,200,600,50);
  sea.addImage("sea",seaImg);
  ship=createSprite(200,300,10,10)
  ship.addAnimation("sailing",ship_sailing)
  ship.scale=0.5;

}

function draw() {
  background("blue");
  sea.velocityX=-7
  if(sea.x<0){
    sea.x=sea.width/2;
  }
 drawSprites();
}