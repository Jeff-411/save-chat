// Escaped Selectors

const PATH_TO_CONVERSATION = `main .isolate:nth-of-type(2)`
const CONVERSATION = `$${PATH_TO_CONVERSATION} .pb-\\[144px\\]`
const THREAD = `${CONVERSATION} > :first-child`
const QA_PAIRS = `${THREAD} > :first-child`
const QA_PAIR = `${QA_PAIRS} > div:has(> *):not(.pointer-events-none)`

// prettier-ignore
export const UI = {
  CONVERSATION_CONTAINER: 
  `main .isolate:nth-of-type(2) .pb-\\[144px\\]`,
  THREAD_CONTAINER: 
  `main .isolate:nth-of-type(2) .pb-\\[144px\\] > :first-child`,
  QA_PAIRS_CONTAINER: `main .isolate:nth-of-type(2) .pb-\\[144px\\] > :first-child > :first-child`,
  QA_PAIR:
    `main .isolate:nth-of-type(2) .pb-\\[144px\\] > :first-child > :first-child` +
    `> div:has(> *):not(.pointer-events-none)`,
}

// prettier-ignore
export const UI_QUESTION = {
  CONTAINER: `${UI.QA_PAIR} > .my-md.md:my-lg`,
}

// prettier-ignore
export const UI_ANSWER = {
  CONTAINER: `${UI_QUESTION.CONTAINER} + div:not(:has(*))`,
}
