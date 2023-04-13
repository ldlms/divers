/*class Imc{
    constructor(nom,poids,taille){
        this.nom = nom;
        this.poids = poids;
        this.taille = taille;
    }
    calculdimc(){
        return this.poids/this.taille**2;
    }
    display(){
        console.log(this.calculdimc().toFixed(2));
    }
}

let chabal = new Imc("Sébastien Chabal",135, 1.89);


const list = [
    new Imc("Sébastien Chabal",135, 1.70),
    new Imc("Escaladeuse Ultra Svelte", 45, 1.68),
    new Imc("JOJO ", 300, 2),
    new Imc("Gontrand ", 90, 1.75),
    new Imc("Colonel Gran Jean ", 200, 1.75),
    new Imc("JOsiane de la Vega", 99, 1.55),
    ];

    list.forEach(uneCase => uneCase.display());*/

/*class Pme{
    constructor(revenus,fraisFixes,fraisAchat){
        this.revenus = revenus;
        this.fraisFixes = fraisFixes;
        this.fraisAchat = fraisAchat;
    }
    bilan(){
        return this.revenus - ((this.fraisFixes+this.fraisAchat)+(employe1.salaireComplet()+employe2.salaireComplet()+employe3.salaireComplet()));
    }   

}

class Employe{
    constructor(nom,prenom,age,salaire){
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
        this.salaire = salaire;
    }
    salaireAn(){
        return this.salaire*12;
    }
    salaireComplet(){
        return this.salaireAn()*1.9;
    }
}

let employe1 = new Employe('jean','pierre',30,2000);
let employe2 = new Employe('marie','maria',40,3000);
let employe3 = new Employe('pierre','jean-pierre',50,4000);

let carrefour = new Pme(300000,20000,50000);

console.log(carrefour.bilan())*/

class CompteBancaire{
    constructor(nom){
        this.credit = 0
        this.nom = nom;
    }
    crediter(n){
        this.credit += n;
        console.log(`Ajout de ${n} pour ${this.nom}.`)
    }
    decrire(){
        return `Titulaire ${this.nom}: Solde :${this.credit}`;
    }
    retirer(n){
        try {
            if (n>this.credit) throw "error"
            this.credit = this.credit-n;
            console.log(`Retrait de ${n} par ${this.nom}.`)
        } catch (error) {
            console.log(`${this.nom}, retrait de : ${n} refusé avec solde ${this.credit-n}`)  
        }
    } 
    virer(n,compte){
        this.credit = this.credit-n;
        compte.credit += n
        console.log(`Virement de ${n} de ${this.nom} vers ${compte.nom}`)
    }
}

const lesComptes = {
    "Alex" : new CompteBancaire("Alex"),
    "Clovis" : new CompteBancaire("Clovis"),
    "Marco" : new CompteBancaire("Marco"),
}  

for (let element in lesComptes)
lesComptes[element].crediter(1000);
    
lesComptes["Alex"].retirer (100);

lesComptes["Marco"].virer (300, lesComptes["Clovis"]);

lesComptes["Marco"].retirer(300);

lesComptes["Alex"].retirer(1200);

for (let unTruc in lesComptes)
    console.log(lesComptes[unTruc].decrire());