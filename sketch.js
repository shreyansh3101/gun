var gun1,gun2,gun1Img,gun2Img;

var mainGun,mainGun1,mainGun2;

var target,targetImg;

var START=0;
var LEVEL1=1;
var gameState=START;

function preload(){
  gun1Img=loadImage("/images/startGun1.jpg");
  gun2Img=loadImage("/images/startGun2.jpg");

  mainGun1=loadImage("/images/mainGun1.png");
  mainGun2=loadImage("/images/mainGun2.png");

  targetImg=loadImage("/images/target.png")

}

function setup() {
  createCanvas(1100,600); 

  gun1=createSprite(200,400)
  gun1.addImage(gun1Img);

  gun2=createSprite(800,400)
  gun2.addImage(gun2Img);
}

function draw() {

  background("black");

  if(gameState===START){
    textStyle(BOLDITALIC)
    textSize(40);
    fill("GOLD");
    text("MILITARY PRACTICE SHOOTER",200,50);

  textStyle(NORMAL)
  fill("skyblue")
  textSize(30)
  text("CHOOSE A GUN",350,150);
  
if(mousePressedOver(gun1)){
  gameState=LEVEL1;
mainGun=createSprite(100,100);
mainGun.addImage(mainGun1);
}
else if(mousePressedOver(gun2)){
  gameState=LEVEL1;
  mainGun=createSprite(100,100);
  mainGun.addImage(mainGun2)
}
}  

if (gameState===LEVEL1){






}




  drawSprites();
}