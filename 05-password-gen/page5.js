let myChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?"
let minChars = 8
let maxChars = 20
let pwOne = document.getElementById("pw1")
let pwTwo = document.getElementById("pw2")

function generate_string_of_length(n) {
    let myPassword = ""

    for (i = 0; i < n; i++) {
        let x = Math.floor(Math.random() * myChars.length)
        myPassword += myChars[x]
    }

    return myPassword
}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function generate_password() {
    pwOne.innerText = generate_string_of_length(randomInt(minChars, maxChars))
    pwTwo.innerText = generate_string_of_length(randomInt(minChars, maxChars))
}
