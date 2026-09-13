// 1. Grab the save-el paragrah and store it in a variable called saveEl
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0

function increment() {
    count += 1
    countEl.innerText = count
}

function save() {
    let countDash = count + " - "
    saveEl.innerText += countDash
    count = 0
}


