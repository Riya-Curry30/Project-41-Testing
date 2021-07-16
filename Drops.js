class Drops
{
    constructor(x,y)
    {
        var options = 
        {
            isStatic: false,
            friction: 0.001,
            restitution: 0.1
        }

        this.body = Bodies.circle(x,y,5, options);
        this.x = x;
        this.y = y;
        //this.r = r;

        World.add(world,this.body);
    }

    update()
    {
         var pos = this.body.position;
        /*if(pos.y > 900)
        {
            pos.x = random(0,400);
            pos.y = random(0,400);
        }*/

        if(pos.y > height)
        {
            Matter.Body.setPosition(this.body, {x: random(0,400), y: random(0,20)})
        }
    }

    display()
    {
        fill("blue");
        ellipseMode(CENTER);
        ellipse(this.body.position.x, this.body.position.y, 5,5);
    }

    
}