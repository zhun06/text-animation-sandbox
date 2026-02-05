import { state } from '../core/state.js';

// Get control elements
const animation = document.querySelector('#animation');
const animationTypeControl = animation.querySelector('#animationTypeControl');
const animationDurationControl = animation.querySelector('#animationDurationControl');
const animationIntervalControl = animation.querySelector('#animationIntervalControl');

// Initialize
export function initializeAnimation(textObj) {
    initType(textObj);
    initDuration(textObj);
    initInterval(textObj);
}

// Bind controls
export function bindAnimationControl() {
    bindTypeControl();
    bindDurationControl();
    bindIntervalControl();
}

// Animation type
function initType(textObj) {
    textObj.el.classList.add(textObj.animation.type);
}

function bindTypeControl() {
    animationTypeControl.addEventListener('input', () => {
        const textObj = state.activeText;
        if (!textObj) return;

        textObj.animation.type = 'anim-' + animationTypeControl.value; // store animation type

        applyAnimation(textObj);
    });
}

// Animation duration
function initDuration(textObj) {
    textObj.el.style.setProperty('--anim-duration', textObj.animation.duration);
}

function bindDurationControl() {
    animationDurationControl.addEventListener('input', () => {
        const textObj = state.activeText;
        if (!textObj) return;

        let duration = Math.max(0, parseFloat(animationDurationControl.value) || 0); // clamp animation duration
        textObj.animation.duration = duration + 's'; // store animation duration
        textObj.el.style.setProperty('--anim-duration', textObj.animation.duration); // apply animation duration

        applyAnimation(textObj);
    });
}


// Animation interval
function initInterval(textObj) {
    textObj.animation.interval = textObj.animation.interval; // already initialized
}

function bindIntervalControl() {
    animationIntervalControl.addEventListener('input', () => {
        const textObj = state.activeText;
        if (!textObj) return;

        let interval = Math.max(0, parseFloat(animationIntervalControl.value) || 0); // clamp animation interval
        textObj.animation.interval = interval + 's'; // store animation interval

        applyAnimation(textObj);
    });
}

// Utility 
export function applyAnimation(textObj) {
    const el = textObj.el;
    const { type, duration, interval } = textObj.animation;

    clearAnimationTimer(textObj);
    removeAnimationClasses(el);

    const totalDelay =
        parseFloat(duration) * 1000 +
        parseFloat(interval) * 1000;

    el.classList.add(type);

    textObj._animTimer = setInterval(() => {
        removeAnimationClasses(el);
        void el.offsetWidth; // force reflow
        el.classList.add(type);
    }, totalDelay);
}

function clearAnimationTimer(textObj) {
    if (textObj._animTimer) {
        clearInterval(textObj._animTimer);
        textObj._animTimer = null;
    }
}

function removeAnimationClasses(el) {
    el.classList.forEach(cls => {
        if (cls.startsWith('anim-')) el.classList.remove(cls);
    });
}