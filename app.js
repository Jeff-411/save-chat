// app.js

// Top level selector
const base = `main .isolate:nth-of-type(2)`

// UI constants (to be used in extracting the chat)
const CONVERSATION = `${base} .pb-\\[144px\\]` // 1st class: mx-auto
const THREAD = `${CONVERSATION} > :first-child` // 1st class: relative
const QA_PAIRS = `${THREAD} > :first-child` // no classes
const QA_PAIR = `${QA_PAIRS} > div:has(> *):not(.pointer-events-none)` // 1st class: pb-lg
const CHAT = `${QA_PAIR} > div > div` // 1st class: col-span-8
const QUESTION = `${CHAT} > :first-child` // 1st class: my-md
const ANSWER = `${CHAT} > :last-child` // no classes
