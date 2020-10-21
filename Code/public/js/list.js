window.addEventListener("load", function () {
  let cartButtons = document.querySelectorAll(".boton-carrito");
  let cartCounter = document.querySelector(".carrito-cant");

  console.log(cartButtons);
  cartButtons.forEach((button) => {
    button.addEventListener("click", function (event) {
      event.preventDefault();
      // Busco el id del producto correspondiente al evento
      let productId = button.value;

      // Hago el método POST para quitar el producto del carrito
      axios({
        method: "post",
        url: "/products/cart/" + productId,
        data: {
          ammount: 0,
        },
      })
        .then((response) => {
          // Una vez se proceso el pedido, recargo la página
          if (response.status == 200) {
            button.classList.toggle("boton-primary");
            button.classList.toggle("boton-success");
          }
          if (button.classList.contains("boton-primary")) {
            button.innerHTML = '<i class="fas fa-shopping-cart"></i>';
            if (cartCounter.innerHTML == "1") {
              cartCounter.innerHTML = "";
            } else {
              cartCounter.innerHTML == --cartCounter.innerHTML;
            }
          } else {
            button.innerHTML = '<i class="fas fa-check"></i>';
            if (cartCounter.innerHTML == "") {
              cartCounter.innerHTML = "1";
            } else {
              cartCounter.innerHTML == ++cartCounter.innerHTML;
            }
          }
        })
        .catch((e) => console.log(e));
    });
  });
});
