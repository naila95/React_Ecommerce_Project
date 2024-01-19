import React, { createContext, useEffect, useState } from "react";

export const PaginationContext = createContext();

export function PaginationProvider({ children }) {
  const [pagination, setPagination] = useState({
    page: 1,
    perPage: 10,
    totalCount: 0,
  });
  useEffect(() => {
    setPagination({ ...pagination, page: 1 });
  }, [pagination.totalCount]);
  return (
    <PaginationContext.Provider value={{ pagination, setPagination }}>
      {children}
    </PaginationContext.Provider>
  );
}
