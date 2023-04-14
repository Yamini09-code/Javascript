let name = "harry"
console.log(name.length)//returns string length -> property
console.log(name.toUpperCase()) //method
console.log(name.toLowerCase())//method
//index of string starts from zero
//slice cuts part of a string
console.log(name.slice(2,4))//slice takes arguments prints till 3 not 4 here
console.log(name.slice(2))//prints from 2 till end

let p = "mini is cool"
console.log(p.replace("mini","Yamini"))
console.log(p)//original string remains same

//concat -> to join one string to other
let name1 = "naman"
let name2 = "mini"
console.log(name1.concat(" is a friend of ", name2, " ok"))
console.log(name1.concat(name2))
console.log(name1)//orginal remains same

//trim
let friend = "  meena   "//removes extra spaces whitespaces
console.log(friend.trim())


//use for loop to print a string
let str ="mini"
for(let i=0;i<str.length;i++){
   let  s = console.log(str[i])


}
//originak string remains same and methods on string return a new string not affecting original
let r = "mini"//strings are immutable
//r[0] = "k" this cant be done
//r = "seeta"
console.log(r)
