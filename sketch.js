//nameSpacing
const Engine= Matter.Engine;
const Bodies= Matter.Bodies;
const World= Matter.World;

//to declare the game objects
var ground;

var box1;
var box2;
var box3;

//for game we created our own engine and world
var engine, world;
var object;
function setup() {
   createCanvas(400,400);

   engine = Engine.create();
   //my world is my engine's world
   world= engine.world;
 
ground=new Ground(200,350,400,12);

   box1 = new Box(200,300,50,50);
   box2= new Box(240,100,50,100);
   box3=new Box(200,0,10,30);
   
}

function draw() {
  background(0); 
  Engine.update(engine);
  console.log(box2);
  ground.display();
  box1.display();
  box2.display();
  box3.display();
} 
