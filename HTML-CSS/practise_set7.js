// question 1- create a navbar and change the color of its first element to red 
let elem = document.getElementById('list1')
elem.style.color= "red" 
// document.getElementsByTagName("nav")[0].firstElementChild.style.color="red"

// question 2- create a table without tbody. now use "viewpagesource" button to check whether it has a tbody or not 
// ans is No, view page source gives raw source code which we had written whereas in inspect it will show with tbody as it shows the renderred code with autocorrection 

// ques 3 - create an element with three children and change the color of first and last child to green 

let div = document.body.getElementsByTagName('div')[0]
div.firstElementChild.style.color = "green"
div.lastElementChild.style.color = "green"


// ques4 - wirte a js code to change the background of all <li> tags to cyan 
let a = Array.from(document.body.getElementsByTagName('li'))
// this will return an HTML collection (an object) and we need to convert it into an array and then use aray operations or loop on it
a.forEach((element)=>{
    element.style.backgroundColor = "cyan"
}

)
