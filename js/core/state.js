import { updateTextStyleControl } from "../ui/textStyleControls.js";
import { updateColorsControl } from "../ui/colorsControls.js";
import { updateBorderControl } from "../ui/borderControls.js";
import { updateAnimationControl } from "../ui/animationControls.js";

// Global state
export const state = {
  canvas: document.getElementById("canvas"), // canvas
  activeText: null, // currently selected text object
  copiedText: null, // for duplicating text object
  texts: [] // array of all TextObjects
}; 

// Set current active text
export function setActiveText(textObj) {
  // remove previous active
  if (state.activeText) {
    state.activeText.el.classList.remove("active");
    state.activeText.handle.classList.remove("active");
  }

  // add new active
  if (textObj) {
    state.activeText = textObj;
    textObj.el.classList.add("active");
    textObj.handle.classList.add("active");
  }
}

// Update controls to take current active text's properties
export function updateControls() {
  updateTextStyleControl();
  updateColorsControl();
  updateBorderControl();
  updateAnimationControl();
}