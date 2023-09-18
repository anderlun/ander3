
let rightArrow = document.getElementById("rightArrow");//("leftarrow")llama el nombre del id
let leftArrow = document.getElementById("leftArrow");
let porshegt4 = document.getElementById("porshegt4");
let spider911 = document.getElementById("spider911");



leftArrow.addEventListener("click", function() {
    porshegt4.classList.remove("porsche-gt4-hidden");
    porshegt4.classList.add("porsche-gt4-visible");
    spider911.classList.remove("spider-visible");
    spider911.classList.add("spider-hidden");
 });

rightArrow.addEventListener("click", function() {
    porshegt4.classList.remove("porshe-gt4-visible");
    porshegt4.classList.add("porshe-gt4-hidden");
    spider911.classList.remove("spider-hidden");
    spider911.classList.add("spider-visible");
});






