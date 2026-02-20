export function updateDragHandle(textObj) {
  const handle = textObj.handle;
  if (!handle) return;

  const style = getComputedStyle(textObj.el);
  const border = parseFloat(style.borderTopWidth) || 0;
  const outlineOffset = parseFloat(style.outlineOffset) || 0;
  const extraOffset = 1;

  // total offset from top to sit on outline
  const totalOffset = border + outlineOffset + extraOffset;

  handle.style.top = `-${totalOffset}px`;
  handle.style.left = '50%';
  handle.style.transform = 'translate(-50%, -50%)'; // centers the handle vertically on the point

  console.log(border);
}