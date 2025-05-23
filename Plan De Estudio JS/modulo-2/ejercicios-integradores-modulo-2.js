/*
📌 Ejercicios integradores:
Crea un menú con prompt donde el usuario elija:

a) Verificar si un número es par

b) Calcular promedio

c) Convertir texto a mayúscula

d) Salir
Usa funciones para cada opción.
*/

/*
let menu;

do {
    menu = prompt(
        "Elige una opción:\n" +
        "a) Verificar si un número es par.\n" +
        "b) Calcular promedio.\n" +
        "c) Convertir texto a mayúscula.\n" +
        "d) Salir."
    ).toLowerCase();
    switch (menu) {
        case "a":
            let numero = parseFloat(prompt("Introduce un número: "));
            function esParOImpar(numero) {
                    if (numero % 2 === 0) {
                        return "El número es par.";
                    } else {
                        return "El número es impar";
                    }
                }
            let resultado = esParOImpar(numero);
            console.log(resultado);
            break;
        case "b":
            let numero1 = parseFloat(prompt("Introduce el primer numero: "));
            let numero2 = parseFloat(prompt("Introduce el segundo numero: "));
    
            function promedio(numero1, numero2) {
                return (numero1 + numero2) / 2;
            }
            let resultadoPromedio = promedio(numero1, numero2)
            console.log(`El promedio es: ${resultadoPromedio}`);
            break;
        case "c":
            let texto = prompt("Introduce un texto: ");
    
            function convertirAMayusculas(texto) {
                return texto.toUpperCase();
            }
            let resultadoTexto = convertirAMayusculas(texto);
            console.log(`Tu nombre en mayusculas es: ${resultadoTexto}`);
            break;
        case "d":
            console.log("Saliendo del programa...");
            break;
        default:
            console.log("Opción no válida. Por favor, elige una opción del menú.");
            break;
    
    }
} while (menu !== "d");
*/

// 7. Crea una función que reciba un array de nombres y devuelva uno nuevo con solo los que empiezan con “M”.
// Integra: funciones + bucles + condicionales + arrays.

// let nombres = ["Mono","Malejo", "Pedro", "Alberto", "María", "Antonio", "Luis"];

// let nombresConM = [];

// function filtrarNombresConM(nombres) {
//     for (let i = 0; i < nombres.length; i++) {
//         if (nombres[i][0] === "M") {
//             nombresConM.push(nombres[i]);
//         } 
//     }
//     return nombresConM;
// }
// let resultado = filtrarNombresConM(nombres);
// console.log(resultado);


// 💡 Desafíos de repaso (opcional)
// 1. Contador de vocales
// Crea una función que reciba un texto y cuente cuántas vocales tiene.

// let texto = prompt("Introduce un texto: ");

// function contarVocales(texto) {
//     let contador = 0;
//     let textoMin = texto.toLowerCase(); //Convierte todo el texto a minúsculas.

//     for (let i = 0; i < textoMin.length; i++) {
//         let letra = textoMin[i];
//         if ("aeiou".includes(letra)) {
//             contador++;
//         }
//     }
//     return contador;
// }
// let resultado = contarVocales(texto);
// console.log((`Él texto tiene ${resultado} vocales.`));



// 2. Buscador en array
// Crea una función que reciba un nombre y un array, y diga si ese nombre está dentro del array (sin importar mayúsculas/minúsculas).
// let nombre = prompt("Introduce un nombre: ");
// let nombresArray = ["Samyr", "Andres", "Jorge", "Mario",];


// function buscarNombre(nombre, array) {
//     let nombreBuscado = nombre.toLowerCase();
//     for (let i = 0; i < array.length; i++) {
//         if (array[i].toLowerCase() === nombreBuscado) {
//             console.log("El nombre se encuentra en el array. ");
//             return; 
//         } else {
//             console.log("El nombre no se encuentra en el array.");
//         }
//     }
// }

// buscarNombre(nombre, nombresArray);


// 3. Nombres duplicados
// Crea una función que reciba un array y devuelva uno nuevo con los nombres que aparecen más de una vez.

let nombresArray = ["Samyr", "Samyr", "Andres", "Jorge", "Mario",];
let nombre = prompt("Introduce un nombre: ")

function buscarNombreDuplicado(nombre, array) {
    let nombreDuplicado = [];
    let contador = 0;
    
    for (let i = 0; i < array.length; i++) {
        if (array[i] === nombre) {
            nombreDuplicado.push(array[i]);
            contador++;
            
        } 
    } 

    if(contador > 1) {
        console.log(`El nombre ${nombre} se encuentra ${contador} veces en el array.`)
    } else if (contador === 1) {
        console.log(`El nombre ${nombre} se encuentra una vez en el array.`)
    } else {
        console.log(`El nombre ${nombre} no se encuentra en el array.`)
    }
}

buscarNombreDuplicado(nombre, nombresArray);
