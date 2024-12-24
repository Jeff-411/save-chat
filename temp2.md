TEST FUNCTION:

I'm trying to make a Bookmarklet that will download the active thread in an online AI chatbot. I'm now in the process of analysing the chatbot's DOM. In order to keep the results of the analysis as understandable as possible, I've created this initial set of named UI constants that iteratively build paths to the key elements:

```js
// modules/constants.js

// UI SELECTORS

// Scope the selectors
const base = `main .isolate:nth-of-type(2)`

// Named constants
const CONVERSATION = `${base} .pb-\\[144px\\]`
const THREAD = `${CONVERSATION} > :first-child`
const QA_PAIRS = `${THREAD} > :first-child`
const QA_PAIR = `${QA_PAIRS} > div:has(> *):not(.pointer-events-none)`
const CHAT = `${QA_PAIR} > div > div`
const QUESTION = `${CHAT} > :first-child`
const ANSWER = `${CHAT} > :last-child`
```

I'll be adding quite a few more named constants to the list, but before going further, I'd like to generate a test function to verify the above constants (and the other's) I'll be adding.
