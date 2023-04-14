//for forin for of for each array.from
let num = [3,54,1,2,4]
//for loop
for(let i =0; i<num.length;i++){
    console.log(num[i])
}

//forEach loop
//calls a function for each array element

num.forEach((element)=>{
 console.log(element*element)
})

//Array.from 
//creates an array from any other object
//array can be created from a string, an object, an HTML collection object etc
let name = "Harry"
let arr = Array.from(name)
console.log(arr)

//for of
//for of loop can be used to get values from an array
for(let i of num){
    console.log(i)
}


//for in 
//for in loop can be used to get keys or here index from an array 
for(let item in num){
    console.log(item)
}
console.log(typeof num)//array is an object