import React, { createContext, useState } from "react";
import { Spin } from "antd";

export const LoadingContext = createContext();

export function MyLoadingProvider({ children }) {
  const [loading, setloading] = useState(false);
  return (
    <LoadingContext.Provider value={{ loading, setloading }}>
      <Spin spinning={loading}>{children}</Spin>
    </LoadingContext.Provider>
  );
}
