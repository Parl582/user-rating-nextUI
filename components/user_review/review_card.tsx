import { Pencil, Star } from "lucide-react";
import React from "react";

const reviewData = [
  {
    title: "5 stars",
    rating: 86,
  },
  {
    title: "4 stars",
    rating: 36,
  },
  {
    title: "3 stars",
    rating: 18,
  },
  {
    title: "2 stars",
    rating: 24,
  },
  {
    title: "1 stars",
    rating: 22,
  },
];

export default function ReviewMainCard() {
  return (
    <div className="w-full !rounded-[10px] overflow-hidden p-3 bg-[#18181b] space-y-2.5 ">
      <div className="flex gap-2 items-center ">
        <span className="font-bold text-white flex items-center gap-1">
          <Star size={16} strokeWidth={3} color="#f7b750" /> 4.4 .
        </span>
        <span className="font-light text-gray-300">(Based on 193 reviews)</span>
      </div>

      {reviewData.map((review) => (
        <Bar key={review.title} {...review} />
      ))}
      <div className="py-3">
        <button className="w-full border rounded-full py-3 flex items-center justify-center gap-2 text-white text-sm ">
          <Pencil size={14} />
          Write a review
        </button>
      </div>
      <h3 className="text-[#9797a0] text-sm text-center">
        Share your experience with this product
      </h3>
    </div>
  );
}

const Bar = ({ title, rating }: { title: string; rating: number }) => {
  return (
    <div className="w-full text-white text-sm space-y-2">
      <div className="w-full flex justify-between">
        <h2> {title} </h2>
        <span> {rating}% </span>
      </div>
      <div className="w-full  rounded-full h-3 bg-gray-700">
        <div
          className="h-full rounded-full bg-yellow-500"
          style={{ width: `${rating}%` }}
        ></div>
      </div>
    </div>
  );
};
