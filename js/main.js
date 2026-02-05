import './tabs.js';
import { createTextObject } from './textFactory.js';
import { state } from './state.js';
import { bindTextStyleControl } from './textStyle.js';
import { bindColorsControl } from './colors.js';
import { bindBorderControl } from './border.js';
import { bindAnimationControl } from './animation.js';

const tempTextObj = createTextObject(document.getElementById("temp"));
state.texts.push(tempTextObj);
state.activeText = (tempTextObj);


bindTextStyleControl();
bindColorsControl();
bindBorderControl();
bindAnimationControl();