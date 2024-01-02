import { Spin } from "antd";
import React from "react";

export default function Spinner() {
  return (
    <div className="w-full flex justify-center items-center h-[100vh] ">
      <Spin size="large" />
    </div>
  );
}
