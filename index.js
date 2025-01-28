var a = 10;
let b = 20;

if (true) {
    var a = 30;
    let b = 40;
    
}

console.log(a); // 30
console.log(b); // 40

let age = 25; // Number
let isStudent = true; // Boolean
let score = null; // Null
let city; // Undefined
console.log(typeof name); // Output: string
console.log(typeof age); // Output: number
console.log(typeof isStudent); // Output: boolean
console.log(typeof score); // Output: object (quirk of JS)
console.log(typeof city); // Output: undefined

if(age >= 18) {
    console.log('You are an adult');
} else {
    console.log('You are a minor');
}

function add(a, b) {
    return a + b;
}

let sum= add(10, 20);
console.log(sum); // Output: 30


let text='The rain in spain';
let pattern = /rain/;

if(pattern.test(text)) {
    console.log('Match found');
} else {
    console.log('Match not found');
}


