/*
🧠 Objetivo del Módulo:
Entender cómo declarar, invocar y usar funciones correctamente, qué es el scope (ámbito de las variables) y cómo se comportan los valores dentro y fuera de una función.

🔹 1. ¿Qué es una función?
Una función es un bloque de código reutilizable que realiza una tarea específica.
✅ Cuando necesitas reutilizar funciones y quieres que estén disponibles en todo el archivo (hoisting)
*/
// function saludar() {
//     console.log("Hola, Sam!");
// }
// saludar(); // Llama (ejecuta) la función

// 🔹 2. Parámetros y argumentos
// function sumar(a, b) {
//     console.log(a + b);
// }
// sumar(5,3);



// 🔹 3. Función con retorno (return)
// function multiplicar(x, y) {
//     return x * y;
// }
// let resultado  = multiplicar(4, 5);
// console.log(resultado); 
/*
🔁 ¿Cuándo usar return?
Usa return cuando:

1. Quieres guardar un valor para usarlo más adelante:
function obtenerNombre() {
    return "Sam";
}
let nombre = obtenerNombre();
console.log(nombre); // "Sam"

2. Necesitas que una función te dé una respuesta (como en cálculos, validaciones, consultas):
function esMayorDeEdad(edad) {
    return edad >= 18;
}
if (esMayorDeEdad(20)) {
    console.log("Puedes votar");
}


3. Quieres componer funciones (usar una función dentro de otra):

function doble(x) {
    return x * 2;
}
function tripleDelDoble(x) {
    return doble(x) * 3;
}


❌ ¿Cuándo NO usar return?
No uses return cuando:

Solo estás mostrando algo (por ejemplo con console.log) y no necesitas devolver nada:

function saludar(nombre) {
  console.log("Hola " + nombre); // no se necesita return
}
saludar("Sam");
Estás haciendo tareas como modificar el DOM, mostrar alertas, guardar datos, etc.

🧠 Reglas clave
| Caso                                         | ¿Usar `return`? | Ejemplo simple                     |
|---------------------------------------------|------------------|------------------------------------|
| Mostrar algo al usuario (`console.log`, etc.) | ❌ No             | `console.log("Hola")`              |
| Guardar o reutilizar un valor                | ✅ Sí             | `return resultado`                 |
| Validar condiciones                          | ✅ Sí             | `return edad >= 18`                |
| Ejecutar acciones sin devolver datos         | ❌ No             | `alert("Hecho!")`                  |
*/

// 🔹 4. Funciones anónimas y de flecha (arrow functions)

// Función anónima asignada a una variable
// const restar = function(a, b) {
//     return a - b;
// };

//   // Arrow function
// const dividir = (a, b) => a / b;

// console.log(restar(5, 2)); // 3
// console.log(dividir(10, 2)); // 5

// ✅ Para funciones rápidas, callbacks (o función de retorno), y cuando no necesitas this. Ideal en funciones modernas.


// 🔹 5. Scope (ámbito)
// Scope define el contexto donde una variable es accesible.

// Hay 3 tipos de scope: global, local y bloque.
// 1. Scope global: Accesible en todo el archivo.
// 2. Scope local: Accesible solo dentro de la función donde se declara.
// 3. Scope de bloque: Accesible solo dentro de un bloque (como un if o un bucle).

// let nombre = "Sam"; // Scope global

// function mostrarNombre() {
//     let saludo = "Hola";
//   console.log(saludo + " " + nombre); // puede acceder a `nombre`
// }
// mostrarNombre();

// console.log(saludo); // ❌ Error: fuera del scope
