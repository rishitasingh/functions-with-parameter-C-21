var fixedRect, movingRect;
var gameObject1, gameObject2;
var gameObject3, gameObject4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(100, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(800, 100,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityX = -5;
  fixedRect.velocityX = +5;

  gameObject1 = createSprite(200, 100, 50, 80);
  gameObject1.shapeColor = "pink";
  gameObject1.debug = true;
  gameObject2 = createSprite(200, 800,80,30);
  gameObject2.shapeColor = "pink";
  gameObject2.debug = true;

  gameObject2.velocityY = -5;
  gameObject1.velocityY = +5;

  gameObject3 = createSprite(500, 600, 50, 80);
  gameObject3.shapeColor = "blue";
  gameObject3.debug = true;
  gameObject4 = createSprite(200, 800,80,30);
  gameObject4.shapeColor = "blue";
  gameObject4.debug = true;

}

function draw() {
  background(0,0,0);  
bounceOff(gameObject1, gameObject2);
bounceOff(movingRect, fixedRect);

gameObject4.x = mouseX;
gameObject4.y = mouseY;

if(isTouching(gameObject3, gameObject4)){
  gameObject3.shapeColor = "red";
  gameObject4.shapeColor = "red";
}
else{
  gameObject3.shapeColor = "blue";
  gameObject4.shapeColor = "blue";
}

  drawSprites();
}

function bounceOff(object1, object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2) {
      object1.velocityX = object1.velocityX * (-1);
      object2.velocityX = object2.velocityX * (-1);
}
if (object1.y - object2.y < object2.height/2 + object1.height/2
  && object2.y - object1.y < object2.height/2 + object1.height/2){
    object1.velocityY = object1.velocityY * (-1);
    object2.velocityY = object2.velocityY * (-1);
}
}

function isTouching(object1, object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
      && object2.y - object1.y < object2.height/2 + object1.height/2){
        return true;
      }
      else{return false}

}