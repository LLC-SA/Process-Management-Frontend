import React from "react";

function Spinner() {
  return (
    <div className="relative left-1/2 top-full">
      <div
        className="h-16 w-16
                   animate-spin
                   rounded-full border-4
                  border-gray-300 border-t-slate-600"
      />
    </div>
  );
}

export default Spinner;
