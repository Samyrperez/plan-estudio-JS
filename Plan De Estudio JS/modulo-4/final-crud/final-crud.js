/*
🛒 OPCIÓN 3: CRUD de Lista de Compras con Cantidades y Precios
Características:

--Añadir productos con nombre, cantidad y precio
--Calcular el total de la compra automáticamente
--Eliminar o editar productos
--Marcar productos como "comprados"
--Guardar en localStorage

📌 Practicarás:
--Cálculo en tiempo real (.reduce())
--Manejo de inputs numéricos
--Actualización del DOM y total automáticamente
--Buen formato visual
*/

/*
✅ Paso 1
Crea el archivo final-crud.js con una función básica que escuche el botón agregar-btn y que imprima en consola el objeto producto con sus datos.


*/


document.addEventListener('DOMContentLoaded', () => {

    // Paso 2: Detectar el click del botón y capturar los datos
    document.getElementById('agregar-btn').addEventListener('click', () => {
        const nombre = document.getElementById('nombre').value;
        const cantidad = parseInt(document.getElementById('cantidad').value);
        const precio = parseFloat(document.getElementById('precio').value);

        const producto = {
            nombre,
            cantidad,
            precio
        };
        agregarProductos(producto); // ✅ AGREGAR ESTA LÍNEA
        limpiarFormulario(); // ✅ limpiar inputs después de agregar

        console.log("Producto agregado: ", producto);
    })

    function limpiarFormulario() {
        document.getElementById('nombre').value = '';
        document.getElementById('cantidad').value = '';
        document.getElementById('precio').value = '';
        document.getElementById('nombre').focus(); // opcional, mejora UX
    }


    // 👉 Paso 3: Crear una función agregarProducto(producto) que agregue el producto a un array y lo renderice en la tabla.
    const productos = [];
    let modoEdicion = false;

    function agregarProductos(producto) {
        productos.push(producto);
        renderProductos(productos);
    }

    function eliminarProducto(index) {
        productos.splice(index, 1);
        renderProductos(productos);
    }

    function renderProductos(lista = productos) {
        const tbody = document.querySelector("#lista-productos tbody");
        tbody.innerHTML = '';

        lista.forEach(producto => {
            const indexReal = productos.indexOf(producto); // ✅ índice real en el array original

            const tr = document.createElement('tr');
            tr.innerHTML = `
            <td>${producto.nombre}</td>
            <td>${producto.cantidad}</td>
            <td>${producto.precio}</td>
            <td>
                <button class="editar-btn" data-index="${indexReal}">✏️</button>
                <button class="eliminar-btn" data-index="${indexReal}">🗑</button>
            </td>
        `;
            tbody.appendChild(tr);
        });

        // Añadir eventos de eliminar
        const botonesEliminar = document.querySelectorAll(".eliminar-btn");
        botonesEliminar.forEach(boton => {
            boton.addEventListener('click', (e) => {
                const index = parseInt(e.target.dataset.index);
                eliminarProducto(index);
            });
        });
    }

    // 🔍 Búsqueda en tiempo real
    document.getElementById('busqueda').addEventListener('input', (e) => {
        const termino = e.target.value.toLowerCase();
        const productosFiltrados = productos.filter(producto =>
            producto.nombre.toLowerCase().includes(termino)
        );
        renderProductos(productosFiltrados);
    });

})