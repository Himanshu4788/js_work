const account_id = 10202 //canot be change
let account_email = "bishthimanshu283@gmail.com" // can be change
var account_password = "12345" // can be change
account_city = "jaipur"// let jaisa use hoga.
let temp   //having undefined value.

console.table([account_id , account_email , account_password , account_city])


var a=45
let b=10
{
    var a = 55
    let b=99;
    console.log(a);
    //output:55
    console.log(b);
    //output:99
}
console.log(a);
//output:55 

console.log(b);
//output:10


/*var jo hai wo change krde hai , same variable ke name wle ko .. 

so,we prefer not to use of var coz of issued in block of scope anf function of scope...

isliye hum let ka use krte hai , kyuki wo scope ko prefer krta hai.
*/