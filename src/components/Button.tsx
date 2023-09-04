interface ButtonProps {
  innerText: string;
}

const Button = ({ innerText }: ButtonProps) => {
  return (
    <button className="w-full py-2 px-4 flex justify-center items-center space-x-2 bg-primary-200 text-white">
      <span className="material-symbols-outlined">point_scan</span>
      <p>{innerText}</p>
    </button>
  );
}

export default Button;