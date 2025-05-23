// 1. 🧮Calculadora básica:
// Crea un programa que pida dos números y una operación (+, -, *, /) y devuelva el resultado.

// alert("Bienvenido a la calculadora basica")
// let continuar;

// do {
//     let operacion = prompt("Ingresa una operación (+, -, *, /)").trim();
//     let num1 = parseFloat(prompt("Ingrese el primer núemero: "));
//     let num2 = parseFloat(prompt("Ingrese el segundo número: "));


//     switch (operacion) {
//         case "+":
//             console.log(`La suma entre ${num1} y ${num2} es:`, num1 + num2);
//             break;
//         case "-":
//             console.log(`La resta entre ${num1} y ${num2} es:`, num1 - num2);
//             break;
//         case "*":
//             console.log(`La multiplicación entre ${num1} y ${num2} es:`, num1 * num2);
//             break;
//         case "/":
//             console.log(`La división entre ${num1} y ${num2} es:`, num1 / num2);
//             break;
//         default:
//             console.log("Operación no valida. por favor ingrese una operación valida (+, -, *, /)");
//             break;
//     }

//     continuar = prompt("¿Desea hacer otra operación? (si/no)").toLowerCase();

// } while (continuar === "si")


// 2. ➗ Número par o impar

// Pide al usuario un número y muestra si es par o impar.

// let continuar;
// alert("Bienvenido a la calculadora de par e impar")
// do {
//     let numero = parseInt(prompt("Ingrese un número: "));

//     if (numero % 2 === 0) {
//         alert(`El número ${numero} es par`);
//     } else {
//         alert(`El número ${numero} es impar`);
//     }

//     continuar = prompt("¿Desea continúar  con el programa? (si/no)".toLocaleLowerCase());

// } while (continuar === "si")


// 3. 🔤 Nombres con A

// Dado un array de nombres, muestra solo los que comienzan con la letra “A” (usa startsWith() o índice 0 del string).

let nombres = ["Ana","Andres", "Pedro", "Alberto", "María", "Antonio", "Luis"];

// con for/if

// let nombresConA = [];

// for (let i = 0; i < nombres.length; i++) {
//     if (nombres[i][0] === "A" ){
//         nombresConA.push(nombres[i]);
//     }

//     // También podria usar :if (nombres[i].startsWith("A")) {, es mas legible

// }
// console.log("Nombres que comienzan con A: ", nombresConA);


// Con filter()
// let nombresConA = nombres.filter((nombre) => nombre.startsWith("A"));
// console.log("Los nombres que empiezan por A son: ", nombresConA);

// Explicación:
// .filter() recorre cada nombre del array.

// Solo incluye los que empiezan con "A" (nombre.startsWith("A")).

// El resultado se guarda en nombresConA.


// 4. 🔢 Contador

// Usa un bucle for para contar del 1 al 10 e imprimir cada número en consola.

// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }
