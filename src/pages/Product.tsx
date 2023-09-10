import { useParams } from 'react-router-dom';
//components
import PageTabs from '../components/Product/PageTabs';
import Carousel2 from '../components/Product/Carousel2';
import TextBox from '../components/Product/TextBox';
import line_end_arrow_notch from '/assets/image/icons/line_end_arrow_notch.svg';
import SectionTitle from '../components/SectionTitle';
import Card from '../components/Card';


const fetchDate = {
  diane: {
    productName: 'Diane',
    type: '知識型',
    description: '學術領導/知識分享/智能問答',
    imageRoot: 'diane'
  },
  felix: {
    productName: 'Felix',
    type: '娛樂型',
    description: '音樂播放/語音互動/遊戲陪伴',
    imageRoot: 'felix'
  },
  karina: {
    productName: 'Karina',
    type: '生活型',
    description: '健康提醒/日程安排/智能家居',
    imageRoot: 'karina'
  },
  vito: {
    productName: 'Vito',
    type: '情感型',
    description: '情感識別/心情分析/心靈支持',
    imageRoot: 'vito'
  }
}

const Product:React.FC = () => {
  const { name } = useParams();
  const { productName, type, description, imageRoot } = fetchDate[name as keyof typeof fetchDate];

  return ( <>
    <PageTabs />
    <section className='flex flex-wrap bg-black relative'>
     <Carousel2 imageRoot={imageRoot} /> 
      <div className='w-full sm:w-auto pl-3 sm:pl-10 py-4 sm:flex flex-col justify-center text-white'>
        <p className="mb-0 sm:mb-[18px] text-start text-[40px] md:text-6xl font-serif">{productName}</p>
        <div className='flex flex-col'>
          <div className='mb-4'>
            <p className="font-bold">{type}</p>
            <p className="break-all">{description}</p>
          </div>
          <img className='w-[90px] sm:w-full' src={line_end_arrow_notch} alt="arrow" />
        </div>
        <img className='sm:hidden block w-[109px] h-[109px] mx-auto mt-4' src="assets/image/circle3.png" alt="" />          
      </div>
      <img className='hidden sm:block w-[170px] xl:w-[196px] h-[170px] xl:h-[196px] absolute bottom-[60px] right-1/2 translate-x-1/2 z-20' src="assets/image/circle3.png" alt="" />
    </section>
    <section className='bg-white'>
      <div className="container px-3 pt-[60px] md:pt-[80px] pb-[80px] md:pb-[120px]">
        <div className='mb-8 md:mb-[120px] flex justify-between'>
          <div className='w-full sm:w-4/12'>
            <div className='mb-3 flex space-x-3 items-center'>
              <span className="material-symbols-outlined text-[40px]">emergency</span>
              <h4 className='text-[20px] font-[500]'>{description}</h4>              
            </div>
            <p>歡迎來到ALPHABOX+的全新世界！在這裡，我們很榮幸地向您介紹我們的最新力作 - 3D立體投影機器人 {productName}！</p>
          </div>
          <p className='hidden md:block'>ALPHABOX+</p>
        </div>
        <div className="flex flex-wrap -mx-3 gap-y-6 sm:gap-y-[104px]">
          <TextBox title='先進的3D投影技術' content={`${productName} 搭載了最新的 3D 投影技術，能夠將虛擬影像清晰地呈現在您的現實空間中，讓您感受身臨其境的體驗！`} />
          <TextBox title='人性化的互動設計' content='Felix 搭載了最新的 3D 投影技術，能夠將虛擬影像清晰地呈現在您的現實空間中，讓您感受身臨其境的體驗！' />
          <TextBox title='豐富的應用場景' content='Felix 搭載了最新的 3D 投影技術，能夠將虛擬影像清晰地呈現在您的現實空間中，讓您感受身臨其境的體驗！' />
          <TextBox title='高度自主性' content='Felix 搭載了最新的 3D 投影技術，能夠將虛擬影像清晰地呈現在您的現實空間中，讓您感受身臨其境的體驗！' />
          <TextBox title='簡單易用的操作介面' content='Felix 搭載了最新的 3D 投影技術，能夠將虛擬影像清晰地呈現在您的現實空間中，讓您感受身臨其境的體驗！' />                              
        </div>
      </div>
    </section>
    <section className='bg-gradient-radial from-[#28085C] to-black pt-[60px] pb-[80px] md:pt-[160px] md:pb-[216px]'>
      <div className="container px-3">
        <SectionTitle title="使用分享" />
        <p className='md:w-3/12 mt-4 sm:mt-3 mb-6 sm:mb-[80px] text-white'>展示其他使用者對於產品的真實體驗與評價，讓您更加放心選擇。</p>
        <div className="-mx-3 mb-0 md:mb-32 flex flex-wrap md:overflow-hidden md:flex-nowrap gap-6 md:gap-0">
            <Card 
            title="Zone" 
            location="Taipei" 
            description="自從家裡有了Felix，孩子們的學習興趣提高了不少，他們都喜歡透過Felix的3D立體投影來探索新知識，家庭氛圍變得更加和樂融融！"
            robot={`ALPHABOX+ ${productName}`}
            theme="#380C7E" />
            <Card 
            title="Lee" 
            location="Chiayi" 
            description="自從公司引入 Felix，員工的工作效率提升了很多。Felix 不僅能快速回應我們的需求，還可以協助我們做各種商業展示，真的是企業的好幫手！"
            robot={`ALPHABOX+ ${productName}`} />
            <Card 
            title="瑞" 
            location="Taipei" 
            description="Felix 讓教學變得更生動有趣，學生們在課堂上的參與度和學習效果都有顯著提升。我非常推薦Felix給所有的教育工作者！"
            robot={`ALPHABOX+ ${productName}`}
            theme="#380C7E" />                                 
          </div>      
      </div>
    </section>
  </>);
};


export default Product;