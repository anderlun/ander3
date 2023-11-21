let inputBusqueda = document.getElementById('inputBusqueda');

class Automovil {
    constructor(marca, modelo, precio, año, kms, direccion, imagen){
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
        this.año = año;
        this.kms = kms;
        this.direccion = direccion;
        this.imagen = imagen;
    }
};

let img1 = "../img/2595.jpg";
let img2 = "../img/hola.jpg";
let img3 = "../img/hino11.jpg";
let img4 = "../img/vamos2/jpg";

let auto1 = new Automovil("VOLKSWAGEN", "CRAFTER",450000, 2015 ,988000,"Pitalito-Huila", "images/camaros.jpg" );
let auto2 = new Automovil("KENWORTH", "T800", 400000,2012,930000,"Ibague-Tolima","images/camaros.jpg" );
let auto3 = new Automovil("HINO", "500", 350000,2008,860000,"Medellin-Antioquia","img/hino11.jpg" );
let auto4 = new Automovil("CHEVROLET", "NQR", 140000,2013,182000,"Neiva-Huila","img/vamos2.jpg" );


let autos = [auto1, auto2, auto3, auto4];

    cargarVehiculo(auto1);
    cargarVehiculo(auto2);
    cargarVehiculo(auto3);
    cargarVehiculo(auto4);



function cargarVehiculo(auto){

    let mainContent = document.getElementById("mainContent");
    //caja producto
    let boxProducto = document.createElement("div");
    mainContent.appendChild(boxProducto);
    boxProducto.setAttribute("class", "box-producto");
    //caja imagen
    let boxImg = document.createElement("div");
    boxProducto.appendChild(boxImg);
    boxImg.setAttribute("class", "box-img");

    let imgAuto = document.createElement("img");
    boxImg.appendChild(imgAuto);
    imgAuto.setAttribute("src", auto.imagen);
    imgAuto.setAttribute("class","img-auto");

    let icon = document.createElement("i");
    boxImg.appendChild(icon);
    icon.setAttribute("class","icon-heart fa-regular fa-heart");

    //caja información
    let boxInfo = document.createElement("div");
    boxProducto.appendChild(boxInfo);
    boxInfo.setAttribute("class", "box-info");

    let marca = document.createElement("label");
    boxInfo.appendChild(marca);
    let txtNodeMarca = document.createTextNode(auto.marca + " " + auto.modelo);
    marca.appendChild(txtNodeMarca);
    marca.setAttribute("class", "marca");

    ///precio
    let precio = document.createElement("label");
    boxInfo.appendChild(precio);

    //línea para convertir el número a formato de precio con . en los miles
    let precioStr = Intl.NumberFormat("de-DE").format(auto.precio);


    let txtNodePrecio = document.createTextNode("$ "+ precioStr);
    precio.appendChild(txtNodePrecio);
    precio.setAttribute("class", "precio");

    let año = document.createElement("label");
    boxInfo.appendChild(año);
    let txtNodeAño = document.createTextNode(auto.año + " ");
    año.appendChild(txtNodeAño);
    año.setAttribute("class", "año");

    let kms = document.createElement("label");
    boxInfo.appendChild(kms);
    let kmStr = Intl.NumberFormat("de-DE").format(auto.kms);
    let txtNodeKm = document.createTextNode(kmStr +" km ");
    kms.appendChild(txtNodeKm);
    kms.setAttribute("class", "kms");

    let direccion = document.createElement("label");
    boxInfo.appendChild(direccion);
    let txtNodeDir = document.createTextNode(auto.direccion)
    direccion.appendChild(txtNodeDir);
    direccion.setAttribute("class", "direccion");


};


inputBusqueda.addEventListener("input", function(event) {
    let userInput = event.target.value.toLowerCase();
    mainContent.innerHTML = ''; // Limpia el contenido anterior

    for (let auto of autos) {
        if (auto.marca.toLowerCase().startsWith(userInput)) {
            // Crea la caja de producto para el auto correspondiente
       
            let mainContent = document.getElementById("mainContent");
            //caja producto
            let boxProducto = document.createElement("div");
            mainContent.appendChild(boxProducto);
            boxProducto.setAttribute("class", "box-producto");
            //caja imagen
            let boxImg = document.createElement("div");
            boxProducto.appendChild(boxImg);
            boxImg.setAttribute("class", "box-img");
       
            let imgAuto = document.createElement("img");
            boxImg.appendChild(imgAuto);
            imgAuto.setAttribute("src", auto.imagen);
            imgAuto.setAttribute("class","img-auto");
       
            let icon = document.createElement("i");
            boxImg.appendChild(icon);
            icon.setAttribute("class","icon-heart fa-regular fa-heart");
       
            //caja información
            let boxInfo = document.createElement("div");
            boxProducto.appendChild(boxInfo);
            boxInfo.setAttribute("class", "box-info");
       
            let marca = document.createElement("label");
            boxInfo.appendChild(marca);
            let txtNodeMarca = document.createTextNode(auto.marca + " " + auto.modelo);
            marca.appendChild(txtNodeMarca);
            marca.setAttribute("class", "marca");
       
            ///precio
            let precio = document.createElement("label");
            boxInfo.appendChild(precio);
       
            //línea para convertir el número a formato de precio con . en los miles
            let precioStr = Intl.NumberFormat("de-DE").format(auto.precio);
       
       
            let txtNodePrecio = document.createTextNode("$ "+ precioStr);
            precio.appendChild(txtNodePrecio);
            precio.setAttribute("class", "precio");
       
            let año = document.createElement("label");
            boxInfo.appendChild(año);
            let txtNodeAño = document.createTextNode(auto.año + " ");
            año.appendChild(txtNodeAño);
            año.setAttribute("class", "año");
       
            let kms = document.createElement("label");
            boxInfo.appendChild(kms);
            let kmStr = Intl.NumberFormat("de-DE").format(auto.kms);
            let txtNodeKm = document.createTextNode(kmStr +" km ");
            kms.appendChild(txtNodeKm);
            kms.setAttribute("class", "kms");
       
            let direccion = document.createElement("label");
            boxInfo.appendChild(direccion);
            let txtNodeDir = document.createTextNode(auto.direccion)
            direccion.appendChild(txtNodeDir);
            direccion.setAttribute("class", "direccion");

        }
    }});