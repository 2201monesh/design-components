"use client";

import { PiDotsNineBold } from "react-icons/pi";
import { Reorder, motion } from "framer-motion";
import { useState } from "react";

const initialItems = [
  { id: 1, text: "Conduct QA Testing", color: "bg-amber-400" },
  { id: 2, text: "Design Features", color: "bg-emerald-400" },
  { id: 3, text: "Workflow Development", color: "bg-sky-400" },
  { id: 4, text: "Figma Structure", color: "bg-violet-400" },
  { id: 5, text: "SRS Flow", color: "bg-pink-400" },
  { id: 6, text: "Implement Card Component", color: "bg-orange-400" },
  { id: 7, text: "Review pipeline", color: "bg-lime-400" },
];

const DraggableSlides = () => {
  const [items, setItems] = useState(initialItems);

  return (
    <div
      style={{ fontFamily: "var(--font-geist-sans)" }}
      className="w-screen h-screen flex items-center justify-center bg-[#f2f2f2]"
    >
      <Reorder.Group
        axis="y"
        values={items}
        onReorder={setItems}
        className="flex flex-col"
      >
        {items.map((item, index) => (
          <Reorder.Item
            key={item.id}
            value={item}
            drag
            dragConstraints={{ left: 0, right: 0 }}
            whileDrag={{
              scale: 1.03,
              zIndex: 50,
            }}
            onDragEnd={(e, info) => {
              // snap X back after drop
              info.point.x = 0;
            }}
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 30,
            }}
          >
            <Card text={item.text} color={item.color} />
          </Reorder.Item>
        ))}
      </Reorder.Group>
    </div>
  );
};

export default DraggableSlides;

const Card = ({ text, color }) => {
  return (
    <motion.div
      layout
      dragElastic={0.2}
      className="w-108 h-12 rounded-xl bg-white shadow flex items-center justify-between px-6 cursor-grab mb-3"
      whileTap={{ cursor: "grabbing" }}
    >
      <div className="flex items-center">
        <span className={`rounded-full w-2 h-2 mr-2 ${color}`} />
        <span>{text}</span>
      </div>

      <PiDotsNineBold className="text-gray-400" />
    </motion.div>
  );
};
