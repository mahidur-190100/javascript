function inchtoFeet (inch){
    const feet = inch / 12;
    return feet;

}
const shuvo = inchtoFeet(75);
console.log(shuvo); // Output: 6.25

// koto feet koto inch hoy
function inchtoFeet2 (inch){
    const feet = inch / 12;
    const feetnumber = parseInt(feet);
    const inchnumber = inch % 12; // Remaining inches after converting to feet
    const result =("Feet: " + feetnumber + ", Inches: " + inchnumber);
    return result; // Return the formatted string with feet and inches

}
const shuvo2 = inchtoFeet2(75);
console.log(shuvo2); // Output: Feet: 6, Inches: 3

// leap year check
function isLeapYear(year) {
    if ( year % 4 === 0) {
        return true; // It's a leap year
    } else {
        return false; // It's not a leap year
}
}
isLeapYear = isLeapYear(2024);
console.log(isLeapYear); // Output: true - 2024 is a leap year
//  ar ekta cheacker
function isLeapYear2(year) {
    if (year % 4 === 0 && year % 100 !== 0 ) {
        return true; // It's a leap year
    } else if (year % 400 === 0 && year % 100 === 0) {
        return true; // It's a leap year
    }
    else {
        return false; // It's not a leap year
    }
}
const leapYearCheck = isLeapYear2(2025);
console.log(leapYearCheck); // Output: true - 2024 is a leap year


// oddavarage
function oddAverage(numbers) {
    // console.log (numbers);
    const odds =[];
    for (const number of numbers){
        if (number % 2 === 1) {
             // Skip even numbers
            odds.push(number); // Add odd numbers to the array
            
        }
        
    }
    // console .log(odds);
    let sum = 0;
    for (const odd of odds) {
        sum += odd; // Calculate the sum of odd numbers
    }
    // console.log(sum);
    const average = sum / odds.length; // Calculate the average of odd numbers
    return average; // Return the average value
}
const numbers = [42,13,58,65,81];
const avg = oddAverage(numbers);
console.log ('avarage of the odd number is: ' , avg);   
// no duplicate
function removeDuplicates(array) {
    const uniqueArray = [];
    for (const item of array) {
        if (uniqueArray.includes(item) === false) {
            uniqueArray.push(item); // Add only unique items to the new array
        }
    }
    return uniqueArray; // Return the array with duplicates removed
}
const numbersWithDuplicates = [1, 2, 3, 2, 4, 5, 1];
const uniqueNumbers = removeDuplicates(numbersWithDuplicates);
console.log(uniqueNumbers); // Output: [1, 2, 3, 4, 5] - Duplicates removed


// MInimum and Maximum
const min = Math.min(1, 2, 3, 4, 5); // Find the minimum value
const max = Math.max(1, 2, 3, 4, 5); // Find the maximum value
console.log("Minimum:", min); // Output: Minimum: 1   
console.log ( Math.round(4.85)); // Round to the nearest integer
console.log ( Math.floor(4.85));
console.log ( Math.ceil(4.85));