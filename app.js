
//se comento debido a la implementacion de la funcion con el apramatro p y su valor
// let parrafo = document.querySelector('p');
// parrafo.innerHTML = "Indica un numero del 1 al 10";

let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;



function asignarTextoElemento (elemento, texto){
    // aqui traemos un objeto u lo alamcenamos en una variable
    // let titulo = document.querySelector('h1');
    // titulo.innerHTML = "Juego del numero secreto";
    //aqui vamos a aplicar parametros que se aplican en la funcionm
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
//llamamos a la funcion que declaramos en el html aqui
function verificarIntento() {
    // alert('click desde el botón');
    //vamos a capturar el dato que se ingresa en el input meidante un id que se le asigno en el html mediante el value, 
    //con el parseInt convertimos el valor a un numero entero para ai poder comparar dos number
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(typeof(numeroDeUsuario)); //esto nos devuelve el tipo de dato que es el valor ingresado
    console.log(numeroDeUsuario);
    console.log(numeroDeUsuario == numeroSecreto);  //esto devuelve un tru o un false debido a que es un booleano
    console.log(intentos);
    if (numeroDeUsuario === numeroSecreto) {
        //vamos a mostrar en el parrafo el resultado de la comparacion
        asignarTextoElemento('p', `Adivinaste el numero es: ${numeroSecreto} lo hiciste en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        //vamos a remover el disable del button para habilitarlo cuando acerto
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //el usuario no acerto el numero secreto

        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El numero secreto es menor');
        } else {
            asignarTextoElemento('p', 'El numero secreto es mayor');
        }
        intentos++;
        //llamamos a la funcion de limpiar caja
        limpiarCaja();
    }


    return;
}

//generar un numero aleatorio
function generarNumeroSecreto() {
    //declaramos una variable y le asignamos un valor aleatorio entre 1 y 10
    //let numeroSecreto = Math.floor(Math.random() * 10) + 1;
    //retornamos el contenido de la variable numeroSecreto
    //return numeroSecreto;
    //otra opcion es retornar el valor directamente sin necesidad de declarar una variable
    
    let numeroGenerado= Math.floor(Math.random() * numeroMaximo) + 1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //si ya se sortearon todos los numeros posibles
    if (listaNumerosSorteados.length === numeroMaximo){
        //limpiamos la lista de numeros sorteados
        asignarTextoElemento('p', 'Se acabaron los numeros posibles, reinicia el juego');
        //listaNumerosSorteados = [];
    } else {

        //si el numero generado ya esta en la lista de numeros sorteados
        if (listaNumerosSorteados.includes(numeroGenerado)){
            //vamos a generar un nuevo numero con al funcion generarNumeroSecreto y lo retornamos
            return generarNumeroSecreto();
        }else{
            //si no esta en la lista lo agregamos
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

///funcion apra limpiar caja
function limpiarCaja() {
    //vamos a limpiar la caja de texto
    // el # es para seleccionar un id con el metodo querySelector y limpiamos el valor de la caja
    let valorCaja = document.querySelector('#valorUsuario').value = '';
}

//funcion para reiniciar el juego
function reiniciarJuego() {
    //vamos a limpiar la caja de texto
    limpiarCaja();
    //indicamos los mensajes inciiales
    condicionesInicales();
    //vamos a deshabilitar el boton de reiniciar para que no se pueda reiniciar el juego
    document.querySelector('#reiniciar').setAttribute('disabled', true);
    return;
}    

function condicionesInicales() {
    //vamos a mostrar en el titulo el mensaje de bienvenida
    asignarTextoElemento('h1', 'Juego del numero secreto!');
    //vamos a mostrar en el parrafo el mensaje de indicar un numero
    asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}`);
    //generamos un nuevo numero secreto o aleatorio
    numeroSecreto = generarNumeroSecreto();
    //inicializar el numero intentos
    intentos = 1;
    console.log(numeroSecreto);
    console.log(typeof(numeroSecreto)); //esto nos devuelve el tipo de dato qque es el numero secreto
    return;
}

condicionesInicales();