// Exercise #1
let arr = [2, 4, 57, 3, 223, 4899, 97, 56, 34];

let even = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 == 0) {
    even.push(arr[i]);
  }
}

console.log("Exercise #1:");
console.log(even);

// Exercise #2:

let largeNum = arr.reduce((a, b) => Math.max(a, b));
console.log("Exercise #2:");
console.log("The largest number in the array:  " + largeNum);

// Exercise #3

function reverseString(str) {
  return str.split("").reverse().join("");
}
let pop = prompt("Enter any string to reverse");
console.log("Exercise #3:");
console.log("Here is your reversed String:  " + reverseString(pop));

// Exercise #4

function removeDups(arr) {
  return [...new Set(arr)];
}
let nums = [1, 2, 3, 4, 2, 6, 5, 1, 2, 3, 6];
let newArr = removeDups(nums);
console.log("Exercise #4:");
console.log(newArr);
