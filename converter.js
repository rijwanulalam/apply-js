function converter(miles){
    const kilometers = miles * 1.60934;
    // const distance = kilometers.toFixed(2);
    // return distance;
    return kilometers;
}

var myMiles = 12;
console.log(converter(myMiles));