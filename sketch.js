
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer;
var iron;
function preload()
{
	
}

function setup() {
	createCanvas(1400, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	hammer = new Hammer(500,500,100,20);
	plane = new Plane(400,700,4000,20);
	stone = new Stone(200,450,50,50);
    rubber = new Rubber(550,500,20);
	iron = new Heavy(600,500,100,100);

	sand1 = new Sand(300, 400, 5);
	sand2 = new Sand(330, 400, 5);
	sand3 = new Sand(360, 400, 5);
	sand4 = new Sand(390, 400, 5);
	sand5 = new Sand(420, 400, 5);
	sand6 = new Sand(450, 400, 5);
	sand7 = new Sand(480, 200, 5);
	sand8 = new Sand(510, 300, 5);

	Engine.run(engine);
  
}


function draw() {
  background("skyblue");

  Engine.update(engine);

  hammer.display();
  plane.display();
  stone.display();
  rubber.display();
  iron.display();
 

  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  sand7.display();
  sand8.display();

  
}



