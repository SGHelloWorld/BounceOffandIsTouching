var rect1;
var rect2;

function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  rect1=createSprite(400,200,50,100);
   rect2=createSprite(100,200,100,50);
  rect1.debug=true;
  rect2.debug=true;
  rect1.velocityX=-2;
  rect2.velocityX=2;
}

function draw() {
  background(255,255,255);  
 //rect2.x=World.mouseX;
 //rect2.y=World.mouseY;
 
  if(isTouching(rect1,rect2))
  {
rect1.shapeColor="red";
rect2.shapeColor="red";
  }
  else
  {
    rect1.shapeColor="green";
    rect2.shapeColor="green";
  }
  BounceOff(rect1,rect2);
  drawSprites();
}
/*
function isTouching(obj1,obj2)
{
  if(Math.abs(obj1.x-obj2.x)<obj1.width/2+obj2.width/2&&Math.abs(obj1.y-obj2.y)<obj1.height/2+obj2.height/2)
  {
return true;
  }
  else
  {
 return false;
  }
}
function BounceOff(obj1,obj2)
{
  if(Math.abs(obj1.x-obj2.x)<obj1.width/2+obj2.width/2)
  {
obj1.velocityX=obj1.velocityX*(-1);
obj2.velocityX=obj2.velocityX*(-1);
  }
  if(Math.abs(obj1.y-obj2.y)<obj1.height/2+obj2.height/2)
  {
 obj1.veloityY=obj1.velocityY*(-1);
 obj2.velocityY=obj2.velocityY*(-1);
  }
}
*/
