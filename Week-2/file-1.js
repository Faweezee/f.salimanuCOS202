const song = `Twinkle twinkle little star
How I wonder what you are 
Up above the world so high
Like a diamond in the sky
Twinkle twinkle little star
How I wonder what you are`;

console.log(song);

const line = 'How I wonder\n\t what you are';
console.log("\n" + line);

const myName = 'Fawaz';
const age = 18;

const intro = `My name is ${myName} and I am ${age} years old.
I was born in ${new Date().getFullYear() - age}.`;
console.log('\n');
console.log(intro);

/* String methods: 
length
upper
lower
slice
indexOf
lastIndexOf
replace
replaceAll
*/

// Demonstrating string methods
const sampleString = "Hello World";
console.log('\nOriginal string:', sampleString);

// length
console.log('\nLength:', sampleString.length);

// upper (toUpperCase)
const upperString = sampleString.toUpperCase();
console.log('\nUpper:');
console.log('Original ->', sampleString, '\tUpper ->', upperString);

// lower (toLowerCase)
const lowerString = sampleString.toLowerCase();
console.log('\nLower:', lowerString);
console.log('Original ->', sampleString, '\tLower ->', lowerString);

// slice
const slicedString = sampleString.slice(0, 5);
console.log('\nSlice(0,5):');
console.log('Original ->', sampleString, '\tSliced ->', slicedString);

// indexOf
const index = sampleString.indexOf('o');
console.log('\nIndex of "o":', index);

// lastIndexOf
const lastIndex = sampleString.lastIndexOf('o');
console.log('\nLast index of "o":', lastIndex);

// replace
const replacedString = sampleString.replace('World', 'Universe');
console.log('\nReplace "World" with "Universe":');
console.log('Original ->', sampleString, '\tReplaced ->', replacedString);

//replaceAll 
const replaceAllString = sampleString.replaceAll('o', '0');
console.log('\nReplace all "o" with "0":');
console.log('Original ->', sampleString, '\tReplaceAll ->', replaceAllString);