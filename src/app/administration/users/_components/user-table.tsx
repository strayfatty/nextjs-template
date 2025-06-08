"use client";

import { usePagination } from "~/hooks/use-pagination";
import { api } from "~/trpc/react";
import { userTableDefaultQuery } from "./user-table-default-query";

export function UserTable() {
  const { offset, limit, setPagination, pagination } = usePagination(
    userTableDefaultQuery.offset,
    userTableDefaultQuery.limit,
  );
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
