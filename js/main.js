import './core/canvas.js'; // Initialize canvas 
import './ui/tabs.js'; // Initialize tab switching
import './ui/editorControls.js'; // Initialize editing controls
import './ui/rightClickMenu.js'; // Initialize right click menu
import './keyHandlers/editorHandler.js' // Initialize key bindings
import { bindTextStyleControl } from './properties/textStyle.js';
import { bindColorsControl } from './properties/colors.js';
import { bindBorderControl } from './properties/border.js';
import { bindAnimationControl } from './properties/animation.js';

// Bind controls to modify properties of active text/s
bindTextStyleControl();
bindColorsControl();
bindBorderControl();
bindAnimationControl();