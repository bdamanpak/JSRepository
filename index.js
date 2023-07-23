// Get the inputs
const operandI = +prompt("Enter the 1st operand :");
const operator = prompt("Choose the operator --> + - / * :");
const operandII = +prompt("Enter the 2nd operand :");


// Calculations 
if(isNaN(operandI) || isNaN(operandII)){
    console.log("ERROR in the operands !");
}

else{
    if(operator === "+"){
        console.log(operandI + operandII);
    }

    else if(operator === "-"){
        console.log(operandI - operandII);
    }

    else if(operator === "/"){
        console.log(operandI / operandII);

    }

    else if(operator === "*"){
        console.log(operandI * operandII);

    }
}
