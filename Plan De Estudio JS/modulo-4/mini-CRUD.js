// ✅ Objetivo
// Una lista de tareas donde puedas:
// --Crear tareas
// --Listar tareas
// --Editar tareas
// --Eliminar tareas
// --Que las tareas persistan con localStorage

document.addEventListener("DOMContentLoaded", () => {
    // recibir los datos del formulario
// 📦 1. DOM y variables principales
    const formulario = document.getElementById('formulario-tarea');
    const inputTarea = document.getElementById('nueva-tarea');
    const listaTareas = document.getElementById('lista-tareas');
// 💾 2. Cargar tareas desde localStorage (si existen)
    let tareas = JSON.parse(localStorage.getItem('tareas')) || [];
    /*
    ¿Qué hace?
    -Intenta obtener las tareas desde localStorage.
    -localStorage.getItem('tareas') devuelve un string JSON (si existe).
    -JSON.parse(...) lo convierte en un array de JavaScript.
    -Si no hay nada guardado, usa un array vacío ([]).
    */

    // 💽 3. Función para guardar tareas
    function guardarTareas () {
        localStorage.setItem('tareas', JSON.stringify(tareas));
    }
    //¿Qué hace?
    // Convierte el array de tareas a texto JSON.
    // Lo guarda en el navegador con localStorage.

    // 📋 4. Función para mostrar las tareas en pantalla
    function renderTareas() {
        listaTareas.innerHTML = ''; // Limpia la lista 
        tareas.forEach((tarea, index) => { //Recorre todas las tareas
            const li = document.createElement('li');
            // Crea un <li> por cada tarea con botones de Editar y Eliminar
            // data-index="${index}": guarda el índice de la tarea en un atributo HTML, útil para saber cuál se quiere editar/eliminar.
            li.innerHTML = ` 
                <span>${tarea}</span>
                <button class="editar" data-index="${index}">Editar</button>
                <button class="eliminar" data-index="${index}">Eliminar</button>
            `;
            listaTareas.appendChild(li);
        });
    }

    // ➕ 5. Agregar tarea al presionar "Agregar"
    formulario.addEventListener('submit', (e) => {
        e.preventDefault();
        const nuevaTarea = inputTarea.value.trim();

    // Validación
        if (nuevaTarea === '') {
            alert("La tarea no puede estar vacia");
            return;
        }

        tareas.push(nuevaTarea);        // agrega al array
        guardarTareas();                // guarda en localStorage
        renderTareas();                 // muestra en pantalla
        formulario.reset();             // limpia el input
    })

    // ✏️ 6. Editar o Eliminar tarea con delegación de eventos
    listaTareas.addEventListener('click', (e) => {
        const index = e.target.dataset.index; // e.target es el botón que fue clicado.dataset.index recupera el índice guardado.

        // 🗑️ Si se hace clic en Eliminar
        if (e.target.classList.contains('eliminar')) {
            tareas.splice(index, 1); // Esto se usa para eliminar una tarea del array tareas. array.splice(inicio, cantidad)
            // inicio: posición donde empieza a eliminar.
            // cantidad: cuántos elementos eliminar desde esa posición.
            guardarTareas();
            renderTareas();
        }

        // 📝 Si se hace clic en Editar
        if(e.target.classList.contains('editar')) {
            const nuevaTarea = prompt('edita la tarea:', tareas[index]);
            if(nuevaTarea !== null && nuevaTarea.trim() !== '') {
                tareas[index] = nuevaTarea.trim();
                guardarTareas();
                renderTareas();
            }
        }
    })

})