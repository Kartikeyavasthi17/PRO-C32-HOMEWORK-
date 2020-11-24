const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var backgroundImg;

var engine, world;
var ground3;
var ground1;

var score =0;

var ground;
var ball;
var shot;
var box1,box2,box3,box4,box5,box6;
var box7,box8,box9,box10;
var box11,box12,box13;

var box14,box15,box16,box17,box18,box19,box20;

var box21,box22,box23,box24,box25;

var box26;

function preload()
{
  getBackgroundImg();
}

function setup() {

  createCanvas(1500,650);

  engine = Engine.create();
  world = engine.world;

  ground =new Ground(820,550,500,20);
  ground1 =new Ground(750,640,1500,50);
  ground3 =new Ground(1200,400,400,20);

  box1 =new Stone(680,510,60,60);
  box2 =new Stone(740,510,60,60);
  box3 =new Stone(800,510,60,60);
  box4 =new Stone(860,510,60,60);
  box5 =new Stone(920,510,60,60);
  box6 =new Stone(980,510,60,60);

  box7 =new Stone(740,450,60,60);
  box8 =new Stone(800,450,60,60);
  box9 =new Stone(860,450,60,60);
  box10 =new Stone(920,450,60,60);

  box11= new Stone(800,390,60,60);
  box12= new Stone(860,390,60,60);

  box13 =new Stone(830,330,60,60);

  //ground3 =new Ground(1200,400,400,20);
  //box1 =new Stone(680,400,60,60);
 // ground1 =new Ground(750,640,1500,50);

  box14 =new Stone(1030,360,60,60);
  box15 =new Stone(1090,360,60,60);
  box16 =new Stone(1150,360,60,60);
  box17 =new Stone(1210,360,60,60);
  box18 =new Stone(1270,360,60,60);
  box19 =new Stone(1330,360,60,60);

  box20 =new Stone(1090,300,60,60);
  box21 =new Stone(1150,300,60,60);
  box22 =new Stone(1210,300,60,60);
  box23 =new Stone(1270,300,60,60);

  box24 =new Stone(1150,240,60,60);
  box25 =new Stone(1210,240,60,60);

  box26 =new Stone(1180,180,60,60);

  ball =new stone(350,530,50);

  shot =new SlingShot(ball.body,{x:350,y:430});


  Engine.run(engine);
}

function draw() {
  if(backgroundImg)
  background(backgroundImg);
  
  Engine.update(engine);

  textSize(20);
  stroke("yellow");
  text("Score  " + score, width-300, 50);
 
  box1.display();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  box8.score();
  box9.score();
  box10.score();
  box11.score();
  box12.score();
  box13.score();
  box14.score();
  box15.score();
  box16.score();
  box17.score();
  box18.score();
  box19.score();
  box20.score();
  box21.score();
  box22.score();
  box23.score();
  box24.score();
  box25.score();
  box26.score();

  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();

  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();

  box7.display();
  box8.display();
  box9.display();
  box10.display();

  box11.display();
  box12.display();

  box13.display();

  ball.display();

  shot.display();

  ground.display();
  ground1.display();
  ground3.display();

    textSize(25);
  text("DRAG THE BALL TO DESTORY THE BLOCKS",600,100);
  text("PRESS SPACE TO GET A SECOND CHANCE TO PLAY!!",100,600);

  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
  }
  
  function mouseReleased(){
  shot.fly();
  }

  function keyPressed()
{

if(keyCode === 32)
{
  Matter.Body.setPosition(ball.body,{x:350,y:430});
  shot.attach(ball.body);
}
}

async function getBackgroundImg()
{
var response =await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");

var responseJSON =await response.json();

var DTtime =responseJSON.datetime;

var hour =DTtime.slice(11,13);

console.log(hour);

if(hour >= 06 && hour <= 17)
{
    backgroundImg = loadImage("bg.png");


}else{

    backgroundImg = loadImage("bg2.jpg");
}

}