// app.js

import { extractToMd1 } from './modules/extractToMd.js'

// Get the HTML content from the current document
const html = document.documentElement.outerHTML

// Convert to markdown
const markdown = extractToMd1(html)
console.log(markdown)

// Optional: Add a button to trigger the conversion
// document.body.insertAdjacentHTML(
//   'beforeend',
//   `
//   <button
//     onclick="window.location.href='data:text/markdown;charset=utf-8,${encodeURIComponent(
//       markdown
//     )}'"
//     style="position:fixed; bottom:20px; right:20px;">
//     Download Markdown
//   </button>
// `
// )
