//create an array of numbers and take input from the user to add numbers to the array
let r = [4,5,6,7,8]
let n = Number.parseInt(prompt("Enter the number"))
r.push(n)//returns array length
console.log(r)

//keep adding numbers to the above array until zero is added

//with do while loop
let a = [3,4,5,6]
let p
do{
     p = Number.parseInt(prompt("Enter the no"))
    a.push(p)
} while(p!=0);
console.log(a)


//with while loop
let b = [3,4,5,6]
let i
while(i!=0){
    i = Number.parseInt(prompt("Enter the no"))
    b.push(i)
    console.log(b)
}

//filter 
let arr = [40,5,6,70,8,100,50]
let c = arr.filter((b)=>{
   return b%10 == 0
})
console.log(c)


//create an array of square of given numbers
let d = [3,4,5,10]
let y = d.map((item)=>{
  return item*item
})
console.log(y)


//use reduce to find factorial
let o = [1,2,3,4,5]
let factorial = o.reduce((a1,a2)=>{
    return a1*a2
})
console.log(factorial)//returns  a factorial value