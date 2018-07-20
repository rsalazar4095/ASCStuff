function setup(){
    createCanvas(600, 600);
    fill(z);
    rect(0,0,600,600);
}
let z = "blue"
function mouseClicked(){
    if(z == "blue" ){
        z = "red"
       fill("red")
       rect(0,0,600,600);
    }else if (z == "red"){
        z = "blue"
        fill("blue");
        rect(0,0,600,600);
    }
}