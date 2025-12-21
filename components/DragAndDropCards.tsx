import React from "react";

const DragAndDropCards = () => {
  return (
    <div className="w-1/4 h-full flex flex-col justify-center">
      <p className="flex items-start text-sm text-neutral-500">Not Started</p>
      <div className="w-[60%] h-120 rounded-xl bg-neutral-100 p-2">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default DragAndDropCards;

const Card = () => {
  return (
    <div className="w-full h-28 p-3 cursor-grab rounded-lg bg-white mb-2 text-sm">
      <p className="text-neutral-500 text-sm">Clothing Store</p>
      <p className="mt-1 text-xs border inline-block px-2 py-0.5 rounded-xl bg-[#dcfce7] text-[#16a34a]">
        dribble
      </p>
      <div className="flex items-center justify-between mt-6">
        <p>dec 21 2025</p>
        <img
          className="rounded-full object-cover w-5 h-5"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMAEFg3mep11qtvO3r4NEPErM-52Iswos6Ug&s"
          alt="img"
        />
      </div>
    </div>
  );
};
