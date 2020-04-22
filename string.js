class String{
    constructor(bodyA, bodyB)
    {
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 1.0,
            length: 400
        }
        this.string = Constraint.create(options);
        World.add(world, this.string);
    }

    display()
    {
        var pointA = this.string.bodyA.position;
        var pointB = this.string.bodyB.position;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
    
}