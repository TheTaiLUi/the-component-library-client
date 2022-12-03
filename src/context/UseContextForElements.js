import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { createContext } from 'react'

export const USE_ELEMENT = createContext()

function UseContextForElements({ children }) {
  // get category
  const [get_category, set_category] = useState([])
  const [get_sub_elements, set_sub_elements] = useState([])

  //   get all sub elements by category id
  useEffect(() => {
    if (get_category._id) {
      const fetch_load = async () => {
        const fetch_data = await fetch(
          `http://localhost:5000/get-elements-by-query/v1?category_id=${get_category?._id}`,
        )
        const data = await fetch_data.json()
        set_sub_elements(data)
      }
      fetch_load()
    }
  }, [get_category])

  const value = {
    get_category,
    set_category,
    get_sub_elements,
  }
  return <USE_ELEMENT.Provider value={value}>{children}</USE_ELEMENT.Provider>
}

export default UseContextForElements
