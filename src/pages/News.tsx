import OrderedCards from "../components/News/OrderedCards.tsx";
import Pagination from "../components/News/Pagination.tsx";

const News = () => {
    return (
      <section className="pt-40 pb-[120px] bg-gradient-radial from-[#28085C] to-black">
        <div className="container px-3">
          <h2 className="mb-[60px] text-[40px] md:text-5xl text-white font-bold tracking-[40px] md:tracking-[40px] lg:tracking-[48px] text-center">最新消息</h2>   
          <ol className="mx-auto mb-20 flex flex-col gap-[42px] md:gap-12">
              <OrderedCards index={1} title="產品升級公告" date="2023.06.30" content="榮幸地宣布，ALPHABOX+ 已成功完成最新一代的升級！本次升級包括提升投影解析度、優化語音辨識技術，以及擴充情感識別功能。歡迎您了解本次升級帶來的更為卓越的性能！" imagePath="news.png"/>                                     
          </ol>
          <div className="flex justify-center">
            <Pagination />
          </div>
        </div>
      </section>
    )
}

export default News;