export const transformBToStrong = (text) => {
  return text.replace(/<b>(.*?)<\/b>/g, "<strong>$1</strong>");
}