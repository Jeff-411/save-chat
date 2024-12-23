// Escaped Selectors

// prettier-ignore
export const UI = {
  QA_PAIRS_CONTAINER: `main .isolate:nth-of-type(2) .pb-\\[144px\\] > :first-child > :first-child`,
  QA_PAIR:
    `main .isolate:nth-of-type(2) .pb-\\[144px\\] > :first-child > :first-child` +
    `> div:has(> *):not(.pointer-events-none)`,
}
