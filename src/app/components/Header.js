import React from "react";
import Link from "next/link";
import { AiFillHome } from "react-icons/ai";
import MenuItem from "./MenuItem";
import { BsInfoSquareFill } from "react-icons/bs";
import DarkMode from "./DarkMode";

const Header = () => {
  return (
    <>
      <div className="flex justify-between mx-2 max-w-6xl sm:mx-auto items-center py-6">
        <div className="flex">
          <MenuItem title={"HOME"} address={"/"} Icon={AiFillHome} />
          <MenuItem
            title={"ABOUT"}
            address={"/about"}
            Icon={BsInfoSquareFill}
          />
        </div>
        <div className="flex flex-item-center space-x-5">
          <DarkMode />
          <Link href="/">
            <h2 className="text-2xl">
              <span className="font-bold bg-amber-500 py-1 px-2 rounded-lg">
                IMDB
              </span>
              <span className="text-xl hidden sm-inline">Clone</span>
            </h2>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
