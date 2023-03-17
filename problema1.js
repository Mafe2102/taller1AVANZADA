// 1.PROBLEMA: Yoda el maestro jedi, necesita enseñar a sus aprendices 
// Padawan a calcular la distancia a la que cualquiera de los planetas de la 
// ruta N-14 pertenecientes a la ruta comercial de la federación 
// intergaláctica, se encuentra del planeta NABOO. 
// Para calcular dicha distancia se debe:
// • Recibir las coordenadas X,Y del planeta en UA
// • Establecer la distancia como

function medirDistancia(x1,x2,y1,y2){
    return Math.sqrt(Math.pow(x2-x1,2)+Math.pow(y2-y1,2))
}
let distanciaCalculada=medirDistancia(10,20,30,40)
console.log(`la distancia calculada fue de ${distanciaCalculada}`)

let medirDistancia2= (x1,x2,y1,y2)=>{
    distancia= Math.sqrt(Math.pow(x2-x1,2)+Math.pow(y2-y1,2))
    return distancia.toFixed(2)   
}
console.log(`la distancia calculada fue de ${medirDistancia2(10,20,30,40)}`)