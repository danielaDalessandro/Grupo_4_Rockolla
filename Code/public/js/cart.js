window.addEventListener("load", function () {
  let inputs = document.querySelectorAll("#product");
  let products = document.querySelectorAll("#product-id");

  products = Object.values(products);
  products = products.map((element) => {
    return element.firstChild.data;
  });
  console.log(products);

  let form = document.getElementById("form");
  let shipping = document.getElementById("envio");
  let submitButton = document.getElementById("submit");
 /*  submitButton.addEventListener("click", function (event) {
    event.preventDefault;
    console.log(form, shipping)
  }); */

  // Atrapo todos los botones para eliminar productos del carrito
  let deleteButtons = document.querySelectorAll(".eliminar-producto-carrito");
  // Itero y le añado evento click a cada botón
  deleteButtons.forEach((button) => {
    button.addEventListener("click", function (event) {
      event.preventDefault();
      // Busco el id del producto correspondiente al evento
      let productId = button.value;

      // Hago el método POST para quitar el producto del carrito
      axios({
        method: "post",
        url: "cart/" + productId,
        data: {
          ammount: 0,
        },
      })
        .then((response) => {
          // Una vez se proceso el pedido, recargo la página
          window.location.reload();
        })
        .catch((e) => console.log(e));
    });
  });
});
