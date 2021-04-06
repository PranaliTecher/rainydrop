class Drop {
    constructor(x,y) {
       var options = {
           restitution:0.1,
           //density:1,
           friction:0.001
       };

       
       this.body = Bodies.circle(x,y,5,options);
       this.radius = 5;
       World.add(world,this.body);
    }
    updateY(){
    if(this.body.position.y>height) {
      Matter.Body.setPosition(this.body,{x:random(0,400),y:random(0,800)});
     }
    }
    display() {
      var pos = this.body.position;
     // var Angle = this.body.angle;
 
     // push();
      // translate(pos.x,pos.y);
       
       fill(0, 4, 237);
       ellipseMode(CENTER)
       ellipse(pos.x,pos.y,this.radius,this.radius);

     
    }
}