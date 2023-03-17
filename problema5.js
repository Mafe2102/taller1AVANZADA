// PROBLEMA: Watto paga a su personal de ventas un salario de 
// 3500000 mensuales, más una comisión de 1500000 por cada 
// licencia de software vendida menos el 5% de deducciones por 
// impuestos sobre el total devengadp. Codifica un programa que 
// calcule e imprima el salario mensual de un vendedor dado;

function salarioTotal(){
    let salario = 3500000;
    let comision = 1500000;
    let deducciones= salario*0.05;
    let total=salario+comision-deducciones;
    return total
}
salarioTotal=salarioTotal()
console.log(`El salario mensual a pagar es: ${salarioTotal}`)

let salarioTotal2=()=>{
    let salario = 3500000;
    let comision = 1500000;
    let deducciones= salario*0.05;
    let total=salario+comision-deducciones;
    return total
}
salarioTotal2=salarioTotal2()
console.log(`El salario mensual a pagar es: ${salarioTotal2}`)
