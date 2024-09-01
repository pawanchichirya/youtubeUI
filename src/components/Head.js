import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col m-4 p-4 shadow-lg">
      <div className="flex">
        <img
          onClick={toggleMenuHandler}
          className="h-9 col-span-1 cursor-pointer"
          alt="hamburger menu"
          src="https://static.vecteezy.com/system/resources/previews/021/190/402/original/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg"
        ></img>
        <img
          className="h-9 "
          alt="logo"
          src="https://logodownload.org/wp-content/uploads/2014/10/youtube-logo-9.png"
        ></img>
      </div>
      <div className="col-span-10">
        <input
          type="text"
          className="w-1/2 border border-gray-300 rounded-l-full p-2"
        />
        <button className="border border-gray 300 rounded-r-full p-2 bg-gray-200">
          Search
        </button>
      </div>
      <div className="col-span-1">
        <img
          className="h-9"
          alt="user"
          src="https://static.vecteezy.com/system/resources/previews/008/442/086/non_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg"
        />
      </div>
    </div>
  );
};

export default Head;
