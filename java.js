// console.log("Hello, World!");
var weight = 70; // weight in kg
var price = 100; // price in dollars
var height= parseInt("180"); // height in cm, parsed as integer here parseInt is covert string to int
console.log(weight)
var name =" Mahidur";
console.log(name);
// vvollean
var isActive = true; // boolean value
console.log(isActive);
var isnotActive = false; // boolean value
console.log(isnotActive);
console.log(typeof name); // string
console.log(weight+ height); // number
// var firstnumber = 0.1;
// var secondnumber = 0.2;
// total = firstnumber + secondnumber; // floating point addition
// console.log(total.toFixed(4)); // 0.30000000000000004 due
// console.log(total,toFixed(5)); // 0.30
// || eta or condition
// && eta and condition

// ternary operator
var age = 20;
// if (age >= 18) {
//     console.log("You are an adult.");   
// }   
// else {
//     console.log("You are a minor.");
// }
// condition ? when true : when false
age >= 18 ? console.log("You are an adult.") : console.log("You are a minor.");
// string is immutable
// array is mutable
const name1 = "Mahidur Rahman"; // string
console.log (name1.toLowerCase()); // convert to lowercase
console.log(name1.toUpperCase()); // convert to uppercase
// slice method
console.log(name1.slice(0, 5)); // Mahid
// split method
console.log(name1.split(" ")); // ["Mahidur", "Rahman"]
// join method
console.log(name1.split(" ").join("-")); // Mahidur-Rahman

// object method
const bottle={
    brand: "Coca-Cola",
    price: 1.5,
    color: "White",
    isClean: false,
    isUse: true,
    // jodi space die varibale declare kori tahole string kore korte hobe
    "brand-names": ["Coca-Cola, Pepsi, Sprite"],
}
console.log(bottle.brand) // Accessing object property
console.log(bottle["brand"]) // Accessing object property with strings second way
console.log(bottle["brand-names"]) // Accessing object property with space. Space varribale dot die acces hoy na
bottle["price"] = 2.0; // Updating object property of price
console.log(bottle.price); 
console.log(Object.values(bottle)); // Get all values of the object
console.log(Object.keys(bottle)); // Get all keys of the object
const mobile ={
    brand: "Samsung",
    price: 500,
    color: "Black",
    isSmartphone: true,
    features: ["Camera", "Bluetooth", "Wi-Fi"],
}

for (const prop in mobile) {
    console.log(prop)
    console.log(mobile[prop]); // Accessing object properties using for-in loop
}
// for of : array er jonno use hoy
// for in : object er jonno use hoy
const keys = Object.keys(mobile); // Get all keys of the object
console.log(keys); // ["brand", "price", "color", "isSmartphone", "features"]
for (const key1 of keys) {
    console.log(key1 ,':', mobile[key1]); // Accessing keys using for-of loop
    
}