import React, { useEffect, useState } from 'react'

function CountSidebarItems({ category_id }) {
  const [count, setCount] = useState([])

  useEffect(() => {
    if (category_id) {
      fetch(
        `http://localhost:5000/get-elements-by-query/v1?category_id=${category_id}`,
      )
        .then((r) => r.json())
        .then((data) => {
          setCount(data)
        })
        .catch((er) => console.log(er))
    }
  }, [category_id])

  return <span className="mr-3">{count.length}</span>
}

export default CountSidebarItems
