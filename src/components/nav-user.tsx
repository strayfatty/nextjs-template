"use client";

import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { LogOutIcon, MoreVerticalIcon } from "lucide-react";
import type { Session } from "next-auth";
import { Avatar } from "~/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "~/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "~/components/ui/sidebar";

export function NavUser(props: { session: Session }) {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton size="lg" className="center">
              <Avatar className="size-8 rounded-lg">
                <AvatarImage
                  src={props.session.user.image ?? undefined}
                  alt={props.session.user.email ?? undefined}
                />
                <AvatarFallback>AV</AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">
                  {props.session.user.name}
                </span>
                <span className="truncate text-muted-foreground text-xs">
                  {props.session.user.email}
                </span>
              </div>
              <MoreVerticalIcon className="ml-auto size-4" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                <Avatar className="h-8 w-8 rounded-lg">
                  <AvatarImage
                    src={props.session.user.image ?? undefined}
                    alt={props.session.user.name ?? undefined}
                  />
                  <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">
                    {props.session.user.name}
                  </span>
                  <span className="truncate text-muted-foreground text-xs">
                    {props.session.user.email}
                  </span>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <a href="/api/auth/signout">
                <LogOutIcon />
                Sign out
              </a>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
