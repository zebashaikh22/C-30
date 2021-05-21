class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.visible = 45;
    this.image = loadImage("sprites/enemy.png");
  }

  display(){
    if(this.body.speed < 2.5){
      super.display();
    }
    else {
      World.remove(world, this.body);
      this.visible -=1;
      push();
      tint(255, this.visible);
      image(this.image, this.body.position.x, this.body.position.y, 50, 50);
      pop();
    }
  }

};