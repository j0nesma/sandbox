//Going to try flocking 
let flock;
let initFlock = 100
function setup() {
  createCanvas(400, 400);
  for(x=0; x<initFlock; x++){
    boid = new Boid(width/2, height/2);
    flock.addBoid(boid);
  }
}

function draw() {
  background(240);
}