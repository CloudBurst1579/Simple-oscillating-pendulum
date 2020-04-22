const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball,string,ceiling;


function setup(){
    var canvas = createCanvas(800,800);
    engine = Engine.create();
    world = engine.world;


    ceiling = new Barrier(400,0,800,10);
    ball = new Bob(400,400); 
    string = new String(ball.body,ceiling.body);  
}

function draw()
{
    background("white");
    Engine.update(engine); 
    string.display();
    ball.display();
    ceiling.display();

    fill("black");
    textSize(30);
    text("Click and drag mouse to move the ball",120,600);
}

function mouseDragged()
{
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}
