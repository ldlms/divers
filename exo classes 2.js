let distance = 0;
let distanceMetre = 0;
let i = 1;

function hesper(n){
    if(n!=1){
        if(n%2 == 0){
            distance += i;
            n = n/2;
            i++;
        }else{
            n = n*3+1;
        }
        hesper(n)
    }
    console.log(distance);
}

hesper(6);
