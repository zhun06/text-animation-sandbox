import { state } from './state.js';
import { TextObject } from './textObject.js';

// Get elements
const animation = document.querySelector('#animation');
const animSelect = animation.querySelector('#animationType');
const animDuration = animation.querySelector('#animationDuration');
const animInterval = animation.querySelector('#animationInterval');
let delayTimeout; // Lock for delay
let currentAnimation; 
let duration = 1;
let interval = 0;

function delay(ms) {
  return new Promise(resolve => {
    delayTimeout = setTimeout(resolve, ms);
  });
}

function cancelDelay() {
  if (delayTimeout) {
    clearTimeout(delayTimeout);
    delayTimeout = null;
  } 
}

function removeAnimationClasses(element) {
  element.classList.forEach(cls => {
    if (cls.startsWith('anim-')) element.classList.remove(cls);
  });
}

function resetAnimation(element) {
  cancelDelay(); // Cancel any ongoing delay
  removeAnimationClasses(element);
  element.classList.add(currentAnimation);
}

// Animations
// Animation Duration
state.activeText.style.setProperty('--anim-duration', `${duration}s`); 
animDuration.addEventListener("input", () => {
    let input = Number(animDuration.value);
    input = Math.min(30, Math.max(1, input));
    duration = input;
    state.activeText.style.setProperty('--anim-duration', `${duration}s`);
    resetAnimation(state.activeText);
});

animDuration.addEventListener("change", () => {
    animDuration.value = duration;
});

// Animation Interval
animInterval.addEventListener("change", () => {
    let input = Number(animInterval.value);
    input = Math.min(30, Math.max(0, input));
    interval = input;
    resetAnimation(state.activeText);
});

animInterval.addEventListener("change", () => {
    animInterval.value = interval;
});

// Animation Type
animSelect.addEventListener("change", () => {
  currentAnimation = `anim-${animSelect.value}`;
  resetAnimation(state.activeText);
});

state.activeText.addEventListener("animationend", async () => {
  removeAnimationClasses(state.activeText);
  await delay(interval * 1000);
  state.activeText.classList.add(currentAnimation);
});
