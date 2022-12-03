import React from 'react'
import { useLoaderData } from 'react-router-dom'
import ElementsCard from '../../component/card/ElementsCard'

function Elements() {
  const load_data = useLoaderData()

  return (
    <div className="w-full">
      <div className="py-3 border-b-2 border-gray-700">
        <h1 className="ml-4 text-lg capitalize">
          {load_data?.[0]?.category_name}{' '}
          {load_data.length > 1 ? 'Elements' : 'Element'}
        </h1>
      </div>
      <div className="grid grid-cols-4 p-4 gap-4">
        {load_data?.map((e) => (
          <ElementsCard key={e._id} element={e} from="home" />
        ))}
      </div>
    </div>
  )
}

export default Elements
