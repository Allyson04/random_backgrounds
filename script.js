function changeMode() {
    const GetArrowClass = document.getElementById("arrow").classList
    const GetMainBarClass = document.getElementById("mainBar").classList

    GetMainBarClass.toggle("topping")
    GetArrowClass.toggle("openingArrow")
    GetMainBarClass.toggle("flex")
    GetArrowClass.toggle("closingArrow")
}

ColorOptions = {
    colorIdentify() {
        let hue = []

        for(i=1; i<4;i++){
            hue[i] = "#" + Math.random().toString(16).substr(2, 6)
        }
    
        return hue
    }
}

Layout = {
    resetColorsDisplay() {
        for(i=1; i<=3;i++){
            document.querySelector("#valueShow" + (i)).style.display = "none"
        }
    },
    setNewColors(numberOfSpans) {
        for(i=1; i<=numberOfSpans;i++) {
            document.querySelector("#valueShow" + (i)).style.display = "block"
            document.querySelector("#valueShow" + (i)).innerHTML = hue[i]
        }
    }
}

function RefreshAndSetSpans(numberOfSpans) {
    Layout.resetColorsDisplay()
    Layout.setNewColors(numberOfSpans)
}

// function callLoop() {
//     for(i=0; i<3;i++){
//         document.querySelector("#valueShow" + (i+1)).classList.add("hide")
//         console.log()
//     }
// }

function genBackground() { 
    hue = ColorOptions.colorIdentify()
    RefreshAndSetSpans(1)
    document.body.style.background = hue[1]
}

function genGradient() { 
    hue = ColorOptions.colorIdentify()
    RefreshAndSetSpans(2)
    document.body.style.background = "linear-gradient(to right, " + hue[1] + ", " + hue[2] + ")"

}

function genTripleGradient() {
    hue = ColorOptions.colorIdentify() 
    RefreshAndSetSpans(3)
    document.body.style.background = "linear-gradient(to right," + hue[1] + "," + hue[2] + "," + hue[3] + ")"
}