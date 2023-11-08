function getTallest(numbers){
    // console.log(numbers)
    let tallest = numbers[0];
    for(let i = 0; i < numbers.length; i++){
        const element = numbers[i];
        // console.log(element)
        if(tallest < element){
            tallest = element;
        }
    }
    return tallest;
}


const heights = [167, 190, 120, 165, 137, 230];

console.log(getTallest(heights));