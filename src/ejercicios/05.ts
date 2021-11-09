
/*
    ===== Código de TypeScript =====
*/

interface Detalles {
    autor: string;
    ano: number;
}

interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: String;
    detalles: Detalles;
}

const reproductor: Reproductor = {
    volumen: 50,
    segundo: 36,
    cancion: 'love me',
    detalles: {
        autor: 'yo',
        ano: 1650
    }
}

// console.log('el volumen es: ', reproductor.volumen)
// console.log('el segundo es: ', reproductor.segundo)
// console.log('la cancion es: ', reproductor.cancion)
// console.log('el autor es: ', reproductor.detalles.autor)
// console.log('el año es: ', reproductor.detalles.ano)

//desestructuracion de objetos

const autor = 'fulano';

const { volumen,segundo,cancion,detalles } = reproductor;
const {autor: autorDetalle, ano} = detalles;


console.log('el volumen es: ', volumen)
console.log('el segundo es: ', segundo)
console.log('la cancion es: ', cancion)
console.log('el autor es: ', autorDetalle)
console.log('el año es: ', ano)


const dbz: string[] = ['goku', 'vegeta', 'gohan'];

// console.log('personaje1:',dbz[0])
// console.log('personaje2:',dbz[1])
// console.log('personaje3:',dbz[2])

//destructuracion arreglos, OJO con los corchetes, son diferentes


// const[ p1,p2,p3 ] = dbz;

// console.log('personaje1:',p1)
// console.log('personaje2:',p2)
// console.log('personaje3:',p3)

const[ , ,p3 ] = dbz;

console.log('personaje3:',p3)