import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Rating from "./rating";

export default function SingleUserReview({
  rating,
  name,
  image
}: {
  rating: number;
  name: string;
  image?: string;
}) {
  return (
    <div className="text-white w-full space-y-2 pt-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Avatar>
            <AvatarImage src={image} />
            <AvatarFallback className="first-letter:uppercase rounded-full border">
              {name.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <div className="">
            <h2 className="text-sm font-semibold first-letter:uppercase">
              {name}
            </h2>
            <p className="text-gray-400 text-xs">August 1,2021</p>
          </div>
        </div>

        {/* star  */}

        <div className="flex space-x-1">
          <Rating rating={rating.toString()} />
        </div>
      </div>

      {/* user reviews  */}
      <h2 className="font-medium pt-2"> Fantastic product </h2>
      <p className="text-sm text-[#c0c0c1]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
        consequuntur sapiente quibusdam ipsam accusamus laborum illo quasi
        voluptatibus sequi voluptatum est nam dolor facere, explicabo sunt natus
        ipsum! Assumenda, asperiores.
      </p>
    </div>
  );
}
