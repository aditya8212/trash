
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var trash1,trash2,trash3,ground,ball

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	Engine.run(engine);

	trash1 = new TRASH(1050,650,200,20);
	trash2 = new TRASH(950,610,20,100);
	trash3 = new TRASH(1150,610,20,100);

	ground = new GROUND();

	ball = new PAPER(50,650,30);

}


function draw() {
  rectMode(CENTER);
  background("black");
  
  Engine.update(engine);
  
  drawSprites();

  trash1.display();
  trash2.display();
  trash3.display();

  ground.display();
 
  ball.display();
  
}

function keyPressed(){
if(keyCode === UP_ARROW){

	Matter.Body.applyForce(ball.body,ball.body.position,{x:200,y:-200});

}

}

