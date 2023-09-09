//components
import ImageBanner from "../components/Home/ImageBanner";
import Carousel from '../components/Home/Carousel';
import SectionTitle from "../components/SectionTitle";
import Card from "../components/Card";
import Button from "../components/Button";
import CardGroup from "../components/CardGroup";
import ScrollBanner from "../components/Home/ScrollBanner";
import arrow_notch_xl from '/assets/image/icons/arrow_notch_xl.svg';
import arrow_notch_sm from '/assets/image/icons/arrow_notch_sm.svg';

const Home = () => {
  return (
    <>
      <div className="pt-14 h-[1778px] md:h-[880px] relative bg-cover bg-top" style={{backgroundImage: 'url(/assets/image/home_background.png)'}}>
        <div className="px-20">
          <div className="flex flex-col md:flex-row-reverse md:justify-between  text-white">
            <div className="mb-8 md:mb-0 border-t pt-2 md:pt-0 flex flex-col justify-between">
              <h2 className="font-bold tracking-[1.6px]">ALPHABOX+ STUDIO</h2>
              <h2 className="text-[#AD93CF] hidden md:block">Copyright © 2023 Hexschool.</h2>
            </div>
            <div className="w-[120px] sm:w-[196px] h-[120px] sm:h-[196px] object-cover mx-auto md:mx-0">
              <img className="w-full h-full a-circle" src="assets/image/circle.png" alt="circle" />
            </div>
            <div className="border-b items-end hidden md:flex">
              <p>最新消息！新版本 v15.4 釋出，搶先體驗！</p>
            </div>
          </div>
        </div>
        <ImageBanner />
      </div>
      <div className="pt-[136px] md:py-36 pb-[52px] relative before:content-['123'] before:bg-[url('/assets/image/mobile/carousel_mobile.png')] before:absolute before:top-0 before:left-0 before:w-full md:before:w-1/2 before:h-full before:bg-no-repeat before:bg-cover before:z-0 before:blur-md h-[1089px]  bg-gradient-radial from-[#300871] to-black">
        <div className="h-10 mb-2 mx-20 bg-gradient-to-r from-primary to-primary-100 z-10 relative"></div>
        <div className="px-20 z-20 relative">
          <h3 className="text-2xl md:text-5xl text-white tracking-normal sm:tracking-[24px] md:tracking-[40px] font-bold mb-3">什麼是</h3>
          <h3 className="text-2xl md:text-5xl text-white tracking-normal sm:tracking-[24px] md:tracking-[40px] font-bold mb-4">ALPHABOX+</h3>
        </div>
        <Carousel />
        <div className="h-10 mt-8 mx-20 bg-gradient-to-l from-primary to-primary-100 z-10 relative"></div>        
      </div>
      <div className="pt-[60px] md:pt-40 pb-10 bg-gradient-radial from-[#28085C] to-black">
        <div className="container py-3">
          <div className="flex flex-wrap">
            <SectionTitle title="最新消息" />
            <div className="flex flex-wrap justify-between items-center w-full mt-8 md:mt-10 py-8 md:py-10 px-4 text-white border-t border-white">
              <div>
                <div className="mb-2 flex space-x-4">
                  <span className="material-symbols-outlined text-[24px]">
                  emergency
                  </span>                
                  <p className="font-bold tracking-[4px]  sm:tracking-[16px] md:tracking-[20px]">2023.06.30</p>
                </div>
                <h3 className="mb-3 font-bold tracking-[20px]">產品升級公告</h3>
                <p>榮幸地宣布，ALPHABOX+ 已成功完成最新一代的升級！本次升級包括提升投影解析度、優化語音辨識技術，以及擴充情感識別功能。<br/>歡迎您了解本次升級帶來的更為卓越的性能！</p>
              </div>
              <div>
                <img src={arrow_notch_xl} alt="Arrow" />
              </div>
            </div>
            <div className="w-full md:w-1/2 py-8 md:py-10  px-4 text-white border-y md:border-r border-white">
              <div className="mb-2 flex space-x-4">
                <span className="material-symbols-outlined text-[24px]">
                emergency
                </span>                
                <p className="font-bold tracking-[4px] sm:tracking-[16px] md:tracking-[20px]">2023.06.30</p>
              </div>
              <h3 className="mb-3 font-bold tracking-[16px] md:tracking-[20px]">限時優惠活動</h3>
              <div>
                <p>為答謝廣大用戶的支持，本月將舉辦一場限時優惠活動。訂閱 ALPHABOX+ 的顧客，皆可享受九折優惠。機會難得，請勿錯過此良機！</p>  
                <img src="" alt="" />
              </div>
            </div>
            <div className="w-full md:w-1/2 py-8 md:py-10  px-4 text-white border-y border-white">
              <div className="mb-2 flex space-x-4">
                <span className="material-symbols-outlined text-[24px]">
                emergency
                </span>                
                <p className="font-bold tracking-[4px] sm:tracking-[16px] md:tracking-[20px]">2023.04.18</p>
              </div>
              <h3 className="mb-3 font-bold tracking-[20px]">新功能上線</h3>
              <p>為使您的 ALPHABOX+ 更趨完善，我們不懈地研發創新功能。近期，我們新推出智慧家居控制功能，使您的機器人能更便利地協助您操作家中各類智能設備。</p>
            </div>
            <div className="h-[132px] w-[132px] mt-10 md:mt-[76px] mb-10 md:mb-24 mx-auto">
              <img className="a-circle" src="assets/image/circle2.png" alt="More" />
            </div>
            <p className="w-full text-end font-bold text-white tracking-[1.5] hidden md:block">為環保盡一份心力，我們的包裝盒和紙質說明書都使用環保材料</p>                          
          </div>
        </div>
      </div>
      <div className="pt-[60px] md:pt-40 pb-20 md:pb-10 bg-gradient-radial from-black to-[#28085C] ">
        <div className="container px-3">
          <div className="mb-4 md:md-6 flex flex-wrap text-white items-center">
            <div className="md:w-6/12 md:-order-2">
              <SectionTitle title="使用分享" />
            </div>
            <p className="w-full mt-4 md:mt-2 mb-10 md:mb-6 font-bold">01 - 04</p>
            <p className="md:w-6/12 font-bold md:-order-1 mb-6 md:mb-0">展示其他使用者對於產品的真實體驗與評價，讓您更加放心選擇。</p>
            <p className="material-symbols-outlined text-[80px] w-full">
            emergency
            </p>
          </div>
          <div className="-mx-3 mb-0 md:mb-32 flex flex-wrap md:overflow-hidden md:flex-nowrap gap-6 md:gap-0 md:hidden">
            <Card 
            title="Zone" 
            location="Taipei" 
            description="ALPHABOX+ 真的很夯！每次把它打開，感覺就像是身臨其境一樣。它陪我度過了很多寂寞的時光，讓我在家裡也能享受到優質的休閒時光。"
            robot="ALPHABOX+ Dianne"
            theme="#380C7E" />
            <Card 
            title="Zone" 
            location="Taipei" 
            description="ALPHABOX+ 真的很夯！每次把它打開，感覺就像是身臨其境一樣。它陪我度過了很多寂寞的時光，讓我在家裡也能享受到優質的休閒時光。"
            robot="ALPHABOX+ Dianne" />
            <Card 
            title="Zone" 
            location="Taipei" 
            description="ALPHABOX+ 真的很夯！每次把它打開，感覺就像是身臨其境一樣。它陪我度過了很多寂寞的時光，讓我在家裡也能享受到優質的休閒時光。"
            robot="ALPHABOX+ Dianne"
            theme="#380C7E" />
            <Card 
            title="Zone" 
            location="Taipei" 
            description="ALPHABOX+ 真的很夯！每次把它打開，感覺就像是身臨其境一樣。它陪我度過了很多寂寞的時光，讓我在家裡也能享受到優質的休閒時光。"
            robot="ALPHABOX+ Dianne" />                                    
          </div>
          <ScrollBanner />          
          <p className="hidden md:block text-white">若您有任何疑問或建議，歡迎隨時與我們聯絡，我們將竭誠為您解答。</p>
        </div>
      </div>
      <div className="pt-5 pb-20 md:py-36 px-3 bg-primary-400">
        <div className="container">
          <div className="-mx-3 flex flex-wrap gap-6 md:gap-0">
            <div className="w-full md:w-5/12 px-3 text-white">
              <SectionTitle title="聯絡我們" />
              <div className="mt-5 mb-9 md:mb-12  flex items-center space-x-2">
                <span className="material-icons text-base">circle</span>
                <div className="w-[124px] border-[6px] rounded-2xl"></div>
              </div>
              <p>讓科技成為您的最佳夥伴<br/>立即體驗神奇功能並享限時優惠！</p>            
            </div>
            <div className="w-full md:w-7/12 px-3">
              <p className="material-symbols-outlined text-[80px] w-full mb-4 text-white">emergency</p>
              <form action="" className="space-y-4">
                <div className="py-2 px-4 flex bg-white space-x-2 text-[18px]">
                  <label htmlFor="email" className="text-[20px] font-bold">EMAIL</label>
                  <input name="email" id="email" className="w-full px-1 outline-0" type="email" />
                </div>
                <div className="py-2 px-4 flex flex-col bg-white">
                  <label htmlFor="comments" className="text-[20px] font-bold">COMMENTS</label>
                  <textarea name="comments" id="comments" rows={4} className="outline-0" style={{resize: 'none'}}></textarea>
                </div>
                <div className="ml-auto md:w-1/2">
                  <Button innerText="送出" />
                </div>         
              </form>
            </div>
          </div>
        </div>
      </div>
      <CardGroup />
    </>
  )
}

export default Home;