// ui.js

const base = `main .isolate:nth-of-type(2)`

// UI constants
const CONVERSATION = `${base} .pb-\\[144px\\]` // 1st class: mx-auto
const THREAD = `${CONVERSATION} > :first-child` // 1st class: relative
const QA_PAIRS = `${THREAD} > :first-child` // no classes
const QA_PAIR = `${QA_PAIRS} > div:has(> *):not(.pointer-events-none)` // 1st class: pb-lg
