//datatypes
//numeric
var a = 13;
console.log(a);

//string
var b = "arijeet";
console.log(b);

//boolean
var c= true;
console.log(c);

//undefined
var d 
console.log(d);

//null
var e=null
console.log(e);

//array
var f = [13,"arijeet",false,28];
console.log(f);
console.log(f.length);
console.log(f[1]);

f.push("garima");
f.push(false)
console.log(f);

f.pop();                                        
f.pop();
f.pop();
console.log(f);

var g = [[2,3,true],90,[12,false],[0,28],[47,true,"arijeet","garima"]]
console.log(g);
console.log(g.length);
console.log(g[3][0]);
console.log(g[4][2]);
g.push("coding");
g.pop();
console.log(g);


const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var image2,platform;
var bird, slingShot;
var gs = "onsling";
var score=0;

function preload() {
    getTime();
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(200,50);

    

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    if(image2){
    background(image2);}
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    pig1.score1();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    pig3.score1();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    platform.display();
    //log6.display();
    slingshot.display();  


    textSize(30);
    text("score:"+score,width-300,50);
    
    
    
    
}

function mouseDragged(){
    if(gs==="onsling"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});

    }
}

function mouseReleased(){
    slingshot.fly();
    gs = "launched";
}

function keyPressed(){
    if(keyCode===32&&bird.body.speed<1){
        gs="onsling"
        Matter.Body.setPosition(bird.body,{x:200,y:50})
        bird.path=[]
        slingshot.attach(bird.body)
    }
}
async function getTime(){
    var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
    var responseType=await response.json();
    var date1=responseType.datetime;
    var hour1=date1.slice(11,13);
    console.log(hour1);
   if(hour1>06&&hour1<18){
       image2=loadImage("sprites/bg.png");
   } 
   else{
    image2=loadImage("sprites/night.jpg");
   }

}
