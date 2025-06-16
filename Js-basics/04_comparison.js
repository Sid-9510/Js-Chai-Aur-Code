// Some commmon comparison

// console.log(2>1);
// console.log(2<1);
// console.log(2<=1);
// console.log(2>=1);
// console.log(2==1);
// console.log(2!=1);

// Comparison between diffrent datatypes

// console.log("2" > 1);
// console.log("02" > 1);

// Comparison bitween null & undefined

// console.log(null>0);
// console.log(null==0);
// console.log(null>=0); ...> Here in first two it becomes false and for the last one it shows true it means sometimes "==" converts the null into NaN and ">, <, >=, <=" converts the null into 0, and this kind of method of comparing bitween two diffrent types gives unpredictable outputs which isn't approachable method of comparing also it decrease code readability


// console.log(undefined == 0);
// console.log(undefined > 0);
// console.log(undefined < 0); ...> Here in case of "undefined" this will always give us false value  

// Comparison with "===" 

// console.log("2" === 2); // This will give us false cause the "===" not only compare the values but also compare the datatypes, if datatypes are diffrent then it'll not comparable.
