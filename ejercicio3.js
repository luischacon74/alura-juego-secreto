// Crea una lista vacía llamada "listaGenerica".
let listaGenerica = [];

// Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];

// Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
lenguagesDeProgramacion.push("java", "Ruby", "GoLang");
console.log(lenguagesDeProgramacion);
// Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.

function mostrarElementos(lenguagesDeProgramacion){
    console.log(lenguagesDeProgramacion);
}
mostrarElementos(lenguagesDeProgramacion);
// Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.
mostrarElementosInverso(lenguagesDeProgramacion);
function mostrarElementosInverso(lenguagesDeProgramacion){
    console.log(lenguagesDeProgramacion.reverse());
}
// Crea una función que calcule el promedio de los elementos en una lista de números.

let lista = [1, 2, 3, 4, 5];
promedioElementos(lista);
function promedioElementos(lista){
    let suma = 0;

    for (let i = 0; i < lista.length; i++){
        suma += lista[i];
    }
    let result= suma / lista.length;
    console.log(result);
}
// Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
mostrarNumeroGrande(lista);
function mostrarNumeroGrande(lista){
    let max = Math.max(...lista);
    let min = Math.min(...lista);
    console.log(max);
    console.log(min);
}
// Crea una función que devuelva la suma de todos los elementos en una lista.
sumaElementos(lista);
function sumaElementos(lista){
    let suma = 0;

    for (let i = 0; i < lista.length; i++){
        suma += lista[i];
    }
    console.log(suma);
}

// Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.
let lista6 = [1, 2, 3, 4, 5];
let elemento = 3;
posicionElemento(lista6, elemento);
function posicionElemento(lista6, elemento){
    console.log(lista6.indexOf(elemento));
}
// Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.
let lista1= [1, 2, 3, 4, 5];
let lista2= [6, 7, 8, 9, 10];
sumaListas(lista1, lista2);
function sumaListas(lista1, lista2){
    let lista3 = [];
    for (let i = 0; i < lista1.length; i++){
        lista3.push(lista1[i] + lista2[i]);
    }
    console.log(lista3);
}
// Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.
let lista4 = [1, 2, 3, 4, 5];
cuadradoElementos(lista4);
function cuadradoElementos(lista4){
    let lista5 = [];
    for (let i = 0; i < lista4.length; i++){
        lista5.push(lista4[i] * lista4[i]);
    }
    console.log(lista5);
}