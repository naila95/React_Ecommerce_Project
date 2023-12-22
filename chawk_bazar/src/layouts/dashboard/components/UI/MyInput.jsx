import React from "react";

export default function MyInput({ type, name }) {
  return (
    <>
      <input
        name={name}
        type={type}
        className="border border-[#94D5CB] py-2 px-4 rounded-md outline-none mr-2"
      ></input>
    </>
  );
}
