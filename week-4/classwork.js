const numbers = [42, 7, 91, 23, 68, 15, 34];
const filtered = numbers.filter(num => num%2 !== 0);
console.log("Original array:", numbers);
console.log(filtered);

const people = ["Bob", "Alice", "Christopher", "Emma", "Alexander", "Sophia", "William"];
const longNames = people.filter(name => name.length <= 5);
console.log("\nOriginal array:", people);
console.log("Names not longer than 5 characters:", longNames);

