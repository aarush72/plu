
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var stone;
var sling;
var ground;
var boy;

function preload() {
	
}

function setup() {
	createCanvas(1400, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   stone = new Stone(400,350,50);
   sling = new Sling(stone.body,{x : 400,y : 350})
   ground = new Ground(600,700,1400,20)
   mango = new Mango(1000,350,50);
	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background("white");
  
  stone.display();
  sling.display();
  ground.display();
  mango.display();

  detectollision();
  
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x : mouseX,y : mouseY});

}

function mouseReleased(){
sling.fly();

}

function detectollision(stone,mango){
mangoBodyPosition = mango.body.position.x,mango.body.position.y;
stoneBodyPosition = stone.body.position.x,stone.body.position.y;

var distance = dist(mangoBodyPosition,stoneBodyPosition);
if(distance <= mango.r + stone.r) {
Matter.Body.setStatic(mango.body,false);

}

}

