//Guess the number
let x = Math.floor(Math.random()* (100-1+1)+1)
let i
let count = 0
do{
      i = Number.parseInt(prompt("Enter the number"))
      count = count+1
      if(x>i){
        console.log("random number is is greater")
      }
      else if(x<i){
        console.log("random number is is lesser")
      }
      else{
        console.log(`${i}is equal to ${x}`)
      }
}while(i!=x)
console.log("score is", 100-count)


