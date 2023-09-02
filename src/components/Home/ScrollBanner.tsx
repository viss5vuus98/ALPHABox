// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';

// import required modules
import { Scrollbar } from 'swiper/modules';

interface ScrollBannerProps {
  title: string;
  location: string;
  description: string;
  robot: string;
  theme?: string;
}

const ScrollBanner = () => {
  return (
    <>
    <Swiper
      modules={[Scrollbar]}
      scrollbar={{
        "hide": false,
        el: '.scroll',
        dragSize: 200,
      }}
      slidesPerView={3}
      spaceBetween={0}
      className='-mx-3 mb-0 md:mb-9 hidden md:flex flex-wrap md:overflow-hidden md:flex-nowrap gap-6 md:gap-0'    
    >
      <SwiperSlide>
        <ScrollBannerCard 
        title="Zone" 
        location="Taipei" 
        description="ALPHABOX+ 真的很夯！每次把它打開，感覺就像是身臨其境一樣。它陪我度過了很多寂寞的時光，讓我在家裡也能享受到優質的休閒時光。"
        robot="ALPHABOX+ Dianne"
        theme="#380C7E" />
      </SwiperSlide>
      <SwiperSlide>
        <ScrollBannerCard 
        title="Zone" 
        location="Taipei" 
        description="ALPHABOX+ 真的很夯！每次把它打開，感覺就像是身臨其境一樣。它陪我度過了很多寂寞的時光，讓我在家裡也能享受到優質的休閒時光。"
        robot="ALPHABOX+ Dianne"
        />
      </SwiperSlide>
      <SwiperSlide>
        <ScrollBannerCard 
        title="Zone" 
        location="Taipei" 
        description="ALPHABOX+ 真的很夯！每次把它打開，感覺就像是身臨其境一樣。它陪我度過了很多寂寞的時光，讓我在家裡也能享受到優質的休閒時光。"
        robot="ALPHABOX+ Dianne"
        theme="#380C7E" />
      </SwiperSlide>
      <SwiperSlide>
        <ScrollBannerCard 
        title="Zone" 
        location="Taipei" 
        description="ALPHABOX+ 真的很夯！每次把它打開，感覺就像是身臨其境一樣。它陪我度過了很多寂寞的時光，讓我在家裡也能享受到優質的休閒時光。"
        robot="ALPHABOX+ Dianne"
        />
      </SwiperSlide>                  
    </Swiper>
    <div className='mb-32 hidden md:flex items-center gap-6'>
      <div className='scroll w-full xl:w-8/12 h-1 rounded-md bg-white'></div>
      <span className='text-white'>SCROLL</span>    
    </div>
    </>
  )
}

const ScrollBannerCard = ({ title, location, description, robot, theme }: ScrollBannerProps) => {
  return (
    <div className="px-3">
      <div className="p-6 md:p-10 flex flex-col h-[412px]" style={{backgroundColor: theme ? theme : '#FFF', color: theme ? '#FFF' : '#000'}}>
        <div className="mb-8 flex space-x-2 items-center">
          <p className="font-bold">{title}</p>
          <span className="material-icons text-[8px]">circle</span>            
          <p className="font-bold">{location}</p>
        </div>
        <p className="grow font-bold">{description}</p>
        <div className="space-x-4 flex items-center">
          <span className="material-icons text-base">circle</span>        
          <span className="material-icons text-base">circle</span>
          <span className="font-bold">{robot}</span>                
        </div>
      </div>
    </div>    
  )
}

export default ScrollBanner