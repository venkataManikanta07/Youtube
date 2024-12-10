import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUserCircle } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { IoIosNotifications } from "react-icons/io";
import { FaVideo } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUB_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searcSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  useEffect(() => {
    const handleScroll = () => {
      setShowSuggestion(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUB_SEARCH_API + searchQuery);
    const json = await data.json();
    console.log(json);
    setSuggestions(json[1]);
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };
  console.log(searchQuery);
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col shadow-md p-2 my-1 w-full fixed top-0 h-[8vh] z-10">
      <div className="col-span-2 flex align-middle ">
        <GiHamburgerMenu
          onClick={toggleMenuHandler}
          size={30}
          className="mt-1 mr-3"
        />
        <img
          className="h-9 cursor-pointer"
          alt="Youtube Logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png"
        />
      </div>
      <div className="col-span-9 flex flex-col">
        <div className="flex">
          <input
            type="text"
            className="w-3/4 h-9 border border-gray-500 rounded-l-full p-2"
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestion(true)}
            onBlur={() => setShowSuggestion(false)}
          />
          <button className="w-12 h-9 border border-gray-700 rounded-r-full flex items-center justify-center">
            <span>
              <IoSearch size={26} />
            </span>
          </button>
        </div>
        {showSuggestion && (
          <div className="bg-white border rounded-md m-2 w-3/4">
            {suggestions.map((suggestion) => (
              <ul key={suggestion}>
                <li className="flex items-center space-x-3 space-y-1 shadow-md px-1 py-2 hover:bg-gray-200">
                  {" "}
                  <span>
                    {" "}
                    <IoSearch />{" "}
                  </span>{" "}
                  <span>{suggestion}</span>
                </li>
              </ul>
            ))}
          </div>
        )}
      </div>

      <div className="col-span-1 flex justify-around align-middle mx-2">
        <FaVideo size={30} />
        <IoIosNotifications size={30} />
        <FaUserCircle size={30} />
      </div>
    </div>
  );
};

export default Head;
