# strip-markdown-oneline

Given a markdown input as string, returns a string where all markdown syntax is removed, and no new lines exist.

## Installation

```sh
npm install strip-markdown-oneline
```

## Usage

### Input

```md
# Title

> blockquote

## Header 2

This is a link: [search engine](https://duckduckgo.com)
```

### Function call

```js
const stripMarkdownOneline = require('strip-markdown-oneline')

const output = stripMarkdownOneline(input);

console.log(output)
```

### Output

```
Title blockquote Header 2 This is a link: search engine
```

## License

[MIT](LICENSE)