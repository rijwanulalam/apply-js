function reverseString(str){
    // console.log(str);
    let newString = "";
    for (let i = str.length - 1; i >= 0 ; i--){
        const stringElement = str[i];
        // console.log(stringElement);
        newString = newString + stringElement;
    }
    return newString;
}

const string = "hello";
console.log(reverseString(string));
// reverseString(string);