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
    <div className="w-60 h-24 border-2 border-dashed border-neutral-400 rounded-xl p-2 text-sm flex flex-col mb-8">
      <div className="w-full flex items-center justify-between text-xs border-b-2 border-dashed border-neutral-400 pb-1">
        <p>
          <span className="text-neutral-400 font-semibold">TODAY: </span>{" "}
          <span className="font-semibold">WED</span>
        </p>
        <p className="text-neutral-400 font-semibold">17 DEC</p>
      </div>
      <div className="h-full rounded-lg border mt-2"></div>
    </div>
  );
};
