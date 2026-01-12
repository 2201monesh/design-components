import { IoWifi } from "react-icons/io5";
import { IoSearchSharp } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { IoIosBatteryDead } from "react-icons/io";

const IosSideNotch = () => {
  return (
    <div
      style={{ fontFamily: "var(--font-geist-sans)" }}
      className="w-130 h-90 border border-neutral-300 flex items-end bg-[#e9e9e9]"
    >
      <div className="w-115 h-75 border border-neutral-300 rounded-tr-3xl bg-black overflow-y-hidden">
        <div className="w-full h-10 flex items-end justify-end pr-10 text-white pb-1">
          <div className="flex items-center justify-center">
            <IoWifi className="mr-3" />
            <IoSearchSharp className="mr-3" />
            <CgProfile className="mr-3" />
            {/* <IoIosBatteryDead /> */}
            <p className="text-white text-xs">Mon Jun 5 9:41 AM</p>
          </div>
        </div>
        <div className="h-full w-111 bg-blue-300">
          <div className="w-full h-14 flex bg-black">
            <div className="h-full w-60 bg-black">
              <div className="w-full h-full bg-blue-300 rounded-tr-2xl"></div>
            </div>
            <div className="h-full w-58 bg-blue-300">
              <div className="h-full w-full bg-black rounded-b-2xl"></div>
            </div>
            <div className="h-full w-5 bg-black">
              <div className="h-full w-full bg-blue-300 rounded-tl-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IosSideNotch;
