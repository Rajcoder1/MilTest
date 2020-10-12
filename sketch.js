var Bullet,wall;
var speed,weight
var thickness


function setup() {
  speed=random(223,321)
  weight=random(30,52)
  thickness=random(22,83)
  createCanvas(1600,400);
  
  Bullet=createSprite(50,200,50)
  wall=createSprite(1200,200,thickness,height/2)
  
 
  
}

function draw() {
  background(255,255,255);  
  drawSprites();
  Bullet.velocityX = speed
  if(wall.x-Bullet.x<(Bullet.width+wall.width)/2){
    Bullet.velocityX=0;
    var damage =0.5 * weight * speed* speed/(thickness * thickness * thickness);
    if(damage<10){

      wall.shapeColor =color(255,0,0);
    }
    if(damage>10 && damage>100){
      wall.shapeColor=color(0,255,0);
    }
    
  }

  
  
}