// Zombulator by Taylor Slye

var zombiex = 50;
var zombie2x = 100;
var bouncing = 5;
var colour = Math.floor(Math.random()*256);
var colour2 = Math.floor(Math.random()*256);
var colour3 = Math.floor(Math.random()*256);
function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	background(255, 255, 255);
	fill(colour, colour2, colour3);
		ellipse(zombiex, zombiex, 80, 80);
	fill(135, 224, 123);
		ellipse(zombie2x, 100, 80, 80);
		zombiex = zombiex + bouncing;
		zombie2x = zombie2x +2;
	if (zombiex >= windowHeight) {
		bouncing = -1.01*bouncing;
		colour = Math.floor(Math.random()*256);
		colour2 = Math.floor(Math.random()*256);
		colour3 = Math.floor(Math.random()*256);
	}
	 if (zombie2x >= windowWidth) {
		zombie2x = 0;
	 }
	 if (zombiex <= 0) {
	 	bouncing = -1.01 * bouncing;
	 	colour = Math.floor(Math.random()*256);
		colour2 = Math.floor(Math.random()*256);
		colour3 = Math.floor(Math.random()*256);
	 }
}

