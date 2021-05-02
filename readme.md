# remark-linkify-regex

Given markdown text nodes, find textual matches of a RegExp, and replace those matches with link nodes.

## Installation

```sh
npm install remark-linkify-regex
```

## Usage

Note: the API is not a remark plugin directly, instead it's a factory for a plugin. You must call the factory with a regex.

```js
// ...
var linkifyRegex = require('remark-linkify-regex');

unified()
  .use(parse)
  .use(linkifyRegex(/\@[A-Za-z0-9]+\b/))
// ...
```

Markdown document:

```
# Title

This is my friend: @6ilZq3kN0F

This is redundantly linked: [@6ilZq3kN0F](@6ilZq3kN0F)

cc [@alreadyLinked](@2RNGJafZt)
```

Input AST:

```
root[4] (1:1-9:1, 0-130)
├─ heading[1] (2:1-2:8, 1-8) [depth=1]
│  └─ text: "Title" (2:3-2:8, 3-8)
├─ paragraph[1] (4:1-4:31, 10-40)
│  └─ text: "This is my friend: @6ilZq3kN0F" (4:1-4:31, 10-40)
├─ paragraph[2] (6:1-6:55, 42-96)
│  ├─ text: "This is redundantly linked: " (6:1-6:29, 42-70)
│  └─ link[1] (6:29-6:55, 70-96) [url="@6ilZq3kN0F"]
│     └─ text: "@6ilZq3kN0F" (6:30-6:41, 71-82)
└─ paragraph[2] (8:1-8:32, 98-129)
   ├─ text: "cc " (8:1-8:4, 98-101)
   └─ link[1] (8:4-8:32, 101-129) [url="@2RNGJafZt"]
      └─ text: "@alreadyLinked" (8:5-8:19, 102-116)
```

Output AST:

```
root[4] (1:1-9:1, 0-130)
├─ heading[1] (2:1-2:8, 1-8) [depth=1]
│  └─ text: "Title"
├─ paragraph[2] (4:1-4:31, 10-40)
│  ├─ text: "This is my friend: "
│  └─ link[1] [url="@6ilZq3kN0F"]
│     └─ text: "@6ilZq3kN0F"
├─ paragraph[2] (6:1-6:55, 42-96)
│  ├─ text: "This is redundantly linked: "
│  └─ link[1] (6:29-6:55, 70-96) [url="@6ilZq3kN0F"]
│     └─ text: "@6ilZq3kN0F" (6:30-6:41, 71-82)
└─ paragraph[2] (8:1-8:32, 98-129)
   ├─ text: "cc "
   └─ link[1] (8:4-8:32, 101-129) [url="@2RNGJafZt"]
      └─ text: "@alreadyLinked" (8:5-8:19, 102-116)
````

## License

[MIT](LICENSE)