let Mickey
let video;
let faceMesh;
let faces = [];

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();
  
  faceMesh = ml5.faceMesh(video, {maxFaces:1, refineLandmarks: false, flipHorizontal: true}, modelReady);
  
  Mickey = new Mockey(width / 2, height / 2, 50);
}

function modelReady() {
  console.log("FaceMesh model ready!");
  faceMesh.detectStart(video, gotResults);
}

function gotResults(error, results) {
  if (error) {
    console.error(error);
    return;
  }
  faces = results;
}


function draw() {
  background(100, 149, 237);
  
  if (faces.length > 0) {
    let nose = faces[0].keypoints[1]; // nose landmark
    Mickey.x = map(nose.x, 0, video.width, 0, width);
    Mickey.y = map(nose.y, 0, video.height, 0, height);
  }
  
  Mickey.show();
}

class Mockey {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
  }
 
  show() {
    let scale = this.size / 100;
  noStroke();
  fill("rgb(0,0,0)");
  circle(this.x -5*scale, this.y -188.5*scale, 200*scale);
  circle(this.x -101*scale, this.y -311.5*scale, 134*scale);
  circle(this.x +89*scale, this.y -311.5*scale, 134*scale);
  rect(this.x -52*scale, this.y +62.5*scale, 100*scale, 110*scale);
   rect(this.x -34*scale, this.y +37.5*scale, 65*scale, 50*scale);
  fill('rgb(165,22,22)');
  rect(this.x -67*scale, this.y +32.5*scale, 130*scale, 100*scale, 10);
  fill('rgb(255,255,255)');
  ellipse(this.x -25*scale, this.y +77.5*scale, 20*scale, 20*scale);
  ellipse(this.x +18*scale, this.y +77.5*scale, 20*scale, 20*scale);
  noStroke();
fill(' rgb(247,182,122)');    
  ellipse(this.x -5*scale, this.y -116.5*scale, 167*scale, 89*scale);
 ellipse(this.x -42*scale, this.y -181.5*scale, 78*scale, 158*scale);
  ellipse(this.x +33*scale, this.y -181.5*scale, 78*scale, 158*scale);
    ellipse(this.x -8*scale, this.y -148.5*scale, 78*scale, 78*scale);
  fill(' rgb(0,0,0)');    
    ellipse(this.x -3*scale, this.y -130.5*scale, 45*scale, 12*scale);
    ellipse(this.x -40*scale, this.y -192.5*scale, 30*scale, 80*scale);
    ellipse(this.x +33*scale, this.y -192.5*scale, 30*scale, 80*scale);
    arc(this.x -10*scale, this.y -98.5*scale, 40*scale, 40*scale, 1, PI + QUARTER_PI, CHORD);
  stroke('rgb(0,0,0)');
  strokeWeight(35*scale);
line(this.x -90*scale, this.y -28.5*scale, this.x -53*scale, this.y -44.5*scale);
    line(this.x -90*scale, this.y -28.5*scale, this.x -100*scale, this.y +77.5*scale);
  line(this.x +89*scale, this.y -28.5*scale, this.x +47*scale, this.y -44.5*scale);
    line(this.x +90*scale, this.y -28.5*scale, this.x +100*scale, this.y +77.5*scale);
  noStroke();
 fill('rgb(218,214,214)');
  ellipse(this.x -100*scale, this.y +77.5*scale, 70*scale, 40*scale);
   fill('rgb(255,255,255)');
  ellipse(this.x -100*scale, this.y +100.5*scale, 90*scale, 50*scale);
   fill('rgb(218,214,214)');
  ellipse(this.x +100*scale, this.y +77.5*scale, 70*scale, 40*scale);
   fill('rgb(255,255,255)');
  ellipse(this.x +100*scale, this.y +100.5*scale, 90*scale, 50*scale);
 fill('rgb(0,0,0)');
 rect(this.x -59*scale, this.y +117.5*scale,39*scale, 200*scale, 0);
      rect(this.x +14*scale, this.y +117.5*scale,39*scale, 200*scale, 0);
   fill('rgb(165,22,22)');
  rect(this.x -67*scale, this.y +117.5*scale,56*scale, 50*scale, 0);
    rect(this.x +7*scale, this.y +117.5*scale,56*scale, 50*scale, 0);
  noStroke();
 fill('#FFC107');
  ellipse(this.x -48*scale, this.y +307.5*scale, 70*scale, 40*scale);
   fill('#FFEB3B');
  ellipse(this.x -90*scale, this.y +332.5*scale, 150*scale, 50*scale);
   fill('#FFC107');
  ellipse(this.x +42*scale, this.y +307.5*scale, 70*scale, 40*scale);
   fill('#FFEB3B');
  ellipse(this.x +89*scale, this.y +332.5*scale, 150*scale, 50*scale);
  }
}
