import { FaSpotify } from "react-icons/fa";
import { FaClock, FaBatteryFull } from "react-icons/fa6";
import { IoWifi } from "react-icons/io5";
import { FaCloud } from "react-icons/fa";

const NotchBarAnimation = () => {
  return (
    <div className="w-150 h-100 border border-neutral-300 rounded-lg">
      <div className="w-full h-[15%] bg-black mt-18 flex items-center justify-center gap-6">
        <IconWithNotch
          icon={
            <FaSpotify
              className="text-neutral-200 hover:text-white"
              size={18}
            />
          }
          label="Spotify"
          subLabel="Now Playing"
          labelColor="#1DB954"
        />

        <IconWithNotch
          icon={
            <FaCloud className="text-neutral-200 hover:text-white" size={18} />
          }
          label="Weather"
          subLabel="80°F"
          labelColor="#c17d4c"
        />

        <IconWithNotch
          icon={
            <IoWifi className="text-neutral-200 hover:text-white" size={20} />
          }
          label="Wi-Fi"
          subLabel="Connected"
          labelColor="#4ade80"
        />

        <IconWithNotch
          icon={
            <FaBatteryFull
              className="text-neutral-200 hover:text-white"
              size={20}
            />
          }
          label="Battery"
          subLabel="82%"
          labelColor="#22c55e"
        />

        <IconWithNotch
          icon={
            <FaClock className="text-neutral-200 hover:text-white" size={18} />
          }
          label="Wed Jan 8"
          subLabel="10:42 AM"
          labelColor="#fbbf24"
        />
      </div>
    </div>
  );
};

export default NotchBarAnimation;

const IconWithNotch = ({ icon, label, subLabel, labelColor }) => {
  return (
    <div className="relative group flex items-center">
      {icon}

      <div
        className="
          absolute top-full mt-2 left-1/2 -translate-x-1/2
          min-w-[220px] h-[42px]
          bg-black rounded-b-xl
          opacity-0 scale-95
          group-hover:opacity-100 group-hover:scale-100
          transition-all duration-200 ease-out
          shadow-xl
          pointer-events-none
          flex items-center justify-center gap-2
        "
      >
        <p className="text-sm font-medium" style={{ color: labelColor }}>
          {label}
        </p>

        {subLabel && (
          <>
            <span className="text-neutral-500">|</span>
            <p className="text-sm text-neutral-300">{subLabel}</p>
          </>
        )}
      </div>
    </div>
  );
};
