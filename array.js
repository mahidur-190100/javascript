// array er karbari ekhane
const array = [1,2,3,4,5]
reversed_array =[]
for (let i =0 ; i < array.length;){
    console.log (i)
    reversed_array.unshift(array[i]); 
    i = i+1;
}
console.log(reversed_array); // [5, 4, 3, 2, 1]

console.log ("use built in ")

// push holo new element add kora array er last e
// pop holo last element ta remove kora array theke
// shift holo first element ta remove kora array theke  
// unshift holo new element add kora array er first e



// .reverse use kore built in function hishabe

const array2 = array.reverse();
console.log(array2); // [5, 4, 3, 2, 1]

console.log("use while loop")
// while loop for reverse
const array3 = [1, 2, 3, 4, 5];
let i = 0;
while_array = [];
while (i < array3.length) {
    while_array.unshift(array3[i]);
    i++;
}
console.log(while_array); // [5, 4, 3, 2, 1]


// back for loop for reverse
console.log("use for  reverse loop")
const array4 = [1, 2, 3, 4, 5];
const r_array=[];
for (let i = array4.length - 1; i >= 0; i--) {
    r_array.push(array4[i]);
}
console.log(r_array); // [5, 4, 3, 2, 1]    



// array sort
console.log("use array sort")
//  sort function use hoy string hoye. kono number sort korte hole tao string hishabe sort kore, jar fole number er sort correct hoy na.
const numbers = [5, 2, 9, 1, 5, 6];
const sorted_numbers = numbers.sort();  
console.log(sorted_numbers); // [1, 2, 5, 5, 6, 9] - sorted as strings
console.log("descending order")
const descending_sorted_numbers = numbers.sort(function(a, b) {return (b-a)}); // Sort in descending order
console.log(descending_sorted_numbers); // [9, 6, 5, 5, 2, 1] - sorted as numbers
console.log("ascending order")

const ascending_sorted_numbers = numbers.sort(function(a, b) {return (a-b)}); // Sort in ascending order
console.log(ascending_sorted_numbers); // [1, 2, 5, 5, 6, 9] - sorted as numbers


// object array

const employees = [
    { name: "Alice", age: 30, position: "Developer" },  
    { name: "Bob", age: 25, position: "Designer" },
    { name: "Charlie", age: 35, position: "Manager" }
]
console.log (employees[0].name); // Accessing object property in array
console.log (employees[1].age); // Accessing object property in array

console.log("use for in loop")
for (const employee of employees) {
    console.log( employee. age + " " + employee.name );
}

// array er moddhe array
console.log("array er moddhe array")
const nestedArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(nestedArray[0][1]); // Accessing element in nested array
console.log("using loop")
for (const subArray of nestedArray) {
    console.log(subArray[1][0]); // Accessing each sub-array

}