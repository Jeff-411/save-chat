console.log(`app.js reached...`)

// LAYOUT
/**
 * Scope the selectors. The `base` constant excludes the content of
 * Perplexity's "Library" section. This handles edge cases in which
 * the user has been chatting with Perplexity about the Perplexity DOM.
 */
const base = `main .isolate:nth-of-type(2)`
/**
 * The MAIN_CONTAINER div is the only child of its parent and has no classes.
 */
const MAIN_CONTAINER = `${base} .pb-\\[144px\\] > :first-child > div`
const QA_PAIR_CONTAINER = `${MAIN_CONTAINER} > .pb-lg`
/**
 * PAIR_LEFT contains the code we want to extract.
 *
 * For reference: Its sibling to the right (isolate.col-span-4)
 * contains the panes used to:
 *  - Search Images,
 *  - Search Videos, and
 *  - Generate Image
 */
const PAIR_LEFT = `${QA_PAIR_CONTAINER} > div> .col-span-8`
/**
 * In this LAYOUT context, "PAIR_LEFT" seems like a good name for
 * the path to the .col-span-8 element.
 *
 * In a DEVELOPMENT context, however, it makes more sense to refer to
 * the element we want to extract as a "CHAT".
 */
const CHAT = PAIR_LEFT
const QUESTION = `${CHAT} > :first-child`
const ANSWER = `${CHAT} > :last-child`

const selectors = {
  MAIN_CONTAINER,
  QA_PAIR_CONTAINER,
  PAIR_LEFT,
  CHAT,
  QUESTION,
  ANSWER,
}

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

testSelectors(selectors)
