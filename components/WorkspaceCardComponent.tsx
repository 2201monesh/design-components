import { IoFolderOpen } from "react-icons/io5";
import { HiDotsHorizontal } from "react-icons/hi";

const WorkspaceCardComponent = () => {
  return (
    <div
      className="w-96 h-106 border border-neutral-300 shadow-sm rounded-xl px-6 py-2"
      style={{ fontFamily: "var(--font-geist-sans)" }}
    >
      <div className="border-b border-dashed py-3 border-neutral-300 flex items-center justify-between">
        <div className="flex items-center">
          <IoFolderOpen className="text-neutral-400 mr-2 cursor-pointer" />
          <p className="text-neutral-600 text-sm">My Workspace</p>
        </div>
        <HiDotsHorizontal className="text-neutral-400 cursor-pointer" />
      </div>
      <p className="py-3 text-xl">KYC Verification For Financial Institution</p>
      <p className="text-sm border-b border-dashed border-neutral-300 pb-3 text-neutral-600">
        This workflow automates the collection, extraction, validation,
        watchlist screening, consistency checking, risk assessment, AI-supported
        recommendations, and decisioning of customer in...
      </p>
      {/* <div>text</div> */}
    </div>
  );
};

export default WorkspaceCardComponent;
