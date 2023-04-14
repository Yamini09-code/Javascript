//if, if-else, if-elseif-else
let a = prompt("Hey whats your age");//datatype taken by prompt is always a string
//asks and puts your ans in variable whereas alert tells u a message


//a is a string now converting a value to number
console.log(typeof a)//will give string
a = Number.parseInt()//converting string to number

console.log(typeof a)//will give number
if(a>0){
    alert("this is a valid age")
}
else{
    alert("this is an invalid age")
}

//switch
let b = 4
switch(b){
case 1: console.log("one")
break
case 2: console.log("two")
break
case 3: console.log("three")
break
default:
    console.log("invalid")
}
let age = 18
console.log(age<=18?"yes":"no")

