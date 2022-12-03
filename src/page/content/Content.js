import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { useLoaderData } from 'react-router-dom'
import ElementsCard from '../../component/card/ElementsCard'
import { USE_ELEMENT } from '../../context/UseContextForElements'

function Content() {
  const [elements, setElements] = useState([])
  const { get_category, set_category, get_sub_elements } = useContext(
    USE_ELEMENT,
  )

  const get_all_elemetns = useLoaderData()
  useEffect(() => {
    if (get_sub_elements.length >= 1) {
      setElements(get_sub_elements)
    } else {
      setElements(get_all_elemetns)
    }
  }, [get_sub_elements, get_all_elemetns])

  return (
    <div className="w-full">
      <div className="py-3 border-b-2 border-gray-700">
        <h1 className="ml-4 text-lg">Elementes</h1>
      </div>
      <div className="grid grid-cols-4 p-4 gap-4">
        {get_all_elemetns?.map((e) => (
          <ElementsCard key={e._id} element={e} from="content" />
        ))}
      </div>
    </div>
  )
}

export default Content
