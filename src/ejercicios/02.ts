
/*
    ===== Código de TypeScript =====
*/
let habilidades1 = ['hola','hola','haola'];

let habilidades2 = ['hola','hola','haola',100];

let habilidades: string[] = ['hola','hola','haola'];

// habilidades.push('true');

interface Personaje{
    nombre:String;
    hp:number;
    habilidades: string[]
    puebloNatal?: String; //opcional con ?
}

const personaje: Personaje = {
    nombre: 'holis',
    hp: 100,
    habilidades: ['bash','counter','hola']
}

personaje.puebloNatal = 'batman';

console.table( personaje );