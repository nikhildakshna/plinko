class partical{
    constructor(x,y,radius){
    
    var options ={
    isStatic: false,
    'restitution': 0.6,
    'friction': 0.4,
    'density': 1
    }
    
    this.body = Bodies.circle(x,y,radius);
    this.radius = radius;

    World.add(world, this.body);

    }

    dislay(){
    var pos = this.body.position;

    push();
    translate(pos.x,pos.y);
    fill(rgb (random(0,255), random(0,255), random(0,255) ));
    ellipseMode(RADIUS);
    ellipse(0,0,this.radius, this.radius);
    pop();
    }

};