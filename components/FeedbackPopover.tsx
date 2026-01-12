"use client";

import { useState, useRef, useEffect } from "react";
import { PiChatText } from "react-icons/pi";
import { MdKeyboardCommandKey } from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";

const FeedbackPopover = () => {
  const [open, setOpen] = useState(false);
  const popupRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e: any) => {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <div style={{ fontFamily: "var(--font-geist-sans)" }}>
      {/* {!open && <ClickBar onClick={() => setOpen(true)} />} */}
      {!open && (
        <motion.div
          layoutId="wrapper"
          onClick={() => setOpen(true)}
          className="w-74 h-14 border border-neutral-300 rounded-3xl flex items-center justify-between px-3 py-2 cursor-pointer"
        >
          <div className="flex items-center justify-center">
            <div className="w-3 h-3 rounded-full mr-2 bg-black"></div>
            <p className="text-sm text-neutral-500">Morph surface</p>
          </div>
          <div className="bg-neutral-100 px-2.5 py-1.5 rounded-xl text-sm text-neutral-500">
            Feedback
          </div>
        </motion.div>
      )}

      <AnimatePresence mode="popLayout">
        {open && (
          <motion.div layoutId="wrapper" ref={popupRef}>
            {/* <FeedbackPopup /> */}
            <div className="w-100 h-60 border border-neutral-300 rounded-3xl">
              <div className="w-full flex items-center justify-between px-5 py-3">
                <div className="flex items-center justify-center">
                  <PiChatText className="mr-2 text-neutral-500" />
                  <p className="text-sm text-neutral-500">Morph surface</p>
                </div>
                <div className="flex items-center justify-center">
                  <div className="bg-neutral-100 p-1.5 rounded-xl text-neutral-500 mr-2 cursor-pointer">
                    <MdKeyboardCommandKey size={18} />
                  </div>
                  <div className="bg-neutral-100 text-neutral-500 text-sm px-3 py-1 rounded-lg cursor-pointer">
                    Enter
                  </div>
                </div>
              </div>
              <div className="m-1">
                <textarea
                  className="w-full h-44 border border-neutral-300 bg-neutral-100 rounded-2xl outline-0 px-2 text-sm py-2"
                  name=""
                  id=""
                ></textarea>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FeedbackPopover;

const ClickBar = ({ onClick }) => {
  return (
    <AnimatePresence>
      <motion.div
        layoutId="wrapper"
        onClick={onClick}
        className="w-74 h-14 border border-neutral-300 rounded-3xl flex items-center justify-between px-3 py-2 cursor-pointer"
      >
        <div className="flex items-center justify-center">
          <div className="w-3 h-3 rounded-full mr-2 bg-black"></div>
          <p className="text-sm text-neutral-500">Morph surface</p>
        </div>
        <div className="bg-neutral-100 px-2.5 py-1.5 rounded-xl text-sm text-neutral-500">
          Feedback
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

const FeedbackPopup = () => {
  return (
    <AnimatePresence>
      <motion.div
        layoutId="wrapper"
        className="w-100 h-60 border border-neutral-300 rounded-3xl"
      >
        <div className="w-full flex items-center justify-between px-5 py-3">
          <div className="flex items-center justify-center">
            <PiChatText className="mr-2 text-neutral-500" />
            <p className="text-sm text-neutral-500">Morph surface</p>
          </div>
          <div className="flex items-center justify-center">
            <div className="bg-neutral-100 p-1.5 rounded-xl text-neutral-500 mr-2 cursor-pointer">
              <MdKeyboardCommandKey size={18} />
            </div>
            <div className="bg-neutral-100 text-neutral-500 text-sm px-3 py-1 rounded-lg cursor-pointer">
              Enter
            </div>
          </div>
        </div>
        <div className="m-1">
          <textarea
            className="w-full h-44 border border-neutral-300 bg-neutral-100 rounded-2xl outline-0 px-2 text-sm py-2"
            name=""
            id=""
          ></textarea>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
