"use client";
import { Star } from "lucide-react";
import React, { useState } from "react";

type props = {
  rating: string;
};

const Rating = ({ rating }: props) => {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((elm, i) => {
        let current = i + 1;
        return (
          <Star
            size={16}
            strokeWidth={3}
            key={i}
            values={rating}
            // onClick={() => handleRating(current.toString())}
            className={`${current <= Number(rating) ? "text-yellow-500" : ""} `}
          />
        );
      })}
    </div>
  );
};

export default Rating;
