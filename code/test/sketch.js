function setup() {
  createCanvas(500, 400);
}

function draw() {
  background('rgba(200,190,190,0.6)');
  
  
  
  /*
  fill('gray');
  stroke('gray');
  circle(200,200,350);
  
  fill('rgba(200,50,100,0.8)');//桃紅色
  stroke('rgba(200,50,100,0.8)');
  square(145,145,110);

  fill('rgba(0,120,100,0.8)');//藍綠色
  stroke('rgba(0,120,100,0.8)');
  square(145,35,110);

  fill('rgba(80,0,50,0.7)');//暗紅色
  stroke('rgba(80,0,50,0.7)');
  square(145,255,110);

*/
  
 
 stroke('green');
 fill('rgba(190,0,130,0.3)');
 arc(0,200,100,400,Math.PI/180*270,Math.PI/180*450,PIE);
 arc(50,200,200,400,Math.PI/180*270,Math.PI/180*450,CHORD);
 arc(150,200,300,400,Math.PI/180*270,Math.PI/180*450,CHORD);
 arc(300,200,400,400,Math.PI/180*270,Math.PI/180*450,CHORD);
 
}


