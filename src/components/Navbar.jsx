import { useState, useEffect, useRef, useContext } from "react";
import { IoMenu } from "react-icons/io5";
import { ImCross } from "react-icons/im";
import { AuthContext } from "../provider/AuthProvider";
import { Link } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import ThemeController from "./ThemeController";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const [imageMenu, setImageMenu] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setOpen(!open);
  };
  const toggleImage = () => {
    setImageMenu(!imageMenu);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <div className='navbar bg-base-100 dark:bg-blue-950'>
        <div className='navbar-start'>
          <div className='dropdown' ref={dropdownRef}>
            <div
              onClick={toggleDropdown}
              tabIndex={0}
              role='button'
              className='btn btn-ghost lg:hidden'>
              {open ? <ImCross /> : <IoMenu />}
            </div>
            {open && (
              <ul className='menu menu-sm dropdown-content mt-3 z-50 p-2 shadow bg-base-100 rounded-box w-52'>
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Parent</a>
                  <ul className='p-2'>
                    <li>
                      <a>Submenu 1</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a>Item 3</a>
                </li>
              </ul>
            )}
          </div>
          <Link to="/" className='btn btn-ghost text-xl'>daisyUI</Link>
        </div>

        <div className='navbar-center hidden lg:flex'>
          <ul className='menu menu-horizontal px-1'>
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <details>
                <summary>Parent</summary>
                <ul className='p-2'>
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
              <div className='navbar-end'>
                  <ThemeController></ThemeController>
          {user && (
            <div className='dropdown dropdown-end'>
              <div
                onClick={toggleImage}
                tabIndex={0}
                role='button'
                className='btn btn-ghost btn-circle avatar'>
                              <div className='w-10 rounded-full'>
                                   <a
                data-tooltip-id='my-tooltip'
                data-tooltip-content={
                  user?.displayName || "User Name not Available"
                }
                data-tooltip-place='bottom'
                className=' size-14 mr-6'>
                <Tooltip
                  id='my-tooltip'
                  style={{
                    backgroundColor: "white", 
                    color: "black", 
                    border: "1px solid black", 
                    zIndex: 100,
                    fontWeight: "bold",
                  }}
                />
                  <img
                    referrerPolicy='no-referrer'
                    alt='User Profile Image'
                    src={
                      user?.photoURL || "https://i.ibb.co/9cZ7vD2/user-icon.jpg"
                    }
                                      />
                                      </a>
                </div>
              </div>
              {imageMenu && (
                <ul className='mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52'>
                  <li>
                    <a>Profile </a>
                  </li>
                  <li>
                    <a>Settings</a>
                  </li>
                  <li>
                    <a>Logout</a>
                  </li>
                </ul>
              )}
            </div>
          )}
          {!user && <Link to='/login'>Login</Link>}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
