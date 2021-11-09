
/*
    ===== Código de TypeScript =====
*/

function sumar(a:number, b:number): number {

    return (a+b);
}

const sumaflecha =(a: number ,b: number): number => {
    return a+b;
}

function multiplicar(numero: number, numero2?: number, base: number = 2): number {
    return numero *base;
}

// const resultado = multiplicar(5,0,10);

// const resul = sumar(10, 20);

// console.log(resultado);

interface PersonajeLOR {
    nombre: String;
    pv: number;
    mostrarhp: () => void;  //definir funcion en una interface
}


function curar(personaje: PersonajeLOR, curarX: number): void {

    personaje.pv += curarX;
    
    console.log( personaje );

}

const nuevoPersonaje: PersonajeLOR = {
    nombre: 'hola',
    pv: 50,
    mostrarhp() {
        console.log('puntos de vida', this.pv)
    }

}

curar(nuevoPersonaje,50);

nuevoPersonaje.mostrarhp();