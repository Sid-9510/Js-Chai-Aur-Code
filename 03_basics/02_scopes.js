//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const userName = "Sid";
    function two(){
        const website = "Youtube";
        console.log(userName);
        
    }
    // console.log(website);
    two();

};
// one();

if (true) {
    const username = "Siddharth";
    if (username === "Siddharth") {
        const website = "Youtube";
        // console.log(username + website);
    }
    // console.log(website);
    
}
// console.log(username);

// ++++++++++++++++++ interesting ++++++++++++++++++

// console.log(addone(5));

function addone(num){
    return num + 1
}

// console.log(addOne(6));

const addOne = function(num){
    return num + 2
}
