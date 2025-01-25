
/*
there are 7 primitive data type
NULL  ,  number , string , symbol, bigint, boolean , undefined..
*/

let a=null;
let b=2323;
let c=true;

let d= BigInt("567")
let e="himu"
let f=Symbol("i m  a himu")
let g //undefines

console.log(a,b,c,d,e,f,g);
console.log(typeof d); // kaisa data type hai ye



//non primitve data types - obect . 
// key-value  pair bhi bolte hai.
const item = {
    "himu":true,
    "anmol":false,
    "nikita":46,

}

console.log(item["nikita"]); //output:46
