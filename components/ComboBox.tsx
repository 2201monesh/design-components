import React from "react";

const ComboBox = () => {
  return (
    <div
      style={{ fontFamily: "var(--font-geist-sans)" }}
      className="flex items-center justify-center w-full h-full bg-[#f6f6f6]"
    >
      <input
        type="text"
        className="outline-neutral-300 w-[25%] px-4 py-2 shadow rounded bg-white"
        placeholder="Search companies..."
      />
    </div>
  );
};

export default ComboBox;
