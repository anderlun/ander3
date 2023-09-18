let menuHamburguer=document.getElementById("menuHamburguer");
let mainMenu=document.getElementById("mainMenu");

menuHamburguer.addEventListener("click",function(){

    if( mainMenu.ClassList.contains("menu-media-hidden")){
        mainMenu.ClassList.add("menu-media-visible");
        mainMenu.ClassList.remove("menu-media-hidden");
    }
});