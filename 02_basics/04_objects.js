// const instaUser = new Object() // We can declare objects like this also, we call it the constructor way
const instaUser = {};

instaUser.id = 1001;
instaUser.name = "Sid";
instaUser.isLoggedIn = false;

// console.log(instaUser);

const regularUser = {
    usr1 : {
        name : "Sid",
        email : "sid@gmail.com",
        city : "Ahmedabad",
        work : {
            des : "Software dev",
            office : "Central mall" 
        }
    },
    usr2 : {
        name : "Hrdx",
        email : "hrdx@gmail.com",
        city : "Gandhinagar",
        work : {
            des : "Managing drctr",
            office : "Central mall"
        }
    },
    usr3 : {
        name : "Aki",
        email : "aki@gmail.com",
        city : "Surat",
        work : {
           des : "Data Anlst",
            office : "Central mall" 
        }
    }
}


// console.log(regularUser.usr1.work.des);

const obj1 = {1:'a', 2:'b', 3:'c'}
const obj2 = {4:'d', 5:'e', 6:'f'}
const obj3 = {7:'g', 8:'h', 9:'i'}

// const allObj = {obj1, obj2, obj3}; // By this way we'll get objects in object
// const allObj = Object.assign({}, obj1, obj2, obj3); // By this way we'll get all the entities of objects in one object

const allObj = {...obj1, ...obj2, ...obj3} // This Spread method is modern and easy way to combine all the objects

// console.log(allObj);

const usr = [
    {
        id : 1001,
        email : "abc@gmail.com"
    },
    {
        id : 1002,
        email : "abd@gmail.com"
    },
    {
        id : 1003,
        email : "abe@gmail.com"
    },
];

// console.log(usr);
// console.log(usr[1].email);

// console.log(Object.keys(instaUser));
// console.log(Object.values(instaUser));
// console.log(Object.entries(instaUser));

// console.log(instaUser.hasOwnProperty("isLoggedIn"));
// console.log(instaUser.hasOwnProperty("isLogged"));
