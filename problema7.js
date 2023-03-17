// PROBLEMA: se necesita clasificar 10 números enteros positivos 
// o negativos que contienen códigos de naves de guerra. Diseño 
// un algoritmo que permita recibir dichos 50 números e indicar 
// ¿Cuál fue el más cercano a cero? (Si el número es negativo se 
// debe mostrar el resultado del valor absoluto)
// //Tradicional
function numerosA(){
    let numeros = [];
    for(let i = 0; i < 50; i++){
        numeros.push(Math.floor(Math.random() * 201) - 100);
    }
    return numeros;
}
let numerosAle = numerosA();

function cercanos(numeros){
    let numeroCercano = numeros[0];
    for (let i = 1; i < numeros.length; i++) {
        if (Math.abs(numeros[i]) < Math.abs(numeroCercano)) {//abs: Metodo para hallar el valor absoluto
            numeroCercano = numeros[i];
        }
    }
    return numeroCercano;
}
let numeroCercano = cercanos(numerosAle)

console.log("50 numero aleatorios:  " + numerosAle);

console.log("Cercano a cero: " + Math.abs(numeroCercano));

//Flecha

const numerosA2 = () =>{
    let numeros = [];
    for(let i = 0; i < 50; i++){
        numeros.push(Math.floor(Math.random() * 201) - 100);
    }
    return numeros;
}
let numerosAle2 = numerosA2();

const cercanos2 = (numeros) => {
    let numeroCercano2 = numeros[0];
    for (let i = 1; i < numeros.length; i++) {
        if (Math.abs(numeros[i]) < Math.abs(numeroCercano2)) {//abs: Metodo para hallar el valor absoluto
            numeroCercano2 = numeros[i];
        }
    }
    return numeroCercano2;
}

let numeroCercano2 = cercanos(numerosAle)

console.log("50 numero aleatorios:  " + numerosAle2);

console.log("Cercano a cero: " + Math.abs(numeroCercano2));