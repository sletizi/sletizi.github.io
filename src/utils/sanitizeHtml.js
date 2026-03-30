const allowedTags = new Set(['A', 'BR', 'EM', 'LI', 'P', 'SPAN', 'STRONG', 'UL']);
const allowedAttributes = {
  A: new Set(['href', 'title']),
  SPAN: new Set(['class']),
};

function sanitizeNode(node) {
  const children = Array.from(node.children);

  children.forEach((child) => {
    const tagName = child.tagName.toUpperCase();

    if (!allowedTags.has(tagName)) {
      child.replaceWith(...Array.from(child.childNodes));
      return;
    }

    Array.from(child.attributes).forEach((attribute) => {
      const allowedForTag = allowedAttributes[tagName];
      if (!allowedForTag || !allowedForTag.has(attribute.name)) {
        child.removeAttribute(attribute.name);
      }
    });

    if (tagName === 'A') {
      const href = child.getAttribute('href') || '';
      const safeHref = /^(https?:|mailto:|\/|#)/i.test(href) ? href : '#';
      child.setAttribute('href', safeHref);
      if (/^https?:/i.test(safeHref)) {
        child.setAttribute('target', '_blank');
        child.setAttribute('rel', 'noopener noreferrer');
      }
    }

    sanitizeNode(child);
  });
}

export function sanitizeHtml(input) {
  if (!input) {
    return '';
  }

  const parser = new DOMParser();
  const document = parser.parseFromString(`<div>${input}</div>`, 'text/html');
  const wrapper = document.body.firstElementChild;

  sanitizeNode(wrapper);

  return wrapper.innerHTML;
}
