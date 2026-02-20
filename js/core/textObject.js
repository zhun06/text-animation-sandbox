import { setActiveText, updateControls } from './state.js';
import { clampToCanvas } from '../utils/clamp.js';

// Defines a text object
export class TextObject {
    constructor(el) {        
        this.el = el;

        this.textStyle = {                  
            font: 'Serif',
            size: '24px',
            outline: '0px'
        };
        this.colors = {
            text: '#000',
            highlight: '#FFF',
            outline: '#000',
            border: '#000'
        }
        this.border = {                 
            style: 'solid',
            width: '0px',
            radius: '0px',
        };
        this.animation = {               
            type: 'anim-none',
            duration: '1s',
            interval: '0s',
        };
        this._animTimer = null;
        this.dragHandler = null;

        initializeClass(el); 
        bindSelector(this);
        addDragHandle(this);
    } 
}

// Add class to new text element
function initializeClass(el) {
    el.classList.add("text");
}

// Bind listener for select
function bindSelector(textObj) {
    const el = textObj.el;

    el.addEventListener("click", (e) => {
        e.stopPropagation();
        setActiveText(textObj);
        updateControls();
    });
}

// Bind handle for dragging
function addDragHandle(textObj) {
    const el = textObj.el;
    const canvas = document.getElementById("canvas"); 

    // Create handle
    const handle = document.createElement("div");
    handle.classList.add("drag-handle");
    handle.innerHTML = "+";

    // Make handle not editable
    handle.contentEditable = "false";

    el.appendChild(handle);

    // Bind drag only to handle
    let offsetX = 0;
    let offsetY = 0;

    handle.addEventListener("pointerdown", (e) => {
        e.stopPropagation();

        const canvasRect = canvas.getBoundingClientRect();
        const elRect = el.getBoundingClientRect();

        offsetX = e.clientX - elRect.left;
        offsetY = e.clientY - elRect.top;

        const move = (e) => {
            const x = e.clientX - canvasRect.left - offsetX;
            const y = e.clientY - canvasRect.top - offsetY;

            el.style.left = `${x}px`;
            el.style.top = `${y}px`;

            clampToCanvas(el);
        };

        const up = () => {
            document.removeEventListener("pointermove", move);
            document.removeEventListener("pointerup", up);
            document.body.style.userSelect = "";
        };

        document.addEventListener("pointermove", move);
        document.addEventListener("pointerup", up);

        document.body.style.userSelect = "none";
    });

    textObj.handle = handle; // Store handle for toggle
}