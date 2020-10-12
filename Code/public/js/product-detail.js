window.addEventListener("load", function () {
    let feedback = document.getElementById("feedback");
    let button = document.getElementById("cart-button");

    if (feedback){
        button.classList.add("is-danger");
    }
})