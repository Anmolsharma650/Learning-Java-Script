//Object literals

const mySym = Symbol("ganne ka juus bsda gilas 20 rupee")
const js_user = {
    name : "Anmol Sharma",
    age: 22,
    location: "Batra Colony Panipat haryana",
    email: "anmolsharma9896957756@gmail.com",
    isLoggedIn : false,
    lastLoggedInDays :["monday","saturday"],
    [mySym] :"gaane ka juus bada gilas 20 rupee",
}

//console.log(js_user .location);
//console.log(js_user ["age"]);
//console.log(js_user ["name"]);
//console.log(js_user [mySym]);
//console.log(js_user ["email"]);

// js_user.email = "anmolsharma@google.com"
// Object.freeze(js_user)
// js_user.email = "anmolsharma@google.com"
// console.log(js_user)