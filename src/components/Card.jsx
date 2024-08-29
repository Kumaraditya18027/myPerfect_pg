// import React from "react";
// import imgs from "../assets/boys.jpg";

// eslint-disable-next-line react/prop-types
const Card = ({ title, image }) => {
  return (
    <div className="w-fit h-auto">
      <a
        href="#"
        className="flex flex-col items-center bg-white border border-gray-300 rounded-lg shadow-lg md:flex-row p-2"
      >
        <img
          className="object-cover w-[16rem] rounded-t-lg h-48 md:rounded-none md:rounded-s-lg"
          src={image}
          alt=""
        />
        <div className="flex justify-between items-center p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-normal tracking-tight text-gray-900 text-nowrap">
            {title}
          </h5>
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </div>
      </a>
    </div>
  );
};

export default Card;
