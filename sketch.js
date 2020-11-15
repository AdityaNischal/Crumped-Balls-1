
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var ground,dustbin1,dustbin2,dustbin3,paper;
function preload()
{
	
}

function setup() {
	createCanvas(1300, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground=new Ground(900,height-50,2000,10)

	dustbin1=new Dustbin(1100,height-60,130,12)

	dustbin2=new Dustbin(1040,height-84,12,60)

	dustbin3=new Dustbin(1170,height-84,12,60)

	paper=new Paper(200,200,30)

	
	
	Engine.run(engine);
  
}


function draw() {
  background(0);

  ground.display();
  
  dustbin1.display();

  dustbin2.display();

  dustbin3.display();

  paper.display();


 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:75,y:-75})
	}
}


