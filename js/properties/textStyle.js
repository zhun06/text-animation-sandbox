import { state } from '../core/state.js';

// Get control elements
const textStyle = document.querySelector('#textStyle');
const fontControl = textStyle.querySelector('#fontControl');
const textSizeControl = textStyle.querySelector('#textSizeControl');
const textOutlineControl = textStyle.querySelector('#textOutlineControl');

// Initialize
export function initializeTextStyle(textObj) {
    initFont(textObj);
    initSize(textObj);
    initOutline(textObj);
}

// Bind controls
export function bindTextStyleControl() {
    bindFontControl();
    bindSizeControl();
    bindOutlineControl();
}

// Font Style
function initFont(textObj) {
    textObj.el.style.fontFamily = textObj.textStyle.font;
}

function bindFontControl() {
    fontControl.addEventListener("input", () => {
        const textObj = state.activeText;
        if (!textObj) return;

        textObj.textStyle.font = fontControl.value; // store font
        textObj.el.style.fontFamily = textObj.textStyle.font; // apply font
    });
}

// Text Size
function initSize(textObj) {
    textObj.el.style.fontSize = textObj.textStyle.size;
}

function bindSizeControl() {
    textSizeControl.addEventListener("input", () => {
        const textObj = state.activeText;
        if (!textObj) return;

        let size = Math.min(100, Math.max(12, textSizeControl.value)); // clamp text size
        textObj.textStyle.size = size + 'px'; // store text size
        textObj.el.style.fontSize = textObj.textStyle.size; // apply text size
    });
}

// Text Outline
function initOutline(textObj) {
    textObj.el.style.webkitTextStrokeWidth = textObj.textStyle.outline;
}

function bindOutlineControl() {
    textOutlineControl.addEventListener("input", () => {
        const textObj = state.activeText;
        if (!textObj) return;

        let outline = Math.min(20, Math.max(0, textOutlineControl.value)); // clamp outline
        textObj.textStyle.outline = outline + 'px'; // store outline
        textObj.el.style.webkitTextStrokeWidth = textObj.textStyle.outline; // apply outline
    });
}