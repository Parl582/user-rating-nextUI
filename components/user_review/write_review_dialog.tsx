"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Mail, Pencil, User } from "lucide-react";
import Rating from "./rating";
import { useState } from "react";
import { Button } from "../ui/button";

export default function WriteReview() {
  const [value, setValue] = useState("");
  const handleRating = (rating: string) => {
    setValue(rating);
  };
  return (
    <Dialog>
      <DialogTrigger className="w-full border rounded-full py-3 flex items-center justify-center gap-2 text-white text-sm ">
        <Pencil size={14} />
        Write a review
      </DialogTrigger>
      <DialogContent className="bg-[#18181b]  text-white border-0 !rounded-[12px] w-[95%] md:w-[30%]">
        <DialogHeader>
          <DialogTitle>Write a review</DialogTitle>
          <DialogDescription className="text-[#4c4c52] text-sm">
            Share your experience with this product
          </DialogDescription>
        </DialogHeader>
        <div className="w-full space-y-3">
          <div className="w-full bg-[#27272a] py-2 px-2 rounded-[10px] hover:bg-[#444447] transition-colors ease-in-out duration-200">
            <label className="text-xs">Name</label>
            <div className="flex w-full gap-1 items-center">
              <User size={13} color="#fff" />
              <input
                type="text"
                className="flex-1 outline-none bg-inherit text-sm"
                placeholder="Enter your name"
              />
            </div>
          </div>
          <div className="w-full bg-[#27272a] py-2 px-2 rounded-[10px] hover:bg-[#444447] transition-colors ease-in-out duration-200">
            <label className="text-xs">Email</label>
            <div className="flex w-full gap-1 items-center">
              <Mail size={13} color="#fff" />
              <input
                type="text"
                className="flex-1 outline-none bg-inherit text-sm"
                placeholder="Enter your email"
              />
            </div>
          </div>
          <hr className="w-full !my-6" />
          <h4>Rating</h4>
          {/* star components  */}
          <Rating handleRating={handleRating} rating={value} />

          <div className="w-full bg-[#27272a] py-2 px-2 rounded-[10px] hover:bg-[#444447] transition-colors ease-in-out duration-200">
            <label className="text-xs">Title</label>
            <div className="flex w-full gap-1 items-center">
              <Pencil size={13} color="#fff" />
              <input
                type="text"
                className="flex-1 outline-none bg-inherit text-sm"
                placeholder="Title of your review"
              />
            </div>
          </div>

          {/* text area  */}
          <div className="w-full bg-[#27272a] py-2 px-2 rounded-[10px] hover:bg-[#444447] transition-colors ease-in-out duration-200">
            <label className="text-xs">Comment</label>
            <div className="flex w-full gap-1 items-center">
              <textarea
                className="flex-1 outline-none bg-inherit text-sm min-h-32"
                placeholder="Enter your comment"
              />
            </div>
          </div>

          {/* submit button  */}

          <Button className="w-full text-center bg-[#0070f0] rounded-[14px] hover:bg-opacity-70 hover:bg-[#0070f0]">
            Send Review
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
