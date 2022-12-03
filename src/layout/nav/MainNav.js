import React from 'react'
import { Link } from 'react-router-dom'

function MainNav() {
  return (
    <div className="py-3 shadow border-b-2 border-gray-700">
      <div className="container mx-auto max-w-[1850px]">
        <Link to="/" className="text-2xl font-bold text-slate-50">
          The UI
        </Link>
      </div>
    </div>
  )
}

export default MainNav
