import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { RxCounterClockwiseClock } from "react-icons/rx";
import { PiArrowsCounterClockwise } from "react-icons/pi";
import { FaSlack } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import { IoMdArrowUp } from "react-icons/io";

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
          <span className="mr-1.5">Slack</span>
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
      <div className="w-full h-[90%] rounded-2xl bg-white p-4">
        <div className="w-full flex items-center justify-end relative">
          <div className="w-[58%] h-18 rounded-2xl bg-neutral-100 px-4 py-3 text-sm flex flex-col justify-center">
            <p>Send a message to the #general channel with an AI</p>
            <p>project update summary as a structured bullet list.</p>
          </div>
          <div className="w-4 h-4 bg-neutral-100 rounded-full absolute top-15 -right-1"></div>
        </div>
        <div className="w-full flex items-center justify-start relative mt-4">
          <div className="w-4 h-4 bg-neutral-100 rounded-full absolute top-37 -left-1"></div>
          <div className="bg-neutral-100 w-[70%] h-40 rounded-2xl px-4 py-3">
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center">
              <img src="/slack.png" alt="img" className="w-6 h-6" />
            </div>
            <p className="mt-3 text-sm">Authentication required</p>
            <p className="text-neutral-500 text-sm mt-1">
              Add your Slack credentials to connect your workspace
            </p>
            {/* <p className="text-neutral-500 text-sm">and enable message delivery to the selected channel.</p> */}
            <button className="px-3 py-1 bg-white rounded-lg text-sm border border-neutral-300 mt-2 cursor-pointer">
              Add Credential
            </button>
          </div>
        </div>
        <div className="w-full h-12 rounded-xl border border-neutral-200 mt-4 shadow-sm flex items-center justify-between p-2">
          <div className="flex items-center justify-center">
            <FiPlus
              className="text-neutral-400 mr-2 cursor-pointer"
              size={22}
            />
            <p className="text-neutral-400">Describe what should happen...</p>
          </div>
          <div className="w-8 h-8 rounded-lg bg-neutral-100 my-2 flex items-center justify-center cursor-pointer">
            <IoMdArrowUp className="text-neutral-400" size={22} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlackCard;
