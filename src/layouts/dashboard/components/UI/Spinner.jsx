import { Spin } from "antd";
import React from "react";

export default function Spinner() {
  return (
    <div className="w-full flex justify-center items-center h-[100vh] fixed top-0 left-0 z-[20000]">
      <Spin size="large" />
    </div>
  );
}
