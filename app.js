/**
 * These may help with debugging. Not recommended for regular use.
 *
 */
const uiPathsReference = {
  /** ref_CONVERSATION_CONTAINER: '.pb-[144px]',
   * Ok, so I know it's an extreme edge case, but I replaced the
   * .pb-[144px] value with the one below after a DevTools search
   * for '.pb-[144px]' returned 14 results!
   *
   * It turned out that I'd used .'pb-[144px]' in some example
   * code while chatting with Perplexity -- and DevTools found them
   * in the Library.
   */
  ref_CONVERSATION_CONTAINER: 'main .isolate:nth-of-type(2) .pb-[144px]',
  ref_THREAD_CONTAINER: 'main .isolate:nth-of-type(2) .pb-[144px] > :first-child',
  ref_QA_PAIRS_CONTAINER: 'main .isolate:nth-of-type(2) .pb-[144px] > :first-child > :first-child',
  ref_QA_PAIR:
    'main .isolate:nth-of-type(2) .pb-[144px] > :first-child > :first-child > .pb-lg.border-borderMain/50',
  ref_QA_PAIR_ALT:
    'main .isolate:nth-of-type(2) .pb-[144px] > :first-child > :first-child > :not(:empty)',
}

const UI = {
  QA_PAIRS_CONTAINER: 'main .isolate:nth-of-type(2) .pb-[144px] > :first-child > :first-child',
  QA_PAIR: 'main .isolate:nth-of-type(2) .pb-[144px] .pb-lg.border-borderMain/50',
}
