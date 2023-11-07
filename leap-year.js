function isLeapYear(year){
    if((year % 4 === 0) && (year % 100 != 0) || (year % 400 === 0)){
        return true;
    }
    return false;
}

const myLeapYear = isLeapYear(1900);
console.log(myLeapYear, 'year');

const herYear = isLeapYear(1980);
console.log(herYear, 'year');