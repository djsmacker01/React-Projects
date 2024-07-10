const readline = require('readline');

// Setup readline interface
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// // Candidate function
// function findSecondLargest(bst) {
//     if (bst.length === 0) {
//         return -1; // Empty BST
//     }

//     let largestVal = -1;
//     let secondLargestVal = -1;

//     let i = 0;
//     while (i < bst.length && bst[i] !== -1) {
//         if (bst[i] > largestVal) {
//             secondLargestVal = largestVal;
//             largestVal = bst[i];
//         } else if (bst[i] > secondLargestVal && bst[i] !== largestVal) {
//             secondLargestVal = bst[i];
//         }

//         // Move to the right child
//         if (i * 2 + 2 < bst.length && bst[i * 2 + 2] !== -1) {
//             i = i * 2 + 2;
//         } else if (i * 2 + 1 < bst.length && bst[i * 2 + 1] !== -1) {
//             // If there's no right child, move to the left child
//             i = i * 2 + 1;
//         } else {
//             // No more children, stop the loop
//             break;
//         }
//     }

//     return secondLargestVal;
// }

// // Get input from stdin
// rl.question('', (input) => {
//     const bst = input.split(' ').map(Number);

//     // Call candidate function
//     const result = findSecondLargest(bst);

//     // Print result
//     console.log(result);

//     // Close readline interface
//     rl.close();
// });

