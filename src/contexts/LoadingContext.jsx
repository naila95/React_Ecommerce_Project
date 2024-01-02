import React, { createContext, useState } from "react";
import { Spin } from "antd";

export const LoadingContext = createContext();

export function MyLoadingProvider({ children }) {
  const [loading, setloading] = useState(false);
  return (
    <LoadingContext.Provider value={{ setloading }}>
      <Spin className="z-50" spinning={loading}>
        {children}
      </Spin>
    </LoadingContext.Provider>
  );
}
