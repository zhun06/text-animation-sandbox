import { state } from './state.js';
import { TextObject } from './textObject.js';

// Get elements
const colors = document.querySelector('#colors');
const backgroundColor = colors.querySelector("#backgroundColor");
const textColor = colors.querySelector("#textColor");
const highlightColor = colors.querySelector('#highlightColor');
const outlineColor = colors.querySelector("#outlineColor");
const borderColor = colors.querySelector("#borderColor");

// Outline Color
state.activeText.style.setProperty('--shadow-color', outlineColor.value);
outlineColor.addEventListener("input", () => {
    state.activeText.style.setProperty('--shadow-color', outlineColor.value);
});

// Border Color
state.activeText.style.borderColor = borderColor.value;
borderColor.addEventListener("input", () => {
  state.activeText.style.borderColor = borderColor.value; 
});

// Background Color
state.canvas.style.backgroundColor = backgroundColor.value; 
backgroundColor.addEventListener("input", () => {
  state.canvas.style.backgroundColor = backgroundColor.value; 
});

// Text Color
state.activeText.style.color = textColor.value; 
textColor.addEventListener("input", () => {
    state.activeText.style.color = textColor.value; 
});

// Text Highlight
state.activeText.style.backgroundColor = highlightColor.value; 
highlightColor.addEventListener("input", () => {
    state.activeText.style.backgroundColor = highlightColor.value; 
});