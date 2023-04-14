//map() -> array map method
//array can have repeated values
//creates a new array by performing some operation on each array element 
//map and filter return an array
let a = [45,23,1]
let b = a.map((value)=>{//b is a new array
  console.log(value)
  return value +1//returns a new array -> new array will be made out of returned values
})
console.log(b)//b is new array given by map after performing op
console.log(a)//original array remains same

//can pass value, index, array as arg
let c = a.map((value,index)=>{//b is a new array
    console.log(value,index)
    return value +1
  })


  let d = a.map((value,index,array)=>{//b is a new array
    console.log(value,index,array)
    return value +index
  })
  console.log(d)
  



  //Array filter method -> values which pass the condition will become new array by filter method
  //values for which filter method condition holds true will be returned in new array
  arr2 = [45,23,21,0,3,5]
  let a2= arr2.filter((a)=>{
       return a<10//new array after condition satisfaction
  })
  console.log(a2)
  console.log(arr2)//original array remains same

  //reduce 
  //reduce returns a value
  let arr3 = [1,2,3,5,2,1]

  let n3 = arr3.reduce((h1,h2)=>{
         return h1+h2
  })
  console.log(n3)


  let reduce_func = (h1,h2)=>{
            return h1*h2
  }
  let q = arr3.reduce(reduce_func)
  console.log(q)
  