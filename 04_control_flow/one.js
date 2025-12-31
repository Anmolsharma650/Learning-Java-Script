// if (true) {
//     enter the if statement
// }
// if (false) {
//     does not enter the statement
// }


// condition =    >,<,==,=>,<=,===,!=


// const score = 200
// if (score>100) {
//     const power = "fly"
//     console.log(`user power:${power}`);
    
    
// }

// const balance = 20000
// //if (balance >10000) console.log("test");// implecet scope maan lena ki yaha scpoe hai
// if (balance > 10000) {

//     console.log(`balance reamninig: ${10000}`);
// }
// else if (balance > 15000) {
   
//     console.log(`balance reamninig: ${10000}`);
    
// }
// else if (balance > 20000) {
    
//     console.log(`balance reamninig: ${10000}`);
    
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoggle = true
const loggedInFromEmail = true

if (userLoggedIn && debitCard) {
    console.log("continue to buy something");

}

if (loggedInFromEmail ||  loggedInFromGoggle) {
     console.log("user loggedin");
    
}