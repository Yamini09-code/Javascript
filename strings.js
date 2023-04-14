//strings are used to store and manipulate text. String cab be created using the following syntax
let name = "harry"//creates string
let occupation = 'business'//creates string
console.log(name.length)//length of string
//string can be created using single and double quote
//accessing string character
console.log(name[0])
console.log(name[1])

//modern js --> template literals  
let boy1 = "pramod" 
let boy2 = "nikhil"
console.log(boy1 + " is a friend of "+ boy2)
//backtick can also be used to create string -> with backtick u can use single and double quotes both

//template literals 
//tempate literals use backticks instead of quotes to define a string
let n = `harry`
let q = `"hello" this is 'me'`
console.log(q)
//with template literals it is possible to use both single and double quotes inside a string
//we can insert variables directly in template literal. this is called string interpolation
let sentence = `${boy1} is a friend of ${boy2}`
console.log(sentence)

//escape sequence character
let fruit = 'bana\'na'//backslash  -> \
//\n for new line
//\t for tab
//\r for carriage return
console.log(fruit)
console.log(fruit.length)
