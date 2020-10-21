function imprimirConsola (ConstructorClase:Function){
    console.log(ConstructorClase);
}
@imprimirConsola
//el @ es el decorador
export class Xmen{
    constructor(
        public nombre:string,
        public clave:string
    ){

    }
    imprmir(){
        console.log(`${this.nombre} - ${this.clave}`);
    }

}