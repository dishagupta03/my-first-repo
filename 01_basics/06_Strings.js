const name = "Disha"
const lastname = "Gupta"
console.log(name + " "+ lastname);  //this is very basic method.

//instead of this , we use backticks , there is interpolation occurs.

console.log( `Hello guys my name is ${name} and my surname is ${lastname}`);  //Hello guys my name is Disha and my surname is Gupta
console.log( `Hello guys my name is ${name,lastname}`)  //Hello guys my name is Gupta 
  //because java script me comma ka mtlb he phla value ignore hoga and second value include hoga

console.log(`hello guys my name is ${name} ${lastname}`);



/*Declaration of string as a object*/
const gameName = new String("Disha-Gupta");

/*java script me koi string bnti he to vo internally object ki trh behave krti he 
  we have key and value in a object . so, if we want to access value we use its key */

  console.log(gameName[2]); //s



  /*we can also get prototype.
   prototype btata he ki :
   1. object ke pass kon se method/properties available he .
   2. wo kis se inherit kr rha he */

   console.log(gameName.__proto__);  //{}

   /*now, there are so many properties and methods are there ,*/

   console.log(gameName.length); //11
   console.log(gameName.toUpperCase()); //DISHA-GUPTA
   console.log(gameName.toLowerCase());  //disha-gupta
   console.log(gameName.charAt(2));  //s
   console.log(gameName.indexOf("h"));  //3
   
   const string1 = gameName.substring(0,4); //Dish   //end vala index exclude hota h
   const string2 = gameName.slice(0,3);   //Dis
   const string3 = gameName.slice(-8,5);  //ha

   console.log(string1);
   console.log(string2);
   console.log(string3);
   
   

   let url = "https/google%20helloguys.com"
   console.log(url.includes("google"));  //true
   console.log(url.includes("happy"));   //false

   console.log(url.replace("%20","-"));  //https/google-helloguys.com

   const hello = "     gupta      "
   console.log(hello);  //     gupta      
   console.log(hello.trim());  //gupta      
   
   console.log(gameName.split("-"));  //[ 'Disha', 'Gupta' ]
   
