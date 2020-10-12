window.addEventListener( "load", function () {
    // Atrapo todos los botones para eliminar productos del carrito
    let deleteButtons = document.querySelectorAll(".eliminar-producto-carrito")

    // Itero y le añado evento click a cada botón
    deleteButtons.forEach( button => {
        button.addEventListener( "click", function (event) {
            // Busco el id del producto correspondiente al evento
            let productId = event.originalTarget.nextSibling.data;

            // Hago el método POST para quitar el producto del carrito
            axios({
                method: 'post',
                url: 'cart/' + productId,
                data: {
                  ammount: 0
                }
              })
              .then( response => {
                // Una vez se proceso el pedido, recargo la página
                window.location.reload();
              })
              .catch(e => console.log(e));
        });
    })
});