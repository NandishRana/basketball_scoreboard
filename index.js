let scoreHome = Number(document.getElementById("homeScore").textContent)

function incrementOneH() {
    scoreHome += 1
    document.getElementById("homeScore").textContent = scoreHome
    highLighter()
}

function incrementTwoH() {
    scoreHome += 2
    document.getElementById("homeScore").textContent = scoreHome
    highLighter()
}

function incrementThreeH() {
    scoreHome += 3
    document.getElementById("homeScore").textContent = scoreHome
    highLighter()
}



let scoreGuest = Number(document.getElementById("guestScore").textContent)

function incrementOneG() {
    scoreGuest += 1
    document.getElementById("guestScore").textContent = scoreGuest
    highLighter()
}

function incrementTwoG() {
    scoreGuest += 2
    document.getElementById("guestScore").textContent = scoreGuest
    highLighter()
}

function incrementThreeG() {
    scoreGuest += 3
    document.getElementById("guestScore").textContent = scoreGuest
    highLighter()
}


function newGame() {
    scoreHome = 0
    scoreGuest = 0
    document.getElementById("homeScore").textContent = scoreHome
    document.getElementById("guestScore").textContent = scoreGuest
    highLighter()
}

// const styleSheet = document.styleSheets[1];
    // stylesheet.cssRules[4].style.backgroundColor = "cornflowerblue";
    
let cardHome = document.getElementById("scoreCardH")
let cardGuest = document.getElementById("scoreCardG")

function highLighter() {
    if (scoreHome > scoreGuest) {
        cardHome.style.backgroundColor = "#FECDD3"
        cardGuest.style.backgroundColor = "#080001"
    }
     else if (scoreHome < scoreGuest) {
        cardGuest.style.backgroundColor = "#FECDD3"
        cardHome.style.backgroundColor = "#080001"
    }
    else {
        cardHome.style.backgroundColor = "#080001"
        cardGuest.style.backgroundColor = "#080001"
    }
}

let foulsCountHQ1 = Number(document.getElementById("hq1"))
let foulsCountHQ2 = Number(document.getElementById("hq2"))
let foulsCountHQ3 = Number(document.getElementById("hq3"))
let foulsCountHQ4 = Number(document.getElementById("hq4"))

function fouls (
    
)