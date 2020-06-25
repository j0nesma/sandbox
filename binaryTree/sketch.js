//TODO
// Random Values
// Fix bug noted above more cleanly
// looping run which shows values being added to the tree and highlighting

let values = [3,1,2,6,10,13,4,99];
let tree;
function setup() {
  createCanvas(windowWidth, windowHeight);
  tree = new Tree(8, width/2, 50, 1);
  for(i=0; i<values.length; i++){
    tree.addValue(values[i]);
  }
}

function draw() {
  background(240);
  tree.show();
  noLoop();
}