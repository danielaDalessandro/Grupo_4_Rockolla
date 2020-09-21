window.addEventListener("load" , 
function () {
    let hamburguer = document.getElementById("hamburguer");
    let navMenu= document.getElementById("navbar-menu");

    hamburguer.addEventListener('click', 
    function () {
        console.log('click');
        navMenu.classList.toggle("is-active"); 
    });

});
