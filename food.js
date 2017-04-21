function Food() {
	this.pos = createVector(random(-width * 8, width * 8), random(-height * 8, height * 8));
	this.r = 16;
	this.vel = createVector(0,0);
	this.colors = [
		{r: 255, g: 50, b: 50},
		{r: 50, g: 255, b: 50},
		{r: 50, g: 50, b: 255},
		{r: 255, g: 255, b: 0},
		{r: 255, g: 0, b: 255},
		{r: 0, g: 255, b: 255},
	];
	this.color = this.colors[Math.floor(Math.random()*this.colors.length)];
}

Food.prototype.show = function() {
	this.show = function() {
		fill(this.color.r, this.color.g, this.color.b);
		ellipse(this.pos.x, this.pos.y, this.r*2, this.r*2);
	}
}