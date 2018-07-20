function randomnum(num){
    num = process.argv[2];
    const x = Math.random(); //random decimal between o and 1[0,1)
    const temp = x * num;
    const ans = Math.floor(temp);
    console.log(ans);
}
randomnum();

function rand(){
    const decimal = Math.random(); // Decimal bewteen 0-1 
    const times10 = decimal * 10; // Get number between 0-10
    const final = Math.floor(times10);
    console.log(final);
}

rand();