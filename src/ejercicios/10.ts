
/*
    ===== Código de TypeScript =====
*/

function reportableClassDecorator<T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
      reportingURL = "http://www...";
    };
  }
   

@reportableClassDecorator
class Misuperclase {
    public mipropiedad: string = 'ABC123';

    imprimir(){
        console.log('Hola mundo');
    }
}

console.log( Misuperclase );

const miclase = new Misuperclase();
console.log( miclase.mipropiedad );
