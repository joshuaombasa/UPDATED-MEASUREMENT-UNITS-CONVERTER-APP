import ConvertValue from "./ConvertValue.js"
import {section2LengthParagraph, section2VolumeParagraph, section2MassParagraph, containerEl} from './elements.js'

const convert = new ConvertValue()

function render() { 
    containerEl.innerHTML = convert.getContainerHtml()
}

render()

const convertBtn = document.getElementById("convert-btn")
convertBtn.addEventListener("click", function () {
    // const unitsInput = document.getElementById("units-display-area").value
    // convert.convertLenth(unitsInput)
    // convert.convertVolume(unitsInput)
    // convert.convertWeight(unitsInput)
    // document.getElementById("units-display-area").value = ''
    document.getElementById("units-display-area").value === true ? console.log('Value exists') : console.log('No input')
    
})