// Zombulator by Taylor Slye

var zombiex = 50;
var zombie2x = 100;
var bouncing = 1;
var colour = 255;
var colour2 = 0;
function setup() {
	createCanvas(800, 800);
}

function draw() {
	background(255, 255, 255);
	fill(colour, colour2, 0);
		ellipse(zombiex, zombiex, 80, 80);
	fill(135, 224, 123);
		ellipse(zombie2x, 100, 80, 80);
		zombiex = zombiex + bouncing;
		zombie2x = zombie2x +2;
	if (zombiex >= 800) {
		bouncing = -1.5*bouncing;
		colour = 0;
		colour2 = 255;
	}
	 if (zombie2x >= 800) {
		zombie2x = 0;
	 }
	 if (zombiex <= 0) {
	 	bouncing = -1.5 * bouncing;
	 	colour = 255;
		colour2 = 0;
	 }
}

