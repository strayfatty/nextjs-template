"use client";

import { usePagination } from "~/hooks/use-pagination";
import { api } from "~/trpc/react";
import { userTableDefaultQuery } from "./user-table-default-query";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "~/components/ui/table";
import { Button } from "~/components/ui/button";

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
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Image</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users?.map(user => (
              <TableRow key={user.id}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.image}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div>
        <Button variant="outline" size="sm" onClick={() =>
          setPagination({ pageIndex: pageIndex - 1, pageSize: pageSize })
        } disabled={false}>prev</Button>
        <Button variant="outline" size="sm" onClick={() =>
          setPagination({ pageIndex: pageIndex + 1, pageSize: pageSize })
        } disabled={false}>next</Button>
      </div>
    </div>
  );
}
