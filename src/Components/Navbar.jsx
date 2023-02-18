import React from "react";
import { AiOutlineSearch } from "react-icons/ai"
import { Link } from "react-router-dom";
import { withNavbar } from "../Contexts/withProvider";

const Navbar = ({ setSearchParams, setSearch }) => {
  return (
    <div className="p-4 flex justify-between items-center w-full h-16 border-b-2 fixed z-10 bg-white">
      <div className="w-[35%] flex items-center">
        <img
          src="https://static8.depositphotos.com/1014550/801/i/950/depositphotos_8015914-stock-photo-news-word-on-laundry-hook.jpg"
          className="h-10"
        />
        <ul className="flex w-[40%] justify-between ml-12 font-serif text-sm">
          <Link to="/" className="cursor-pointer hover:underline">
            Home
          </Link>
          <Link to="/news/weather" className="cursor-pointer hover:underline">
            Weather
          </Link>
          <Link to="/news/sports" className="cursor-pointer hover:underline">
            Sports
          </Link>
        </ul>
      </div>
      <div className="flex items-center p-2 bg-gray-50 rounded-sm shadow-md shadow-gray-300 hover:shadow-none">
        <input
          type="text"
          className="outline-none px-2 bg-gray-50 font-serif"
          onChange={(e) =>
            setSearchParams({ q: e.target.value }, { replace: false })
          }
          placeholder="Search"
        />
        <AiOutlineSearch
          className="cursor-pointer"
          onClick={() => {
            setSearch(true);
          }}
        />
      </div>
    </div>
  );
};

export default withNavbar(Navbar);
