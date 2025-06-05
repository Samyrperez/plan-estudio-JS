// ✅ Objetivo
// Una lista de tareas donde puedas:

// --Crear tareas

// --Listar tareas

// --Editar tareas

// --Eliminar tareas

// --Que las tareas persistan con localStorage

document.addEventListener("DOMContentLoaded", () => {
    // recibir los datos del formulario

    const formulario = document.getElementById('formulario-tarea');
    const inputTarea = document.getElementById('nueva-tarea');
    const listaTareas = document.getElementById('lista-tareas');

    let tareas = JSON.parse(localStorage.getItem('tareas')) || [];
    /*
    ¿Qué hace?
    -Intenta obtener las tareas desde localStorage.
    -localStorage.getItem('tareas') devuelve un string JSON (si existe).
    -JSON.parse(...) lo convierte en un array de JavaScript.
    -Si no hay nada guardado, usa un array vacío ([]).
    */

    function guardarTareas (localStorage) {
        localStorage.setItem('tareas', JSON.stringify(tareas));
    }
    //¿Qué hace?
    // Convierte el array de tareas a texto JSON.
    // Lo guarda en el navegador con localStorage.

    function renderTareas() {
        
    }

})