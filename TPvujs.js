const app = Vue.createApp({
    data() {
        return {
            input:'',
            mesCourses:[],
            messageErreur:'Pas encore de produits dans la liste',
            token:false,
            messageToggle:'Masquer la liste',
        };
    },
    computed: {
        },
    methods:{
        message(){
            if(this.token===true){
                this.messageToggle = 'Afficher la liste';
            }else{
                this.messageToggle = 'Masquer la liste';
            }
        },
        ajout(){
            this.mesCourses.push(this.input);
            this.input = '';
        },
        supprimer(i){
            this.mesCourses.splice(i,1);
        },
        afficher(i){
            console.log(`${i}`);
        },
        toggle(){
            this.token = !this.token;
        }
    }
        
    });app.mount('#monApp')