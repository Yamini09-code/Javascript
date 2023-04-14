let str = "Har\"" //escape sequence is considered as one character
let s = "Har\""
let p = "Har\'"

console.log(str.length)
console.log(s.length)
console.log(p.length)

//includes
name = "hi this is mini"
n = "mini"
console.log(name.includes(n))// will return true or false depending upon if string exists in the substring

//startsWith
console.log(name.startsWith(n))
//endsWith
console.log(name.endsWith(n))

//extracting 1000 from the text -< very important to understand used in real world applications
//extracting substring from a string -> use slice
let str2 = "Please give us 1000"
let amount = str2.slice("Please give us ".length)// or could be str2.slice(15)
console.log(amount)
console.log(typeof(amount))// amount type is string convert it to number
console.log("Please give us ".length)//15
let a = Number.parseInt(str2.slice("Please give us ".length))// or could be str2.slice(15)
console.log(typeof(a))

//try to change 4th character of a given string were u able to do it?
let friend = "deepika"
friend[4]="k"
console.log(friend)//strings are immutable 