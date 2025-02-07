export default function handleTabContent(container) {
  document.addEventListener('DOMContentLoaded', () => {
    const tabsContainer = document.querySelectorAll(`.${container}`)

    if (!tabsContainer) return

    tabsContainer.forEach(tabs => {
      const btns = tabs.querySelectorAll('.tabs__btn')
      const contents = tabs.querySelectorAll('.tabs__content')

      if (!btns || !contents) return

      btns.forEach(tab => {
        tab.addEventListener('click', () => {
          const target = tab.getAttribute('data-tab')

          btns.forEach(t => t.classList.remove('active'))
          tab.classList.add('active')

          contents.forEach(content => {
            if (content.getAttribute('data-tab-content') === target) {
              content.classList.add('active')
            } else {
              content.classList.remove('active')
            }
          })
        })
      })

      btns[0].click()
    })
  })
}
