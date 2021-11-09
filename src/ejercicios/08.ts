
/*
    ===== Código de TypeScript =====
*/

//FORMA REGULAR

// class Heroe {
//     alterEgo: string;
//     edad: number;
//     nombreReal: string;

//     constructor( alterEgo: string, edad:number ){
//         console.log('hey!!');
//         this.alterEgo = alterEgo;
//         this.edad = edad;
//     }
// }


// NUEVA FORMA CON MENOS CODIGO

class PersonaNormal {

    constructor(
        public nombre: string, 
        public direcccion?: string){

    }
}

class Heroe extends PersonaNormal {
    
    constructor( 
        public alterEgo: string,
        public edad?: number,
        public nombreReal?: string ){
        super(nombreReal);
    }
}

const ironamn = new Heroe('Ironman',45,'tony');

console.log( ironamn );

