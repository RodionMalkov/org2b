import MicroModal from 'micromodal'

MicroModal.init({
  disableScroll: true,
  awaitOpenAnimation: true,
  awaitCloseAnimation: true,
  openTrigger: 'data-modal-open',
  closeTrigger: 'data-modal-close',
  onClose: () => {
    const navBtn = document.querySelectorAll('button[data-modal-open]')
    if (!navBtn) {
      return
    }

    navBtn.forEach(button => {
      if (button.classList.contains('active')) {
        button.classList.remove('active')
      }
    })
  }
})
