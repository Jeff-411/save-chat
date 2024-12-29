export const base = `main .isolate:nth-of-type(2)`
export const THREAD = `${base} .pb-\\[144px\\] > .relative > div`

export const QA_PAIR = `${THREAD} > .pb-lg`
export const QA_PAIR_CHAT = `${QA_PAIR} > div> .col-span-8`
export const QA_PAIR_SEARCH = `${QA_PAIR} > div> .col-span-4`

export const QA_PAIR_CHAT_Q = `${QA_PAIR_CHAT} > .my-md`
export const QA_PAIR_CHAT_A = `${QA_PAIR_CHAT} > :not(.my-md):not([class=''])`

export const Q_THREAD_TITLE = `${QA_PAIR_CHAT} H1`

export const ANSWER = `${QA_PAIR_CHAT_A} > :not(.mb-lg)`
export const ANSWER_HEADER = `${ANSWER} > .flex`
export const ANSWER_HEADER_TITLE = `${ANSWER_HEADER} [color="super"] > :last-child`
export const ANSWER_CONTENT = `${QA_PAIR_CHAT_A} > div > .mb-md`
