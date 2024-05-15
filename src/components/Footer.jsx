import { FaFacebook, FaInstagramSquare, FaLinkedin, } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";

const Footer = () => {
  return (
    <div className='bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-300 '>
      <div className='flex justify-between items-center w-full  '>
        <footer className='w-full '>
          <div className='container flex flex-col flex-wrap px-5 py-24 mx-auto md:items-center lg:items-start justify-between md:flex-row md:flex-no-wrap '>
            <div className='flex-shrink-0 w-64 mx-auto pl-5 md:pl-0  text-center md:mx-0 md:text-left '>
              <a className='flex items-center justify-center font-medium title-font md:justify-start'>
                <p className='text-2xl'>Volunteer Nexus</p>
              </a>
              <p className='mt-2 text-sm  '>
                Connect and Serve as Volunteer - Where Passion Meets Purpose
              </p>
              <div className='mt-4'>
                <span className='inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start'>
                  <a className='  cursor-pointer   '>
                    <FaLinkedin />
                  </a>
                  <a className='ml-3  cursor-pointer '>
                    <FaFacebook />
                  </a>
                  <a className='ml-3  cursor-pointer '>
                    <FaInstagramSquare />
                  </a>
                  <a className='ml-3  text-gray-600 cursor-pointer hover:text-gray-700'>
                    <IoLogoYoutube />
                  </a>
                </span>
              </div>
            </div>
            <div className='flex flex-wrap flex-grow mt-10 -mb-10 text-center md:pl-20 md:mt-0 md:text-left'>
              <div className='w-full px-4 lg:w-1/4 md:w-1/2'>
                <h2 className='mb-3 text-sm font-medium tracking-widest  uppercase title-font underline underline-offset-4'>
                  About
                </h2>
                <nav className='mb-10 list-none'>
                  <li className='mt-3'>
                    <a className='  cursor-pointer  '>Company</a>
                  </li>
                  <li className='mt-3'>
                    <a className='  cursor-pointer  '>Careers</a>
                  </li>
                  <li className='mt-3'>
                    <a className='  cursor-pointer  '>Blog</a>
                  </li>
                </nav>
              </div>
              <div className='w-full px-4 lg:w-1/4 md:w-1/2'>
                <h2 className='mb-3 text-sm font-medium tracking-widest  uppercase title-font underline underline-offset-4'>
                  Support
                </h2>
                <nav className='mb-10 list-none'>
                  <li className='mt-3'>
                    <a className='  cursor-pointer  '>Contact Support</a>
                  </li>
                  <li className='mt-3'>
                    <a className='  cursor-pointer  '>Help Resources</a>
                  </li>
                  <li className='mt-3'>
                    <a className='  cursor-pointer  '>Release Updates</a>
                  </li>
                </nav>
              </div>
              <div className='w-full px-4 lg:w-1/4 md:w-1/2'>
                <h2 className='mb-3 text-sm font-medium tracking-widest uppercase title-font underline underline-offset-4'>
                  Platform
                </h2>
                <nav className='mb-10 list-none'>
                  <li className='mt-3'>
                    <a className='  cursor-pointer  '>Terms &amp; Privacy</a>
                  </li>
                  <li className='mt-3'>
                    <a className='  cursor-pointer  '>Pricing</a>
                  </li>
                  <li className='mt-3'>
                    <a className='  cursor-pointer  '>FAQ</a>
                  </li>
                </nav>
              </div>
              <div className='w-full px-4 lg:w-1/4 md:w-1/2'>
                <h2 className='mb-3 text-sm font-medium tracking-widest uppercase title-font underline underline-offset-4'>
                  Contact Information
                </h2>
                <nav className='mb-10 list-none '>
                  <p className='mt-3'>
                    <span className='  cursor-default  '>Dhaka Branch</span>
                  </p>
                  <li className='mt-3'>
                    <a className='  cursor-default  '>
                      Sector-13, Road-9, Uttara
                    </a>
                  </li>
                  <li className='mt-3'>
                    <a className='cursor-default  '>+880 16312-35014</a>
                  </li>
                </nav>
              </div>
            </div>
          </div>
          <div className='bg-gray-100 dark:bg-gray-950 text-gray-900 dark:text-gray-300'>
            <div className='container px-5 py-4 mx-auto'>
              <p className='text-sm  capitalize xl:text-center'>
                © 2024 All rights reserved to -{" "}
                <span className='italic'>Volunteer Nexus</span>
              </p>
              <p className='text-sm capitalize xl:text-center '>
                Developed By - Nihan Shahriar
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
