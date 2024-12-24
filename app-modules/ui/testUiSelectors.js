import { UI } from './ui.js'

export const testUiSelectors = () => {
  const QA_PAIRS_CONTAINER = document.querySelector(UI.QA_PAIRS_CONTAINER)
  const QA_PAIRS = document.querySelectorAll(UI.QA_PAIR)

  console.log(`QA_PAIRS_CONTAINER Expected value: 5: ${QA_PAIRS_CONTAINER.childElementCount}`)
  console.log(`QA_PAIRS  Expected value: 2: ${QA_PAIRS.length}`)

  QA_PAIRS.forEach((QA_PAIR, i) => {
    console.log(`i: ${i}`)

    if (i === 0) {
      console.log(`QA_PAIR 1 Expected value: 'my-md md:my-lg' : ${QA_PAIR.classList}`)
    } else {
      console.log(
        `QA_PAIR 2 Expected value: 'mb-lg border-borderMain/50 ...' ${QA_PAIR} > div.classList`
      )
    }
  })
}
