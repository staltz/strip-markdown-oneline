const unified = require('unified');
const parse = require('remark-parse');
const remark2retext = require('remark-retext');
const english = require('retext-english');
const filter = require('unist-util-filter');
const stringify = require('./stringify');

module.exports = function stripMarkdownOneline(input) {
  const file = unified()
    .use(parse)
    .use(() => (ast) => filter(ast, (node) => node.type !== 'html'))
    .use(remark2retext, unified().use(english))
    .use(stringify)
    .processSync(input);

  return file.contents.trim().replace(/ +/g, ' ').replace(/\n/g, '');
};
