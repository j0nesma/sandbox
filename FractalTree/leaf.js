let pos;
const spring = 3;
const summer = 5;
const autumn = 6;

let springColors = [];
let summerColors = [];
let autumnColors = [];

let leafColor;
class Leaf {
  constructor(pos) {
    this.pos = pos;

    springColors.push(color(255, 183, 197));
    springColors.push(color(255, 0, 64));
    springColors.push(color(255, 64, 64));

    summerColors.push(color(8, 120, 48));
    summerColors.push(color(5, 144, 51));
    summerColors.push(color(111, 153, 6));

    autumnColors.push(color(205, 167, 60));
    autumnColors.push(color(197, 115, 32));
    autumnColors.push(color(183, 66, 20));
  }

  show(days) {
    if (days < spring) {
      this.setColor(random(springColors), "SPRING");
    } else if (days < summer) {
      this.setColor(random(summerColors), "SUMMER");
    } else if (days < autumn) {
      this.setColor(random(autumnColors), "AUTUMN");
    } else {
      //TODO add animation of leaves falling
    }
    fill(leafColor);
    ellipse(this.pos.x, this.pos.y, 8);
  }

  setColor(requestedChange, season) {
    if (!leafColor) {
      leafColor = requestedChange;
      return;
    }
    if (season === "SPRING") {
      if (!springColors.includes(leafColor)) {
        leafColor = requestedChange;
        return;
      }
    }
    if (season === "SUMMER") {
      if (!summerColors.includes(leafColor)) {
        leafColor = requestedChange;
        return;
      }
    }
    if (season === "AUTUMN") {
      if (!autumnColors.includes(leafColor)) {
        leafColor = requestedChange;
        return;
      }
    }
  }
}
