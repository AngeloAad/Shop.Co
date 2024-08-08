import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
import Tshirts from "../pages/TshirtsPage";

export default function Example() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="inline-flex font-archivo">
          Shop
          <ChevronDownIcon aria-hidden="true" className="h-6 w-6" />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-24 origin-top-right rounded-md bg-white shadow-lg 
        ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform 
        data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1">
          <MenuItem>
            <button>
              <Link
                to="/tshirts"
                className="block px-4 py-2 text-sm font-archivo data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
              >
                T-shirts
              </Link>
            </button>
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>
  );
}
