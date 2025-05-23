
// 📌 PARTE 1: Seleccionar elementos del DOM

// 1. document.querySelector()
// Selecciona el primer elemento que coincida con el selector CSS.

const boton = document.querySelector('#btnEnviar'); // por ID
const parrafo = document.querySelector('.mensaje'); // por clase
const input = document.querySelector('input[type="text"]'); // selector complejo

// 2. document.querySelectorAll()
// Selecciona todos los elementos que coincidan.

const botones = document.querySelectorAll('.boton');
botones.forEach(boton => console.log(boton.textContent));



// 📌 PARTE 2: Modificar elementos del DOM

// 1. element.innerHTML
// Modifica el contenido HTML interno.

parrafo.innerHTML = '<strong>Gracias por tu mensaje</strong>';

// 2. element.textContent
// Solo modifica el texto, sin interpretar HTML.
parrafo.textContent = 'Mensaje enviado correctamente';

// 3. element.classList
// Agrega, quita, o alterna clases CSS dinámicamente.
boton.classList.add('activo');
boton.classList.remove('deshabilitado');
boton.classList.toggle('activo'); // agrega si no está, remueve si ya está


// 📌 PARTE 3: Eventos y addEventListener()
// Escuchar eventos del usuario
boton.addEventListener('click', () => {
    console.log('Clickeaste el botón');
});

// Eventos comunes:

// --click

// --submit

// --input

// --change

// --keydown, keyup

// --mouseover, mouseout

// 📌 PARTE 4: Propagación de eventos (bubbling vs capturing)
// Importancia:
// A veces se hace clic en un botón dentro de un div, pero el evento también lo escucha el div.
// Eso es propagación.

document.querySelector('#padre').addEventListener('click', () => {
    console.log('click en padre');
});

document.querySelector('#hijo').addEventListener('click', (e) => {
    e.stopPropagation(); // evita que el padre escuche este evento
    console.log('click en hijo');
});
