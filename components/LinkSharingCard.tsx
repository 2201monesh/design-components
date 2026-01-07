"use client";
import { HiLockClosed } from "react-icons/hi";
import { BsGlobeEuropeAfrica } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";

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
    </div>
  );
};

export default LinkSharingCard;
