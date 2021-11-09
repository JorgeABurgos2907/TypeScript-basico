
/*
    ===== Código de TypeScript =====
*/

interface Direccion {
    calle: string;
    pais: string;
    ciudad: string;
}

interface SuperHeroe {
    nombre: string;
    edad: number;
    direccion: Direccion;
    mostrarDireccion: () => string;

}


const superHeroe: SuperHeroe = {
    nombre: 'spiderman',
    edad: 30,
    direccion: {
        calle: 'san gerardo',
        pais: 'colombia',
        ciudad: 'bucara'
    },
    mostrarDireccion(){
        return this.nombre + ', ' + this.direccion.ciudad+ ', '+ this.direccion.pais;
    }
}

const direccion = superHeroe.mostrarDireccion();

console.log( direccion );