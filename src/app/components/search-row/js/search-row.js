document.addEventListener('DOMContentLoaded', () => {
  const categoryWrapper = document.querySelector('.search-row__categories')
  const spanElement = categoryWrapper.querySelector('span')
  const categoryList = categoryWrapper.querySelector(
    '.search-row__categories-list ul'
  )
  const categoryItems = categoryList.querySelectorAll('li')

  // Изначально добавляем класс active первому элементу списка
  categoryItems[0].classList.add('active')
  // Устанавливаем текст в span
  spanElement.textContent = categoryItems[0].textContent

  // Добавляем обработчик клика для каждого элемента списка
  categoryItems.forEach(item => {
    item.addEventListener('click', () => {
      // Убираем класс active у всех элементов
      categoryItems.forEach(el => el.classList.remove('active'))

      // Добавляем класс active текущему элементу
      item.classList.add('active')

      // Изменяем текст в span
      spanElement.textContent = item.textContent
    })
  })
})
