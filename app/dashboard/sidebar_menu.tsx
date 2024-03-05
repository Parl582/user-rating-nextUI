"use client";
import { Home, PlusCircle } from "lucide-react";
import { Span } from "next/dist/trace";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { Suspense } from "react";

export const SidebarMenu = ({
  tabName,
  icon,
  isNew,
  isPlus,
  count,
}: {
  tabName: string;
  icon: React.JSX.Element;
  isNew?: boolean;
  isPlus?: boolean;
  count?: number;
}) => {
  const searchParams = useSearchParams();
  let params = searchParams.get("tab");

  const IsNew = () => {
    return (
      <div className="px-3 py-1 bg-[#1d1a24] rounded-full">
        <span className="text-white text-xs">New </span>
      </div>
    );
  };
  const Counts = () => {
    return (
      <div className=" bg-[#1d1a24] size-5 flex items-center justify-center rounded-full">
        <span className="text-white text-xs">{count}</span>
      </div>
    );
  };
  const IsPlus = () => {
    return <PlusCircle size={21} />;
  };

  return (
    <>

        <Link
          href={`/dashboard?tab=${tabName}`}
          className={`flex items-center   px-2 py-2.5 text-sm my-0.5 text-[#9a999f] justify-between ${
            tabName === params ? "bg-[#27272a] !text-white " : ""
          }  rounded-xl cursor-pointer hover:bg-[#625353] duration-300 transition-all ease-out`}
        >
          <div className="flex items-center gap-2">
            {icon}
            <h5>{tabName}</h5>
          </div>
          {isNew && <IsNew />}
          {isPlus && <IsPlus />}
          {count && <Counts />}
        </Link>
    
    </>
  );
};
