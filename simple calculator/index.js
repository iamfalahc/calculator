var screen = document.getElementById("screen")

function buttonClick(value) {
    screen.value += value
}
function clearScreen() {
    screen.value=""
}
function showResult() {
    result = eval(screen.value)
    screen.value = result 
}