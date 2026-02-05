import { state } from '../core/state.js';

// Get control elements
const border = document.querySelector('#border');
const borderStyleControl = border.querySelector("#borderStyleControl");
const borderWidthControl = border.querySelector("#borderWidthControl");
const borderRadiusControl = border.querySelector("#borderRadiusControl");

// Initialize
export function initializeBorder(textObj) {
    initStyle(textObj);
    initWidth(textObj);
    initRadius(textObj);
}

// Bind controls
export function bindBorderControl() {
    bindStyleControl();
    bindWidthControl();
    bindRadiusControl();
}

// Border Style
function initStyle(textObj) {
    textObj.el.style.borderStyle = textObj.border.style;
}

function bindStyleControl() {
    borderStyleControl.addEventListener("input", () => {
        const textObj = state.activeText;
        if (!textObj) return;

        textObj.border.style = borderStyleControl.value; // store border style
        textObj.el.style.borderStyle = textObj.border.style; // apply border style
    });
}

// Border Width
function initWidth(textObj) {
    textObj.el.style.borderWidth = textObj.border.width;
}

function bindWidthControl() {
    borderWidthControl.addEventListener("input", () => {
        const textObj = state.activeText;
        if (!textObj) return;

        let width = Math.min(30, Math.max(0, borderWidthControl.value)); // clamp border width
        textObj.border.width = width + 'px'; // store border width
        textObj.el.style.borderWidth = textObj.border.width; // apply border width
    });
}

// Border Radius
function initRadius(textObj) {
    textObj.el.style.borderRadius = textObj.border.radius;
}

function bindRadiusControl() {
    borderRadiusControl.addEventListener("input", () => {
        const textObj = state.activeText;
        if (!textObj) return;

        let radius = Math.min(100, Math.max(0, borderRadiusControl.value)); // clamp border radius
        textObj.border.radius = radius + 'px'; // store border radius
        textObj.el.style.borderRadius = textObj.border.radius; // apply border radius
    });
}

// Apply all border properties
export function applyBorder(textObj) {
    const { style, width, radius } = textObj.border;

    textObj.el.style.borderStyle = style;
    textObj.el.style.borderWidth = width;
    textObj.el.style.borderRadius = radius;
}
