import React from 'react'
import { useLoaderData } from 'react-router-dom'
import TabBar from '../../component/tab/TabBar'

function JS() {
  const loader = useLoaderData()
  const html = decodeURI(loader.html)
  return (
    <div>
      <div className="w-full">
        <div className="border-b-2 border-gray-700 flex justify-between items-center">
          <h1 className="ml-4 text-lg">Preview</h1>
          <div className="grid grid-cols-6 w-96">
            {/* <PriviewTab element={loader?.[0]} /> */}
            <TabBar element={loader} border_l={'border-l'} />
          </div>
        </div>
        <div className="p-4 ">
          <>
            <iframe
              title={'uniqueTitle'}
              srcDoc={html}
              className="w-full h-full"
              frameBorder="0"
            ></iframe>
          </>
        </div>
      </div>
    </div>
  )
}

export default JS
