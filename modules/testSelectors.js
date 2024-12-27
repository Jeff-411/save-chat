export function testSelectors(selectors) {
  const results = {}

  for (const [name, selector] of Object.entries(selectors)) {
    try {
      const elements = document.querySelectorAll(selector)
      results[name] = {
        valid: elements.length > 0,
        count: elements.length,
        selector: selector,
      }
    } catch (error) {
      results[name] = {
        valid: false,
        error: error.message,
        selector: selector,
      }
    }
  }

  console.table(results)
  return results
}
