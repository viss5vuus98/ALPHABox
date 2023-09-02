interface TextBoxProps {
  title: string;
  content: string;
}

const TextBox = ({title, content}: TextBoxProps) => {
  return (
    <div className="w-full sm:w-4/12 px-3">
      <h5 className="mb-4 border-b-2 font-bold">{title}</h5>
      <p>{content}</p>
    </div>
  )
}

export default TextBox;