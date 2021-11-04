//define variables 
var userInput = prompt("Enter a word");
//control console.log 
// console.log(userInput[0])
var temp = "";
var temp2 ="";
var reverseString="";






//define functions 
function createReverseWord(aString)
{
    let interimArray= [];
    let reverseinterimArray = [];
    let interimString="";
    let len =0  ;

    for(i = 0 ;i < aString.length ; i++ )//create an array full of the elements of the string in each position
    {
        temp = aString[i];
        interimArray.push(temp);
        
    }

    len = interimArray.length;
    // control console.logs 
    // console.log(len);
    // console.log(interimArray);

    for(i = 0;i < len; i++)// reverse the array that we just created 
    {
        reverseinterimArray[i] = interimArray.pop();
    }

    for(i = 0 ; i < reverseinterimArray.length ;i++){//finally create the reverse string 

        interimString = interimString + reverseinterimArray[i];
    }
    return(interimString);


}


function checkIfPalindrome(anotherString,theReverseString){

    if(anotherString === theReverseString){
        console.log("Ladies and gentlemen we have got a palindrome!");
    }
    else{
        console.log("Aww sucks...We do not have a palindrome");

    }


}


//run
reverseString = createReverseWord(userInput);
console.log("The string that you input is " + userInput);
console.log("The reverse string  is " + reverseString);


checkIfPalindrome(userInput,reverseString);
