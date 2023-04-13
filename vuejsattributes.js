// const app = Vue.createApp({
//     data() {
//         return {
//         selectCard1: false,
//         selectCard2: false,
//         //! Bonus : si on veut appliquer plusieurs modifications de style, je les range dans un objet
//         styleObject: {
//             color: 'red',
//             fontSize: '13px'
//         }
    
//         };
//     },
//     methods: {
//         selectionCard(uneCard) {
//         if (uneCard === 1) {
//             // this.selectCard1=true;
//             this.selectCard1 = !this.selectCard1;
//         }
//         if (uneCard === 2) {
//             // this.selectCard2=true;
//             this.selectCard2 = !this.selectCard2;
//         }
//         },
//     },
//     });
//     app.mount('#monApp');
// const app = Vue.createApp({
//     data() {
//         return {
//         selectCard1: false,
//         selectCard2: false,
//         };
//     },
//     methods: {
//         selectionCard(uneCard) {
//         if (uneCard === 1) {
//             // this.selectCard1=true;
//             this.selectCard1 = !this.selectCard1;
//         }
//         if (uneCard === 2) {
//             // this.selectCard2=true;
//             this.selectCard2 = !this.selectCard2;
//         }
//         },
//     },
//     });
//       app.mount('#monApp');
// const app = Vue.createApp({
//     data() {
//         return {
//             inputDeux:'',
//             inputUn:'',
//             styleUno:false,
//             styleduo:false,
//         };
//     },
//     methods: {
//         switcharoo(){
//             if(this.inputUn==='myClassHello'){
//                 this.styleUno=true;
//                 this.styleDuo=false;
//             }else if(this.inputUn==='myClassWorld'){
//                 this.styleDuo=true;
//                 this.styleUno=false;
//             }
//         }
//     },
//     });
//     app.mount('#monApp');
const app = Vue.createApp({
    data() {
        return {
        nomClasse: '',
        laCouleur: '',
        visible: true,
        };
    },
    computed: {
        //!Version optimisé en passant par une fonction
        //!Computed pour pas avoir d'interférences avec la ƒ° toggle
        classDynamique() {
        return{
          maClasseHello: this.nomClasse ==='hello',
          maClasseWorld: this.nomClasse ==='world',
          maClasseHidden: !this.visible,
          maClasseVisible: this.visible
        }

        //? première version
        // if (this.nomClasse === 'hello') {
        //     return 'maClasseHello';
        // }
        // if (this.nomClasse === 'world') {
        //     return 'maClasseWorld';
        // }
        // if (this.visible) {
        //     return 'maClasseVisible';
        // }
        // if (!this.visible) {
        //     return 'maClasseHidden';
        // }

        },
        
    },
    methods: {
        affichage() {
        this.visible = !this.visible;
        },
    },
    });
    app.mount('#monApp');