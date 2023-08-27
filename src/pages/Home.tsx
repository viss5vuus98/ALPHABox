import HeaderBanner from "../components/Home/ImageBanner";

const Home = () => {
  return (
    <>
      <div className="bg-gradient-to-b from-primary to-primary-100 pt-14 h-[1778px] md:h-[880px] relative">
        <div className="container px-3">
          <div className="flex flex-col md:flex-row-reverse md:justify-between  text-white">
            <div className="mb-8 md:mb-0 border-t pt-2 md:pt-0 flex flex-col justify-between">
              <h2 className="font-bold tracking-[1.6px]">ALPHABOX+ STUDIO</h2>
              <h2 className="text-[#AD93CF] hidden md:block">Copyright © 2023 Hexschool.</h2>
            </div>
            <div className="w-[196px] h-[196px] object-cover mx-auto md:mx-0">
              <img className="w-full h-full" src="assets/image/circle.png" alt="circle" />
            </div>
            <div className="border-b items-end hidden md:flex">
              <p className="mt-auto">最新消息！新版本 v15.4 釋出，搶先體驗！</p>
            </div>
          </div>
        </div>
        <HeaderBanner />
      </div>

    </>
  )
}

export default Home;