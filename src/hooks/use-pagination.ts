import { useState } from "react";

export function usePagination(offset: number, limit: number) {
  const [pagination, setPagination] = useState({
    pageIndex: offset / limit,
    pageSize: limit,
  });

  const { pageIndex, pageSize } = pagination;
  return {
    offset: pageIndex * pageSize,
    limit: pageSize,
    setPagination: setPagination,
    pagination: pagination,
  };
}
