const HeaderBanner = () => {
  return (
        <div className="w-full px-3 md:px-20 flex flex-col md:flex-row justify-between items-center md:items-stretch gap-4 md:gap-8 absolute top-[430px] md:top-[308px]">
          <div className="block md:hidden mb-4 text-white text-center">
              <h1 className="text-xl tracking-[26px] font-serif">ALPHABOX+</h1>
              <p className="font-bold tracking-[4.8px]">擁抱未來科技，專屬您的3D立體投影陪伴機器人</p>
          </div>
          <div className="md:w-[calc((100%-96px)/4)] h-[351px] md:h-[676px] relative before:content-['Diane']
           before:text-white before:absolute before:top-4 before:right-1/2 before:translate-x-1/2 before:text-3xl before:font-serif before:font-bold">
           
            <img className="w-full h-full object-cover" src="assets/image/diane_square1.png" alt="Diane Picture" />
          </div>
          <div className="md:w-[calc((100%-32px)/2)] flex flex-col justify-between">
            <div className="text-white text-center hidden md:block">
              <h1 className="text-3xl 2xl:tracking-[60px] xl:tracking-[40px] font-serif">ALPHABOX+</h1>
              <p className="font-bold tracking-[16px]">擁抱未來科技，專屬您的3D立體投影陪伴機器人</p>
            </div>
            <div className="md:h-[580px] flex flex-col md:flex-row justify-center gap-4 md:gap-8">
              <div className="h-[351px] md:h-auto md:w-1/2 relative before:content-['Felix'] before:text-white before:absolute before:top-4 before:right-1/2 before:translate-x-1/2 before:text-3xl before:font-serif before:font-bold">
                <img className="h-full w-full object-cover" src="assets/image/felix_square1.png" alt="Felix Picture" />
              </div>
              <div className="h-[351px] md:h-auto md:w-1/2 relative before:content-['Karina'] before:text-white before:absolute before:top-4 before:right-1/2 before:translate-x-1/2 before:text-3xl before:font-serif before:font-bold">
                <img className="h-full w-full object-cover"  src="assets/image/karina_square1.png" alt="Karina Picture" />
              </div>
            </div>            
          </div>
          <div className="md:w-[calc((100%-96px)/4)] h-[351px] md:h-[676px] relative before:content-['Vito']
           before:text-white before:absolute before:top-4 before:right-1/2 before:translate-x-1/2 before:text-3xl before:font-serif before:font-bold">
            <img className="w-full h-full object-cover" src="assets/image/vito_square1.png" alt="Vito Picture" />
          </div>
        </div>
  );
}

export default HeaderBanner;