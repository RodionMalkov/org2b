import Swiper from 'swiper'
import { Navigation, Scrollbar } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/scrollbar'

export default function handlerChoseCitySwiper() {
  let aboutGallery = []
  document
    .querySelectorAll('.choose-city__swiper.swiper')
    .forEach((swiperElement, index) => {
      const scrollbar = swiperElement.querySelector('.scrollbar')
      console.log(scrollbar)

      aboutGallery[index] = new Swiper(swiperElement, {
        modules: [Navigation, Scrollbar],
        slidesPerView: 'auto',
        scrollbar: {
          el: scrollbar
        }
      })
    })
}
