//snake water gun
//The game should ask you to enter S,W and G. The computer should be able to randomly generate S,WG and declare win or loss using alert, use alert, prompt and confirm when required
let i = 1
while(i<=5){
let user = prompt("enter S,W or G")
let cpuI = Math.floor(Math.random() * 3);
let cpu = ["S","W","G"][cpuI]
// Overall, this line of code is a concise way to select a random value from an array and assign it to a variable, based on the value of a randomly generated integer.

const match =(cpu,user)=>
{
    if(cpu ==user){
          return "Its a tie"
    }
    else if(cpu =="S" && user =="W")
    {
        return "cpu won"
    }
    else if(cpu =="S" && user =="G"){
        return "user won"
    }
    else if(cpu =="W" && user == "S")
    {
        return "user won"
    }
    else if(cpu =="W" && user =="G")

    {
        return "cpu won"
    }
    else if(cpu =="G" && user =="S")
    {
        return "cpu won"
    }
    else if(cpu == "G" && user == "W")
    {
        return "user won"
    }
}

let r = match(cpu,user)
console.log(`User chose ${user} and cpu chose ${cpu} so ${r}`)
i++
}