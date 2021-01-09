const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var dustbin,paper,ground;	


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	paper=new Paper(200,450,70);
	ground=new Ground(width/2,670,width,20);

	dustbin=new Dustbin(1200,650);

    Engine.run(engine);
}
function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  paper.display();
  ground.display();
  hank.display();
  cherry.display();
  doc.display();
  
  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body,paper.body.position,{x:15,y:-15})
	}
}

