function toMinutes(hours){
    const minutes = hours * 60;
    return minutes;
}
const hours = 6;
const min = toMinutes(hours);
console.log(hours, "hours =", min, "minutes");