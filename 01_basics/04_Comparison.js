console.log(2>1);
console.log(2<1);
console.log(2 == 1);   //this is good when we compare same data types
console.log(2 == 2);
console.log(2 >= 1);
console.log(2 <= 1);

console.log("2" < 1);  //javascript automatically convert the "2" into a number
console.log("02" > 1);  //sometimes we can't get the predictable result sometimes

console.log(null>0); //false   
console.log(null==0); //false   //because equality check == and comparison > <= >= > work deffrently  
console.log(null>=0);  //true   //here comparison convert null to a number treating it as 0 that's why null>=0 is true and (null>0 is false

console.log(undefined == 0); //this all are false
console.log(undefined > 0);
console.log(undefined < 0);

//this all are not a good practice to comapre different data types .



/*Strict check (===) : it checks value and data type . (ki value same he per kya data type bhi same he?)
or (==) : ye sirf value check kr rha hota he */

console.log(2 === "2");
console.log(2==2);
console.log(2 == "2")



