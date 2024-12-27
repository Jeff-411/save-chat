// constants_commented.js
/**
 * Scope the selectors. The `base` constant excludes the content of
 * Perplexity's "Library" section. This handles edge cases in which
 * the user has been chatting with Perplexity about the Perplexity DOM.
 */
export const base = `main .isolate:nth-of-type(2)`
/**
 * The MAIN_CONTAINER div is the only child of its parent and has no classes.
 */
export const MAIN_CONTAINER = `${base} .pb-\\[144px\\] > :first-child > div`
export const QA_PAIR_CONTAINER = `${MAIN_CONTAINER} > .pb-lg`
/**
 * PAIR_LEFT contains the code we want to extract.
 *
 * For reference: Its sibling to the right (isolate.col-span-4)
 * contains the panes used to:
 *  - Search Images,
 *  - Search Videos, and
 *  - Generate Image
 */
export const PAIR_LEFT = `${QA_PAIR_CONTAINER} > div> .col-span-8`
/**
 * In this LAYOUT context, "PAIR_LEFT" seems like a good name for
 * the path to the .col-span-8 element.
 *
 * In a DEVELOPMENT context, however, it makes more sense to refer to
 * the element we want to extract as a "CHAT".
 */
export const CHAT = PAIR_LEFT
export const QUESTION = `${CHAT} > :first-child`
export const ANSWER = `${CHAT} > :last-child`
