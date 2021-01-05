class bob{
 constructor(x,y){
 var options = {isStatic:false,restitution:1,friction:0,density:0.8}
 this.body = Bodies.circle(x,y,70,options);
 World.add(world,this.body);
 }
 display(){
    var pos =this.body.position;
    push();
    translate(pos.x, pos.y);;
    fill("red");
    ellipseMode(CENTER);
    ellipse(0,0,70,70);
    pop();
}
}