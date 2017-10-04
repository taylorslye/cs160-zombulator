// Zombulator by Taylor Slye

var zombiex = 50;
var zombie2x = 100;
function setup() {
	createCanvas(800, 800);
}

function draw() {
	background(255, 255, 255);
	fill(255, 0, 0);
		ellipse(zombiex, zombiex, 80, 80);
	fill(135, 224, 123);
		ellipse(zombie2x, 100, 80, 80);
		zombiex = zombiex + .1;
		zombie2x = zombie2x +.2;
}
