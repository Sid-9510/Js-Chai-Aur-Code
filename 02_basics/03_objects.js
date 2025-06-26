// There are two mathods to declare an Object 1) by Array literals and 2) by Array constructor, In constructor type declaration there is "singleton" will be made.

// Object literals

const mySym = Symbol("Key1") // This is how we declare the symbol

const jsUsr = {
    Name: "Siddharth",
    "Full Name": "Siddharth Chudasama",
    [mySym]: "myKey1", // This is how we declare Symbols as our key value pair.
    age: 21,
    location: "Surat",
    email: "sid15243@gmail.com",
    isLoggedIn: true,
    lastLoginDays: ["Monday", "Wednesday", "Friday"]
}

// console.log(jsUsr);
// console.log(jsUsr.email);
// console.log(jsUsr["age"]); // We can access elements by dot "." Operator as well as Square brackets "[]".
// console.log(jsUsr["Full Name"]); // In this where a key particularly defined as string, we have to use the Sqare brackets to access it.

// console.log(jsUsr[mySym]); // To access the Symbol we also have to use the Square brackets

jsUsr.Name = "Sid"; // This is how we can Update or Edit our Object.

// console.log(jsUsr.Name);

// Object.freeze(jsUsr) // It prevents the modification of existing property attributes and values, and prevents the addition of new properties.
// jsUsr.location = "Ahmedabad"
// console.log(jsUsr.location);

// If we want to make any function with the existing object
jsUsr.greetings_1 = function () {
    console.log("Hello dear JS User");

}

console.log(jsUsr.greetings_1());

// If we want the reference of any elemet from an existing object we use "This" keyword
jsUsr.greetings_2 = function () {
    console.log(`Hello dear Js Usear ${this.Name}`);
    console.log(`Sorry your full name is ${this["Full Name"]}`);
}

console.log(jsUsr.greetings_2());
