const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var umbrella;
var maxDrops = 100;
var drops = [];
var thunder1, thunder2, thunder3, thunder4;
var thunderCreatedFrame;


function preload()
{
    thunder1 = loadImage("images/thunderbolt/1.png");
    thunder2 = loadImage("images/thunderbolt/2.png");
    thunder3 = loadImage("images/thunderbolt/3.png");
    thunder4 = loadImage("images/thunderbolt/4.png");
}

function setup()
{
   createCanvas(400,900);
   engine = Engine.create();
   world = engine.world;

   umbrella = new Umbrella(200,680);

   for(var i = 0; i<maxDrops; i++)
   {
       drops.push(new Drops(random(0,400), random(0,400)));
   }
    
   Engine.run(engine);
}

function draw()
{
    background("black");
    umbrella.display();

    

    for(var i = 0; i<maxDrops; i++)
    {
        drops[i].display();
        drops[i].update();
    }

    spawnThunder();

    drawSprites();    
}   


function spawnThunder()
{
    if(frameCount % 90 === 0)
    {
    var thunder = createSprite(200,300,10,10);
    var rand = Math.round(random(1,4));
    thunderCreatedFrame = frameCount;
    switch(rand)
    {
        case 1: thunder.addImage(thunder1);
                thunder.scale = 0.8;
                break;
        case 2: thunder.addImage(thunder2);
                thunder.scale = 0.8;
                break;
        case 3: thunder.addImage(thunder3);
                thunder.scale = 0.8;
                break;
        case 4: thunder.addImage(thunder4);
                thunder.scale = 0.8;
                break;
    }

    console.log(frameCount);
    console.log(thunderCreatedFrame);

   if(thunderCreatedFrame + 10 === frameCount && thunder)
   {
       thunder.destroy();
   }

}

}
