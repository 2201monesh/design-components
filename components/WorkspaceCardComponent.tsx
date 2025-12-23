import React from "react";

const WorkspaceCardComponent = () => {
  return (
    <div className="w-96 h-106 border border-neutral-300 shadow-sm rounded-xl px-6 py-2">
      <p className="border-b border-dashed py-3 border-neutral-300 flex items-center justify-between">
        <div className="flex items-center">
          <p>X</p>
          <p>Workspace</p>
        </div>
        <div>logo</div>
      </p>
    </div>
  );
};

export default WorkspaceCardComponent;
