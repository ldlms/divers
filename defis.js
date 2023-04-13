/*let index = [0,"A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
let pantheon = "ARTEMIS ASCLEPIOS ATHENA ATLAS CHARON CHIRON CRONOS DEMETER EOS ERIS EROS GAIA HADES HECATE HEPHAISTOS HERA HERMES HESTIA HYGIE LETO MAIA METIS MNEMOSYNE NYX OCEANOS OURANOS PAN PERSEPHONE POSEIDON RHADAMANTHE SELENE THEMIS THETIS TRITON ZEUS"
let score = 0;
let total = 0;
let reponse = []


function Dieux(x,b){
    this.nom = b;
    this.valeur = compte(x)
}

function hercule(x){
    let tab = x.split(" ");
    for(let i = 0;i<tab.length;i++){
        let dieu = new Dieux(tab[i],tab[i]);
        reponse.unshift(dieu);
    }
    reponse.join('');
    return reponse;
}


function sort(reponse){
    let changed;
    do{
        changed = false;
        for(var i=0; i < reponse.length-1; i++) {
            if(reponse.dieu.valeur[i] > reponse.dieu.valeur[i+1]) {
                let tmp = reponse[i];
                reponse[i] = reponse[i+1];
                reponse[i+1] = tmp;
                changed = true;
            }
        }
    } while(changed);
    return reponse;
}

function compte(x){
    let score = 0;
    let string = x.split("");
    if(x==null){
        alert("ERREUR");
    }
    for(k=0;k<string.length;k++){
        for(j=1;j<index.length;j++){
            if (string[k]==index[j]){
                score = score+j;
            }
        }
    }
    return score
}
deg = "aababbababababa"

console.log(`bleh bleh`)*/

const MESSAGE = "C";

let binaire = MESSAGE.charCodeAt().toString(2);
let blop = 0;
let trigger =0;
let soluce = "";
for(i=0;i<binaire.length;i++){
    trigger = binaire[i];
    blop++
    if(binaire[i]==binaire[i+1]){
    blop = 0;
    blop++;
    trigger = binaire[i];
    }else{
        if(trigger == "1"){
            soluce += '0 ' ;
            for(j=blop;j>0;j--){
                soluce += `0`;
            }
        }else{
            soluce += `00 `;
            for(j=blop;j>0;j--){
                soluce += `0`;
            }
        }
    }
    blop = 0
}

console.log(soluce);