
interface CardProps {
  title: string;
  location: string;
  description: string;
  robot: string;
  theme?: string;
}

const Card = ({ title, location, description, robot, theme }: CardProps) => {

  return (
    <div className="w-full md:w-4/12 px-3">
      <div className="p-6 md:p-10 flex flex-col h-[412px]" style={{backgroundColor: theme ? theme : '#FFF', color: theme ? '#FFF' : '#000'}}>
        <div className="mb-8 flex space-x-2 items-center">
          <p className="font-bold">{title}</p>
          <span className="material-icons text-[8px]">circle</span>            
          <p className="font-bold">{location}</p>
        </div>
        <p className="grow font-bold">{description}</p>
        <div className="space-x-4 flex items-center">
          <span className="material-icons text-base">circle</span>        
          <span className="material-icons text-base">circle</span>
          <span className="font-bold">{robot}</span>                
        </div>
      </div>
    </div>    
  )
}

export default Card;