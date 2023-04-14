//26th march
//print marks of student in object using for loop

let obj = {
    harry: 98,
    rohan: 70,
    aakash:7

}
//problem 2
for(let key in obj){//a here is key
    console.log(obj[key])

}
//problem 1
for(let i =0;i<Object.keys(obj).length; i++){
    console.log("marks of"+ Object.keys(obj)[i]+ "is"+ obj[Object.keys(obj)[i]])
}
//problem 3
/*let cn = 4
let i//not initalized so undefined at start
 while(i!=cn){
    //i = prompt("enter a number")
    console.log("try again")

 }
 console.log("you entered correct number")
 */

 //function to find mean of five numbers

 function mean(a,b,c,d,e){
    return (a+b+c+d+e)/5
 }
 console.log(mean(3,2,4,5,6))

const m = (p,q,r,s,t)=>{
    return (p+q+r+s+t)/5
}
console.log(m(2,3,4,5,6))
