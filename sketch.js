// http://tinyurl.com/cs160ex19
// Zombulator by Taylor Slye
// CS 160 Exercise 19: Polymorphism

var backgroundColor;

const MIN_SIZE = 5;
const MAX_SIZE = 50;
const NUMBER_OF_ZOMBIES = 100;
const NUMBER_OF_HUMANS = 100;
const POPULATION_SIZE = 500;

var zombies;

var humans;

var population=[];
function initializePopulation(){
	for(var i =0; i < POPULATION_SIZE; ++i){
		var zombieorhuman = random(0,100)
		if (zombieorhuman <= 50) {
			population[i] = initializeZombie();
		}else {
			population[i] = initializeHuman();
		}
	}
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  backgroundColor = color(245, 255, 245);
  // initializeZombies();
  // initializeHumans();
  initializePopulation();
}

function draw() {
  background(backgroundColor);
  noStroke();
  drawpopulation();
  movepopulation();
}

function drawpopulation(){
	for (var i = 0; i < POPULATION_SIZE; ++i){
		population[i].draw();	
	}
}
function movepopulation(){
	for (var i = 0; i < POPULATION_SIZE; ++i){
		population[i].move();
	}
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
      var direction = random(0, 100);
      if (direction < 20) {
        this.x += this.speed;
      } else if (direction < 40) {
        this.x -= this.speed;
      } else if (direction < 60) {
        this.y -= this.speed;
      } else {
        this.y += this.speed;
      }
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

function initializeHuman(index) {
  return {
    x: random(0, windowWidth),
    y: random(windowHeight - 200, windowHeight),
    speed: random(0.25, 3),
    size: random(MIN_SIZE, MAX_SIZE),
    color: color(random(50, 150), random(50, 150), random(150, 255), 150),
    draw: function() {
      fill(this.color);
      ellipse(this.x, this.y, this.size, this.size);
    },
    move: function() {
      var direction = random(0, 100);
      if (direction < 20) {
        this.x += this.speed;
      } else if (direction < 40) {
        this.x -= this.speed;
      } else if (direction < 60) {
        this.y += this.speed;
      } else {
        this.y -= this.speed;
      }
    }
  }
}

function drawHumans() {
  for (var i = 0; i < NUMBER_OF_HUMANS; ++i) {
    humans[i].draw();
  }
}

function moveHumans() {
  for (var i = 0; i < NUMBER_OF_HUMANS; ++i) {
    humans[i].move();
  }
}