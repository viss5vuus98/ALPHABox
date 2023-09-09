import OrderedCards from "../components/News/orderedCards";

const News = () => {
    return (
      <section>
        <div className="container mx-auto px-3">
          <ol className="flex flex-wrap ">
              <OrderedCards />
          </ol>
        </div>
      </section>
    )
}

export default News;