// import Swiper bundle 
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Mousewheel, Keyboard } from 'swiper/modules';
// import styles bundle
import 'swiper/css/bundle';


const Carousel = () => {
  return (
    <div className="pt-8 border-t border-white hidden sm:block">
      <Swiper
        slidesPerView={1}
        navigation={true}
        modules={[Navigation]}
        className="carousel-xl w-full"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>          
    </div>
    )
}


export default Carousel;