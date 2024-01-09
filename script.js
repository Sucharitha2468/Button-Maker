let bgColorInputElement = document.getElementById("bgColorInput");
console.log(bgColorInputElement);
let fontColorInputElement = document.getElementById("fontColorInput");
let fontSizeInputElement = document.getElementById("fontSizeInput");
let fontWeightInputElement = document.getElementById("fontWeightInput");
let paddingInputElement = document.getElementById("paddingInput");
let borderRadiusInputElement = document.getElementById("borderRadiusInput");

function applyButton() {
    let bgColor = bgColorInputElement.value;
    customButton.style.backgroundColor = bgColor;
    customButton.style.color = fontColorInputElement.value;
    customButton.style.fontSize = fontSizeInputElement.value;
    customButton.style.fontWeight = fontWeightInputElement.value;
    customButton.style.padding = paddingInputElement.value;
    customButton.style.borderRadius = borderRadiusInputElement.value;
}