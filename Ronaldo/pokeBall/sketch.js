function setup(){
    //intial setup
    createCanvas(300,300);
    background(225);
    strokeWeight(4); //thickness
    ellipse(150,150, 225, 225);
    fill('red'); //color
    //top
    arc( 150, 150, 225, 225, 3.15 , 0);
    //the outside of the center
    ellipseMode(RADIUS);
    fill("white"); 
    ellipse(150, 150, 30, 30); 
    //the inside of the center
    ellipseMode(CENTER); 
    fill(0); 
    ellipse(150, 150, 20, 20);
    //left screen
    line(40,150 ,120 ,150);
    //right screen
    line(180, 150, 260,150);
  

}