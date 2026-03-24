// Primitiva and non Primitve data type

//Primitive data type : Number , Boolean ,String , Null ,Undefined , Symbol ,BigInt (7 primitive data types)

const score = 13           //Number
const scoreValue = 33.1

const isLogged = false     //Boolean

const word = "hello"        //String 

const temperature = null     //Null

const Value = undefined       //Undefined

const Id = Symbol('123')          // agr hm same values bhi pass krte he jb bhi dono variabled same nhi he diff he 
                                   // becoz symbol value ko unique banata he (id != anotherid)
const AnotherId = Symbol('123') // Symbol 
console.log(Id == AnotherId)     //false

const bigNumber = 1254799245545487n   //BigInt


/* reference or non-primitive data types : Array , Object , Function */

const heros = ["shaktiman" , "naag raj" , "doga"]   //Array

const myObj = {
    name: "Disha",  //Object(curly braces)
    age: 20,
}

const myFunction = function(){     //Function
    console.log("Hello World")
}



/*
Result-----type od val
number = Number 
boolean = Boolean
string = String
null = Object 
undefined = Undefined
symbol = Symbol
bigint = BigInt 
array = Object
object = Object
function = Function object
*/

console.log(typeof score);             //number 
console.log(typeof scoreValue);        // number
console.log(typeof isLogged);         //boolean
console.log(typeof word);            //string
console.log(typeof temperature);     //object
console.log(typeof Value);        //undefined
console.log(typeof Id);          //symbol
console.log(typeof bigNumber);     //bigint
console.log(typeof heros);        //object
console.log(typeof myObj);       //object
console.log(typeof myFunction);      //function 

/*---------------------------------------------------------------------------------------- */
/*stack memory (primitive data types) and heap memory (non-primitive data types)*/

let myName = "disha"
let yourName = myName
yourName = "gupta"           //any kind od changes will not change the original value becoz here copy of that variable is passed (in stack memory)
console.log(myName);
console.log(yourName);


let userone = {
    name : "disha",
    age:20,
}                            //any kind of changes will lead changes in the original value becoz reference of that varible is passed (ine heap memory)
let usertwo = userone

usertwo.name = "gupta"
console.log(userone);
console.log(usertwo);

