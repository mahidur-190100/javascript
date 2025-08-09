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