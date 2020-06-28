//TODO add adjustable angles for branches
//N2H (Nice to have) animation of the leaves falling and 2 trees being planted and so on... until a forest
let tree = [];
let count = 0;
let startPosition;
let endPosition;
function setup() {
  createCanvas(400, 400);
  startPosition = createVector(width / 2, height);
  endPosition = createVector(width / 2, height - 100);
  tree.push(new Branch(startPosition, endPosition));
}

function mouseClicked() {
  clear();
  count++;
  if (count == 7) {
    tree = [];
    tree.push(new Branch(startPosition, endPosition));
    count = 0;
  }
  for (let i = tree.length - 1; i >= 0; i--) {
    branches = tree[i].addBranches();
    tree.push(...branches);
  }
}
function draw() {
  background(240);
  frameRate(1);
  console.log(tree);
  if (count == 7) {
    tree = [];
    tree.push(new Branch(startPosition, endPosition));
    count = 0;
  }
  for (let i = tree.length - 1; i >= 0; i--) {
    branches = tree[i].addBranches();
    tree.push(...branches);
  }
  for (let i = 0; i < tree.length; i++) {
    tree[i].show(count);
  }
  count++;
}
