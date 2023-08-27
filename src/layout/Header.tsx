
const Header = () => {
  return (
    <header className=" bg-primary border-b border-white">
      <div className="container">
      <div className="flex py-4 justify-between text-white">
        <a className="text-3xl font-serif">ALPHABOX+</a>
        <nav className="hidden md:flex justify-between items-center w-8/12 ml-auto">
          <ul className="flex justify-between space-x-10">
            <li><a href="#">產品</a></li>
            <li><a href="#">關於我們</a></li>
            <li><a href="#">最新消息</a></li>
            <li><a href="#">FAQ</a></li>
            <li>聯絡我們</li>
          </ul>

          <ul className="flex justify-between space-x-6 items-center">
            <li><a href="#">註冊</a></li>
            <li><a href="#">登入</a></li>
            <li>
              <a href="#" className="flex items-center py-2 px-4 bg-white text-black rounded">
              <span className="material-symbols-outlined">
              point_scan
              </span>
              <span>訂閱</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      </div>
    </header>
  )
}

export default Header;