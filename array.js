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