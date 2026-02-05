import './ui/tabs.js';
import './ui/editorControls.js'
import { bindTextStyleControl } from './properties/textStyle.js';
import { bindColorsControl } from './properties/colors.js';
import { bindBorderControl } from './properties/border.js';
import { bindAnimationControl } from './properties/animation.js';

// Bind controls to modify properties of active text
bindTextStyleControl();
bindColorsControl();
bindBorderControl();
bindAnimationControl();