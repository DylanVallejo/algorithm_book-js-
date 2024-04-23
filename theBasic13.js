// print from 1 to 255
function basic13PrintFrom1To255(){
    
    for(let i=1; i<=255; i++){
        console.log(i);
    }
    
}

// basic13PrintFrom1To255();

//print sum of 0 to 255

function basic13SumFrom0To255(){
    let sum = 0;
    
    for(let i=1; i<=255; i++){
        sum += i
    }
    return sum;
    
}

// console.log(basic13SumFrom0To255())


// find and prrint the  max value

let array = [-2,1,2,3,4,5,6,6,7]

function findTheMaxValue(array){
    let maxNumber = 0;
    
    array.forEach(element => {
        // if(element)
        // console.log(element)
        element > maxNumber ? maxNumber = element : maxNumber = maxNumber;
    });
    return maxNumber;
    
    
}
// console.log(findTheMaxValue(array))

//create an array whit al the odd numbers from 1 to 255

function oddNumbers(){
    let oddFrom1to255 = []
    let num = 1;
    // while(num<=255){
    //     num += 2
    //     oddFrom0to255.push(num)
    // }
    for(let i=0; i<=255; i++){
        if(i === 0 ){
            continue
        }
        if (i === 1) {
            oddFrom1to255.push(num)
            // continue
        }else{
            num += 2
            oddFrom1to255.push(num)
            
        }
    }
    return oddFrom1to255;
    
}

// console.log(oddNumbers());


//iterate trough an array and print each value

function iterateArray(array){
    array.forEach(element =>{
        console.log(element);
    })
}

// iterateArray(array);


// print the average of an array

function arrayAverage(array){
    let totalIndex = array.length;
    let indexSum = 0;

    array.forEach(element =>{
        indexSum += element;
    })
    let average = indexSum/totalIndex;
    return average;
}

// console.log(arrayAverage(array));


//create a new array whit squared values 
function squareArrayValues(array){
    let squaredValues = [];
    array.forEach(element =>{
        squaredValues.push( element ** 2)
        // squareArrayValues.push(Math.pow(element,2)) //using Math.pow()
    })
    return squaredValues
}


// console.log(squareArrayValues(array));


function setZeroIfNegative(array){
    
    array.forEach((element,index) => {
        if(element < 0 ){
            array[index] = 0
        }
    })
    return array;
    
}

// console.log(setZeroIfNegative(array));


//given an array move all values forward by one dropping the first and leaving 
// a 0 at the end

function shiftArrayValues(array){
    let shiftedArray = [];
    array.forEach((element, index)=>{
        console.log(array.length)
        
        if(index === 0){
            shiftedArray = shiftedArray;
        }else if(index === array.length - 1){
            // console.log(array.length)
            shiftedArray.push(0)
        }else{
            shiftedArray.push(element)
        }
    })
    return shiftedArray;
    
}

// console.log(shiftArrayValues(array));




function sigma(num){
    let sum =0;
    for(let i = 1; i <= num ; i++){
        if( i > 0){
            sum += i;
        }else{
            break;
        }
    }
    return sum;
}

// console.log(sigma(5))


function factorial(num){
    let factorialNum = 1;
    for(let i = 1; i <= num ; i++){
        if( i > 0){
            factorialNum *= i;
        }else{
            break;
        }
    }
    return factorialNum;
}
//console.log(factorial(5))


/*Create function ThreesFives() that adds each value from 100 and 4000000 (inclusive) if that value 
is evenly divisible by 3 or 5 but not both​. Display the final sum in the console. */
function threesFives(start, end){
    
    let sum = 0;
    console.log("funciona")
    
    for(let index = start; index <= end; index++){
        if(index % 3 === 0 && index % 5 === 0){
            continue
        }
        else if (index % 3 === 0){
            sum += index
        }else if (index % 5 === 0){
            sum += index        
        } 
        
    }
    console.log(sum)
    return sum;
    
    
}
console.log(threesFives(100,4000000))

//page 39 algorithm book