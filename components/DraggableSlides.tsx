import { PiDotsNineBold } from "react-icons/pi";

const DraggableSlides = () => {
  return (
    <div
      style={{ fontFamily: "var(--font-geist-sans)" }}
      className="w-screen h-screen flex items-center justify-center bg-[#f2f2f2]"
    >
      <div className="w-96 h-12 rounded-xl bg-white shadow flex items-center justify-between px-6 cursor-grab">
        <div className="flex items-center justify-center">
          <span className="rounded-full w-2 h-2 bg-amber-400 mr-2"></span>
          <span>Conduct QA Testing</span>
        </div>
        <span>
          <PiDotsNineBold />
        </span>
      </div>
    </div>
  );
};

export default DraggableSlides;
