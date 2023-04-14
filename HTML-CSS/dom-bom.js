console.log(window)//everything in js is in window object
console.log(document)//html page is turned into js object called document
console.log(document.body)//access html body as js object 
//can do DOM manipulation using js
document.body.style.background = "yellow"
//BOM are additional objects provided by browser. alert, confirm, prompt are BOM objects therefore they dont run in nodejs env
//location.href = "https://codewithharry.com"
// DOM refers to the HTML page where all the nodes are objects. Three main types of nodes in DOM TREE are - text node,element node and comment node 
// In an HTML page <html> is the root and <head> <body> are its children 
// A text node is always the leaf of the tree 
// Auto-correction - If an error html is encountered by browswer it tends to correct it itself 
// can manipulate html through js using DOM 

// document.title returns string not tag
// document.head returns object a head tag
// document.documentElement returns HTML tag
// document.body returns object a body tag 



// document.body can be null if js is written before body tag 