// forloops 

// const arr = [1, 2, 3, 4, 5]
// for (const num of arr) {
//     console.log(num);
    
// }

// const string = "Anmol Sharma"
// for (const stri of string) {
//     if (stri !== " ") {
//         console.log(`Each Char is ${stri}`);
    
//     }
    
    
// }
// const string = "Anmol Sharma" .replaceAll(" ","" )
// for (const stri of string) {
    
//         console.log(`Each Char is ${stri}`);    
    
// }

// const string = "Anmol Sharma" .replaceAll(/\s/g,"" )
//  for (const stri of string) {
    
//          console.log(`Each Char is ${stri}`);    
    
//  }

// maps 


const map = new Map() 
map.set('IN',"India")
map.set('US',"United State America")
map.set('CAN',"Canada")
map.set('BR',"Brazil")
//console.log(map);
for (const [key,values] of map) {
    console.log(key,':-',values);
    
    
}