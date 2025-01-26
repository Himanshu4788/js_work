
//create a variable of string and add a number into it.
let str="hello world" +2
let nums=8+"hello"

console.log(str); //output hello world2
console.log(nums); //output hello world2



//use typeof operation in above datatype.
console.log(typeof(str));//string
console.log(typeof(nums));//string


//create a const and let  object and in future can it hold a number..
const a={
    name:"himu",
    rollno:75,
    class:"h1"
}
// a=23; // not we can change it for const. gave error


let b={
    naam:"himu",
    rollno:"75",
}
b=95 ; // yes we can change it.



// can we update anoter key-value and change the  key-value info of const in above question.
a['city']="dhampur"; // yes we can
console.log(a);




a['name'] ="lalu" //yes, we can
console.log(a);


