/*

💪 Vamos a hacer un ejercicio de práctica integral con todo lo que has aprendido hasta ahora sobre manipulación del DOM, incluyendo:

--Lectura de inputs

--Creación dinámica de elementos (tr, td)

--Manejo de eventos (click)

--Limpieza de campos

--Edición y eliminación dinámica

🧠 Ejercicio: Registro de Mascotas
Crea una pequeña app que permita:

-Objetivo:
Crear un pequeño sistema de registro que permita al usuario ingresar datos de mascotas y mostrarlos dinámicamente en una tabla.

🎯 Requisitos:
1. Inputs necesarios:

--Nombre de la mascota (texto)

--Tipo de mascota (Perro o Gato) – puede ser con <select> o un input

--Edad de la mascota (número)

2. Botón "Agregar mascota" que:

--Verifique que todos los campos estén llenos.

--Cree una nueva fila (<tr>) en una tabla.

--Limpie los campos después de registrar.

3. Tabla HTML que muestre:

--Nombre | Tipo | Edad | Acciones

4. En cada fila debe haber un botón de:

--🖊️ Editar: Rellena el formulario con los datos de esa fila.

--🗑️ Eliminar: Quita la fila de la tabla.
*/



document.addEventListener('DOMContentLoaded', () => {
    const nombreInput = document.getElementById('nombre');
    const tipoInput = document.getElementById('tipo');
    const edadInput = document.getElementById('edad');
    const botonAgregar = document.getElementById('agregar');
    const tabla = document.querySelector('#tabla-mascotas tbody');

    // Agregar fila a la tabla
    botonAgregar.addEventListener('click', () => {
        const nombre = nombreInput.value.trim();
        const tipo = tipoInput.value.trim();
        const edad = edadInput.value.trim();

        // Valido que los campos estén llenos
        if (nombre === '' || tipo === '' || edad === '') {
            alert("Debe llenar todos los campos");
            return;
        }

        const fila = document.createElement('tr');

        fila.innerHTML = `
            <td>${nombre}</td>
            <td>${tipo}</td>
            <td>${edad}</td>
            <td>
                <button class="editar">Editar</button>
                <button class="eliminar">Eliminar</button>
            </td>
        `;

        tabla.appendChild(fila);

        // Limpiar inputs
        nombreInput.value = '';
        tipoInput.value = '';
        edadInput.value = '';
    });

    // Delegación para Editar / Guardar / Eliminar
    tabla.addEventListener('click', (e) => {
        const boton = e.target;
        const fila = boton.closest('tr');
        const celdas = fila.querySelectorAll('td');

        // Editar
        if (boton.classList.contains('editar')) { // .classList.contains si tiene una clase especifica
            const nombre = celdas[0].textContent;
            const tipo = celdas[1].textContent;
            const edad = celdas[2].textContent;

            celdas[0].innerHTML = `<input type="text" value="${nombre}">`;
            celdas[1].innerHTML = `<input type="text" value="${tipo}">`;
            celdas[2].innerHTML = `<input type="number" value="${edad}">`;

            boton.textContent = 'Guardar';
            boton.classList.replace('editar', 'guardar');
        }

        // Guardar cambios
        else if (boton.classList.contains('guardar')) { 
            const inputs = fila.querySelectorAll('input');
            const nuevoNombre = inputs[0].value.trim();
            const nuevoTipo = inputs[1].value.trim();
            const nuevaEdad = inputs[2].value.trim();

            celdas[0].textContent = nuevoNombre;
            celdas[1].textContent = nuevoTipo;
            celdas[2].textContent = nuevaEdad;

            boton.textContent = 'Editar';
            boton.classList.replace('guardar', 'editar');
        }

        // Eliminar fila
        else if (boton.classList.contains('eliminar')) {
            fila.remove();
        }
    });
});

/*

🧠 ¿Qué aprendiste en este ejercicio?

| Función / método               | Ejemplo                                  | ¿Para qué sirve?                                       |
| ------------------------------ | ---------------------------------------- | ------------------------------------------------------ |
| `document.getElementById`      | `getElementById('nombre')`               | Obtener un input o elemento por su ID                  |
| `document.createElement`       | `createElement('tr')`                    | Crear elementos nuevos en el DOM                       |
| `element.innerHTML`            | `fila.innerHTML = ...`                   | Insertar contenido HTML dentro de un elemento          |
| `element.textContent`          | `celda.textContent = 'nuevo'`            | Modificar el texto dentro de un nodo                   |
| `element.appendChild`          | `tabla.appendChild(fila)`                | Agrega un nuevo hijo al DOM                            |
| `element.closest()`            | `target.closest('tr')`                   | Subir en el DOM para encontrar el ancestro más cercano |
| `element.classList.contains()` | `classList.contains('editar')`           | Verifica si un botón tiene una clase específica        |
| `classList.replace()`          | `classList.replace('guardar', 'editar')` | Reemplaza una clase por otra                           |
| `input.value`                  | `input.value.trim()`                     | Accede al valor de un input y le quita espacios        |

*/