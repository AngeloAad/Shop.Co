import React, { useState } from "react";
import { navLinks } from "../constants";
import SideBar from "./SideBar";
import Example from "./Example";
import { shoppingCart, profile, search, hamburger } from "../assets/icons";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <nav className="padding-x padding-t">
        <div className="flex justify-between items-center">
          <button onClick={toggleMenu}>
            <img
              src={hamburger}
              alt="hamburger"
              className="lg:hidden block pr-4"
            />
          </button>
          <button>
            <Link to="/">
              <p className="flex font-montserrat font-black sm:text-[32px] text-[25.2px] justify-start">
                SHOP.CO
              </p>
            </Link>
          </button>

          <div className="flex flex-1 items-center">
            <ul className="flex justify-start items-center gap-6 max-lg:hidden">
            <span className="ml-10"><Example /></span>
              {navLinks.map((item, index) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className={`font-archivo  ${
                      index === 0 ? "-ml-2" : ""
                    }`}
                  >
        
                    <span>{item.label}</span>
                    {item.icon && (
                      <item.icon aria-hidden="true" className="h-6 w-6 ml-1" />
                    )}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="xl:w-[490px] hidden xl:flex justify-start ml-10 w-full rounded-[62px] 
            bg-[#F0F0F0] p-g text-[16px] leading-none py-4 items-center font-montserrat">
                <img src={search} alt="search" className="pl-4 pr-4" />
                <input className="border-none outline-none bg-[#F0F0F0]" placeholder="Search for products..."/>
            </div>

            <div className="flex flex-1 justify-end">
              <button className="flex">
                <img
                  src={search}
                  alt="search"
                  className="pl-4 pr-4 xl:hidden block"
                />
                <button>
                  <Link to="/cart">
                    <img src={shoppingCart} alt="shoppingCart" className="" />
                  </Link>
                </button>
                <img src={profile} alt="profile" className="flex pl-[12px]" />
              </button>
            </div>
          </div>
        </div>
      </nav>
      {isMenuOpen && <SideBar toggleMenu={toggleMenu} />}
    </header>
  );
};

export default NavBar;
