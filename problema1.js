function medirDistancia(x1,x2,y1,y2){
    return Math.sqrt(Math.pow(x2-x1,2)+Math.pow(y2-y1,2))
}
let distanciaCalculada=medirDistancia(10,10,5,5)
console.log(`la distancia calculada fue de ${distanciaCalculada}`)

let medirDistancia =(x1,x2,y1,y2)=>Math.sqrt(Math.pow(x2-x1,2)+Math.pow(y2-y1,2))
let distanciaCalculada2=medirDistancia(10,10,5,5)
console.log(`la distancia calculada fue de ${distanciaCalculada}`)