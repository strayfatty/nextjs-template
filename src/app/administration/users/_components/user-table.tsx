"use client";

import { useState } from "react";
import { api } from "~/trpc/react";
import { userTableDefaultQuery } from "./user-table-default-query";

export function UserTable() {
  const { offset, limit, setPagination, pagination } = usePagination();
  const [users] = api.users.list.useSuspenseQuery({
    offset: offset,
    limit: limit,
  });
  const { pageIndex, pageSize } = pagination;

  return (
    <div>
      {users?.map((u) => (
        <div key={u.id}>
          {u.name}, {u.id}, {u.email}, {u.image}
        </div>
      ))}
      <button
        type="button"
        onClick={() =>
          setPagination({ pageIndex: pageIndex - 1, pageSize: pageSize })
        }
      >
        prev
      </button>
      <button
        type="button"
        onClick={() =>
          setPagination({ pageIndex: pageIndex + 1, pageSize: pageSize })
        }
      >
        next
      </button>
    </div>
  );
}

function usePagination() {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: userTableDefaultQuery.limit,
  });

  const { pageIndex, pageSize } = pagination;
  return {
    offset: pageIndex * pageSize,
    limit: pageSize,
    setPagination: setPagination,
    pagination: pagination,
  };
}
