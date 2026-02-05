import { setActiveText, updateControls } from './state.js';

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

        initializeClass(el); 
        bindSelector(this);
        bindDrag(this)
    } 
}

// New object is of class text
function initializeClass(el) {
    el.classList.add("text");
}

// Bind listener for select
function bindSelector(textObj) {
    const el = textObj.el;

    el.addEventListener("mousedown", (e) => {
        e.stopPropagation();
        setActiveText(textObj);
        updateControls();
    });
}

// Bind listener for dragging
function bindDrag(textObj) {
    const el = textObj.el;
    const canvas = document.getElementById("canvas"); 

    let offsetX = 0;
    let offsetY = 0;

    el.addEventListener("mousedown", (e) => {
        e.stopPropagation();

        const canvasRect = canvas.getBoundingClientRect();
        const elRect = el.getBoundingClientRect();

        // pointer offset within element
        offsetX = e.clientX - elRect.left;
        offsetY = e.clientY - elRect.top;

        const move = (e) => {
            // compute position relative to canvas
            const x = e.clientX - canvasRect.left - offsetX;
            const y = e.clientY - canvasRect.top - offsetY;

            el.style.left = `${x}px`;
            el.style.top = `${y}px`;
        };

        const up = () => {
            document.removeEventListener("mousemove", move);
            document.removeEventListener("mouseup", up);
            document.body.style.userSelect = ""; // restore selection
        };

        document.addEventListener("mousemove", move);
        document.addEventListener("mouseup", up);

        document.body.style.userSelect = "none"; // prevent text selection while dragging
    });
}
