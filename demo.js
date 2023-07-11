//console.log("hello world")// this is a function that writes things to the console.

// let thing = "your mom"
// thing = "your moms"
// console.log(thing)

// const newThing = 10
// newThing = 5  cant change a const dummy!!
// console.log(newThing)


// const wholeName = "Hyrum Van Slyke"
// let age = 20
// let isCool = false

// console.log(`Name: ${wholeName}. Age: ${age}.`)
// // if(isCool=== true){
// //     console.log("This person is epic.")
// // }else{
// //     console.log("This person is sad")
// // }
// if(isCool && age > 18){
//     console.log("You are a cool adult")
// } else if(isCool){
//     console.log("this person is cool but that's to be expected")
// }else {
//     console.log("They are not cool :(")
// }

// let a = 17
// let b = 5
// let c = 2
// let x = 20

// let answer = b* c
// console.log(answer)
//  let answer2 = a *c
//  console.log(answer2)
//  let answer3 = a + (c*b)
//  console.log(answer3)

const readline = require(`readline`)
const reader  = readline.createInterface({input: process.stdin, output: process.stdout})
// reader.question("Hey there! Whats your name?", function(response){
//     console.log(`Hello ${response}`)
// })
reader.question("Let me guess a number, pick a number between 1 and 10. ", function(num){
    if(num >= 1 && num <= 10 ){
        console.log(`Hmm... I think your number was ${num}.`)
    }else{
        console.log("Hey I said between 1 and 10!")
    }
})