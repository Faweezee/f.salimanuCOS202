const students = ["Alice", "Bob", "Charlie", "David", "Eve"];
// Accessing elements
console.log(students[0]);
console.log(students[2]);
console.log(students.length);
// Modifying elements
students[1] = "Bobby";
console.log(students);
// const people = students; equal
// const people = [...students]; not equal
// OR
// const people = students.slice(); not equal

// Demonstrating array methods with examples
console.log("\n=== Array Methods Demonstration ===\n");

// Sample arrays for demonstration
let numbers = [1, 2, 3, 4, 5];
let fruits = ["apple", "banana", "cherry", "date"];
let mixed = [10, "hello", true, null];

// 1. push - adds elements to the end
console.log("1. push - adds elements to the end");
console.log("Original:", numbers);
numbers.push(6);
console.log("After push(6):", numbers);

// Additional push example using spread operator
console.log("Using spread operator with push:");
let additionalNumbers = [7, 8, 9];
numbers.push(...additionalNumbers);
console.log("After push(...[7, 8, 9]):", numbers);

// 2. pop - removes the last element
console.log("\n2. pop - removes the last element");
console.log("Original:", numbers);
let popped = numbers.pop();
console.log("Popped element:", popped);
console.log("After pop:", numbers);

// 3. shift - removes the first element
console.log("\n3. shift - removes the first element");
console.log("Original:", numbers);
let shifted = numbers.shift();
console.log("Shifted element:", shifted);
console.log("After shift:", numbers);

// 4. unshift - adds elements to the beginning
console.log("\n4. unshift - adds elements to the beginning");
console.log("Original:", numbers);
numbers.unshift(0);
console.log("After unshift(0):", numbers);

// 5. find - returns the first element that satisfies the condition
console.log("\n5. find - returns the first element that satisfies the condition");
console.log("Array:", numbers);
let found = numbers.find(num => num > 3);
console.log("First number > 3 (find(num => num > 3)):", found);

// 6. sort - sorts the array
console.log("\n6. sort - sorts the array");
let unsorted = [3, 1, 4, 1, 5, 9, 2, 6];
console.log("Original:", unsorted);
unsorted.sort();
console.log("After sort:", unsorted);

// 7. filter - creates a new array with elements that pass the test
console.log("\n7. filter - creates a new array with elements that pass the test");
console.log("Original:", numbers);
let filtered = numbers.filter(num => num % 2 === 0);
console.log("Even numbers:", filtered);

// 8. map - creates a new array with the results of calling a function for every element
console.log("\n8. map - creates a new array with the results of calling a function for every element");
console.log("Original:", numbers);
let mapped = numbers.map(num => num * 2);
console.log("Doubled:", mapped);

// 9. forEach - executes a function for each array element
console.log("\n9. forEach - executes a function for each array element");
console.log("Array:", fruits);
fruits.forEach((fruit, index) => {
    console.log(`${index}: ${fruit}`);
});

// 10. includes - checks if an array contains a certain element
console.log("\n10. includes - checks if an array contains a certain element");
console.log("Array:", fruits);
console.log("Includes 'banana':", fruits.includes("banana"));
console.log("Includes 'grape':", fruits.includes("grape"));

// 11. slice - returns a shallow copy of a portion of an array
console.log("\n11. slice - returns a shallow copy of a portion of an array");
console.log("Original:", numbers);
let sliced = numbers.slice(1, 4);
console.log("Slice(1, 4):", sliced);

// 12. length - property that returns the number of elements
console.log("\n12. length - property that returns the number of elements");
console.log("Array:", numbers);
console.log("Length:", numbers.length);

// 13. concat - merges two or more arrays
console.log("\n13. concat - merges two or more arrays");
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
console.log("Array 1:", arr1);
console.log("Array 2:", arr2);
let concatenated = arr1.concat(arr2);
console.log("Concatenated:", concatenated);

// 14. reverse - reverses the array in place
console.log("\n14. reverse - reverses the array in place");
let toReverse = [1, 2, 3, 4, 5];
console.log("Original:", toReverse);
toReverse.reverse();
console.log("After reverse:", toReverse);

// 15. reduce - executes a reducer function on each element, resulting in a single output value
console.log("\n15. reduce - executes a reducer function on each element, resulting in a single output value");
console.log("Array:", numbers);
let sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log("Sum of all elements:", sum);

// 16. every - tests whether all elements pass the test
console.log("\n16. every - tests whether all elements pass the test");
console.log("Array:", numbers);
let allPositive = numbers.every(num => num > 0);
console.log("All positive:", allPositive);

// 17. fill - fills all the elements with a static value
console.log("\n17. fill - fills all the elements with a static value");
let toFill = [1, 2, 3, 4, 5];
console.log("Original:", toFill);
toFill.fill(0);
console.log("After fill(0):", toFill);

// 18. splice - changes the contents of an array by removing or replacing existing elements
console.log("\n18. splice - changes the contents of an array by removing or replacing existing elements");
let spliceArray = [1, 2, 3, 4, 5, 6];
console.log("Original:", spliceArray);
// Replace 2 elements starting from index 2 with new elements
let removed = spliceArray.splice(2, 2, 'a', 'b');
console.log("Removed elements:", removed);
console.log("After splice(2, 2, 'a', 'b'):", spliceArray);

// 19. indexOf - returns the first index at which a given element can be found
console.log("\n19. indexOf - returns the first index at which a given element can be found");
console.log("Array:", fruits);
console.log("Index of 'banana':", fruits.indexOf('banana'));
console.log("Index of 'grape':", fruits.indexOf('grape'));

// 20. some - tests whether at least one element passes the test
console.log("\n20. some - tests whether at least one element passes the test");
console.log("Array:", numbers);
let hasEven = numbers.some(num => num % 2 === 0);
console.log("Has even number:", hasEven);

// 21. findIndex - returns the index of the first element that satisfies the condition
console.log("\n21. findIndex - returns the index of the first element that satisfies the condition");
console.log("Array:", numbers);
let foundIndex = numbers.findIndex(num => num > 3);
console.log("Index of first number > 3:", foundIndex);

// 22. join - joins all elements into a string
console.log("\n22. join - joins all elements into a string");
console.log("Array:", fruits);
let joined = fruits.join(', ');
console.log("Joined with comma:", joined);
let joined2 = fruits.join(' | ');
console.log("Joined with pipe:", joined2);

// 23. flat - flattens nested arrays
console.log("\n23. flat - flattens nested arrays");
let nestedArray = [1, [2, 3], [4, [5, 6]]];
console.log("Nested array:", nestedArray);
let flattened = nestedArray.flat();
console.log("Flattened (depth 1):", flattened);
let deeplyFlattened = nestedArray.flat(2);
console.log("Flattened (depth 2):", deeplyFlattened);