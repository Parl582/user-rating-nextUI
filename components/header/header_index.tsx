import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div className="w-full sticky top-0 h-14  border rounded-full z-[999] bg-[#202020]/95 px-4">
      <div className="w-full flex items-center justify-between h-full">
        <div className="">logo</div>
        <div className="flex gap-2">
          <ul>
            <Link
              href={"/dashboard"}
              className="px-2 py-1 bg-sky-400 cursor-pointer rounded-md text-black"
            >
              Dashboard
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
