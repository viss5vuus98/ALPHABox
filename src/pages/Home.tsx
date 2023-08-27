
const Home = () => {
  return (
    <>
      <div className="bg-gradient-to-b from-primary to-primary-100 pt-14 h-[880px]">
        <div className="container px-3">
          <div className="flex flex-col md:flex-row-reverse md:justify-between  text-white">
            <div className="mb-8 md:mb-0 border-t pt-2 md:pt-0 flex flex-col justify-between">
              <h2 className="font-bold tracking-[1.6px]">ALPHABOX+ STUDIO</h2>
              <h2 className="text-[#AD93CF] hidden md:block">Copyright © 2023 Hexschool.</h2>
            </div>
            <div className="w-[196px] h-[196px] object-cover mx-auto md:mx-0">
              <img className="w-full h-full" src="src/assets/image/circle.png" alt="circle" />
            </div>
            <div className="border-b items-end hidden md:flex">
              <p className="mt-auto">最新消息！新版本 v15.4 釋出，搶先體驗！</p>
            </div>
          </div>
        </div>
        <div className="p-20 flex justify-between gap-8">
          <div className="hidden"></div>
          <div className="w-[calc((100%-96px)/4)] h-[676px]">
            <img className="w-full h-full object-cover" src="src/assets/image/diane_square1.png" alt="Diane Picture" />
          </div>
          <div className="w-[calc((100%-96px)/2)] flex flex-col justify-between">
            <div className="text-white text-center hidden md:block">
              <h1 className="text-3xl tracking-[80px] font-serif">ALPHABOX+</h1>
              <p className="font-bold tracking-[16px]">擁抱未來科技，專屬您的3D立體投影陪伴機器人</p>
            </div>
            <div className="h-[580px] flex justify-center space-x-8">
              <img className="w-1/2 h-full object-cover" src="src/assets/image/felix_square1.png" alt="Felix Picture" />
              <img className="w-1/2 h-full object-cover"  src="src/assets/image/karina_square1.png" alt="Karina Picture" />
            </div>            
          </div>
          <div className="w-[calc((100%-96px)/4)] h-[676px]">
            <img className="w-full h-full object-cover" src="src/assets/image/vito_square1.png" alt="Vito Picture" />
          </div>
        </div>
      </div>

    </>
  )
}

export default Home;