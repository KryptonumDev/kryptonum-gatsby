export const transformBToStrong = (text) => {
  return text.replace(/<b>(.*?)<\/b>/g, "<strong>$1</strong>");
}

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