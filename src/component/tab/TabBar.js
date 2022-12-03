import React from 'react'
import { Link } from 'react-router-dom'

function TabBar({ element, border_l }) {
  return (
    <>
      <Link
        to={`/preview/${element._id}`}
        className={`flex justify-center py-2 hover:bg-gray-900 items-center w-full border-gray-700 ${border_l}`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      </Link>
      <button className="border-l flex justify-center py-2 hover:bg-gray-900 items-center w-full border-gray-700">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"
          />
        </svg>
      </button>
      <Link
        to={`/html/${element._id}`}
        className="border-l flex justify-center py-2 hover:bg-gray-900 items-center w-full border-gray-700"
      >
        <span>Html</span>
      </Link>
      <Link
        to={`/css/${element._id}`}
        className="border-l flex justify-center py-2 hover:bg-gray-900 items-center w-full border-gray-700"
      >
        <span>CSS</span>
      </Link>
      <Link
        to={`/js/${element._id}`}
        className="border-l flex justify-center py-2 hover:bg-gray-900 items-center w-full border-gray-700"
      >
        <span>Js</span>
      </Link>
      <Link
        to={`/js/${element._id}`}
        className="border-l flex justify-center py-2 hover:bg-gray-900 items-center w-full border-gray-700"
      >
        <span>Jsx</span>
      </Link>
    </>
  )
}

export default TabBar
