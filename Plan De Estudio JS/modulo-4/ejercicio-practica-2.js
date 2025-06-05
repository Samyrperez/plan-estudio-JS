/*

🧪 Ejercicio: Lista de productos con edición en tabla
🎯 Objetivo:
Crear un sistema donde puedas:

--Agregar productos (nombre, precio y cantidad)

--Editarlos directamente en la tabla

--Eliminar productos
*/

document.addEventListener("DOMContentLoaded", () => {
    // 📥 1. Obtener referencias a elementos del DOM
    const productoInput = document.getElementById('producto');
    const precioInput = document.getElementById('precio');
    const cantidadInput = document.getElementById('cantidad');
    const botonAgregar = document.getElementById('agregar-producto');
    const tabla = document.querySelector('#tabla-productos tbody'); //Usa querySelector('#id etiqueta') si estás buscando dentro de un contenedor.

    // ➕ 2. Agregar productos
    botonAgregar.addEventListener('click', (e) => {
        e.preventDefault(); // para evitar que el formulario recargue la página

        const producto = productoInput.value.trim();
        const precio = precioInput.value.trim();
        const cantidad = cantidadInput.value.trim();

        // Validación
        if (producto === '' || precio === '' || cantidad === '') {
            alert('Todos los campos son obligatorios');
            return;
        }

        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${producto}</td>
            <td>${precio}</td>
            <td>${cantidad}</td>
            <td>
                <button class="editar">Editar</button>
                <button class="eliminar">Eliminar</button>
            </td>
        `;

        tabla.appendChild(fila);

        productoInput.value = '';
        precioInput.value = '';
        cantidadInput.value = '';
    });

    // ✏️ 3. Editar y Guardar productos
    tabla.addEventListener('click', (e) => {
        const boton = e.target; // e.target es el elemento HTML sobre el que se hizo clic, ej: editar, guardar, eliminar.
        const fila = boton.closest('tr'); // .closest Busca el elemento <tr> más cercano al botón clicado. Es decir, encuentra la fila completa donde está el botón.
        const celdas = fila.querySelectorAll('td'); //Obtiene todas las celdas (<td>) de esa fila. Producto, Precio, Cantidad, Acciones

    // Editar
        if(boton.classList.contains('editar')) { //Verifica si el botón clicado tiene la clase "editar".
            //Obtiene el contenido actual de las 3 primeras celdas
            const producto = celdas[0].textContent;
            const precio = celdas[1].textContent;
            const cantidad = celdas[2].textContent;

            // Reemplaza el contenido de esas celdas con inputs para que el usuario pueda editar directamente desde la tabla.
            celdas[0].innerHTML = `<input type="text" value="${producto}">`;
            celdas[1].innerHTML = `<input type="number" value="${precio}">`;
            celdas[2].innerHTML = `<input type="number" value="${cantidad}">`;

            // Se cambia el botón de editar A guardar
            // Cambia el botón de "Editar" a "Guardar" tanto visualmente como en su clase CSS, para saber luego qué acción realizar.
            boton.textContent = 'Guardar';
            boton.classList.replace('editar', 'guardar');

            // Guardar
        } else if(boton.classList.contains('guardar')) {
            const inputs = fila.querySelectorAll('input'); // Busca todos los inputs que están en la fila. (Debería haber 3: producto, precio y cantidad)
            const nuevoProducto = inputs[0].value.trim();
            const nuevoPrecio = inputs[1].value.trim();
            const nuevoCantidad = inputs[2].value.trim();
            // Obtiene los nuevos valores ingresados por el usuario.

            celdas[0].textContent = nuevoProducto;
            celdas[1].textContent = nuevoPrecio;
            celdas[2].textContent = nuevoCantidad;
            // Reemplaza los inputs por texto plano otra vez (actualizando la tabla con los nuevos valores).

            // Vuelve a cambiar el botón de "Guardar" a "Editar" para que se pueda volver a editar más tarde.
            boton.textContent = 'Editar';
            boton.classList.replace('guardar', 'editar');

            //🗑️ Acción: Eliminar 
        } else if(boton.classList.contains('eliminar')) {
            fila.remove(); // Si el botón clicado tiene la clase "eliminar", simplemente elimina la fila completa de la tabla.
        }

    })
});
