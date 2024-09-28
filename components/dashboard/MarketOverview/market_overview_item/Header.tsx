interface Props {
  title: string;
}

const Header: React.FC<Props> = ({title}) => {
  return (
    <div className="flex items-center justify-between text-[12px] font-medium leading-[16px] tracking-[0.24px]">
      <h1>{title}</h1>

      <button className="flex hover:brightness-110 active:scale-95">
        {/* text */}
        <span className="text-[#A1A1A1]">More</span>

        {/* icon */}
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.99969 10.0256L4.23047 6.25638L4.93302 5.55383L7.99969 8.6205L11.0664 5.55383L11.7689 6.25638L7.99969 10.0256Z" fill="#A1A1A1"/>
        </svg>
      </button>
    </div>
  );
}

export default Header;