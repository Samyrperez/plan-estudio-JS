// 🧪 Ejercicios del Módulo 2
// 📌 Ejercicios base:
// 1. Crea una función que reciba un número y diga si es par o impar.

// let numero = parseFloat(prompt("Introduce un número: "));

// function esParOImpar(numero) {
//     if (numero % 2 === 0) {
//         return "El número es par.";
//     } else {
//         return "El número es impar";
//     }
// }
// let resultado = esParOImpar(numero);
// console.log(resultado)

// 2. Crea una función que reciba dos números y devuelva su promedio.

// let numero1 = parseFloat(prompt("Introduce el primer número: "));
// let numero2 = parseFloat(prompt("Introduce el segundo número: "));
// function promedio(numero1, numero2) {
//     return (numero1 + numero2) / 2;
// }
// let resultadoPromedio = promedio(numero1, numero2);
// console.log("El promedio es: " + resultadoPromedio);

// 3. Crea una función que reciba un texto y devuelva cuántas letras tiene.

// let texto = prompt("Introduce un texto: ");
// function contarLetras(texto) {
//     return texto.length;
// }
// let resultadoTexto = contarLetras(texto);
// console.log(`El texto tiene ${resultadoTexto} letras`)

// 4. Crea una función que reciba un nombre y lo devuelva en mayúsculas.

// let nombre = prompt("Introduce tu nombre: ");

// function convertirAMayusculas(nombre) {
//     return nombre.toUpperCase();
// }
// let resultadoNombre = convertirAMayusculas(nombre);
// console.log(`Tu nombre en mayusculas es: ${resultadoNombre}`);

// 5. Crea una función que reciba el año de nacimiento y devuelva la edad.

let anioNacimiento = parseInt(prompt("Intruduce tu año de nacimiento: "));
function calculadoraEdad(anioNacimiento) {
    // let diaActual = new Date().getDate();
    // let mesActual = new Date().getMonth() + 1; // Los meses empiezan desde 0
    let anioActual = new Date().getFullYear();

    return anioActual- anioNacimiento;
}

let resultadoEdad = calculadoraEdad(anioNacimiento);
console.log(`Tú edad es: ${resultadoEdad}`);
