class Monster extends BaseClass {
    constructor(x,y){
      super(x,y,350,200);
      this.image = loadImage("Monster-01.png");
    }
  
    display() {
    console.log("monster")
      super.display();
    }
  }