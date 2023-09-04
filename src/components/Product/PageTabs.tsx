import { Link } from "react-router-dom";

interface TabProps {
  text: string
  bg_color: string
  text_color: string
}

const PageTabs = () => {
  return (
    <div className="bg-black">
      <div className="container px-3">
        <div className="flex flex-nowrap -mx-3">
          <ul className="w-full py-4 px-3 flex flex-wrap gap-y-3 sm:flex-nowrap justify-between space-x-2">
            <Tab text="Diane" bg_color="black" text_color="white" />
            <Tab text="Felix" bg_color="black" text_color="white" />
            <Tab text="Karina" bg_color="black" text_color="white" />
            <Tab text="Vito" bg_color="black" text_color="white" />                                    
          </ul>
        </div>
      </div>
    </div>
  )
}

const Tab = ({ text, bg_color, text_color  }:TabProps) => {
  return (
    <li className={`grow`}><Link to={`/ALPHABox/${text.toLowerCase()}`} className={`block border rounded-[40px] py-1 px-4 text-center font-serif bg-${bg_color} text-${text_color} hover:bg-white hover:text-black`}>{text}</Link></li>
  )
}

export default PageTabs