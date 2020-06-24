//TODO i wanna make snake
let snake = [];
let x=0;
let y=0;
function setup() {
  frameRate(5);
  createCanvas(400, 400);
  snake.push(new Cell(10, 10));
  food = new Cell(floor(random(1, 39)) * 10, floor(random(0, 39)) * 10);
  console.log(food);
}

function draw() {
  background(0);
  stroke(150);
  strokeWeight(10);
  line(0, 0, 0, height);
  line(width, height, 0, height);
  line(width, height, width, 0);
  line(0, 0, width, 0);
  noStroke();
  fill(255, 0, 0);
  rect(food.pos.x, food.pos.y, 10, 10);
  for (n = snake.length - 1; n >= 0; n--) {
    if (n == 0) {
      snake[n].updatePosition();
    } else {
      snake[n].updateViaCell(snake[n - 1]);
    }
    fill(255);
    rect(snake[n].pos.x, snake[n].pos.y, 10, 10);
  }
  checkEaten();
  if (this.checkFail()) {
    console.log("Game Over");
    noLoop();
  }
  snake[0].setDirection(x, y);
}
function checkEaten() {
  if (snake[0].pos.x === food.pos.x && snake[0].pos.y === food.pos.y) {
    moveFood();
    snake[snake.length] = new Cell();
  }
}
function checkFail() {
  return (
    snake[0].pos.x >= width - 10 ||
    snake[0].pos.x <= 0 ||
    snake[0].pos.y >= height - 10 ||
    snake[0].pos.y <= 0 ||
    collidedWithSnake()
  );
}

function collidedWithSnake() {
  for (n = 1; n < snake.length; n++) {
    if (snake[0].collided(snake[n])) {
      return true; 
    }
  }
  return false;
}
function moveFood() {
  food.pos.x = floor(random(1, 39)) * 10;
  food.pos.y = floor(random(1, 39)) * 10;
}
function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    if (snake[0].direction.x === 0) {
      x = -10;
      y = 0;
    }
  } else if (keyCode === RIGHT_ARROW) {
    if (snake[0].direction.x === 0) {
      x = 10;
      y = 0;
    }
  } else if (keyCode === UP_ARROW) {
    if (snake[0].direction.y === 0) {
      x = 0;
      y = -10;
    }
  } else if (keyCode === DOWN_ARROW) {
    if (snake[0].direction.y === 0) {
      x = 0;
      y = 10;
    }
  }
}
