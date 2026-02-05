import { TextObject } from './textObject.js';
import { initializeTextStyle } from './textStyle.js'
import { initializeColors } from './colors.js'
import { initializeBorder } from './border.js'
import { initializeAnimation } from './animation.js'


export function createTextObject(el) {
    const textObj = new TextObject(el);

    initializeTextStyle(textObj);
    initializeColors(textObj);
    initializeBorder(textObj);
    initializeAnimation(textObj);

    return textObj;
}