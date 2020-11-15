class Paper {
    constructor(x,y) {
      var options = {
          isStatic: false,
          restitution: 0.3,
          friction: 0.5,
          density: 1.2
      }
      this.body = Bodies.circle(x,y,28,options);
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("rgb(251, 38, 251)" );
      ellipse(pos.x, pos.y);
    }
  };