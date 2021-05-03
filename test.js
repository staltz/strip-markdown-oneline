const test = require('tape');
const stripMarkdownOneline = require('./index');

test('it strips markdown syntax', (t) => {
  t.plan(1);

  const input = `
# Title

> blockquote

## Header 2

This is a link: [search engine](https://duckduckgo.com)
`;

  const output = stripMarkdownOneline(input);
  t.equal(output, 'Title blockquote Header 2 This is a link: search engine');
});

test('handles trailing spaces', (t) => {
  t.plan(1);

  const input = `
# Title

First: primeiro  
Second: segundo
`;

  const output = stripMarkdownOneline(input);
  console.log(output)
  t.equal(output, 'Title First: primeiro Second: segundo');
});
