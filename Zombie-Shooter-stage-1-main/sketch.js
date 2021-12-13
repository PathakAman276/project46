var back,hunter,backimg,hunterimg;
var shoot,zombi2,zomimage;
var zombieGroup;
var heart1,heart2,heart3;
var heart1img,heart2img,heart3img;

function preload(){
 backimg=loadImage("assets/bg.jpeg") 
 hunterimg=loadImage("assets/shooter_2.png") 
 shoot=loadImage("assets/shooter_3.png")
 zomimage=loadImage("assets/zombie.png")
heart1img=loadImage

}

function setup() {
  createCanvas(windowWidth,windowHeight);
  back=createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
  hunter=createSprite(displayWidth-1150,displayHeight-300,50,50)
   
  back.addImage(backimg)
  hunter.addImage(hunterimg)
  hunter.scale=0.3

  zombieGroup=new Group()

}

function draw() {
  background(0);

  if(keyDown("UP_ARROW")) {
   hunter.y=hunter.y-20 
  }
  if(keyDown("DOWN_ARROW")) {
    hunter.y=hunter.y+20 
   }
   if(keyWentDown("space")) {
    hunter.addImage(shoot)
   }else{
     hunter.addImage(hunterimg)
   }
   if(zombieGroup.isTouching(hunter)  ){
   for(var i =0;i<zombieGroup.length;i++){
    if(zombieGroup[i].isTouching(hunter)){
      zombieGroup[i].destroy()
    } 
   }


   }



   zombie()

  drawSprites()

  

}
function zombie(){
  if(frameCount%50===0){
  zombi2=createSprite(random(500,1000),random(100,500),40,40)
  zombi2.addImage(zomimage)
  zombi2.scale=0.15  
  zombi2.velocityX=-4
  zombi2.debug=true
  zombi2.setCollider("rectangle",0,0,400,400)
  zombi2.lifetime=400

  zombieGroup.add(zombi2)

  }
  
}
displayWidth-150,40,20,20
Teacher To You
displayWidth-100,40,20,20
Teacher To You
displayWidth-150,40,20,20
