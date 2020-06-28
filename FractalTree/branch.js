let start;
let end;

let leftBranch;
let rightBranch;
let grown;

let leaves;

class Branch {
  constructor(start, end) {
    this.start = start;
    this.end = end;
    this.grown = false;
    this.leaves = new Array();
    this.leaves.push(new Leaf(this.end));
  }

  addBranches() {
    let branches = [];
    if (!this.grown) {
      branches.push(this.createBranch(true));
      branches.push(this.createBranch(false));
      leaves = [];
      this.grown = true;
    }
    return branches;
  }

  createBranch(isRight) {
    let dir = p5.Vector.sub(this.end, this.start);
    if (isRight) {
      dir.rotate(PI / 6);
    } else {
      dir.rotate(-PI / 6);
    }
    dir.mult(0.67);
    var newEnd = p5.Vector.add(this.end, dir);
    return new Branch(this.end, newEnd, dir);
  }

  show(days) {
    line(this.start.x, this.start.y, this.end.x, this.end.y);
    if (!this.grown) {
      for (let i = 0; i < this.leaves.length; i++) {
        this.leaves[i].show(days);
      }
    } else {
      leaves = [];
    }
  }
}
