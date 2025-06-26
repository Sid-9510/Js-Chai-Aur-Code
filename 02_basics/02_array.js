const marvelHeros = ["Ironman", "Captain", "Thor", "Spiderman"];
const dcHeros = ["Superman", "Batman", "Flash", "Wonderwoman"];

marvelHeros.push(dcHeros);

// console.log(marvelHeros);

const allHeros = marvelHeros.concat(dcHeros);

// console.log(allHeros);

const allNewHeros = [...marvelHeros, ...dcHeros]; // This is spread function to concatinate an array elements.

// console.log(allNewHeros);

const numArray = [1,2,3,[4,5,6],7,8,[4,5,[6,7,8]]];

// console.log(numArray);

const newNumArray = numArray.flat(Infinity); // It's recommended to add The maximum recursion depth but here we add Infinity for practice.

// console.log(newNumArray);

// console.log(Array.isArray("Siddharth"));

// console.log(Array.from("Siddharth"));
// console.log(Array.from({Name : "Siddharth"}));

// const myObj = {
//     Name : "Siddharth", 
//     Age : 21,
//     City : "Surat"
// }

// console.log(Array.from(Object.entries(myObj))); // To get both (Keys and Values) as an Array, we have to convert it by "Object.entries"

// console.log(Array.from(Object.keys(myObj))); // To get only keys as an Array, we have to convert it by "Object.keys"

// console.log(Array.from(Object.values(myObj))); // To get only values as an Array, we have to convert it by "Object.values"

let Var = 21;
let Var_2 = 30;
let Var_name = "Sid";
let Var_value = true;

console.log(Array.of(Var, Var_2, Var_name, Var_value)); // To get the variables or arguments as an Array









