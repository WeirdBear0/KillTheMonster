const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world, hero, box1, monster;

function preload() {
    backgroundImage = loadImage("GamingBackground.png")

}

function setup(){
     createCanvas(1600,800);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(800,height,1600,30);
    hero = new Hero(200,440);

    slingshot = new Slingy(hero.body, {x:200,y:440});
    box1 = new Block(1000, 700, 40,40);
    box2 = new Block(1000, 660, 40,40);

    box3 = new Block(1000, 620, 40,40);
    box4 = new Block(1000, 580, 40,40);
    box5 = new Block(1000, 540, 40,40);
    box6 = new Block(1000, 500, 40,40);
    box7 = new Block(1000, 460, 40,40);

    box8 = new Block(1060, 700, 40,40);
    box9 = new Block(1060, 660, 40,40);

    box10 = new Block(1060, 620, 40,40);
    box11 = new Block(1060, 580, 40,40);
    box12 = new Block(1060, 540, 40,40);
    box13 = new Block(1060, 500, 40,40);
    box14 = new Block(1060, 460, 40,40);
    box15 = new Block(1060, 420, 40,40);
    box16 = new Block(1060, 380, 40,40);

    box17 = new Block(1120, 700, 40,40);
    box18 = new Block(1120, 660, 40,40);

    box19 = new Block(1120, 620, 40,40);
    box20 = new Block(1120, 580, 40,40);
    box21 = new Block(1120, 540, 40,40);
    box22 = new Block(1120, 500, 40,40);
    box23 = new Block(1120, 460, 40,40);
    box24 = new Block(1120, 420, 40,40);
    box25 = new Block(1120, 380, 40,40);
    box26 = new Block(1120, 340, 40,40);
    box27 = new Block(1120, 300, 40,40);
    monster = new Monster(1400,200);






}

function draw(){

    Engine.update(engine);
    background(backgroundImage)
   
hero.display();
monster.display();
slingshot.display();
ground.display();
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
box22.display();
box23.display();
box21.display();
box24.display();
box25.display();
box26.display();
box27.display();



 
   

    
}

function mouseDragged(){
    Matter.Body.setPosition(hero.body, {x:mouseX, y:mouseY});

    

}



