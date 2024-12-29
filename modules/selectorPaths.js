// Extracted parent element
export const THREAD = `main .isolate:nth-of-type(2) .pb-\\[144px\\] > .relative > div`

// Q/A Pair
export const QA_PAIR = `${THREAD} > .pb-lg`
export const QA_PAIR_CHAT = `${QA_PAIR} > div> .col-span-8` // 1st kid - Chat section
export const QA_PAIR_SEARCH = `${QA_PAIR} > div> .col-span-4` // 2nd kid - Search section

// Question container
export const QA_PAIR_CHAT_Q = `${QA_PAIR_CHAT} > .my-md`
export const Q_QUESTION = `${QA_PAIR_CHAT} .group\\/query`
export const Q_QUESTION_THREAD_TITLE = `${QA_PAIR_CHAT} h1.group\\/query`
export const Q_QUESTION_ICON_CONTAINER = `${Q_QUESTION} + div`

// Answer container
export const QA_PAIR_CHAT_A = `${QA_PAIR_CHAT} > :not(.my-md):not([class=''])`
// - sources
export const A_SOURCES = `${QA_PAIR_CHAT_A} > .mb-lg`
// - answer
export const A_ANSWER = `${QA_PAIR_CHAT_A} > :not(.mb-lg)`
// - answer - header
export const A_ANSWER_HEADER = `${A_ANSWER} > .flex [color="super"]`
export const A_ANSWER_HEADER_ICON_CONTAINER = `${A_ANSWER_HEADER} > :first-child`
export const A_ANSWER_HEADER_TITLE = `${A_ANSWER_HEADER} > :last-child`
// - answer - content
export const A_ANSWER_CONTENT = `${QA_PAIR_CHAT_A} > div > .mb-md`
// - answer - icons container A_ANSWER_ICONS_CONTAINER
export const A_ANSWER_ICONS_CONTAINER = `${QA_PAIR_CHAT_A} .mt-sm.flex.items-center.justify-between`

// "Ask follow-up" question
export const ASK_FOLLOW_UP = `${THREAD} > .pointer-events-none`
