import React from "react";
import "./notch.css";

export default function ThinkingCard() {
  return (
    <div className="w-[280px] rounded-xl bg-[#f5f5f5] p-3 shadow-sm">
      {/* Image / texture area */}

      <div className="relative h-[220px] w-full overflow-hidden rounded-lg bg-white">
        <div className="orange-texture absolute inset-0" />
      </div>

      {/* Content */}
      <div className="mt-4 px-1">
        <div className="text-xl font-semibold leading-tight">≡</div>

        <h2 className="mt-2 text-[26px] font-serif leading-[1.2] text-black">
          Engineering
          <br />
          Systems That Think
          <br />
          Clearly.
        </h2>
      </div>
    </div>
  );
}
