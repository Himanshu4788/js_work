
let arr=[1,"himu","hello" , 606]
console.log(arr);


arr[2]=94
console.log(arr);


arr[5]='$' //arr[4] : empty items show krenge
console.log(arr);


console.log(arr.toString()); // integer --> string.

console.log(arr.join("_")) // output :-  har ek element ke beech mai '_' ajayega..


console.log(arr.pop()) // poped the last element and return the poped value and simultaneously update array
console.log(arr)
console.log(arr.shift()) // remove first element and  return it and update array on the same time.
delete arr[1] // remove index element and lenght doesnt affect
console.log(arr) 


arr.unshift(20) //pushed the element at the first..
console.log(arr)
arr.push(10) // pushed the element at the end..
console.log(arr)






let brr=[10,2 ,5] // ye isko as a string lega phle 1 ata hai toh 10 fir 2 ata hai toh 2 , ye alphabetical order dega naki maths wlai
brr.sort()
console.log(brr);


let compare=(a,b)=>{
  return a-b
}
brr.sort(compare)
console.log(brr);

brr.reverse()
console.log(brr);


let deleted_value =brr.splice(1,3, 1,100 , 1000) 
    //     konsi index se , kitne element hatake add krne hai , kon konse add krne hai .....

console.log(brr);//updated krarega
console.log(deleted_value); // deleted value return karega



let crr=brr.slice(1,3) // ye brr[1,2]
console.log(crr);

