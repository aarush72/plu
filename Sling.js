class Sling{
    constructor(bodyA,pB){
        var options = {
            bodyA: bodyA,
            pointB: pB,
            stiffness: 0.004,
            length: 10
        }
        this.sling = Constraint.create(options);
        this.pB = pB;
        World.add(world, this.sling);

        
       
    }
     
    fly(){
        this.sling.bodyA = null;
    }






    
   display(){
        if(this.sling.bodyA){
        var pointA = this.sling.bodyA.position;
        var pointB = this.pB;  
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        
    }
      
}
}