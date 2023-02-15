/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/


const section2LengthParagraph = document.getElementById("section2-length-paragraph")
const section2VolumeParagraph = document.getElementById("section2-volume-paragraph")
const section2MassParagraph = document.getElementById("section2-mass-paragraph")
const convertBtn = document.getElementById("convert-btn")

convertBtn.addEventListener("click", function () {
    
    convertLenth()
    convertVolume()
    convertWeight()
})


function convertLenth() {
    const unitsInput = document.getElementById("units-display-area").value
    let distanceFeet = unitsInput * 3.281
    distanceFeet = distanceFeet.toFixed(3)
    let distanceMeters = unitsInput/3.281
    distanceMeters = distanceMeters.toFixed(3)
    section2LengthParagraph.textContent = `${unitsInput} meters = ${distanceFeet} feet | ${unitsInput} feet = ${distanceMeters} meters`
}

function convertVolume() {
    const unitsInput = document.getElementById("units-display-area").value
    let volumeGallon = unitsInput * 0.264
    volumeGallon = volumeGallon.toFixed(3)
    let volumeliter = unitsInput / 0.246
    volumeliter = volumeliter.toFixed(3)
    section2VolumeParagraph.textContent = `${unitsInput} liters = ${volumeGallon} gallons | ${unitsInput} gallons = ${volumeliter} liters `
}

function convertWeight() {
    const unitsInput = document.getElementById("units-display-area").value
    let weightPounds = unitsInput * 2.204
    weightPounds = weightPounds.toFixed(3)
    let weightInKilograms = unitsInput / 2.204
    weightInKilograms = weightInKilograms.toFixed(3)
    section2MassParagraph.textContent = `${unitsInput} kilograms = ${weightPounds} pounds | ${unitsInput} pounds = ${weightInKilograms} kilograms `
}