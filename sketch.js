var wall,thickness;
var bullet,speed,weight;

function setup() {
  createCanvas(windowWidth,windowHeight);
  bullet = createSprite(50, windowHeight/2, 80, 50);
  bullet.shapeColor = "white";
   
  wall = createSprite(windowWidth-200,windowHeight/2,thickness,height/2);
  wall.shapeColor = color(80,80,80);

  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);
}

function draw() {
  background("silver");  
  bullet.depth = background.depth;
  bullet.depth = bullet.depth + 1;
  if (Touch.get>0 || keyDown("space")) {
  bullet.velocityX = speed; 
  }

  if (hascollided(bullet,wall)) {

    bullet.velocityX = 0;

    var damage = 0.5*weight*speed*speed/thickness**3;
    if (damage>10) {
        wall.shapeColor = "red";
    }
    if (damage<10) {
        wall.shapeColor = "green";
    }
  }
  drawSprites();
  fill("blue");
  textSize(50);
  text("Press Space To Start",windowWidth/2,100);
}