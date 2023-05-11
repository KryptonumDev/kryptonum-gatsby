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

export const Clamp = (minRem, vw, maxRem) => {
  return `clamp(${minRem / 16}rem, ${vw/7.68}vw, ${maxRem / 16}rem)`;
};