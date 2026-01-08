"use client";
import { HiLockClosed } from "react-icons/hi";
import { BsGlobeEuropeAfrica } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { RiFileListFill } from "react-icons/ri";
import { CiLock } from "react-icons/ci";
import { GoPersonAdd } from "react-icons/go";
import { MdDeleteOutline } from "react-icons/md";
import { LuCopy } from "react-icons/lu";
import { FaRegCheckCircle } from "react-icons/fa";
import { IoEarthOutline } from "react-icons/io5";

const LinkSharingCard = () => {
  return (
    <div
      style={{ fontFamily: "var(--font-geist-sans)" }}
      className="w-96 h-122 rounded-xl shadow border border-neutral-200"
    >
      <div className="flex items-center justify-between border-b border-neutral-300 px-3.5 text-xs">
        <div className="flex items-center justify-center">
          <div className="mr-4 flex items-center justify-center border-b py-2">
            <span className="mr-2">
              <HiLockClosed size={14} />
            </span>
            <span>Share Link</span>
          </div>
          <div className="flex items-center justify-center">
            <span className="mr-2">
              <IoEarthOutline size={14} />
            </span>
            <span>Publish Online</span>
          </div>
        </div>
        <div className="cursor-pointer">
          <RxCross2 />
        </div>
      </div>
      <div className="p-3.5">
        <span>Share this document:</span>
      </div>
      <div className="flex items-center justify-center">
        <div className="w-[92%] h-14 border border-neutral-300 rounded-lg flex items-center justify-between px-2.5 py-2.5">
          <div className="flex items-center justify-center">
            <div className="w-8 h-8 rounded bg-[url('https://images.unsplash.com/photo-1710184713246-91865a6123dc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMxfHxncmFkaWVudCUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D')] bg-cover flex items-center justify-center mr-3">
              <RiFileListFill className="text-white" />
            </div>
            <div className="flex flex-col justify-between h-full">
              <p className="text-xs">2027 Funding Rounds Update: Indicators</p>
              <p className="text-[10px] text-neutral-500">
                Text documents Created on 4:20 PM, September 9
              </p>
            </div>
          </div>

          <div className="text-black cursor-pointer">
            <CiLock />
          </div>
        </div>
      </div>
      <div className="p-3.5 flex flex-col">
        <span className="text-sm">Who has access:</span>
        <span className="text-neutral-500 text-[10px]">
          Choose how users can access your content online.{" "}
          <span className="text-black cursor-pointer">Learn more.</span>
        </span>
      </div>
      <div className="flex items-center justify-center">
        <div className="w-[92%] h-14 border border-neutral-300 rounded-lg flex items-center justify-between px-2.5 py-2.5">
          <div className="flex items-center justify-center">
            <div className="w-7 h-7 rounded-lg bg-neutral-100 bg-cover flex items-center justify-center cursor-pointer mr-3">
              <GoPersonAdd size={14} />
            </div>
            <div className="flex flex-col justify-center h-full">
              <p className="text-xs">Registered users with private link</p>
            </div>
          </div>

          <div className="text-black cursor-pointer">
            <p className="text-xs border border-neutral-300 rounded-md px-2.5 py-0.5">
              view
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center mt-4">
        <div className="w-[92%] flex">
          {" "}
          <input
            type="text"
            className="border border-neutral-300 rounded-md w-full mr-2 text-xs px-3 py-1"
            placeholder="Enter name or email to invite"
          />
          <div className="flex items-center justify-center border rounded-md text-xs px-2 bg-[#7b3aec] text-white cursor-pointer">
            <span className="mr-1.5">{/* <FaPlus /> */}+</span>
            <button className="text-[11px] cursor-pointer">Invite</button>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center mt-3">
        <p className="w-[92%] text-[10px] text-neutral-500">
          2 people has access:
        </p>
      </div>
      <div className="flex items-center justify-center mt-4">
        <div className="w-[92%] flex items-center justify-between">
          <div className="flex items-center justify-center">
            <div className="w-8 h-8 mr-2.5 rounded-full bg-neutral-400 bg-[url('https://plus.unsplash.com/premium_photo-1672201106204-58e9af7a2888?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover"></div>
            <div>
              <p className="text-xs">Sophia Reynolds</p>
              <p className="text-[10px] text-neutral-500">sophia@starline.ai</p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <button className="text-xs border border-neutral-300 rounded-md px-2.5 py-0.5 mr-2 cursor-pointer">
              Editor
            </button>
            <button className="text-xs border border-neutral-300 rounded-md px-2.5 py-0.5 cursor-pointer">
              <MdDeleteOutline size={15} />
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center mt-4">
        <div className="w-[92%] flex items-center justify-between">
          <div className="flex items-center justify-center">
            <div className="w-8 h-8 mr-2.5 rounded-full bg-neutral-400 bg-[url('https://images.unsplash.com/photo-1635776063328-153b13e3c245?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover"></div>
            <div>
              <p className="text-xs">Halle Elizabeth Grant</p>
              <p className="text-[10px] text-neutral-500">halle@starline.ai</p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <button className="text-xs border border-neutral-300 rounded-md px-2.5 py-0.5 mr-2 cursor-pointer">
              Editor
            </button>
            <button className="text-xs border border-neutral-300 rounded-md px-2.5 py-0.5 cursor-pointer">
              <MdDeleteOutline size={15} />
            </button>
          </div>
        </div>
      </div>
      <div className="border-t px-3.5 h-11.5 mt-4 border-neutral-300 flex items-center justify-between">
        <div className="flex items-center justify-center border border-neutral-300 px-2 py-0.5 rounded-md cursor-pointer">
          <span>
            <IoEarthOutline size={12} className="mr-1.5" />
          </span>
          <span className="text-xs">Make Public</span>
        </div>
        <div className="flex items-center justify-center">
          <div className="flex items-center justify-center border border-neutral-300 px-2 py-0.5 rounded-md cursor-pointer mr-2">
            <span>
              <LuCopy size={12} className="mr-1.5" />
            </span>
            <span className="text-xs">Copy Link</span>
          </div>
          <div className="flex items-center justify-center border border-neutral-300 px-2 py-0.5 rounded-md cursor-pointer">
            <span>
              <FaRegCheckCircle size={12} className="mr-1.5" />
            </span>
            <span className="text-xs">Done</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkSharingCard;
