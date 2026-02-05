import { state } from '../core/state.js';

// Get control elements
const colors = document.querySelector('#colors');
const backgroundColorControl = colors.querySelector("#backgroundColorControl");
const textColorControl = colors.querySelector("#textColorControl");
const highlightColorControl = colors.querySelector('#highlightColorControl');
const outlineColorControl = colors.querySelector("#outlineColorControl");
const borderColorControl = colors.querySelector("#borderColorControl");

// Initialize
export function initializeColors(textObj) {
    initText(textObj);
    initHighlight(textObj);
    initOutline(textObj);
    initBorder(textObj);
}

// Bind controls
export function bindColorsControl() {
    bindBackgroundControl();
    bindTextControl();
    bindHighlightControl();
    bindOutlineControl();
    bindBorderControl();
}

// Background Color
function bindBackgroundControl() {
    backgroundColorControl.addEventListener("input", () => {
      state.canvas.style.backgroundColor = backgroundColorControl.value; 
    });
}

// Text Color
function initText(textObj) {
    textObj.el.style.color = textObj.colors.text;
}

function bindTextControl() {
    textColorControl.addEventListener("input", () => {
        const textObj = state.activeText;
        if (!textObj) return;

        textObj.colors.text = textColorControl.value; // store text color
        textObj.el.style.color = textObj.colors.text; // apply text color
    });
}

// Highlight Color
function initHighlight(textObj) {
    textObj.el.style.backgroundColor = textObj.colors.highlight;
}

function bindHighlightControl() {
    highlightColorControl.addEventListener("input", () => {
        const textObj = state.activeText;
        if (!textObj) return;

        textObj.colors.highlight = highlightColorControl.value; // store highlight color
        textObj.el.style.backgroundColor = textObj.colors.highlight; // apply highlight color
    
    });
}


// Outline Color
function initOutline(textObj) {
    textObj.el.style.webkitTextStrokeColor = textObj.colors.outline;
}

function bindOutlineControl() {
    outlineColorControl.addEventListener("input", () => {
        const textObj = state.activeText;
        if (!textObj) return;

        textObj.colors.outline = outlineColorControl.value; // store outline color
        textObj.el.style.webkitTextStrokeColor = textObj.colors.outline; // apply outline color
    });
}


// Border Color
function initBorder(textObj) {
    textObj.el.style.borderColor = textObj.colors.border;
}

function bindBorderControl() {
    borderColorControl.addEventListener("input", () => {
        const textObj = state.activeText;
        if (!textObj) return;

        textObj.colors.borderColor = borderColorControl.value; // store border color
        textObj.el.style.borderColor = textObj.colors.borderColor; // apply border color
    });
}

// Apply all colors properties
export function applyColors(textObj) {
    const { text, highlight, outline, border } = textObj.colors;

    textObj.el.style.color = text;
    textObj.el.style.backgroundColor = highlight;
    textObj.el.style.webkitTextStrokeColor = outline;
    textObj.el.style.borderColor = border;
}
