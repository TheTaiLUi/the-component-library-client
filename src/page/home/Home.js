import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../sidebar/Sidebar'

function Home() {
  return (
    <div className="container mx-auto max-w-[1850px] flex text-slate-50">
      <div>
        <Sidebar />
      </div>
      <div className="flex-grow border-r-2 border-gray-700">
        <Outlet />
      </div>
    </div>
  )
}

export default Home
