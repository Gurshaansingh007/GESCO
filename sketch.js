var car;
var wall;
var speed;
var width;

function setup() {
  createCanvas(windowWidth,400);
  wall=createSprite(780,200,100,100);

  car = createSprite(200, 200, 50, 50);
 car.shapeColor=("blue");
 
 speed=random(55,90);
 weight=random(400,1500);
}

function draw() {
  background("lightblue");

  


car.velocityX=speed;
  

  if(car.isTouching(wall))
  {
    car.velocityX=0
}  

  
  if(wall.x-car.x < (car.width+wall.width)/2)
  {
  var Deformation=0.5*weight*speed*speed/22500

  if(Deformation>180){
  car.shapeColor=("red");
}

if(Deformation<180 && Deformation>100){
  car.shapeColor=("yellow");
}
if(Deformation<100){
  car.shapeColor=("green");
}
 
 }
 drawSprites();
}