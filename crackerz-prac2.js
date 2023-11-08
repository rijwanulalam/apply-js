// [5, 7, 8, 10, 45, 30]

function findOddSum(arrOfNumbers){
    let oddSum = 0;
    for(let i = 0; i < arrOfNumbers.length; i++){
        const number = arrOfNumbers[i];
        if(number % 2 !== 0){
            oddSum += number;
        }
    }
    return oddSum;
}

const numbers = [5, 7, 8, 10, 45, 30];

const result = findOddSum(numbers);
console.log(result);