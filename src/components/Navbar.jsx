import { useState, useEffect, useRef, useContext } from "react";
import { IoMenu } from "react-icons/io5";
import { ImCross } from "react-icons/im";
import { AuthContext } from "../provider/AuthProvider";
import { Link, NavLink } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import ThemeController from "./ThemeController";

const Navbar = () => {
   const [isOpen, setIsOpen] = useState(false);
  const { user,logOut } = useContext(AuthContext);
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
   const allLink = (
     <>
       <NavLink
         to='/'
         className={({ isActive }) =>
           isActive
             ? "text-lg mr-4 hover:bg-red-400  text-gray-900 dark:text-gray-300 underline underline-offset-8  font-semibold h-full px-5 py-3 border border-yellow-600 "
             : "text-gray-900 dark:text-gray-300 text-lg mr-4 hover:underline hover:underline-offset-8   rounded-lg font-normal px-5 py-3"
         }>
         <span>Home</span>
       </NavLink>

       <NavLink
         to='/NeedVolunteerPage'
         className={({ isActive }) =>
           isActive
             ? "text-lg mr-4  text-gray-900 dark:text-gray-300 underline underline-offset-8  font-semibold    px-5 py-3"
             : "text-gray-900 dark:text-gray-300 text-lg mr-4 hover:underline hover:underline-offset-8    rounded-lg font-normal px-5 py-3"
         }>
         <span>Need Volunteer</span>
       </NavLink>
       <div className='relative px-5 py-3  hover:underline hover:underline-offset-8'>
         <button
           type='button'
           className='text-lg  mr-4 text-gray-900 dark:text-gray-300 hover:underline  rounded-lg font-normal '
           onClick={() => setIsOpen(!isOpen)}>
           My Profile
         </button>
         {isOpen && (
           <div className='absolute z-10 mt-7 w-48 rounded-md shadow-lg bg-white '>
             <div
               className='py-1'
               role='menu'
               aria-orientation='vertical'
               aria-labelledby='options-menu'>
               <NavLink
                 to='/addVolunteer'
                 className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                 role='menuitem'>
                 Add Volunteer Post
               </NavLink>
               <NavLink
                 to='/manageMyPost'
                 className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                 role='menuitem'>
                 Manage My Post
               </NavLink>
             </div>
           </div>
         )}
       </div>
     </>
   );
  
  
 
  return (
    <div>
      <div className='navbar bg-base-100 dark:bg-[#24292F]'>
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
                {allLink}
              </ul>
            )}
          </div>
          <Link to='/' className='btn btn-ghost text-xl'>
            daisyUI
          </Link>
        </div>

        <div className='navbar-center hidden lg:flex'>
          <ul className='menu menu-horizontal px-1 border border-red-600'>
            {allLink}
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
                        user?.photoURL ||
                        "https://i.ibb.co/9cZ7vD2/user-icon.jpg"
                      }
                    />
                  </a>
                </div>
              </div>
              {imageMenu && (
                <ul className='mt-3 z-50 p-2 shadow menu menu-sm dropdown-content bg-transparent '>
                  <li>
                    <button className='text-red-600' onClick={logOut}>
                      Logout
                    </button>
                  </li>
                </ul>
              )}
              <span></span>
            </div>
          )}
          {!user && <Link to='/login'>Login</Link>}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
