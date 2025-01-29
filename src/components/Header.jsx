import React, { useState } from "react";
import { RxCaretDown } from "react-icons/rx";
import { FaSearch } from "react-icons/fa";
import { BiSolidOffer } from "react-icons/bi";

export default function Header() {
  const [toggle, setToggle] = useState(false);
  const ShowSideMenu = () => {
    setToggle(true);
  };
  const HideSideMenu = () => {
    setToggle(false);
  };

  return (
    <>
      <div
        onClick={HideSideMenu}
        className="black-overlay w-full h-full fixed duration-500 "
        style={{
          opacity: toggle ? 1 : 0,
          visibility: toggle ? "visible" : "hidden",
        }}
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="w-[500px] bg-white h-full absolute duration-[400ms]"
          style={{
            left: toggle ? "0%" : "-100%",
          }}
        ></div>
      </div>
      <header className="p-2 shadow-xl text-[#686b78] w-full h-[108px] sticky top-0 bg-white z-[999]">
        <div className="max-w-[1400px] max-auto flex items-center">
          <div className="w-[100px] ">
            <img src="images/logo.png" className="w-full" />
          </div>
          <div className="">
            <span className="font-bold border-b-[3px] ">Jaipur</span>,
            Rajasthan, India
            <RxCaretDown
              onClick={ShowSideMenu}
              fontSize={25}
              className="font-bold inline text-[0.9rem] text-[#fc8019] cursor-pointer"
            />
          </div>
          <nav className="flex list-none gap-5 ml-auto font-semibold text-[18px]">
            <li className="flex hover:text-[#fc8019] items-center gap-2 cursor-pointer">
              <FaSearch />
              Search
            </li>
            <li className="flex hover:text-[#fc8019] items-center gap-2 cursor-pointer">
              <BiSolidOffer />
              Offers <sup>New</sup>
            </li>
            <li className="flex hover:text-[#fc8019] items-center gap-2 cursor-pointer">
              Help
            </li>
            <li className="flex hover:text-[#fc8019] items-center gap-2 cursor-pointer">
              Sign In
            </li>
            <li className="flex hover:text-[#fc8019] items-center gap-2 cursor-pointer">
              Cart
            </li>
          </nav>
        </div>
      </header>
    </>
  );
}
