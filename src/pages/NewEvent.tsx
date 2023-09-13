
import arrow_notch_sm from '/assets/image/icons/arrow_notch_lg.svg';

const NewsEvent = () => {
  return (
    <section className='text-white bg-gradient-radial from-[#28085C] to-black'>
      <div className="container max-w-[1295px] px-3 pt-[60px] md:pt-40 pb-[120px]">
        <h2 className='text-[40px] md:text-5xl text-center mb-10 tracking-[40px] md:tracking-[48px] font-[700] md:font-[900]'>最新消息</h2>
        <div className="-mx-3 flex flex-wrap">
          <div className="md:w-5/12 2xl:w-4/12 mb-20 md:mb-0 px-3 grow">
            <div className="flex items-center text-white mb-2 md:mb-0">
              <span className="material-symbols-outlined text-[40px]">north_west</span>
              <p>返回</p>
            </div>
            <img className='max-h-[600px] w-full object-cover block' src="/assets/image/news/news_in.png" alt="News" />            
          </div>
          <div className="md:w-6/12 xl:w-7/12 2xl:w-8/12 md:h-[640px] xl:h-auto px-3 flex flex-col md:overflow-scroll xl:overflow-auto md:border-t md:border-b xl:border-0 md:mr-3 xl:mr-0">
            <article className="border-t border-b md:border-0 xl:border-t xl:border-b sm:px-4 py-10 grow text-[12px] sm:text-[16px]">
              <time className="mb-2 flex justify-start items-center font-sans tracking-[16px]">
                <span className="material-symbols-outlined text-2xl">emergency</span>
                2023.06.30
              </time>
              <h3>產品升級公告</h3>
              <div className="space-y-3">
                <p>親愛的客戶們：</p>
                <p>我們榮幸地向您宣布，經過不懈的努力與研發，ALPHABOX+ 已成功完成最新一代的升級！這次的升級將為您帶來更高的投影解析度、更精準的語音辨識技術，以及更豐富的情感識別功能。我們致力於為您打造最佳的陪伴機器人，讓科技更貼近您的生活。</p>
                <p>此外，我們增加了情感識別功能，使得機器人能更好地理解您的情緒，並根據您的需求提供適當的陪伴與支持。無論您需要傾聽、建議還是安慰，ALPHABOX+ 都將成為您身邊的貼心夥伴。</p>
                <p>為感謝您一直以來對我們的支持，我們將在本月舉辦限時優惠活動，凡購買升級版3D立體投影陪伴機器人的客戶，均可享有九折優惠。機會難得，千萬不要錯過喔！</p>
                <p>在未來的日子裡，我們將繼續投入研發，並積極採納用戶意見，以不斷完善產品功能並提高使用體驗。同時，我們承諾會為您提供優質的售後服務，確保您在購買與使用過程中得到全面支持。</p>
                <p>再次感謝您對我們的信任與支持，讓我們攜手共創更美好的未來！若您對升級版3D立體投影陪伴機器人有任何疑問或建議，請隨時與我們的客服團隊聯繫，我們將竭誠為您解答。</p>
                <p>敬祝 興旺發達！</p>
                <p>ALPHABOX+ 團隊敬上 </p>
              </div>
            </article>
          </div>
        </div>
        <div className='md:w-6/12 xl:w-7/12 2xl:w-8/12 ml-auto mt-6'>
          <div className='flex justify-between'>
            <div className='w-1/3 sm:w-auto'>
              <img className='block mr-auto' src={arrow_notch_sm} alt="Button" />
              <p className='text-[14px] font-[500] tracking-[12px] sm:tracking-[14px]'>限時優惠活動</p>
            </div>
            <div className='w-1/3 sm:w-auto'>
              <img className='rotate-180 opacity-50 block ml-auto' src={arrow_notch_sm} alt="Button" />
              <p className='text-[14px] font-[500] tracking-[14px]'></p>
            </div>              
          </div>        
        </div>
      </div>
    </section>
  )
}

export default NewsEvent