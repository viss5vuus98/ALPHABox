

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

const SectionTitle = ({ title, subtitle }: SectionTitleProps) => {
  
  return (
  <div className="w-full flex">
    <h2 className="text-5xl text-white font-bold tracking-[40px] md:tracking-[40px] lg:tracking-[48px]">{title}</h2>
    <p>{subtitle}</p>
  </div>
  )
};

export default SectionTitle;