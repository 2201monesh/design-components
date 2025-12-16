"use client";

import { easeOut, motion, AnimatePresence } from "motion/react";
import { useState, useEffect, useRef } from "react";
import { GoHomeFill } from "react-icons/go";
import { IoMdSettings } from "react-icons/io";
import { IoNotifications } from "react-icons/io5";
import { MdShield } from "react-icons/md";
import { LuSettings2 } from "react-icons/lu";

const navItems = [
  {
    id: "home",
    label: "Home",
    icon: (
      <GoHomeFill className="relative z-10 w-5 h-5 rounded cursor-pointer" />
    ),
  },
  {
    id: "IoNotifications",
    label: "Notification",
    icon: (
      <IoNotifications className="relative z-10 w-5 h-5 rounded cursor-pointer" />
    ),
  },
  {
    id: "settings",
    label: "Settings",
    icon: (
      <IoMdSettings className="relative z-10 w-5 h-5 rounded cursor-pointer" />
    ),
  },
  {
    id: "logs",
    label: "Change Logs",
    icon: (
      <LuSettings2 className="relative z-10 w-5 h-5 rounded cursor-pointer" />
    ),
  },
  {
    id: "security",
    label: "Security",
    icon: <MdShield className="relative z-10 w-5 h-5 rounded cursor-pointer" />,
  },
];

const NavBarAnimation = () => {
  const [open, setOpen] = useState(true);
  const [active, setActive] = useState(null);
  const navRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setActive(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <motion.div
      ref={navRef}
      className="w-auto p-2 bg-neutral-100 rounded-xl flex justify-between gap-2"
      layout
      transition={{ layout: { duration: 0.25, ease: "easeOut" } }}
    >
      {navItems.map((item: any) => {
        const isActive = active === item.id;

        return (
          <motion.button
            key={item.id}
            layout
            onClick={() => setActive(item.id)}
            transition={{ layout: { duration: 0.25, ease: "easeOut" } }}
            className="relative flex items-center gap-2 px-3 py-2 rounded-lg overflow-hidden"
          >
            {/* ACTIVE INDICATOR */}
            {isActive && (
              <motion.div
                layoutId="nav-indicator"
                className="absolute inset-0 rounded-lg bg-neutral-200 cursor-pointer"
                transition={{ duration: 0.25, ease: "easeOut" }}
              />
            )}

            {/* ICON */}
            {/* <span className="relative z-10 w-5 h-5 bg-neutral-500 rounded cursor-pointer" /> */}
            {item.icon}

            {/* LABEL (no AnimatePresence) */}
            <motion.span
              animate={{
                opacity: isActive ? 1 : 0,
                width: isActive ? "auto" : 0,
              }}
              transition={{ duration: 0.15 }}
              className="relative z-10 overflow-hidden whitespace-nowrap text-sm cursor-pointer"
            >
              {item.label}
            </motion.span>
          </motion.button>
        );
      })}
    </motion.div>
  );
};

export default NavBarAnimation;
