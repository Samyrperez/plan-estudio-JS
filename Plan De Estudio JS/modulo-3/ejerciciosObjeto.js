/*
🧩 Reto: Crear un objeto de tipo "Cuenta Bancaria"
Crea un objeto llamado cuentaBancaria que contenga las siguientes propiedades:

--titular: nombre del titular (string)

--saldo: cantidad actual de dinero (number)

--activa: si la cuenta está activa o no (boolean)

Y los siguientes métodos:

1. consultarSaldo(): muestra el saldo actual.

2. depositar(cantidad): suma la cantidad al saldo si la cuenta está activa.

3. retirar(cantidad): resta la cantidad del saldo si hay suficiente dinero y la cuenta está activa.

4. desactivarCuenta(): cambia el estado de la cuenta a inactiva.

5. mostrarResumen(): muestra todos los datos de la cuenta en una frase clara.

💡 Reglas:
--Si intentas depositar o retirar con la cuenta inactiva, debe mostrar un mensaje: "Cuenta inactiva. No se pueden realizar operaciones."

--Si intentas retirar más dinero del que hay, muestra: "Fondos insuficientes."
*/

let cuentaBancaria= {
    titular: "Samyr Perez",
    saldo: 100000,
    activa: true,
    consultarSaldo: function() {
        if (this.saldo === 0) {
            console.log("No hay saldo en la cuenta")
        } else {
            console.log(`El saldo actual de la cuenta es de $${this.saldo}`)
        }
    },
    depositar: function(cantidad) {
        if (!this.activa) {
            console.log("La cuenta está desactivada. No puedes realizar depósitos.");
            return;
        }
    
        if (typeof cantidad !== "number" || cantidad <= 0) {
            console.log("Cantidad inválida. Ingresa un número positivo.");
            return;
        }
    
        this.saldo += cantidad; // Es lo mismo que : this.saldo = this.saldo + cantidad;
        console.log(`Depósito exitoso. Nuevo saldo: $${this.saldo}`);
    },
    retirar: function(cantidad) {
        if(!this.activa) {
            console.log("La cuenta está desactivada. No puedes realizar retiros.");
            return;
        } 
        if(typeof cantidad !== "number" || cantidad <= 0) {
            console.log("Cantidad inválida. Ingresa un número positivo.");
            return;
        }
        this.saldo -= cantidad;
        console.log("Retiro exitoso. Nuevo saldo: $", this.saldo);
    },
    desactivarActivarCuenta: function(){
        if(this.activa === true) {
            this.activa = false;
            console.log("Cuenta desactivada")
            return;
        } else {
            this.activa = true;
            console.log("Cuenta activada")
        }
    },
    mostrarResumen: function(){
        console.log(`Cuenta bancaria: \n Titular:${this.titular} \n Saldo Actual: ${this.saldo} \n Activa: ${this.activa ? "Activa": "Desactivada" }  `)
    }
}
cuentaBancaria.consultarSaldo();
cuentaBancaria.depositar(500);
cuentaBancaria.retirar(100);
cuentaBancaria.desactivarActivarCuenta()
cuentaBancaria.desactivarActivarCuenta()
cuentaBancaria.mostrarResumen();
// console.log(cuentaBancaria);