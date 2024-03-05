import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Pencil, Search } from "lucide-react";
import React from "react";
import { TabsDemo } from "./TavTest";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function DashboardContainer() {
  return (
    <div className="flex w-full items-start">
      <div className="w-1/3 border h-screen overflow-y-auto">
        <ChatSection />
      </div>
      <div className="w-1/3 border"></div>
      <div className="w-1/3 border"></div>
    </div>
  );
}

const ChatSection = () => {
  return (
    <div className="w-full p-2">
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-lg">
          Chat{" "}
          <span className="!text-xs font-light rounded-lg p-1 bg-gray-400/30">
            24
          </span>
        </h3>

        <div className="p-1 bg-gray-400/60 border-2 rounded-lg cursor-pointer">
          <Pencil size={18} />
        </div>
      </div>

      {/* search bar  */}
      <div className="w-full  pt-7">
        <div className="w-full border-2 border-[#464646] rounded-lg flex gap-1 items-center bg-[#27272a] overflow-hidden py-1.5 px-2">
          <Search size={18} />
          <input
            type="text"
            className="flex-1 bg-[#27272a]  outline-none"
            placeholder="Search"
          />
        </div>
      </div>

      {/* tabs  */}

      <Tabs defaultValue="inbox" className="w-full py-4">
        <TabsList className=" border w-full bg-[#2e2b35]">
          <TabsTrigger
            value="inbox"
            className="shadow-lg w-1/2 text-center bg-[#777778]"
          >
            inbox
          </TabsTrigger>
          <TabsTrigger
            value="unread"
            className="shadow-lg w-1/2 text-center bg-[#777778]"
          >
            unread
          </TabsTrigger>
        </TabsList>
        <TabsContent value="inbox" className="space-y-2 p-1">
          {userData.map((elm) => (
            <User key={elm.name} {...elm} />
          ))}
        </TabsContent>
        <TabsContent value="unread" className="p-1 space-y-2">
          {userData.map((elm) => (
            <User key={elm.name} {...elm} />
          ))}
        </TabsContent>
      </Tabs>
      {/* <TabsDemo /> */}
    </div>
  );
};

const User = ({ name, image }: { name: string; image?: string }) => {
  return (
    <div className="flex items-center gap-2 cursor-pointer hover:bg-[#27272a] p-2 rounded-lg">
      <Avatar className="border-2 border-gray-500/90 relative">
        <div className="w-full h-full  rounded-full overflow-hidden">
          <AvatarImage src={image} />
          <AvatarFallback className="first-letter:uppercase rounded-full border">
            PG
          </AvatarFallback>
        </div>
        <div className="absolute -top-1 right-0 bg-red-700 size-4 rounded-full text-xs text-white flex items-center justify-center">
          2
        </div>
      </Avatar>
      <div className="flex-1">
        <div className="flex w-full justify-between">
          <h1 className="text-sm">{name}</h1>
          <div className="text-sm font-thin">13:24</div>
        </div>
        <p className="line-clamp-1 text-xs text-[#95979b]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          optio fugiat eius facilis! Amet commodi molestias in aliquam! Iste,
          alias!
        </p>
      </div>
    </div>
  );
};

const userData = [
  {
    name: "John",
    image:
      "https://i.pinimg.com/736x/00/d0/75/00d0759ac912c775b0f31973b3527715.jpg",
  },
  {
    name: "Joya",
    image:
      "https://i.pinimg.com/originals/e9/77/d4/e977d476c5b106ee9d70b213be36c19d.jpg",
  },
  {
    name: "Smiti",
    image:
      "https://img.freepik.com/premium-photo/cute-girl-cartoon_863013-65501.jpg",
  },
  {
    name: "John",
    image: "http://placeimg.com/640/480/any",
  },
];
