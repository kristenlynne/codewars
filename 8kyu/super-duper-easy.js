// Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".

function problem(x){
    if (typeof x !== "number") {
      return 'Error'
    }
    return x * 50 + 6
}

console.log(problem('Hello')); // 'Error'
console.log(problem(1)); // 56