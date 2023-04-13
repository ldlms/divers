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
        console.log(`Titulaire ${this.nom}: Solde :${this.credit}`);
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