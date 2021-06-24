class Bob {
    constructor(x,y,radius) {
        var options = {
            isStatic: false,
            restitution: 1,
            friction:0,
            density:0.8
        }
        
        this.image=loadImage("boys_1.png");
        this.body = Bodies.circle(x,y,radius, options);
        this.radius = radius

        World.add(world, this.body);
    }
    display(){

        var paperpos=this.body.position;
        
        push()
        translate(paperpos.x, paperpos.y);
        ellipseMode(RADIUS);
        fill("magenta");
        imageMode(CENTER);
		image(this.image, 0,0,2*this.r, 2*this.r)
        
        pop()

    }       
};

