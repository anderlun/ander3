/* cuando trabajamos con objetos debo tener en cuenta que en un objeto se construye teniendo encuenta una clase*/
// el contructor crea la clase osea la estructura
let inputBusqueda = document.getElementById
    ("inputBusqueda");
let mainContent = document.getElementById("mainContent");

class Automovil {
    constructor(marca, modelo, precio, imagen, año, kilometro, ubicacion) {

        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
        this.imagen = imagen;
        this.año = año;
        this.kilometro = kilometro;
        this.ubicacion = ubicacion;

    }
}

let auto1 = new Automovil("Toyotas", "TXL", 15000000, "images/toyota.jpg", "2021", 28, "pitalito - huila");
let auto2 = new Automovil("Mustang", "PRO", 250000000, "images/mustang.png", "2023", 0, "porvenir - huila");
let auto3 = new Automovil("CHEVROLET ", "CAMARO", 300000000, "images/camaro.png", "2023", 0, "exito - huila");
let auto4 = new Automovil("ROLL ", "ROYCE", 1300000000, "images/roll-rois.jpg", "2024", 0, "Popular - huila");

let autos = [
    auto1, auto2, auto3,auto4
]


window.addEventListener("load", function () {

    mostrarProducto('');

    inputBusqueda.addEventListener('input', function () {
        mostrarProducto(inputBusqueda.value);
    });
});

function mostrarProducto(terminoBusqueda) {

    mainContent.innerHTML = '';
    autos.forEach(auto => {
        if (auto.marca.toLowerCase().includes(terminoBusqueda.toLowerCase()) || auto.modelo.toLowerCase().includes(terminoBusqueda.toLowerCase())) {

            //alert(auto1.marca+ " "+auto1.modelo);


            let boxproducto = document.createElement("div");
            mainContent.appendChild(boxproducto);
            boxproducto.setAttribute("class", "box-producto");


            /*caja para la imagen*/
            let boximg = document.createElement("div");
            boxproducto.appendChild(boximg);
            boximg.setAttribute("class", "box-img");
            let imgAuto = document.createElement("img");
            boximg.appendChild(imgAuto);
            imgAuto.setAttribute("src", auto.imagen);
            imgAuto.setAttribute("class", "img-auto");


            //caja información
            let boxInfo = document.createElement("div");
            boxproducto.appendChild(boxInfo);
            boxInfo.setAttribute("class", "box-info");

            let marcaL = document.createElement("label");
            boxInfo.appendChild(marcaL);
            let txtNodeMarca = document.createTextNode(auto.marca + " " + auto.modelo);
            marcaL.appendChild(txtNodeMarca);
            marcaL.setAttribute("class", "marca");


            /*precio*/
            let precio = document.createElement("label");
            boxInfo.appendChild(precio);


            // Formatea el precio utilizando toLocaleString()
            let precioFormateado = auto.precio.toLocaleString();

            let txtNodePrecio = document.createTextNode("$" + precioFormateado);
            precio.appendChild(txtNodePrecio);
            precio.setAttribute("class", "precio");




            /* Información adicional */
            let infoAdicional = document.createElement("label");
            boxInfo.appendChild(infoAdicional);

            let infoText = document.createTextNode(auto.año + " - " + auto.kilometro + " km, " + auto.ubicacion);
            infoAdicional.appendChild(infoText);
            infoAdicional.setAttribute("class", "info-adicional");

            /*icono corazon*/
            let boxCorazon = document.createElement("div");
            boximg.appendChild(boxCorazon)

            let iconoCorazon = document.createElement("i");
            boxCorazon.appendChild(iconoCorazon);

            boxCorazon.setAttribute("class", "box-corazon");
            iconoCorazon.setAttribute("class", "icon-corazon fa-regular fa-heart");

            /*linea divisora*/

            let lineaDiv = document.createElement("hr");
            boxproducto.appendChild(lineaDiv);
            lineaDiv.setAttribute("class", "linea-div");
        }
    });


};

//FILTROS//
cargarFiltro();

function cargarFiltro(){

}