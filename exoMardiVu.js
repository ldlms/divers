// Vue.createApp({
//     data() {
//         return {
//         paraUn: '',
//         paraDe: '',
//         input: '',
//     };
//     },
//     methods: {
//         paraDuo(){
//             this.paraDe = this.input;
//         },
//         alerte(){
//             alert("C'est une alerte");
//         },
//     },
//   }).mount('#monApp');


//   Vue.createApp({
//     data() {
//         return {
//             leNombre: 0,
//             userName:'',
//             reponse:'',
//     };
//     },
//     methods: {
//         numberM(){
//             this.leNombre--;
//         },
//         numberP(){
//             this.leNombre++;
//         },
//     },
//     computed:{
//         useUserName(){
//             console.log("fonction executée");
//             if(this.userName == ''){
//                 this.reponse = "test"
//             }else{
//                 this.reponse = "un autre test"
//             }
//         },
//     }
//     }).mount('#monApp');

Vue.createApp({
    data(){
        return{
            nbMystere:7,
            leNombre:0,
            reponse:'',
        };
    },
    methods:{
        numberUn(){
           this.leNombre++;
        },
        numberPlusCinq(){
            this.leNombre = this.leNombre+5;
        },
        reset(){
            this.leNombre=0;
        },
        affiche(){
            if(this.leNombre==this.nbMystere){
                this.reponse = 'bien joue';
            }else if(this.leNombre < this.nbMystere){
                this.reponse = 'trop bas';
            }else{
                this.reponse = 'trop haut';
            };
        },
    },
    watch:{
        leNombre(value){
            // setInterval(()=>{this.leNombre=0},7000)
            setInterval(this.reset,7000)  
        }
    },
}).mount('#monApp');