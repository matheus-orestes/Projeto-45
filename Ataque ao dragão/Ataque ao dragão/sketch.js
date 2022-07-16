var knight, knightImg;
var ground;
var dragon, dragonImg
function preload(){
  knightImg = loadImage("assets/knight.jpg");
  dragonImg = loadImage("assets/dragon.jpg");
}

function setup () {
  createCanvas(1365,650);

  knight = createSprite(110,550, 50, 50);
  knight.addImage(knightImg)
  knight.scale = 0.3
  knight.setCollider("rectangle",0,0,300,300)

  dragon = createSprite(1110,350, 50, 50);
  dragon.addImage(dragonImg)
  dragon.scale = 0.8
  dragon.setCollider("rectangle",0,0,300,300)

  ground = createSprite(1,600,3365,50);
 ground.visible = false;
}


function draw() {
  background(500);
  
 
 knight.y += 5;

 if (keyIsDown(RIGHT_ARROW)) {
  knight.x += 10;
 }

 if (keyIsDown(LEFT_ARROW)) {
  knight.x -= 10;
 }

 if (keyIsDown(UP_ARROW)) {
  knight.y -= 15;
 }

 knight.collide(ground);

 drawSprites();
}
