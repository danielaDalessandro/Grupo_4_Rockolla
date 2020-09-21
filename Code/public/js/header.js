window.addEventListener("load" , 
function () {
    let hamburguer = document.getElementById("hamburguer");
    let navMenu= document.getElementById("navbar-menu");

    hamburguer.addEventListener('click', 
    function () {
        navMenu.classList.toggle("is-active"); 
    });

});
