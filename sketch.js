// Zombulator by Taylor Slye
/// CS 160 Exercise 17: Member functions

var backgroundColor;

const MIN_SIZE = 5;
const MAX_SIZE = 50;
const NUMBER_OF_ZOMBIES = 100;
const NUMBER_OF_HUMANS = 100;

var zombies;

var humans;

function setup() {
  createCanvas(windowWidth, windowHeight);
  backgroundColor = color(245, 255, 245);
  initializeZombies();
  initializeHumans();
}

function draw() {
  background(backgroundColor);
  noStroke();
  drawZombies();
  moveZombies();
  drawHumans();
  moveHumans();
}


// Zombies. Raaahh!

function initializeZombies() {
  zombies = [];
  for (var i = 0; i < NUMBER_OF_ZOMBIES; ++i) {
    zombies[i] = initializeZombie();
  }
}

function initializeZombie() {
  return {
    x: random(0, windowWidth),
    y: random(0, 200),
    speed: random(0.25, 3),
    size: random(MIN_SIZE, MAX_SIZE),
    color: color(random(100, 255), random(50, 150), random(50, 150), 150),
    move: function() {
      this.y+= random(-1,2)*this.speed;
      this.x+= random(-1,1)
    },

    draw: function() {
      fill(this.color);
      ellipse(this.x, this.y, this.size, this.size);
    }
  };
}

function drawZombies() {
  for (var i = 0; i < NUMBER_OF_ZOMBIES; ++i) {
    zombies[i].draw();
  }
}

function moveZombies() {
  for (var i = 0; i < NUMBER_OF_ZOMBIES; ++i) {
    zombies[i].move();
  }
}

// Humans. Mmmm brains!

function initializeHumans() {
  humans = [];
  for (var i = 0; i < NUMBER_OF_HUMANS; ++i) {
    humans[i] = initializeHuman();
  }
}

// TODO: Refactor according to usage in initializeHumans above.
//       Should _return_ a human object.
function initializeHuman(index) {
  return {
    x: random(0, windowWidth),
    y: random(windowHeight - 200, windowHeight),
    speed: random(0.25, 3),
    size: random(MIN_SIZE, MAX_SIZE),
    color: color(random(50, 150), random(50, 150), random(150, 255), 150),
    move: function() {
      this.y+= random(-2,1)*this.speed;
      this.x+= random(-1,1)
    },
    draw: function() {
      fill(this.color);
      ellipse(this.x, this.y, this.size, this.size);
    }
  };
}

function drawHumans() {
  for (var i = 0; i < NUMBER_OF_HUMANS; ++i) {
    humans[i].draw();
  }
}

// TODO: Extract into object member function, then delete this.
function drawHuman(human) {
  fill(human.color);
  ellipse(human.x, human.y, human.size, human.size);
}

function moveHumans() {
  for (var i = 0; i < NUMBER_OF_HUMANS; ++i) {
    humans[i].move();
  }
}

// TODO: Extract into object member function, then delete this.
function moveHuman(human) {

  human.y+= random(-2,1)*human.speed;
  human.x+= random(-1,1)
}
