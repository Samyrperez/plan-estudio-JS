// 1. 💵 Calculadora extendida
// Igual a la del grupo A, pero ahora debe:

// Validar que los números no sean NaN

// No permitir división entre 0

// Preguntar si quiere hacer otra operación al final (usando un bucle while o do...while)


// alert("Bienvenido a la calculadora basica")
// let continuar;

// do {
//     let operacion = prompt("Ingresa una operación (+, -, *, /)").trim();
//     let num1 = parseFloat(prompt("Ingrese el primer núemero: "));
//     let num2 = parseFloat(prompt("Ingrese el segundo número: "));

//     if (isNaN(num1) || isNaN(num2)) {
//         console.log("Por favor ingrese números válidos.");
//         continuar = prompt("¿Desea hacer otra operación? (si/no)").toLowerCase();
//         continue;
//     }

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
//             if (num2 === 0) {
//                 console.log("No se puede dividir entre 0.");
//                 continuar = prompt("¿Desea hacer otra operación? (si/no)").toLowerCase();
//                 continue;
//             } else {
//                 console.log(`La división entre ${num1} y ${num2} es:`, num1 / num2);
//             }
//             break;
//         default:
//             console.log("Operación no valida. por favor ingrese una operación valida (+, -, *, /)");
//             break;
//     }

//     continuar = prompt("¿Desea hacer otra operación? (si/no)").toLowerCase();

// } while (continuar === "si")



// 2. 🔁 Contador inverso
// Pedí al usuario un número y contá hacia atrás hasta 0.
// Ejemplo: Si escribe 5, mostrar 5, 4, 3, 2, 1, 0. 

// let numUsuario = parseInt(prompt("Ingrese un número: "));

// for (let i = numUsuario; i >= 0; i--) {
//     console.log(i);
// }




// 3. 🔢 Múltiplos de un número
// Mostrar todos los múltiplos de 3 del 1 al 50.
// Bonus: ¿Y si querés que funcione para cualquier número?


// let numeroMultiplo = parseInt(prompt("Ingrese un número:"));

// if (isNaN(numeroMultiplo) || numeroMultiplo === 0) {
//     console.log("Por favor ingrese un número válido.");
    
// } else {
//     for (let i = 0 ; i <= 50; i++)  {
//         if( i % numeroMultiplo === 0) {
//             console.log(`El número ${i} es multiplo de ${numeroMultiplo}`);
//         }
//     }
// }


// 4. 🔡 Reversor de texto
// Pedí una palabra al usuario y mostrála al revés.
// Ejemplo: "Hola" → "aloH"

// Métodos útiles para este ejercicio:
// .split("")
// Convierte una cadena en un array de caracteres.

// .reverse()
// Invierte un array in situ (modifica el original).

// .join("")
// Une los elementos de un array en una sola cadena.

// let palabra = prompt("Ingresa una palabra:");
// let palabraInvertida = palabra.split("").reverse().join("");
// console.log("Palabra invertida:", palabraInvertida);


// 👶 Edad mínima para votar
// Pedí una edad y decí si puede votar (mayores o iguales a 18).
// Bonus: agregá otro caso si tiene menos de 0 (edad inválida).

let edad = parseInt(prompt("Ingrese su edad: "));

for (let i = 0; i < 1; i++) {
    if (isNaN (edad) || edad < 0) {
        console.log("Por favor ingrese una edad valida.")
    } else if(edad >=18) {
        console.log("Puede votar")
    } else {
        console.log("No puede votar")
    }
}