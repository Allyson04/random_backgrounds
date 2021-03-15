function changeMode() {
    const GetArrowClass = document.getElementById("arrow").classList
    const GetMainBarClass = document.getElementById("mainBar").classList

    GetMainBarClass.toggle("topping")
    GetArrowClass.toggle("openingArrow")
    GetMainBarClass.toggle("flex")
    GetArrowClass.toggle("closingArrow")
}

ColorOptions = {
    resetColors() {
        for(i=0; i<3;i++){
            document.querySelector("#valueShow" + (i+1)).classList.add("hide")
            console.log("#valueShow" + (i+1))
        }
    },
    colorCreator() {
        var randomNumber1 = Math.random().toString(16).substr(2, 6)
        var randomNumber2 = Math.random().toString(16).substr(2, 6)
        var randomNumber3 = Math.random().toString(16).substr(2, 6)
        hue1 = "#" + randomNumber1
        hue2 = "#" + randomNumber2
        hue3 = "#" + randomNumber3
    
        return {hue1, hue2, hue3}
    
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
    ColorOptions.colorCreator()   

    ColorOptions.resetColors()

    document.getElementById("valueShow1").classList.remove("hide")
    
    document.getElementById("valueShow1").innerHTML = hue1
    
    document.body.style.background = hue1
}

function genGradient() { 
    ColorOptions.colorCreator()  

    ColorOptions.resetColors()

    document.getElementById("valueShow1").classList.remove("hide")
    document.getElementById("valueShow2").classList.remove("hide")
    document.getElementById("valueShow1").innerHTML = hue1
    document.getElementById("valueShow2").innerHTML = hue2

    document.body.style.background = "linear-gradient(to right, " + hue1 + ", " + hue2 + ")"

}

function genTripleGradient() {
    ColorOptions.colorCreator()  
     
    ColorOptions.resetColors()

    document.getElementById("valueShow1").classList.remove("hide")
    document.getElementById("valueShow2").classList.remove("hide")
    document.getElementById("valueShow3").classList.remove("hide")

    document.getElementById("valueShow1").innerHTML = hue1
    document.getElementById("valueShow2").innerHTML = hue2
    document.getElementById("valueShow3").innerHTML = hue3

    document.body.style.background = "linear-gradient(to right," + hue1 + "," + hue2 + "," + hue3 + ")"
}

ColorOptions.resetColors()