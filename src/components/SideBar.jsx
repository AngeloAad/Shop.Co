import React from "react";
import { Link } from "react-router-dom";
import Example from "./Example";
import { navLinks } from "../constants";
import { close } from "../assets/icons";

const SideBar = ({ toggleMenu }) => {
  return (
    <aside
      className="fixed top-0 left-0 h-screen w-[220px] bg-white
      border-r-[3px] shadow-3xl z-30 transform transition-transform duration-[2000ms] 
      ease-in-out translate-x-0 "
    >
      <nav className="h-full flex flex-col bg-white">
        <div
          className="p-2 flex justify-between items-center border-[2px] border-b-black
        z-20 shadow-lg"
        >
          <Link to="/">
            <button>
              <p
                className="flex font-montserrat font-black 
            text-[22px] justify-start"
              >
                SHOP.CO
              </p>
            </button>
          </Link>
          <button onClick={toggleMenu}>
            <img src={close} alt="close" className="filter-invert" />
          </button>
        </div>

        <ul
          className="flex flex-col px-4 gap-4 py-10 space-y-4
        font-montserrat font-medium leading-normal justify-center
        items-center"
        >
          <Example />
          {navLinks.map((item) => (
            <li key={item.label}>
              <Link
                to={item.href}
                className="font-montserrat leading-normal text-black"
                onClick={toggleMenu}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default SideBar;
