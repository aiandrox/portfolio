import { NextPage } from "next";
import { useState } from "react";
import { siteTitle } from "../components/layout";
import Link from "next/link";
import { Link as Scroll } from "react-scroll";

type Props = {
  isHeightOver: boolean;
};

const Header: NextPage<Props> = ({ isHeightOver }: Props) => {
  const [openedHeader, setOpenedHeader] = useState(false);
  const toggleOpenedHeader = () => {
    setOpenedHeader(!openedHeader);
  };

  const menuItems = [
    {
      path: "profile",
      label: "Profile",
    },
    {
      path: "works",
      label: "Works",
    },
    {
      path: "career",
      label: "Career",
    },
  ];

  return (
    <div
      className={
        isHeightOver && !openedHeader
          ? "text-white"
          : "text-black bg-white shadow"
      }
    >
      <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
        <div className="pl-4 flex items-center">
          {isHeightOver ? (
            <></>
          ) : (
            <a className="no-underline hover:no-underline hover:cursor-pointer font-bold text-2xl text-4xl md:block hidden">
              {siteTitle}
            </a>
          )}
        </div>
        <div className="block lg:hidden pr-4">
          <button
            onClick={toggleOpenedHeader}
            className="flex items-center p-1 text-pink-800 transform transition"
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
          className={
            openedHeader
              ? "w-full flex-grow lg:flex lg:items-center lg:w-auto mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20"
              : "w-full flex-grow lg:flex lg:items-center lg:w-auto mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20 hidden"
          }
          id="nav-content"
        >
          <ul className="list-reset lg:flex justify-end flex-1 items-center mr-3">
            {menuItems.map(({ path, label }) => (
              <li key={path}>
                <Scroll
                  to={path}
                  smooth={true}
                  spy={true}
                  duration={600}
                  offset={-50}
                  className="inline-block py-2 px-4 text-black no-underline hover:text-gray-800 hover:cursor-pointer"
                  activeClass="inline-block py-2 px-4 text-black font-bold no-underline hover:text-gray-800 hover:cursor-pointer"
                >
                  {label}
                </Scroll>
              </li>
            ))}
          </ul>
          <Link href="https://blog.aiandrox.com">
            <div
              className={
                isHeightOver && !openedHeader
                  ? "mx-auto lg:mx-0 focus:outline-none focus:shadow-outline transform transition hover:scale-105 hover:cursor-pointer duration-300 ease-in-out bg-white text-gray-800 font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75"
                  : "mx-auto lg:mx-0 focus:outline-none focus:shadow-outline transform transition hover:scale-105 hover:cursor-pointer duration-300 ease-in-out font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 gradient text-white"
              }
            >
              Blog
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
