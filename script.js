// CARRITO
let carrito = [];

function agregarCarrito(producto) {
    carrito.push(producto);

    let lista = document.getElementById("carrito");
    let item = document.createElement("li");
    item.textContent = producto;

    lista.appendChild(item);
}

// BUSCADOR
document.getElementById("buscador").addEventListener("keyup", function () {
    let texto = this.value.toLowerCase();
    let productos = document.querySelectorAll(".producto");

    productos.forEach(p => {
        let nombre = p.innerText.toLowerCase();

        if (nombre.includes(texto)) {
            p.style.display = "block";
        } else {
            p.style.display = "none";
        }
    });
});

// FORMULARIO
document.getElementById("formulario").addEventListener("submit", function (e) {
    e.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let correo = document.getElementById("correo").value;
    let mensaje = document.getElementById("mensaje").value;

    if (nombre === "" || correo === "" || mensaje === "") {
        alert("Todos los campos son obligatorios");
    } else {
        alert("Mensaje enviado correctamente");
        this.reset();
    }
});
