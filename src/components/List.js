import React, { useEffect, useState } from 'react'

function List({getItems}) {
    const [items, setItems] = useState([]);
    useEffect(() => {
        setItems(getItems());
    }, [getItems])
  return items.map(item => 
    <div>{item}</div>
  )
}

export default List