// const promiseOne = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log('async task is compelete');
//      resolve();
//     }, 1000)
// })

// promiseOne.then(() => {
//     console.log('promise is resolved');

// })
// const promiseOne = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log('async task is compelete');
//      resolve();
//     }, 1000)
// }).then(() => {
//     console.log('promise is resolved'); 
// })

// const promiseThree = new Promise((resolve, reject) => {
//     setTimeout(function () {
//         resolve({ username: "Anmol Sharma", email: "anmol@example.com" });
//     }, 1000)
// })
// promiseThree.then(function (user) {
//     console.log(user);
// })

// 
fetch('https://api.github.com/users/hiteshchoudhary')
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log('error is occured');
})