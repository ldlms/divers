Vue.createApp({
    data() {
        return{
        image:'https://s3.amazonaws.com/medium.cosplay.com/77883/2111288.jpg',
        nom: "DR.Mario",
        age: 45,
        agePlus:0,
        NB:0
    };
    },
    methods: {
        // drMario(){
        //     this.nom =[]
        //     this.nom.push(this.nomImput);
        //     return this.nom;
        // }
        plusDix(){
            return this.age+10;
        },
        nbFetiche(){
            NB = Math.random();
            return NB;
        }
    },

    }).mount('#bookListApp');