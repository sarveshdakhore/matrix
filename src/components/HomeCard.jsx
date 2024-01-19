/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
const HomeCard = ({ index, title, description, link, src }) => {
  return (
    <div className=" w-full flex max-h-screen">
      {index % 2 === 0 ? (
        <>
          <div className="w-[50%]">
            <h1>{title}</h1>
            <h3>{description}</h3>

            <Link to={`/${link}`}>
              <button className="bg-purple-700 text-white text-md rounded-md p-2">
                {link}
              </button>
            </Link>
          </div>
          <div className="w-[50%]">
            <img
              src={src}
              alt="someimg"
              className="h-[35rem] w-[35rem] object-contain"
            />
          </div>
        </>
      ) : (
        <>
          {" "}
          <div className="w-[50%]">
            <img
              src={src}
              alt="someimg"
              className="h-[35rem] w-[35rem] object-contain"
            />
          </div>
          <div className="w-[50%]">
            <h1>{title}</h1>
            <h3>{description}</h3>
            <Link to={`/${link}`}>
              <button className="bg-purple-700 text-white text-md rounded-md p-2">
                {link}
              </button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default HomeCard;
