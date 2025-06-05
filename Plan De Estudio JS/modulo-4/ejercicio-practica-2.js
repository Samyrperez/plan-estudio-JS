/*

🧪 Ejercicio: Lista de productos con edición en tabla
🎯 Objetivo:
Crear un sistema donde puedas:

--Agregar productos (nombre, precio y cantidad)

--Editarlos directamente en la tabla

--Eliminar productos
*/

document.addEventListener("DOMContentLoaded", () => {
    const productoInput = document.getElementById('producto');
    const precioInput = document.getElementById('precio');
    const cantidadInput = document.getElementById('cantidad');
    const botonAgregar = document.getElementById('agregar-producto');
    const tabla = document.querySelector('#tabla-productos tbody'); //Usa querySelector('#id etiqueta') si estás buscando dentro de un contenedor.


    botonAgregar.addEventListener('click', (e) => {
        e.preventDefault(); // para evitar que el formulario recargue la página

        const producto = productoInput.value.trim();
        const precio = precioInput.value.trim();
        const cantidad = cantidadInput.value.trim();

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

    tabla.addEventListener('click', (e) => {
        const boton = e.target;
        const fila = boton.closest('tr');
        const celdas = fila.querySelectorAll('td');

    // Editar
        if(boton.classList.contains('editar')) {
            const producto = celdas[0].textContent;
            const precio = celdas[1].textContent;
            const cantidad = celdas[2].textContent;

            celdas[0].innerHTML = `<input type="text" value="${producto}">`;
            celdas[1].innerHTML = `<input type="number" value="${precio}">`;
            celdas[2].innerHTML = `<input type="number" value="${cantidad}">`;

            // Se cambia el botón de editar A guardar
            boton.textContent = 'Guardar';
            boton.classList.replace('editar', 'guardar');

            // Guardar
        } else if(boton.classList.contains('guardar')) {
            const inputs = fila.querySelectorAll('input');
            const nuevoProducto = inputs[0].value.trim();
            const nuevoPrecio = inputs[1].value.trim();
            const nuevoCantidad = inputs[2].value.trim();

            celdas[0].textContent = nuevoProducto;
            celdas[1].textContent = nuevoPrecio;
            celdas[2].textContent = nuevoCantidad;

            // Se cambia el botón de guardar a Editar
            boton.textContent = 'Editar';
            boton.classList.replace('guardar', 'editar');


        } else if(boton.classList.contains('eliminar')) {
            fila.remove();
        }

    })
});
