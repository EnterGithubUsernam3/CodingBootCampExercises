console.log("This is an unbreaking Calculator");

var userInput1 =  parseInt(prompt("Give me the first number"));
var userInput2 =  parseInt(prompt("Give me the second number"));

var operator = prompt("Give me the mathematical operation you want to do!(+,-,*,/)");
var result = 0 ;




function inputVariables()
{ 
    let localInput1= parseInt(prompt("Give me the first number"));

            while( isNaN(localInput1) )
            {
                alert("This is not a Number");
                localInput1= parseInt(prompt("Give me the first number"));

            }  
    let localInput2= parseInt(prompt("Give me the second number"));

            while( isNaN(localInput2) )
            {    alert("This is not a Number");
                localInput2= parseInt(prompt("Give me the second number"));


            }
    let localOperator = operator ;       

    division(localInput1,localInput2,localOperator);
}




function Calculator (oneNumber,secondNumber,anotherOperator)
    {   
        while(isNaN(oneNumber))
        {

            alert("This is not a Number");
            oneNumber = parseInt(prompt("Give me the first number"));

        }
        while(isNaN(secondNumber))
        {
            alert("This is not a Number");
            secondNumber = parseInt(prompt("Give me the second number"));
        }
        while(anotherOperator !== "+" && anotherOperator !== "-" && anotherOperator !== "*" && anotherOperator !== "/" )
        {
            alert("This is not a valid operator!");
            anotherOperator = prompt("Give me the mathematical operation you want to do!(+,-,*,/)");
        }
    addition(oneNumber,secondNumber,anotherOperator);
    multiplication (oneNumber,secondNumber,anotherOperator);
    division (oneNumber, secondNumber,anotherOperator);
    subtraction(oneNumber,secondNumber,anotherOperator);
    console.log(result);
}



function addition (oneNumber,secondNumber,anotherOperator)
{   
   
    if(anotherOperator === "+"){
        result = oneNumber + secondNumber;

    }
    return(result);
}


function division (oneNumber,secondNumber,anotherOperator)
{  
   
    if(anotherOperator === "/")
    {

        if(secondNumber === 0 )
        {
            console.log("We cannot divide by 0 ");
            inputVariables();

        }
        else
        {
            result = oneNumber / secondNumber;

        }
        return(result);
    }
    
}


function multiplication (oneNumber,secondNumber,anotherOperator)
{   
   
    if(anotherOperator === "*")
    {    
        result = oneNumber * secondNumber;

    }
    return(result);
}


function subtraction (oneNumber,secondNumber,anotherOperator)
{   
   
    if(anotherOperator === "-")
    {
            result = oneNumber - secondNumber;

    }
    return(result);
}


Calculator(userInput1, userInput2, operator);
// function calculator(a,b,sym)
// {
// switch (sym)
// {
// case "+":
// return a+b;
// break;
// case "-":
// return a-b;
// break;
// case "*":
// return a*b;
// break;
// case "/":
// if (b!=0)
// {
// return a/b;
// }
// else
// {
// return "I cannot perform the division by zero";
// }
// break;
// default:
// return "wrong operation!";
// break;
// }
// }
// var num1=+prompt("Give me number 1");
// var symbol=prompt ("Give me the operation");
// var num2=+prompt("Give me number 2");
// result= calculator(num1,num2,symbol);
// console.log(result);