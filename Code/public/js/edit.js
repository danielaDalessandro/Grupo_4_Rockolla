window.addEventListener("load", 
function () {
    let starButton = document.getElementById("star");
    let highlight = document.getElementById("highlight");

    if(highlight.value == 1) {
        starButton.classList.toggle("is-active");
    }
    starButton.addEventListener('click', 
    function () {
        starButton.classList.toggle("is-active");
        if(starButton.classList.contains("is-active")) {
            highlight.value= 1;
        }
        else {
            highlight.value= 0;
        }
    });

})