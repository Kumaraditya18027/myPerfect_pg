/* eslint-disable react/prop-types */
// import React from "react";

import { Link } from "react-router-dom";

const PGCard = ({ price, pgName, address, facility, tags, img_link }) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
      <Link href="#">
        <img
          className="rounded-t-lg w-full h-[16rem]"
          src={img_link}
          alt={`pg-${pgName}`}
        />
      </Link>
      <div className="p-5">
        <h1 className="text-xl">
          ₹{price} <span className="text-sm text-gray-400">onwards</span>
        </h1>
        <p>{address}</p>
        <a href="#">
          <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900">
            {pgName}
          </h5>
        </a>
        <div className="flex gap-x-3 mb-3">
          {tags.map((tag, index) => (
            <span key={index} className="bg-gray-200 px-2 py-1 rounded-md">
              {tag}
            </span>
          ))}
        </div>
        <div className="text-gray-500 mb-3">
          Key facilities : <span>{facility}</span>
        </div>
        <a
          href="#"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4"
        >
          Contact owner
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
        </a>
      </div>
    </div>
  );
};

export default PGCard;
