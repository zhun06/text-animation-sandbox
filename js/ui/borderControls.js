import { state } from '../core/state.js'

// Get control elements
const border = document.querySelector('#border');
const borderStyleControl = border.querySelector("#borderStyleControl");
const borderWidthControl = border.querySelector("#borderWidthControl");
const borderRadiusControl = border.querySelector("#borderRadiusControl");

// Update border controls' values using current active text
export function updateBorderControl() {
    const textObj = state.activeText;

    updateStyle(textObj);
    updateWidth(textObj);
    updateRadius(textObj);
}

function updateStyle(textObj) {
    borderStyleControl.value = textObj.border.style;
}

function updateWidth(textObj) {
    borderWidthControl.value = parseInt(textObj.border.width);
}

function updateRadius(textObj) {
    borderRadiusControl.value = parseInt(textObj.border.radius);
}