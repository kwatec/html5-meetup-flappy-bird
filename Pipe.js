class Pipe {
  constructor(location=createVector(width,0)) {
    this.location = location;
    this.acceleration = createVector(0, 0);
    this.velocity = createVector(-2.4, 0);

    this.color = {r: 0, g: 255, b: 0};
    this.width = 20;
    this.height = height;

    this.gapSize = 150;
    this.gapColor = 0;
    this.gapLocation = random(this.gapSize, height-this.gapSize);
  }

  display() {
    noStroke();
    fill(this.color.r, this.color.g, this.color.b);
    rect(this.location.x, this.location.y, this.width, this.height);

    fill(this.gapColor);
    rect(this.location.x, this.gapLocation, this.width, this.gapSize);
  }

  applyForce(force) {
    this.acceleration.add(force);
  }

  update() {
    this.velocity.add(this.acceleration);
    this.location.add(this.velocity);
    this.acceleration.mult(0);
  }
}
