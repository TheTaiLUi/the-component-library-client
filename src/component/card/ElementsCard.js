import React from 'react'
import { Link } from 'react-router-dom'
import TabBar from '../tab/TabBar'

function ElementsCard({ element }) {
  return (
    <article className="rounded border border-gray-700 bg-gray-800 shadow">
      <div className="border-b border-gray-700">
        <div className="grid grid-cols-6">
          <TabBar element={element} />
        </div>
      </div>
      {/* imgaes  */}
      <Link to={`preview/${element._id}`}>
        <div className="p-4">
          <img
            src={element.feture_img}
            className="w-full max-h-60 object-cover rounded"
            alt=""
          />
        </div>
      </Link>
    </article>
  )
}

export default ElementsCard
