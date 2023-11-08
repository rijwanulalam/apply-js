function countZeros(binary_num) {
    let count = 0;
  for(let i = 0; i < binary_num.length; i++){
    const num = parseInt(binary_num[i]);
    if(num === 0){
        count += 1
    }
  }
  return count;
}


const binaryStr = '100010';

const result = countZeros(binaryStr);
console.log(result);