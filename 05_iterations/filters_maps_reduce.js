//// fiters  properties ////

const Books = [
    { title : 'book one', genera : "adventure", publish : '1990', edition : "2000"

},
{ title : 'book two', genera : "romance", publish : '1995', edition : "2003"

},
{ title : 'book three', genera : "science-fi", publish : '2000', edition : "2007"

},
{ title : 'book four', genera : "romance", publish : '2005', edition : "2009"

},
{ title : 'book five', genera : "adventure", publish : '1850', edition : "2006"

},
{ title : 'book six', genera : "science-fi", publish : '1987', edition : "2008"

},
{ title : 'book seven', genera : "hisory", publish : '1650', edition : "2010"

}
]
let userBooks =Books.filter((bk) => bk.genera === "science-fi"  )
 userBooks =Books.filter((bk) => {  return bk.publish >= "1995 " && bk.genera ==="science-fi"}  )
 //console.log(userBooks);

 ///  maps properties
//  const myNumber = [1,2,3,4,5,6,7,8,9,10]
//  const newNumber = myNumber.map( (num) =>{
//    return num + 10
//  })
//  console.log(newNumber);
 
const myNumber = [1,2,3,4,5,6,7,8,9,10]
 const newNumber = myNumber 
         .map( (num) => num * 10)
         .map( (num) => num + 1)
        .filter( (num) => num >= 30)
 
 //console.log(newNumber);

 //// reduce /////

const counting = [1,2,3,4]
const newcount= counting.reduce((acc,currval) =>  {acc + currval 
console.log(`acc:${acc} and curr value is ${currval}`);
return acc+currval},0 )

console.log(newcount);

 