//create a variable of type string and try toadd a number to it
let a ="mini"
let b = 5
console.log(a+b)// string concatenation
//using typeof() find the datatype 
console.log(typeof(a+b))
//create a const can u change it to hold a number later
const p =
{
name: "Harry",
section: 1,
}
//p = "mini"//assignment to const is not valid
//try to add a new key to the const and see if u r able to do it 
p["name"] = "mini"// whole const obj cant be changed nor const can be redeclared but a const obj can be edited added or deleted inside it
p["city"] = "chandigarh"//added city to const obj
console.log(p)

//create word meaning dict of 5 words
const dict = {
    appreciate: "recognize worth",
    ataraxia:"greet",
    bye: "goodbye",
    computer: "device",
    yakka: "gadget"
}
console.log(dict.yakka)//key value pairs can be accessed using . also and key can be written without double quotes 

