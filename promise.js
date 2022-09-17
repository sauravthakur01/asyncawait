console.log("Person 1: shows Ticket");
console.log("Person 2 :shows Ticket");


const wifeBringingTickets = new Promise((resolve , reject)=>{
    setTimeout(()=>{
        resolve("Tickets")
    },3000)
})

    const getPopcorn = wifeBringingTickets.then((m)=>{
        console.log(`wife: i have ${m}`);
        console.log("husband: we should go now");
        console.log("wife: I am hungary")
        return new Promise((resolve, reject)=>{
            resolve(`${m}, Popcorn`);
        })
    })  

    const getaButter = getPopcorn.then((p)=>{
        console.log(`husband: i got your popcorn`);
        console.log("wife : i want butter too");
        return new Promise((resolve, reject)=>{
            resolve(`${p}, Butter`);
        })
    }) 

    const getColdDrinks = getaButter.then((b)=>{
        console.log(`husband : heres your butter`);
        console.log("wife: and colddrinks?")
        return new Promise((resolve , reject)=>{
            resolve(`${b}, Cold Drinks`)
        })
    
    }) 
   

    getColdDrinks.then((t)=>console.log(t))

  



console.log("Person 4 : shows Ticket")