let mydate = new Date()
console.log(mydate);   //2026-03-28T17:34:20.312Z

console.log(mydate.toString());    //Sat Mar 28 2026 17:34:20 GMT+0000 (Coordinated Universal Time)
console.log(mydate.toDateString());  //Sat Mar 28 2026
console.log(mydate.toLocaleString());  //3/28/2026, 5:34:20 PM

let mycreateddate = new Date(2023,0,23)
console.log(mycreateddate.toDateString());  //Mon Jan 23 2023

let myDate = new Date(2023,0,25,5,3)
let myDate1 = new Date("2023-01-14")
let myDate2 = new Date("01-14-2023")
console.log(myDate.toLocaleString());  //1/25/2023, 5:03:00 AM
console.log(myDate1.toLocaleString());  //1/14/2023, 12:00:00 AM
console.log(myDate2.toLocaleString());  //1/14/2023, 12:00:00 AM

/*-------------------------Time Stamps---------------------------------*/
let mytimestamp = Date.now()   //current date dega in miliseconds
console.log(mytimestamp);

console.log(mycreateddate.getTime());



/*if we want to convert milisecon into second */
console.log(Math.floor(Date.now()/1000));


/*some more methods*/
let newdate = new Date()
console.log(newdate);
console.log(newdate.getMonth());   //isse indexing 0se start hoti he isloye niche vala jada prefer krte he taki jada readable ho
console.log(newdate.getMonth()+1);
console.log(newdate.getDay());
console.log(newdate.getDate());

/*------------------------------------MOST IMPORTANT ------------------------------------------------------------*/
/*-----------------------toLocalString object vala syntax---------------------------------------------------------- */

let date = new Date();
let result = date.toLocaleString("en-IN",{
    timeZone: "Asia/Kolkata",
    year: "2-digit",
    month: "long",
    day: "2-digit",
    weekday: "long",
    hour: "2-digit",
    minute :"2-digit",
    second : "2-digit",
    hour12: true
});

console.log(result);