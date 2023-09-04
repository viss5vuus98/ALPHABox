import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className=" bg-primary border-b border-white relative">
      <div className="container">
      <div className="flex py-4 justify-between items-center text-white">
        <Link to="/ALPHABox/" className="text-2xl sm:text-3xl font-serif">ALPHABOX+</Link>
        <nav className={`md:h-auto absolute top-[100%] left-[0%] z-[120] bg-gradient-to-b from-primary to-primary-100 w-[100vw] border-t transition-hcontent duration-[0.8s] overflow-hidden
        md:border-t-0 md:py-0 md:static md:flex md:max-h-[79px] md:z-0 md:m-0 justify-between items-center md:w-8/12 md:bg-none ml-auto
        ${isMenuOpen ? 'py-8' : 'py-0'}
        ${isMenuOpen ? 'h-[404px]' : 'h-0'}`}>
          <ul className="mb-5 md:mb-0 flex flex-col md:flex-row items-center md:justify-between md:space-x-10 space-y-5 md:space-y-0">
            <li><a href="#">產品</a></li>
            <li><a href="#">關於我們</a></li>
            <li><a href="#">最新消息</a></li>
            <li><a href="#">FAQ</a></li>
            <li>聯絡我們</li>
          </ul>

          <ul className="flex flex-col md:flex-row md:justify-between md:space-x-6 items-center space-y-5 md:space-y-0">
            <li><a href="#">註冊</a></li>
            <li><a href="#">登入</a></li>
            <li>
              <a href="#" className="flex items-center py-2 px-4 bg-white text-black rounded hover:bg-black hover:text-white">
              <span className="material-symbols-outlined">
              point_scan
              </span>
              <span>訂閱</span>
              </a>
            </li>
          </ul>
        </nav>
        <button className="block md:hidden" onClick={() =>setIsMenuOpen(!isMenuOpen) }><span className="material-symbols-outlined text-[44px]">menu</span></button>
      </div>
      </div>
    </header>
  )
}

export default Header;