const firebaseConfig = {
    apiKey: "AIzaSyCLdgQzaTEEASIqOCa3CPRYW2orKTZ0bqk",
    authDomain: "test-2f2f4.firebaseapp.com",
    projectId: "test-2f2f4",
    storageBucket: "test-2f2f4.appspot.com",
    messagingSenderId: "855225469749",
    appId: "1:855225469749:web:6c08bb45b44ccded131a7c",
    measurementId: "G-XJTL2SHPEC"
  };
  firebase.initializeApp(firebaseConfig);
  //refernce à la BDD//
  const dbRef = firebase.database().ref();
  //reference au noeud/table "user" dans notre BDD//
  const usersRef = dbRef.child('users');
  const bouton = document.getElementById('add-user-btn');
  let formulaire = document.getElementById('leFormulaireAjout');
  bouton.addEventListener("click",addbtnClicked);

  function readUserData(){
    const userListUI = document.getElementById('user-list');
    //*Comme un addEventListener, sur notre BDD on ecoute des changements de "value" 
    //* et quand ya des changement on execute une fonction.
    usersRef.on('value', snap =>{
        userListUI.innerHTML = '';
        snap.forEach(childSnap=>{
            //* Key va stocker les ID
            let key = childSnap.key;
            console.log('la key : ', key);
            //* value va stocker la valeur associée à la Key 
            let value = childSnap.val();
            console.log('la valeur : ', value);
            //*a la lecture de notre BDD pour chaque clé-valeur on créer une <li></li>
            let $li = document.createElement('li');
            //*On rempli la <li></li> avec le name 
            let deleteconUI = document.createElement('span');
            deleteconUI.class = 'delete-user';
            deleteconUI.innerText = "❌"
            deleteconUI.setAttribute('userid',key);
            deleteconUI.addEventListener("click",deleteButtonClicked)
            $li.innerHTML = value.name;
            //*On place un attribut avec l'id sur chaque 
            $li.setAttribute('user-key', key);
            $li.addEventListener("click",userClicked)
            $li.append(deleteconUI);
            userListUI.append($li);
        })
    })
}
function userClicked(event){
  let userID = event.target.getAttribute("user-key");
  let userRef = dbRef.child('users/' + userID);
  let userDetailUI = document.getElementById('user-detail');
  userRef.on('value',snap=>{
    userDetailUI.innerHTML = '';
    snap.forEach(childSnap=>{
    let $p = document.createElement('p');
    $p.innerHTML = `${childSnap.key}, ${childSnap.val()}`;
    userDetailUI.append($p);

    })
  })
}

function addbtnClicked(){
  const addUserImputsUI = document.getElementsByClassName('user-input')
  let newUser = {}
  for(i=0;i<addUserImputsUI.length;i++){
    let key = addUserImputsUI[i].getAttribute('data-key');
    let value = addUserImputsUI[i].value;
    console.log(`
    Les key : ${key}
    Les value : ${value}`);
    newUser[key] = value;
  }
  usersRef.push(newUser);
  console.log(`Nous avons ajouté ${newUser.name}, il a ${newUser.age}`);
  formulaire.reset();
}
function deleteButtonClicked(event){
  let userID =event.target.getAttribute('userid');
  const userRef = dbRef.child('users/' + userID);
  console.log(`ADIOS ${event.path[1].innerText}`);
  userRef.remove();
}
readUserData();