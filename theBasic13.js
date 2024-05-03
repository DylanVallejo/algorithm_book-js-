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



//print how many numbers are greather than y 
function  greaterThanY(array, y){
    
    let sum = 0;
    array.forEach((element, index)=>{
        if(element > y){
            sum++
        }
    })
    return sum;
    
}

// console.log(greaterThanY(array,3))

// max min adn average

function statArray(array){
    
    let min =0;
    let max= 0;
    let sum = 0;
    array.forEach((element)=>{
        if(element>max){
            max = element
        } 
        if(element<min && element<max){
            min = element
        }
        sum = sum + element
    })
    var average = sum/array.length
    return {max: max, min:min, average:average}
    
}
// console.log(statArray(array))

function swapNegativesToDojo(array){
    
    let swapArray = [];
    array.forEach(element => {
        if(element < 0){
            swapArray.push('Dojo')
        }else{
            swapArray.push(element)
        }
    });
    return swapArray;
}

// console.log(swapNegativesToDojo(array))

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
    return sum;
    
}
// console.log(threesFives(100,4000000))

//page 39 algorithm book

//generate coins


function generateCoins(cents){
    let coin1dollar = 100;
    let coin50c = 50;
    let coin25c = 25;
    
    if(cents >= 100){
        let totalDollarCoins = cents/coin1dollar;
        return 'dollar coins: ' + totalDollarCoins ;
    }else if(cents <= 50){
        let totalFiftyCoins = cents/coin50c;
        return '50 cents coins: ' + totalFiftyCoins;
    }else if(cents <=25 ){
        let total25Coins = cents/coin25c;
        return '25 cents coins: ' + total25Coins;
    }
    
    
}

// console.log(generateCoins(35));

function generateCoinChange(cents) {
    // Define the denominations of coins
    const coinValues = [25, 10, 5, 1];
    const coinNames = ['quarters', 'dimes', 'nickels', 'pennies'];

    let remainingCents = cents;
    const result = {};

    // Iterate through each coin value
    for (let i = 0; i < coinValues.length; i++) {
        const coinValue = coinValues[i];
        const coinName = coinNames[i];

        // Calculate how many of this coin can be used
        const numCoins = Math.floor(remainingCents / coinValue);

        // Update the remaining cents
        remainingCents -= numCoins * coinValue;

        // Add to the result if we used this coin
        if (numCoins > 0) {
            result[coinName] = numCoins;
        }

        // If we've made all change, break
        if (remainingCents === 0) {
            break;
        }
    }

    // Print the result
    console.log(`Change for ${cents} cents:`);
    for (const coin in result) {
        console.log(`${result[coin]} ${coin}`);
    }
}
// Test the function
// generateCoinChange(87); // Should output: quarters: 3, dimes: 1, pennies: 2



//fibonachi


function fibonacci(times){
    let sequence = []
    for(let i =0; i <=times ; i++){
        if(i === 0 ){
            sequence.push(i)
        }else if(i === 1){
            sequence.push(i)
        }else{
            sequence.push(sequence[i-1] + sequence[i-2])
        }
    }
    sequence.forEach(element =>{
        console.log(element)
    })
}

// console.log(fibonacci(100))

// las digit of a to b 


function lastDigitFromAToB(a,b){
    
    let result = a**b;
    let lastSignificantDigit = result.toString().split('');
    console.log(lastSignificantDigit)
    return lastSignificantDigit[lastSignificantDigit.length-1]

}

// console.log(lastDigitFromAToB(12,5))




// clockHandAngles Create function clockHandAngles(seconds) that, given the number of seconds since 12:00:00, will 
// print the angles (in degrees)



function clockHandAngles(second){
    
    // 12:00:00 = 0 grados
    
    let grades = 360
    let secondsInDay = second % 43200;
    let secondInHour = second % 3600;
    let secondInMInute = second % 60
    
    
    let secondsAngle = (360 * secondInMInute) % grades;
    let minutesAngle = (/grades) * grades;
    let hoursAngle = (second/grades) * grades;
    
    console.log(second)
    
    
    //  12  0 360
    
}



function fiboEvenSum(n) {
    let array = []
    let sum = 0;
    for(let i = 0; i <= n; i++){
        if(i === 0){
            array.push(i)
        }else if( i === 1 ){
            array.push(i)   
        }else{
            array.push(array[i-1] + array[i-2])
        }
    }
    for(let i = 0; i < array.length-1; i++){
        if(array[i] % 2 === 0 && array[i] <= n){    
            sum = sum + array[i];
        }
    }
    return sum;
}
console.log(fiboEvenSum(1000))

// 34 should return 44
