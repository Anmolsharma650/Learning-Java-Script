let myDate = new Date()
 // console.log(myDate.toString());
 // console.log(myDate.toDateString());
 // console.log(myDate.toISOString());
 // console.log(myDate.toLocaleString());
 // console.log(myDate.toJSON());
 // console.log(myDate.toTimeString());
 // console.log(myDate.toUTCString());


// let myCreatedDate = new Date(2025, 0, 23)
// let myCreatedDate = new Date(2025, 0, 23, 5, 3)
// let myCreatedDate = new Date("2025-01-14")
 let myCreatedDate = new Date("12-26-2025")
 //console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
 console.log(Math.floor(Date.now()/1000));
