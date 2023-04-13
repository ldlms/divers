//La variable de config pour firebase
const firebaseConfig = {
    apiKey: "AIzaSyCLdgQzaTEEASIqOCa3CPRYW2orKTZ0bqk",
    authDomain: "test-2f2f4.firebaseapp.com",
    databaseURL: "https://test-2f2f4-default-rtdb.firebaseio.com",
    projectId: "test-2f2f4",
    storageBucket: "test-2f2f4.appspot.com",
    messagingSenderId: "855225469749",
    appId: "1:855225469749:web:6c08bb45b44ccded131a7c",
    measurementId: "G-XJTL2SHPEC"
  };
/* on  donc ici la configuration de la database, conservee dans une constante*/

    firebase.initializeApp(firebaseConfig); /*on initialise la BDD via une fonction "firebase.initializeapp"*/
    const dbRef = firebase.database().ref(); /*on stocke une reference aux données de la base de donnée pour pouvoir les lire ou les re-ecrire*/
    const usersRef = dbRef.child('users'); /*dans cette référence, on cible les élements child "user" de la database*/
    const addUserBtnUI = document.querySelector('#add-user-btn'); /*ciblage d'un bouton et stockage dans une variable avec un query selector*/
    addUserBtnUI.addEventListener('click', addUserBtnClicked); /*eventlistener sur ce bouton, qui permettra d'ajouter des utilisateurs*/

    readUserData();


    function readUserData(){
        const userListUI = document.getElementById("user-list"); /*stockage d'un élément vide dans la page html*/
        usersRef.on("value", snap =>{ /* Donc on a ici .on qui fonctionne un peu comme un eventlistener sur firebase, et qui cible les users, et il prend "value" donc quand on a une value dans les users, et "snap" qui est un instantané de la base à l'instant de l'event"*/
            userListUI.innerHTML = ""; /*on assigne une string vide à l'élément vide*/
            snap.forEach(childSnap => { /*on fait une boucle pour chaque instantané qui se fait a chaque fois qu'une valeur est detectée, childsnap est l'élément token de chaque occurence*/
                let key = childSnap.key; /* on stocke dans key, la key de l'instant ou une valeur est detectée dans "users" dans la database*/
                let value = childSnap.val();/* on fait pareil avec la valeur que on stocke dans une variable valeur*/
                let $li = document.createElement('li'); /*on crée un élément <li>, le $ est une convention*/
                let editIconUI = document.createElement("span"); /* On crée un élément <span> pour insérer une icone d'un nouveau bouton*/
                editIconUI.class = "edit-user"; /* on donne une classe à cet élément*/
                editIconUI.innerHTML = " ✏️"; /*On met l'icone dans l'HTML*/
                editIconUI.setAttribute("userid", key);/* On attribue a l'élément edit, un userid qui prend la clef de l'élément sur lequel il apparait*/
                editIconUI.addEventListener("click", editButtonClicked)/*et on lui ajoute un listener*/
                let deleteIconUI = document.createElement("span");/*on fait pareil avec l'icone de supp*/
                deleteIconUI.class = "delete-user";/*pareil on lui donne une classe*/
                deleteIconUI.innerHTML = " ❌";/* et l'icone*/
                deleteIconUI.setAttribute("userid", key);
                deleteIconUI.addEventListener("click", deleteButtonClicked);/*On met l'event listener sur le span*/
                $li.innerText = value.name;/* dans l'element l'HTML, de l'element $li, on met le nom de la valeur snapé à l'instant T*/
                $li.append(editIconUI); /*on append l'icone edit a chaque instance de snap, qui crée elle même une <li>*/
                $li.append(deleteIconUI);/*on append l'icone delete*/
                $li.setAttribute('user-key', key); /* on donne l'attribut "user-key", et on lui attribut la key de l'user présent dans cette instance, ce qui nous permettra de le récupérer avec aisance plus tard*/
                $li.addEventListener("click", userClicked);/*on met un listener sur $li*/
                userListUI.append($li);/*on met la <li> dans l'élément "user-list" qu'on a vidé avant d'entrer dans la boucle*/
            });
        })
        
    };

function editButtonClicked(event){
    let editModule = document.getElementById("edit-user-module");
    if(getComputedStyle(editModule).display != "none"){
        editModule.style.display = "none";
    } else {
        editModule.style.display = "block";
    }
    document.querySelector(".edit-userid").value = event.target.getAttribute("userid");
    let editID = document.querySelector(".edit-userid").value;
    const userRef = dbRef.child('users/' + editID);
    let editUserInputsUI = document.getElementsByClassName("edit-user-input");
    userRef.on("value",snap=>{
        for(let i=0; i<editUserInputsUI.length;i++){
            let key = editUserInputsUI[i].getAttribute("data-key");
            editUserInputsUI[i].value = snap.val()[key];
        }
    })
    let savebtn = document.getElementById("edit-user-btn");
    savebtn.addEventListener("click",saveUserBtnClicked);
}

function saveUserBtnClicked(){
    let editModule = document.getElementById("edit-user-module");
    let userID = document.querySelector(".edit-userid").value;
    let userRef = dbRef.child('users/' + userID);
    let editedUserObject = {};
    let editUserInputsUI = document.querySelectorAll(".edit-user-input");
    editUserInputsUI.forEach(textField=>{
        let key = textField.getAttribute("data-key");
        editedUserObject[key] = textField.value; 
    })
    userRef.update(editedUserObject);
    editModule.style.display = "none";
}

function deleteButtonClicked(event) {
    console.log(event);
    let userID = event.target.getAttribute("userid");/* Grace au setAttribute(userid) mis dans ReadUser, on détecte la key associée au symbole crois(a son span), qui correspond a l'user en question*/
    const userRef = dbRef.child('users/' + userID);/*on attribut à un utilisateur en particulier (celui cliqué), une constante userRef, comme avec UserClicked*/
    userRef.remove();/* On utilise le remove sur l'utilisateur ainsi ciblé*/
}

function addUserBtnClicked(){/* ici pas besoin d'event, car on n'a pas besoin de cibler une target en particulier*/
    //* Ensuite on Récupère les 3 inputs (pour renseigner un nom, un age, un mail)
    const addUserInputsUI = document.getElementsByClassName('user-input');/*on récupére dans une variable le contenu des forms utilisés pour récupérer les infos du nouvel utilisateur*/
    console.log(addUserInputsUI);
    let newUser = {};/*on crée un objet vide qui contiendra les infos de l'utilisateur*/
    for(let i=0; i<addUserInputsUI.length;i++){/*Une boucle...qui fait la longeur du formulaire*/
    let key = addUserInputsUI[i].getAttribute('data-key');/*on attribut chaque key du formulaire a une variable key*/  
    let value = addUserInputsUI[i].value;/*pareil pour la valeur*/
    console.log(`
    Les Key :${key}
    Les value:${value}`);/*un console log*/
    newUser[key] = value; /*on rempli l'objet vide avec chaque clé et sa value associée*/
    }
    usersRef.push(newUser);/*une fois l'utilisateur rempli des divers champs, on le push dans la database au niveau du noeud User*/
    console.log(`YOOO on a ajouté ${newUser.name} dans la BDD, il a ${newUser.age} ans`)
    document.getElementById('leFormulaireAjout').reset();/* et pour finir on reset les champs du formulaire*/
}

function userClicked(event){/*ici on aura besoin d'un argument "event" qui représente le click*/
    let userID = event.target.getAttribute('user-key');/*ici, on récupérer dans une variable, l'attribut key de ce sur quoi on a cliqué, vu que on lui a donné cet attribut plus haut*/
    const userRef = dbRef.child('users/' + userID);/*on cree userRef (singulier), et on met l'élement child sur lequel on a cliqué*/
    console.log(userRef);
    const userDetailUI = document.querySelector('#user-detail');/*on récupére la div HTML avec la classe "user-detail"*/
    userRef.on('value', snap=>{/*on met une ecoute sur les profils individuels des users, et qui se déclenche avec chaque valeur détectée*/
        userDetailUI.innerHTML="";/*on vide la div recupérée auparavant*/
        snap.forEach(childSnap=>{/*pour chaque instance de valeur detectée....*/
            let $p = document.createElement('p');/*on crée un paragraphe*/
            $p.innerHTML = childSnap.key +'-'+childSnap.val();/* qu'on rempli avec la key suivie de la valeur*/
            userDetailUI.append($p);/*et qu'on append*/
        })
    })
}
