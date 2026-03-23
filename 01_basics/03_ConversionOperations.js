let score = 33
//console.log(typeof score);

let word = "33abc"
//console.log(typeof word);
let ValueInNum = Number(word)   //agr koi string he jo number me convert ho hi nhi skti he to uska type to number aajayga per uski value NaN Aaaygi which is "not a number"
//console.log(typeof ValueInNum);
//console.log(ValueInNum);

let Empty = null
let InNum = Number(Empty)
//console.log(InNum);  //0

let value = undefined
let VInNum = Number(value)
//console.log(VInNum);   //NaN                                                                                                           

let BOOL = "disha"
let Intrue = Number(BOOL)
//console.log(Intrue);  //NaN
//NOW CONVERT INTO BOOLEAN

let num = "disha"
let bool = Boolean(num)
//console.log(bool);  //true

let num1 = 33
let hello = String(num1)
//console.log(hello);   
//console.log(typeof num1)   

//"33" => 33        1 => true
//"3abc" => NaN     0 => false
//true => 1         "" => 0
//false => 0        "Disha" => 1

/*-----------------------------------------Operations--------------------------------------------------------*/
let value1 = 3
let NegValue = -value1
//console.log(NegValue)

let str1 = "Hello"
let str2 = " Disha"
let str3 = str1 + str2
//console.log(str3);

console.log("1"+2);
console.log(1+"2");
console.log("1"+"2");
console.log("1"+2+2);
console.log(1+2+"3");

console.log(true);
console.log(+true);
//console.log(true);
console.log(+"");

//console.log(true+);   error

/*let number1, number2, number3
number1 = number2 = number3 = 2+2    not a good practice */

let gameCounter = 100
gameCounter++
console.log(gameCounter)

//prefix and postfix 

let x = 3
const y = x++
console.log("x = ", x ," y = ", y)   //postfix

let w = 3
const z = ++w
console.log("w = ", w ," z = ", z)   //prefix

/*postfix - phle value use hoti bad me change hoti he 
  prifix - phle value change hoti he bad me use hoti he */