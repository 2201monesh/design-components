import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { RxCounterClockwiseClock } from "react-icons/rx";
import { PiArrowsCounterClockwise } from "react-icons/pi";
import { FaSlack } from "react-icons/fa";

const SlackCard = () => {
  return (
    <div className="w-[35%] h-96 border rounded-2xl border-neutral-300 bg-neutral-100">
      <div className="h-[10%] w-full rounded-2xl flex items-center justify-between text-sm px-4">
        <div className="flex items-center justify-center text-neutral-500">
          <IoIosArrowBack size={16} className="mr-1 cursor-pointer" />
          <span className="cursor-pointer">Back</span>
        </div>
        <div className="flex items-center justify-center ml-10">
          <span>
            <FaSlack size={20} className="mr-1" />
          </span>
          <span className="mr-1">Slack</span>
          <span className="text-neutral-500">Send Channel Message</span>
        </div>
        <div className="flex items-center justify-center text-neutral-500">
          <IoIosArrowDown size={16} className="mr-2.5 cursor-pointer" />
          <IoSettingsOutline size={16} className="mr-2.5 cursor-pointer" />
          <RxCounterClockwiseClock
            size={16}
            className="mr-2.5 cursor-pointer"
          />
          <PiArrowsCounterClockwise size={16} className="cursor-pointer" />
        </div>
      </div>
      <div className="w-full h-[90%] rounded-2xl bg-white"></div>
    </div>
  );
};

export default SlackCard;
