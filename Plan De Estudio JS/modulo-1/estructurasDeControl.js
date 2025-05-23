// Estructuras de Control

// 1. if
// Usamos estas estructuras para ejecutar bloques de código según condiciones.
// Sintaxis
// if (condición) {
//     // código si la condición es verdadera
//   } else if (otraCondición) {
//     // otro bloque si la segunda condición es verdadera
//   } else {
//     // código si ninguna condición es verdadera
//   }

/*
let edad = 17;
if (edad >= 18) {
    console.log("Es mayor de edad")
} else {
    console.log("No es menor de edad")
}

let hora = 12

if (hora < 12) {
    console.log("Buenos dias")
}else if (hora < 18) {
    console.log("buenas tardes")
} else {
    console.log("Buenas noches")
}

let edad_usuario = 12

if (edad_usuario < 12) {
    console.log("Menor de edad")
}else if (hora >= 18 ) {
    console.log("mayor de Edad")
} else {
    console.log("Buenas noches")
}
    */

// 2. Switch 
// Cuando tenés muchas condiciones basadas en el mismo valor, switch es más limpio que varios if.
// Sintaxis:
/*
switch (valor) {
    case opción1:
      // código
        break;
    case opción2:
      // código
        break;
    default:
      // código si no hay coincidencias
}
*/
/*
let dia = prompt("Escribe el nombre del día");

switch (dia) {
    case "lunes":
        console.log("Comienza la semana");
        break;
    case "martes":
        onsole.log("segundo día de la semana");
        break;
    case "miercoles":
        onsole.log("tercer día de la semana");
        break;
    case "jueves":
        onsole.log("cuarto día de la semana");
        break;
    case "viernes":
        onsole.log("quinto día de la semana");
        break;
    case "sabado":
        console.log("sexto día de la semana");
        break;
    case "domingo":
        console.log("septimo día de la semana");
        break;
    default:
        console.log("Escriba un día valido")
}
*/

// 3. Bucles (Loops)
// for
// Permiten ejecutar código repetidamente.
// for (let i = 0; i < 5; i++) {
//     console.log("Iteracion", i)
// }

// While
// let  i = 0;
// while (i < 5) {
//     console.log("Contando", i);
//     i++;
// }

// do...while

// Ejecuta al menos una vez
// let i = 0;
// do {
//     console.log("Número", i);
//     i++;
// } while (i <= 5);

// 4. break y continue
// break: corta el ciclo.
// continue: salta la iteración actual.
// for (let i = 0; i < 10; i++) {
//     if (i === 5) break; // si se cumple para, orta el ciclo.
//     if (i % 2 === 0) continue; // salta la iteración actual.
//     console.log(i); // Imprime solo impares antes del 5
// }

/*
🧠 ¿Cómo se relaciona esto con React?
En React usarás estas estructuras para:
Mostrar contenido condicional con if, &&, o ternarios.
Iterar elementos con map() (por ejemplo: mostrar una lista).
Controlar estados y acciones (como eventos de clic).
*/

// PRACTICA DE CICLOS
// 1. Condicional con if/else:
let edad = 25;
// Muestra "Mayor de edad" si es >= 18, de lo contrario "Menor de edad"

if (edad >= 18) {
    console.log("Es mayor de edad");
} else {
    console.log("Menor de edad")
}
// 2. Switch con días de la semana:
// let dia = prompt("Ingresa el día de la semana");
// Muestra "Es fin de semana" o "Es día laboral"

// switch (dia) {
//     case "lunes":
//         console.log("Dia laboral");
//         break;
//     case "martes":
//         onsole.log("Dia laboral");
//         break;
//     case "miercoles":
//         onsole.log("Dia laboral");
//         break;
//     case "jueves":
//         onsole.log("Dia laboral");
//         break;
//     case "viernes":
//         onsole.log("Dia laboral");
//         break;
//     case "sabado":
//         console.log("Dia laboral");
//         break;
//     case "domingo":
//         console.log("Fin de semana");
//         break;
//     default:
//         console.log("Fin de semana")
// }

// Bucle for que imprima números del 10 al 1:
// Resultado: 10, 9, ..., 1    Es decir imprimirlos al reves


for (i = 10 ; i >= 1 ; i--) {
    console.log(i)
}


