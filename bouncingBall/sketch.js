function setup(){
    createCanvas(600, 600);
}
let x = 351 //Corrdinates
let y = 31 //Corrdinates
let xDirec = 10
let yDirec = 10
function draw(){
    background(100);
    ellipse(x, y, 20);
    if (x > 590){
        xDirec = -10
    }
    if (x < 10){
        xDirec = 10
    }
    if (y < 10){
        yDirec = 10;
    }
    if (y > 590){
        yDirec = -10
    }
    y = y + yDirec
    x = x + xDirec
}
