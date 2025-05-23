/*
🔁 ¿Qué es un método?
Un método es simplemente una función que se define como propiedad de un objeto. Es decir, es una acción que el objeto puede realizar.
*/
// 🧱 Estructura básica:
let persona = {
    nombre: "Sam",
    saludar: function () {
        console.log("Hola, soy " + this.nombre);
    }
};

persona.saludar(); // Hola, soy Sam

/*
🧪 También puedes definirlo con función flecha pero cuidado:
*/
let persona2 = {
    nombre: "Sam",
    saludar: () => {
        console.log("Hola, soy " + this.nombre); // ❌ this NO funciona como esperas en funciones flecha
    }
};

persona2.saludar(); // Hola, soy undefined

// Por eso, siempre usa function() tradicional para métodos si vas a usar this.


