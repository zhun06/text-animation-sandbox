const canvas = document.getElementById("canvas");

export function clampToCanvas(el) {
    const maxX = canvas.clientWidth - el.offsetWidth;
    const maxY = canvas.clientHeight - el.offsetHeight;

    // Clamp left/top
    let left = Math.max(0, Math.min(el.offsetLeft, maxX));
    let top = Math.max(0, Math.min(el.offsetTop, maxY));

    el.style.left = left + "px";
    el.style.top = top + "px";
}