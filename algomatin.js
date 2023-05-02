const valuesJ = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'R', 'D', 'V'] ;


const valuesB = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'R', 'D', 'V'] ;


let piocheB = 0;
let piocheJ = 0;

let pointJ = 0;
let pointB = 0;


for(j=0;j<10;j++){
let scoreB = 0;
let scoreJ = 0;
for(i=0;i<2;i++){
let piocheB = valuesB[Math.floor(Math.random()*13)]
console.log(Math.floor(Math.random()*13));
console.log(`pioche de la banque : ${piocheB}`);
if(piocheB === 'R'){
scoreB = scoreB+10;
}else if(piocheB == 'D'){
scoreB = scoreB+10;    
}else if(piocheB == 'V'){
scoreB = scoreB+10;
}else if(piocheB == 1)
scoreB = scoreB+11;
else{
scoreB = scoreB+piocheB;
}
}
for(i=0;i<2;i++){
let piocheJ = valuesJ[Math.round(Math.random()*13)]
console.log(Math.floor(Math.random()*13));
console.log(`pioche du joueur : ${piocheJ}`);
if(piocheJ === 'R'){
scoreJ = scoreJ+10;
}else if(piocheJ == 'D'){
scoreJ = scoreJ+10;    
}else if(piocheJ == 'V'){
scoreJ = scoreJ+10;
}else if(piocheB == 1)
scoreJ = scoreJ+11;
else{
scoreJ = scoreJ+piocheJ;
}
}
console.log(`score joueur : ${scoreJ} et score banque : ${scoreB} `)
if(scoreB == 21){
    console.log(`la banque fait 21 et gagne 2 points`)
    pointB = pointB+2;
}else if(scoreJ == 21){
    console.log('le joueur fait 21 et gagne deux points')
    pointJ = pointJ+2;
}else if(scoreJ>scoreB){
    console.log(`le joueur gagne ce round`)
    pointJ = pointJ+2;
}else if(scoreJ<scoreB){
    console.log('la banque gagne ce round')
    pointB = pointB+2;
}else{
    console.log(`egalité`)
    pointB++;
    pointJ++;
}
}
if(pointB>pointJ){
    console.log(`la banque gagne la partie ! avec ${pointB} points contre ${pointJ} pour le joueur`);
}else if(pointB === pointJ){
    console.log(`egalité avec ${pointB}`);
}else{
    console.log(`le joueur gagne la partie ! avec ${pointJ} points contre ${pointB} pour la banque`)
}





