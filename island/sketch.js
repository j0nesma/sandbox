//2D Island Generation using noise
let noiseScale = 0.01
function setup() {
  createCanvas(700, 700);
  console.log("Generating islands");
  console.log("Please Wait, it takes a moment");
}

function draw() {
  //Ocean
  ocean = color(0, 0, 220);
  background(ocean);
  for (x = 0; x < width; x++) {
    for (y = 0; y < height; y++) {
      noiseValue = noise(x*noiseScale, y*noiseScale);
      stroke(ocean);
      //Shallow Water
      if(noiseValue> 0.4){
        stroke(floor(noiseValue*100), 119, 190);
      }
      //Beach
      if(noiseValue> 0.45){
        
        stroke(255, 240, 201);
      }
      //Grass
      if(noiseValue>0.5){
        stroke(132, 230, 53);
      }
      if(noiseValue>0.6){
        stroke(126, 200, 80);
      }
      //Mountain
      if(noiseValue>0.7){
        stroke(156, 160, 161);
      }
      if(noiseValue>0.75){
        stroke(162, 163, 162);
      }
      //Snow
      if(noiseValue>0.8){
        stroke(240, 240, 236);
      }
      point(x, y);
    }
  }
  noLoop();
}