class PAPER{
constructor(x,y,r){
var options={
    isStatic:false,
    density:1.2,
    restitution:0.3,
    friction:0.5
}
this.x = x;
this.y = y;
this.r = r;
this.body = Matter.Bodies.circle(this.x,this.y,this.r,options);

World.add(world,this.body);

}

display(){
    var pa = this.body.position

    push();
    translate(pa.x,pa.y);
    rectMode(CENTER);
    fill("aquamarine");
    ellipse(0,0,this.r);
    pop();

    

}

}
