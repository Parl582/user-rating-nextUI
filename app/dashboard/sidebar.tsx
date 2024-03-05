"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Aperture,
  Component,
  Gift,
  Home,
  Info,
  KanbanSquareDashedIcon,
  ListTodo,
  LogOut,
  MapPinned,
  NotebookText,
  Settings,
  Users,
} from "lucide-react";
import Link from "next/link";

import React, { Suspense } from "react";
import { SidebarMenu } from "./sidebar_menu";

export default function Sidebar() {
  return (
    <div className="w-[80px] md:w-1/5 border-r-[2px] border-gray-700/60 h-screen flex flex-col justify-between relative overflow-y-auto p-4">
      <div className="w-full h-[80%] overflow-y-auto">
        {/* logo  */}
        <div className="flex items-center  gap-2 font-bold text-lg mb-6">
          <div className="p-1 border bg-white rounded-full">
            <Aperture color="#000" />
          </div>
          <Link href={"/dashboard"}>ACED</Link>{" "}
        </div>

        {/* user - Details  */}
        <div className="flex items-center gap-1">
          <Avatar className="border-2 border-gray-500/90">
            <AvatarImage
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScVahQSDcfMDzEEyEu7qhDFh0qjUH9TEKToA&usqp=CAU"
              }
            />
            <AvatarFallback className="first-letter:uppercase rounded-full border">
              PG
            </AvatarFallback>
          </Avatar>
          <div className="">
            <h2 className="text-sm font-semibold first-letter:uppercase">
              John Doe
            </h2>
            <p className="text-gray-400 text-xs">Software Developer</p>
          </div>
        </div>
        <div className="py-6 space-y-1">
          {menu.map((tabs) => (
            <Suspense key={tabs.tabName}>
              <SidebarMenu {...tabs} />
            </Suspense>
          ))}
        </div>
      </div>

      {/* user profile section  */}

      <div className="">
        {profileMenu.map((tabs) => (
          <Suspense key={tabs.tabName}>
            <SidebarMenu {...tabs} />
          </Suspense>
        ))}
      </div>
    </div>
  );
}

const menu = [
  {
    tabName: "Menu",
    icon: <Home size={22} />,
  },
  {
    tabName: "Projects",
    icon: <Component size={22} />,
    isPlus: true,
  },
  {
    tabName: "Task",
    icon: <ListTodo size={22} />,
    isPlus: true,
  },
  {
    tabName: "Teams",
    icon: <Users size={22} />,
  },
  {
    tabName: "Tracker",
    icon: <MapPinned size={22} />,
    isNew: true,
  },
  {
    tabName: "Analytic",
    icon: <KanbanSquareDashedIcon size={22} />,
  },
  {
    tabName: "Perks",
    icon: <Gift size={22} />,
    count: 3,
  },
  {
    tabName: "Expenses",
    icon: <NotebookText size={22} />,
  },
  {
    tabName: "Settings",
    icon: <Settings size={22} />,
  },
];

const profileMenu = [
  {
    tabName: "Help & information",
    icon: <Info size={22} />,
  },
  {
    tabName: "Log Out",
    icon: <LogOut size={22} />,
  },
];
