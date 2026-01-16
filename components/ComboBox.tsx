import React from "react";

const ComboBox = () => {
  return (
    <div
      style={{ fontFamily: "var(--font-geist-sans)" }}
      className="flex items-start justify-center w-full h-full bg-[#f6f6f6]"
    >
      <div className="flex flex-col items-center justify-center w-full h-full border">
        <input
          type="text"
          className="outline-neutral-300 w-[25%] px-4 py-2 shadow-sm rounded-lg bg-white mb-1.5"
          placeholder="Search companies..."
        />
        <div className="w-[25%] h-100 border rounded-lg border-neutral-200 bg-white shadow-sm">
          <div className="w-full h-[88%] overflow-y-scroll [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"></div>
          <div className="w-full h-[12%] bg-[#f6f6f6] rounded-b-lg border-t border-t-neutral-200"></div>
        </div>
      </div>
    </div>
  );
};

export default ComboBox;
