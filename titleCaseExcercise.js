//create a function that will tittleCase 
//the next testArray = ["Peoplecert", "education", "People", "cert"];\

//define Array
let testArray = ["Peoplecert" ,"edUCAtion" ,"peOPle" ,"cErT"];



//functions definition

function tittleCaseTheArray(exampleArray)
{
    let interimArray = [];
    for (i of exampleArray){
        interimArray.push(i.charAt(0).toUpperCase() + i.slice(1).toLowerCase());
         
    }
    return(interimArray);

}
//second function creates the desired output array  
function theDesiredOutputArray(anotherExampleArray)
{
    //define variables in the function (local variables)
    //the one variable also excecutes another function
    let k = tittleCaseTheArray(anotherExampleArray);
    let interimArray2 = [];

    //process
    for (var i in k)
    {
        if (i == 0)
        {
            interimArray2[0] = k[2] + k[3];
        }
        else
        {
            interimArray2[i] = k[i];
        }
    }

  
    return(interimArray2);
    }


    
// run
console.log(tittleCaseTheArray(testArray));
console.log(theDesiredOutputArray(testArray));
