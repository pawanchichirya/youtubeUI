import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const [searchedQuery, setSearchedQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const dispatch = useDispatch();

  const searchedCache = useSelector((store) => store.search);

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  useEffect(() => {
    //debouncing for
    const timer = setTimeout(() => {
      if (searchedCache[searchedQuery]) {
        setSuggestions(searchedCache[searchedQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchedQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchedQuery);
    console.log(data);
    const json = await data.json();
    setSuggestions(json[1]);

    dispatch(
      cacheResults({
        [searchedQuery]: json[1],
      })
    );
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
        <div>
          <input
            type="text"
            className="w-1/2 border border-gray-300 rounded-l-full p-2"
            value={searchedQuery}
            onChange={(e) => setSearchedQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="border border-gray 300 rounded-r-full p-2 bg-gray-200">
            Search
          </button>
        </div>
        {showSuggestions && searchedQuery.length > 0 && (
          <div className="fixed bg-white py-2 px-2 w-[37rem] shadow-lg rounded-lg border border-gray-100">
            <ul>
              {suggestions.map((suggestion, index) => (
                <li
                  className="shadow-sm py-2 px-3 hover:bg-gray-100"
                  key={index}
                >
                  {suggestion}
                </li>
              ))}
            </ul>
          </div>
        )}
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
