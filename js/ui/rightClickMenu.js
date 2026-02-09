import { addText, deleteText, copyText, pasteText } from './editorControls.js';

const canvas = document.getElementById("canvas");
const rightClickMenu = document.getElementById("rightClickMenu");
const RCAddBtn = document.getElementById("RCAddBtn");
const RCDeleteBtn = document.getElementById("RCDeleteBtn");
const RCCopyBtn = document.getElementById("RCCopyBtn");
const RCPasteBtn = document.getElementById("RCPasteBtn");

// Show menu on right-click
canvas.addEventListener("contextmenu", (e) => {
    e.preventDefault(); // prevent default browser menu

    // Get canvas bounds to position menu correctly
    const rect = canvas.getBoundingClientRect();
    let x = e.clientX - rect.left; // position relative to canvas
    let y = e.clientY - rect.top;

    // Add slight offset so menu appears below/right of cursor
    const offset = 5; // pixels
    x += offset;
    y += offset;

    // Position and show menu
    rightClickMenu.style.left = `${x}px`;
    rightClickMenu.style.top = `${y}px`;
    rightClickMenu.style.display = "block";

    window.getSelection().removeAllRanges();
});


// Hide menu on click anywhere else
document.addEventListener("click", () => {
    rightClickMenu.style.display = "none";
});

// Bind buttons to your editor functions
RCAddBtn.addEventListener("click", () => {
    addText();
    rightClickMenu.style.display = "none";
});

RCDeleteBtn.addEventListener("click", () => {
    deleteText();
    rightClickMenu.style.display = "none";
});

RCCopyBtn.addEventListener("click", () => {
    copyText();
    rightClickMenu.style.display = "none";
});

RCPasteBtn.addEventListener("click", () => {
    pasteText();
    rightClickMenu.style.display = "none";
});