// Escaped Selectors

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
