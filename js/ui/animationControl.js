import { state } from '../core/state.js'

// Get control elements
const animation = document.querySelector('#animation');
const animationTypeControl = animation.querySelector('#animationTypeControl');
const animationDurationControl = animation.querySelector('#animationDurationControl');
const animationIntervalControl = animation.querySelector('#animationIntervalControl');

// Update animation controls' values using current active text
export function updateAnimationControl() {
    const textObj = state.activeText;

    updateType(textObj);
    updateDuration(textObj);
    updateInterval(textObj);
}

function updateType(textObj) {
    animationTypeControl.value = textObj.animation.type.replace(/^anim-/, '');
}

function updateDuration(textObj) {
    animationDurationControl.value = parseInt(textObj.animation.duration);
}

function updateInterval(textObj) {
    animationIntervalControl.value = parseInt(textObj.animation.interval);
}