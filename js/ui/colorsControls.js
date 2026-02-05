import { state } from '../core/state.js'

// Get control elements
const colors = document.querySelector('#colors');
const textColorControl = colors.querySelector("#textColorControl");
const highlightColorControl = colors.querySelector('#highlightColorControl');
const outlineColorControl = colors.querySelector("#outlineColorControl");
const borderColorControl = colors.querySelector("#borderColorControl");

// Update colors controls' values with current active text
export function updateColorsControl() {
    const textObj = state.activeText;

    updateText(textObj);
    updateHighlight(textObj)
    updateOutline(textObj);
    updateBorder(textObj);
}

function updateText(textObj) {
    textColorControl.value = textObj.colors.text;
}

function updateHighlight(textObj) {
    highlightColorControl.value = textObj.colors.highlight;
}

function updateOutline(textObj) {
    outlineColorControl.value = textObj.colors.outline;
}

function updateBorder(textObj) {
    borderColorControl.value = textObj.colors.border;
}