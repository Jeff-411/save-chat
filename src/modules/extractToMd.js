// extractToMarkdown.js

export const extractToMd1 = html => {
  // 1. Setup
  const parser = new DOMParser()
  const doc = parser.parseFromString(html, 'text/html')

  // 2. Extract content using selectors
  const titleEl = doc.querySelector('h1.group\\/query')
  const title = titleEl?.textContent?.trim() || ''

  // 3. Build markdown
  let md = `# ${title}\n\n`
  md += `## first question\n\n${title}\n\n`
  md += `### AI answer\n\n`

  // Get first answer
  const answerEl = doc.querySelector('.mb-md')
  const answer = answerEl?.textContent?.trim() || ''
  md += `${answer}\n`

  return md.trim()
}
