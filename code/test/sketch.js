function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  /*
  stroke("red");
  strokeWeight(1);
  */
  
  fill('gray');
  stroke('gray');
  circle(200,200,350);
  
  fill('rgba(200,50,100,1)');//桃紅色
  stroke('rgba(200,50,100,1)');
  square(145,145,110);

  fill('rgba(0,100,100,1)');//藍綠色
  stroke('rgba(0,100,100,1)');
  square(145,35,110);

  fill('rgba(80,0,0,1)');
  stroke('rgba(80,0,0,1)');
  square(145,255,110);
}


