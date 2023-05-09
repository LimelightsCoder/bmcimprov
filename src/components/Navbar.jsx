import { useState } from "react";
import { HiMenu, HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import logo from "/src/assets/bmcalt 1.svg";

const Navbar = ({ items }) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const closeMenu = () => {
    setToggleMenu(false);
  };

  return (
    <nav className="fixed w-full h-20 flex-row md:justify-between items-center p-4 py-10" style={{ zIndex: 999 }}>
      <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">
        <div className="flex justify-start items-center">
          <a href="/">
            <img
              src={logo}
              alt="logo"
              className="cursor-pointer flex"
              style={{ width: 100, height: 100 }}
            />
          </a>
        </div>

        <div className="flex justify-end items-center">
          {toggleMenu ? (
            <AiOutlineClose
              fontSize={28}
              className="text-black cursor-pointer"
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <HiMenuAlt4
              fontSize={28}
              className="text-black cursor-pointer"
              onClick={() => setToggleMenu(true)}
            />
          )}
          {toggleMenu && (
            <ul
              className="z-100 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl list-none
                            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in text-right"
            >
              <li className="text-xl w-full my-2">
                <AiOutlineClose onClick={() => setToggleMenu(false)} />
              </li>
              {items.map((item, index) => (
                <Link
                  key={index}
                  to={item.Link}
                  className="my-2 text-lg py-2 px-7 mx-4"
                  onClick={closeMenu}
                >
                  {item.title}
                </Link>
              ))}
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
