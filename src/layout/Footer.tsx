const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="container">
        <div className="py-12 flex justify-between items-start md:items-center flex-col md:flex-row space-y-2 md:space-y-0">
          <div>
            <h2 className="text-3xl font-serif">ALPHABOX+</h2>
            <p className="font-bold tracking-widest hidden md:block">Copyright © 2023 Hexschool.</p>
          </div>
          <div>
           <span className="material-symbols-outlined text-[80px]">
            emergency
            </span>
          </div>
          <ul className="flex space-y-2 md:space-y-0 md:space-x-6 font-bold flex-col md:flex-row">
            <li>關於我們</li>
            <li>產品資訊</li>
            <li>常見問題</li>
            <li>隱私政策</li>
          </ul>
          <p className="block md:hidden font-bold tracking-[1.6px]">Copyright © 2023 Hexschool.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;