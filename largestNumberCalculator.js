//define variables 
var L = [] ;
var max = 0 ;
var temp = 0 ;


//define functions 
function enterList(anotherList)
{
    for (var i=0 ; i>-1 ; i++)
    {   
    temp =+ prompt("Enter positive number");

        if (temp == 0 ){


            return(anotherList);
        }

            else{
                anotherList.push(temp);
            }
        }
}

function ListSorting(AList)
{
    for (var i=0 ;i <= AList.length ; i++ ){
            if(max < AList[i])
            {
                max = AList[i];
            }
            

}
    return(max);
 

}


//process
enterList(L);
console.log(L);
console.log("The max element of the list is " + ListSorting(L));

