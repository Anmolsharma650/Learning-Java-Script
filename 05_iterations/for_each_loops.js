const coding = ["C#", "C++", "JAVA", "PYTHON", "RUBY"]
coding.forEach(function (val) {
    //console.log(val);

})


const myCoding = [
    {
        languageName: "javascript",
        languagefile: "js",
    },
    {
        languageName: "python",
        languagefile: "py",
    },
    {
        languageName: "c++",
        languagefile: "cpp",
    }
]
myCoding.forEach((item) => {
    //console.log(item.languagefile);

})

const myNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]   


const newNumber = myNumber.filter( (val) => {
    return val > 5
})
//console.log(newNumber);
