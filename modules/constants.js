export const base = `main .isolate:nth-of-type(2)`
export const MAIN_CONTAINER = `${base} .pb-\\[144px\\] > :first-child > div`
export const QA_PAIR_CONTAINER = `${MAIN_CONTAINER} > .pb-lg`
export const PAIR_LEFT = `${QA_PAIR_CONTAINER} > div> .col-span-8`
export const CHAT = PAIR_LEFT
export const QUESTION = `${CHAT} > :first-child`
export const ANSWER = `${CHAT} > :last-child`
