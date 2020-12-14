class Cup extends BaseClass {
    constructor(x, y){
      super(x,y,50,50);
      this.image = loadImage("cup.png");
    }
    display(){
      super.display();
      image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
    }
  };