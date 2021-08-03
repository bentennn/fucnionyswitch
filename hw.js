let preciototal = 0
let iva = 0
let compra = parseInt(prompt("ingrese el precio de el producto"))
let pais = prompt("ingrese el pais de residencia:\nChile\nArgentina\nBrazil")
pais.toLowerCase

function impuestos(pais,compra,iva){

switch(pais){
    case "chile":
        return(compra
         + 15 * 1.1)

    case "argentina":
        return(compra
         + 20 * 1.4) 
        
    case "brazil":
        return(compra
         + 13 * 1.5)  
    default:alert("intentalo denuevo")
             
}
}

alert("el precio total de tu compra (envio mas iva) es: " + impuestos(pais,compra
,iva)+"USD")