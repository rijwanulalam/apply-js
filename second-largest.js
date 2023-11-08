function secondLargest ( numbers ) {
    // console.log(numbers);
    let largest = numbers[0];
    let secondLargest = 0;
    for (let i = 0; i < numbers.length; i++){
        const number = numbers[i];
        if (number > largest){
            secondLargest = largest;
            largest = number;
        }else if(number < largest && number > secondLargest){
            secondLargest = number;
        }
    }
    return secondLargest;
}

const numbers = [10,33,5,99,6];
const result = secondLargest(numbers);
console.log(result);