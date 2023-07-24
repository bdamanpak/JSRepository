// Calculator

function calculator(operand1, operand2, operator) {
    if (!isNaN(operand1 + operand2)) {
        switch (operator) {
            case "+":
                return console.log("the result is: ", operand1 + operand2);
            case "-":
                return console.log("the result is: ", operand1 - operand2);
            case "/":
                return console.log("the result is: ", operand1 / operand2);
            case "*":
                return console.log("the result is: ", operand1 * operand2);
            default:
                return console.log("FAILURE");
        }
    }

    return console.log("FAILURE");
}

const operand1 = +prompt("enter the first operand : ");
const operand2 = +prompt("enter the second operand : ");
const operator = prompt("enter the operator : ");

calculator(operand1, operand2, operator);



// ----------------------------------------------------------------------- // 
//To Uppercase

function convertToUpper(sentence){
    return console.log(sentence.toUpperCase());
}

convertToUpper("heLLo i aM BarDiA");



// ----------------------------------------------------------------------- // 
// GPA

function GPA(num1, num2, num3, num4, num5){
    const avg = (num1 + num2 + num3 + num4 + num5)/5;
    if(!isNaN(avg)){
        if(avg >= 12){
            return console.log("the average is: ", avg);
        }
        else{
            return console.log("you are in a danger mode and your gpa is lower than 12 !!");
        }
    }

    else{
        return console.log("FAILURE");
    }
}

const num1 = +prompt("enter the first one : ");
const num2 = +prompt("enter the second one : ");
const num3 = +prompt("enter the third one : ");
const num4 = +prompt("enter the forth one : ");
const num5 = +prompt("enter the fifth one : ");

GPA(num1, num2, num3, num4, num5);