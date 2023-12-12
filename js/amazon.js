let calificacion1 = document.getElementById("calificacion1");
let calificacion2 = document.getElementById("calificacion2");
let calificacion3 = document.getElementById("calificacion3");
let calificacion4 = document.getElementById("calificacion4");
let calificacion5 = document.getElementById("calificacion5");
let btngraficar = document.getElementById("btngraficar");

let spanProm1 = document.getElementById("promedio1");
let spanProm2 = document.getElementById("promedio2");
let spanProm3 = document.getElementById("promedio3");
let spanProm4 = document.getElementById("promedio4");
let spanProm5 = document.getElementById("promedio5");

btngraficar.addEventListener("click", function () {
    let sumaClasificacion = Number(calificacion1.value) + Number(calificacion2.value) + Number(calificacion3.value) + Number(calificacion4.value) + Number(calificacion5.value);

    let promedio1 = (parseFloat(calificacion1.value) / sumaClasificacion) * 100;
    let promedio2 = (parseFloat(calificacion2.value) / sumaClasificacion) * 100;
    let promedio3 = (parseFloat(calificacion3.value) / sumaClasificacion) * 100;
    let promedio4 = (parseFloat(calificacion4.value) / sumaClasificacion) * 100;
    let promedio5 = (parseFloat(calificacion5.value) / sumaClasificacion) * 100;

    actualizarBarra(spanProm1, promedio1, "bar-1");
    actualizarBarra(spanProm2, promedio2, "bar-2");
    actualizarBarra(spanProm3, promedio3, "bar-3");
    actualizarBarra(spanProm4, promedio4, "bar-4");
    actualizarBarra(spanProm5, promedio5, "bar-5");
});

function actualizarBarra(elemento, porcentaje, claseBarra) {
    porcentaje = Math.round(porcentaje); // Redondea el porcentaje
    elemento.innerHTML = porcentaje + "%";
    elemento.parentNode.querySelector("." + claseBarra).style.width = porcentaje + "%";
}