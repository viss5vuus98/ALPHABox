interface BannerContentProps {
  children: React.ReactNode;
  className?: string;
}
const BannerContent = ({ children, className }: BannerContentProps) => {
  return (
    <div className={`pt-[60px] md:pt-40 text-white ${className}`}>
      {children}
    </div>
  )
}

export default BannerContent