import BannerContent from "../components/BannerContent";
import SectionTitle from "../components/SectionTitle";
import Button2 from "../components/Button2";

const About = () => {
  return (
    <>
      <BannerContent className="pb-20 md:pb-40 bg-gradient-radial from-[#300871] to-black">
        <div className="container px-3 mb-6 md:mb-8">
          <SectionTitle title="關於我們" />
          <div className="mt-6 md:mt-8 flex flex-wrap justify-between items-start">
            <p className="w-full md:w-6/12 mb-8 md:mb-0 font-[500]">創立於2021年，我們的使命是將科技與人性化設計相結合，為您打造最佳的3D立體投影陪伴機器人。憑藉創新的技術、卓越的研發團隊以及對品質的追求，我們致力於為全球用戶提供最先進且易用的陪伴機器人。</p>
            <p className="w-full md:w-4/12 flex flex-col items-center md:items-end font-[350] text-[14px] space-y-6 md:space-y-0">
              <span className="block">我們擁抱變革，追求技術創新，以提供更卓越的產品給全球用戶。</span>
              <span className="block">我們始終以用戶需求為核心，致力於提供最滿意的產品與服務。</span>
              <span className="block">我們堅持高品質標準，確保每一款產品都經過嚴格的測試與品質把控。</span>
              <span className="block">我們重視團隊協作，鼓勵創意交流，共同為實現願景而努力。</span>
            </p>
          </div>
        </div>
        <div className="h-[280px] w-full">
          <img className="hidden md:block h-full w-full object-cover" src="assets/image/about_us.png" alt="About Us" />
          <img className="block md:hidden h-full w-full object-cover" src="assets/image/mobile/about_us_mobile.png" alt="About Us" />
        </div>
        <div className="container">
          <div className="w-full md:w-8/12 md:mx-auto flex flex-col md:flex-row md:justify-center items-center gap-2 md:gap-6">
            <span className="material-symbols-outlined text-[80px]">
            emergency
            </span>
            <p className="text-start">我們相信科技的力量能夠改變人類生活。通過不斷創新與優化，我們期待為您打造一款具有高度智能、豐富功能且呈現真實感的3D立體投影陪伴機器人，讓科技成為您生活中真誠的夥伴。 </p>          
          </div>
        </div>
      </BannerContent>
      <div className="py-6 md:py-10 px-3 md:px-20 bg-white flex justify-center space-x-10">
        <div className="w-full md:w-[560px] h-[315px]">
          <img className="w-full h-full object-cover" src="assets/image/hand.png" alt="Hand" />
        </div>        
        <div className="hidden md:block w-[560px] h-[315px]">
          <img className="w-full h-full object-cover" src="assets/image/screen.png" alt="Screen" />
        </div>        
        <div className="hidden md:block w-[560px] h-[315px]">
          <img className="w-full h-full object-cover" src="assets/image/box.png" alt="Box" />
        </div>
      </div>
      <h2 className="pb-6 md:pb-20 bg-white text-center text-2xl md:text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl tracking-[24px] md:tracking-[48px] lg:tracking-[64px] xl:tracking-[72px] 2xl:tracking-[96px] font-[900]">ALPHABOX+</h2>
      <div className="bg-white border-b pb-6 md:pb-20 px-3 md:px-20 flex flex-col items-center md:flex-row md:justify-between gap-4">
        <p className="md:w-5/12  font-[500]">我們提供多款3D立體投影陪伴機器人，涵蓋知識型、娛樂型、生活型和情感型等不同類別，以滿足您的各種需求。每款產品都經過精心設計，具備高度智能化、多功能和人性化操作等特點，讓您在日常生活中獲得更便利的陪伴體驗。</p>
        <p className="md:w-5/12  font-[500]">此外，我們還提供完善的售後服務，包括<span>產品保固</span>、<span>技術支援</span>及<span>線上客服</span>協助，確保您購買與使用過程中得到全面支持。</p>
      </div>
      <div className="pt-5 bg-white">
        <div className="h-[12px] bg-black"></div>
        <div className="container px-3 py-[60px] md:py-40">
          <div className="-mx-3 flex flex-wrap items-center">
            <div className="w-full md:w-7/12 h-[315px] px-3 mb-4 md:mb-0">
              <img className="w-full h-full object-cover" src="assets/image/meeting.png" alt="Meeting" />
            </div>
            <p className="w-full md:w-5/12 font-[500] px-3">
              展望未來，我們將繼續投入研發，引領3D立體投影陪伴機器人技術的發展。通過結合虛擬現實、擴增現實和人工智能等領域的最新技術，我們將努力為用戶帶來更多前所未有的創新體驗。              
            </p>
          </div>
        </div>
      </div>
      <div className="bg-black py-9 md:py-6">
        <div className="container px-3">
          <div className="-mx-3 flex flex-wrap justify-center">
            <p className="w-full md:w-8/12 px-3 mb-6 md:mb-0 text-white font-[500]">我們熱忱歡迎有志之士加入我們的團隊，共同創造更美好的未來。如果您對科技充滿熱情，並擁有相關領域的專業知識，請隨時查看我們的招聘信息或與我們聯繫，讓我們攜手共進。</p>
            <div className="w-full md:w-2/12 px-3">
              {/* <button className="w-full py-2 px-4 rounded bg-white flex justify-center items-center space-x-1">
                <span className="material-symbols-outlined">point_scan</span>      
                查看職缺        
              </button> */}
              <Button2 innerText="查看職缺" hoverMode="light" bgColor="white" hoverBgColor="primary" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;