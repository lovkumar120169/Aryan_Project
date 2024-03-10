import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { IoMenu } from "react-icons/io5";

const Header = () => {
  let Links = [
    { name: "Home", link: "/" },
    { name: "About", link: "about" },
    { name: "Why Us", link: "whyus" },
    { name: "Order", link: "order" },
    { name: "Contact", link: "contact" },
  ];

  const [open, setOpen] = useState(false);

  return (
    <>
      <header className='shadow-md w-full sticky top-0 left-0 z-50'>
        <nav className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
          <div
            className="cursor-pointer flex items-center font-[Poppins] 
      text-gray-800"
          >
            <Link to="/" className="text-3xl text-indigo-600 mr-1 pt-2">
              <img src={logo} alt="Logo" className="h-10" />
            </Link>
          </div>

          <div
            onClick={() => setOpen(!open)}
            className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
          >
            <IoMenu />
          </div>
          <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
            {Links.map((d, i) => (
              <li>
                <NavLink
                  to={d.link}
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-red-600" : "text-gray-500"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-red-700 lg:p-0 lg:mx-4 sm:m-0.5 md:m-0.5 md:text-base text-lg lg:font-semibold`
                  }
                  onClick={() => setOpen(!open)}
                >
                  {d.name}
                </NavLink>
              </li>
            ))}
          </ul>
          <Link
            to="login"
            className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none absolute top-6 right-16 md:static"
          >
            Log In / Register
          </Link>
        </nav>
      </header>

      
    </>
  );
};

export default Header;
