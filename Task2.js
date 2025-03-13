const readline = require("readline-sync"); 
function queueUsingTwoStacks(operations) {
    let stack1 = []; // Stack for enqueue
    let stack2 = []; // Stack for dequeue
    let output = [];

    for (let operation of operations) {
        let command = operation.split(" ");

        if (command[0] === "1") {
            // Enqueue operation: Push into stack1
            let x = parseInt(command[1]);
            stack1.push(x);
        } else if (command[0] === "2") {
            // Dequeue operation: Move from stack1 to stack2 if stack2 is empty
            if (stack2.length === 0) {
                while (stack1.length > 0) {
                    stack2.push(stack1.pop());
                }
            }
            // Remove from stack2
            output.push(stack2.length > 0 ? stack2.pop() : -1);
        } else if (command[0] === "3") {
            // Front operation: Move from stack1 to stack2 if stack2 is empty
            if (stack2.length === 0) {
                while (stack1.length > 0) {
                    stack2.push(stack1.pop());
                }
            }
            // Print front element
            output.push(stack2.length > 0 ? stack2[stack2.length - 1] : -1);
        }
    }

    console.log(output.join("\n")); /
}


let q = parseInt(readline.question("Enter number of operations: "));
let operations = [];

for (let i = 0; i < q; i++) {
    operations.push(readline.question());
}


queueUsingTwoStacks(operations);
