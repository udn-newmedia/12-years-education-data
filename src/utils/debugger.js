/**
 * Support debugger methods to browser
 * .
 * @property {_target} target element
 * @property {_el} child element
 * @property {_width} width
 * @return {function}
 */

function addBorder(_target = document, _el = '*', _width = 1) {
  const target = _target || document;  
  const el = _el || '*';
  const width = _width || 1;

  const elements = target.querySelectorAll(el);
  elements.forEach(e => {
    e.style.border = `solid ${width}px red`;
  });

  return `${target}: debugger mode active!`;
}

function removeBorder(target = document, el='*') {
  if (!target) {
    console.error('Debugger: lack of target parameter!');
    return;
  }
  const elements = target.querySelectorAll(el);

  elements.forEach(e => {
    e.style.border = '';
  });

  return `${target}: debugger mode disable!`;
}

export { addBorder, removeBorder };