function setup() {
  createCanvas(640, 752);

  background("rgb(113,213,36)");
  
  //Cuerpo
  noStroke();
  fill("rgb(0,0,0)");
  circle(315, 199, 200);
  circle(219, 76, 134);
  circle(409, 76, 134);
  rect(268, 325, 100, 110);
   rect(286, 300, 65, 50);

  // pantaloncitos
  fill('rgb(165,22,22)');
  rect(253, 420, 130, 100, 10);
  fill('rgb(255,255,255)');
  ellipse(295, 465, 20, 20);
  ellipse(338, 465, 20, 20);

  noStroke();
fill(' rgb(247,182,122)');    
  ellipse(315, 271, 167, 89);
 ellipse(278, 206, 78, 158);
  ellipse(353, 206, 78, 158);
    ellipse(312, 239, 78, 78);
  fill(' rgb(0,0,0)');    
    ellipse(317, 257, 45, 12);
    ellipse(280, 195, 30, 80);
    ellipse(353, 195, 30, 80);
    arc(310, 289, 40, 40, 1, PI + QUARTER_PI, CHORD);

    
  //Brazos
  stroke('rgb(0,0,0)');
  strokeWeight(35);
line(230, 359, 267, 343);
    line(230, 359, 220, 465);
  line(409, 359, 367, 343);
    line(410, 359, 420, 465);

   //Manos
  noStroke();
 fill('rgb(218,214,214)');
  ellipse(220, 465, 70, 40);
   fill('rgb(255,255,255)');
  ellipse(220, 488, 90, 50);
   fill('rgb(218,214,214)');
  ellipse(420, 465, 70, 40);
   fill('rgb(255,255,255)');
  ellipse(420, 488, 90, 50);
  
  //Piernas
 fill('rgb(0,0,0)');
 rect(261, 505,39, 200, 0);
      rect(334, 505,39, 200, 0);

   fill('rgb(165,22,22)');
  rect(253, 505,56, 50, 0);
    rect(327, 505,56, 50, 0);

    //Pies
  noStroke();
 fill('#FFC107');
  ellipse(272, 695, 70, 40);
   fill('#FFEB3B');
  ellipse(230, 720, 150, 50);
   fill('#FFC107');
  ellipse(362, 695, 70, 40);
   fill('#FFEB3B');
  ellipse(409, 720, 150, 50);
}
