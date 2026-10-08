const convertBtn = document.getElementById("convert-btn")
const inputEl = document.getElementById("input-el")
const lengthEl = document.getElementById("length")
const volumeEl = document.getElementById("volume")
const massEl = document.getElementById("mass")

const conv = {
    "meters2feet":  3.280839895,
    "liters2gallons": 0.2641720524, 
    "kilos2pounds": 2.2046226218, 
}

let results = {
    "x": 0,
    "length": [0, 0],
    "volume": [0, 0],
    "mass": [0, 0]
}

convertBtn.addEventListener("click", function() {
    const x = inputEl.value

    results.x = x
    results.length[0] = (x * conv.meters2feet).toFixed(2)
    results.length[1] = (x / conv.meters2feet).toFixed(2)
    results.volume[0] = (x * conv.liters2gallons).toFixed(2)
    results.volume[1] = (x / conv.liters2gallons).toFixed(2)
    results.mass[0] = (x * conv.kilos2pounds).toFixed(2)
    results.mass[1] = (x / conv.kilos2pounds).toFixed(2)

    renderResults()
})


function renderResults() {
    lengthEl.textContent = 
        `${results.x} meters = ${results.length[0]} feet | 
        ${results.x} feet = ${results.length[1]} meters
        `
    volumeEl.textContent = 
        `${results.x} liters = ${results.volume[0]} gallons | 
        ${results.x} gallons = ${results.volume[1]} liters
        `
    massEl.textContent = 
        `${results.x} kilograms = ${results.mass[0]} pounds | 
        ${results.x} pounds = ${results.mass[1]} kilograms
        `
}

