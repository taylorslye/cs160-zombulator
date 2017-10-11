// Zombulator by Taylor Slye

// var zombiex = 50;
// var zombie2x = 100;
// var bouncing = 5;
// var colour = Math.floor(Math.random()*256);
// var colour2 = Math.floor(Math.random()*256);
// var colour3 = Math.floor(Math.random()*256);
// var humanx;
// var humany = 100;
// var humansize = 80;
// var humana = .02;
// var humanv = 0;
// var humandamping = -.5;
// var zombie3x;
// var zombiey = 100;
// var zombiesize = 80;
// var zombiea = .01;
// var zombiev = .5;
// var zombiedamping = -.5;
// function setup() {
// 	createCanvas(windowWidth, windowHeight);
// 	humanx = (windowWidth/2);
// 	zombie3x = (windowWidth/4);
// }

// function draw() {
// 	background(255, 255, 255);
// 	fill(colour, colour2, colour3);
// 		ellipse(zombiex, zombiex, 80, 80);
// 	fill(135, 224, 123);
// 		ellipse(zombie2x, 100, 80, 80);
// 		zombiex = zombiex + bouncing;
// 		zombie2x = zombie2x +2;
// 	if (zombiex >= windowHeight) {
// 		bouncing = -1.01*bouncing;
// 		colour = Math.floor(Math.random()*256);
// 		colour2 = Math.floor(Math.random()*256);
// 		colour3 = Math.floor(Math.random()*256);
// 	}
// 	 if (zombie2x >= windowWidth) {
// 		zombie2x = 0;
// 	 }
// 	 if (zombiex <= 0) {
// 	 	bouncing = -1.01 * bouncing;
// 	 	colour = Math.floor(Math.random()*256);
// 		colour2 = Math.floor(Math.random()*256);
// 		colour3 = Math.floor(Math.random()*256);

// 	 }
// 	fill(127, 180, 219);
// 		ellipse(humanx, humany, humansize, humansize);
// 		humany += humanv;
// 		humanv += humana;
// 		if (humany + (humansize / 2) >= windowHeight){
// 			humany = windowHeight - (humansize/2);
// 			humanv *= humandamping;
// 			humansize *= .8;
// 		}	
// 	fill(0,0,255);
// 	ellipse(zombie3x, zombiey, zombiesize, zombiesize);
// 	zombiey += zombiev;
// 	zombiev += zombiea;
// 	if (zombiey + (zombiesize / 2) >= windowHeight){
// 		zombiey = windowHeight - (zombiesize/2);
// 		zombiev *= zombiedamping;
// 		zombiesize *= .8;
// 	}	
// }

var zombieY = 100;
var zombieV = 0;
var zombieA = 0.2;
var zombieDamping = -0.5;
var zombieSize = 80;
var zombieColor;

var humanY = 100;
var humanV = 0;
var humanA = 0.6;
var humanDamping = -0.8;
var humanSize = 80;
var humanColor;

var backgroundColor;

function setup() {
  createCanvas(windowWidth, windowHeight);
  backgroundColor = color(114, 168, 255);
  zombieColor = color(242, 255, 0);
  humanColor = color(random(200, 255), random(200, 255), random(200, 255));
}

function draw() {
  background(backgroundColor);
  noStroke();


drawZombie();
moveZombie();
drawHuman();
moveHuman();
  



}

function drawZombie(){
  fill(zombieColor);
  ellipse(windowWidth / 2, zombieY, zombieSize, zombieSize);
}
function moveZombie(){
  zombieY += zombieV;
  zombieV += zombieA;
  if (zombieY + (zombieSize / 2) >= windowHeight) {
    zombieY = windowHeight - (zombieSize / 2);
    zombieV *= zombieDamping;
  }
}
function drawHuman(){
  fill(humanColor);
  ellipse(windowWidth / 4, humanY, humanSize, humanSize);
  fill(0);
  text("human", windowWidth / 4, humanY);

}
function moveHuman(){
	  humanY += humanV;
  humanV += humanA;
  if (humanY + (humanSize / 2) >= windowHeight) {
    humanY = windowHeight - (humanSize / 2);
    humanV *= humanDamping;
  }

}