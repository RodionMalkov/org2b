import Swiper from 'swiper'
import { Navigation, Scrollbar } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/scrollbar'

export default function handlerChoseCitySwiper() {
  const chooseCitySwipers = document.querySelectorAll(
    '.choose-city__swiper.swiper'
  )
  let aboutGallery = []

  chooseCitySwipers.forEach((swiperElement, index) => {
    const scrollbar = swiperElement.querySelector('.scrollbar')

    aboutGallery[index] = new Swiper(swiperElement, {
      modules: [Navigation, Scrollbar],
      slidesPerView: 'auto',
      scrollbar: {
        el: scrollbar
      }
    })
  })
}
