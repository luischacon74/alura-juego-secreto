// Crear una función que muestre "¡Hola, mundo!" en la consola.
function saludar(){
    console.log("¡Hola, mundo!");
    alert("¡Hola, mundo!")
}
// Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.
let ingresoNombre = "";
function saludarNombre(ingresoNombre){
    ingresoNombre = prompt("ingrese su nombre");
    console.log(`¡Hola, ${ingresoNombre}!`);
    alert(`¡Hola, ${ingresoNombre}!`);
}
// Crear una función que reciba un número como parámetro y devuelva el doble de ese número.
ingresoNumero = 0;
function dobleNumero(ingresoNumero){
    ingresoNumero  = parseInt(prompt("ingrese un numero entre el 1 y 10"));
    let doble = ingresoNumero * 2;
    alert(`el doble del numero ingresado es, ${doble}!`);
    return doble;
}
// Crear una función que reciba tres números como parámetros y devuelva su promedio.
let numero1 = 0;
let numero2 = 0;
let numero3 = 0;

function promedio(numero1, numero2, numero3){
    numero1 = parseInt(prompt("ingrese un numero"));
    numero2 = parseInt(prompt("ingrese un numero"));
    numero3 = parseInt(prompt("ingrese un numero"));
    let promedio = (numero1 + numero2 + numero3) / 3;
    alert(`el promedio de los numeros ingresados es, ${promedio}!`);
    return promedio;
}

// Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
let numeroA = 0;
let numeroB = 0;

function mayorNumero(numeroA, numeroB){
    numeroA = parseInt(prompt("ingrese un numero"));
    numeroB = parseInt(prompt("ingrese un numero"));
    if (numeroA > numeroB){
        alert(`el numero mayor es, ${numeroA}!`);
        return numeroA;
    } else {
        alert(`el numero mayor es, ${numeroB}!`);
        return numeroB;
    }
}

// Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.
let numeroMultiplicar = 0;
function multiplicarNumero(){
    numeroMultiplicar = parseInt(prompt("ingrese un numero a multiplicar por si mismo"));
    let multiplicacion = numeroMultiplicar * numeroMultiplicar;
    alert(`el resultado de multiplicar el numero ingresado por si mismo es, ${multiplicacion}!`);
    return multiplicacion;
}


//llmado de funcion
saludar();
saludarNombre(ingresoNombre);
dobleNumero(ingresoNumero);
promedio(numero1, numero2, numero3);
mayorNumero(numeroA, numeroB);
multiplicarNumero();