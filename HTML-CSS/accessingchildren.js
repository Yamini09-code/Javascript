console.log(document.body.firstChild)
console.log(document.body.lastChild)
console.log(document.body.childNodes)
// childNodes returns a node list and we have converted it into an array 
let arr = Array.from(document.body.childNodes)
console.log(document.body.childNodes[0])
console.log(document.body.childNodes[document.body.childNodes.length-1])
console.log(arr)
console.log("yamini")