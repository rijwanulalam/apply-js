// function factorial(number){
//     let result = 1;
//     for(let i = number; i >= 1; i--){
//         result = result * i;
//     }
//     return result;
// }

// console.log(factorial(4));

function factorial(number){
    let result = 1;
    let i = 1;
    while( i <= number){
        result = result * i;
        i++;
    }
    return result;
}

console.log(factorial(4));