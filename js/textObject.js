export class TextObject {
    constructor(el) {
        this.el = el;                    
        this.textStyle = {                  
            font: 'serif',
            size: 24,
            outline: 0
        };
            this.animation = {               
            type: 'anim-none',
            duration: 1,
            interval: 0
        };
        this.border = {                 
            style: 'none',
            width: 0,
            radius: 0,
        };
        this.colors = {
            text: '#000',
            highlight: '#FFF',
            outline: '#000',
            border: '#000'
        }
    }
}
