let inputBusqueda = document.getElementById("inputBusqueda");
let mainContent = document.getElementById("mainContent");

class Automovil {
    constructor(marca, modelo, precio, imagen, año, kilometro, ubicacion, calificacion) {
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
        this.imagen = imagen;
        this.año = año;
        this.kilometro = kilometro;
        this.ubicacion = ubicacion;
        this.calificacion = calificacion;
    }
}

let auto1 = new Automovil("Toyotas", "TXL", 15000000, "images/toyota.jpg", "2021", 25, "pitalito - huila", 0.2);
let auto2 = new Automovil("Mustang", "PRO", 250000000, "images/mustang.png", "2023", 0, "porvenir - huila", 0.6);
let auto3 = new Automovil("CHEVROLET ", "CAMARO", 350000000, "images/camaro2.png", "2023", 0, "exito - huila", 1.4);
let auto4 = new Automovil("ROLL ", "ROYCE", 1300000000, "images/roll-rois.jpg", "2024", 0, "Popular - huila", 2.5);

let autos = [auto1, auto2, auto3, auto4];

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
            let boxproducto = document.createElement("div");
            mainContent.appendChild(boxproducto);
            boxproducto.setAttribute("class", "box-producto");

            let boximg = document.createElement("div");
            boxproducto.appendChild(boximg);
            boximg.setAttribute("class", "box-img");
            let imgAuto = document.createElement("img");
            boximg.appendChild(imgAuto);
            imgAuto.setAttribute("src", auto.imagen);
            imgAuto.setAttribute("class", "img-auto");

            let boxInfo = document.createElement("div");
            boxproducto.appendChild(boxInfo);
            boxInfo.setAttribute("class", "box-info");

            let marcaL = document.createElement("label");
            boxInfo.appendChild(marcaL);
            let txtNodeMarca = document.createTextNode(auto.marca + " " + auto.modelo);
            marcaL.appendChild(txtNodeMarca);
            marcaL.setAttribute("class", "marca");

            let precio = document.createElement("label");
            boxInfo.appendChild(precio);

            let precioFormateado = auto.precio.toLocaleString();
            let txtNodePrecio = document.createTextNode("$" + precioFormateado);
            precio.appendChild(txtNodePrecio);
            precio.setAttribute("class", "precio");

            let infoAdicional = document.createElement("label");
            boxInfo.appendChild(infoAdicional);

            let infoText = document.createTextNode(auto.año + " - " + auto.kilometro + " km, " + auto.ubicacion);
            infoAdicional.appendChild(infoText);
            infoAdicional.setAttribute("class", "info-adicional");

            let boxCorazon = document.createElement("div");
            boximg.appendChild(boxCorazon)

            let iconoCorazon = document.createElement("i");
            boxCorazon.appendChild(iconoCorazon);

            boxCorazon.setAttribute("class", "box-corazon");
            iconoCorazon.setAttribute("class", "icon-corazon fa-regular fa-heart");

            let lineaDiv = document.createElement("hr");
            boxproducto.appendChild(lineaDiv);
            lineaDiv.setAttribute("class", "linea-div");

            // Campo de entrada para la calificación
            let inputCalificacion = document.createElement("input");
            boxInfo.appendChild(inputCalificacion);
            inputCalificacion.setAttribute("type", "number");
            inputCalificacion.setAttribute("placeholder", "Ingrese la calificación");
            inputCalificacion.addEventListener("input", function () {
                mostrarCalificacion(inputCalificacion.value, boxCalificacion);
            });

            // Contenedor para mostrar las estrellas de calificación
            let boxCalificacion = document.createElement("div");
            boxInfo.appendChild(boxCalificacion);
            boxCalificacion.setAttribute("class", "calificacion-container");

            // Inicializar la calificación al cargar la página
            mostrarCalificacion(inputCalificacion.value, boxCalificacion);
        }
    });
}

function mostrarCalificacion(calificacion, container) {
    // Limpiar el contenido actual del contenedor
    container.innerHTML = '';

    // Convertir la calificación a un número de rango 0 a 10
    let numEstrellas = Math.min(Math.max(calificacion * 2, 0), 10); // Ajusta la calificación a un rango válido (0-10)

    // Crear estrellas según el rango
    for (let i = 0; i < 5; i++) {
        let estrella = document.createElement("i");
        container.appendChild(estrella);
        estrella.setAttribute("class", "icon-estrella fa-solid fa-star");

        // Verificar si la estrella actual debe estar activa, a medias o inactiva
        if (i * 2 + 1 <= numEstrellas) {
            if (numEstrellas - i * 2 >= 1) {
                estrella.classList.add("activa");
            } else {
                estrella.classList.add("media");
            }
        }
    }
}



window.addEventListener("load", function () {
    mostrarProducto('');

    inputBusqueda.addEventListener('input', function () {
        mostrarProducto(inputBusqueda.value);
    });

    // Agrega el evento para el cambio en el toggle
    let toggle = document.getElementById("toggle");
    toggle.addEventListener("change", function () {
        // Agrega aquí el código relacionado con el cambio en el toggle si es necesario
    });
});

//FILTROS//
cargarFiltro();

function cargarFiltro(){

}
