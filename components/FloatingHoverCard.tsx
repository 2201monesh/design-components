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

        <div className="flex text-sm items-center relative">
          <GoPaperclip className="cursor-pointer mr-4" size={18} />

          {/* Workspace */}
          <div
            className="flex bg-neutral-100 rounded-sm px-2 py-1 cursor-pointer items-center mr-2
                          transition-all duration-200
                          hover:ring-2 hover:ring-blue-600 hover:ring-offset-1 hover:ring-offset-white"
          >
            <BsFolder2 className="mr-2 text-neutral-800" size={18} />
            <p className="text-neutral-800">workspace</p>
            <IoIosArrowDown className="ml-2 text-neutral-400" size={12} />
          </div>

          {/* Settings (WITH HOVER CARD) */}
          <div className="relative group mr-2">
            <div
              className="flex bg-neutral-100 rounded-sm px-2 py-1 cursor-pointer items-center
                         transition-all duration-200
                         hover:ring-2 hover:ring-blue-600 hover:ring-offset-1 hover:ring-offset-white"
            >
              <IoSettingsOutline className="mr-2 text-neutral-800" size={18} />
              <p className="text-neutral-800">settings</p>
              <IoIosArrowDown className="ml-2 text-neutral-400" size={12} />
            </div>

            {/* Hover Card */}
            <div
              className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64
                         rounded-xl bg-white shadow-xl border border-neutral-200
                         opacity-0 translate-y-2 pointer-events-none
                         transition-all duration-200 ease-out
                         group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto"
            >
              <div className="p-4">
                <p className="text-sm font-medium text-neutral-900">
                  Integrations
                </p>
                <p className="text-xs text-neutral-500 mt-1">
                  Manage all your tasks seamlessly in one centralized location
                </p>

                <div className="flex justify-between items-center mt-4">
                  <button className="px-3 py-1.5 text-xs rounded-md bg-blue-600 text-white hover:bg-blue-700">
                    Next
                  </button>
                  <button className="text-xs text-neutral-400 hover:text-neutral-600">
                    Skip
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Account */}
          <div
            className="flex bg-neutral-100 rounded-sm px-2.5 py-1 cursor-pointer items-center
                          transition-all duration-200
                          hover:ring-2 hover:ring-blue-600 hover:ring-offset-1 hover:ring-offset-white"
          >
            <LuUserRoundSearch className="mr-2 text-neutral-800" size={17} />
            <p className="text-neutral-800">account</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatingHoverCard;
