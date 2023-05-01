var numberOfDrummer = document.querySelectorAll(".drum").length
// catch the Click
for (i = 0; i < numberOfDrummer; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var clickInnerHTML = this.innerHTML
        senseKey(clickInnerHTML)
        addingAnimation(clickInnerHTML)
    }
    )
    }

// catch the KeyPress
document.addEventListener("keypress", function(event){
    senseKey(event.key)
    addingAnimation(event.key)
})

// Play the selected Audio
function senseKey(key){ 
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3")
            tom1.play()
            break
        case "a":
            var tom1 = new Audio("sounds/tom-2.mp3")
            tom1.play()
            break
        case "s":
            var tom1 = new Audio("sounds/tom-3.mp3")
            tom1.play()
            break
        case "d":
            var tom1 = new Audio("sounds/tom-4.mp3")
            tom1.play()
            break
        case "j":
            var tom1 = new Audio("sounds/snare.mp3")
            tom1.play()
            break
        case "k":
            var tom1 = new Audio("sounds/crash.mp3")
            tom1.play()
            break
        case "l":
            var tom1 = new Audio("sounds/kick-bass.mp3")
            tom1.play()
            break
        default: console.log(buttonInnerHTML)
    }

    }

function addingAnimation(animasyon){
    document.querySelector("."+ animasyon).classList.add("pressed")
    setTimeout(function(){
        document.querySelector("."+ animasyon).classList.remove("pressed")}, 200)
    
}      
