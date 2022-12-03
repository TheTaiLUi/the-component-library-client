import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { USE_ELEMENT } from '../../context/UseContextForElements'
import GetAllCategory from '../../hooks/GetAllCategory'
import CountSidebarItems from './CountSidebarItems'

function Sidebar() {
  const { get_category, set_category } = useContext(USE_ELEMENT)
  const { category, isLoading, refetch } = GetAllCategory()

  return (
    <div className="sidebar_custom_css flex flex-col w-64 pr-4 py-8 bg-white border-r-2 dark:bg-slate-900 dark:border-gray-700">
      <div className="relative">
        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
          <svg
            className="w-5 h-5 text-gray-400"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </span>

        <input
          type="text"
          className="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
          placeholder="Search"
        />
      </div>

      <div className="flex flex-col justify-between flex-1 mt-6">
        <nav>
          {/* <button
            onClick={() => set_category({})}
            className="text-xl flex capitalize w-full bg-slate-800 items-center px-1 py-3 mt-3 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
          >
            <div className="flex justify-between items-center w-full">
              <span className="ml-3">All </span>
            </div>
          </button> */}
          {category?.map((e) => (
            <Link
              to={`elements/${e._id}`}
              key={e._id}
              onClick={() => set_category(e)}
              className="text-xl flex capitalize w-full bg-slate-800 items-center px-1 py-3 mt-3 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
            >
              <div className="flex justify-between items-center w-full">
                <span className="ml-3">{e.name}</span>
                <CountSidebarItems category_id={e._id} />
              </div>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  )
}

export default Sidebar
