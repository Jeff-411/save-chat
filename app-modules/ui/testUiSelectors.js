import { UI } from './ui.js'

export const testUiSelectors = () => {
  let target1 = document.querySelector(UI.QA_PAIRS_CONTAINER)
  console.log(`target1: ${target1}`)
  console.log(`target1.childElementCount: ${target1.childElementCount}`)

  let targets = document.querySelectorAll(UI.QA_PAIR)
  console.log(`targets.length: ${targets.length}`)

  targets.forEach(target => {
    console.log(`target.outerHTML: ${target.outerHTML}`)
  })
}
