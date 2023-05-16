


let nombre = prompt("ingrese su nombre") 
alert("bienvenido " + nombre)

console.log("todos los dispositivos tienen  cuotas sin interes " + nombre)

const totalCuotas = prompt("ingrese el numero de cuotas ")


function mostrarCuotas(){
    for (let i = 1 ; i <= totalCuotas; i++) {
     console.log ("  el numero de cuotas es de " + totalCuotas + " cuotas sin interes")  
 }

}

function mostrarPrecio(codigo){
    switch (codigo) {
        case 1:
            alert("El samsung s9 vale 90.000 pesos")
            break;

            case 2:
            alert("El iphone xs  vale 150.000 pesos")
            break;

            case 3:
            alert("El pocophone vale 100.000 pesos")
            break;
    
    
     
        default:
            alert("El dispositivo no esta disponible :[")

    }
}




function calculoDeCuotas(totalCuotas) {
    let valorDelProducto = parseFloat(prompt("Ingresa el valor del producto: "))
    if ( valorDelProducto > 0 ) {
        console.log( "Tendras que pagar por mes: ", valorDelProducto / totalCuotas )
    }
}

