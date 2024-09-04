
interface EventProps {
  className?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}

export default function Event({ className, onClick, style}: EventProps) {
  return (
    <div
      onClick={onClick}
      className={`rounded-xl sm:w-[23rem] text-white px-3 py-2 sm:px-5 sm:py-3 font-bold ${className}`}
      style={{
        transition: "background-color 0.3s ease-in-out", 
      }}
    >
      <h1 className="text-sm sm:text-base">EVENT 1 : iOS FUSION INTRO</h1>
      <p className="text-xs text-[#9f82f1]">9:00AM - 10:30AM</p>
      <p className="text-xs text-gray-400">ANNA AUDITORIUM</p>
    </div>
  );
}
