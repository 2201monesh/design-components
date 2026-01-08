"use client";
import { HiLockClosed } from "react-icons/hi";
import { BsGlobeEuropeAfrica } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { RiFileListFill } from "react-icons/ri";
import { CiLock } from "react-icons/ci";
import { GoPersonAdd } from "react-icons/go";
import { FaPlus } from "react-icons/fa6";

const LinkSharingCard = () => {
  return (
    <div
      style={{ fontFamily: "var(--font-geist-sans)" }}
      className="w-96 h-120 rounded-xl shadow border border-neutral-200"
    >
      <div className="flex items-center justify-between border-b border-neutral-300 px-3.5 text-xs">
        <div className="flex items-center justify-center">
          <div className="mr-4 flex items-center justify-center border-b py-2">
            <span className="mr-2">
              <HiLockClosed />
            </span>
            <span>Share Link</span>
          </div>
          <div className="flex items-center justify-center">
            <span className="mr-2">
              <BsGlobeEuropeAfrica />
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
          <div>
            <div className="w-8 h-8 rounded bg-[url('https://images.unsplash.com/photo-1710184713246-91865a6123dc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMxfHxncmFkaWVudCUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D')] bg-cover flex items-center justify-center">
              <RiFileListFill className="text-white" />
            </div>
          </div>
          <div className="flex flex-col justify-between h-full">
            <p className="text-xs">2027 Funding Rounds Update: Indicators</p>
            <p className="text-[10px] text-neutral-500">
              Text documents Created on 4:20 PM, September 9
            </p>
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
          <div>
            <div className="w-7 h-7 rounded-lg bg-neutral-100 bg-cover flex items-center justify-center cursor-pointer">
              <GoPersonAdd size={14} />
            </div>
          </div>
          <div className="flex flex-col justify-center h-full">
            <p className="text-sm">Registered users with private link</p>
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
          <div className="flex items-center justify-center border rounded-md text-xs px-2 bg-[#7b3aec] text-white">
            <span className="mr-1.5">{/* <FaPlus /> */}+</span>
            <button className="text-[11px]">Invite</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkSharingCard;
