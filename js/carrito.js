let numSumar = document.getElementById("numSumar");
let numRestar = document.getElementById("numRestar");
let numView = document.getElementById("numView");


numRestar.addEventListener("click", function(){
    let aux = numView.innerHTML.toString();
    let auxInt =parseInt(aux);
    if(auxInt>0){
        auxInt--;
        document.getElementById("numView").innerText = auxInt.toString();
    }
   
})

numSumar.addEventListener("click", function(){
    let aux = numView.innerHTML.toString();
    let auxInt =parseInt(aux);
    if(auxInt<10){
        auxInt++;
        document.getElementById("numView").innerText = auxInt.toString();

    }
    
   
})