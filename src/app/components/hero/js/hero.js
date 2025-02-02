import Swiper from 'swiper'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

let aboutGallery = []

function initSwipers() {
  document
    .querySelectorAll('.hero__events-swiper')
    .forEach((swiperElement, index) => {
      const btnNext = swiperElement.querySelector('.arrow-next')
      const btnPrev = swiperElement.querySelector('.arrow-prev')
      const pagination = swiperElement.querySelector('.pagination')

      aboutGallery[index] = new Swiper(swiperElement, {
        modules: [Navigation, Pagination],
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
          nextEl: btnNext,
          prevEl: btnPrev
        },
        pagination: {
          el: pagination,
          clickable: true
        },
        breakpoints: {
          200: {
            autoHeight: true
          },
          920: {
            autoHeight: false
          }
        }
      })
    })
}

initSwipers()

window.addEventListener('resize', initSwipers)
