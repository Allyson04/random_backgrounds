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
        for(i=1; i<4;i++){
            document.querySelector("#valueShow" + (i)).classList.add("hide")
            console.log("#valueShow" + (i))
        }
    }
}

// function callLoop() {
//     for(i=0; i<3;i++){
//         document.querySelector("#valueShow" + (i+1)).classList.add("hide")
//         console.log()
//     }
// }

//document.getElementsByTagName("span").classList.add("hide")

function genBackground() { 
    hue = ColorOptions.colorIdentify()

    Layout.resetColorsDisplay()

    document.getElementById("valueShow1").classList.remove("hide")
    
    document.getElementById("valueShow1").innerHTML = hue[1]
    
    document.body.style.background = hue[1]
}

function genGradient() { 
    hue = ColorOptions.colorIdentify()

    Layout.resetColorsDisplay()

    document.getElementById("valueShow1").classList.remove("hide")
    document.getElementById("valueShow2").classList.remove("hide")
    document.getElementById("valueShow1").innerHTML = hue[1]
    document.getElementById("valueShow2").innerHTML = hue[2]

    document.body.style.background = "linear-gradient(to right, " + hue1 + ", " + hue2 + ")"

}

function genTripleGradient() {
    hue = ColorOptions.colorIdentify() 
     
    Layout.resetColorsDisplay()

    document.getElementById("valueShow1").classList.remove("hide")
    document.getElementById("valueShow2").classList.remove("hide")
    document.getElementById("valueShow3").classList.remove("hide")

    document.getElementById("valueShow1").innerHTML = hue[1]
    document.getElementById("valueShow2").innerHTML = hue[2]
    document.getElementById("valueShow3").innerHTML = hue[3]

    document.body.style.background = "linear-gradient(to right," + hue[1] + "," + hue[2] + "," + hue[3] + ")"
    console.log(hue)
}

Layout.resetColorsDisplay()