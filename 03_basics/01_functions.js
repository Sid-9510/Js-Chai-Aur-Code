function sayMyName(){
    console.log("S");
    console.log("I");
    console.log("D");
    console.log("D");
    console.log("H");
    console.log("A");
    console.log("R");
    console.log("T");
    console.log("H");
}

// sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))

/********************* Functions with objects and array *********************/

function calculateCartPrice(val1, val2, ...num1){
    console.log(num1);
}

// calculateCartPrice(200, 300, 500, 100, 450);

const user = {
    userName : "Siddharth",
    price : 599
}

function handleObject (anyObject){
    console.log(`Username is ${anyObject.userName} and the price is ${anyObject.price}`);
    
}

// handleObject(user);
// There another way to do this that we can call the object directly

handleObject({
    userName : "Sid",
    price : 1099
})

const myArray = [200, 400, 500, 700, 1000, 800, 100];

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myArray))

console.log(returnSecondValue([300, 500, 1000, 200]));