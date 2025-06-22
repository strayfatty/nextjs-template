"use client";

import { Button } from "~/components/ui/button";
import { Skeleton } from "~/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import { usePagination } from "~/hooks/use-pagination";
import { api } from "~/trpc/react";

export function UserTable() {
  const { offset, limit, setPagination, pagination } = usePagination(0, 10);
  const { data: totalCount } = api.users.count.useQuery();
  const { data: users, isPending } = api.users.list.useQuery({
    offset: offset,
    limit: limit,
  });
  const { pageIndex, pageSize } = pagination;

  return (
    <div className="flex flex-col gap-1">
      <Table aria-label="User table">
        <TableHeader>
          <TableRow>
            <TableHead scope="col">Name</TableHead>
            <TableHead scope="col">Email</TableHead>
            <TableHead scope="col">Image</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {isPending
          ? [...Array(limit)].map((_, i) => (
              <TableRow key={i}>
                <TableCell colSpan={3}><Skeleton className="h-lh"/></TableCell>
              </TableRow>
            ))
          : users?.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.name ?? "-"}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.image ?? "-"}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="flex justify-end gap-1">
        <Button
          variant="outline"
          size="sm"
          aria-label="Go to previous page"
          onClick={() =>
            setPagination({ pageIndex: pageIndex - 1, pageSize: pageSize })
          }
          disabled={pageIndex <= 0}
        >
          prev
        </Button>
        <Button
          variant="outline"
          size="sm"
          aria-label="Go to next page"
          onClick={() =>
            setPagination({ pageIndex: pageIndex + 1, pageSize: pageSize })
          }
          disabled={(pageIndex + 1) * limit >= (totalCount ?? 0)}
        >
          next
        </Button>
      </div>
    </div>
  );
}
