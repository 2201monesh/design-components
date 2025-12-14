"use client";
import { useState, useRef, useEffect } from "react";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { motion } from "motion/react";

const AnimatedDrawer = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  // click outside to close
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="relative p-10">
      <motion.div
        ref={ref}
        className="
          absolute top-0 right-0
          bg-white border border-neutral-300 shadow-sm
          overflow-hidden
        "
        initial={false}
        animate={{
          width: open ? 160 : 32,
          height: open ? 224 : 32,
          borderRadius: open ? 12 : 9999,
        }}
        transition={{
          type: "tween",
          duration: 0.2,
          ease: "easeInOut",
        }}
        onClick={() => !open && setOpen(true)}
      >
        {/* Icon (button state) */}
        <motion.div
          layoutId="animate"
          className="w-full h-full flex items-start justify-center pt-2 cursor-pointer"
          animate={{ opacity: open ? 0 : 1 }}
          transition={{ duration: 0.1 }}
          style={{ pointerEvents: open ? "none" : "auto" }}
        >
          <HiOutlineDotsVertical className="text-neutral-700" />
        </motion.div>

        {/* Card content */}
        <motion.div
          layoutId="animate"
          className="absolute inset-0 p-4"
          animate={{ opacity: open ? 1 : 0 }}
          transition={{ duration: 0.15, delay: open ? 0.2 : 0 }}
          style={{ pointerEvents: open ? "auto" : "none" }}
        >
          <p className="text-sm text-neutral-700">Card content goes here</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AnimatedDrawer;
