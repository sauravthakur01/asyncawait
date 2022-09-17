console.log("Person 1: shows Ticket");
console.log("Person 2 :shows Ticket");

const preMovies = async()=>{
    const wifeBringingTickets = new Promise((resolve , reject)=>{
        setTimeout(()=>{
            resolve("Tickets")
        },3000)
    })

    const getPopcorn = new Promise((resolve, reject)=>{
        resolve("Popcorn");
    })

    const getaButter = new Promise((resolve, reject)=>{
        resolve(", Butter");
    })

    const getColdDrinks = new Promise((resolve , reject)=>{
        resolve(", Cold Drinks")
    })

    let tickets = await wifeBringingTickets ;

    console.log(`wife: i have ${tickets}`);
    console.log("husband: we should go now");
    console.log("wife: I am hungary")

    let popcorn = await getPopcorn ;

    console.log(`husband: i got your ${popcorn}`);
    console.log("wife : i want butter too");

    let butter = await getaButter ;

    console.log(`husband : heres your ${butter}`);
    console.log("wife: and colddrinks?")

    let coldDrink = await getColdDrinks ;

    console.log(`husband : ${coldDrink} are here ,  anything else?`)
    console.log("wife: we are getting late , lets go")
    console.log("finally");

    return tickets ;
}

preMovies().then((m)=>{console.log(`Person 3 : shows ${m}`)})

console.log("Person 4 : shows Ticket")