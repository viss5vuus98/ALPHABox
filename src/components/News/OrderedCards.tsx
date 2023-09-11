
const OrderedCards = () => {
  return (
    <li className="w-full flex justify-center items-center text-white">
      <p className="w-1/12 px-3 md:text-8xl font-['Saira_Extra_Condensed']">1</p>      
      <div className="w-2/12 h-[226px] px-3">
        <img className="h-full max-w-full object-cover" src="assets/image/news/news.png" alt="News" />
      </div>
      <div className="w-6/12 px-3 py-10 border-b border-t shrink-0">
        <time className="mb-2 flex justify-start items-center">
           <span className="material-symbols-outlined text-2xl">emergency</span>
          2023.06.30
        </time>
        <h4 className="mb-3 text-xl tracking-[20px] font-[500]">產品升級公告</h4>
        <p className="text-[350]">榮幸地宣布，ALPHABOX+ 已成功完成最新一代的升級！本次升級包括提升投影解析度、優化語音辨識技術，以及擴充情感識別功能。歡迎您了解本次升級帶來的更為卓越的性能！</p>
      </div>
      <p className="material-symbols-outlined w-1/12 px-3 self-end">arrow_forward</p>
    </li>
  )
}

export default OrderedCards