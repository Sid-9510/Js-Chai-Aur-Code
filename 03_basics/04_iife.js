// Immediately Invoked Function Expression [IIFE]
// This is used to immediately invoke or execute a function to avoid polution from the globle variables

// Named IIFE
(function dbConnect(){
    console.log("db connected");
    
})(); // Here there is necessary to put semicolon cause the iife doesn't know where to stop so, to end first iife and to let start second iife it's necessary to put semicolon

// Simple IIFE
((name)=>{
    console.log("db connected two " + name);
    
})("Siddharth")