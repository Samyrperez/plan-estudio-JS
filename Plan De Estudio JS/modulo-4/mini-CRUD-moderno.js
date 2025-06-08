document.addEventListener("DOMContentLoaded", () => {
    const tareas = JSON.parse(localStorage.getItem("tareas")) || [];
    const lista = document.getElementById("lista-tareas");
    const input = document.getElementById("tarea-input");
    const boton = document.getElementById("agregar-btn");

    function guardarTareas() {
        localStorage.setItem("tareas", JSON.stringify(tareas));
    }

    function renderTareas() {
        lista.innerHTML = "";
        tareas.forEach((tarea, index) => {
            const li = document.createElement("li");
            li.className = "tarea" + (tarea.completada ? " completada" : "");
            li.innerHTML = `
                <span>${tarea.texto}</span>
                <div class="acciones">
                    <div class="switch-completar ${tarea.completada ? "activo" : ""}"></div>
                    <button class="eliminar">🗑</button>
                </div>
            `;


            // Completar
            li.querySelector(".switch-completar").addEventListener("click", () => {
                tareas[index].completada = !tareas[index].completada;
                guardarTareas();
                renderTareas();
            });


            // Eliminar
            li.querySelector(".eliminar").addEventListener("click", () => {
                tareas.splice(index, 1);
                guardarTareas();
                renderTareas();
            });

            lista.appendChild(li);
        });
    }

    boton.addEventListener("click", () => {
        const texto = input.value.trim();
        if (texto === "") return;

        tareas.push({ texto, completada: false });
        guardarTareas();
        renderTareas();
        input.value = "";
    });

    renderTareas();
});
