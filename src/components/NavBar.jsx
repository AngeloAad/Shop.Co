import React from 'react';
import { navLinks } from '../constants';
import { shoppingCart, profile, search, hamburger } from '../assets/icons';

const NavBar = () => {
  return (
    <nav className="padding-x padding-t">
      <div className="flex justify-between items-center">
        <button>
          <img src={hamburger} alt="hamburger" 
          className="lg:hidden block pr-4" />
        </button>
        <p className="flex font-montserrat font-black sm:text-[32px] text-[25.2px] justify-start">
          SHOP.CO
        </p>

        <div className="flex flex-1 items-center">
          <ul className="flex justify-start items-center gap-6
          max-lg:hidden">
            {navLinks.map((item, index) => (
              <li key={item.label}>
                <a 
                  href={item.href} 
                  className={`font-archivo text-slate-gray ${index === 0 ? 'ml-10' : ''}`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="xl:w-[495px] xl:block hidden">
            <button className="flex justify-start ml-10 w-full rounded-[62px] bg-[#F0F0F0] 
            cursor-pointer p-g text-[16px] leading-none py-4 items-center">
              <img src={search} alt="search" 
              className="pl-4 pr-4"/>
              <p className="font-montserrat">Search for products...</p>
            </button>
          </div>

          <div className="flex flex-1 justify-end">
            <button className="flex ">
                <img src={search} alt="search" 
                className="pl-4 pr-4 xl:hidden block"/>
                <img src={shoppingCart} alt="shoppingCart" 
                className=""/>
                <img src={profile} alt="profile"
                className="flex pl-[12px]" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
