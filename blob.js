function Blob(x, y, r) {
	this.pos = createVector(x, y);
	this.r = r;
	this.vel = createVector(0,0);
	this.colors = [
		{r: 255, g: 100, b: 100},
		{r: 100, g: 255, b: 100},
		{r: 100, g: 100, b: 255},
		{r: 255, g: 255, b: 100},
		{r: 255, g: 100, b: 255},
		{r: 100, g: 255, b: 255},
	];
	this.color = this.colors[Math.floor(Math.random()*this.colors.length)];
}

Blob.prototype.update = function() {
	var newvel = createVector(mouseX-width/2, mouseY-height/2);
	newvel.setMag(3);
	this.vel.lerp(newvel, 0.2);

	this.pos.add(this.vel);
	this.pos.x = this.pos.x.clamp(-width * 8, width * 8);
	this.pos.y = this.pos.y.clamp(-height * 8, height * 8);
}

Blob.prototype.eats = function(other) {
	var d = p5.Vector.dist(this.pos, other.pos);
	if (d < this.r + other.r) {
		var sum = PI * this.r * this.r + PI * other.r * other.r;
		this.r = sqrt(sum / PI);

		return true;
	} else {
		return false;
	}
}

Blob.prototype.show = function() {
	fill(this.color.r, this.color.g, this.color.b);
	ellipse(this.pos.x, this.pos.y, this.r*2, this.r*2);
}