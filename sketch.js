
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constriat = Matter.Constrait;

var ball1,roof,BallImg;
var ball2,ball3,ball4,ball5;
var rope1,rope2,rope3,rope4,rope5;

function preload()
{
	ballImg = loadImage("ball.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(400,100,400,20)
	ball1 = new Ball(300,400)
	ball2 = new Ball(350,400)
	ball3 = new Ball(400,400)
	ball4 = new Ball(450,400)
	ball5 = new Ball(500,400)
	rope1 = new Rope(ball1.body,roof.body,-ballDiameter*2,0)
	
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  
  background("green");
  roof.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  rope1.display();

  
  drawSprites();
 
}



