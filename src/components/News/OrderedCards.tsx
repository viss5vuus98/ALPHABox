interface OrderedCardsProps {
  index: number;
  title: string;
  date: string;
  content: string;
  imagePath: string;
}


const OrderedCards = ({ index, title, date, content, imagePath }: OrderedCardsProps) => {
  return (
    <li className="w-full flex flex-wrap justify-center items-center text-white">
      <p className="w-1/12 px-3 text-8xl font-['Saira_Extra_Condensed'] shrink-0">1</p>      
      <div className="md:w-3/12 xl:w-2/12 h-[226px] mb-[18px] md:mb-0 px-3 grow xl:grow-0">
        <img className="h-full w-full object-cover" src={`assets/image/news/${imagePath}`} alt="News" />
      </div>
      <div className="w-full md:w-5/12 xl:w-6/12 mb-10 md:mb-0 px-4 py-6 md:py-5 xl:py-10 border-b border-t shrink-0">
        <time className="mb-2 flex justify-start items-center font-sans tracking-[16px]">
           <span className="material-symbols-outlined text-2xl">emergency</span>
          { date }
        </time>
        <h4 className="mb-3 text-xl tracking-[20px] font-[500]">{ title }</h4>
        <p className="text-[350]">{ content }</p>
      </div>
      <p className="material-symbols-outlined md:w-1/12 md:px-3 ml-auto md:ml-0 md:self-end text-[40px]">arrow_forward</p>
    </li>
  )
}

export default OrderedCards