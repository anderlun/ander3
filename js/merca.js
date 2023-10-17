/* cuando trabajamos con objetos debo tener en cuenta que en un objeto se construye teniendo encuenta una clase*/
// el contructor crea la clase osea la estructura
let inputBusqueda = document.getElementById
("inputBusqueda");
class Automovil{
    constructor(marca,modelo,precio,imagen){

        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
        this.imagen=imagen;

    }
}

let auto1= new Automovil("Toyota", "TXL",15000000,"images/toyota.jpg");

//alert(auto1.marca+ " "+auto1.modelo);


window.addEventListener("load",function(){
    let mainContent=document.getElementById("mainContent");
    let boxproducto=document.createElement("div");
    mainContent.appendChild(boxproducto);
    boxproducto.setAttribute("class", "box-producto");

    
    /*caja para la imagen*/
    let boximg= document.createElement("div");
    boxproducto.appendChild(boximg);
    boximg.setAttribute("class", "box-img");
    let imgAuto= document.createElement("img");
    boximg.appendChild(imgAuto);
    imgAuto.setAttribute("src", auto1.imagen);
    imgAuto.setAttribute("class", "img-auto");      


    
    //caja información
    let boxInfo = document.createElement("div");
    boxproducto.appendChild(boxInfo);
    boxInfo.setAttribute("class", "box-info");

    let marcaL = document.createElement("label");
    boxInfo.appendChild(marcaL);
    let txtNodeMarca = document.createTextNode(auto1.marca + " " + auto1.modelo);
    marcaL.appendChild(txtNodeMarca);
    marcaL.setAttribute("class","marca");

      
    /*precio*/
    let precio = document.createElement("label");
    boxInfo.appendChild(precio);
    

    // Formatea el precio utilizando toLocaleString()
    let precioFormateado = auto1.precio.toLocaleString();
    
    let txtNodePrecio = document.createTextNode("$" + precioFormateado);
    precio.appendChild(txtNodePrecio);
    precio.setAttribute("class", "precio");
    



    /* Información adicional */
let infoAdicional = document.createElement("label");
boxInfo.appendChild(infoAdicional);

let infoText = document.createTextNode("2021 - 25.000 km,  pitalito - huila");
infoAdicional.appendChild(infoText);
infoAdicional.setAttribute("class", "info-adicional");

/*icono corazon*/
let boxCorazon=document.createElement("div");
boximg.appendChild(boxCorazon)

let iconoCorazon =document.createElement("i");
boxCorazon.appendChild(iconoCorazon);

boxCorazon.setAttribute("class","box-corazon");
iconoCorazon.setAttribute("class", "icon-corazon fa-regular fa-heart");

/*linea divisora*/

let lineaDiv=document.createElement("hr");
boxproducto.appendChild(lineaDiv);
lineaDiv.setAttribute("class","linea-div");



});