import React from "react";
import { PortableText } from "@portabletext/react";
import { renderToStaticMarkup } from 'react-dom/server';
import { Link } from "gatsby";

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

export const slugify = (text) => {
  const a = 'àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;',
        b = 'aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------',
        p = new RegExp(a.split('').join('|'), 'g');
  return text.toString().toLowerCase().replace(/\s+/g, '-').replace(p, c => b.charAt(a.indexOf(c))).replace(/&/g, '-i-').replace(/[^\w-]+/g, '').replace(/--+/g, '-').replace(/^-+/, '').replace(/-+$/, '');
};

export const generateHeadings = (portableText) => {
  const content = renderToStaticMarkup(<PortableText value={portableText} />);
  const headingsRegex = /<h[23].*?>(.*?)<\/h[23]>/g;
  const headingMatches = content.match(headingsRegex);
  if (!headingMatches) {
    return null;
  }
  const listItems = headingMatches.map((match, i) => {
    const tag = match.match(/<\/?(h[23])/)[1];
    const text = match.replace(/<\/?[^>]+(>|$)/g, '');
    return (
      <li key={i} className={tag}>
        <Link to={`#${slugify(text)}`}>{text}</Link>
      </li>
    );
  });
  return <ul>{listItems}</ul>;
}
