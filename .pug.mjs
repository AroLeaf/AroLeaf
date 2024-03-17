import fs from 'node:fs';
import path from 'node:path';
import pug from 'pug';
import hljs from 'highlight.js';

export function include(fp, locals = {}) {
  const content = fs.readFileSync(fp, 'utf-8');
  return path.extname(fp) === '.pug' ? pug.render(content, {
    ...locals,
    basedir: path.dirname(fp),
    filename: fp,
  }) : content;
}

export const filters = {
  highlight(text, options) {
    if (typeof options.language !== 'string') return hljs.highlightAuto(text).value;
    return hljs.highlight(text, { language: options.language, ignoreIllegals: true }).value;
  },

  prefixCSS(text, options) {
    return text.replace(/(?<=}|^).*?(?={)/g, `${options.prefix} :is($&)`);
  },
}


export const blogposts = [
  {
    id: 'you-probably-dont-need-javascript',
    title: 'You probably don\'t need Javascript.',
    description: 'Well, not for your static sites at least.',
    timestamp: new Date().toISOString(),
  },
].sort((a, b) => a.timestamp > b.timestamp ? -1 : a.timestamp < b.timestamp ? 1 : 0);