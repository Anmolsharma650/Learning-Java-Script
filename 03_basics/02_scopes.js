//   //var c = 3000 
//   let a = 300
// if (true) {
//     let a = 10
//     const b = 20
//     //var c = 50
//     console.log("inner:",b)
// }
// console.log(a);


// function one(){
//     const username = "Anmol "
//     console.log(username);

//     function two(){
//         const website = "github"
//         console.log(username);

//     }
//     two()

// }

// if (true) {
//     const name = "Anmol"
//     if (name === 'Anmol') {
//         const website = "youtube "
//         console.log(name + website);

//     }
//     console.log(name);


// }

function addnumber(num) {
    return num + 2

    function addTwoNumber(num) {
        return num + 1
    }
    console.log(addTwoNumber(7))
}
console.log(addnumber(7))