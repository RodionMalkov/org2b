import validator from 'validator'
import Inputmask from 'inputmask'

document.addEventListener('DOMContentLoaded', function () {
  const forms = document.querySelectorAll('.form')

  forms.forEach(form => {
    const phoneInput = form.querySelector('#phone')

    if (phoneInput) {
      Inputmask({ mask: '+7 (999) 999-99-99' }).mask(phoneInput)
    }

    form.addEventListener('submit', function (event) {
      event.preventDefault()
      let isValid = true

      const inputs = form.querySelectorAll('input')
      inputs.forEach(input => input.classList.remove('input-error'))

      inputs.forEach(input => {
        if (!input || !input.value) {
          return // Пропускаем элемент, если его значение не определено
        }

        if (input.id === 'email' && !validator.isEmail(input.value)) {
          input.classList.add('input-error')
          isValid = false
        }

        if (
          input.id === 'phone' &&
          input.value.replace(/\D/g, '').length !== 11
        ) {
          input.classList.add('input-error')
          isValid = false
        }

        if (
          input.id === 'name' &&
          (!/^[A-Za-zА-Яа-яЁё\s]+$/.test(input.value) ||
            input.value.length > 50)
        ) {
          input.classList.add('input-error')
          isValid = false
        }
      })

      if (isValid) {
        form.submit()
      }
    })
  })
})
