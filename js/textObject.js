export class TextObject {
    constructor(el) {        
        this.el = el;

        this.textStyle = {                  
            font: 'serif',
            size: 24,
            outline: 0
        };
        this.colors = {
            text: '#000',
            highlight: '#FFF',
            outline: '#000',
            border: '#000'
        }
        this.border = {                 
            style: 'solid',
            width: 0,
            radius: 0,
        };
        this.animation = {               
            type: 'anim-none',
            duration: '1s',
            interval: '0s',
        };
        this._animTimer = null;
    } 
}
