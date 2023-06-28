export const scrollLock = (boolean) => {
  const body = (typeof document !== `undefined`) ? document.body : null;
  switch (boolean) {
    case true:
      body.classList.add('scrollLock');
      break;
    case false:
      body.classList.remove('scrollLock');
      break;
    default: 
      break
  }
}

export const Clamp = (minSize, vw, maxSize, unit="rem") => {
  return unit === "rem"
  ? `clamp(${minSize / 16}rem, ${vw/7.68}vw, ${maxSize / 16}rem)`
  : `clamp(${minSize}px, ${vw/7.68}vw, ${maxSize}px)`;
};

export const removeMarkdown = (markdown) => {
  return markdown?.replace(/\*\*(.*?)\*\*/g, '$1');
}

export const portableTextToMarkdown = (node) => {
  if (node._type === 'span') {
    let text = node.text;
    if (node.marks && node.marks.includes('strong')) {
      text = `**${text}**`;
    }
    return text;
  }
  if (Array.isArray(node.children)) {
    return node.children.map(child => portableTextToMarkdown(child)).join('');
  }
  return '';
};