var menu = document.querySelector(".menu");
var links = document.querySelector(".nav-links");


menu.addEventListener("click", function(){
    menu.classList.toggle("change");
    links.classList.toggle("show");

});