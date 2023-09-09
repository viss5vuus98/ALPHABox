

const OrderedCards = () => {
  return (
    <li className="w-full md:w-10/12 px-3 flex">
      <div className="flex">
        <p className="md:text-8xl font-[SairaExtraCondensed]">1</p>
        <div className="md:w-[196px] md:h-[226px] ">
          <img src="assets/image/news/news.png" alt="News" />
        </div>
      </div>
      <div>
        <p>2023.06.30</p>
        <h4>產品升級公告</h4>
        <p>榮幸地宣布，ALPHABOX+ 已成功完成最新一代的升級！本次升級包括提升投影解析度、優化語音辨識技術，以及擴充情感識別功能。歡迎您了解本次升級帶來的更為卓越的性能！</p>
      </div>
      <span className="material-symbols-outlined">arrow_forward</span>
    </li>
  )
}

export default OrderedCards