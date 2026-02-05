import { state } from '../core/state.js';
import { createTextObject } from '../core/textFactory.js';
import { applyTextStyle } from '../properties/textStyle.js';
import { applyColors } from '../properties/colors.js';
import { applyBorder } from '../properties/border.js';
import { applyAnimation } from '../properties/animation.js';

// Get elements
const canvas = document.getElementById("canvas");
const newTextBtn = document.getElementById("newTextBtn");
const deleteTextBtn = document.getElementById("deleteTextBtn");
const copyTextBtn = document.getElementById("copyTextBtn");
const pasteTextBtn = document.getElementById("pasteTextBtn");

// Create new text object
newTextBtn.addEventListener("click", () => {
    const el = document.createElement("div");
    el.textContent = "New Text"; 
    el.contentEditable = "true"; // allows inline editing
    el.spellcheck = false;

    canvas.appendChild(el); // add DOM element

    createTextObject(el); // create textObject
});

// Delete text object
deleteTextBtn.addEventListener("click", () => {
    const textObj = state.activeText;

    if (!textObj) return; // nothing selected

    textObj.el.remove(); // remove DOM element

    // remove from state.texts array
    const index = state.texts.indexOf(textObj);
    state.texts.splice(index, 1);

    state.activeText = null; // clear activeText
});

// Copy text object
copyTextBtn.addEventListener("click", () => {
    state.copiedText = state.activeText;
});

// Paste text object
pasteTextBtn.addEventListener("click", () => {
    const copiedObj = state.copiedText;
    if (!copiedObj) return; // nothing copied

    // Clone DOM element
    const el = copiedObj.el.cloneNode(true);

    // Optional: offset the pasted element slightly
    const rect = copiedObj.el.getBoundingClientRect();
    const canvasRect = canvas.getBoundingClientRect();
    const offsetX = 10 + (Math.random() * 10); // 10 - 20
    const offsetY = 10 + (Math.random() * 10); // 10-20


    // Calculate new position relative to canvas
    el.style.position = 'absolute';
    el.style.left = (rect.left - canvasRect.left + offsetX) + 'px';
    el.style.top = (rect.top - canvasRect.top + offsetY) + 'px';

    // Append to canvas
    canvas.appendChild(el);

    // Create new TextObject 
    const newTextObj = createTextObject(el);

    // Copy stored properties from copiedObj
    newTextObj.textStyle = { ...copiedObj.textStyle };
    newTextObj.colors = { ...copiedObj.colors };
    newTextObj.border = { ...copiedObj.border };
    newTextObj.animation = { ...copiedObj.animation };

    // Apply all properties to the new object
    applyAllProperties(newTextObj);

    // Increment offset for next paste
    state.pasteOffsetX += state.pasteIncrement;
    state.pasteOffsetY += state.pasteIncrement;
});

function applyAllProperties(textObj) {
    applyTextStyle(textObj);
    applyColors(textObj);
    applyBorder(textObj);
    applyAnimation(textObj);
}
