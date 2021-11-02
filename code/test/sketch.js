function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(200);
  /*
  
  
  
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
  */
 stroke('green');
 fill('rgba(190,0,130,0.5)');
 arc(0,200,100,400,Math.PI/180*270,Math.PI/180*450,PIE);
 arc(50,200,200,400,Math.PI/180*270,Math.PI/180*450,CHORD);
 arc(150,200,300,400,Math.PI/180*270,Math.PI/180*450,CHORD);
 
 arc(300,200,400,400,Math.PI/180*270,Math.PI/180*450,CHORD);
}


