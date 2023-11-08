function getSmallest(numbers){
    // console.log(numbers);
    let smallest = numbers[0];
    for(let i = 0; i < numbers.length; i++){
        const element = numbers[i];
        if(smallest > element){
            smallest = element;
        }
    }
    return smallest;
}

const heights = [167, 190, 120, 165, 137, 230];

const lowerNum = getSmallest(heights);
console.log(lowerNum);