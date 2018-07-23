
        let w = 75  
        function setup(){
            background("green")
            createCanvas(900, 900);
            let x = 0
            // coordinates
            let y = 0
            rect(x ,y ,w ,w )
            // corrdinates 
            //lenght
            for(i =1; i<= 100; i++){
                rect(x, y, w, w)
                if (i%10 == 0){
                    y+= w
                    x = 0
                }else{
                    x+= w
                }
        }
}
        let ships = [
                    [0,1,2,3,4,5,6,7,8,9],
                    [0,1,2,3,4,5,6,7,8,9],
                    [0,1,2,3,4,5,6,7,8,9],
                    [0,1,2,3,4,5,6,7,8,9],
                    [0,1,2,3,4,5,6,7,8,9],
                    [0,1,2,3,4,5,6,7,8,9],
                    [0,1,2,3,4,5,6,7,8,9],
                    [0,1,2,3,4,5,6,7,8,9],
                    [0,1,2,3,4,5,6,7,8,9],
                    [0,1,2,3,4,5,6,7,8,9]
                    ]
         
                    
        function mousePressed(){
            let x = floor(mouseX/ w)
            let y = floor(mouseY/ w)
            let hitormiss = ships [x] [y]
            console.log(x,y)
            
            if (hitormiss == 5){
                fill("green");
                rect(x,y,75,75)
            }else{
                fill("red");
              rect(x,y,75,75);
            }
        }