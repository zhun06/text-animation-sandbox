import { TextObject } from './textObject.js';
import { initializeTextStyle } from '../properties/textStyle.js'
import { initializeColors } from '../properties/colors.js'
import { initializeBorder } from '../properties/border.js'
import { initializeAnimation } from '../properties/animation.js'

export function createTextObject(el) {
    const textObj = new TextObject(el);

    initializeTextStyle(textObj);
    initializeColors(textObj);
    initializeBorder(textObj);
    initializeAnimation(textObj);

    return textObj;
}