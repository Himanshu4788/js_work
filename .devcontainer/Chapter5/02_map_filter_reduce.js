
/* 
for each :- jb humko same array mai opeeration krna hota hai.
map :-  jb humko ek nayaa array banana hota hai . 
filter :- ye filter krta hai element ko condition bases pe
reduce :- ye reduce krta hai array ko in a single value
*/



let arr=[45,23,24,1,3,4]


// same kaam krega as for each loop
let str=arr.map((val) =>{
    console.log(val);
     return val+1 // jo bhi return hoega wo seedha str mai chala jayega 
})

console.log(str);


//filter 
let btt=arr.filter((it)=>{
    return it>5
})
console.log(btt);




let ans=arr.reduce((i,j)=>{
    return i+j
})

console.log(ans);
