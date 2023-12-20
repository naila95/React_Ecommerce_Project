import React from "react";

export default function Button({ fill = false, label, refFunc }) {
  if (fill) {
    return (
      <button
        onClick={() => {
          refFunc();
        }}
        className="bg-[#94D5CB] text-white py-3 px-6 text-base rounded-md"
      >
        {label}
      </button>
    );
  } else {
    return (
      <button
        onClick={() => {
          refFunc();
        }}
        className="bg-white border border-[#94D5CB] py-3 px-6 text-base rounded-md"
      >
        {label}
      </button>
    );
  }
}
