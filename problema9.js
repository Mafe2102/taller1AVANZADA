// PROBLEMA: Yoda el maestro jedi, necesita asignar a sus 
// aprendices Padawans 2 actividades dependiendo de la edad de 
// ellos:
// • Manejo de la fuerza: Si el aprendiz es menor de 15 años
// • Manejo del sable de luz: Si el aprendiz es mayor de 15 años
// Inicialmente, se debe programar una función que asocie los datos de: 
// {nombre, planeta, edad y estatura} de 1 Padawan a un objeto y una vez 
// este objeto sea creado se debe llamar a una función secundaria que 
// clasifique y muestre en consola la actividad asignada al Padawan
//Tradicional
function asociarEstudiante(nombre, planeta, edad, estatura, seleccionarActividad){
    setTimeout(function(){
        let estudiante={
            nombreEstudiante:nombre,
            planetaEstudiante:planeta,
            edadEstudiante:edad,
            estaturaEstudiante:estatura
        }
        seleccionarActividad(estudiante)
    },3000)
}
asociarEstudiante("Juan","Marte",10,1.85, function(estudiante){
    if (estudiante.edadEstudiante<15){
        console.log("Manejo de fuerza")
    } else{
        console.log("Manejo del sable de luz")
    }
})

//Flecha

const asociarEstudiante2 = (nombre, planeta, edad, estatura, seleccionarActividad) => {
    setTimeout(function(){
        let estudiante2={
            nombreEstudiante:nombre,
            planetaEstudiante:planeta,
            edadEstudiante:edad,
            estaturaEstudiante:estatura
        }
        seleccionarActividad(estudiante2)
    },3000)
}
asociarEstudiante2("Andres","Jupiter", 20, 2.10, (estudiante2) =>{
    if(estudiante2.edadEstudiante<15){
        console.log("Manejo de la fuerza")
    }else{
        console.log("Manejo sable de luz")
    }
})