class Umbrella
{
    constructor(x,y)
    {
    
        var options = 
        {
            isStatic: true
        }
        this.body = Bodies.circle(x,y,90, options);
        this.x = x;
        this.y = y;
        //this.r = r;
        
        this.image = loadImage("Walking Frame/walking_1.png");
        World.add(world,this.body);
    }

    display()
    {
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,300,300);
    }
}