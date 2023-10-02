let numSumar = document.getElementById("numSumar");
let numRestar = document.getElementById("numRestar");
let numView = document.getElementById("numView");
let cantProductos=document.getElementById("cantProductos");

//simulacion de valor entero proviene de una BD
let valorUnitarioProducto = 200000;
let valorUnitarioProductoStr = new Intl.NumberFormat('de-De').format(valorUnitarioProducto);

document.getElementById("valorUnitarioProducto").innerText = valorUnitarioProductoStr;


numRestar.addEventListener("click", function() {
    let aux = numView.innerHTML.toString();
    let auxInt = parseInt(aux);
    if (auxInt > 0) {
        auxInt--;
        document.getElementById("numView").innerText = auxInt.toString();
        if (auxInt == 1) {
            document.getElementById("cantProductos").innerHTML = auxInt.toString() + " Producto";
        } else if (auxInt == 0 || auxInt > 1) {
            document.getElementById("cantProductos").innerHTML = auxInt.toString() + " Productos";
        }
    } let auxSubtotal= auxInt * valorUnitarioProducto;
    let auxSubtotalStr = new Intl.NumberFormat('de-De').format(auxSubtotal);
    document.getElementById("valorSubtotal").innerHTML= auxSubtotalStr;
})

numSumar.addEventListener("click", function() {
    let aux = numView.innerHTML.toString();
    let auxInt = parseInt(aux);
    if (auxInt < 11) {
        auxInt++;
        document.getElementById("numView").innerText = auxInt.toString();
        if (auxInt == 1) {
            document.getElementById("cantProductos").innerHTML = auxInt.toString() + " Producto";
        } else if (auxInt == 0 || auxInt > 1) {
            document.getElementById("cantProductos").innerHTML = auxInt.toString() + " Productos";
        }
        
    } let auxSubtotal= auxInt * valorUnitarioProducto;
    let auxSubtotalStr = new Intl.NumberFormat('de-De').format(auxSubtotal);
    document.getElementById("valorSubtotal").innerHTML= auxSubtotalStr;
})