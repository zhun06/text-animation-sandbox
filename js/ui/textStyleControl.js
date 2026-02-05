import { state } from '../core/state.js'

// Get control elements
const textStyle = document.querySelector('#textStyle');
const fontControl = textStyle.querySelector('#fontControl');
const textSizeControl = textStyle.querySelector('#textSizeControl');
const textOutlineControl = textStyle.querySelector('#textOutlineControl');

// Update textStyl controls' values with current active text
export function updateTextStyleControl() {
    const textObj = state.activeText;

    updateFont(textObj);
    updateSize(textObj);
    updateOutline(textObj);
}

function updateFont(textObj) {
    fontControl.value = textObj.textStyle.font;
}

function updateSize(textObj) {
    textSizeControl.value = parseInt(textObj.textStyle.size);
}

function updateOutline(textObj) {
    textOutlineControl.value = parseInt(textObj.textStyle.outline);
}