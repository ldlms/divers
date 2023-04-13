const app = Vue.createApp({
    data() {
        return {
            input:'',
            mesFilm:[],
            messageErreur:'Pas encore de film dans votre liste'
        };
    },
    computed: {
        },
    methods:{
        ajout(){
            this.mesFilm.push(this.input);
            this.input = '';
        },
        supprimer(i){
            this.mesFilm.splice(i,1);
        },
        afficher(i){
            console.log(`${i}`);
        },
    }
        
    });app.mount('#monApp')

    