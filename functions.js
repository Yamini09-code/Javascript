//function is a block of code which helps avoiding repetition desgined to perform a particular task
//Variables declared within a JavaScript function, become LOCAL to the function.
//Local variables can only be accessed from within the function.
//change made in function will be reflected everywhere its used 
//function invokation is a way to use code inside function
//it snot necessary to have parameter in a function
let a =1
let b =2
let c =3 
function Average(x,  y){//function keyword and parameters 
    return 1+(x+y)/2
}
console.log(Average(a,b))//function invoke, value will be returned here 

//arrow function
const sum = (p,q)=>{
    return p+q
}

console.log(sum(9,7))

const hello = ()=> {
    console.log("good")
    return "hello"
}
hello()//calling the arrow function -> takes no parameter
let o = hello()// value returned by hello will be saved in v
console.log(o)
console.log(hello())
//value is returned where function is called 