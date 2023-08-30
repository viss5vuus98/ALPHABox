import line_end_arrow_notch from '/assets/image/icons/line_end_arrow_notch.svg';

interface CardXlProps {
  serialNumber: string;
  name: string;
  type: string;
  description: string;
  image: string;
}

const Card_xl = ({serialNumber, name, type, description, image}: CardXlProps) => {
  return (
    <div className="w-1/2 md:w-1/4 bg-cover bg-center md:bg-top" style={{ backgroundImage: `url(assets/image/${image})` }}>
      <div className="px-3 md:px-10 py-6 text-white md:bg-black md:border-x hover:md:opacity-50">
        <p className="my-20 text-center text-9xl xl:text-[400px] font-light font-[SairaExtraCondensed]">{serialNumber}</p>
        <p className="mb-[18px] text-center text-2xl md:text-3xl font-serif">{name}</p>
        <div className='flex flex-col xl:flex-row md:justify-between'>
          <div className='mb-3'>
            <p className="font-bold">{type}</p>
            <p className="break-all">{description}</p>
          </div>
          <img className='w-full w-[150px]' src={line_end_arrow_notch} alt="arrow" />
        </div>
      </div>
    </div>
  );
}

const CardGroup = () => {
  return (
    <div className="flex flex-wrap">
      <Card_xl serialNumber='1' name='Diane' type='知識型' description='學術領導/知識分享/智能問答' image='diane_vertical.png'/>
      <Card_xl serialNumber='2' name='felix' type='娛樂型' description='音樂播放/語音互動/遊戲陪伴' image='felix_vertical.png'/>
      <Card_xl serialNumber='3' name='karina' type='生活型' description='健康提醒/日程安排/智能家居' image='karina_vertical.png'/>
      <Card_xl serialNumber='4' name='vito' type='情感型' description='情感識別/心情分析/心靈支持' image='vito_vertical.png'/>            
    </div>
  );
}

export default CardGroup;