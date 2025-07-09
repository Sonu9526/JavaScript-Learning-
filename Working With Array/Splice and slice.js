"use strict";

let arr = ["a", "b", "c", "d", "e"];
console.log(arr.splice(1));
console.log(arr.slice(1));
console.log(arr);

const fruits = ["Banana", "Orange", "Apple", "Mango"];

// At position 2, remove 1 item, add "Lemon" and "Kiwi"
fruits.splice(2, 1, "Lemon", "Kiwi");

// Create an Array
const fruit = ["Banana", "Orange", "Apple", "Mango"];

// At position 2, remove 2 items
fruit.splice(2, 2);
