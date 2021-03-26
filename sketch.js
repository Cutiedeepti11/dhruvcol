//logic of istouching

var fixedRect, movingRect;
var a ,b;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  a=createSprite(200,100,50,50);
  b=createSprite(400,100,20,20);
  b.velocityX=-2;

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,fixedRect))
  {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor="green";
  }
  else{
    movingRect.shapeColor = "red";
    fixedRect.shapeColor="red";
  }
  if(isTouching(a,b))
  {
    b.velocityX=0;
  }
  
  drawSprites();
}
function isTouching(ob1,ob2)
{
  if (ob1.x - ob2.x < ob1.width/2 + ob2.width/2
    && ob2.x - ob1.x < ob2.width/2 + ob1.width/2
    && ob1.y - ob2.y < ob2.height/2 + ob1.height/2
    && ob2.y - ob1.y < ob1.height/2 + ob2.height/2) {
  return true;
}
else {
 return false;
}
}