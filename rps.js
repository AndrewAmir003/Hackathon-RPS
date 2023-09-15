const rock_paper_scissors = () => {
    const prompt = require('prompt-sync')()
    const c = require('ansi-colors')

    let choice, cChoice, play
    let games = 1
    let w = 0
    let l = 0
    let t = 0
   
    while (play !== 'n') {
        while (games <= 3) {
            choice = prompt('Rock, Paper or Scissors (R, P or S): ').toUpperCase()
            let computer = Math.floor(Math.random() * 3)

            if (computer == 0) {
                cChoice = "R"
            } else if (computer == 1) {
                cChoice = "P"
            } else {
                cChoice = "S"
            }

            if (choice == "S" && cChoice === "R") {
                l++
                console.log(c.red("You lost"))
            } else if (choice === "S" && cChoice === "P") {
                w++
                console.log(c.green("You win"))
            } else if (choice === "S" && cChoice === "S") {
                t++
                console.log(c.yellow("Tie"))
            } else if (choice === "R" && cChoice === "P") {
                l++
                console.log(c.red("You lose"))
            } else if (choice === "R" && cChoice === "S") {
                w++
                console.log(c.green("You win"))
            } else if (choice === "R" && cChoice === "R") {
                t++
                console.log(c.yellow("Tie"))
            } else if (choice === "P" && cChoice === "S") {
                l++
                console.log(c.red("You lose"))
            } else if (choice === "P" && cChoice === "R") {
                w++
                console.log(c.green("You win"))
            } else if (choice === "P" && cChoice === "P"){
                t++
                console.log(c.yellow("Tie"))
            } else {
                console.log("That is not Rock, Paper or Scissors try again")
                return rock_paper_scissors()
            }

            games++
        }

        play = prompt("Do you want to play again? (y or n): ")
        if (play === 'y') {
            see = prompt("Do you want to see results? (y or n): ")

            if (see === 'y') {
                console.log(`Win: ${w}, Lose: ${l}, Tie: ${t}`)
                return rock_paper_scissors()
            } else if (see === 'n') {
                return rock_paper_scissors()
            }
            
        } else if (play === 'n') {
            see = prompt("Do you want to see results? (y or n): ")

            if (see === 'y') {
                console.log(`Win: ${w}, Lose: ${l}, Tie: ${t}`)
             
        } 

    }


    }

}


rock_paper_scissors()
