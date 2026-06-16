const panelAdmin = document.getElementById("panelAdmin");

document.getElementById("btnAdmin").addEventListener("click", () => {
    panelAdmin.style.display = "flex";
});

panelAdmin.addEventListener("click", (e) => {
    if (e.target === panelAdmin) {
        panelAdmin.style.display = "none";
    }
});

document.getElementById("btnCerrarAdmin").addEventListener("click", () => {
    panelAdmin.style.display = "none";
});

document.getElementById("btnGuardarProducto").addEventListener("click", () => {

    const nombre    = document.getElementById("nombreProducto").value;
    const categoria = document.getElementById("categoria").value;
    const plataforma= document.getElementById("plataforma").value;
    const precio    = Number(document.getElementById("precio").value);
    const licencias = Number(document.getElementById("cantidadLicencias").value);

    if (
        nombre.trim() === "" ||
        categoria.trim() === "" ||
        plataforma.trim() === "" ||
        precio <= 0 ||
        licencias <= 0
    ) {
        alert("Complete todos los campos correctamente");
        return;
    }

    crearProducto(nombre, categoria, plataforma, precio, licencias);

    panelAdmin.style.display = "none";
});

document.getElementById("btnModoEliminar").addEventListener("click", () => {
    modoEliminar = !modoEliminar;
    mostrarProductos();
});
