var car;
var wall;
var speed;
var width;

function setup() {
  createCanvas(windowWidth,400);
 car = createSprite(0, 200, 50, 50);
 
 wall=createSprite(780,200,100,100);

}

function draw() {
  background("black");

car.velocityX=speed;
  car.shapeColor=("blue");

  if(car.isTouching(wall))[
    car.velocityX=0
  ]  

  speed=random(55,90);
  weight=random(400,1500);

  if(wall.x-car.x , (car.width+wall.width)/2){
Deformation=0.5*weight*speed*speed/22500

if(deformation>180){
  car.shapeColor=("red");
}

if(deformation<180 && deformation>100){
  car.shapeColor=("yellow");
}
if(deformation<100){
  car.shapeColor=("green");
}
  drawSprites();
 }
}