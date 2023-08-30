import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
// import styles bundle
import 'swiper/css/bundle';

const Carousel = () => {
  return (
    <div className='relative border-t border-white pt-8 px-3'>
      <img className='prev absolute top-1/2 left-[80px] w-[180px] h-5 rotate-180 cursor-pointer z-30' src='/assets/image/icons/line_end_arrow_notch.png' />
      <img className='next absolute top-1/2 right-[80px] w-[180px] h-5 cursor-pointer z-30' src='/assets/image/icons/line_end_arrow_notch.png' />
      <Swiper
        modules={[Navigation]}      
        spaceBetween={1}
        slidesPerView={1}
        loop
        navigation={{ prevEl: `.prev`, nextEl: `.next` }}
        className='max-w-[1296px]'
      >
        <SwiperSlide>
          <div className='px-3 py-4 md:px-10 h-[351px] md:h-[560px] bg-cover bg-no-repeat bg-top text-white flex flex-col justify-end md:justify-center items-start md:items-end' style={{backgroundImage: 'url(assets/image/carousel.png)'}}>
            <p className='text-6xl font-serif'>01</p>
            <h4 className='mb-2 text-2xl md:text-3xl tracking-[24px] xl:tracking-[32px] font-bold text-end'>立體投影技術</h4>
            <p className='font-bold'>透過高科技立體投影技術，讓您感受真實的科技世界。</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='px-3 py-4 md:px-10 h-[351px] md:h-[560px] bg-cover bg-no-repeat bg-top text-white flex flex-col justify-end md:justify-center items-start md:items-end' style={{backgroundImage: 'url(assets/image/carousel.png)'}}>
            <p className='text-6xl font-serif'>02</p>
            <h4 className='mb-2 text-2xl md:text-3xl tracking-[24px] xl:tracking-[32px] font-bold text-end'>立體投影技術</h4>
            <p className='font-bold'>透過高科技立體投影技術，讓您感受真實的科技世界。</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='px-3 py-4 md:px-10 h-[351px] md:h-[560px] bg-cover bg-no-repeat bg-top text-white flex flex-col justify-end md:justify-center items-start md:items-end' style={{backgroundImage: 'url(assets/image/carousel.png)'}}>
            <p className='text-6xl font-serif'>03</p>
            <h4 className='mb-2 text-2xl md:text-3xl tracking-[24px] xl:tracking-[32px] font-bold text-end'>立體投影技術</h4>
            <p className='font-bold'>透過高科技立體投影技術，讓您感受真實的科技世界。</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Carousel;