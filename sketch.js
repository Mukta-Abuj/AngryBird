const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200, 400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700, 320);
    box2 = new Box(920, 320);
    pig1 = new Pig(810, 320);
    log1 = new Log(810, 280, 300, PI/2)
    box3 = new Box(700, 250);
    box4 = new Box(920, 250);
    pig2 = new Pig(810, 250);
    log2 = new Log(810, 190, 300, PI/2)
    box5 = new Box(810, 140);
    log3 = new Log(725, 140, 150, PI/7)
    log4 = new Log(900, 140, 150, -PI/7)
    bird = new Bird(0, 0);
    ground = new Ground(600,height,1200,20)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    pig1.display();
    pig2.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    bird.display();
    ground.display();
}