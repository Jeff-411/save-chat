console.log(`app.js reached...`)

// Scope the selectors
const base = `main .isolate:nth-of-type(2)`

// Named constants
const CONVERSATION = `${base} .pb-\\[144px\\]`
const THREAD = `${CONVERSATION} > :first-child`
const QA_PAIRS = `${THREAD} > :first-child`
const QA_PAIR = `${QA_PAIRS} > div:has(> *):not(.pointer-events-none)`
const CHAT = `${QA_PAIR} > div > div` // .col-span-8
const QUESTION = `${CHAT} > :first-child`
// const ANSWER = `${CHAT} > :last-child`
const ANSWER = `${CHAT} > :nth-child(3)`

function testSelectors(selectors) {
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

// Usage:
const selectors = {
  CONVERSATION,
  THREAD,
  QA_PAIRS,
  QA_PAIR,
  CHAT,
  QUESTION,
  ANSWER,
}

testSelectors(selectors)
