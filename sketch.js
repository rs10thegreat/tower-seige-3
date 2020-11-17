const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var stand1,stand2;
var ground;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10;
var box11,box12,box13,box14,box15,box16,box17,box18,box19,box20;
var polygon,slingshot,polygonImg;
var backgroundImg;

var bg = "background.jpg";

var score = 0;

function preload(){
  polygonImg = loadImage("polygon1.png");

  getBackgroundImg();
}
function setup() {
  var canvas = createCanvas(1250,700);
  engine = Engine.create();
  world= engine.world;

  stand1 = new Ground(617,600,281,20);
  stand2 = new Ground(1080,400,300,20);

  polygon = Bodies.circle(50,200,40);
  World.add(world,polygon);

  box1 = new Box(516,590,65,70);
  box2 = new Box(590,590,65,70);
  box3 = new Box(645,590,65,70);
  box4 = new Box(700,590,65,70);

  box5 = new Box(542,530,65,70);
  box6 = new Box(609,530,65,70);
  box7 = new Box(664,530,65,70);

  box8 = new Box(585,470,65,70);
  box9 = new Box(640,470,65,70);

  box10 = new Box(609,410,65,70);

  box11 = new Box(978,390,65,70);
  box12 = new Box(1038,390,65,70);
  box13 = new Box(1106,390,65,70);
  box14 = new Box(1130,390,65,70);
  
  box15= new Box(999,330,65,70);
  box16 = new Box(1065,330,65,70);
  box17 = new Box(1118,330,65,70);

  box18= new Box(1028,280,65,70);
  box19 = new Box(1090,280,65,70);

  box20 = new Box(1050,210,65,70);

  slingshot = new Slingshot(polygon,{x:200,y:400})

  ground = new Ground(625,690,1250,20);
}

function draw() {

  if(backgroundImg){
    background(backgroundImg);
  }else{
      background(255);
  }

  Engine.update(engine);  

  stroke("black");
  textSize(18);
  text("Score : "+score,180,40);

  imageMode(CENTER);
  image(polygonImg,polygon.position.x,polygon.position.y,40,40);

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();

  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();

  box1.score();
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


  slingshot.display();

  stand1.display();
  stand2.display();

  ground.display();

  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
 if(keyCode===32){
  slingshot.attach(polygon);
  }

async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);

  if(hour>=0600 && hour<=1900){
    bg = "background.jpg";
  }else{
    bg = "background1.jpg";
  }
  backgroundImg = loadImage(bg);
 }
}
