import React from "react";

const CardTiltAnimation = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default CardTiltAnimation;

const Card = () => {
  return (
    <div className="w-60 h-24 border-2 border-dashed border-neutral-400 rounded-xl p-2 cursor-pointer flex flex-col mb-8 text-xs">
      <div className="w-full flex items-center justify-between text-xs border-b-2 border-dashed border-neutral-400 pb-1">
        <p>
          <span className="text-neutral-400 font-semibold">TODAY: </span>{" "}
          <span className="font-semibold">WED</span>
        </p>
        <p className="text-neutral-400 font-semibold">17 DEC</p>
      </div>
      <div className="w-full h-full rounded-lg mt-2 bg-pink-50 shadow-sm p-2 flex">
        <div className="border"></div>
        <div className="w-full flex justify-between flex-col ml-2">
          <div className="flex items-center justify-between">
            <p>Mobility</p>
            <p>45m</p>
          </div>
          <p>5:00 - 6:00 pm</p>
        </div>
      </div>
    </div>
  );
};
