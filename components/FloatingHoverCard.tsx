import { GoPaperclip } from "react-icons/go";
import { BsFolder2 } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { LuUserRoundSearch } from "react-icons/lu";

const FloatingHoverCard = () => {
  return (
    <div className="w-full h-full flex mt-34 justify-center">
      <div className="w-2/5 h-24 border border-neutral-300 shadow rounded-xl p-4 flex flex-col justify-between">
        <p className="text-sm text-neutral-500">Ask anything...</p>

        <div className="flex text-sm items-center">
          <GoPaperclip className="cursor-pointer mr-4" size={18} />
          <div className="flex bg-neutral-100 rounded-sm px-2 py-1 cursor-pointer items-center mr-2">
            <BsFolder2
              className="cursor-pointer mr-2 text-neutral-800"
              size={18}
            />
            <p className="text-neutral-800">workspace</p>
            <IoIosArrowDown
              className="cursor-pointer ml-2 text-neutral-400"
              size={12}
            />
          </div>

          <div className="flex bg-neutral-100 rounded-sm px-2 py-1 cursor-pointer items-center mr-2">
            <IoSettingsOutline
              className="cursor-pointer mr-2 text-neutral-800"
              size={18}
            />
            <p className="text-neutral-800">settings</p>
            <IoIosArrowDown
              className="cursor-pointer ml-2 text-neutral-400"
              size={12}
            />
          </div>

          <div className="flex bg-neutral-100 rounded-sm px-2 py-1 cursor-pointer items-center">
            <LuUserRoundSearch
              className="cursor-pointer mr-2 text-neutral-800"
              size={18}
            />
            <p className="text-neutral-800">account</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatingHoverCard;
