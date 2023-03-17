// PROBLEMA: Para habilitar la guerra de los clones es necesario 
// clasificar la edad de estos, elabore un programa que permita 
// recibir 20 edades y 20 códigos diferentes generadas 
// aleatoriamente y determine cual de esas edades es la mayor. Si 
// se repite la misma edad se debe contar el número de 
// repeticiones

function generarClones(){
    const codigos = Math.floor(Math.random() * 20);
    const edades = Math.floor(Math.random() * 40);
    console.log(codigos,edades)
    return{codigos,edades}
}
const clones=[]
for (let i = 0; i < 20; i++) {
    clones.push(generarClones());
}console.log(clones)

let edadMayor= 0;
clones.forEach(function(clon){
    if (clon.edades>edadMayor){
        edadMayor=clon.edades
    }
    
   

}) 
console.log(edadMayor)










// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// let edades=[];
// function leerEdades() {
    
//     readline.question('Ingrese la edad: ', edad => {
//         edades.push(parseInt(edad));
//         if (edades.length < 20) {
//             leerEdades();
//         } else {
//             procesarEdades();
//             readline.close();
//         }
//     });
//     return {edades};
// }

// console.log(leerEdades); 
// let numero = prompt("Ingrese un número: "); // muestra un cuadro de diálogo para que el usuario ingrese un número
// numero = parseInt(numero); // convierte la cadena de caracteres en un número entero
// console.log("El número ingresado es: " + numero); // muestra el número ingresado por consola

// const numeros = []; // crea un arreglo vacío

// for(let i = 0; i < 20; i++) {
//   const numero = parseInt(prompt(`Ingresa el número ${i+1}:`)); // pide al usuario que ingrese un número
//   numeros.push(numero); // agrega el número al arreglo
// }

// console.log(numeros); // muestra el arreglo en la consola


// let edades = [];
// for (let i = 0; i < 20; i++) {
//   edades.push(Math.floor(Math.random() * 50) + 1);
// }

// // Generar un arreglo de 20 códigos aleatorios entre 1 y 20


// // Encontrar la edad máxima y el número de repeticiones
// let edadMaxima = edades[0];
// let repeticionesEdadMaxima = 1;
// for (let i = 1; i < 20; i++) {
//   if (edades[i] > edadMaxima) {
//     edadMaxima = edades[i];
//     repeticionesEdadMaxima = 1;
//   } else if (edades[i] === edadMaxima) {
//     repeticionesEdadMaxima++;
//   }
// }

// // Imprimir los resultados
// console.log("Edades: " + edades);
// console.log("Códigos: " + codigos);
// console.log("La edad máxima es " + edadMaxima + " y se repite " + repeticionesEdadMaxima + " veces.");

// let generarCodigo=()=>{
//     const codigos = Math.floor(Math.random() * 20) + 100;
//     codigos.push(parseInt(codigo))
//     return {codigos}
// }
// function generarAlimentoAleatorio() {
//     const nombre = nombresAlimento[Math.floor(Math.random() * nombresAlimento.length)];
//     const tipo = tiposAlimento[Math.floor(Math.random() * tiposAlimento.length)];
//     const nivelEnergia = Math.floor(Math.random() * 401) + 100; 
//     return { nombre, tipo, nivelEnergia };
// }


// leerEdades();
// generarCodigo();

