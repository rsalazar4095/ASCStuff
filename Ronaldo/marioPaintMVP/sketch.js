let col
function setup(){
    col = color (255, 255, 255)
    createCanvas(500,500);
    background(176);
    fill('red');
    rect(20,20, 50, 50);
    fill('green');
    rect(100,20, 50, 50);
    fill('blue');
    rect(180,20, 50, 50);
    fill('white');
    rect(420,420, 60, 60);
 }
let shape = 0;
let change;
function mouseDragged(){
   fill(col);
   if (shape < 1){
    ellipse(mouseX, mouseY,random(10,20),random(10,20));
    shape = random(0,3);
   }
    else if (shape >= 1 && shape < 2){
    rect(mouseX, mouseY,random(10,20),random(10,20));
    shape = random(0,3); 
   }
   else if( shape >= 2){
    change = random(10,20);
    triangle(mouseX - change,mouseY + change, mouseX, mouseY - change, mouseX + change, mouseY + change,mouseY);
    shape =random(0,3);

   }

}
function mouseClicked(){
    rect(20,20, 50, 50);
        if (rect === 0) {
          rect = 255;
        } else {
          rect = 0;
        }
    
}