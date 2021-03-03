var mode = true;
changeMode();

function changeMode() {
    if (mode) {
        document.getElementById("mainBar").classList.remove("topping")
        document.getElementById("arrow").classList.remove("openingArrow")
        document.getElementById("mainBar").classList.add("flex")
        document.getElementById("arrow").classList.add("closingArrow")
    }

    else {
        document.getElementById("mainBar").classList.remove("flex")
        document.getElementById("arrow").classList.remove("closingArrow")
        document.getElementById("mainBar").classList.add("topping")
        document.getElementById("arrow").classList.add("openingArrow")
    }

    mode = !mode
}

var colorCreator = function () {
    var randomNumber1 = Math.random().toString(16).substr(2, 6)
    var randomNumber2 = Math.random().toString(16).substr(2, 6)
    var randomNumber3 = Math.random().toString(16).substr(2, 6)
    hue1 = ("#" + randomNumber1).toUpperCase()
    hue2 = ("#" + randomNumber2).toUpperCase()
    hue3 = ("#" + randomNumber3).toUpperCase()

    return {hue1, hue2, hue3}

}

//document.getElementsByTagName("span").classList.add("hide")

function genBackground() { 
    colorCreator()   

    document.getElementById("valueShow1").classList.remove("hide")
    document.getElementById("valueShow2").classList.add("hide")
    document.getElementById("valueShow3").classList.add("hide")
    
    document.getElementById("valueShow1").innerHTML = hue1
    
    document.body.style.background = hue1
}

function genGradient() { 
    colorCreator()   

    document.getElementById("valueShow1").classList.remove("hide")
    document.getElementById("valueShow2").classList.remove("hide")
    document.getElementById("valueShow3").classList.add("hide")
    document.getElementById("valueShow1").innerHTML = hue1
    document.getElementById("valueShow2").innerHTML = hue2

    document.body.style.background = "linear-gradient(to right, " + hue1 + ", " + hue2 + ")"

}

function genTripleGradient() {
    colorCreator()

    document.getElementById("valueShow1").classList.remove("hide")
    document.getElementById("valueShow2").classList.remove("hide")
    document.getElementById("valueShow3").classList.remove("hide")

    document.getElementById("valueShow1").innerHTML = hue1
    document.getElementById("valueShow2").innerHTML = hue2
    document.getElementById("valueShow3").innerHTML = hue3

    document.body.style.background = "linear-gradient(to right," + hue1 + "," + hue2 + "," + hue3 + ")"
}