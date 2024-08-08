import { Link } from "react-router-dom";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

const BreadCrumb = () => {
  return (
    <div className="flex items-center sm:pt-6 pt-4">
      <ul className=" flex items-center sm:text-[16px] text-[14px] leading-none font-montserrat text-slate-gray">
        <Link
          to="/"
          className="cursor-pointer">
          Home
        </Link>
        <ChevronRightIcon aria-hidden="true" className="w-4 h-4 mx-2" />
        <Link
          to="/"
          className="cursor-pointer">
          Shop
        </Link>
        <ChevronRightIcon aria-hidden="true" className="w-4 h-4 mx-2" />
        <Link
          to="/tshirts"
          className="cursor-pointer text-black font-medium">
          T-shirts
        </Link>
      </ul>
    </div>
  );
}

export default BreadCrumb;