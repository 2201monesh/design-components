import { FaSpotify } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";
import { IoWifi } from "react-icons/io5";
import { FaBatteryFull } from "react-icons/fa6";
import { FaCloud } from "react-icons/fa";

const NotchBarAnimation = () => {
  return (
    <div
      style={{ fontFamily: "var(--font-geist-sans)" }}
      className="w-150 h-100 border border-neutral-300 rounded-lg"
    >
      <div className="w-full h-[15%] bg-black mt-18 flex items-center justify-center">
        <FaSpotify
          className="text-neutral-200 hover:text-white mr-6"
          size={19}
        />
        <FaClock className="text-neutral-200 hover:text-white mr-6" size={18} />
        <IoWifi className="text-neutral-200 hover:text-white mr-6" size={22} />
        <FaBatteryFull
          className="text-neutral-200 hover:text-white mr-6"
          size={22}
        />
        <span className="flex items-center justify-center text-neutral-200 hover:text-white">
          <FaCloud className="mr-1.5" size={20} />
          <p className="cursor-default text-xs">80°F</p>
        </span>
      </div>
    </div>
  );
};

export default NotchBarAnimation;
