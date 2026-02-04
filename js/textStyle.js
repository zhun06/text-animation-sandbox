import { state } from './state.js';
import { TextObject } from './textObject.js';

// Get elements
const textStyle = document.querySelector('#textStyle');
const fontSelect = textStyle.querySelector('#font');
const textSize = textStyle.querySelector('#textSize');
const textOutline = textStyle.querySelector('#textOutline');

// Font Style
state.activeText.style.setProperty('--font-style', `"${fontSelect.value}"`);
fontSelect.addEventListener("input", () => {
    state.activeText.style.setProperty('--font-style', `"${fontSelect.value}"`); 
});

// Text Size
textSize.addEventListener("input", () => {
    let size = Number(textSize.value);
    size = Math.min(100, Math.max(12, size));
    textSize.value = size; 
    state.activeText.style.setProperty('--text-size', `${size}px`);
});

// Text Outline
state.activeText.style.setProperty('--text-shadow', `${textOutline.value}px`);
textOutline.addEventListener("input", () => {
  let size = Number(textOutline.value);
  size = Math.min(20, Math.max(0, size));
  state.activeText.style.setProperty('--text-shadow', `${size}px`);
});