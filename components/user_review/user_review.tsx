import React from "react";
import ReviewMainCard from "./review_card";
import { ComboboxDemo } from "./select_component";
import { Search } from "lucide-react";
import SingleUserReview from "./single_user_review";

export default function UserReview() {
  return (
    <div className="w-full flex justify-between flex-wrap py-5 ">
      <div className="w-full md:w-1/3  px-2 md:sticky top-5 h-[500px] z-50">
        <ReviewMainCard />
      </div>
      <div className="w-full md:w-2/3 px-5 md:p-1 md:pl-7">
        {/* user rating header  */}
        <div className="w-full flex justify-between items-center  text-white">
          <h2 className="md:text-lg font-semibold">136 Reviews</h2>
          <ComboboxDemo />
        </div>

        {/* rating search  */}

        <label
          htmlFor="input"
          className="w-full  rounded-full py-1.5 px-3 flex gap-2 my-4 items-center text-white border f focus:ring-1"
        >
          <Search color="#fff" size={18} />

          <input
            type="text"
            id="input"
            className="flex-1 bg-inherit outline-none "
            placeholder="Search reviews"
          />
        </label>

        {/* single user review  */}
        <div className="w-full divide-y-[1px] space-y-5">
          {data.map((elm) => (
            <SingleUserReview {...elm} key={elm.name} />
          ))}
        </div>
      </div>
    </div>
  );
}

const data = [
  {
    name: "John Doe",
    rating: 5,
    image: "https://github.com/shadcn.png",
  },
  {
    name: "Parl ",
    rating: 4,
  },
  {
    name: "Doe",
    rating: 1,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScVahQSDcfMDzEEyEu7qhDFh0qjUH9TEKToA&usqp=CAU",
  },
  {
    name: "Lorem Doe",
    rating: 3,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQte5fcMOTmjtpS_mbhx8pSttA5Oy0OmCwfgA&usqp=CAU",
  },
];
