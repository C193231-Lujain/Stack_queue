function nextSmallerElement(arr, n) {
    let stack=[];
    let result=new Array(n).fill(-1); // Default to -1

    for (let i=n-1;i>=0;i--) {
        // Remove elements greater than or equal to arr[i]
        while (stack.length > 0 && stack[stack.length-1] >= arr[i]) {
            stack.pop();
        }

        // If stack is not empty, assign the top element as next smaller
        if (stack.length > 0) {
            result[i] = stack[stack.length - 1];
        }

        // Push current element to stack
        stack.push(arr[i]);
    }

    return result;
}

const readline = require("readline-sync");

// Read input
let n = parseInt(readline.question("Enter array size: "));
let arr = readline.question("Enter array elements: ").split(" ").map(Number);

// Call function and print output
console.log(nextSmallerElement(arr, n).join(" "));
