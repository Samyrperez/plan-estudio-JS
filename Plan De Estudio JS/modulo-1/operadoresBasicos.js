// 1.  Aritméticos
//  +, -, *, /, %


// 2.  Operadores de Comparación

// | Operador |                Significado                 |Ejemplo | Resultado |
// |----------|--------------------------------------------|---------|-----------|
// | `==`     | Igualdad débil (compara valor, no tipo)    |`5 == "5"` | `true` |
// | `===`    | Igualdad estricta (compara valor y tipo)   |`5 === "5"`| `false` |
// | `!=`     | Desigualdad débil                          |`5 != "5"` | `false` |
// | `!==`    | Desigualdad estricta                       |`5 !== "5"`| `true` |
// | `>`      | Mayor que                                  | `8 > 5`   | `true` |
// | `<`      | Menor que                                  | `2 < 1`  | `false` |
// | `>=`     | Mayor o igual que                          | `5 >= 5` | `true` |
// | `<=`     | Menor o igual que                          | `3 <= 2` | `false` |

let comparacion1 = 50;
let comparacion2 = "50";

// Diferencia entre igualdad estricta como === y debil ==
// Igualdad débil (compara valor, no tipo)
let igualdad1 = (comparacion1 == comparacion2)
console.log(igualdad1); // true porque comparo valores mas no tipo de dato

// Igualdad estricta (compara valor y tipo)
let igualdad2 = (comparacion1 === comparacion2);
console.log(igualdad2);// false porque es mas estricto y comparo valores y tipo de dato

// Diferencia entre desigualdad estricta como !== y debil !=
// Es algo parecido a la diferencia entre los operadores de igualdad

// Desigualdad débil
let desigualdad1 = (comparacion1 != comparacion2)
console.log(desigualdad1) // false debido a que este no compara los tipos de datos, solo el valor, por eos no son diferentes

// Desigualdad estricta
let desigualdad2 = (comparacion1 !== comparacion2)
console.log(desigualdad2) // true debido a que este  compara los tipos de datos y  valor, por eos son diferentes


// 3. Operadores Lógicos
/*
| Operador | Nombre |                      Significado                  |     Ejemplo     | Resultado |
|----------|--------|---------------------------------------------------|-----------------|-----------|
| `&&`     | AND    | Verdadero si **ambas** condiciones son verdaderas | `true && false` | `false` |
| `||`     | OR     | Verdadero si **al menos una** condición es verdadera | `false || true` | `true` |
| `!`      | NOT    | Invierte el valor                                 |     `!true`       | `false` |
*/

// let edad  = 10;
// let tieneID = true;

// AND Solo impirmirá si la edad es mayoro igual  a 18 o si tieneID es true, de lo contrario imprimirá la segunda opción
// if (edad >= 18 && tieneID){
//     console.log("Puede entrar")
// } else {
//     console.log("No puede entrar")
// }


// 4.  Operador Ternario (condición ? expr1 : expr2)
// Sintaxis: condición ? valor_si_verdadero : valor_si_falso
let edad = 17;
let mensaje = edad >= 17 ? "Mayor de edad" : "Menor de edad";
console.log(mensaje)

// Ejemplo Anidado
let nota = 70;
let resultado = nota >= 90 
    ? "Excelente"
    : nota >= 70 // Si es mayor o igual a 70 será aprobado
    ? "Aprobado"
    : "Reprobado"; // Si no cumple ninguna será Reprobado

console.log(resultado)

let usuario = "Sam";
let mensajeLogin = usuario === "Sam" ? "Bienvenido Sam, acceso permitido" : "Acceso no permitido";
console.log(mensajeLogin)

let edadPersona = 17;
let permiso = false;
let mensajePermiso = edadPersona >= 18 ? "Acceso permitido" : "Acceso no permitido";
console.log(mensajePermiso)

