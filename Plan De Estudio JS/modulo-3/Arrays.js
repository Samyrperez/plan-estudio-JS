/*

// ----------------------------  ..forEach()--------------------------
🧠 ¿Qué es .forEach()?
Es un método de los arrays que ejecuta una función por cada elemento del array.

📌 No devuelve un nuevo array. Solo recorre y ejecuta.

🧪 Sintaxis:
array.forEach(function(elemento, índice, array) {
  // lo que quieras hacer con cada elemento
});

-elemento: el valor actual del array.

-índice (opcional): posición del elemento.

-array (opcional): el array completo.

*/
// ✅ Ejemplo simple:
let frutas = ["manzana", "banana", "naranja"];

frutas.forEach(function(fruta, index) {
    console.log(`Fruta ${index + 1}: ${fruta}`);
});

// Salida:
// Fruta 1: manzana
// Fruta 2: banana
// Fruta 3: naranja


// ----------------------------  .map()--------------------------
/*
      .map()
🔷 ¿Qué hace .map()?
.map() crea un nuevo array aplicando una función a cada elemento del array original.
⚠️ No modifica el array original.

📌 Sintaxis:
const nuevoArray = arrayOriginal.map((elemento, índice, array) => {
  // return valor transformado
});

*/
// ✅ Ejemplo básico:
const numeros = [1, 2, 3, 4];
const dobles = numeros.map(num => num * 2);
console.log(dobles); // [2, 4, 6, 8]

// ✅ Ejemplo con objetos:

const productos = [
  { nombre: "Camisa", precio: 25 },
  { nombre: "Pantalón", precio: 40 },
  { nombre: "Zapatos", precio: 60 }
];

const preciosConIVA = productos.map(producto => {
  return {
    nombre: producto.nombre,
    precioConIVA: (producto.precio * 1.21).toFixed(2)
  };
});

console.log(preciosConIVA);


// ----------------------------  .filter()--------------------------
/*
      .filter()
🔍 ¿Qué hace .filter()?
Crea un nuevo array con los elementos que pasan una condición.

📌 Sintaxis básica:
const nuevoArray = arrayOriginal.filter(elemento => condición);

*/
// 🧠 Ejemplo rápido:
const numeros2 = [1, 5, 8, 10, 3];
const mayores = numeros2.filter(num => num > 5);
console.log(mayores); // [8, 10]

// ----------------------------  .find()--------------------------

/*
🔍 ¿Qué es .find()?
El método .find() te permite buscar el primer elemento de un array que cumple una condición y devuelve ese elemento (no un array como .filter()).
📌 Sintaxis:
const resultado = array.find(elemento => condición);
*/

// 🧠 Ejemplo simple:
const usuarios = [
  { nombre: "Sam", id: 1 },
  { nombre: "Luis", id: 2 },
  { nombre: "Ana", id: 3 }
];

const usuarioBuscado = usuarios.find(usuario => usuario.id === 2);

console.log(usuarioBuscado);
// Resultado: { nombre: 'Luis', id: 2 }



// ----------------------------  .sort()--------------------------
/*
sort()
sort() es un método de los arrays en JavaScript que te permite ordenar elementos, ya sea de forma alfabética o numérica, dependiendo de lo que necesites.

🧠 Sintaxis básica:
array.sort((a, b) => a - b); // Ordena de menor a mayor (números)
array.sort((a, b) => b - a); // Ordena de mayor a menor

🧪 Ejemplos rápidos:
✅ Números:
*/
// const numeros = [5, 2, 9, 1];
// numeros.sort((a, b) => a - b);
// console.log(numeros); // [1, 2, 5, 9]

// ✅ Strings (alfabéticamente):
// const nombres = ["Carlos", "Ana", "Luis"];
// nombres.sort(); 
// console.log(nombres); // ["Ana", "Carlos", "Luis"]

// ⚠️ OJO:
// Cuando sort() ordena strings, lo hace por orden Unicode, lo cual puede afectar acentos o mayúsculas/minúsculas. Para ordenar bien sin importar eso, se puede usar:

// nombres.sort((a, b) => a.localeCompare(b));

/*
localeCompare() es un método de los strings en JavaScript que se usa para comparar dos cadenas de texto teniendo en cuenta las reglas del idioma/localización. Es muy útil cuando quieres ordenar palabras alfabéticamente de forma correcta, especialmente si hay acentos, mayúsculas o caracteres especiales.

🧠 Sintaxis:
cadena1.localeCompare(cadena2)
📌 ¿Qué devuelve?
.....-1 si cadena1 va antes que cadena2

.....0 si son iguales

.....1 si cadena1 va después que cadena2

🧪 Ejemplo práctico:
*/
// const nombres = ["Álvaro", "andrés", "Ana"];

// nombres.sort((a, b) => a.localeCompare(b));

// console.log(nombres);
// Salida: ["Ana", "andrés", "Álvaro"]

// 🔤 Como puedes ver, localeCompare() ayuda a ordenar correctamente teniendo en cuenta acentos y mayúsculas.


// ----------------------------  .reduce()--------------------------
/*
🔹 ¿Qué es .reduce() en JavaScript?
El método .reduce() recorre un array y lo reduce a un único valor. Este valor puede ser:

--un número,
--un string,
--un array,
--o incluso un objeto, dependiendo de lo que quieras lograr.

🔧 Sintaxis
array.reduce((acumulador, elementoActual) => {
  // lógica
  return acumuladorActualizado;
}, valorInicial);
*/


// 🧠 Ejemplo 1: Sumar todos los números de un array

const numeros3 = [1, 2, 3, 4, 5];

const suma = numeros3.reduce((acumulador, numero) => {
  return acumulador + numero;
}, 0);

console.log(suma); // 15



// 🧠 Ejemplo 2: Contar cuántos candidatos hay por nivel
const niveles = ["Junior", "Senior", "Junior", "Semi-senior", "Senior"];

const conteo = niveles.reduce((acumulador, nivel) => {
  acumulador[nivel] = (acumulador[nivel] || 0) + 1;
  return acumulador;
}, {});

console.log(conteo); 
// { Junior: 2, Senior: 2, 'Semi-senior': 1 }


// 🧠 Ejemplo 3: Obtener el total de experiencia de los candidatos

const candidatos = [
  { nombre: "Ana", experiencia: 4 },
  { nombre: "Luis", experiencia: 2 },
  { nombre: "Sofía", experiencia: 6 }
];

const totalExperiencia = candidatos.reduce((acc, candidato) => {
  return acc + candidato.experiencia;
}, 0);

console.log(totalExperiencia); // 12

/*
✅ ¿Cuándo usar .reduce()?
Cuando tu objetivo es transformar un array en otra cosa (objeto, total, estructura distinta).

Cuando querés usar una única función que devuelva el resultado final.
*/

