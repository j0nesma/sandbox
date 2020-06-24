let values = [];
const numberOfLines = 1000;
let i = 0;
let j = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  nonMixed = new Array(numberOfLines);
  for (let i = 0; i < nonMixed.length; i++) {
    nonMixed[i] = i;
  }
  values = shuffle(nonMixed);
}

function draw() {
  background(0);

  if (i < values.length) {
    for (let j = 0; j < values.length - i - 1; j++) {
      let a = values[j];
      let b = values[j + 1];
      if (a < b) {
        swap(values, j, j + 1);
      }
    }
  } else {
    console.log('finished');
    noLoop();
  }
  i++;

  for (let i = 0; i < values.length; i++) {
    stroke(255);
    line(i, height, i, height - values[i]);
  }
}

function swap(arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}