function guardarProductos() {
    localStorage.setItem(
        "productos",
        JSON.stringify(productos)
    );
}

function cargarProductos() {

    const datos = localStorage.getItem("productos");

    if (datos !== null) {

        productos.length = 0;

        productos.push(...JSON.parse(datos));
    }
}
function guardarCarrito(){

    localStorage.setItem(
        "carrito",
        JSON.stringify(carrito)
    );

}

function cargarCarrito(){

    const datos = localStorage.getItem("carrito");

    if(datos){

        carrito.push(...JSON.parse(datos));

    }

}