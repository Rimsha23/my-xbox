import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../button";
const Navbar = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);



  return (

    <>

      <nav className="bg-black w-full border-gray-200 dark:bg-gray-900">
        <div className="w-full flex flex-row flex-wrap items-left justify-between mx-auto pb-4 pt-1 pl-0">
          <div className="w-full mt-0 flex flex-row h-8">
            <div className="w-32 flex  items-left justify-left  p-0  ml-12 ">
              <Link to={'/home'}>
                <h2 className="text-2xl text-white mt-6">XBOX ONE</h2>
              </Link>
            </div>

            <form>
              <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
              <div class="relative">
                <div className="flex flex-row ml-32">
                  <input type="search" id="default-search" className="block lg:w-80  h-8 mt-6 lg:ml-72 shadow-md shadow-white border border-gray-300  p-4 pl-20 text-sm text-gray-900 border border-gray-300 hover:border-black sm:w-36 sm:ml-16 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
                  <Button variant='gray' type="submit" className="text-black mt-6 ml-2 focus:ring-4  font-medium shadow-lg shadow-white p-1 hover:text-xs rounded-lg text-sm px-2 py-1 h-8 ">Search</Button>
                </div>
              </div>
            </form>
<button href='#'>
<svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8 text-white rotate-180 mt-7 ml-8 hover:text-gray-500 "
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
        d="M10 15v4a1 1 0 001 1h2a1 1 0 001-1v-4M5 8h14l1 8H4l1-8z"
      />
      </svg>
</button>

<label class="relative inline-flex items-center mb-5 cursor-pointer ml-8">
  <input type="checkbox" value="" class="sr-only peer"/>
  <div class=" mt-16  w-9 h-5 bg-gray-200 peer-focus:outline-none  peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-1.8px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
  <span class="ml-3 mt-16 text-sm font-medium text-white" onClick={props.toggleMode}>Dark Mode</span>
</label>

          </div>
          <button data-collapse-toggle="navbar-default" onClick={() => setIsMenuOpen(!isMenuOpen)} type="button" class="inline-flex items-center p-2 pt-8 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:visible lg:invisible hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded={isMenuOpen}>
            <span class="sr-only">Open main menu</span>
            <svg class="w-5 h-5" aria-hidden="true" xmlns="https://www.w3.org/TR/SVG2/" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
          <div className={`md:block w-full  md:w-auto  ${isMenuOpen ? "block" : "hidden"}`} id="navbar-default">
            <ul className="font-medium flex flex-col p-3 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0  md:border-0 md:bg-black dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a href="#" className="block py-2 pl-2 pr-1  hover:text-sm md:text-gray-300 md:hover:text-sm md:bg-black hover:shadow-white hover:shadow-lg rounded md:bg-transparent  hover:text-white hover:bg-black md:pt-3 md:pb-3  md:pr-2 dark:text-white md:dark:text-blue-500" aria-current="page">Game Pass</a>
              </li>
              <li>
                <a href="#" className="block py-2 pl-2 pr-1 text-gray-900 rounded  text-base hover:text-sm hover:shadow-lg hover:shadow-white  hover:bg-black md:hover:bg-transparent md:border-0 md:text-gray-300 hover:text-white md:pt-3 md:pb-3  md:pr-2 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Games</a>
              </li>
              <li>
                <a href="#" className="block py-2 pl-2 pr-1 text-gray-900 rounded text-base hover:text-sm hover:shadow-lg hover:shadow-white hover:bg-black md:hover:bg-transparent md:border-0 md:text-gray-300 hover:text-white md:pt-3 md:pb-3  md:pr-2 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Devices</a>
              </li>
              <li>
                <a href="#" className="block py-2 pl-2 pr-1 text-gray-900 rounded text-base hover:text-sm hover:shadow-lg hover:shadow-white  hover:bg-black md:hover:bg-transparent md:border-0 md:text-gray-300 hover:text-white md:pt-3 md:pb-3 md: pr-2 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Play</a>
              </li>
              <li>
                <a href="#" className="block py-2 pl-2 pr-1 text-gray-900 rounded text-base hover:text-sm hover:shadow-lg hover:shadow-white hover:bg-black md:hover:bg-transparent md:border-0 md:text-gray-300 hover:text-white md:pt-3 md:pb-3  md:pr-2 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Community</a>
              </li>
              <li>
                <Link to={'/dashboard'} className="block py-2 pl-2 pr-1 text-gray-900 rounded text-base hover:text-sm hover:shadow-lg hover:shadow-white hover:bg-black md:hover:bg-transparent md:border-0 md:text-gray-300 hover:text-white  md:pt-3 md:pb-2  md:pr-2 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"> Dashboard</Link>
              </li>
              <li>
                <a href="#" className="block py-2 pl-2 pr-1 text-gray-900 rounded text-base hover:text-sm hover:shadow-lg hover:shadow-white hover:bg-black md:hover:bg-transparent md:border-0 md:text-gray-300 hover:text-white  md:pt-3 md:pb-2  md:pr-2 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">More</a>
              </li>
              <li>
                <Link to={'/login'}>
                  <Button className='shadow-2xl hover:text-gray-500 shadow-white w-18 h-22 font-bold py-2 px-4 lg:ml-80 sm:ml-0 hover:text-xs rounded focus:outline-none focus:shadow-outline'
                    variant='white'
                    size='small'
                  >
                    Login
                  </Button>
                </Link>
              </li>
              <li>
                <Link to={'/register'}>
                  <Button className='shadow-2xl hover:text-gray-500 shadow-white w-18 h-22 font-bold py-2 px-2  rounded focus:outline-none focus:shadow-outline'
                    variant='white'
                    size='small'
                  >
                    Register
                  </Button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>





    </>
  );
}
export default Navbar;