# Project structure

## Root files

- `analyze.html` - Contains the Perplexity DOM element we are analyzing
- `analyze.css` - Stylesheet for analyze.html
- `markdown.css` - Stylesheet for markdown output (symlink)
- `package.json` - Project configuration and dependencies
- `README.md` - Project documentation
- `server.js` - Serves analyze.html at http://localhost:5000

## Root directories

- `_CHAT/` - temporary Markdown files
- `_DEV/` - Development files and temporary tests
- `.vscode/` - VS Code workspace settings
- `chatCss/` - Styled chat element components
- `docs/` - Project documentation and development notes
- `html/` - Perplexity DOM analysis files
- `html2-chat_element/` - Chat element examples
- `scss/` - SCSS source files
- `src/` - Source code
  - `app.js` - Main application entry point
  - `modules/` - JavaScript modules
    - `extractToMd.js` - HTML to Markdown converter

## Main functionality

The application serves analyze.html locally and uses extractToMd.js to convert Perplexity chat content to Markdown format.
