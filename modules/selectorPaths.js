// IMPORTANT ==================================================================
// There are 2 versions of the THREAD_OUTER_CONTAINER constant in this file:
//    1. `main .isolate:nth-of-type(2) .pb-\\[144px\\]`, and
//    2. `.pb-\\[144px\\]`
//
// Use v:1 for extracting THREAD programmatically.
// Use v:2 for testing purposes during development (i.e. when you copy/paste
// the outerHTML of the `.pb-\\[144px\\]` element into a test file).
// ============================================================================

// THREAD_OUTER_CONTAINER
// THREAD_OUTER_CONTAINER > THREAD_PARENT
// THREAD_OUTER_CONTAINER > THREAD_MOBILE_VERSION
// ------------------------------------------------------------------------------------------------

// v:1 Outer THREAD container element
// export const THREAD_OUTER_CONTAINER = `main .isolate:nth-of-type(2) .pb-\\[144px\\]` // v:1

// v:2 Outer THREAD container element
export const THREAD_OUTER_CONTAINER = `.pb-\\[144px\\]` // v:2
export const THREAD_PARENT = `${THREAD_OUTER_CONTAINER} > .relative`
export const THREAD_MOBILE_VERSION = `${THREAD_OUTER_CONTAINER} > .fixed.bottom-0`
// ------------------------------------------------------------------------------------------------


// THREAD
export const THREAD = `${THREAD_PARENT} > div`
  export const QA_PAIR = `
  ${THREAD} > .pb-lg` //================================================================== Q/A Pair
    export const QA_PAIR_CHAT = `
    ${QA_PAIR} > div> .col-span-8` //---------------------------------------------------- CHAT
      export const QA_PAIR_CHAT_Q = ` 
      ${QA_PAIR_CHAT}>  .my-md` //------------------------------------- Question wrap
        export const Q_QUESTION = `
        ${QA_PAIR_CHAT} .group\\/query` //---------------- Question
        export const Q_QUESTION_THREAD_TITLE = `
        ${QA_PAIR_CHAT} h1.group\\/query` //-------------- Thread title
        export const Q_QUESTION_ICON_CONTAINER = `
        ${Q_QUESTION} + div` //--------------------------- Icons wrap
      export const QA_PAIR_CHAT_A = `
      ${QA_PAIR_CHAT} > :not(.my-md):not([class=''])` //--------------- Answer wrap
        export const A_SOURCES = `
        ${QA_PAIR_CHAT_A} > .mb-lg` //-------------------- Sources
        export const A_ANSWER = `
        ${QA_PAIR_CHAT_A} > :not(.mb-lg)` //-------------- Answer
          export const A_ANSWER_HEADER = `
          ${A_ANSWER} > .flex [color="super"]` //--------- Header Wrap
            export const A_ANSWER_HEADER_ICON_CONTAINER = `
            ${A_ANSWER_HEADER} > :first-child` // Icons wrap
            export const A_ANSWER_HEADER_TITLE = ` 
            ${A_ANSWER_HEADER} > :last-child` // Title
          export const A_ANSWER_CONTENT = `
          ${QA_PAIR_CHAT_A} > div > .mb-md` //---------------- Content
        export const A_ANSWER_ICONS_CONTAINER = `
        ${QA_PAIR_CHAT_A} .mt-sm`//--------------------------- Icons wrap 
    export const QA_PAIR_OPTIONS = `
    ${QA_PAIR} > div> .col-span-4`//----------------------------------------------------- OPTIONS
  export const ASK_FOLLOW_UP = `
  ${THREAD} > .pointer-events-none` //========================== Ask follow-up question <input> box
