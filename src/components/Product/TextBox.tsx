interface TextBoxProps {
  title: string;
  content: string;
}

const TextBox = ({title, content}: TextBoxProps) => {
  return (
    <div className="w-full sm:w-4/12 px-3 border-b-hover">
      <h5 className="mb-4 transition-all font-bold relative before:content-[''] before:w-0 before:h-0.5 before:absolute before:bottom-[-1px] before:left-0 before:bg-black before:transition-all before:duration-500 before:delay-150" >{title}</h5>
      <p>{content}</p>
    </div>
  )
}

export default TextBox;