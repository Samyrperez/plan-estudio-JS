/*

EJERCICIOS ARRAYS


// ----------------------------  ..forEach()--------------------------

🧩 Reto para ti:
Dado el siguiente array de nombres:
let nombres = ["Sam", "Luis", "Ana", "Lucía"];
Crea un forEach que imprima:
Hola, Sam
Hola, Luis
Hola, Ana
Hola, Lucía

*/
/*
let nombres = ["Sam", "Luis", "Ana", "Lucía"];

nombres.forEach(nombre => {
    console.log(`Hola, ${nombre}`)
});
*/

/*
🧩 Reto: Lista de tareas
Tienes el siguiente array de objetos que representa una lista de tareas:


*/
let tareas = [
    { descripcion: "Estudiar JavaScript", completado: true },
    { descripcion: "Hacer ejercicio", completado: false },
    { descripcion: "Leer un libro", completado: true },
    { descripcion: "Ordenar el cuarto", completado: false }
];

/*
🎯 Objetivo:
Usa .forEach() para mostrar un mensaje por cada tarea. El mensaje debe ser:

--Si la tarea está completada: ✅ "La tarea '[descripción]' ya está completada."

--Si no está completada: ❌ "La tarea '[descripción]' está pendiente."
*/

/*

tareas.forEach(tarea => {
    if( tarea.completado === true){
        return console.log(`La tarea ${tarea.descripcion} ya está completada`)
    } else {
        console.log(`La tarea ${tarea.descripcion} está pendiente`)
    }
})

*/

/*
🧠 Reto: Gestión de estudiantes y notas
Tienes un array de estudiantes. Cada estudiante es un objeto con su nombre, nota y si está aprobado o no.
*/
let estudiantes1 = [
    { nombre: "Sam", nota: 8, aprobado: false },
    { nombre: "Luis", nota: 5, aprobado: false },
    { nombre: "Ana", nota: 9, aprobado: false },
    { nombre: "Lucía", nota: 4, aprobado: false }
];
/*
🎯 Tu objetivo:
1. Usando .forEach(), recorre el array.

2. Si la nota es mayor o igual a 6, actualiza aprobado a true.

3. Muestra en consola un mensaje como:

    ✅ Sam ha aprobado con nota 8.

    ❌ Lucía ha reprobado con nota 4.
*/


estudiantes1.forEach(estudiante => {
    if (estudiante.nota >= 6) {
        estudiante.aprobado = true;
        console.log(`${estudiante.nombre} ha aprobado con una nota de ${estudiante.nota}`);
    } else {
        estudiante.aprobado = false;
        console.log(`${estudiante.nombre} ha reprobado con una nota de ${estudiante.nota}`);
    }
});



// ----------------------------  .map()--------------------------
// EJERCICIOS MAP
/*
🎯 Reto para ti con .map()
Dado este array:
const estudiantes = [
    { nombre: "Sam", nota: 8 },
    { nombre: "Luis", nota: 5 },
    { nombre: "Ana", nota: 9 }
];

Tu reto: Usa .map() para crear un nuevo array que contenga objetos con:

--El mismo nombre

--Una nueva propiedad estado con el valor "Aprobado" si la nota es mayor o igual a 6, o "Reprobado" si no.
*/

// const estudiantes = [
//     { nombre: "Sam", nota: 8 },
//     { nombre: "Luis", nota: 5 },
//     { nombre: "Ana", nota: 9 }
// ];

// const estudiantesAprobados = estudiantes.map(estudiante => {
//     return {
//         nombre: estudiante.nombre,
//         nota: estudiante.nota,
//         estado: estudiante.nota >= 6 ? "Aprobado" : "Reprobado"
//     }

// })
// console.log(estudiantesAprobados);

/*
💪 Reto .map(): Calculadora de Precios Finales
Tienes un array de productos con su precio original y si tienen descuento o no. Tu misión es usar .map() para crear un nuevo array que incluya:

--nombre del producto

--precio original

--precio final (aplicando 20% de descuento si tieneDescuento es true)
*/

// const productos = [
//     { nombre: "Zapatos", precio: 100, tieneDescuento: true },
//     { nombre: "Camisa", precio: 60, tieneDescuento: false },
//     { nombre: "Pantalón", precio: 80, tieneDescuento: true }
// ];

// const productosConDescuentos = productos.map(producto => {
//     return {
//         nombre: producto.nombre,
//         precioOriginal: producto.precio,
//         precioFinal: producto.tieneDescuento === true ? producto.precio * 0.80 : producto.precio
//     }
// })
// console.log(productosConDescuentos)


/*
🧠 Reto: Convertir nombres y edades a un nuevo formato
Tienes un arreglo de personas con sus nombres y edades. Tu tarea es usar .map() para crear un nuevo arreglo con objetos que tengan estas propiedades:

--nombre: en mayúsculas.

--edad: igual que la original.

--mayorDeEdad: true si la edad es mayor o igual a 18, si no false.
*/

// 🔹 Datos de entrada:
// const personas = [
//     { nombre: "sam", edad: 22 },
//     { nombre: "luis", edad: 17 },
//     { nombre: "ana", edad: 30 },
//     { nombre: "lucía", edad: 15 }
// ];

// const newPersonas = personas.map(persona => {
//     return {
//         nombre: persona.nombre.toUpperCase(),
//         edad: persona.edad,
//         mayorDeEdad: persona.edad >= 18 
//     }

// })

// console.log(newPersonas)



// ----------------------------  .filter()--------------------------
/*
🎯 Reto para ti con .filter():

Tienes este array de personas:
*/
// const personas = [
//     { nombre: "Sam", edad: 22 },
//     { nombre: "Luis", edad: 17 },
//     { nombre: "Ana", edad: 30 },
//     { nombre: "Lucía", edad: 15 }
// ];

/*
🔨 Reto:
Usa .filter() para crear un nuevo array con solo las personas que sean mayores de edad (18 o más).

Cuando lo tengas, muéstrame tu código y te digo cómo vas.
*/

// const personasMayor = personas.filter(persona =>
//     persona.edad >= 18);

// console.log(personasMayor)


/*
🔍 Reto: Filtrar productos disponibles en stock
Tienes el siguiente arreglo de productos:
*/
// const productos = [
//     { nombre: "Laptop", stock: 10 },
//     { nombre: "Mouse", stock: 0 },
//     { nombre: "Teclado", stock: 5 },
//     { nombre: "Monitor", stock: 0 },
//     { nombre: "Impresora", stock: 2 }
// ];


/*
🎯 Tu objetivo:
Filtra solo los productos que tienen stock mayor a 0 y guarda el resultado en una nueva variable llamada productosDisponibles.

✅ Resultado esperado:
[
    { nombre: "Laptop", stock: 10 },
    { nombre: "Teclado", stock: 5 },
    { nombre: "Impresora", stock: 2 }
]

*/

// const productosDisponibles = productos.filter(producto => 
//     producto.stock > 0 );

// console.log(productosDisponibles)


/*
🧠 Reto combinado:
Dado este arreglo de objetos:
*/

// const empleados = [
//     { nombre: "Sam", salario: 1200, activo: true },
//     { nombre: "Luis", salario: 800, activo: false },
//     { nombre: "Ana", salario: 1500, activo: true },
//     { nombre: "Lucía", salario: 950, activo: true }
// ];
/*
👉 Objetivo:

1. Filtra solo los empleados activos.

2. A los empleados activos, usa .map() para crear un nuevo arreglo donde cada uno tenga:

--Su nombre en mayúsculas.

--Su salario aumentado en un 10%.
*/

// const empleadosActivos = empleados.filter(empleado => 
//     empleado.activo === true
// )
// console.log(empleadosActivos)


// const empleadosAumentoSalario = empleadosActivos.map(empleado => {
//     return {
//         nombre: empleado.nombre.toUpperCase(),
//         nuevoSalario: empleado.salario * 1.1 
//     }
// })
// console.log(empleadosAumentoSalario)



/*

🧠 Reto: Clientes Premium
Tienes una lista de clientes de un e-commerce. Cada cliente tiene nombre, total de compras y si es activo. Se considera cliente premium a quien ha gastado más de $500 y está activo.

🔹 Tu objetivo:
1. Filtrar los clientes que sean premium.

2. Retornar un nuevo arreglo con el nombre en mayúsculas y el mensaje:
--
"PREMIUM" si su total de compras es mayor a 1000.

--"ESTÁ BIEN" si es mayor a 500 pero menor o igual a 1000.

*/

const clientes = [
    { nombre: "sam", totalCompras: 1200, activo: true },
    { nombre: "luis", totalCompras: 400, activo: true },
    { nombre: "ana", totalCompras: 700, activo: true },
    { nombre: "lucía", totalCompras: 300, activo: false },
    { nombre: "pedro", totalCompras: 1100, activo: true }
];

// 1. Filtrar los clientes que sean premium.
const clientesPremium = clientes.filter(cliente =>
    cliente.totalCompras > 500 && cliente.activo
)
console.log(clientesPremium)



// 2
const clientesPREMIUM = clientesPremium.map(cliente => {
    return {
        nombre: cliente.nombre.toUpperCase(),
        estado: cliente.totalCompras > 1000 ? "PREMIUM" : "ESTÁ BIEN"
    }
})

console.log(clientesPREMIUM)



/*
🔍 Reto: Evaluación de rendimiento de empleados
Tienes un arreglo de empleados con los siguientes datos:
*/
const empleados1 = [
    { nombre: "Sam", ventas: 15, activo: true },
    { nombre: "Luis", ventas: 8, activo: true },
    { nombre: "Ana", ventas: 20, activo: false },
    { nombre: "Lucía", ventas: 12, activo: true },
    { nombre: "Pedro", ventas: 5, activo: true }
];

/*
🎯 Tu objetivo:
1. Filtrar solo los empleados activos.

2. De los activos, identificar su rendimiento:

--Si hizo más de 10 ventas, su rendimiento es "Alto".
--Si hizo entre 6 y 10 ventas, su rendimiento es "Medio".
--Menos de 6 ventas, "Bajo".

3. Crear un nuevo arreglo con:

--nombre en mayúsculas
--ventas
--rendimiento
*/

const empleadosActivos1 = empleados1.filter(empleado =>
    empleado.activo === true
)
console.log(empleadosActivos1)



const newEmpleadosActivos1 = empleadosActivos1.map(empleado => {
    let rendimiento = "";

    if (empleado.ventas > 10) {
        rendimiento = "Alto"
    } else if (empleado.ventas >= 6) {
        rendimiento = "Medio"
    } else {
        rendimiento = "Bajo"
    }

    return {
        nombre: empleado.nombre.toUpperCase(),
        ventas: empleado.ventas,
        rendimiento: rendimiento
    }
})
console.log(newEmpleadosActivos1)


/*
🧩 Reto: Evaluar rendimiento de estudiantes
Tienes el siguiente arreglo de estudiantes:
*/
const estudiantes = [
    { nombre: "Sam", asistencias: 18, promedio: 9 },
    { nombre: "Luis", asistencias: 14, promedio: 7 },
    { nombre: "Ana", asistencias: 20, promedio: 10 },
    { nombre: "Lucía", asistencias: 10, promedio: 6 },
    { nombre: "Pedro", asistencias: 16, promedio: 8 }
];

/*
Objetivo:
1. Filtra solo los estudiantes con al menos 15 asistencias.
2. Usa .map() para crear un nuevo arreglo que:

--Tenga el nombre en mayúsculas.

--Mantenga el promedio original.

--Agregue una propiedad nueva llamada desempeño, que diga:

----"Excelente" si el promedio es mayor o igual a 9.
----"Bueno" si el promedio está entre 7 y 8.99.
----"Regular" si es menor que 7.


*/

const asistenciaEstudiantes = estudiantes.filter(estudiante =>
    estudiante.asistencias >= 15
)
// console.log(asistenciaEstudiantes)

const estudianteFinal = asistenciaEstudiantes.map(estudiante => {
    let desempeño = "";
    if (estudiante.promedio >= 9) {
        desempeño = "Excelente";
    } else if (estudiante.promedio >= 7 || estudiante.promedio < 9) {
        desempeño = "Bueno";
    } else {
        desempeño = "Regular";
    }

    return {
        nombre: estudiante.nombre.toUpperCase(),
        promedio: estudiante.promedio,
        desempeño: desempeño

    }
})
console.log(estudianteFinal)


// ----------------------------  .find()--------------------------

/*
🧩 Reto: Buscar un producto por su código
Tienes un array de productos con su nombre, código y precio. Tu objetivo es buscar un producto específico usando su código.
*/
const productos = [
    { nombre: "Laptop", codigo: "LP100", precio: 1500 },
    { nombre: "Mouse", codigo: "MS200", precio: 25 },
    { nombre: "Teclado", codigo: "TK300", precio: 45 },
    { nombre: "Monitor", codigo: "MN400", precio: 300 }
];
/*
✅ Instrucciones:
Usa .find() para buscar el producto con el código "TK300".

Muestra en consola un mensaje como:
Producto encontrado: Teclado - $45

*/

const productoBuscado = productos.find(producto =>
    producto.codigo === "TK300"
)
console.log(`Producto encontrado: ${productoBuscado.nombre} - $${productoBuscado.precio} `)


// 🧩 Reto Avanzado con .find()
// Tienes un arreglo de usuarios con sus accesos al sistema:
const usuarios = [
    { id: 1, nombre: "Sam", rol: "admin", activo: true },
    { id: 2, nombre: "Luis", rol: "editor", activo: false },
    { id: 3, nombre: "Ana", rol: "lector", activo: true },
    { id: 4, nombre: "Lucía", rol: "editor", activo: true },
    { id: 5, nombre: "Pedro", rol: "admin", activo: false }
];
/*
✅ Tu misión:
Buscar el primer usuario que tenga el rol de "editor" y esté activo.

Si lo encuentras, imprime en consola:
Editor activo encontrado: [NOMBRE DEL USUARIO]

Si no hay ningún editor activo, muestra:
"No hay editores activos."
*/

const usuarioActivo = usuarios.find(usuario => usuario.rol === "editor" && usuario.activo === true);

if (usuarioActivo) {
    console.log(`Editor activo encontrado: ${usuarioActivo.nombre.toUpperCase()}`)
} else {
    console.log("No hay editores activos");
}



/*
🔥 Reto combinado:
Tienes el siguiente array de empleados:

*/
const empleados = [
    { nombre: "Sam", edad: 28, activo: true, departamento: "Ventas", proyectos: 5 },
    { nombre: "Luis", edad: 34, activo: true, departamento: "Soporte", proyectos: 2 },
    { nombre: "Ana", edad: 25, activo: false, departamento: "Ventas", proyectos: 4 },
    { nombre: "Lucía", edad: 30, activo: true, departamento: "Marketing", proyectos: 7 },
    { nombre: "Pedro", edad: 41, activo: true, departamento: "Ventas", proyectos: 6 },
];

/*
🧠 Objetivo:
1. Filtra solo los empleados activos del departamento Ventas.

2. Mapea esos empleados para crear un nuevo array que incluya:

--nombre en mayúsculas,

--proyectos,

--nivel:

----"Alto" si tiene más de 5 proyectos,

----"Medio" si tiene entre 3 y 5,

----"Bajo" si tiene menos de 3.

3. Encuentra dentro del nuevo array al primer empleado con nivel "Alto" y muestra su nombre.

[
    { nombre: "SAM", proyectos: 5, nivel: "Medio" },
    { nombre: "PEDRO", proyectos: 6, nivel: "Alto" }
]

// Luego:
Empleado con rendimiento alto: PEDRO

*/

const empleadosActivos = empleados.filter(empleado => empleado.activo === true);
// console.log(empleadosActivos)

const newEmpleadosActivos = empleadosActivos.map(empleado => {
    let nivelEmpleado = "";

    if (empleado.proyectos > 5) {
        nivelEmpleado = "Alto";
    } else if (empleado.proyectos >= 3) {
        nivelEmpleado = "Medio";
    } else {
        nivelEmpleado = "Bajo"
    }

    return {
        nombre: empleado.nombre.toUpperCase(),
        proyectos: empleado.proyectos,
        nivel: nivelEmpleado
    }
})

console.log(newEmpleadosActivos)

const buscarEmpleado = newEmpleadosActivos.find(empleado => empleado.nivel === "Alto")
console.log(buscarEmpleado)




/*
🔍 Reto de entrevista con .find(), .filter() y .map()
Tienes este arreglo:
*/
const candidatos1 = [
    { nombre: "sam", experiencia: 4, tecnologias: ["JavaScript", "PHP"], disponible: true },
    { nombre: "ana", experiencia: 2, tecnologias: ["Python"], disponible: true },
    { nombre: "lucía", experiencia: 5, tecnologias: ["JavaScript", "React"], disponible: false },
    { nombre: "pedro", experiencia: 6, tecnologias: ["JavaScript", "Node.js"], disponible: true },
    { nombre: "marco", experiencia: 1, tecnologias: ["HTML", "CSS"], disponible: true }
];
/*
🎯 Objetivo:
1. Filtra solo los candidatos disponibles.

2. De esos, quédate solo con los que tienen "JavaScript" en sus tecnologías.

3. Transforma su nombre a mayúsculas y su experiencia a nivel:

--5 o más años → "Senior"

--3 a 4 años → "Semi-Senior"

--Menos de 3 → "Junior"

4. Usa .find() para obtener el primer "Senior" disponible y mostrar su nombre.
*/

const candidatosDispnibles = candidatos1.filter(candidato => candidato.disponible === true && candidato.tecnologias.includes("JavaScript"));

console.log(candidatosDispnibles)

const candidatosRequeridos = candidatosDispnibles.map(candidato => {
    let experienciaLaboral = "";

    if (candidato.experiencia >= 5) {
        experienciaLaboral = "Senior";
    } else if (candidato.experiencia >= 3) {
        experienciaLaboral = "Semi-senior";
    } else {
        experienciaLaboral = "Junior";
    }
    return {
        nombre: candidato.nombre.toUpperCase(),
        experiencia: experienciaLaboral
    }
})

console.log(candidatosRequeridos)

const candidatoSenior = candidatosRequeridos.find(candidato => candidato.experiencia === "Senior");

console.log(candidatoSenior)


// ----------------------------  .sort()--------------------------

/*

🧩 Reto: Ordenando candidatos por nombre
Tienes el siguiente array de objetos:
*/
// const candidatos = [
//     { nombre: "Álvaro", experiencia: 3 },
//     { nombre: "andrés", experiencia: 5 },
//     { nombre: "Ana", experiencia: 2 },
//     { nombre: "Beatriz", experiencia: 4 },
//     { nombre: "Ángel", experiencia: 1 }
// ];

/*
🎯 Objetivo:
1. Ordena alfabéticamente los candidatos por su nombre de manera correcta (teniendo en cuenta acentos y mayúsculas).

2. Muestra el array ordenado por consola.
*/

// candidatos.sort((a, b) => a.nombre.localeCompare(b.nombre));
// console.log(candidatos) 



/*
Perfecto, Sam. Aquí tienes un reto combinado realista que mezcla lo que ya sabes: filter, map, find y sort. Ideal para entrevistas o práctica avanzada:

🧠 Reto: Selección de Candidatos para Proyecto React
Tienes un array de candidatos con esta estructura:
*/

const candidatos = [
    { nombre: "Ana", disponible: true, tecnologias: ["JavaScript", "React"], experiencia: 4 },
    { nombre: "Luis", disponible: true, tecnologias: ["Python", "Django"], experiencia: 5 },
    { nombre: "Lucía", disponible: false, tecnologias: ["JavaScript", "Vue"], experiencia: 3 },
    { nombre: "Pedro", disponible: true, tecnologias: ["JavaScript", "React", "Node"], experiencia: 6 },
    { nombre: "Sara", disponible: true, tecnologias: ["Java", "Spring"], experiencia: 2 },
    { nombre: "Carlos", disponible: true, tecnologias: ["JavaScript", "React"], experiencia: 1 },
];

/*
🎯 Objetivo:
1. Filtrar solo los candidatos:

--que estén disponibles
--que sepan React

2. Mapear cada uno para agregar su nivel de experiencia:
..>= 5: "Senior"
..>= 3: "Semi-senior"
..< 3: "Junior"

3. Ordenarlos alfabéticamente por nombre.

4. Buscar el primer candidato que sea "Senior".

[
    { nombre: "ANA", experiencia: "Semi-senior" },
    { nombre: "CARLOS", experiencia: "Junior" },
    { nombre: "PEDRO", experiencia: "Senior" }
]
// Y luego, imprimir por separado:
{ nombre: "PEDRO", experiencia: "Senior" }

*/

const candidatosActivos = candidatos.filter(candidato => candidato.disponible === true && candidato.tecnologias.includes("React"));
console.log(candidatosActivos);


const candidatosNivelExperiencia = candidatosActivos.map(candidato => {
    let nivelExperiencia = "";
    if (candidato.experiencia >= 5) {
        nivelExperiencia = "Senior";
    } else if (candidato.experiencia >= 3) {
        nivelExperiencia = "Semi-senior";
    } else {
        nivelExperiencia = "Junior";
    }
    return {
        nombre: candidato.nombre.toUpperCase(),
        // disponible: candidato.disponible,
        // tecnologias: candidato.tecnologias,
        experiencia: nivelExperiencia
    }
})
console.log(candidatosNivelExperiencia)

candidatosNivelExperiencia.sort((a, b) => a.nombre.localeCompare(b.nombre));
console.log(candidatosNivelExperiencia)

const candidatoEncontrado = candidatosNivelExperiencia.find(candidato => candidato.experiencia === "Senior");
console.log(candidatoEncontrado)


// 🧩 Reto con .reduce() – Total por nivel de experiencia
// Tienes un array de candidatos con su nombre, años de experiencia y si están disponibles:

const candidatos2 = [
    { nombre: "Lucía", experiencia: 6, disponible: true },
    { nombre: "Marcos", experiencia: 2, disponible: true },
    { nombre: "Ana", experiencia: 4, disponible: false },
    { nombre: "Pedro", experiencia: 5, disponible: true },
    { nombre: "Cecilia", experiencia: 1, disponible: true }
];

/*
🎯 Objetivo:
1. Filtra solo los disponibles.

2. Usa .reduce() para devolver un objeto que cuente cuántos hay por nivel:

--Junior: experiencia < 3

--Semi-senior: experiencia >= 3 y < 5

--Senior: experiencia >= 5

{
    Junior: 2,
    "Semi-senior": 0,
    Senior: 2
}

*/

const candidatosDisponibles = candidatos2.filter(candidato => candidato.disponible === true);
console.log(candidatosDisponibles)

const candidatosNivelExperiencia2 = candidatosDisponibles.map(candidato => {
    let nivelExperiencia = "";
    if (candidato.experiencia >= 5) {
        nivelExperiencia = "Senior";
    } else if (candidato.experiencia >= 3) {
        nivelExperiencia = "Semi-senior";
    } else {
        nivelExperiencia = "Junior";
    }
    return {
        nombre: candidato.nombre,
        // disponible: candidato.disponible,
        // tecnologias: candidato.tecnologias,
        experiencia: nivelExperiencia
    }
})
console.log(candidatosNivelExperiencia2);

const conteoCandidatos = candidatosNivelExperiencia2.reduce((acomulador, candidatoActual) => {
    acomulador[candidatoActual.experiencia] = (acomulador[candidatoActual.experiencia] || 0) + 1;
    return acomulador
}, {})
console.log(conteoCandidatos)


/*
🧩 RETO: Reclutamiento Express
Supongamos que tienes este array:
*/
const candidatos3 = [
    { nombre: "Ana", experiencia: 4, disponible: true, tecnologias: ["JavaScript", "React"] },
    { nombre: "Luis", experiencia: 2, disponible: true, tecnologias: ["JavaScript"] },
    { nombre: "Sofía", experiencia: 6, disponible: false, tecnologias: ["Python", "Django"] },
    { nombre: "Pedro", experiencia: 5, disponible: true, tecnologias: ["React", "Node"] },
    { nombre: "Elena", experiencia: 3, disponible: true, tecnologias: ["JavaScript", "React", "Node"] }
];

/*
🎯 Objetivo:
1. Filtra a los candidatos que estén disponibles y que conozcan React.

2. Mapea el nivel de experiencia (Junior, Semi-senior, Senior) en función de los años:

-->= 5 → Senior

-->= 3 → Semi-senior

--< 3 → Junior

3. Reduce el array para contar cuántos hay de cada nivel de experiencia.

4. (Opcional para más dificultad) Ordena alfabéticamente los nombres y muestra la lista completa final con nombre y nivel.
*/

const candidatosDisponibles3 = candidatos3.filter(candidato => candidato.disponible === true);
console.log(candidatosDisponibles3)

const candidatosNivelExperiencia3 = candidatosDisponibles3.map(candidato => {
    let nivelExperiencia = "";
    if (candidato.experiencia >= 5) {
        nivelExperiencia = "Senior";
    } else if (candidato.experiencia >= 3) {
        nivelExperiencia = "Semi-senior";
    } else {
        nivelExperiencia = "Junior";
    }
    return {
        nombre: candidato.nombre,
        experiencia: nivelExperiencia
    }
})
console.log(candidatosNivelExperiencia3);

const conteoCandidatos2 = candidatosNivelExperiencia3.reduce((acomulador, candidatoActual) => {
    acomulador[candidatoActual.experiencia] = (acomulador[candidatoActual.experiencia] || 0) +1;
    return acomulador;
}, {})
console.log(conteoCandidatos2)

const candidatosOrdenados = candidatosNivelExperiencia3
.map( candidato => {
    return {
        nombre: candidato.nombre.toUpperCase(),
        experiencia: candidato.experiencia
    }
})
.sort((a, b) => a.nombre.localeCompare(b.nombre));

console.log(candidatosOrdenados);





// ¡Perfecto, Sam! Vamos con un reto combinado nivel intermedio 💥 que incluye:

// --filter ✅

// --map ✅

// --reduce ✅

// --sort ✅

// --Y un poquito de lógica condicional 🧠

// 🧩 RETO COMBINADO – "Resumen de Candidatos por Tecnología"
// Supongamos que tenés un array candidatos4 con esta estructura:

const candidatos4 = [
    { nombre: "Lucía", disponible: true, experiencia: 6, tecnologias: ["React", "JavaScript"] },
    { nombre: "Carlos", disponible: true, experiencia: 2, tecnologias: ["Vue", "JavaScript"] },
    { nombre: "Marta", disponible: false, experiencia: 4, tecnologias: ["Angular", "React"] },
    { nombre: "Pedro", disponible: true, experiencia: 3, tecnologias: ["React", "Node.js"] },
    { nombre: "Ana", disponible: true, experiencia: 1, tecnologias: ["JavaScript"] }
];

/*

🎯 Objetivo del reto:
1. Filtrar solo a los candidatos disponibles ✅

2. Clasificarlos en Senior, Semi-senior, o Junior ✅

3. Agruparlos por tecnología usando .reduce()

4. Dentro de cada tecnología, guardar nombres en mayúsculas y ordenados alfabéticamente ✅

🧾 Resultado esperado (estructura):
{
    "React": ["LUCÍA", "PEDRO"],
    "JavaScript": ["ANA", "CARLOS", "LUCÍA"],
    "Vue": ["CARLOS"],
    "Node.js": ["PEDRO"]
}

📌 Pista:
--Vas a tener que usar un .reduce() para recorrer a cada candidato, y luego dentro del reduce, recorrer su array de tecnologias y meterlos en el acumulador agrupados.

--Asegurate de no repetir nombres innecesariamente en una tecnología si usás .includes.

*/

const candidatosDisponibles4 = candidatos4.filter(candidato => candidato.disponible === true);
console.log(candidatosDisponibles4)

const clasificacionCandidatos = candidatosDisponibles4.map(candidato => {
    let nivelExperiencia = "";
    if (candidato.experiencia >= 5) {
        nivelExperiencia = "Senior";
    } else if (candidato.experiencia >= 3) {
        nivelExperiencia = "Semi-senior";
    } else {
        nivelExperiencia = "Junior";
    }
    return {
        nombre: candidato.nombre.toUpperCase(),
        tecnologias: candidato.tecnologias
    }
})
.sort((a, b) => a.nombre.localeCompare(b.nombre));

console.log(clasificacionCandidatos);

const agrupadosPorTecnologia = clasificacionCandidatos.reduce((acumulador, candidato) => {
    candidato.tecnologias.forEach(tecnologia => {
        if (!acumulador[tecnologia]) {
            acumulador[tecnologia] = [];
        }
        acumulador[tecnologia].push(candidato.nombre);
    });
    return acumulador;
}, {});



console.log(agrupadosPorTecnologia)

for (let tech in agrupadosPorTecnologia) {
    agrupadosPorTecnologia[tech].sort();
}

/*
Explicación del ejercicio:
🧠 ¿Qué hace .reduce()?
.reduce() recorre un array (como lo hace .map() o .forEach()), pero va acumulando un resultado en un solo valor (por ejemplo: un número, una cadena, o en este caso, un objeto).

🛠 ¿Qué hace cada parte?
1. .reduce((acumulador, candidato) => { ... }, {})
Empieza con un objeto vacío {} como acumulador.

Por cada candidato, actualiza ese objeto acumulador.

2. candidato.tecnologias.forEach(...)
Recorremos cada tecnología que domina el candidato.

3. Dentro del forEach:
if (!acumulador[tecnologia]) {
    acumulador[tecnologia] = [];
}
acumulador[tecnologia].push(candidato.nombre);
--Si no existe la tecnología en el acumulador, la creamos como array vacío.
--Después agregamos el nombre del candidato a ese array.
*/



// 🧪 Ejemplo: Agrupar estudiantes por grado académico
// Supongamos que tenemos un array de estudiantes:
const estudiantes2 = [
    { nombre: "Juan", grado: "Primaria" },
    { nombre: "Lucía", grado: "Secundaria" },
    { nombre: "Pedro", grado: "Primaria" },
    { nombre: "Ana", grado: "Secundaria" },
    { nombre: "Carlos", grado: "Universidad" }
];

/*

Queremos transformarlo en este objeto:
{
    Primaria: ["Juan", "Pedro"],
    Secundaria: ["Lucía", "Ana"],
    Universidad: ["Carlos"]
}
*/

const estudiantesOrganizados = estudiantes2.reduce((acomulador, estudiante) => {
    const grado = estudiante.grado;

    if(!acomulador[grado]){
        acomulador[grado] = [];
    }

    acomulador[grado].push(estudiante.nombre)
    return acomulador;
}, {})
console.log(estudiantesOrganizados)