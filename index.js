/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/


const containerEl = document.getElementById("container")

containerEl.innerHTML = 
`<section class="section1">
<h1 class="section1-heading">Metric/Imperial Units Conversion</h1>
<input type="number" name="" id="units-display-area" class="units-display-area">
<button class="convert-btn" id="convert-btn">Convert</button>
</section>
<section class="section2">
<div class="section2-length">
    <h4 class="section2-length-heading section2-h4-styling">Length(Meter/Feet)</h4>
    <p class="section2-length-paragraph section2-p-styling" id="section2-length-paragraph"></p>
</div>
<div class="section2-volume">
    <h4 class="section2-volume-heading section2-h4-styling">Volume(Liters/Gallons)</h4>
    <p class="section2-volume-paragraph section2-p-styling" id="section2-volume-paragraph"></p>
</div>
<div class="section2-mass">
    <h4 class="section2-mass-heading section2-h4-styling">Mass(Kilograms/Pounds)</h4>
    <p class="section2-mass-paragraph section2-p-styling" id="section2-mass-paragraph"></p>
</div>
</section>
`

const section2LengthParagraph = document.getElementById("section2-length-paragraph")
const section2VolumeParagraph = document.getElementById("section2-volume-paragraph")
const section2MassParagraph = document.getElementById("section2-mass-paragraph")

const convertBtn = document.getElementById("convert-btn")

convertBtn.addEventListener("click", function () {
    
    convert.convertLenth()
    convert.convertVolume()
    convert.convertWeight()
    document.getElementById("units-display-area").value = ''
})



function ConvertValue() {

    this.convertLenth = () => {
        const unitsInput = document.getElementById("units-display-area").value
        let distanceFeet = unitsInput * 3.281
        distanceFeet = distanceFeet.toFixed(3)
        let distanceMeters = unitsInput/3.281
        distanceMeters = distanceMeters.toFixed(3)
        section2LengthParagraph.textContent = `${unitsInput} meters = ${distanceFeet} feet | ${unitsInput} feet = ${distanceMeters} meters`
    }

    this.convertVolume = () => {
        const unitsInput = document.getElementById("units-display-area").value
        let volumeGallon = unitsInput * 0.264
        volumeGallon = volumeGallon.toFixed(3)
        let volumeliter = unitsInput / 0.246
        volumeliter = volumeliter.toFixed(3)
        section2VolumeParagraph.textContent = `${unitsInput} liters = ${volumeGallon} gallons | ${unitsInput} gallons = ${volumeliter} liters `
    }

    this.convertWeight = () => {
        const unitsInput = document.getElementById("units-display-area").value
        let weightPounds = unitsInput * 2.204
        weightPounds = weightPounds.toFixed(3)
        let weightInKilograms = unitsInput / 2.204
        weightInKilograms = weightInKilograms.toFixed(3)
        section2MassParagraph.textContent = `${unitsInput} kilograms = ${weightPounds} pounds | ${unitsInput} pounds = ${weightInKilograms} kilograms `
    }
}

const convert = new ConvertValue