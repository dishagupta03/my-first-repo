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