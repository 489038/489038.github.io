var blob;

var food = [];
var zoom = 1;

function setup() {
	createCanvas(document.body.clientWidth, document.body.clientHeight);
	blob = new Blob(0, 0, 64);

	for (var i = 0; i < 2000; i++) {
		food[i] = new Food();
	}
}

function draw() {
	background(0);

	if (food.length < 2000) {
		food.push(new Food());
	}

	translate(width/2, height/2);
	var newzoom = 64 / blob.r;
	zoom = lerp(zoom, newzoom, 0.1);
	scale(zoom);
	translate(-blob.pos.x, -blob.pos.y);

	for (var i = food.length-1; i >=0; i--) {
		food[i].show();
		
		if (blob.eats(food[i])) {
			food.splice(i, 1);
		}
	}

	blob.show();
	blob.update();
}