//Step 1 - Declaring the variables/constants
//namespacing OR alias OR nickname
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

//Step 2 - declare variables for your own engine and world
var engine, world;
var box;
var ground;
var ball;

function setup() {
  createCanvas(400,400);

  //Step 3
  engine = Engine.create();
  world = engine.world;

  //Step 4 - Create Bodies
  //rectangle and circle
  box = new Box(200, 300, 50, 50);
  box1 = new Box(240, 100, 50, 100);
  ground = new Ground(200,370,400,20);
}

function draw() {
  background("black");  
  //Step 6 - Run the engine
  Engine.update(engine);
  
  //Step 7 - Display your bodies/box
  box.display();
  ground.display();
  box1.display();
}