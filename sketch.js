const Bodies = Matter.Bodies;
//const body = Matter.body;
const Engine = Matter.Engine;
const World = Matter.World;
const render = Matter.render;

var particles = [];
var plinkos = [];
var division = [];
var divisionHeight = 300;

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  //createSprite(400, 200, 50, 50);
  for(var a = 0; a <= width;a = a + 80){
  division.push(new divider(a,height - divisionHeight/2, 10, divisionHeight));
  }

  for(var b = 40;b <= width;b = b + 50){
  plinkos.push(new plinko(b,75,10));
  }

  for(c = 15;c <= width-10;c = c + 50){
  plinkos.push(new plinko(c,175,10));
  }

  if(frameCount % 60 === 0){
  particles.push(p = new partical(random(width/2 - 10,width/2 + 10),10,10));
  }
}

function draw() {
  background(255,255,255);  
  //drawSprites();

  Engine.update(engine);

for(d = 0;d < divisions.length;d++){
divisions[d].display();
}

for(e = 0;e < plinkos.length;e++){
plinkos[e].display();
}

p.display();
}