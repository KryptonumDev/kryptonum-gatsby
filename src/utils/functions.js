export const transformBToStrong = (text) => {
  return text.replace(/<b>(.*?)<\/b>/g, "<strong>$1</strong>");
}

export const scrollLock = (boolean) => {
  const html = (typeof document !== `undefined`) ? document.documentElement : null;
  switch (boolean) {
    case true:
      html.style.overflow = 'hidden';
      break;
    case false:
      html.style.overflow = null;
      break;
  }
}