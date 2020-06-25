let left;
let right;
let node;

//Used for displaying the tree
const xOffset = 100;
const yOffset = 60;
const nodeDiameter = 30;
let x;
let y;
let depth;

class Tree {
  constructor(value, x, y, depth) {
    this.node = value;
    this.x = x;
    this.y = y;
    this.depth = depth;
  }

  addValue(value) {
      if (this.node > value) {
      if (this.left) {
        this.left.addValue(value);
      } else {
        this.left = new Tree(value,this.x - (xOffset - this.depth*30),this.y + yOffset, this.depth++);
      }
    }
    if (this.node < value) {
      if (this.right) {
        this.right.addValue(value);
      } else {
        this.right = new Tree(value, this.x + (xOffset + this.depth*30),this.y + yOffset, this.depth++);
      }
    }
  }

  show() {
    ellipse(this.x, this.y, nodeDiameter);
    text(this.node, this.x-6, this.y+3);
    if (this.left) {
        line(this.x-nodeDiameter/2, this.y, this.left.x, this.left.y)
        this.left.show();
    }
    if (this.right) {
        line(this.x+nodeDiameter/2, this.y, this.right.x, this.right.y)
        this.right.show();
    }
  }
}
