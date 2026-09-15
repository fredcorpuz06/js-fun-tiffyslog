let homeScoreText = document.getElementById("home-score")
let guestScoreText = document.getElementById("guest-score")

let homeScore = 6
let guestScore = 9

function home1() {
    homeScore += 1
    homeScoreText.textContent = homeScore  
}

function home2() {
    homeScore += 2
    homeScoreText.textContent = homeScore
}

function home3() {
    homeScore += 3
    homeScoreText.textContent = homeScore
}

function guest1() {
    guestScore += 1
    guestScoreText.textContent = guestScore
}

function guest2() {
    guestScore += 2
    guestScoreText.textContent = guestScore
}

function guest3() {
    guestScore += 3
    guestScoreText.textContent = guestScore
}
