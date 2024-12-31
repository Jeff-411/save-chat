# Project structure

## Root files:

- `analyze.html` contains the Perplexity DOM element we are analysing
- `analyze.css` is the stylesheet for `analyze.html`
- `app.js` accesses the `analyze.html` DOM and is the entry point for Bookmarklet development
- `sever.js` serves `analyze.html` at `http://localhost:5000`
- `package.json`

## Root directories

- `chatCss/` contains descriptively-named files for styling the extracted chat's html elements.
- `docs/` contains files and folders to document and support the development process.
- `downloads/` contains Perplexity chats downloaded by existing Chrome extensions.
- `html/` folder contains the Perplexity DOM, broken down into increasingly specific elements in order to identify the paths to key selectors.
- `html2-chat_element/` contains increasingly complex examples of the chat element we want to extract.
- `modules/` contains:
  - an initial set of named constants [[->]](../src/modules/constants.js)
  - a `selectors` object built on the named constants [[->]] and
  - a `TestSelectors` function for verifying the selectors
