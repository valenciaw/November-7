var scaleValue = 1;
var canvasMax = 500;
function setup() {
  var cWidth = document.getElementById('canvasContainer').offsetWidth;
  var myCanvas = createCanvas(min(canvasMax,cWidth), min(canvasMax,cWidth));
  myCanvas.parent('canvasContainer');
}
function draw() {
  push();
  scale(scaleValue);
  background('#CEA2AC');
  fill('#f4bc1f');
  //var cw = 50;
  //var twice = cw*2;
  //var half = cw* 0.5;
  //var times5 = cw*5;
  //ellipse(50,50, 100,100);
  //fill('#002d72');
  //ellipse(150,150, 200,200);
  //fill('#a6c12c');
  //ellipse(150, 325, cw, cw);
  //fill('#c985f7');
  //ellipse(125,325, half, half);
  //fill('#d67413');
  //ellipse(325,325, twice, twice);

  var myScale= 1/10000;
  var value_2017 = 201678;
  var value_2018 = 275344;
  var value_2019 = 321920;

  fill ('#006315');
  
  ellipse(90,250, value_2017*myScale, value_2017*myScale);
  text("2017", 90, 280);
  ellipse(150,250, value_2018*myScale, value_2018*myScale);
  text("2018", 150, 280);
  ellipse(200,250, value_2019*myScale, value_2019*myScale);
  text("2019", 200, 280);
  pop();
}

function windowResized() {
  //cavas size will be resized in case window size has changed
  var cWidth = document.getElementById('canvasContainer').offsetWidth;
  var cHeight = document.getElementById('canvasContainer').offsetHeight;
  scaleValue = min(canvasMax,cWidth)/canvasMax;
  resizeCanvas(min(canvasMax,cWidth), min(canvasMax,cWidth));
}