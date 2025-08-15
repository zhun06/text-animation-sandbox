// Text
const canvas = document.getElementById("canvas");
const text = document.getElementById("text");
// Dark Mode
const darkMode = document.getElementById("darkMode");
// Dropdown
const dropdown = document.querySelectorAll('.dropdownContent');
const buttons = document.querySelectorAll('.dropdownButton');
// Animations
const animContainer = document.querySelector('#animations');
const animSelect = animContainer.querySelector('#animationType');
const animDuration = animContainer.querySelector('#animationDuration');
const animInterval = animContainer.querySelector('#animationInterval');
let delayTimeout; // Lock for delay
let currentAnimation; 
let duration = 1;
let interval = 0;
// Text style
const textContainer = document.querySelector('#textStyle');
const fontSelect = textContainer.querySelector('#fontStyle');
const textSize = textContainer.querySelector('#textSize');
const textShadow = textContainer.querySelector('#textShadow');
const outlineColor = textContainer.querySelector("#outlineColor");
// Box Border
const borderContainer = document.querySelector('#borderStyle');
const borderSelect = borderContainer.querySelector("#boxStyle");
const borderWidth = borderContainer.querySelector("#borderWidth");
const borderRadius = borderContainer.querySelector("#borderRadius");
const borderColor = borderContainer.querySelector("#borderColor");
// Colors
const colorContainer = document.querySelector('#colors');
const backgroundColor = colorContainer.querySelector("#backgroundColor");
const textColor = colorContainer.querySelector("#textColor");
const textHighlight = colorContainer.querySelector('#textHighlight');


text.addEventListener("input", () => {
  // set width based on character length
  text.style.width = `${text.value.length + 1}ch`; 
});

canvas.addEventListener("pointermove", () => {
  text.focus();
});

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

darkMode.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

// Animations
// Animation Duration
text.style.setProperty('--anim-duration', `${duration}s`); 
animDuration.addEventListener("input", () => {
    let input = Number(animDuration.value);
    input = Math.min(30, Math.max(1, input));
    duration = input;
    text.style.setProperty('--anim-duration', `${duration}s`);
    resetAnimation(text);
});

animDuration.addEventListener("blur", () => {
    animDuration.value = duration;
});

// Animation Interval
animInterval.addEventListener("input", () => {
    let input = Number(animInterval.value);
    input = Math.min(30, Math.max(0, input));
    interval = input;
    resetAnimation(text);
});

animInterval.addEventListener("blur", () => {
    animInterval.value = interval;
});

// Animation Type
animSelect.addEventListener("change", () => {
  currentAnimation = `anim-${animSelect.value}`;
  resetAnimation(text);
  buttons[0].textContent = animSelect.value + "▼";
});

text.addEventListener("animationend", async () => {
  removeAnimationClasses(text);
  await delay(interval * 1000);
  text.classList.add(currentAnimation);
});

// Text Style
// Font Style
text.style.setProperty('--font-style', `"${fontSelect.value}"`);
fontSelect.addEventListener("change", () => {
  text.style.setProperty('--font-style', `"${fontSelect.value}"`); 
  buttons[1].textContent = fontSelect.value + "▼";
});

// Text Size
text.style.setProperty('--text-size', `${textSize.value}px`);
textSize.addEventListener("input", () => {
    let size = Number(textSize.value);
    size = Math.min(100, Math.max(12, size));
    text.style.setProperty('--text-size', `${size}px`);
});

textSize.addEventListener("blur", () => {
    let size = Number(textSize.value);
    size = Math.min(100, Math.max(12, size));
    textSize.value = size;
});

// Text Shadow
text.style.setProperty('--text-shadow', `${textShadow.value}px`);
textShadow.addEventListener("input", () => {
  let size = Number(textShadow.value);
  size = Math.min(20, Math.max(0, size));
  text.style.setProperty('--text-shadow', `${size}px`);
});

textShadow.addEventListener("blur", () => {
    let size = Number(textShadow.value);
    size = Math.min(20, Math.max(0, size));
    textShadow.value = size;
});

// Outline Color
text.style.setProperty('--shadow-color', outlineColor.value);
outlineColor.addEventListener("input", () => {
    text.style.setProperty('--shadow-color', outlineColor.value);
});

// Border Style
text.style.setProperty('--border-style', borderSelect.value); 
borderSelect.addEventListener("change", () => {
  text.style.setProperty('--border-style', borderSelect.value); 
  buttons[2].textContent = borderSelect.value + "▼";
});

// Border Width
text.style.setProperty('--border-width', `${borderWidth.value}px`);
borderWidth.addEventListener("input", () => {
  let width = Number(borderWidth.value);
  width = Math.min(30, Math.max(0, width));
  text.style.setProperty('--border-width', `${width}px`);
});

borderWidth.addEventListener("blur", () => {
    let width = Number(borderWidth.value);
    width = Math.min(30, Math.max(0, width));
    borderWidth.value = width;
});

// Border Radius
text.style.setProperty('--border-radius', `${borderRadius.value}px`);
borderRadius.addEventListener("input", () => {
  let radius = Number(borderRadius.value);
  radius = Math.min(200, Math.max(0, radius));
  text.style.setProperty('--border-radius', `${radius}px`);
});

borderRadius.addEventListener("blur", () => {
    let radius = Number(borderRadius.value);
    radius = Math.min(100, Math.max(0, radius));
    borderRadius.value = radius;
});

// Border Color
text.style.borderColor = borderColor.value;
borderColor.addEventListener("input", () => {
    text.style.borderColor = borderColor.value; 
});

// Colors
canvas.style.backgroundColor = backgroundColor.value; 
backgroundColor.addEventListener("input", () => {
    canvas.style.backgroundColor = backgroundColor.value; 
});

// Text Color
text.style.color = textColor.value; 
textColor.addEventListener("input", () => {
    text.style.color = textColor.value; 
});

// Text Highlight
text.style.backgroundColor = textHighlight.value; 
textHighlight.addEventListener("input", () => {
    text.style.backgroundColor = textHighlight.value; 
});

// Dropdown menus
buttons.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    dropdown[index].classList.toggle("show");
    if (animContainer.contains(btn)) {
      animDuration.classList.toggle("hideArrow");
      animInterval.classList.toggle("hideArrow");
    }
    else if (textContainer.contains(btn)) {
      textSize.classList.toggle("hideArrow");
      textShadow.classList.toggle("hideArrow");
    }
  });
});

// Close dropdown if clicking outside
document.addEventListener("click", (e) => {
  dropdown.forEach((menu, i) => {
    if (!menu.contains(e.target) && !buttons[i].contains(e.target)) {
      menu.classList.remove("show");
      if (i === 0) {
        animDuration.classList.remove("hideArrow");
        animInterval.classList.remove("hideArrow");
      } 
      else if (i === 1) {
        textSize.classList.remove("hideArrow");
        textShadow.classList.remove("hideArrow");
      }
    }
  });
});
