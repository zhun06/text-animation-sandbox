import { setActiveText, state } from '../core/state.js';
import { createTextObject } from '../core/textFactory.js';
import { applyTextStyle } from '../properties/textStyle.js';
import { applyColors } from '../properties/colors.js';
import { applyBorder } from '../properties/border.js';
import { applyAnimation } from '../properties/animation.js';
import { clampToCanvas } from '../utils/clamp.js';

// Get elements
const canvas = document.getElementById("canvas");
const addTextBtn = document.getElementById("addTextBtn");
const deleteTextBtn = document.getElementById("deleteTextBtn");
const copyTextBtn = document.getElementById("copyTextBtn");
const pasteTextBtn = document.getElementById("pasteTextBtn");
const resetCanvasBtn = document.getElementById("resetCanvasBtn");

// Bind buttons 
addTextBtn.addEventListener("click", () => {
    addText(addTextBtn);
});
deleteTextBtn.addEventListener ("click", () => {
    deleteText(deleteTextBtn);
});
copyTextBtn.addEventListener ("click", () => {
    copyText(copyTextBtn);
});
pasteTextBtn.addEventListener ("click", () => {
    pasteText(pasteTextBtn);
});
resetCanvasBtn.addEventListener ("click", () => {
    resetCanvas(resetCanvasBtn);
});

// Create new text object
export function addText() {
    const el = document.createElement("div");
    el.textContent = "New Text"; 
    el.contentEditable = "true"; // allows inline editing
    el.spellcheck = false;

    canvas.appendChild(el); // add DOM element

    createTextObject(el); // create textObject
}

// Delete text object
export function deleteText() {
    const textObj = state.activeText;

    if (!textObj) return; // nothing selected

    textObj.el.remove(); // remove DOM element

    // remove from state.texts array
    const index = state.texts.indexOf(textObj);
    state.texts.splice(index, 1);

    state.activeText = null; // clear activeText
}

// Copy text object
export function copyText() {
    state.copiedText = state.activeText;
}

// Paste text object
export function pasteText() {
    const copiedObj = state.copiedText;
    if (!copiedObj) return; // nothing copied

    // Clone DOM element
    const el = copiedObj.el.cloneNode(false);

    // Temporary remove handle for copying text
    const handle = copiedObj.handle;
    handle.remove();
    el.innerText = copiedObj.el.innerText;
    copiedObj.el.appendChild(handle);

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

    // Clamp the pasted element so it never goes outside canvas
    clampToCanvas(el);

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

    // Set newTextObj as active text
    setActiveText(newTextObj);
}

// Clear canvas
export function resetCanvas() {
    // Remove DOM elements
    state.texts.forEach(textObj => {
        textObj.el.remove();
    });

    state.canvas.style.backgroundColor = "white";

    // Clear the state array
    state.texts = [];

    // Clear active text
    state.activeText = null;
}


function applyAllProperties(textObj) {
    applyTextStyle(textObj);
    applyColors(textObj);
    applyBorder(textObj);
    applyAnimation(textObj);
}
