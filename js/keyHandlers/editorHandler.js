// keyBindings.js
import { addText, deleteText, copyText, pasteText } from "../ui/editorControls.js";
import { state } from "../core/state.js";

document.addEventListener("keydown", (e) => {
    const isCtrlOrCmd = e.ctrlKey || e.metaKey;

    // Delete selected text object (Ctrl/Cmd + Delete)
    if (isCtrlOrCmd && (e.key === "Delete" || e.key === "Backspace") && state.activeText) {
        e.preventDefault();
        deleteText();
    }

    // Duplicate selected text object (Ctrl/Cmd + D)
    if (isCtrlOrCmd && e.key.toLowerCase() === "d" && state.activeText) {
        e.preventDefault();
        copyText();
        pasteText();
    }

    // Add new text object (Ctrl/Cmd + A)
    if (isCtrlOrCmd && e.key.toLowerCase() === "a") {
        e.preventDefault(); 
        addText();
    }

    // Copy text object (Ctrl/Cmd + C)
    if (isCtrlOrCmd && e.key.toLowerCase() === "c" && state.activeText) {
        e.preventDefault(); // prevent normal browser copy
        copyText();
    }

    // Paste text object (Ctrl/Cmd + V)
    if (isCtrlOrCmd && e.key.toLowerCase() === "v" && state.copiedText) {
        e.preventDefault(); // prevent normal browser paste
        pasteText();
    }
});

