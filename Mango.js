class Mango {
    constructor(x,y,r) {
    
    var option = {
    isStatic : true,
    restitution : 1,
    friction : 0.5,
    density : 0.5
    }
    this.image = loadImage("image/mango.png");
    this.x = x;
    this.y = y;
    this.r = r;
    this.body = Bodies.circle(this.x,this.y,this.r/2,option);
    World.add(world,this.body)
    
    }
    
    display() {
    var stonepos = this.body.position;
    
    push()
    translate(stonepos.x,stonepos.y);
    strokeWeight(5);
    fill("cyan");
    image(this.image,0,0,this.r, this.r);
    pop()
    
    }
    
    
    
    
    }