export const base = `main .isolate:nth-of-type(2)`
export const EXPORT = `${base} .pb-\\[144px\\] > :first-child > div`
export const QA_PAIR_CONTAINER = `${EXPORT} > .pb-lg`
export const PAIR_LEFT = `${QA_PAIR_CONTAINER} > div> .col-span-8`
export const QUESTION = `${PAIR_LEFT} > :first-child`
export const ANSWER = `${PAIR_LEFT} > :last-child`
