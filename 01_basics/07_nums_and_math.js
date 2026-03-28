const score = 400
console.log(score);   //400  yha javascript ne automatically detect kiya he ki ye number he 


/*hm explicitly bhi define kr skte he */

const balance = new Number(100)
console.log(balance);   //[Number : 100]  ab yha to pakka he ki ye number hi he.

/*there are some properties from that we can convert into string and so on*/

console.log(balance.toString());  //100    ab ye string me convert ho gya he to hm ispe string vali properties apply kr skte he 
console.log(balance.toString().length);  //3

/*decimal kha tk chahiye ye fix kr skte he */
console.log(balance.toFixed(2)); //100.00

/*precision se hme ye milta he ki hme kitne digits me ans chahiye */
const othernum = 23.8969
console.log(othernum.toPrecision(3));  //23.9      

const othernum1 = 123.8969
console.log(othernum1.toPrecision(3));  //124

const othernum2 = 1123.8969
console.log(othernum2.toPrecision(3));  //1.12e+3


/*now 10000000 esi values readable nhi hoti , readable banane ke liye (commas lg jate he)*/
const hundreds = 1000000
console.log(hundreds.toLocaleString());   //1,000,000
console.log(hundreds.toLocaleString('en-IN'));  //10,00,000  ACCORDING TO INDIANS




/*-------------------------------------------------MATH------------------------------------------------------*/
console.log(Math);

console.log(Math.abs(-4));  //abs is absolute , negative value ko poitive kr dets h

console.log(Math.round(4.3));  //4 round-off
console.log(Math.round(5.6)); //6 

/*but if we want to control value ki uper vali leni he ya niche vali , so we have celing and floor function*/
console.log(Math.ceil(4.2)); //uper value 5
console.log(Math.floor(5.6)); //lower value 4

console.log(Math.min(4,5,2,3));  //2
console.log(Math.max(4,5,2,3));  //5



/*Math library mostly use in Math.random */

/*Math.random javascript ka built in method he jo random numbers generate krta he used in dice game ... and iski value 0 se 1 ke bich lie krti he*/

console.log(Math.random());
console.log(Math.random()*10);
console.log(Math.random()*10 +1);
console.log(Math.floor(Math.random()*10)+1);   //single digit me value aaygi


/*formula:  Math.floor(Math.random()*(max-min+1))+min*/ 

/*if we want ki value 5 se 15 ke bich hi aaye toh we use formula in that last vala min mtln minimum value ye he yha se suru hogi and (max-min+1) is range */

console.log(Math.floor(Math.random()*(15-5+1))+5); // ab 5 se 15 tk me koi bhi random value aate rhegi 