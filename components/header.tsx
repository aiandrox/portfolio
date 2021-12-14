import { siteTitle } from "../components/layout";
import Link from "next/link";
import { Link as Scroll } from "react-scroll";

type headerProps = {
  isActive: boolean;
};

export default function Header({ isActive }: headerProps) {
  return (
    <nav
      id="header"
      className={
        isActive
          ? "fixed w-full z-30 top-0 text-black bg-white shadow"
          : "fixed w-full z-30 top-0 text-white"
      }
    >
      <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
        <div className="pl-4 flex items-center">
          {isActive ? (
            <a
              className="toggleColour no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
              href="#"
            >
              {siteTitle}
            </a>
          ) : (
            <></>
          )}
        </div>
        <div className="block lg:hidden pr-4">
          <button
            id="nav-toggle"
            className="flex items-center p-1 text-pink-800 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
          >
            <svg
              className="fill-current h-6 w-6"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20"
          id="nav-content"
        >
          <ul className="list-reset lg:flex justify-end flex-1 items-center">
            <li className="mr-3">
              <Scroll
                to="profile"
                smooth={true}
                duration={600}
                offset={-50}
                className="inline-block py-2 px-4 text-black font-bold no-underline hover:text-gray-800 hover:cursor-pointer"
              >
                Profile
              </Scroll>
            </li>
            <li className="mr-3">
              <Scroll
                to="apps"
                smooth={true}
                duration={600}
                offset={-50}
                className="inline-block py-2 px-4 text-black no-underline hover:text-gray-800 hover:cursor-pointer"
              >
                Apps
              </Scroll>
            </li>
            <li className="mr-3">
              <Scroll
                to="history"
                smooth={true}
                duration={600}
                offset={-50}
                className="inline-block py-2 px-4 text-black no-underline hover:text-gray-800 hover:cursor-pointer"
              >
                History
              </Scroll>
            </li>
          </ul>
          <Link href="https://blog.aiandrox.com">
            <div
              className={
                isActive
                  ? "mx-auto lg:mx-0 focus:outline-none focus:shadow-outline transform transition hover:scale-105 hover:cursor-pointer duration-300 ease-in-out font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 gradient text-white"
                  : "mx-auto lg:mx-0 focus:outline-none focus:shadow-outline transform transition hover:scale-105 hover:cursor-pointer duration-300 ease-in-out bg-white text-gray-800 font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75"
              }
            >
              Blog
            </div>
          </Link>
        </div>
      </div>
      <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
    </nav>
  );
}
