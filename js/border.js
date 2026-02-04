import { state } from './state.js';
import { TextObject } from './textObject.js';

// Get elements
const border = document.querySelector('#border');
const borderSelect = border.querySelector("#borderStyle");
const borderWidth = border.querySelector("#borderWidth");
const borderRadius = border.querySelector("#borderRadius");

// Border Style
state.activeText.style.setProperty('--border-style', borderSelect.value); 
borderSelect.addEventListener("input", () => {
  state.activeText.style.setProperty('--border-style', borderSelect.value); 
});

// Border Width
state.activeText.style.setProperty('--border-width', `${borderWidth.value}px`);
borderWidth.addEventListener("input", () => {
  let width = Number(borderWidth.value);
  width = Math.min(30, Math.max(0, width));
  state.activeText.style.setProperty('--border-width', `${width}px`);
});

borderWidth.addEventListener("input", () => {
    let width = Number(borderWidth.value);
    width = Math.min(30, Math.max(0, width));
    borderWidth.value = width;
});

// Border Radius
state.activeText.style.setProperty('--border-radius', `${borderRadius.value}px`);
borderRadius.addEventListener("input", () => {
  let radius = Number(borderRadius.value);
  radius = Math.min(200, Math.max(0, radius));
  state.activeText.style.setProperty('--border-radius', `${radius}px`);
});

borderRadius.addEventListener("input", () => {
    let radius = Number(borderRadius.value);
    radius = Math.min(100, Math.max(0, radius));
    borderRadius.value = radius;
});
