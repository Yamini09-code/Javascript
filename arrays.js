//array is an object in js
//array is collection of items 
//array are contiguous and can store values of different datatypes also in js
//arrays are variables which can hold more than one value
let marks = [91,92,39,44,null,false, "not given"]
console.log(marks)// prints whole array

//accessing array values
console.log(marks[0])
console.log(marks[1])
console.log(marks[2])
console.log(marks[3])
console.log(marks[4])
console.log(marks[5])
console.log(marks[6])
console.log(marks[7])//for not present index will return undefined

//array length
console.log(marks.length)

//changing values
//arrays are mutable unlike strings. arrays can be changed
marks[1] = 78//array can edited
marks[7]=89//item can be added to array
console.log(marks)//original array is changed here
console.log(marks.length)
console.log(typeof(marks))//array is an object


//print elements of array using for loop
let m = [9,2,3,4,null,false, "not given"]
for(let i =0;i<m.length;i++){
    console.log(m[i])
}

//array methods
//some methods return a new array and some change the original
let num = [1,2,3,34,4]
//toString()
//converts array to a string of comma separated values 
console.log(num.toString())
console.log(typeof(num))//array original here remains obj though
let c = num.toString()
console.log(typeof(c))//c is string
console.log(num)//original remains same


//join()
//joins all array elements using a separator
console.log(num.join("-"))
let d = num.join("-")
console.log(typeof(d))//d is a string
console.log(num)//original remAINS same

//pop()
//removes last element from the array
//changes original array
let e = num.pop()//returns the popped element
console.log(num)//original array is changed
console.log(e)

//push()
//adds a new element at the end of the array
//modifies original array
console.log(num.push(89))//num.push() returns new array length
console.log(num)//num is modified

//shift()
//removes first element and returns it
let r = num.shift()//num.shift() returns the removed element
console.log(r)
console.log(num)//original array changed

//unshift()
//modifies original array
//adds element at the beginning 
//returns new array length 
console.log(num.unshift(4))//new array length
console.log(num)//array modified 

//delete -> delete is not a method but an operator
let nim = [1,2,3,4,5,6,7,8,9]
console.log(nim)

//interview question
delete nim[0]//removes element at index 0 but length remains same 
console.log(nim)//modifies original array
console.log(nim.length)//but length of original array remains same


//concat()
//joins array to the given array
//returns new array doesnt change original arrays
n1 = [1,2,3]
n2 = [4,5,6]
n3=[7,8,9]
console.log(n1.concat(n2,n3))
console.log(n1)
console.log(n2)
console.log(n3)

//sort()
//sorts array alphabetically not in increasing order
//modifies original array
let k = [3,8,2,7,22]
console.log(k.sort())// 22 will come after 2 as array is getting sorted alphabetically
console.log(k)

//Simply subtracting b from a will always return greater than zero if a is larger than b, 0 if they are equal, or less than zero if a is less than b. So it meets the requirements for a compare function.
/*
The "compare" function must take two arguments, often referred to as a and b. Then you make the compare function return 0, greater than 0, or less than 0, based on these values, a and b.

Return greater than 0 if a is greater than b
Return 0 if a equals b
Return less than 0 if a is less than b
*/
let compare =(a,b)=>{
    return a-b//for ascending order

}
//sort() also uses compare function
let y = [3,7,1,2,33,99,9]
y.sort(compare)
console.log(y)


//compare function

let compare2 =(a,b)=>{
    return b-a//for descending order

}
let u = [3,7,1,2,33,99,9]
u.sort(compare2)
console.log(u)

//reverse -> reverses elements of original array
//changes original array
let b = [2,5,89,0]
console.log(b.reverse())
console.log(b)

//splice 
//add new elements to the array
let v = [3,7,1,2,33,99,9]//index - no of elements to remove - elements to add
console.log(v.splice(2,2,102,103,104))//returns removed element -> in an array
console.log(v)//modifies original array

//slice()
//slices out a piece from an array
//It creates a new array doesnt change original
//takes range to slice out as parameter
let q = [2,6,78,8,2,2]
console.log(q.slice(2))//returns sliced out elements
console.log(q.slice(2,5))//slice from 2 till 4 not 5 inclusive
console.log(q)





