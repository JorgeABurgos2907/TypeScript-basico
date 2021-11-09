
/*
    ===== Código de TypeScript =====
*/

interface Pasajero {
    nombre: string;
    hijos?: string[    ]
}

const pasajero1: Pasajero = {
    nombre: 'Fernando'
}

const pasajero2: Pasajero = {
    nombre: 'Melisa',
    hijos: ['nata','alberto']
}

function imprimeHijos ( pasajero: Pasajero): void {
    const cuantoHijos = pasajero.hijos?.length || 0;

    console.log( cuantoHijos);
}

imprimeHijos( pasajero2 );
imprimeHijos( pasajero1 );