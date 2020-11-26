
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ball,ground, dustbin1, dustbin2, dustbin3;

function setup() {
	createCanvas(600, 400);


	engine = Engine.create();
	world = engine.world;

  Engine.run(engine);
  ball = new Ball(30,250,23);
  ground = new Ground(300,height,600,40);
  
  dustbin1 = new Dustbin(530,329,20,100);
  dustbin2 = new Dustbin(480,370,100,20);
  dustbin3 = new Dustbin(430,329,20,100);

}


function draw() {
  rectMode(CENTER);
  background(32);
  ball.display();
  ground.display();
 
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  
}

function keyPressed(){
if(keyCode === UP_ARROW) {

  Matter.Body.applyForce(ball.body, ball.body.position, {x:85, y:150});

  } 
}


