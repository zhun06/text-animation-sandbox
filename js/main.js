import './ui/tabs.js';
import { createTextObject } from './core/textFactory.js';
import { state } from './core/state.js';
import { bindTextStyleControl } from './properties/textStyle.js';
import { bindColorsControl } from './properties/colors.js';
import { bindBorderControl } from './properties/border.js';
import { bindAnimationControl } from './properties/animation.js';

const temp1 = createTextObject(document.getElementById("temp1"));
state.texts.push(temp1);

const temp2= createTextObject(document.getElementById("temp2"));
state.texts.push(temp2);

bindTextStyleControl();
bindColorsControl();
bindBorderControl();
bindAnimationControl();