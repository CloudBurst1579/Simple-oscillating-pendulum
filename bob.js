class Bob
{
    constructor(x,y)
    {
        var options = {
            'restitution':0.5,
            'friction':1.0,
            'density':5.0
        }
        this.body = Bodies.circle(x, y, 25, options);
        this.width = 50;
        this.height = 50;
        
        World.add(world, this.body);
      }
      display()
      {
        var pos =this.body.position;
        var ang =this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(ang);
        rectMode(CENTER);
        fill(100,100,100);
        ellipse(0, 0, this.width, this.height);
        pop();
      } 
}
