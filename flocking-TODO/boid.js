let velocity;
let position;
let maxspeed;
let 
class Boid {
    run(){
        this.update();
        this.borders();
        this.render();
    }

    update = function() {
        this.velocity.add(this.acceleration);
        this.velocity.limit(this.maxspeed);
        this.position.add(this.velocity);
        this.acceleration.mult(0);
    }
}