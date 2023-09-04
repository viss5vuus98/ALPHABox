interface Button2Props {
  innerText: string;
  hoverMode: string;
  bgColor: string;
  hoverBgColor: string;
}

const Button2 = ({ innerText, hoverMode, bgColor, hoverBgColor }: Button2Props) => {
  return (
    <button className={`w-full py-2 px-4 rounded bg-white flex justify-center items-center space-x-1
    bg-${bgColor}
    hover:bg-${hoverBgColor}
    ${(hoverMode === 'light' ? 'text-black' : 'text-white')}
    ${(hoverMode === 'light' ? 'hover:text-white' : 'hover:text-black')}
    `}>
      <span className="material-symbols-outlined">point_scan</span>
      <p>{innerText}</p>
    </button>
  );
}

export default Button2;