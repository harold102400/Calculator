let operacion = prompt("Que operacion desea hacer? 1-sumar 2-restar 3-multiplicar 4-dividir");
let operando1;
let operando2;
let resultado;

if ( operacion >= 1 && operacion <= 4){
    operando1 = parseInt(prompt("Introduce primer numero:"));
    operando2 = parseInt(prompt("Introduce segundo numero:"));
}



function suma(numero1, numero2){
    return numero1 + numero2;
}

function resta(numero1, numero2){
    return numero1 - numero2;
}
function multiplicacion(numero1, numero2){
    return numero1 * numero2;
}
function division(numero1, numero2){
    return numero1 / numero2;
}

switch(operacion){
    case "1":
        resultado = suma(operando1, operando2)
        document.getElementById("result").innerHTML = "El resultado es " + resultado;
        break;
    case "2":
        resultado = resta(operando1, operando2)
        document.getElementById("result").innerHTML = "El resultado es " + resultado;
        break;
    case "3":
        resultado = multiplicacion(operando1, operando2)
        document.getElementById("result").innerHTML = "El resultado es " + resultado;
        break;
    case "4":
        resultado = division(operando1, operando2)
        document.getElementById("result").innerHTML = "El resultado es " + resultado;
        break;  
    default:
        alert("MMG");
        break;
}


/* if(operacion === 1){
   resultado = suma(operando1, operando2);
   document.write("El resultado es:" + resultado);
} else if ( operacion === 2){
    resultado = resta(operando1, operando2);
} else if ( operacion === 3){
    resultado = multiplicacion(operando1, operando2);
} else if ( operacion === 4){
    resultado = division(operando1, operando2);
} */


