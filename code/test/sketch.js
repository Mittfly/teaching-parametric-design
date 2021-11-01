function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(200);
  stroke("red");
  strokeWeight(5);
  fill("green");
  ellipse(150,120,200,200);

  stroke("green");
  fill(255,0,0);
  strokeWeight(10);
  ellipse(350,120,100,120);
  fill(200);
  stroke("yellow");
  strokeWeight(30);
  arc(300,300,100,100,0,Math.PI);
}


