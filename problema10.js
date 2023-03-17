// Grogu ha iniciado su entrenamiento Jedi y debe activar un 
// software que permita clasificar su dieta:
// alimento = { 
// nombre, 
// tipo (Puede ser vegetal, animal, insecto), 
// nivel de energía aportado (números entre 1 00-500) 
// } 
// Cree un programa que permita recibir 300 alimentos y mediante una 
// función primaria después de 5 segundos se pueda obtener solo los 
// alimentos de tipo vegetal que entreguen más de 200 unidades de 
// energía. Finalmente, una función callback debe permitir entregar la 
// sumatoria de niveles de energía entregados por los alimentos vegetales 
// consumidos en la dieta de Grogu// 
// const tiposAlimento = ['vegetal', 'animal', 'insecto'];
// const nombresAlimento = ['manzana', 'banana', 'naranja', 'pollo', 'res', 'cerdo', 'zanahoria', 'espinaca', 'tomate', 'camarón'];

// function generarAlimentoAleatorio() {
//   const nombre = nombresAlimento[Math.floor(Math.random() * nombresAlimento.length)];
//   const tipo = tiposAlimento[Math.floor(Math.random() * tiposAlimento.length)];
//   const nivelEnergia = Math.floor(Math.random() * 401) + 100; 
//   return { nombre, tipo, nivelEnergia };
// }
// const alimentos = [];
// for (let i = 0; i < 300; i++) {
//   alimentos.push(generarAlimentoAleatorio());
// }console.log(alimentos)

// let filtro=alimentos.filter(function(alimento){
//   return alimento.tipo==='vegetal'&& alimento.nivelEnergia >=200
// })
// console.log(filtro)

// function filtrarAlimentos(alimentos, sumatoriaEnergiaVegetales){
//   setTimeout(function(){
//       let alimentosFiltrados = alimentos.filter(alimento => alimento.tipo ==='vegetal' && alimento.nivelEnergia >200)
//       sumatoriaEnergiaVegetales(alimentosFiltrados)
//   },5000)
// } 
// filtrarAlimentos(alimentos, function(alimentosFiltrados){
//   let sumatoriaEnergiaVegetales = 0
//   console.log(alimentosFiltrados)
//   alimentosFiltrados.forEach(alimento => {
//       sumatoriaEnergiaVegetales = sumatoriaEnergiaVegetales + alimento.nivelEnergia
//   })
//   console.log("La suma del nivel de energia en los vegetales consumidos en la dieta de Grogu son: " + sumatoriaEnergiaVegetales)
// })

const tiposAlimento = ['vegetal', 'animal', 'insecto'];
const nombresAlimento = ['manzana', 'banana', 'naranja', 'pollo', 'res', 'cerdo', 'zanahoria', 'espinaca', 'tomate', 'camarón'];

function generarAlimentoAleatorio() {
  const nombre = nombresAlimento[Math.floor(Math.random() * nombresAlimento.length)];
  const tipo = tiposAlimento[Math.floor(Math.random() * tiposAlimento.length)];
  const nivelEnergia = Math.floor(Math.random() * 401) + 100; 
  return { nombre, tipo, nivelEnergia };
}
const alimentos = [];
for (let i = 0; i < 300; i++) {
  alimentos.push(generarAlimentoAleatorio());
}console.log(alimentos)

let filtro=alimentos.filter(function(alimento){
  return alimento.tipo==='vegetal'&& alimento.nivelEnergia >=200
})
console.log(filtro)

const filtrarAlimentos=(alimentos, sumatoriaEnergiaVegetales)=>{
  setTimeout(function(){
      let alimentosFiltrados = alimentos.filter(alimento => alimento.tipo ==='vegetal' && alimento.nivelEnergia >200)
      sumatoriaEnergiaVegetales(alimentosFiltrados)
  },5000)
} 
filtrarAlimentos(alimentos, (alimentosFiltrados)=>{
  let sumatoriaEnergiaVegetales = 0
  console.log(alimentosFiltrados)
  alimentosFiltrados.forEach(alimento => {
      sumatoriaEnergiaVegetales = sumatoriaEnergiaVegetales + alimento.nivelEnergia
  })
  console.log("La suma del nivel de energia en los vegetales consumidos en la dieta de Grogu son: " + sumatoriaEnergiaVegetales)
})

