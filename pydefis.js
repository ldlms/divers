/*donnee = [25, 31, 43, 12, 12, 43, 31, 35, 54, 23, 12, 23, 12, 21, 45, 43, 41, 45, 43, 45, 35, 15, 53, 41, 51, 45, 12, 31, 14, 45, 12, 24, 32, 24, 21, 21, 51, 31, 53, 25, 12, 43, 35, 13, 23, 54, 34, 32, 23, 15, 23, 42, 41, 43, 13, 14, 52, 14, 53, 41, 14, 43, 35, 42, 32, 21, 51, 52, 24, 51, 12, 12, 52, 34, 35, 54, 21, 41, 32, 32, 34, 12, 41, 34, 43, 41, 35, 12, 32, 51, 34, 15, 25, 43, 45, 45, 45, 52, 31, 43];
code = [0,3,4,1,2,5];



function permuboucle(arrayd,arrayc){
    for(valeur of arrayd){
        x = valeur%10;
        y = (valeur-x)/10;
        arrayc = permu(arrayc,x,y);
    }
    arrayc.shift();
    return arrayc;
}



function permu(array,a,b){
    let tmp = 0;
    tmp = array[a];
    array[a] = array[b];
    array[b] = tmp;
    return array;
}

console.log(permuboucle(donnee,code));*/

/*let queuelorior = "NNEESOOESEENNEEOOSEOSEEENNESENSSENNEESSOOEEENNEEOOSEOSEEENEENOOEESOOSEEEEEEENONSESENNSSENNEESSOOEEENNSSEENNSSEEENOONEEOOSEESEEEENNEESSOOEEENNEESOOEESENNESENSSEEENOONEEOOSEESEEEENNSSEEENNEESOOEESEEEENNEEOOSEOSEEENNEESSOOEEENNEESOOESEENNEEOOSEOSEEEENNOEEOSSEEEEENNEESOOEESOOEEENNEESOOESEENNSSEENNSSENNESNESSENNEEOOSEOSEEENNSSEENNSSEEENOONEEOOSEESENNEEOOSEOSEEEEEENNEESSOOEEENNEEOOSEOSEEENNESNESSENNEESOOEESENNSSENNESENSS"*/

/*function trace(x){
    let dess = x.split('')
    for(let i=0;i<dess.length;i++){
        if(dess[i]=="N"){
            faceUp();
            forward(10);
        }else if(dess[i]=="E"){
            faceRight();
            forward(10);
        }else if(dess[i]=="S"){
            faceDown();
            forward(10);
        }else{
            faceLeft();
            forward(10);
        }
    }
}*/


/*let objets = [-98, -66, 74, -85, 97, 38, 34, -14, 29, -58, 21, 2, 1, 35, 32, 50, -52, 3, -73, -13, -99, 86, -71, -86, 50, 8, -78, 89, -41, 77, 34, -59, -57, 49, 43, 100, 25, 14, -80, -17, 42, -73, -81, 19, -77, -85, -100, 3, 17, 72, 9, 34, 11, 1, 60, 96, 40, 54, 76, -77, -52, 19, -54, -92, -92, 27, 48, -43, 59, 94, 72, -17, -88, 18, 2, -77, 86, 66, -67, 51, 14, 79, -58, -1, -21, 76, 60, 51, -26, -91, 32, 79, 36, 11, -9, 34, -95, -92, -89, -76, 55, 69, -21, -1, 51, 85, 28, 15, -70, 15, 4, -72, 70, -86, 57, -22, -53, -64, 9, 63, 26, 30, -71, -67, -94, 9, 53, -80, 55, -52, -30, 55, 11, 99, 51, -48, 46, -56, -64, 50, -38, 34, 64, 71, -92, 79, -53, -2, 88, -8, 96, 14, 14, -89, -90, -19, -26, 17, 97, 70, 62, 83, 28, 96, -55, -72, -37, 20, -12, -49, 65, 28, -11, -40, 61, -67, 7, -32, 13, -81, -53, -92, 43, -92, -3, 1, -15, -72, 64, -53, -16, 90, -47, -91, 68, 78, -67, 15, -68, -92, -97, -18, -6, 10, -37, -47, 60, -17, -2, -51, -46, 65, 81, 46, 33, -15, 82, 96, 28, -21, -41, -87, -52, -68, 55, -75, 57, -94, -16, -1, -28, 67, 35, 81, 78, -47, 93, -1, 52, -53, 14, 2, -15, 14, -82, 43, -48, -53, 52, -7, -27, -89, 80, 22, 90, -29, -53, -22, -42, 35, -9, 36, 29, -85, 19, -20, 33, -93, 50, 36, -37, -28, -94, -61, -32, -53, -30, -97, -4, -100, -88, -44, 68, 29, -2, 53, -62, -81, -89, 74, 80, 80, 88, -13, -90, 15, 1, -45, 3, 4, 81, 55, -94, -91, -62, -60, -52, 45, -52, 77, 10, -63, 43, -36, -90, 58, 26, -76, -2, -76, -51, 60, 64, 5, 32, 14, 22, 1, -80, -52, -33, 39, 74, -60, 32, 42, -83, -62, 0, -43, -61, 77, -96, -63, -60, 92, 68, -53, -53, 5, 39, -4, 51, 72, -23, 86, 31, 70, 77, 38, -51, 25, -51, 33, -94, -17, 20, -47, 93, 60, 61, 80, -54, -54, -88, -75, 34, 11, 53, 7, -2, 2, -55, -78, 23, -78, -31, -7, 10, 85, 41, 20, -93, -7, -31, 55, -62, -54, -35, -66, -70, -98, -13, 98, -15, 70, 78, 21, -87, -79, -67, 22, 89, 84, -49, 96, 63, 94, 74, 46, 82, -34, 73, 42, 70, 26, -2, 68, -48, -63, -86, 55, 42, 16, -32, -98, 14, 70, -68, -88, -21, 75, 45, 18, 10, 71, 93, 99, -58, 42, 14];


function Psy(array,value){
    let i = 0;
    while(value>0){
        if(value>=Math.abs(array[i])){
            value--
        }
        i++
    }
    return i;
}

console.log(Psy(objets,78))*/

/*let hydre = 8188;
let coupdepee = 0;

function hercule(number){
    number = number/2;
    coupdepee++;
    if(number == 1){
        coupdepee++;
        return coupdepee
    }else if(number%2 !== 0){
        number = number*3+1
        return hercule(number);
    }else{
        return hercule(number);
    }
}

console.log(hercule(hydre));*/


/*let code = "←↓↓↓↑←←AB←↓BBA→→↓↑↓B→→→←↓B↑←→←←A→→↑B→←→↑↓AA↓↓B→→↑↓→↑→A→→A↓↓↓↑←BA←B→→→←AAAA↑←↓↓↓A↓↑→B→→←↓BA→→↑←BA→A→←↑←AB→→→↑←→↑↑→↑↓↑↓↓A→→←↑↓←↓BA→→ABBA←A→→←A↓↑→←↓↑↓BBA←A→→→→←→↓↓→←→↑→→BA↓↑→→←A↓B↑←↑B→BA↓↓B→→→←↓B→→↑↓→←←↓←↓BA↓↑→→ABBA←A→→←A↓↓↓BA↓↓↓↓B↑↑BA←A←B→→→←↑↑↑←↓←←A→→→←↑B↓↓→↑↑←→→↓↑BA↓A↓B→→↓↑BB↓↑BA→→→←↓B↑→→→→←←→→↑↑↓BA←A→→→→↓↑BA↓A↓↑→←A↓↓B←↓→←→↑↑←BA←A←B→→↓↑↓B→→BA↓A↓↑↑←BA↑←→←←A→→BA↓AAA→↑↓A→→AB→←↓A←A→→←↓→←→→↑↓→←←ABA→→ABBA←A→→↑↓→←A↓↓↑→B↑←→↑→←↓A←A→→↑↑BA↓B↑↑←↓→BBA→→ABBA→→↑←↓↓↑↓↓↓↓↑←A→→↑↓→↑↑↑↓←ABBA←A↓→→→↑↑↓B→↑←A←B→→↓↑↓B→→AB→BA↓↓↓↓B↑B↑←→↑↑←→←←A→→←↓BA→→A↓BA↑←↑BBA→←↓B←B→→B←↓BB→→↑←↓→→↓↑BA→→AA→←↓BAB↑←→←→→AB→B↓↑↑←↓B→↑↑←BA↓→→→BA↓↑→→↓ABA→→↓↑B→→←↑B→↑←ABA→→↑↑→←←A→→ABBA→→A↓↓↓←→←→BA↓AA↓BA↑←→→A←→→AB→BA↓←←→↑AAAA↑←BA↑←→→A↓BA→→←→BA←A←A→←→ABA→→A←→→←↓→←→→←→→←→↑↓A→→BA↓A→→↑↑→←↑←↓↑→←↓A↓↑→→ABBA→→←↓→←→→AA→↑↓A←B→→A↓→←↑←→→←→↓↓↓A→→↓↓↑↓↑ABAA↓↓↑→↑AA→→BA←A↓↑→→ABBA→→↓↑BA→→AB→BA↓↓↓↓B↑←→←→ABA↑←→→ABB→→←→A→↑↑←→→ABBA→→←↓→←→→←A↓↓↑←↓↑BA↓→";
let d = {"←←" : "h", "←↑" : "!", "←→" : "m", "←↓" : "l", "←A" : "s", "←B" : ",", "↑←" : "r", "↑↑" : "p", "↑→" : "x", "↑↓" : "b" , "↑A" : "j", "↑B" : "v" , "→←" : "a", "→↑" : "i", "→→" : "" , "→↓" : "w", "→A" : "g" , "→B" : "é", "↓←" : "è", "↓↑" : "t","↓→" : ".", "↓↓" : "o", "↓A" : "n", "↓B" : "u", "A←" : "à", "A↑" : "?", "A→" : "y", "A↓" : "c", "AA" : "f","AB" : "d", "B←" : "q", "B↑" : "k", "B→" : "'", "B↓" : "z", "BA" : "e", "BB" : "ê"};

let decode = "";

function konami(code,d){
    for(i=0;i<code.length;i+=2){
        let key = code[i]+code[i+1];
        decode += d[key];       
    }
    return decode;
}

console.log(konami(code,d));*/
let blanc = 1;

function hercule(blanc,roux,noir){
    while(total<1000){
        for(noir=3;noir>roux;noir++){
            for(roux=2;roux>blanc;roux++){
                blanc++;
            }
        }
    }
    let total = roux+blanc+noir;
}

console.log(hercule(blanc,roux,noir));
