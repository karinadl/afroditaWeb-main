

const id_prod = document.getElementById('productId')
const btn = document.getElementById('eliminar');

const sp = document.getElementById('producto');

productos();

function productos() {
    fetch('http://localhost:3000/product')
        .then(productos => productos.json())
        .then(productos => insertProductos(productos));

};

//!Constante para ingresar los providers al select
const insertProductos = (productos) => {
    a = productos;
    for (i = 0; i < productos.length; i++) {
        htmlSelect = "<option>" + productos[i].name + "</option>";
        sp.insertAdjacentHTML("beforeend", htmlSelect);
    }
}

btn.addEventListener('click', () => {
    if (id_prod.value == "" || id_prod.value == null) {
        alert('Intenta nuevamente');
    } else {
        id = 0;
        for (i = 0; i < a.length; i++) {
            if (a[i].name == sp.value) {
                id = a[i].productos;
            }
        }
        console.log(id);
        fetch('http://localhost:3000/product/' + id_prod.value, {
            method: "DELETE",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(res => res.text()).then(res => console.log(res));
        alert('Producto eliminado');
    }
});