class divider{
constructor(x,y,width,height){
var options = {
    isStatic: true,
    //'restitution': 0.2,
   //'friction': 1.3,
  // 'density': 2
}
this.body = Bodies.rectangle(x,y,width,height,options);
this.width = width;
this.height = height;

World.add(world, this.body);
}

display(){
var pos = this.body.position;
push();
translate(pos.x,pos.y);
fill("");
rectMode(CENTER);
rect(0,0,this.width,this.height);
pop();
}

};