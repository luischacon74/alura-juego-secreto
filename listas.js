let numerosSorteados= [];
console.log(numerosSorteados);
//agregar numeros al final de la lista
numerosSorteados.push(6);
console.log(numerosSorteados);
//ver tamaño de la lista
console.log(numerosSorteados.length);
numerosSorteados.push(5);
console.log(numerosSorteados);
console.log(numerosSorteados.length);
console.log(numerosSorteados);
//para acceder a los elementos la primera posicion siempre es 0
console.log(numerosSorteados[0]);
//para acceder al ultimo elemento de la lista
numerosSorteados.push(11);
console.log(numerosSorteados);
console.log(numerosSorteados.length);
console.log(numerosSorteados[numerosSorteados.length - 1]);


//ejemplos 
let frutas = ["Manzana", "Uva", "Naranja"];
//acceder a un elemento de la lista
console.log(frutas[0]); // Salida: "Manzana"
console.log(frutas[2]); // Salida: "Naranja"
//añadir nuevos elementos a la lista
frutas.push("Fresa");
console.log(frutas); // Salida: ["Manzana", "Uva", "Naranja", "Fresa"]
//eliminar elementos de la lista
frutas.pop();
console.log(frutas); // Salida: ["Manzana", "Uva", "Naranja"]
