// Scenario
// Several people are standing in a row divided into two teams.
// The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.

// Task
// Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.

// Notes
// Array size is at least 1.
// All numbers will be positive.

// Input >> Output Examples
// rowWeights([13, 27, 49])  ==>  return (62, 27)

// Explanation:
// The first element 62 is the total weight of team 1, and the second element 27 is the total weight of team 2.

// rowWeights([50, 60, 70, 80])  ==>  return (120, 140)
// Explanation:
// The first element 120 is the total weight of team 1, and the second element 140 is the total weight of team 2.

// rowWeights([80])  ==>  return (80, 0)
// Explanation:
// The first element 80 is the total weight of team 1, and the second element 0 is the total weight of team 2.

// methods solution

function rowWeights(arr){
  let evenTeam = arr.filter((el, i) => i % 2 === 0).reduce((acc, c) => acc + c, 0);
  let oddTeam = arr.filter((el, i) => i % 2 !== 0).reduce((acc, c) => acc + c, 0);
  return [evenTeam, oddTeam]
}

console.log(rowWeights([50,60,70,80]), [120,140]);
console.log(rowWeights([13,27,49]), [62,27]);
console.log(rowWeights([80]), [80,0]);

// for loop solution

function rowWeights(arr){
  let result = [0, 0];
  for (let i = 0; i < arr.length; i++) {
    i % 2 == 0 ? result[0] += arr[i] : result[1] += arr[i];
  }
  return result;
}