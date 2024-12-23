// Css Selectors

// prettier-ignore
const selectors_css = {
  /** RE: CONVERSATION_CONTAINER: `.pb-[144px]`,
   * Ok, so I know it`s an extreme edge case, but I replaced the
   * .pb-[144px] value with the one below after a DevTools search
   * for `.pb-[144px]` returned 14 results!
   *
   * It turned out that I`d used .`pb-[144px]` in some example
   * code while chatting with Perplexity -- and DevTools found them
   * in the Library.
   */
  CONVERSATION_CONTAINER: `main .isolate:nth-of-type(2) .pb-[144px]`,
  THREAD_CONTAINER: `main .isolate:nth-of-type(2) .pb-[144px] > :first-child`,
  QA_PAIRS_CONTAINER: `main .isolate:nth-of-type(2) .pb-[144px] > :first-child > :first-child`,
  QA_PAIR:
    `main .isolate:nth-of-type(2) .pb-[144px] > :first-child > :first-child` +
    `> div:has(> *):not(.pointer-events-none)`,
}
