// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

// for loop solution

function findOdd(arr) {
  for (let i = 0; i < arr.length; i++) {
    const count = arr.filter(x => x === arr[i]).length
    if (count % 2 !== 0) {
      return arr[i]
    }
  }
}

console.log(findOdd([1,1,2]), 2);
console.log(findOdd([0,1,0,1,0]), 0);
console.log(findOdd([1,1,2,2,4]), 4);

// top codewars solution - XOR

const findOdd = (xs) => xs.reduce((a, b) => a ^ b);

// find + filter method solution

function findOdd(arr) {
  return arr.find((item, index) => arr.filter(el => el == item).length % 2)
}