const nombre = prompt("Hola, Bienvenido a Banco a en linea , ingrese nombre de usuario:");
x=0;
intentos=4
while (true){
    let opcion = prompt("Ingrese contraseña:")
    if (opcion === "Clave1234"){
        alert("Bienvenido " + nombre);
        banco()
        break;
    } else {
        intentos= intentos-1;
        if (intentos==0){
            alert("Ha superado el número de intentos, por favor intente más tarde.");
            break;
        } else{
            alert("Contraseña incorrecta, intente nuevamente. te quedan intentos: " + intentos );
        }

        
        
        
        
    }   
     
};

let saldo = 100000; 

function retiro() {
    while (true) {
        let input = prompt("Ingrese monto a retirar o 'cancelar' para salir:");
        if (input.toLowerCase() === 'cancelar') {
            alert("Operación cancelada.");
            break;  
        }
        // validar el si es numero o hacer el proceso 
        let montoRetiro = parseInt(input);
        if (isNaN(montoRetiro)) {
            alert("Ingrese un número válido.");
        } else if (montoRetiro <= 0) {
            alert("Ingrese un monto mayor a 0.");
        } else if (montoRetiro <= saldo) {
            saldo -= montoRetiro;
            alert("Retiro realizado. Saldo actual: " + saldo);
            break;  // Salir del ciclo después de un retiro 
        } else {
            alert("Saldo insuficiente.");
        }
    }
};


function deposito() {
    while (true){
        let input = prompt("Ingrese monto a depositar o 'cancelar' para salir:");
        if (input.toLowerCase() === 'cancelar') {
            alert("Operación cancelada.");  
            break
            }
        let montoDeposito= parseInt(input);
        if (isNaN(montoDeposito)) {
            alert("Ingrese un número válido.");
        } else if (montoDeposito <=0){
            alert("Ingrese un monto mayor a 0.");
        } else {
            saldo += montoDeposito;
            alert("Depósito realizado. Saldo actual: " + saldo);
            break;
        }
    } 
};

function consultar() {
    alert("Su saldo es de: " + saldo);
};

function salir() {
    alert("Gracias por usar el Banco. Su sesión será cerrada.");
 
}

let movimiento; 
function banco (){
    do {
        movimiento = prompt("Ingrese tipo de movimiento: D: depósito, R: retiro, C: consultar saldo o S: salir");
        switch (movimiento) {
            case "D":
                deposito();
                break;
            case "R":
                retiro();
                break;
            case "C":
                consultar();
                break;
            case "S":
                
                salir();
                break;
            default:
                alert("Opción no válida. Intente nuevamente.");
                break;
        }
    } while (movimiento !== "S");

};