let noteA = 85;
let noteB = 46;
let noteC = 24;
let noteD = 84;


function moyenne(A,B){
    let moyenne = (A+B)/2;
    return moyenne;
}

console.log(moyenne(noteA,noteB))


function moyenne2(...number){
    let moyenne2 = 0;
    for(value of number){
        moyenne2 += value
    }
    return moyenne2/number.length
}

console.log(moyenne2(noteA,noteB,noteC,noteD))
