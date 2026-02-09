import { state } from './state.js'
// Get element
const canvas = document.getElementById("canvas");

// Click canvas to unselect all active text 
canvas.addEventListener('click', () => {
    const activeText = state.activeText;

    if (activeText) {
        activeText.el.blur(); // Remove focus
        activeText.el.classList.remove("active"); 
        activeText.handle.classList.remove("active");
        state.activeText = null; 
    }

    window.getSelection().removeAllRanges();
});