// Service worker block
if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js").then(registration => {
        console.log("SW Registered!")
        console.log(registration);
    }).catch(error => {
        console.log("Sw Registration Failed")
        console.log(error)
    })
}

// dom elements
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

// get random card function
function getRandomCard() {
    // get a random number between 1 and 13
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    
    return randomNumber > 10 ? 10 
            : randomNumber === 1 ? 11 
            : randomNumber;
}

// start game function
function startGame() {
    // check if player is active for a round, then select two random numbers
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

// render game function
function renderGame() {
    // render display stats from the game
    cardsEl.textContent = `Cards: `
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i]
         += ` `
    }
    
    sumEl.textContent = "Sum: " + sum

    sum <= 20 ? message = "Do you want to draw a new card?": sum === 21 ? (message = "You've got Blackjack!", hasBlackJack = true): 
    (message = "You're out of the game!", isAlive = false)

    messageEl.textContent = message
}

// new card function
function newCard() {
    // check if active then assign a new card
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()        
    }
}

