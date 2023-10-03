/* cuando trabajamos con objetos debo tener en cuenta que en un objeto se construye teniendo encuenta una clase*/
// el contructor crea la clase osea la estructura

class Automovil{
    constructor(marca,modelo,edad){

        this.marca = marca;
        this.modelo = modelo;
        this.edad = edad;

    }
}

let auto1= new Automovil("toyota", "TXL");

alert(auto1.marca+ " "+auto1.modelo);


inputBusqueda.addEvenListener