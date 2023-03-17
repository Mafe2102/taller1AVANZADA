// PROBLEMA: QUI-GON JINN está encargado de revisar n sables 
// de luz y contabilizar la cantidad de energía de sables que tienen 
// negativa en Joules.
 
// Ejemplo: para la entrada {2,4,-8,5,-6} la cantidad de sables 
// defectuosos con energía negativa fue de 2 sables
function contarNegativos(sables){
    return sables.filter(sable=>sable<0).length
}
console.log(contarNegativos([2, 4, -8, 5, -6]));
    
let contarNegativos2=(sables)=>{
    return sables.filter(sable=>sable<0).length
}

console.log(contarNegativos2([2, 4, -8, 5, -6]));
    

