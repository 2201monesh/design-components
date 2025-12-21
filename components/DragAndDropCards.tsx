"use client";

import React, { useState } from "react";
import { Reorder, motion } from "framer-motion";

const initialCards = [
  {
    id: 1,
    title: "build common module",
    tag: "dribble",
  },
  {
    id: 2,
    title: "design card",
    tag: "dribble",
  },
  {
    id: 3,
    title: "dashboard component",
    tag: "dribble",
  },
];

const DragAndDropCards = () => {
  const [cards, setCards] = useState(initialCards);
  return (
    // <div className="w-1/4 h-full flex flex-col justify-center">
    //   <p className="flex items-start text-sm text-neutral-500 ml-1 mb-2">
    //     in progress
    //   </p>
    //   <div className="w-[60%] h-120 rounded-xl bg-neutral-100 p-2 overflow-y-scroll no-scrollbar">
    //     <Card cardTitle="build common module" tagName="dribble" />
    //     <Card cardTitle="design card" tagName="dribble" />
    //     <Card cardTitle="dashboard component" tagName="dribble" />
    //   </div>
    // </div>
    <div className="w-1/4 h-full flex flex-col justify-center">
      <p className="flex items-start text-sm text-neutral-500 ml-1 mb-2">
        in progress
      </p>

      <Reorder.Group
        axis="y"
        values={cards}
        onReorder={setCards}
        className="w-[60%] h-120 rounded-xl bg-neutral-100 p-2 overflow-y-scroll no-scrollbar"
      >
        {cards.map((card) => (
          <Reorder.Item
            key={card.id}
            value={card}
            layout
            whileDrag={{
              scale: 0.95,
              rotate: 3, // left down, right up
            }}
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 30,
            }}
            className="cursor-grab active:cursor-grabbing"
          >
            <Card cardTitle={card.title} tagName={card.tag} />
          </Reorder.Item>
        ))}
      </Reorder.Group>
    </div>
  );
};

export default DragAndDropCards;

// const Card = ({ cardTitle, tagName }) => {
//   return (
//     <div className="w-full h-28 p-3 cursor-grab rounded-lg bg-white mb-2 text-sm">
//       <p className="text-sm font-medium">{cardTitle}</p>
//       <p className="mt-1 text-xs border inline-block px-2 py-0.5 rounded-xl bg-[#dcfce7] text-[#16a34a]">
//         {tagName}
//       </p>
//       <div className="flex items-center justify-between mt-6">
//         <p className="text-xs text-neutral-500">dec 21 2025</p>
//         <img
//           className="rounded-full object-cover w-5 h-5"
//           src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMAEFg3mep11qtvO3r4NEPErM-52Iswos6Ug&s"
//           alt="img"
//         />
//       </div>
//     </div>
//   );
// };

const Card = ({ cardTitle, tagName }) => {
  return (
    <motion.div
      layout
      className="w-full h-28 p-3 rounded-lg bg-white mb-2 text-sm shadow-sm"
    >
      <p className="text-sm font-medium">{cardTitle}</p>

      {/* <p className="mt-1 text-xs border inline-block px-2 py-0.5 rounded-xl bg-[#dcfce7] text-[#16a34a]">
        {tagName}
      </p> */}

      <div className="flex items-center justify-between">
        <p className="text-xs text-neutral-500">dec 21 2025</p>
        <img
          className="rounded-full object-cover w-5 h-5"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMAEFg3mep11qtvO3r4NEPErM-52Iswos6Ug&s"
          alt="img"
        />
      </div>

      <p className="text-xs border inline-block px-2 py-0.5 rounded-xl bg-[#dcfce7] text-[#16a34a] mt-6">
        {tagName}
      </p>
    </motion.div>
  );
};
