const tbody = document.querySelector('tbody');

//Llamada a los metodos
productos();

//Fetch para traer todos los productos
function productos() {
    fetch('http://localhost:3000/product')
        .then(productos => productos.json())
        .then(productos => insertTable(productos));
};

//for para ingresar los datos
const insertTable = (productos) => {
    console.log(productos);
    for (i = 0; i < productos.length; i++) {
        htmlCode = '<tr>' +
            '<td>' + productos[i].id_product + '</td>' +
            '<td>' + productos[i].id_provider + '</td>' +
            '<td>' + productos[i].name + '</td>' +
            '<td> $ ' + productos[i].price + '</td>' +
            '<td>' + productos[i].existence + '</td>' +
            '<td>' + productos[i].uses + '</td>' +
            '</tr>';
        tbody.insertAdjacentHTML("beforeend", htmlCode);
        htmlConde = '';
    }
};