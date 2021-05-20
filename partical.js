class partical  {
    constructor(x, y) {
        var options = {
            restitution:1,
            friction: 0,
            isStatic:false
        }
        this.r = 10;
        this.body = Bodies.circle(x, y, this.r, options);
        
        World.add(world, this.body);
    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        this.body= Bodies.circle(200,200,this.r,options);
        this.color=this.color(random(0,225),random(0,225),random(0,225));
        World.add(world,this.body);
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        noStroke();
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }
    
    };
    
    

   






















