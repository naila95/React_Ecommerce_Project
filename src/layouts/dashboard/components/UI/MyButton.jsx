import React from "react";

export default function MyButton({ fill = false, label, refFunc = () => {} }) {
  if (fill) {
    return (
      <button
        type="submit"
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
        type="submit"
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
