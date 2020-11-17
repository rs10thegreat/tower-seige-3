class Box{
  constructor(x, y, width, height) {
    this.body = Bodies.rectangle(x, y, width, height);
    this.image = loadImage("box.png");
    this.width = width;
    this.height = height;
    this.visibility=255;
    World.add(world, this.body);
  }

  score(){
    if(this.visibility<0 && this.visibility>-105){
      score+=1;
    }
  }

  display(){
      if(this.body.speed<3){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        rotate(angle);
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image,0,0,65,70);
        pop();
      }else{
        World.remove(world,this.body);
        push();
        imageMode(CENTER);
        this.visibility=this.visibility-5;
        tint(255,this.visibility);
        image(this.image,this.body.position.x,this.body.position.y,65,70);
        pop();
    }
  }
}
