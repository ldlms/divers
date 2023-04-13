/*const MESSAGE = "%";
let blop = 0;
let trigger = 0;
let soluce = "";
let binaire = ''

for(i=0;i<MESSAGE.length;i++){
    binaire += MESSAGE.charCodeAt(i).toString(2);
}

for(i=0;i<binaire.length;i++){
    trigger = binaire[i];
    if(binaire[i]==binaire[i+1]){
    blop++;
    trigger = binaire[i];
    }else{
        blop++;
        if(trigger == "1"){
            soluce += '0 ' ;
            for(j=blop;j>0;j--){
                soluce += `0`;
                blop = 0;
            }
        }else{
            soluce += `00 `;
            for(j=blop;j>0;j--){
                soluce += `0`;
                blop = 0;
            }
        }
        soluce += ' '
    }
}
soluce = soluce.trim()
console.log(soluce);*/



function tobinaire(MESSAGE){
    let tabt=[];
    for(let i=0;i<MESSAGE.length;i++){
        let char = MESSAGE.charCodeAt(i);
        let tab = decompose(char,2);
        while(tab.length<7){
            tab.unshift(0);
        }
        tabt=tabt.concat(tab);
    }
    return tabt;
}

function decompose(n,base){
    if(n <1){
        return [];
    }
    let digit = n%base;
    let n2 = (n-digit)/base;
    let tab = decompose(n2,base);
    tab.push(digit);
    return tab;
}


let MESSAGE ="C";
let blop = 1;
let soluce="";
let x=0;

let binaire = tobinaire(MESSAGE);
console.log(tobinaire(MESSAGE));
console.log(decompose(67,2));
while(x<binaire.length){
    if(binaire[x]==binaire[x+1]){
        console.log(blop);
        blop++;
    }else{
        if(binaire[x] == "1"){
            soluce +="0 ";
            for(j=blop;j>0;j--){
                soluce += "0";
            }
        }
        if(binaire[x] == "0"){
            soluce +="00 ";
            for(j=blop;j>0;j--){
                soluce +="0";
                
            }
        }
        blop = 1;
        soluce += " ";
    }
    x++;
}

soluce = soluce.trim()
console.log(soluce);