// immediately invoked functions expression (IIFE)
(function clashOfClan(){
    console.log(`DB CONECTED`);
    
}) ();

(() => {
    console.log(`DB TWOCONECTED`);
    
}) ();

((name) => {
    console.log(` ${name} `);
    
}) ('kamal')
