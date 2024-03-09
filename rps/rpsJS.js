const cpu_choice_text = document.getElementById("cpu_pick_span")
const user_choice_text = document.getElementById("user_pick_span")
const result_display = document.getElementById("result_span")
const possible_choices = document.querySelectorAll("button")  // Like a list of all buttons kinda
let user_choice
let computer_choice
let result

// For every item in the possible_choices querySelector, add an event listener which passes the event "e" in and runs the function
possible_choices.forEach(btn => btn.addEventListener("click", (e) => {
    user_choice = e.target.id  // The id of the pressed button
    user_choice_text.innerHTML = user_choice

    // Get cpu pick
    generateCPUChoice()

    // Complete game logic and output result
    getResult()
}))

function  generateCPUChoice() {
    // generate random 0-1 and times by max value and round down, add 1 to remove 0-Index
    const randomNum = Math.floor(Math.random() * possible_choices.length) + 1

    // switch to assign randomNum logic
    switch (randomNum) {
        case 1:
            computer_choice = "Rock"
            break
        case 2:
            computer_choice = "Paper"
            break
        case 3:
            computer_choice = "Scissors"
            break
    }

    cpu_choice_text.innerHTML = computer_choice
}

// mmmm my code
function getResult() {
    // Game logic
    if (computer_choice === user_choice) {result = "Tie!"}
    else {
        switch (computer_choice) {
            case "Rock":
                if (user_choice === "Paper") {result = "You win!"}
                else if (user_choice === "Scissors") {result = "You lost :/"}
                break
            case "Paper":
                if (user_choice === "Rock") {result = "You lost :/"}
                else if (user_choice === "Scissors") {result = "You win!"}
                break
            case "Scissors":
                if (user_choice === "Rock") {result = "You win!"}
                else if (user_choice === "Paper") {result = "You lost :/"}
                break
        }
    }

    // Present result
    result_display.innerHTML = result
}