Vue.createApp({
    data(){
        return {
            leNombre : 0
        };
    },
    methods: {
        numberP(){
            this.leNombre++;
        },
        numberM(){
            this.leNombre--;
        },
    }
}).mount('#monApp');