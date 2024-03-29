class Box {
    constructor(x,y,width,height) {
      var options = {
          restitution: 1.0,
          friction: 0.5,
          density:0.04

      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      fill("lightgrey");
      stroke("grey")
      strokeWeight(3);
      rectMode(CENTER);
      rect(0,0, this.width, this.height);
      pop();
    
    }
  };
