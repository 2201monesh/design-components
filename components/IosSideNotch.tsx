import { IoWifi } from "react-icons/io5";
import { IoSearchSharp } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { IoIosBatteryDead } from "react-icons/io";
import { HiDotsHorizontal } from "react-icons/hi";
const IosSideNotch = () => {
  return (
    <div
      style={{ fontFamily: "var(--font-geist-sans)" }}
      className="w-130 h-90 border border-neutral-300 flex items-end bg-[#e9e9e9]"
    >
      <div className="w-115 h-75 border border-neutral-300 rounded-tr-3xl bg-black overflow-y-hidden">
        <div className="w-full h-10 flex items-end justify-end pr-6 text-white pb-2">
          <div className="flex items-center justify-center">
            {/* <div className="border border-white w-5 h-5 rounded-full mr-3 flex items-center justify-center"> <div className="rounded-full w-4 h-4"> <img className="bg-cover rounded-full w-4 h-4" src="https://plus.unsplash.com/premium_photo-1723485715915-1147c001300a?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /> </div> </div> */}{" "}
            <div className="relative w-6 h-6 rounded-full flex items-center justify-center mr-3">
              <div className="absolute bottom-0 left-0 w-full h-1/2 rounded-b-full border-b-2 border-sky-400/60 shadow-[0_2px_8px_rgba(56,189,248,0.45)] pointer-events-none" />{" "}
              <div className="w-4 h-4 mr-[0.2px] rounded-full overflow-hidden flex items-center justify-center">
                <img
                  src="https://plus.unsplash.com/premium_photo-1723485715915-1147c001300a"
                  alt=""
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
            <IoWifi className="mr-3" /> <IoSearchSharp className="mr-3" />
            <CgProfile className="mr-3" /> {/* <IoIosBatteryDead /> */}
            <p className="text-white text-xs">
              Tue Jan <span className="mr-1">7</span> 9:41 AM
            </p>
          </div>
        </div>
        <div className="h-full w-111 bg-blue-300">
          <div className="w-full h-14 flex bg-black">
            <div className="h-full w-57 bg-black">
              <div className="w-full h-full bg-blue-300 rounded-tr-2xl"></div>
            </div>
            <div className="h-full w-65 bg-blue-300">
              <div className="h-full w-full bg-black rounded-b-2xl flex items-start text-white px-3">
                <div className="w-7 h-7 border border-gray-600 flex items-center justify-center rounded-md mt-2 bg-[#113039] mr-1.5">
                  {" "}
                  <img
                    src="https://images.icon-icons.com/2642/PNG/512/google_mail_gmail_logo_icon_159346.png"
                    alt="img"
                    width={22}
                  />{" "}
                </div>
                {/* <div className="relative w-7 h-7 rounded-md flex items-center justify-center mr-1.5 mt-2 bg-gradient-to-b from-[#163c47] to-[#0d2430] border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.15),0_6px_20px_rgba(0,0,0,0.5)] overflow-hidden">
                  <div className="absolute -inset-2 bg-[radial-gradient(circle_at_30%_30%,rgba(255,80,80,0.35),transparent_40%),radial-gradient(circle_at_70%_30%,rgba(255,220,100,0.35),transparent_40%), radial-gradient(circle_at_50%_80%,rgba(80,255,160,0.35),transparent_45%)] blur-xl" />
                  <div className="absolute inset-0 rounded-md bg-gradient-to-b from-white/15 to-transparent" />
                  <img
                    src="https://images.icon-icons.com/2642/PNG/512/google_mail_gmail_logo_icon_159346.png"
                    alt="Gmail"
                    className="relative z-10 w-[22px]"
                  />
                </div> */}
                <div className="mt-2 w-25 mr-3.5">
                  <div className="flex items-center justify-between">
                    <p className="text-[10px]">Recall</p>
                    <HiDotsHorizontal size={12} />
                  </div>
                  <p className="text-[8px] text-gray-400 leading-relaxed tracking-wide max-w-[140px]">
                    Meeting with John(Last discussed Project X)
                  </p>
                </div>
                <div className="mt-1">
                  {/* <button className="cursor-pointer text-[8px] w-14 text-white px-1.5 rounded-[3px] py-0.5 bg-[#1d1d1d] border border-gray-600"> Calendar </button> */}
                  <button className="cursor-pointer text-[8px] w-18 h-6 text-white px-1.5 py-0.5 rounded-md bg-gradient-to-b from-[#2a2a2a] via-[#1c1c1c] to-[#0f0f0f] hover:brightness-110 active:translate-y-[1px] transition-all">
                    Open Calendar
                  </button>
                </div>
              </div>
            </div>
            <div className="h-full w-4 bg-black">
              <div className="h-full w-full bg-blue-300 rounded-tl-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default IosSideNotch;
