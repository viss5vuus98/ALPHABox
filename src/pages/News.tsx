import OrderedCards from "../components/News/OrderedCards.tsx";
import Pagination from "../components/News/pagination.tsx";

const News = () => {
    return (
      <section className="pt-40 pb-[120px]">
        <div className="container mx-auto px-3">
          <h2 className="mb-[60px] text-5xl text-white font-bold tracking-[40px] md:tracking-[40px] lg:tracking-[48px] text-center">最新消息</h2>   
          <ol className="mb-20 flex flex-col gap-12">
              <OrderedCards />
              <OrderedCards />
              <OrderedCards />
              <OrderedCards />                                          
          </ol>
          <div className="flex justify-center">
            <Pagination />
          </div>
        </div>
      </section>
    )
}

export default News;