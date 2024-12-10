import React from 'react'
import Link from 'next/link'

const SearchBar = () => {
  return (
     <div className="w-full bg-subprimary">
      <div className="max-w-7xl mx-auto flex flex-wrapitems-center justify-between px-4 py-3">

        <div className="inline-flex flex-row justify-center items-center">

          <div className="hidden lg:block self-center">
            <span className="text-white mr-2 text-xl">I'm looking for </span>
          </div>

          <div className="flex-grow relative flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="absolute w-5 h-5 top-2.5 left-2.5 text-slate-600"
              >
              <path
                fillRule="evenodd"
                d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                clipRule="evenodd"
              />
            </svg>
                      
            <input
              className="w-full lg:w-[394px] bg-white placeholder:text-[#546874]-400 text-subprimary-700 text-sm border border-slate-200 rounded-md pl-10 pr-3 py-2 
                          transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow text-xl h-10"
              placeholder="Tap here to search"
            />
          </div>

          <div>
            <button
              className="rounded-md bg-white py-1 px-4 border border-transparent text-center text-sm text-subprimary transition-all shadow-md 
                  hover:shadow-lg 
                  focus:bg-subprimary focus:shadow-none focus:text-white  
                  active:bg-subprimary active:text-white 
                  hover:bg-subprimary hover:text-white 
                  active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2 text-xl font-medium"
              type="button">
              Search
            </button>
          </div>

        </div>


      </div>
    </div>
  )
}

export default SearchBar