           
        function setup(){
            createCanvas(900, 900);
            fill("blue");
            rect(0,0, 100, 100);
             let w = 75
            let x = 0 
            // coordinates
            let y = 0
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
        let ships = [[0,0,1,0,0,0,0,0,0,0],
             [0,0,1,0,0,0,0,0,0,0],
             [0,0,0,0,0,0,0,0,0,0],
             [0,0,0,0,0,0,0,0,0,0],
             [0,0,0,0,0,0,0,0,0,0],
             [0,0,0,0,0,0,0,0,1,0],
             [0,0,0,0,0,0,0,0,1,0],
             [0,0,0,0,0,0,0,0,1,0],
             [0,0,0,0,0,0,0,0,1,0],
             [0,0,0,0,0,0,0,0,0,0]]
             
                    
                function mouseClicked(){
                     let x = floor(mouseX/ w)
                     let y = floor(mouseY/ w)

                    let hitormiss = ships [x][y]
                    if (hitormiss == 0){
                    fill("green")
                   
                     } else{
                    fill("red")
                    
                       }

                    }
