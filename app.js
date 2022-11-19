let operation = prompt("What operation would like to do? 1-sum 2-sub 3-mult 4-div");
let operando1;
let operando2;
let result;

if ( operation >= 1 && operation <= 4){
    operando1 = parseInt(prompt("Introduce the first number:"));
    operando2 = parseInt(prompt("Introduce the second number:"));
}



function add(number1, number2){
    return number1 + number2;
}

function sub(number1, number2){
    return number1 - number2;
}
function mult(number1, number2){
    return number1 * number2;
}
function div(number1, number2){
    return number1 / number2;
}

switch(operation){
    case "1":
        result = add(operando1, operando2)
        document.getElementById("result-on-screen").innerHTML = "The result is " + result;
        break;
    case "2":
        result = sub(operando1, operando2)
        document.getElementById("result-on-screen").innerHTML = "The result is " + result;
        break;
    case "3":
        result = mult(operando1, operando2)
        document.getElementById("result-on-screen").innerHTML = "The result is " + result;
        break;
    case "4":
        result = div(operando1, operando2)
        document.getElementById("result-on-screen").innerHTML = "The result is  " + result;
        break;  
    default:
        alert("Please use a valid number");
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


