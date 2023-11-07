function getOddNumbers(numbers){
    let oddNumbers = [];
    for (let i = 0; i < numbers.length; i++){
        const number = numbers[i];
        if(number % 2 !== 0){
            oddNumbers.push(number);
        }
    }
    return oddNumbers;
}

const myNumbers = [2, 4, 5, 3, 5, 4, 4];
const gotOddNumbers = getOddNumbers(myNumbers);
console.log(gotOddNumbers);

function getSumOfArray(numbers){
    let sum = 0;
    for(let i = 0; i<numbers.length; i++){
        const number = numbers[i]
        sum = sum + number;
        // if (number % 2 === 0){
        //     sum = sum + number;
        // }
        
    }
    return sum;
}

const totalNumber = getSumOfArray(gotOddNumbers);
console.log(totalNumber);