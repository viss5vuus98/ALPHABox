import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
// import styles bundle
import 'swiper/css/bundle';

interface Carousel2Props {
  imageRoot: string;
}

const Carousel2 = ({ imageRoot }: Carousel2Props) => {
  return(
    <div className='w-full md:w-1/2 relative'>
      <p className="material-symbols-outlined prev absolute top-1/2 left-3 sm:left-4 z-10 cursor-pointer text-5xl md:text-[80px] text-white">arrow_circle_left</p>
      <p className="material-symbols-outlined next absolute top-1/2 right-3 sm:right-4 z-10 cursor-pointer text-5xl md:text-[80px] text-white">arrow_circle_right</p>
      <Swiper 
      className='h-[375px] md:h-[625px] xl:h-[925px]'
      modules={[Navigation]}
      spaceBetween={1}
      slidesPerView={1}
      loop
      navigation={{ prevEl: `.prev`, nextEl: `.next` }}
      >
        <SwiperSlide>
          <img src={`assets/image/${imageRoot}_square1.png`} alt="AI Robot" className='sm:h-full sm:w-full object-cover' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={`assets/image/${imageRoot}_square2.png`} alt="AI Robot" className='sm:h-full sm:w-full object-cover' />
        </SwiperSlide>        
      </Swiper>
    </div>
  )
}

export default Carousel2