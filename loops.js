//for while do while for in for of
//program to add first n natural numbers
let sum =0;
for(let i =1;i<=10;i++){
    sum = sum +i;
}
console.log(sum)

//program to find factorial
let ans =1;
for(let i =1;i<=10;i++)
{
    ans = ans*i;

}
console.log(ans)


let obj ={
    harry: 90, 
    shubh:56,
    ritika:57,
    shiv:23
}
for(let a in obj){//for in deals with object keys
    console.log(a+ "\n")
    console.log("Marks of "+ a+ " " + "are "+ obj[a])
}

//in for of loop the object should be iterable _ array, string
for(let b of "harry"){
    console.log(b)
}
let p =0;
 while(p<10){
    console.log(p)
    p++//increment
 }

 let q = 10
 do{
    console.log(q)
    q++
 }while(q<20)
 