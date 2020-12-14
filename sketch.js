
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ball;
var cup1, cup2, cup3, cup4, cup5, cup6, cup7, cup8;
var cup9, cup10, cup11, cup12, cup13, cup14, cup15, cup16;
var ground;
var bgImg;
var stand, stand2, stand2Img;
var slingshot;

function preload(){
    bgImg = loadImage("bg.png")
    stand2Img = loadImage("stand2.png")
}

function setup() {
	createCanvas(1000, 700);

	engine = Engine.create();
    world = engine.world;

    stand = new Stand (690, 580, 380, 200)

    stand2 = createSprite(690, 580, 380, 200);
    stand2.addImage(stand2Img);
    stand2.scale = 0.25
	
    ground = new Ground (500, 685, 1000, 30)

	cup1 = new Cup (530,405,30,70);
	cup2 = new Cup (580,405,30,70);
    cup3 = new Cup (630,405,30,70);
    cup4 = new Cup (680,405,30,70);
    cup5 = new Cup (730,405,30,70);
	cup6 = new Cup (780,405,30,70);
	cup7 = new Cup (830,405,30,70);
	cup8 = new Cup (580,225,30,70);
    cup9 = new Cup (630,225,30,70);
    cup10 = new Cup (680,225,30,70);
    cup11 = new Cup (730,225,30,70);
    cup12 = new Cup (780,225,30,70);
    cup13 = new Cup (630,145,30,70);
    cup14 = new Cup (680,145,30,70);
    cup15 = new Cup (730,145,30,70);
    cup16 = new Cup (680,65,30,70);

    ball = new Ball (100, 350, 10, 10);
    
    slingshot = new Slingshot (ball.body, {x: 40, y:350})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(bgImg);
  
  drawSprites();

  stand.display();

  ground.display();

  cup1.display();
  cup2.display();
  cup3.display();
  cup4.display();
  cup5.display();
  cup6.display();
  cup7.display();
  cup8.display();
  cup9.display();
  cup10.display();
  cup11.display();
  cup12.display();
  cup13.display();
  cup14.display();
  cup15.display();
  cup16.display();

  ball.display();

  slingshot.display();
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}